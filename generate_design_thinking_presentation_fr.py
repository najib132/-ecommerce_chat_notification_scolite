from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE

# Color palette (blue, white, yellow, dark text)
COLOR_BLUE = RGBColor(0x1A, 0x73, 0xE8)   # #1A73E8
COLOR_YELLOW = RGBColor(0xFD, 0xD8, 0x35) # #FDD835
COLOR_WHITE = RGBColor(0xFF, 0xFF, 0xFF)  # #FFFFFF
COLOR_DARK = RGBColor(0x16, 0x1C, 0x24)   # #161C24
COLOR_LIGHT_TEXT = RGBColor(0x55, 0x65, 0x73)  # muted grey for secondary text

SLIDE_WIDTH_IN = 13.333  # default 16:9 width in inches for python-pptx
SLIDE_HEIGHT_IN = 7.5

FONT_PRIMARY = "Open Sans"  # will fall back to default if not available


def add_header_bar(slide, section_name: str):
    shapes = slide.shapes
    width = Inches(SLIDE_WIDTH_IN)
    # Thin blue bar
    header = shapes.add_shape(
        MSO_SHAPE.RECTANGLE,
        Inches(0), Inches(0), width, Inches(0.28)
    )
    header.fill.solid()
    header.fill.fore_color.rgb = COLOR_BLUE
    header.line.fill.background()

    # Section name text on the left
    tx_box = shapes.add_textbox(Inches(0.4), Inches(0.05), Inches(8.0), Inches(0.2))
    tf = tx_box.text_frame
    tf.clear()
    p = tf.paragraphs[0]
    run = p.add_run()
    run.text = section_name
    run.font.name = FONT_PRIMARY
    run.font.size = Pt(12)
    run.font.bold = True
    run.font.color.rgb = COLOR_WHITE

    # Yellow accent circle on the right
    circle = shapes.add_shape(
        MSO_SHAPE.OVAL,
        Inches(SLIDE_WIDTH_IN - 0.6), Inches(0.05), Inches(0.35), Inches(0.35)
    )
    circle.fill.solid()
    circle.fill.fore_color.rgb = COLOR_YELLOW
    circle.line.fill.background()


def add_footer_number(slide, number: int):
    tx_box = slide.shapes.add_textbox(
        Inches(SLIDE_WIDTH_IN - 1.0), Inches(SLIDE_HEIGHT_IN - 0.5), Inches(0.9), Inches(0.3)
    )
    tf = tx_box.text_frame
    tf.clear()
    p = tf.paragraphs[0]
    p.alignment = PP_ALIGN.RIGHT
    run = p.add_run()
    run.text = str(number)
    run.font.name = FONT_PRIMARY
    run.font.size = Pt(12)
    run.font.color.rgb = COLOR_LIGHT_TEXT


def add_visual_accent(slide, variant: int):
    # Minimalist geometric accent varying with variant index
    shapes = slide.shapes
    x = Inches(SLIDE_WIDTH_IN - 3.2)
    y = Inches(1.4)
    w = Inches(2.6)
    h = Inches(1.6)

    if variant % 3 == 0:
        shape = shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y, w, h)
        shape.fill.solid()
        shape.fill.fore_color.rgb = COLOR_BLUE
        shape.line.color.rgb = COLOR_BLUE
    elif variant % 3 == 1:
        shape = shapes.add_shape(MSO_SHAPE.CHEVRON, x, y, w, h)
        shape.fill.solid()
        shape.fill.fore_color.rgb = COLOR_YELLOW
        shape.line.color.rgb = COLOR_YELLOW
    else:
        shape = shapes.add_shape(MSO_SHAPE.OVAL, x + Inches(0.3), y, w - Inches(0.6), h)
        shape.fill.solid()
        shape.fill.fore_color.rgb = COLOR_BLUE
        shape.line.color.rgb = COLOR_BLUE

    # Small overlay circle
    circ = shapes.add_shape(MSO_SHAPE.OVAL, x + Inches(0.2), y + Inches(0.2), Inches(0.45), Inches(0.45))
    circ.fill.solid()
    circ.fill.fore_color.rgb = COLOR_WHITE
    circ.line.color.rgb = COLOR_YELLOW



def add_content_slide(prs: Presentation, section: str, title: str, idea: str, text: str, number: int):
    slide = prs.slides.add_slide(prs.slide_layouts[6])  # blank layout
    add_header_bar(slide, section)

    # Title
    title_box = slide.shapes.add_textbox(Inches(0.7), Inches(0.9), Inches(10.5), Inches(1.0))
    tf_title = title_box.text_frame
    tf_title.clear()
    p = tf_title.paragraphs[0]
    p.alignment = PP_ALIGN.LEFT
    run = p.add_run()
    run.text = title
    run.font.name = FONT_PRIMARY
    run.font.size = Pt(34)
    run.font.bold = True
    run.font.color.rgb = COLOR_DARK

    # Main idea
    idea_box = slide.shapes.add_textbox(Inches(0.7), Inches(1.8), Inches(8.5), Inches(0.8))
    tf_idea = idea_box.text_frame
    tf_idea.clear()
    p2 = tf_idea.paragraphs[0]
    p2.alignment = PP_ALIGN.LEFT
    run2 = p2.add_run()
    run2.text = idea
    run2.font.name = FONT_PRIMARY
    run2.font.size = Pt(20)
    run2.font.bold = True
    run2.font.color.rgb = COLOR_BLUE

    # Body text
    body_box = slide.shapes.add_textbox(Inches(0.7), Inches(2.5), Inches(8.5), Inches(3.8))
    tf_body = body_box.text_frame
    tf_body.clear()
    pb = tf_body.paragraphs[0]
    pb.alignment = PP_ALIGN.LEFT
    runb = pb.add_run()
    runb.text = text
    runb.font.name = FONT_PRIMARY
    runb.font.size = Pt(16)
    runb.font.color.rgb = COLOR_DARK

    # Visual accent
    add_visual_accent(slide, number)

    # Footer slide number
    add_footer_number(slide, number)



def add_title_slide(prs: Presentation, main_title: str, subtitle: str, name: str):
    slide = prs.slides.add_slide(prs.slide_layouts[6])  # blank layout

    # Background: white with large blue band and yellow accent
    shapes = slide.shapes
    band = shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(2.4), Inches(SLIDE_WIDTH_IN), Inches(2.2))
    band.fill.solid()
    band.fill.fore_color.rgb = COLOR_BLUE
    band.line.fill.background()

    accent = shapes.add_shape(MSO_SHAPE.ISOSCELES_TRIANGLE, Inches(SLIDE_WIDTH_IN - 4.0), Inches(2.2), Inches(3.2), Inches(1.8))
    accent.fill.solid()
    accent.fill.fore_color.rgb = COLOR_YELLOW
    accent.line.fill.background()

    # Title
    title_box = shapes.add_textbox(Inches(0.9), Inches(1.3), Inches(10.5), Inches(1.6))
    tf = title_box.text_frame
    tf.clear()
    p = tf.paragraphs[0]
    p.alignment = PP_ALIGN.LEFT
    run = p.add_run()
    run.text = main_title
    run.font.name = FONT_PRIMARY
    run.font.size = Pt(46)
    run.font.bold = True
    run.font.color.rgb = COLOR_DARK

    # Subtitle
    sub_box = shapes.add_textbox(Inches(0.9), Inches(2.5), Inches(9.5), Inches(1.0))
    tf2 = sub_box.text_frame
    tf2.clear()
    p2 = tf2.paragraphs[0]
    run2 = p2.add_run()
    run2.text = subtitle
    run2.font.name = FONT_PRIMARY
    run2.font.size = Pt(22)
    run2.font.color.rgb = COLOR_WHITE

    # Name
    name_box = shapes.add_textbox(Inches(0.9), Inches(3.35), Inches(9.5), Inches(0.8))
    tf3 = name_box.text_frame
    tf3.clear()
    p3 = tf3.paragraphs[0]
    run3 = p3.add_run()
    run3.text = name
    run3.font.name = FONT_PRIMARY
    run3.font.size = Pt(18)
    run3.font.color.rgb = COLOR_WHITE


# Content definitions
intro = [
    ("Qu’est-ce que le Design Thinking ?", "Une approche d’innovation centrée sur l’humain.",
     "Le Design Thinking est une démarche structurée pour résoudre des problèmes complexes en partant des besoins, motivations et contextes réels des utilisateurs. Il combine empathie, créativité, expérimentation et itérations rapides pour concevoir des solutions à forte valeur."),
    ("Origines et histoire", "IDEO, Stanford d.school, Hasso Plattner, Tim Brown.",
     "Popularisé par IDEO et Tim Brown, le Design Thinking trouve ses racines dans le design industriel et l’ergonomie. La d.school de Stanford et la HPI School of Design Thinking ont contribué à le diffuser dans les organisations et les secteurs publics."),
    ("Philosophie centrale", "Comprendre avant de concevoir.",
     "La philosophie met l’empathie au premier plan. Elle valorise la compréhension profonde des utilisateurs, la pluridisciplinarité, la co‑création et l’itération continue afin d’aligner désirabilité, faisabilité et viabilité."),
    ("Objectifs clés", "Innover utilement et durablement.",
     "L’objectif est d’identifier le vrai problème, générer un large éventail d’idées, prototyper rapidement et tester pour réduire les risques, accélérer l’apprentissage et bâtir des solutions pertinentes et pérennes."),
    ("Comparaison aux méthodes traditionnelles", "D’un modèle linéaire à un modèle itératif.",
     "Contrairement aux approches séquentielles, le Design Thinking alterne divergence et convergence. Il favorise l’expérimentation et accepte l’incertitude, là où les méthodes classiques exigent des exigences figées et des cycles longs."),
    ("Complémentarité avec Agile et Lean", "Des boucles d’apprentissage compatibles.",
     "Le Design Thinking s’intègre avec Agile (exécution itérative) et Lean Startup (expériences mesurées). Ensemble, ils réduisent le time‑to‑market et augmentent l’adéquation produit‑marché."),
    ("Trois piliers de valeur", "Désirabilité, faisabilité, viabilité.",
     "Une solution de qualité équilibre ce que veulent les utilisateurs (désirabilité), ce qui est techniquement possible (faisabilité) et ce qui est économiquement soutenable (viabilité)."),
    ("Quand l’utiliser ?", "Ambiguïté élevée, enjeux humains, innovation.",
     "Idéal pour les problèmes mal définis, les services à forte interaction humaine, les parcours clients fragmentés et les transformations où la compréhension du terrain est déterminante."),
]

empathie = [
    ("Empathie : comprendre le contexte", "Observer l’expérience réelle.",
     "L’empathie implique d’immerger l’équipe dans le contexte d’usage. L’observation in situ révèle des besoins latents, des contournements et des points de douleur invisibles dans les questionnaires."),
    ("Interviews utilisateurs", "Des conversations guidées, non directives.",
     "Les entretiens semi‑directifs explorent motivations, émotions et contraintes. Ils privilégient des questions ouvertes, des relances, et des exemples concrets pour éviter les réponses hypothétiques."),
    ("Shadowing et observation", "Suivre l’utilisateur en action.",
     "Le shadowing consiste à observer silencieusement l’utilisateur pendant qu’il réalise ses tâches. Il permet d’identifier les écarts entre discours et pratique."),
    ("Journaux de bord et diary studies", "Collecter des données longitudinales.",
     "Les journaux de bord documentent l’expérience sur plusieurs jours/semaines, révélant des patterns, des cycles et des contraintes contextuelles (heures, lieux, outils)."),
    ("Carte d’empathie", "Voir, dire, faire, ressentir.",
     "La carte d’empathie synthétise ce que l’utilisateur dit et fait, ce qu’il voit et entend, et ce qu’il pense et ressent. Elle alimente la définition d’insights actionnables."),
    ("Utilisateurs extrêmes", "Explorer les extrêmes pour inspirer.",
     "Impliquer des profils extrêmes (experts, novices, contraints) met en lumière des besoins saillants et des solutions originales transposables au plus grand nombre."),
    ("Biais et éthique", "Neutraliser les biais, protéger la vie privée.",
     "Limiter les biais de confirmation, d’autorité ou de désirabilité sociale. Obtenir le consentement éclairé, anonymiser les données et respecter la confidentialité."),
    ("Co‑recherche et ateliers", "Impliquer les parties prenantes.",
     "Ateliers avec utilisateurs, métiers et techniques pour partager les observations, prioriser les opportunités et créer une compréhension partagée du terrain."),
    ("Synthèse rapide de terrain", "Transformer les notes en insights.",
     "Regrouper les observations par thèmes, repérer tensions et opportunités, formuler des enseignements clairs étayés par des preuves."),
    ("Exemple : Airbnb (début)", "Observer pour débloquer la croissance.",
     "Les fondateurs ont observé les hôtes et voyageurs, découvrant que des photos de meilleure qualité changeaient l’expérience. Cette empathie a conduit à des améliorations décisives."),
    ("Livrables d’empathie", "Notes, verbatims, photos, artefacts.",
     "Un corpus riche (citations, schémas, captures) garantit la traçabilité des insights et nourrit les étapes suivantes."),
]

definir = [
    ("Définir : recadrer le problème", "Formuler le vrai besoin.",
     "À partir des insights, on cadre le problème sous forme d’un point de vue clair. Le cadrage guide l’idéation et évite de résoudre un symptôme au lieu de la cause racine."),
    ("Insights et preuves", "Des constats étayés, pas des opinions.",
     "Un insight combine observation, contexte et intention. Il doit être sourcé, précis et relié à des comportements réels."),
    ("Énoncé de point de vue (POV)", "Pour [utilisateur], nous avons observé...", 
     "Le POV synthétise l’utilisateur cible, son besoin et les enseignements clés. Il sert de boussole pour générer des idées pertinentes."),
    ("Questions ‘How Might We…?’", "Ouvrir l’espace des possibles.",
     "Les HMW transforment des irritants en opportunités. Ils doivent être suffisamment ciblés pour guider, assez ouverts pour inspirer."),
    ("Tri d’affinités", "Regrouper pour révéler des thèmes.",
     "On regroupe post‑its et verbatims par similarité pour faire émerger des thèmes, tensions et hiérarchies d’opportunités."),
    ("Personas", "Archetypes basés sur des données.",
     "Les personas représentent des segments d’utilisateurs, avec objectifs, comportements, freins et contextes. Ils restent vivants et révisés selon les données."),
    ("Journey map", "Cartographier l’expérience de bout en bout.",
     "La journey map trace étapes, émotions, canaux, moments de vérité et irritants. Elle priorise où agir pour maximiser l’impact."),
    ("5 Pourquoi et causes racines", "Remonter du symptôme à la cause.",
     "La technique des 5 Pourquoi aide à identifier la racine d’un problème, évitant des solutions superficielles."),
    ("Critères de succès", "Définir les résultats attendus.",
     "Des critères clairs (KPI, comportementaux, satisfaction) permettent d’évaluer les idées et de guider les expérimentations ultérieures."),
    ("Cadres de priorisation", "Impact x Effort, valeur x risque.",
     "Les matrices de priorisation orientent l’allocation de ressources et la feuille de route des prototypes."),
    ("Exemple de cadrage", "De ‘plus de fonctionnalités’ à ‘moins d’efforts’.",
     "Redéfinir un besoin comme la réduction de l’effort utilisateur, plutôt que l’ajout de fonctionnalités, change radicalement les solutions envisagées."),
]

ideation = [
    ("Idéation : diverger puis converger", "Générer sans juger, puis sélectionner.",
     "On sépare les temps : génération d’un grand volume d’idées, puis sélection basée sur des critères explicites. Cette alternance évite l’autocensure et favorise l’originalité."),
    ("Règles de brainstorming", "Quantité avant qualité, pas de jugement.",
     "Encourager des idées folles, rebondir sur celles des autres, visualiser, limiter le temps de parole et utiliser un facilitateur neutre."),
    ("Brainwriting 6‑3‑5", "6 personnes, 3 idées, 5 minutes.",
     "Format écrit qui réduit l’influence sociale et accélère la variété. Chacun enrichit les idées des autres en itérations rapides."),
    ("SCAMPER", "Substituer, Combiner, Adapter, Modifier, Proposer d’autres usages, Éliminer, Réarranger.",
     "SCAMPER pousse à reconfigurer des concepts existants pour créer des solutions inédites et pragmatiques."),
    ("Six chapeaux de Bono", "Explorer les angles de vue.",
     "Les chapeaux structurent la pensée (faits, émotions, risques, bénéfices, créativité, processus) pour balayer l’espace des possibles sans conflit."),
    ("Crazy 8s", "8 esquisses en 8 minutes.",
     "Un exercice rapide d’esquisse qui force la sortie de la première idée et favorise l’exploration visuelle."),
    ("Combinaisons et mashups", "Composer des idées pour créer de la valeur.",
     "La recombinaison d’idées hétérogènes produit souvent des solutions puissantes et différenciantes."),
    ("Critères et vote par points", "Sélectionner de façon transparente.",
     "Définir des critères (impact, faisabilité, différenciation) et utiliser le dot voting pour converger rapidement."),
    ("Storyboard et scénarios", "Donner vie aux concepts.",
     "Raconter l’usage en séquences permet d’identifier les trous et d’aligner l’équipe avant le prototypage."),
    ("Contraintes bénéfiques", "La créativité naît des limites.",
     "Temps, budget, matériel limité : les contraintes aiguillent l’imagination et évitent la dispersion."),
    ("Exemples d’idéation réussie", "De l’intuition au concept testable.",
     "Des équipes transforment des intuitions en concepts testables en 1‑2 jours grâce à des ateliers bien facilités."),
]

prototypage = [
    ("Prototyper : rendre tangible", "Rapprocher l’idée de la réalité.",
        "Un prototype matérialise une hypothèse pour l’apprendre vite. Il peut être un croquis, une maquette papier, un clic‑prototype ou une mise en scène de service."),
    ("Niveaux de fidélité", "De basse à haute fidélité.",
        "Commencer bas pour apprendre vite et pas cher, puis augmenter la fidélité à mesure que l’on réduit l’incertitude et affermit le concept."),
    ("Prototypes papier", "Rapides, économiques, parlants.",
        "Idéals pour l’interface et les parcours. Ils favorisent la co‑conception et la critique constructive sans s’attacher au détail visuel."),
    ("Wireframes et maquettes", "Structurer l’information et les écrans.",
        "Les wireframes fixent l’architecture, les maquettes explorent le rendu visuel. On gagne en clarté avant d’investir en développement."),
    ("Clic‑prototypes (Figma)", "Simuler l’interaction.",
        "Des prototypes interactifs (Figma, FigJam) permettent d’évaluer les flux, micro‑interactions et états vides avec de vrais utilisateurs."),
    ("Services et jeux de rôle", "Prototyper l’invisible.",
        "Jeux de rôle, scripts, artefacts physiques et back‑office simulé rendent testable une expérience de service bout en bout."),
    ("Wizard of Oz", "Simuler l’automatisation.",
        "Derrière une interface ‘automatique’, une personne exécute le service. Utile pour tester la désirabilité avant d’industrialiser."),
    ("Blueprint de service", "Visualiser front et back.",
        "Le service blueprint montre actions visibles, coulisses, supports et preuves matérielles, révélant dépendances et goulots d’étranglement."),
    ("Mesurer l’apprentissage", "Hypothèses, métriques, décisions.",
        "Pour chaque prototype, expliciter l’hypothèse, la mesure attendue et la décision (pivoter, persévérer, arrêter)."),
    ("Pièges à éviter", "Beauté vs. apprentissage.",
        "Ne pas sur‑investir trop tôt dans l’esthétique. Prioriser la capacité d’apprentissage et la vitesse d’itération."),
    ("Exemples d’outils", "Figma, Miro, papier, carton, 3D.",
        "Choisir l’outil le plus rapide et réversible pour l’objectif d’apprentissage visé."),
]

test = [
    ("Tester : confronter au réel", "Valider avec de vrais utilisateurs.",
        "On confronte les prototypes à des utilisateurs représentatifs. L’objectif est de recueillir des retours honnêtes et de détecter frictions, incompréhensions et opportunités."),
    ("Préparer le protocole", "Objectifs, scripts, scénarios.",
        "Définir les tâches, consignes et critères d’évaluation. Prévoir des consentements et des enregistrements si nécessaire."),
    ("Méthode ‘penser à voix haute’", "Accéder au raisonnement.",
        "Inviter l’utilisateur à verbaliser ses pensées pendant l’usage met en lumière ses modèles mentaux et ses attentes."),
    ("Tests modérés / non modérés", "Présence d’un facilitateur ou à distance.",
        "Adapter le format selon les contraintes. Les tests à distance permettent de recruter plus vite et moins cher."),
    ("A/B testing (plus tard)", "Comparer des variantes.",
        "Quand on a déjà de la traction, l’A/B testing mesure l’effet marginal de variantes sur des métriques cibles."),
    ("Mesures et critères", "Succès de tâche, SUS, NPS, temps.",
        "Quantifier la réussite, le temps, la satisfaction et les verbatims. Croiser qualitatif et quantitatif pour décider."),
    ("Synthèse des retours", "Thèmes, priorités, décisions.",
        "Regrouper les retours, prioriser selon l’impact et l’effort, décider des prochaines itérations."),
    ("Itérer rapidement", "Boucles courtes d’amélioration.",
        "Appliquer les enseignements immédiatement sur le prototype. Plus la boucle est courte, plus l’apprentissage est grand."),
    ("Éviter les biais de test", "Ne pas guider, ne pas défendre.",
        "Poser des questions neutres, accepter la critique, et observer plus que convaincre."),
    ("Taille d’échantillon", "5 à 8 utilisateurs suffisent souvent.",
        "Les premiers tests détectent la majorité des gros problèmes. Inutile d’attendre la perfection avant d’avancer."),
    ("Boucle d’amélioration continue", "Tester‑apprendre‑ajuster.",
        "Mettre en place un rythme régulier de tests pour ancrer l’apprentissage dans la culture d’équipe."),
]

why_powerful = [
    ("Pourquoi le Design Thinking ?", "Créer de la valeur centrée utilisateur.",
     "Il ancre l’innovation dans des besoins réels, réduit l’incertitude, et aligne les équipes autour d’un objectif commun : améliorer l’expérience et l’impact."),
    ("Avantage : réduction des risques", "Tester tôt, corriger tôt.",
     "Prototyper et tester en amont évite des investissements coûteux dans de mauvaises directions et sécurise la feuille de route."),
    ("Avantage : accélération du time‑to‑learn", "Apprendre avant de scaler.",
     "En privilégiant l’apprentissage, on identifie vite ce qui compte. Le scaling repose sur des preuves, pas des suppositions."),
    ("Culture d’empathie", "Comprendre les personnes avant les chiffres.",
     "L’empathie développe une vision nuancée des usages et nourrit des décisions plus humaines et pertinentes."),
    ("Collaboration multidisciplinaire", "Croiser expertises et regards.",
     "Mettre ensemble design, technique, métier et data produit des solutions plus robustes et réalistes."),
    ("Alignement stratégique", "De la vision aux opérations.",
     "Le Design Thinking relie stratégie, expérience et exécution. Il rend la vision tangible et mesurable."),
    ("Avant / Après (1)", "Avant : exigences figées; Après : itérations.",
     "Les organisations passent de cycles longs et risqués à des boucles courtes basées sur des retours concrets."),
    ("Avant / Après (2)", "Avant : opinions; Après : données d’usage.",
     "Les décisions s’appuient sur des observations et tests, non sur l’HiPPO (Highest Paid Person’s Opinion)."),
    ("Cas : Airbnb", "Empathie et photographie.",
     "En améliorant la qualité visuelle et la confiance, la plateforme a débloqué croissance et rétention."),
    ("Cas : Apple", "Simplicité et cohérence.",
     "Le soin apporté à l’expérience utilisateur, du matériel au logiciel, illustre l’intégration design‑tech‑business."),
    ("Cas : IBM", "Enterprise Design Thinking.",
     "IBM a industrialisé la démarche à l’échelle, mesurant l’impact sur la satisfaction et la productivité des équipes."),
    ("Cas : Google", "Design Sprint et expérimentation.",
     "Le Design Sprint condense exploration, prototypage et test en 5 jours pour aligner et décider vite."),
    ("Impact organisationnel", "Meilleur NPS, adoption, rétention.",
     "Les organisations constatent une amélioration de la satisfaction, de l’adoption produit et de la vitesse d’exécution."),
    ("Portefeuille d’innovation", "Gérer horizons et paris.",
     "La démarche aide à équilibrer quick wins, améliorations incrémentales et ruptures calculées."),
    ("Mesurer le ROI", "Hypothèses, métriques, trace.",
     "Associer chaque expérimentation à une hypothèse et un KPI clarifie la valeur créée et oriente l’investissement."),
    ("Conditions de succès", "Sponsoring, temps, compétences.",
     "Le soutien de la direction, des faciliteurs formés et du temps dédié sont indispensables pour ancrer la pratique."),
    ("Écueils fréquents", "Théâtre de l’innovation, POC éternel.",
     "Éviter la sur‑communication sans apprentissage, clarifier les décisions après test, relier au delivery."),
    ("Passer à l’échelle", "Standards, coaching, communautés.",
     "Pour diffuser, créer des modèles, des guildes, et mesurer l’adoption et les résultats."),
]

applications_general = [
    ("Panorama des applications", "Éducation, santé, technologie, services publics.",
     "Le Design Thinking s’adapte aux parcours apprenants, aux soins centrés patient, aux produits numériques et aux services citoyens, en tenant compte des contraintes réelles."),
    ("Exemples concrets", "De la salle de classe au guichet.",
     "Refonte d’un ENT, parcours de télésanté, onboarding logiciel, démarches administratives simplifiées : autant de terrains d’impact mesurable."),
]

# Deux études de cas x 5 diapositives chacune
case1 = [
    ("Cas 1 — Éducation : ENT inclusif", "Problème : faible engagement des élèves.",
     "Observation de classes, interviews d’enseignants et élèves révèlent une complexité d’accès et des parcours peu motivants."),
    ("Cas 1 — Empathie", "Comprendre les usages réels.",
     "Cartes d’empathie et journaux de bord montrent que la navigation mobile et l’accessibilité sont critiques."),
    ("Cas 1 — Idéation", "Co‑création avec enseignants/élèves.",
     "Ateliers SCAMPER et storyboards aboutissent à des micro‑parcours gamifiés et des notifications claires."),
    ("Cas 1 — Prototype & test", "Clic‑prototype mobile.",
     "Tests modérés confirment une meilleure compréhension des tâches et une baisse du temps d’accès."),
    ("Cas 1 — Résultats", "+25% d’usage hebdo, satisfaction en hausse.",
     "Adoption accrue, moins de demandes de support, et meilleure collaboration enseignants‑parents."),
]

case2 = [
    ("Cas 2 — Santé : télésuivi patient", "Problème : abandon après 1 mois.",
     "Entretiens et analyses révèlent anxiété, complexité d’inscription et manque de feedback utile."),
    ("Cas 2 — Empathie", "Profils extrêmes et aidants.",
     "Inclure aidants et patients âgés met en lumière des contraintes de motricité et d’accessibilité."),
    ("Cas 2 — Idéation", "Simplicité et réassurance.",
     "Brainwriting 6‑3‑5 et dot voting : parcours simplifié, messages rassurants, coaching asynchrone."),
    ("Cas 2 — Prototype & test", "Wizard of Oz du coaching.",
     "Un coach humain simule les messages automatiques. Les tests montrent une baisse de l’anxiété et un meilleur engagement."),
    ("Cas 2 — Résultats", "+18 pts de rétention à 60 jours.",
     "Amélioration des métriques cliniques et satisfaction patient, preuves pour industrialisation."),
]

outils = [
    ("Mind mapping", "Structurer et relier les idées.",
     "Le mind mapping facilite la divergence et la synthèse. Outils : XMind, Miro, FigJam, papier."),
    ("Empathy map & personas", "Ancrer la compréhension utilisateur.",
     "Empathy map et personas maintiennent l’équipe centrée sur les besoins et les contextes réels."),
    ("Journey map & blueprint", "Voir bout en bout.",
     "Ces cartes révèlent moments de vérité, goulots et opportunités d’amélioration, front vs back‑office."),
    ("Prototype canvas & outils", "Structurer hypothèses et tests.",
     "Le prototype canvas clarifie hypothèses/métriques. Outils : Figma, Miro, Notion pour documenter et partager."),
]

conclusion = [
    ("Conclusion — synthèse", "Du terrain à l’impact.",
     "Le Design Thinking aligne empathie, créativité et expérimentation pour livrer des solutions désirables, faisables et viables."),
    ("Message final", "« Innover, c’est comprendre avant de créer. »",
     "Faites de l’empathie un réflexe, expérimentez vite, apprenez sans relâche et partagez les preuves pour embarquer l’organisation."),
]


def build_presentation(output_path: str):
    prs = Presentation()

    # Title slide
    add_title_slide(
        prs,
        main_title="Le Design Thinking : une approche centrée sur l’humain pour innover",
        subtitle="Présentation complète",
        name="BOURKI MOHAMED",
    )

    slide_no = 1

    # Intro (8 slides) -> slides 2..9
    for t, i, txt in intro:
        slide_no += 1
        add_content_slide(prs, "Introduction", t, i, txt, slide_no)

    # Process steps — each 11 slides
    steps = [
        ("Étape 1 — Empathie", empathie),
        ("Étape 2 — Définir", definir),
        ("Étape 3 — Idéation", ideation),
        ("Étape 4 — Prototypage", prototypage),
        ("Étape 5 — Test", test),
    ]

    for section_name, items in steps:
        for t, i, txt in items:
            slide_no += 1
            add_content_slide(prs, section_name, t, i, txt, slide_no)

    # Why powerful (18 slides)
    for t, i, txt in why_powerful:
        slide_no += 1
        add_content_slide(prs, "Pourquoi c’est puissant", t, i, txt, slide_no)

    # Applications (12 slides total): 2 general + 5 + 5 from cases
    for t, i, txt in applications_general:
        slide_no += 1
        add_content_slide(prs, "Applications", t, i, txt, slide_no)

    for t, i, txt in case1:
        slide_no += 1
        add_content_slide(prs, "Étude de cas — Éducation", t, i, txt, slide_no)

    for t, i, txt in case2:
        slide_no += 1
        add_content_slide(prs, "Étude de cas — Santé", t, i, txt, slide_no)

    # Outils (4)
    for t, i, txt in outils:
        slide_no += 1
        add_content_slide(prs, "Outils & méthodes", t, i, txt, slide_no)

    # Conclusion (2)
    for t, i, txt in conclusion:
        slide_no += 1
        add_content_slide(prs, "Conclusion", t, i, txt, slide_no)

    # Save
    prs.save(output_path)
    return slide_no


if __name__ == "__main__":
    OUTPUT = "/workspace/Design_Thinking_Complet_FR.pptx"
    total = build_presentation(OUTPUT)
    print(f"Fichier généré: {OUTPUT}")
    print(f"Nombre de diapositives: {total}")
