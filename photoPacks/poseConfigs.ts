/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface PoseConfig {
    id: string; // Format: [StyleLetter][PoseNumber] (e.g., F1)
    category: string; // New: Descriptive category
    description: string;
    prompt: string;
}

export const poseConfigs: Record<string, PoseConfig> = {
    // --- Categoría: Favoritos (Estudio Creativo) ---
    // Style Letter: F
    FP1: { id: 'FP1', category: 'Pareja', description: 'Couple seated and standing', prompt: 'Vintage couple, woman standing, man seated' },
    FP2: { id: 'FP2', category: 'Retrato', description: 'Standing upright', prompt: 'Standing upright' },
    FP3: { id: 'FP3', category: 'Retrato', description: 'Sitting', prompt: 'Sitting' },
    FP4: { id: 'FP4', category: 'Retrato', description: 'Standing', prompt: 'Standing' },
    FP5: { id: 'FP5', category: 'Primer Plano', description: 'Close-up (Face focus)', prompt: 'Extreme Close-up (Emotion/Face focus)' },
    FP6: { id: 'FP6', category: 'Acción', description: 'Full Body Action Shot', prompt: 'Full Body Action Shot (Walking, Jumping, or posing dynamically)' },
    FP7: { id: 'FP7', category: 'Retrato', description: 'Candid Side Profile', prompt: 'Candid Side Profile (Looking away, "caught off guard")' },
    FP8: { id: 'FP8', category: 'Retrato', description: 'Low Angle / Power Pose', prompt: 'Low Angle / Power Pose (Dramatic perspective)' },
    // --- Categoría: Cinematic Portraits ---
    // Style Letter: C
    CP1: { id: 'CP1', category: 'Selfie', description: 'Selfie en Cama', prompt: 'The person is lying on a bed, holding their phone up for a relaxed selfie.' },
    CP2: { id: 'CP2', category: 'Selfie', description: 'Selfie en Espejo', prompt: 'The person is standing in front of a mirror, holding their phone to capture their reflection.' },
    CP3: { id: 'CP3', category: 'Selfie', description: 'Selfie Dinámica', prompt: 'The person is captured in a dynamic, slightly blurred selfie as if they were moving.' },
    CP4: { id: 'CP4', category: 'Retrato', description: 'Pose de Villano (Misteriosa)', prompt: 'The person is standing with a mysterious and intense expression, partially turned away from the camera.' },
    CP5: { id: 'CP5', category: 'Retrato', description: 'Pose Contrapicada', prompt: 'The person is captured from a low angle, looking down towards the camera with a commanding presence.' },
    CP6: { id: 'CP6', category: 'Profesional', description: 'Pose Profesional', prompt: 'The person is standing in a relaxed but professional posture, suitable for a corporate or lifestyle portrait.' },
    CP7: { id: 'CP7', category: 'Acción', description: 'Pose Dinámica (Movimiento)', prompt: 'The person is captured in a mid-action pose, as if they were moving or reacting to something off-camera.' },
    CP8: { id: 'CP8', category: 'Retrato', description: 'Pose Cinematográfica', prompt: 'The person is in a dramatic, thoughtful pose, looking away from the camera with a contemplative expression.' },
    CP9: { id: 'CP9', category: 'Retrato', description: 'Pose de Estudio Clásica', prompt: 'The person is in a standard, well-composed studio portrait pose.' },
    CP10: { id: 'CP10', category: 'Estudio', description: 'Pose Minimalista', prompt: 'The person is in a simple, clean pose against a plain background.' },
    CP11: { id: 'CP11', category: 'Retrato', description: 'Pose Masculina Elegante', prompt: 'The person is in a confident and refined masculine pose.' },
    CP12: { id: 'CP12', category: 'Retrato', description: 'Pose Femenina Cautivadora', prompt: 'The person is in a graceful and engaging feminine pose.' },
    CP13: { id: 'CP13', category: 'Retrato', description: 'Pose Futurista (Contemplativa)', prompt: 'The person is in a forward-looking, contemplative pose, as if looking into the future.' },
    CP14: { id: 'CP14', category: 'Urbano', description: 'Pose Urbana Relajada', prompt: 'The person is leaning against a wall or standing in a casual, urban-inspired pose.' },
    CP15: { id: 'CP15', category: 'Técnica', description: 'Pose de Ángulo Dramático', prompt: 'The person is positioned to emphasize a dramatic camera angle, such as a sharp tilt or low perspective.' },
    CP16: { id: 'CP16', category: 'Cándida', description: 'Pose Espontánea (Cándida)', prompt: 'The person is captured in a spontaneous, relaxed moment, looking slightly away from the camera with a natural, unposed smile.' },
    CP17: { id: 'CP17', category: 'Naturaleza', description: 'Pose de Interacción con Animal', prompt: 'The person is in a gentle, interactive pose as if they were carefully approaching or interacting with a wild animal.' },
    // --- Categoría: Character Design ---
    // Style Letter: CD
    CD1: { id: 'CD1', category: 'Character Design', description: 'NB2: Character Design Board', prompt: 'A high-definition, clean, minimalist character design board / character turnaround reference sheet, set against a pure white background.' },
    CD2: { id: 'CD2', category: 'Character Design', description: 'Hoja de Personaje NB2 (Turnaround)', prompt: 'Create a professional character reference sheet based strictly on the uploaded reference image. Use a clean, neutral plain background and present the sheet as a technical model turnaround.' },
    CD3: { id: 'CD3', category: 'Character Design', description: 'Hoja de Personaje (4 Paneles)', prompt: 'Photographic character reference sheet, multiple views, split image, 4 panels. [1] full body front view, [2] full body side profile view looking straight ahead, [3] full body back view looking straight ahead, [4] extreme close-up of face.' },
    CD4: { id: 'CD4', category: 'Character Design', description: 'Hoja de Personaje: Compuesto y Detalle', prompt: 'A professional high-resolution character design composite sheet on a clean white background, creating a seamless composition without borders or dividing lines.' },
    CD5: { id: 'CD5', category: 'Character Design', description: 'Hoja de Personaje: Vistas de Cuerpo', prompt: 'Create a character design sheet for the person in the photo. The sheet must be a single image containing three full-body views of the person on a clean, neutral light gray background: 1. A direct front view. 2. A 45-degree angle view. 3. A direct back view.' },
    CD6: { id: 'CD6', category: 'Character Design', description: 'Hoja de Personaje: Vistas de Cabeza', prompt: 'Create a character headshot sheet for the person in the photo. The sheet must be a single image containing three views of the person head and shoulders on a clean, neutral light gray background: 1. A direct front view. 2. A 45-degree angle view. 3. A direct back view.' },
    CD7: { id: 'CD7', category: 'Character Design', description: 'Hoja de Personaje: Expresiones', prompt: 'Create an emotion sheet for the character in the photo. The output must be a single image with a grid of six headshots of the same person against a clean, neutral light gray background. Each headshot should display a different emotion: happy, sad, angry, surprised, fearful, and neutral.' },
    CD8: { id: 'CD8', category: 'Character Design', description: 'Hoja de Personaje: Poses Dinámicas', prompt: 'Create a dynamic pose sheet for the character in the photo. The output must be a single image with a grid of four full-body views of the person against a clean, neutral light gray background. Each view should show the character in a different pose: 1. Walking. 2. Sitting on a simple stool. 3. A confident power pose. 4. A dynamic action pose (like jumping or kicking).' },
    // --- Categoría: Behind the Scenes ---
    // Style Letter: BS
    BS1: { id: 'BS1', category: 'Behind the Scenes', description: 'Ajustes de Último Minuto', prompt: 'Action, documentary-style. The person from the photo is on a professional photo shoot set. They are captured in a candid, friendly conversation with production assistants who are making final adjustments to their wardrobe, makeup, and hair.' },
    BS2: { id: 'BS2', category: 'Behind the Scenes', description: 'Charla con el Director', prompt: 'Action, documentary-style. The person from the photo is captured in an intimate, collaborative moment on a film set, either standing or sitting in classic folding studio chairs. They are in their full original costume but are wearing comfortable slippers, indicating a break between scenes.' },
    BS3: { id: 'BS3', category: 'Behind the Scenes', description: 'Revisando las Tomas', prompt: 'Action, documentary-style. The person from the photo is looking over the photographer\'s shoulder at the camera\'s display, both of them smiling at a successful shot.' },
    BS4: { id: 'BS4', category: 'Behind the Scenes', description: 'Descanso en el Set', prompt: 'Action, documentary-style. A candid shot of the person from the photo relaxing between takes. They are in their full original costume but have swapped their shoes for comfortable slippers.' },
    // --- Categoría: Creativity and Fun ---
    // Style Letter: CF
    CF1: { id: 'CF1', category: 'Creativity and Fun', description: 'Sosteniendo Teléfono hacia la Cámara', prompt: 'The person is standing and holding a smartphone close to the camera lens, as if showing something on the screen.' },
    CF2: { id: 'CF2', category: 'Creativity and Fun', description: 'Pose de Videojuego Retro', prompt: 'The person is in a classic side-scrolling video game idle pose, standing with a slight bounce and determined expression.' },
    CF3: { id: 'CF3', category: 'Creativity and Fun', description: 'Pose de Minifigura (Rígida)', prompt: 'The person is standing in a rigid, iconic toy figure pose, with arms slightly curved and legs straight.' },
    CF4: { id: 'CF4', category: 'Creativity and Fun', description: 'Pose de Figura Coleccionable', prompt: 'The person is standing in a simple, cute, and static pose with a large head and small body, typical of a vinyl collectible figure.' },
    CF5: { id: 'CF5', category: 'Creativity and Fun', description: 'Pose de Animación Stop-Motion', prompt: 'The person is in a slightly exaggerated and charming pose, with a handcrafted, sculpted appearance.' },
    CF6: { id: 'CF6', category: 'Creativity and Fun', description: 'Pose de Sticker (Recortada)', prompt: 'The person is in a simplified, iconic pose suitable for a graphic sticker, with a clear silhouette.' },
    CF7: { id: 'CF7', category: 'Creativity and Fun', description: 'Pose de Standee (Plana)', prompt: 'The person is standing in a flat, front-facing pose as if they were a life-sized cardboard cutout.' },
    CF8: { id: 'CF8', category: 'Creativity and Fun', description: 'Pose Lúdica (Interacción Imaginaria)', prompt: 'The person is in a playful, interactive pose, as if they were interacting with invisible or imaginary elements in their environment.' },
    CF9: { id: 'CF9', category: 'Creativity and Fun', description: 'Pose en Marco (Sentado)', prompt: 'The person is sitting in a relaxed pose, as if they were positioned inside a large, physical frame.' },
    CF10: { id: 'CF10', category: 'Creativity and Fun', description: 'Pose y Cara Graciosa', prompt: 'The user uploads one photo (Image A). Your task is to create a new image (Image B) in which: “only the main subject person’s pose and facial expression are changed into a very comedic, silly style,” while keeping everything else exactly the same.' },
    // --- Categoría: Expressions ---
    // Style Letter: EX
    EX1: { id: 'EX1', category: 'Expressions', description: 'Muecas Cómicas', prompt: 'A grid of 4 headshots showing: 1. Making a silly face with crossed eyes and tongue sticking out. 2. Pushing their nose up with a finger, scrunching their face comically. 3. A dramatic pout with exaggeratedly puffed-out cheeks. 4. Mouth wide open in a playful, fun scream or laugh.' },
    EX2: { id: 'EX2', category: 'Expressions', description: 'Muecas Tiernas (Kawaii) #1', prompt: 'A grid of 4 headshots showing: 1. A playful wink while slightly sticking out their tongue. 2. Gently puffing out cheeks like a cute hamster, looking innocent. 3. An adorable pout with a slightly worried expression, like a puppy. 4. Crinkling their nose cutely, as if smelling something sweet, with sparkling eyes.' },
    EX3: { id: 'EX3', category: 'Expressions', description: 'Muecas Tiernas (Kawaii) #2', prompt: 'A grid of 4 headshots showing: 1. A small, shy \'peace\' sign with fingers near their face, with a closed-mouth smile and slightly rosy cheeks. 2. Head tilted gently, making a \'chu\' (kiss) face with big, bright eyes. 3. Covering their mouth with both hands in a \'surprised but cute\' expression, with wide, innocent eyes. 4. Biting their lip slightly with a playful, mischievous smile, with eyes sparkling with mischief.' },
    EX4: { id: 'EX4', category: 'Expressions', description: 'Muecas Tiernas (Kawaii) #3', prompt: 'A grid of 4 headshots showing: 1. Holding a small, colorful macaron near their cheek with a wide, happy smile. 2. Making a small \'V\' (peace sign) with both hands under their chin, with a shy and sweet expression. 3. Gently blowing an imaginary kiss with their hand, with eyes softly closed. 4. Gently touching one cheek with an index finger, with a sweetly pensive expression.' },
    EX5: { id: 'EX5', category: 'Expressions', description: 'Expresiones con la Boca (Atrevido)', prompt: 'A grid of 4 headshots showing: 1. Playfully sticking their tongue out, with a silver hoop piercing in the tongue. 2. Sensually biting their lower lip. 3. Holding a red cherry lollipop in their mouth. 4. Blowing a large pink bubblegum bubble that is about to pop.' },
    EX6: { id: 'EX6', category: 'Expressions', description: 'Expresiones con la Boca (Alternativo)', prompt: 'A grid of 6 headshots showing: 1. Blowing a playful kiss towards the camera, lips slightly puckered. 2. Drinking a colorful cocktail with a straw, eyes looking up mischievously. 3. Biting into a ripe, juicy peach, with juice running down their chin. 4. Holding a single rose between their lips, with a thorn lightly touching their skin. 5. Whispering a secret, with a finger pressed lightly against their lips in a \'shhh\' gesture. 6. A subtle yawn, with one hand partially covering their mouth, showing a hint of sleepy eyes.' },
    // --- Categoría: Time Travel ---
    // Style Letter: TT
    TT1: { id: 'TT1', category: 'Time Travel', description: 'Pose de los Años 20 (Flapper)', prompt: 'The person is in an elegant and energetic pose typical of the 1920s jazz age, with a slight tilt of the head and a confident stance.' },
    TT2: { id: 'TT2', category: 'Time Travel', description: 'Pose Victoriana (Rígida)', prompt: 'The person is in a formal, rigid, and upright posture typical of 19th-century Victorian portraits, with a serious and dignified expression.' },
    TT3: { id: 'TT3', category: 'Time Travel', description: 'Pose Renacentista (Sfumato)', prompt: 'The person is in a soft, graceful, and slightly turned pose, reminiscent of a classical Renaissance portrait.' },
    TT4: { id: 'TT4', category: 'Time Travel', description: 'Pose Egipcia (Perfil)', prompt: 'The person is in a stylized, profile-oriented pose inspired by Ancient Egyptian art, with arms and head positioned in a formal manner.' },
    TT5: { id: 'TT5', category: 'Time Travel', description: 'Pose Romana (Estatuaria)', prompt: 'The person is in a dignified and statuesque pose, as if they were a citizen of the Roman Empire.' },
    TT6: { id: 'TT6', category: 'Time Travel', description: 'Pose de Guerrero/a Vikingo/a', prompt: 'The person is in a fierce and rugged warrior stance, with a determined and powerful expression.' },
    TT7: { id: 'TT7', category: 'Time Travel', description: 'Pose de Capitán Pirata', prompt: 'The person is in a swashbuckling and authoritative pose, as if they were commanding a pirate ship.' },
    TT8: { id: 'TT8', category: 'Time Travel', description: 'Pose del Lejano Oeste', prompt: 'The person is in a weathered and stoic pose, typical of a character from the American Wild West.' },
    TT9: { id: 'TT9', category: 'Time Travel', description: 'Pose de Caballero Medieval', prompt: 'The person is in a noble and gallant pose, as if they were a medieval knight in armor.' },
    TT10: { id: 'TT10', category: 'Time Travel', description: 'Pose Cyberpunk (Rebelde)', prompt: 'The person is in a tough, defiant, and high-tech pose, typical of a cyberpunk setting.' },
    // --- Categoría: Fantasy and Sci-Fi ---
    // Style Letter: FS
    FS1: { id: 'FS1', category: 'Fantasy and Sci-Fi', description: 'Pose de Caballero Jedi', prompt: 'The person is in a focused and disciplined stance, as if they were a Jedi Knight holding a lightsaber.' },
    FS2: { id: 'FS2', category: 'Fantasy and Sci-Fi', description: 'Pose de Mago / Hechicero', prompt: 'The person is in a mystical and powerful pose, as if they were casting a spell or holding a magical object.' },
    FS3: { id: 'FS3', category: 'Fantasy and Sci-Fi', description: 'Pose de Superhéroe (Poder)', prompt: 'The person is in a dynamic and heroic power pose, typical of a superhero.' },
    FS4: { id: 'FS4', category: 'Fantasy and Sci-Fi', description: 'Pose de Astronauta (Flotando)', prompt: 'The person is in a weightless, floating pose as if they were an astronaut in space.' },
    FS5: { id: 'FS5', category: 'Fantasy and Sci-Fi', description: 'Pose de Cyborg (Mecánica)', prompt: 'The person is in a stiff, high-tech pose with a futuristic and mechanical energy.' },
    FS6: { id: 'FS6', category: 'Fantasy and Sci-Fi', description: 'Pose de Elfo de Fantasía', prompt: 'The person is in an elegant, graceful, and slightly ethereal pose typical of a fantasy elf.' },
    FS7: { id: 'FS7', category: 'Fantasy and Sci-Fi', description: 'Pose Soberana (Trono)', prompt: 'The person is sitting in a regal and authoritative pose, as if they were a sovereign on a throne.' },
    FS8: { id: 'FS8', category: 'Fantasy and Sci-Fi', description: 'Pose de Arte de Carga (GTA)', prompt: 'The person is in a cool, confident pose typical of action game cover art, looking towards the camera with a slight smirk.' },
    FS9: { id: 'FS9', category: 'Fantasy and Sci-Fi', description: 'Pose de Dibujo Animado (Simpsons)', prompt: 'The person is in a simplified, expressive pose with large eyes and a friendly, animated expression.' },
    FS10: { id: 'FS10', category: 'Fantasy and Sci-Fi', description: 'Pose de Personaje Interdimensional', prompt: 'The person is in a quirky, slightly frantic pose with wide, expressive eyes and a unique animated energy.' },
    FS11: { id: 'FS11', category: 'Fantasy and Sci-Fi', description: 'Pose de Héroe/Heroína Animada', prompt: 'The person is in a soft, expressive, and fairytale-like pose with large, emotive eyes and a hopeful expression.' },
    FS12: { id: 'FS12', category: 'Fantasy and Sci-Fi', description: 'Pose de Mercenario Futurista', prompt: 'The person is in a tough, high-tech pose, perhaps leaning against a neon-lit wall with a rebellious look.' },
    FS13: { id: 'FS13', category: 'Fantasy and Sci-Fi', description: 'Pose de Avatar de Bloques', prompt: 'The person is in a blocky, cubic pose, standing straight with a simple, pixelated expression.' },
    // --- Categoría: Sports and Fitness ---
    // Style Letter: SF
    SF1: { id: 'SF1', category: 'Sports and Fitness', description: 'Corriendo (Running)', prompt: 'The person is captured in a dynamic running pose, mid-stride, with a focused expression. They are wearing athletic gear, and the background is a blurred park or urban running track.' },
    SF2: { id: 'SF2', category: 'Sports and Fitness', description: 'Yoga (Posición de Loto)', prompt: 'The person is sitting in a peaceful lotus position, eyes closed, with a serene expression. They are on a yoga mat in a bright, minimalist studio or a calm natural setting.' },
    SF3: { id: 'SF3', category: 'Sports and Fitness', description: 'Boxeo (Guardia)', prompt: 'The person is in a boxing guard stance, fists up, with a determined and intense look. They are wearing boxing gloves and hand wraps, in a gritty gym setting.' },
    SF4: { id: 'SF4', category: 'Sports and Fitness', description: 'Levantamiento de Pesas', prompt: 'The person is captured in the middle of a powerful deadlift or overhead press with a barbell. Their muscles are strained, showing effort and strength, in a professional weightlifting gym.' },
    SF5: { id: 'SF5', category: 'Sports and Fitness', description: 'Tenis (Swing)', prompt: 'The person is mid-swing with a tennis racket, eyes on an imaginary ball. They are on a professional tennis court, wearing classic tennis attire.' },
    SF6: { id: 'SF6', category: 'Sports and Fitness', description: 'Básquetbol (Dribbling)', prompt: 'The person is dribbling a basketball with one hand, looking ahead as if scanning the court. They are on an urban outdoor basketball court.' },
    SF7: { id: 'SF7', category: 'Sports and Fitness', description: 'Fútbol (Remate)', prompt: 'The person is captured just as they are kicking a soccer ball with power. They are on a lush green soccer field under stadium lights.' },
    SF8: { id: 'SF8', category: 'Sports and Fitness', description: 'Natación (Salto)', prompt: 'The person is captured in mid-air, diving into a crystal-clear swimming pool. Their body is streamlined, and water droplets are frozen in the air.' },
    SF9: { id: 'SF9', category: 'Sports and Fitness', description: 'Ciclismo', prompt: 'The person is riding a sleek road bike, leaning forward in an aerodynamic position. They are on a scenic winding road with a blurred landscape.' },
    SF10: { id: 'SF10', category: 'Sports and Fitness', description: 'Surf', prompt: 'The person is standing confidently on a surfboard, riding a large, crashing wave. They are wearing a wetsuit, and the ocean spray is visible all around them.' },
    // --- Categoría: Professional and Business ---
    // Style Letter: PB
    PB1: { id: 'PB1', category: 'Professional and Business', description: 'Confianza (Brazos Cruzados)', prompt: 'The person stands with their arms crossed, looking directly at the camera with a confident and approachable smile. They are in a modern, bright office setting.' },
    PB2: { id: 'PB2', category: 'Professional and Business', description: 'Trabajando con Laptop', prompt: 'The person is sitting at a clean, modern desk, focused on their laptop. They are holding a pen or a cup of coffee, in a professional workspace.' },
    PB3: { id: 'PB3', category: 'Professional and Business', description: 'Hablando en Público', prompt: 'The person is standing behind a modern podium, gesturing with their hands as if giving an inspiring speech. The background shows a blurred audience or a conference hall.' },
    PB4: { id: 'PB4', category: 'Professional and Business', description: 'En el Escritorio', prompt: 'The person is sitting at an executive desk, looking towards the camera with a professional and serious expression. The office is high-end with a city view.' },
    PB5: { id: 'PB5', category: 'Professional and Business', description: 'Apretón de Manos', prompt: 'The person is reaching out for a handshake, smiling warmly. The perspective is as if the viewer is the one shaking their hand, in a business lobby.' },
    PB6: { id: 'PB6', category: 'Professional and Business', description: 'Explicando en Pizarra', prompt: 'The person is standing next to a whiteboard filled with diagrams and notes, pointing at a specific detail. They are looking at the camera as if explaining a concept.' },
    PB7: { id: 'PB7', category: 'Professional and Business', description: 'Mirando el Reloj', prompt: 'The person is checking their wristwatch with a slightly hurried but professional expression, as if they have an important meeting to attend.' },
    // --- Categoría: Casual and Lifestyle ---
    // Style Letter: CL
    CL1: { id: 'CL1', category: 'Casual and Lifestyle', description: 'Caminando con Café', prompt: 'The person is walking down a sunny city street, holding a takeaway coffee cup. They are dressed in stylish casual clothes and have a relaxed expression.' },
    CL2: { id: 'CL2', category: 'Casual and Lifestyle', description: 'Leyendo un Libro', prompt: 'The person is curled up in a comfortable armchair, deeply absorbed in reading a book. The setting is a cozy living room with soft, warm lighting.' },
    CL3: { id: 'CL3', category: 'Casual and Lifestyle', description: 'Escuchando Música', prompt: 'The person is wearing large over-ear headphones, eyes closed, with a blissful expression as if lost in the music. They are leaning against a wall in a modern apartment.' },
    CL4: { id: 'CL4', category: 'Casual and Lifestyle', description: 'Riendo con Amigos', prompt: 'The person is captured in a moment of genuine, loud laughter. Although they are the focus, the blurred shapes of friends are around them in a vibrant cafe setting.' },
    CL5: { id: 'CL5', category: 'Casual and Lifestyle', description: 'Acariciando un Perro', prompt: 'The person is kneeling on the grass, happily petting a friendly dog. They are both looking at the camera, in a sunny park setting.' },
    CL6: { id: 'CL6', category: 'Casual and Lifestyle', description: 'Cocinando', prompt: 'The person is in a modern kitchen, happily preparing a meal. They are chopping vegetables or stirring a pot, with a warm and domestic vibe.' },
    CL7: { id: 'CL7', category: 'Casual and Lifestyle', description: 'De Compras', prompt: 'The person is walking through a high-end shopping district, carrying several stylish shopping bags. They have a satisfied and trendy look.' },
    // --- Categoría: Artistic and Abstract ---
    // Style Letter: AA
    AA1: { id: 'AA1', category: 'Artistic and Abstract', description: 'Pintando en Lienzo', prompt: 'The person is standing in front of a large canvas, holding a palette and a brush, captured in the middle of a creative stroke. They are in a sunlit artist\'s studio with paint splatters everywhere.' },
    AA2: { id: 'AA2', category: 'Artistic and Abstract', description: 'Tocando la Guitarra', prompt: 'The person is sitting on a stool, playing an acoustic guitar with passion. Their eyes are closed, and the lighting is soft and atmospheric, as if in a small jazz club.' },
    AA3: { id: 'AA3', category: 'Artistic and Abstract', description: 'Danza (Ballet)', prompt: 'The person is captured in a graceful ballet pose, perhaps on pointe or in a mid-air leap. They are wearing a classic tutu or dance attire, on a dark stage with a single spotlight.' },
    AA4: { id: 'AA4', category: 'Artistic and Abstract', description: 'Esculpiendo', prompt: 'The person is working on a clay sculpture, their hands covered in clay. They are focused and meticulous, in a rustic workshop filled with various art pieces.' },
    AA5: { id: 'AA5', category: 'Artistic and Abstract', description: 'Fotografía', prompt: 'The person is holding a professional DSLR camera to their eye, as if taking a photo of the viewer. They are in a scenic outdoor location during the golden hour.' },
    AA6: { id: 'AA6', category: 'Artistic and Abstract', description: 'Flotando (Abstracto)', prompt: 'The person is depicted as if floating weightlessly in a dreamlike, abstract space filled with swirling colors and light. Their pose is ethereal and relaxed.' },
    AA7: { id: 'AA7', category: 'Artistic and Abstract', description: 'Perfil de Silueta Artística', prompt: 'A clean profile silhouette of the person, standing still and contemplative, designed for artistic layering.' },
    // --- Categoría: Nature and Outdoors ---
    // Style Letter: NO
    NO1: { id: 'NO1', category: 'Nature and Outdoors', description: 'Senderismo (Hiking)', prompt: 'The person is walking along a rugged mountain trail, wearing a backpack and hiking boots. They are looking at the vast landscape ahead with a sense of adventure.' },
    NO2: { id: 'NO2', category: 'Nature and Outdoors', description: 'Sentado junto a una Fogata', prompt: 'The person is sitting on a log by a crackling campfire at night. The warm glow of the fire illuminates their face, and the starry sky is visible above.' },
    NO3: { id: 'NO3', category: 'Nature and Outdoors', description: 'Mirando con Binoculares', prompt: 'The person is looking through a pair of binoculars, focused on something in the distance. They are in a lush forest or a bird-watching tower.' },
    NO4: { id: 'NO4', category: 'Nature and Outdoors', description: 'En la Cima de la Montaña', prompt: 'The person is standing triumphantly on a rocky mountain peak, arms outstretched, overlooking a sea of clouds and distant mountains.' },
    NO5: { id: 'NO5', category: 'Nature and Outdoors', description: 'Pescando en el Lago', prompt: 'The person is sitting on a small wooden pier, holding a fishing rod over a calm, misty lake at dawn.' },
    NO6: { id: 'NO6', category: 'Nature and Outdoors', description: 'Jardinería', prompt: 'The person is kneeling in a vibrant garden, tending to colorful flowers. They are wearing a sun hat and gardening gloves, with a peaceful expression.' },
    NO7: { id: 'NO7', category: 'Nature and Outdoors', description: 'Observando las Estrellas', prompt: 'The person is lying on a blanket in an open field at night, looking up at a spectacular Milky Way galaxy. Their expression is one of awe and wonder.' },
    // --- Categoría: Travel and Adventure ---
    // Style Letter: TA
    TA1: { id: 'TA1', category: 'Travel and Adventure', description: 'Explorando la Ciudad', prompt: 'The person is walking through a vibrant city square, holding a paper map and looking around with curiosity. They are dressed in comfortable travel clothes, and the background is filled with historic buildings.' },
    TA2: { id: 'TA2', category: 'Travel and Adventure', description: 'En Camello por el Desierto', prompt: 'The person is riding a camel across a vast, golden desert during sunset. They are wearing a light linen outfit and a headscarf, with sand dunes stretching into the distance.' },
    TA3: { id: 'TA3', category: 'Travel and Adventure', description: 'Relax en Playa Tropical', prompt: 'The person is lounging on a white sandy beach, holding a coconut with a straw. They are wearing a stylish swimsuit and sunglasses, with turquoise water and palm trees in the background.' },
    TA4: { id: 'TA4', category: 'Travel and Adventure', description: 'En el Tren', prompt: 'The person is sitting by a large window on a train, looking out at a fast-moving landscape. Their expression is contemplative, and the lighting is soft and natural.' },
    TA5: { id: 'TA5', category: 'Travel and Adventure', description: 'Foto de Monumento', prompt: 'The person is taking a selfie in front of a famous landmark (like the Eiffel Tower or the Colosseum). They have a big, happy smile, and the landmark is clearly visible in the background.' },
    TA6: { id: 'TA6', category: 'Travel and Adventure', description: 'Mercado Local', prompt: 'The person is walking through a bustling, colorful local market, looking at various exotic fruits and spices. The atmosphere is vibrant and full of life.' },
    TA7: { id: 'TA7', category: 'Travel and Adventure', description: 'En Globo Aerostático', prompt: 'The person is standing in the basket of a hot air balloon, looking down at a beautiful landscape from high above. The sky is filled with other colorful balloons at sunrise.' },
    // --- Categoría: Horror and Dark ---
    // Style Letter: HD
    HD1: { id: 'HD1', category: 'Horror and Dark', description: 'Bosque Sombrío', prompt: 'The person is standing in a dark, foggy forest at night. Their expression is one of fear and uncertainty, and the trees look like twisted silhouettes in the mist.' },
    HD2: { id: 'HD2', category: 'Horror and Dark', description: 'Espejo Roto', prompt: 'The person is looking into a cracked and dirty mirror. Their reflection is distorted and creepy, and the lighting is dim and flickering.' },
    HD3: { id: 'HD3', category: 'Horror and Dark', description: 'Máscara Inquietante', prompt: 'The person is wearing a creepy, hand-made mask that hides their face. They are standing in a dark room with a single, harsh light source.' },
    HD4: { id: 'HD4', category: 'Horror and Dark', description: 'Casa Embrujada', prompt: 'The person is sitting on a dusty, old chair in a derelict and haunted-looking house. Shadows seem to move in the corners of the room.' },
    HD5: { id: 'HD5', category: 'Horror and Dark', description: 'Surgiendo de las Sombras', prompt: 'The person is partially visible as they emerge from deep, dark shadows. Only half of their face is lit, showing a mysterious and intense expression.' },
    HD6: { id: 'HD6', category: 'Horror and Dark', description: 'Vela Parpadeante', prompt: 'The person is holding a single, flickering candle in a completely dark space. The light casts long, dramatic shadows on their face.' },
    HD7: { id: 'HD7', category: 'Horror and Dark', description: 'Figura Fantasmagórica', prompt: 'The person is depicted as a translucent, ghostly figure floating in a dark, abandoned hallway. They have a sad and ethereal expression.' },
    // --- Categoría: Seasonal and Holidays ---
    // Style Letter: SH
    SH1: { id: 'SH1', category: 'Seasonal and Holidays', description: 'Navidad', prompt: 'The person is wearing a festive Santa hat and a cozy Christmas sweater, holding a beautifully wrapped gift. They are in a warm living room with a decorated Christmas tree in the background.' },
    SH2: { id: 'SH2', category: 'Seasonal and Holidays', description: 'Halloween', prompt: 'The person is holding a carved, glowing jack-o\'-lantern, with a mischievous smile. They are in a dark, spooky setting with cobwebs and bats.' },
    SH3: { id: 'SH3', category: 'Seasonal and Holidays', description: 'Año Nuevo', prompt: 'The person is holding a glass of champagne, celebrating with a big smile. The background is filled with colorful fireworks and confetti.' },
    SH4: { id: 'SH4', category: 'Seasonal and Holidays', description: 'San Valentín', prompt: 'The person is holding a large red heart-shaped balloon, with a romantic and sweet expression. The background is soft and filled with pink and red tones.' },
    SH5: { id: 'SH5', category: 'Seasonal and Holidays', description: 'Pascua', prompt: 'The person is wearing cute bunny ears and holding a basket of colorful Easter eggs. They are in a sunny, flower-filled garden.' },
    SH6: { id: 'SH6', category: 'Seasonal and Holidays', description: 'Verano', prompt: 'The person is holding a large, colorful ice cream cone, with a happy and refreshed expression. They are wearing a sun hat and sunglasses, with a bright summer sun in the background.' },
    SH7: { id: 'SH7', category: 'Seasonal and Holidays', description: 'Otoño', prompt: 'The person is walking through a park with colorful falling leaves. They are wearing a stylish trench coat and a scarf, with a warm and cozy autumn vibe.' },
};
