// questions.js
// Format: { id, image?, question, options[], answerIndex, correctAnswerText }

window.questions = [
  // ===== Set 1 =====

  {
    id: 1,
    image: "images/IMG_0980.jpeg",
    question:
      "A 68-year-old man presents with progressive dysphagia, regurgitation of undigested food, chronic cough, halitosis, and occasional aspiration episodes. He says symptoms are worse several hours after meals and sometimes food comes back into the mouth without nausea. The barium swallow image is given.\n\nWhat is the most likely diagnosis?",
    options: [
      "Achalasia cardia",
      "Zenker diverticulum",
      "Esophageal carcinoma",
      "Plummer–Vinson syndrome"
    ],
    answerIndex: 1,
    correctAnswerText: "Zenker diverticulum"
  },
  {
    id: 2,
    image: "images/IMG_0986.jpeg",
    question:
      "A 42-year-old man presents with recurrent perianal discharge for the past 2 years. He gives a history of a painful swelling near the anal verge that ruptured spontaneously 1 year ago, after which the pain decreased but intermittent purulent discharge persisted. On examination, a small external opening is seen near the anus, as suggested by the image. Which of the following is the most common etiopathogenesis of this condition?",
    options: [
      "Congenital persistence of the anal membrane",
      "Cryptoglandular infection of anal glands",
      "Foreign body reaction to ingrown hair",
      "Squamous cell carcinoma of the anal canal"
    ],
    answerIndex: 1,
    correctAnswerText: "Cryptoglandular infection of anal glands"
  },
  {
    id: 3,
    image: "images/IMG_1010.jpeg",
    question:
      "A 48-year-old woman undergoes delayed breast reconstruction after mastectomy. The reconstructive image shows transfer of lower abdominal skin and fat to the breast region while preserving the rectus abdominis muscle, with microvascular anastomosis to recipient chest wall vessels. Which of the following statements regarding this flap is most accurate?",
    options: [
      "It is a pedicled flap based on the superior epigastric artery and includes rectus abdominis muscle",
      "It is a free flap based on deep inferior epigastric perforators and spares the rectus abdominis muscle",
      "It is a musculocutaneous flap based on the thoracoacromial artery",
      "It is best suited only for reconstruction of the lower inner quadrant of the breast"
    ],
    answerIndex: 1,
    correctAnswerText:
      "It is a free flap based on deep inferior epigastric perforators and spares the rectus abdominis muscle"
  },
  {
    id: 4,
    image: "images/IMG_1028.jpeg",
    question:
      "A 38-year-old man with a history of intermittent jaundice, pruritus, and fatigue undergoes Magnetic Resonance Cholangiopancreatography. The image shows multifocal short-segment strictures with alternating dilatation involving the intrahepatic and extrahepatic bile ducts, producing a beaded appearance. Which of the following is the most likely associated condition?",
    options: [
      "Ulcerative colitis",
      "Chronic pancreatitis",
      "Gallbladder carcinoma",
      "Autoimmune hemolytic anemia"
    ],
    answerIndex: 0,
    correctAnswerText: "Ulcerative colitis"
  },
  {
    id: 5,
    image: "images/IMG_1045.jpeg",
    question:
      "A 78-year-old man is brought to the emergency department with progressive headache, confusion, and drowsiness for 2 days. He had a minor fall 3 weeks ago and is on antiplatelet therapy for ischemic heart disease. The non-contrast Computed Tomography scan of the head in the image shows a crescent-shaped extra-axial hyperdense collection along the cerebral convexity causing mass effect. Which of the following is the most likely source of bleeding?",
    options: [
      "Rupture of middle meningeal artery",
      "Tearing of bridging veins",
      "Rupture of lenticulostriate arteries",
      "Bleeding from dural venous sinus"
    ],
    answerIndex: 1,
    correctAnswerText: "Tearing of bridging veins"
  },
  {
    id: 6,
    image: "images/IMG_1052.jpeg",
    question:
      "A 56-year-old obese multiparous woman presents with a long-standing umbilical swelling that was previously reducible. Since morning, the swelling has become painful, tense, irreducible, and the overlying skin appears congested and unhealthy, as seen in the image. Which of the following is the most appropriate management?",
    options: [
      "Elective mesh hernioplasty after 6 weeks",
      "Conservative treatment with analgesics and antibiotics",
      "Urgent surgery with excision of the umbilicus and repair of the hernia",
      "Incision and drainage of the swelling"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Urgent surgery with excision of the umbilicus and repair of the hernia"
  },
  {
    id: 7,
    image: "images/IMG_1056.jpeg",
    question:
      "A 34-year-old woman from a sheep-rearing area presents with dull aching pain in the right upper abdomen. Contrast-enhanced Computed Tomography of the abdomen shows a cystic lesion in the liver with internal detached membranes and a few daughter cysts within it, producing a floating membrane appearance. According to the Gharbi classification, which of the following is the most likely type of hydatid cyst?",
    options: ["Type 1", "Type 2", "Type 3", "Type 5"],
    answerIndex: 1,
    correctAnswerText: "Type 2"
  },
  {
    id: 8,
    image: "images/IMG_1061.jpeg",
    question:
      "A 27-year-old hirsute man who works as a driver presents with recurrent pain, swelling, and intermittent seropurulent discharge from the natal cleft. The image shows midline pits in the sacrococcygeal region with surrounding inflamed tissue. Which of the following is the most definitive treatment for this condition in a patient with chronic recurrent disease?",
    options: [
      "Repeated incision and drainage only",
      "Fistulotomy with tract laying open into the anal canal",
      "Wide excision of the sinus tract with off-midline closure or flap procedure",
      "Long-term oral antibiotics alone"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Wide excision of the sinus tract with off-midline closure or flap procedure"
  },
  {
    id: 9,
    image: "images/IMG_1075.jpeg",
    question:
      "A 4-year-old child is brought to the emergency department with thermal burns involving the entire back and patchy burns over the anterior trunk, as seen in the image. According to the pediatric modification of the Rule of Nines, which of the following is the most appropriate estimate of the total body surface area burned?",
    options: ["10–15%", "15–20%", "25–30%", "35–40%"],
    answerIndex: 2,
    correctAnswerText: "25–30%"
  },
  {
    id: 10,
    image: "images/IMG_1088.jpeg",
    question:
      "A 42-year-old man has long-standing gastroesophageal reflux disease with persistent heartburn and regurgitation despite optimal medical therapy. The image depicts a surgical procedure in which the gastric fundus is wrapped completely around the lower end of the esophagus to reinforce the lower esophageal sphincter. Which of the following is the most likely procedure?",
    options: [
      "Nissen fundoplication",
      "Toupet fundoplication",
      "Heller myotomy",
      "Distal gastrectomy"
    ],
    answerIndex: 0,
    correctAnswerText: "Nissen fundoplication"
  },
  {
    id: 11,
    image: "images/IMG_1109.jpeg",
    question:
      "A 2-year-old child is brought with sudden-onset dysphagia and drooling after playing unsupervised. The radiograph shows a well-defined round radiopaque shadow in the cervical region, appearing en face on the frontal view. Which of the following is the most appropriate next step in management?",
    options: [
      "Observe for 24 hours because most coins pass spontaneously",
      "Immediate bronchoscopy",
      "Urgent upper gastrointestinal endoscopic removal",
      "Reassure because this is most likely an imaging artifact"
    ],
    answerIndex: 2,
    correctAnswerText: "Urgent upper gastrointestinal endoscopic removal"
  },
  {
    id: 12,
    image: "images/IMG_1134.jpeg",
    question:
      "A 62-year-old man with upper gastrointestinal bleeding is planned for endoscopic therapy. During evaluation, a blood sample is placed into the device shown in the image to assess the viscoelastic properties of clot formation in whole blood and to guide targeted component therapy. Which of the following is the most likely investigation?",
    options: [
      "Thromboelastography",
      "Platelet aggregometry",
      "Sonoclot analysis",
      "Clotting time"
    ],
    answerIndex: 0,
    correctAnswerText: "Thromboelastography"
  },
  {
    id: 13,
    image: "images/IMG_1148.jpeg",
    question:
      "A 28-year-old man is brought to the emergency department after a road traffic accident. He is tachypneic, hypotensive, and restless. Examination reveals marked subcutaneous emphysema over the chest, absent breath sounds on the right side, and distended neck veins. The chest radiograph in the image shows a hyperlucent right hemithorax with collapse of the ipsilateral lung and mediastinal shift. What is the most appropriate immediate management?",
    options: [
      "Endotracheal intubation with positive pressure ventilation",
      "Immediate needle decompression in the 2nd intercostal space followed by chest tube insertion",
      "Extended Focused Assessment with Sonography for Trauma before intervention",
      "Intravenous fluids alone and observation"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Immediate needle decompression in the 2nd intercostal space followed by chest tube insertion"
  },
  {
    id: 14,
    image: "images/IMG_1154.jpeg",
    question:
      "A 48-year-old man with long-standing alcohol-related chronic liver disease presents with hematemesis. Upper gastrointestinal endoscopy shows multiple large, bluish, tortuous submucosal bulges projecting into the lumen of the distal esophagus, as seen in the image. Which of the following is the most appropriate definitive endoscopic management for active bleeding from this lesion?",
    options: [
      "Endoscopic variceal ligation",
      "Argon plasma coagulation",
      "Radiofrequency ablation",
      "Endoscopic mucosal resection"
    ],
    answerIndex: 0,
    correctAnswerText: "Endoscopic variceal ligation"
  },
  {
    id: 15,
    image: "images/IMG_1158.jpeg",
    question:
      "A 68-year-old man presents with buttock and thigh claudication that occurs after walking a short distance. Angiographic imaging shows extensive aortoiliac occlusive disease involving the distal abdominal aorta and extending into both common iliac arteries, with poor inflow to the femoral vessels. Which of the following is the best surgical management?",
    options: [
      "Percutaneous transluminal angioplasty with stenting",
      "Femorofemoral crossover bypass",
      "Aortofemoral bypass",
      "Isolated aortoiliac endarterectomy"
    ],
    answerIndex: 2,
    correctAnswerText: "Aortofemoral bypass"
  },
  {
    id: 16,
    image: "images/IMG_1169.jpeg",
    question:
      "A 32-year-old man presents with sudden severe epigastric pain that rapidly becomes generalized, along with abdominal guarding and fever. An erect chest radiograph in the image shows crescentic lucency beneath the right hemidiaphragm, indicating free subdiaphragmatic air. Which of the following is the most likely diagnosis?",
    options: [
      "Amoebic liver abscess",
      "Hollow viscus perforation",
      "Gastric volvulus",
      "Right-sided empyema thoracis"
    ],
    answerIndex: 1,
    correctAnswerText: "Hollow viscus perforation"
  },
  {
    id: 17,
    image: "images/IMG_1187.jpeg",
    question:
      "A 46-year-old woman develops persistent bilious drainage from the surgical drain on the third postoperative day after laparoscopic cholecystectomy. The diagram in the image shows a bile duct injury in which an accessory duct or cystic duct leak is present, while the main extrahepatic bile duct remains in continuity. According to the Strasberg classification, which of the following is the most likely type of bile duct injury?",
    options: ["Type A", "Type C", "Type D", "Type E"],
    answerIndex: 0,
    correctAnswerText: "Type A"
  },
  {
    id: 18,
    image: "images/IMG_1194.jpeg",
    question:
      "A 36-year-old man is brought to the emergency department after a road traffic accident with severe chest pain and respiratory distress. The chest image suggests multiple adjacent rib fractures creating a free-floating segment of the chest wall. On examination, the injured segment moves inward during inspiration and outward during expiration. Which of the following breathing patterns is most likely present in this patient?",
    options: [
      "Cheyne–Stokes respiration",
      "Biot breathing",
      "Kussmaul breathing",
      "Paradoxical breathing"
    ],
    answerIndex: 3,
    correctAnswerText: "Paradoxical breathing"
  },
  {
    id: 19,
    image: "images/IMG_1201.jpeg",
    question:
      "A 5-week-old male infant is brought with progressively increasing non-bilious projectile vomiting after feeds. On examination, he appears hungry after vomiting and has mild dehydration. Ultrasonography shows a target-like appearance. Which of the following is the most likely diagnosis?",
    options: [
      "Duodenal atresia",
      "Annular pancreas",
      "Hypertrophic pyloric stenosis",
      "Malrotation with midgut volvulus"
    ],
    answerIndex: 2,
    correctAnswerText: "Hypertrophic pyloric stenosis"
  },
  {
    id: 20,
    image: "",
    question:
      "A 42-year-old man is on the fifth postoperative day after emergency surgery for perforated appendicitis. He continues to have fever, tachycardia, persistent leukocytosis, and vague upper abdominal discomfort. Ultrasonography suggests a localized intraperitoneal fluid collection beneath the liver. Which of the following is the most common site for development of an intraperitoneal abscess in a recumbent patient?",
    options: [
      "Supraphepatic space",
      "Subhepatic space",
      "Left lobe of liver",
      "Left subphrenic space"
    ],
    answerIndex: 1,
    correctAnswerText: "Subhepatic space"
  },
  {
    id: 21,
    image: "",
    question:
      "A 67-year-old male smoker is found to have an asymptomatic infrarenal abdominal aortic aneurysm measuring 4.8 centimeters on screening ultrasonography. He is hemodynamically stable and has no abdominal or back pain. Which of the following is the most appropriate management?",
    options: [
      "Immediate open surgical repair",
      "Endovascular aneurysm repair for all aneurysms more than 4 centimeters",
      "Regular surveillance with risk-factor modification; elective repair when diameter exceeds 5.5 centimeters or if symptomatic",
      "Emergency laparotomy because all abdominal aortic aneurysms carry imminent risk of rupture"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Regular surveillance with risk-factor modification; elective repair when diameter exceeds 5.5 centimeters or if symptomatic"
  },
  {
    id: 22,
    image: "",
    question:
      "A 28-year-old man is brought to the emergency department after a road traffic accident. He is conscious but restless, with active bleeding from a scalp laceration. The trauma team begins systematic evaluation according to the Advanced Trauma Life Support protocol. Which of the following is NOT a component of the primary survey?",
    options: [
      "Assessment of airway patency with cervical spine protection",
      "Exposure of the patient by removing clothes to inspect for hidden injuries",
      "Computed Tomography scan of the whole body",
      "Rapid assessment of circulation including pulse, blood pressure, and external bleeding"
    ],
    answerIndex: 2,
    correctAnswerText: "Computed Tomography scan of the whole body"
  },
  {
    id: 23,
    image: "",
    question:
      "A 62-year-old man presents with a gradually increasing reducible swelling in the right groin that becomes more prominent on coughing and straining. On examination, the swelling is medial to the inferior epigastric vessels and is diagnosed as a direct inguinal hernia. Weakness of which of the following structures most likely predisposed to this condition?",
    options: [
      "Pectineal ligament",
      "Conjoint tendon",
      "Reflected part of inguinal ligament",
      "Lacunar ligament"
    ],
    answerIndex: 1,
    correctAnswerText: "Conjoint tendon"
  },
  {
    id: 24,
    image: "",
    question:
      "A 36-year-old man presents with fever, right upper quadrant pain, and mild hepatomegaly for 5 days. One week earlier, he had an episode of loose stools. Contrast-enhanced Computed Tomography of the abdomen shows a solitary liver abscess measuring 4.5 centimeters in diameter. He is hemodynamically stable, with no features of rupture, sepsis, multiloculation, or peritonitis. What is the most appropriate next step in management?",
    options: [
      "Percutaneous drainage immediately",
      "Surgical drainage",
      "Initial medical therapy with close clinical and radiological monitoring",
      "Puncture-Aspiration-Injection-Reaspiration"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Initial medical therapy with close clinical and radiological monitoring"
  },
  {
    id: 25,
    image: "",
    question:
      "A 58-year-old man undergoes distal gastrectomy for adenocarcinoma of the stomach. Six months later, he complains of easy fatigability, numbness in the feet, and glossitis. Which of the following nutritional deficiencies is most likely to require routine supplementation after this surgery?",
    options: ["Vitamin C", "Vitamin B12", "Vitamin A", "Calcium"],
    answerIndex: 1,
    correctAnswerText: "Vitamin B12"
  },
  {
    id: 26,
    image: "",
    question:
      "A 5-year-old child is brought with intermittent painless rectal bleeding. Colonoscopic examination reveals a solitary pedunculated rectal polyp. Histopathology shows cystically dilated mucus-filled glands lined by inflamed epithelium with an edematous lamina propria rich in inflammatory cells. Which of the following best describes this lesion?",
    options: [
      "Adenomatous polyp",
      "Choristoma",
      "Hamartomatous polyp",
      "Carcinomatous polyp"
    ],
    answerIndex: 2,
    correctAnswerText: "Hamartomatous polyp"
  },
  {
    id: 27,
    image: "",
    question:
      "A 46-year-old man with long-standing alcohol-related chronic pancreatitis presents with recurrent severe epigastric pain radiating to the back. Imaging shows a diffusely dilated main pancreatic duct measuring 9 millimeters with multiple intraductal calculi, without an inflammatory mass in the head of the pancreas. Which of the following is the most appropriate definitive surgical procedure?",
    options: [
      "Pancreaticoduodenectomy",
      "Longitudinal pancreaticojejunostomy",
      "Endoscopic Retrograde Cholangiopancreatography with sphincterotomy",
      "Coring out of the pancreatic head"
    ],
    answerIndex: 1,
    correctAnswerText: "Longitudinal pancreaticojejunostomy"
  },
  {
    id: 28,
    image: "",
    question:
      "A 60-year-old man with chronic alcohol-related liver disease presents with progressive weight loss, early satiety, and dull right upper quadrant pain. Laboratory evaluation shows alpha-fetoprotein of 680 nanograms per milliliter, elevated alkaline phosphatase, and near-normal aspartate aminotransferase and alanine aminotransferase values. Contrast-enhanced triple-phase Computed Tomography demonstrates a liver lesion that shows arterial phase hyperenhancement with portal venous washout. Which of the following is the most likely diagnosis?",
    options: [
      "Hepatic adenoma",
      "Cholangiocarcinoma",
      "Hepatocellular carcinoma",
      "Alcoholic hepatitis"
    ],
    answerIndex: 2,
    correctAnswerText: "Hepatocellular carcinoma"
  },
  {
    id: 29,
    image: "",
    question:
      "A 7-day-old neonate is brought with persistent feculent discharge from the umbilicus since birth. On examination, there is a moist red mucosal-looking protrusion at the umbilicus with surrounding skin excoriation. Which of the following is the most likely diagnosis?",
    options: [
      "Umbilical cyst",
      "Patent vitellointestinal duct",
      "Urachal sinus",
      "Umbilical granuloma"
    ],
    answerIndex: 1,
    correctAnswerText: "Patent vitellointestinal duct"
  },
  {
    id: 30,
    image: "",
    question:
      "A full-term neonate develops severe respiratory distress and cyanosis within minutes of birth. On examination, the abdomen appears scaphoid, breath sounds are markedly decreased on the left side, and heart sounds are shifted to the right. Chest radiograph shows bowel loops occupying the left hemithorax with mediastinal shift. Which of the following is the most likely diagnosis?",
    options: [
      "Morgagni hernia",
      "Eventration of diaphragm",
      "Bochdalek hernia",
      "Hiatal hernia"
    ],
    answerIndex: 2,
    correctAnswerText: "Bochdalek hernia"
  },
  {
    id: 31,
    image: "",
    question:
      "A 24-year-old man presents with fever, hypotension, tachypnea, and altered sensorium. The emergency physician wants to quickly assess the risk of poor outcome using the quick Sequential Organ Failure Assessment score at the bedside. Which of the following components are included in this score?",
    options: [
      "Systolic Blood Pressure, Respiratory Rate, and Glasgow Coma Scale",
      "Pulse Rate, Body Temperature, and Total Leukocyte Count",
      "Serum Creatinine, Pulse Rate, and Blood Pressure",
      "Respiratory Rate, Oxygen Saturation, and Serum Bilirubin"
    ],
    answerIndex: 0,
    correctAnswerText:
      "Systolic Blood Pressure, Respiratory Rate, and Glasgow Coma Scale"
  },
  {
    id: 32,
    image: "",
    question:
      "A 45-year-old man presents to the emergency department with massive hematemesis and dizziness. He has a history of chronic epigastric burning pain that is relieved temporarily by food and returns a few hours later. He frequently uses nonsteroidal anti-inflammatory drugs for back pain. Endoscopy confirms a posterior duodenal ulcer with active bleeding. Erosion of which of the following arteries is the most likely cause of this hemorrhage?",
    options: [
      "Left gastric artery",
      "Splenic artery",
      "Gastroduodenal artery",
      "Right gastric artery"
    ],
    answerIndex: 2,
    correctAnswerText: "Gastroduodenal artery"
  },
  {
    id: 33,
    image: "",
    question:
      "A 23-year-old man is brought to the emergency department 4 hours after accidentally ingesting a toilet-cleaning solution containing concentrated alkali. He has severe retrosternal pain, drooling, odynophagia, and is unable to swallow even saliva. Upper gastrointestinal endoscopy shows deep circumferential esophageal burns suggestive of severe corrosive injury. Which of the following is the most appropriate next step in management?",
    options: [
      "Immediate esophagojejunostomy",
      "Endoscopic esophageal stent placement",
      "Feeding jejunostomy",
      "Gastrojejunostomy"
    ],
    answerIndex: 2,
    correctAnswerText: "Feeding jejunostomy"
  },
  {
    id: 34,
    image: "",
    question:
      "A 24-year-old man is brought after a high-speed road traffic accident. He was briefly conscious at the scene but rapidly became comatose. Non-contrast Computed Tomography of the brain shows multiple small punctate hemorrhagic lesions at the gray-white matter junction and in the corpus callosum with diffuse cerebral edema. Which of the following is the most likely diagnosis?",
    options: [
      "Extradural hematoma",
      "Diffuse axonal injury",
      "Subdural hematoma",
      "Basal ganglia hemorrhage"
    ],
    answerIndex: 1,
    correctAnswerText: "Diffuse axonal injury"
  },
  {
    id: 35,
    image: "",
    question:
      "A 59-year-old man undergoes abdominoperineal resection for low rectal carcinoma. During pelvic dissection near the origin of the inferior mesenteric artery, autonomic nerve injury occurs. Postoperatively, he complains of inability to ejaculate and difficulty emptying the bladder, while erectile function is relatively preserved. Which part of the autonomic nervous system is most likely injured?",
    options: [
      "Parasympathetic fibers from pelvic splanchnic nerves",
      "Sympathetic fibers in the superior hypogastric plexus",
      "Pudendal nerve",
      "Inferior rectal nerve"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Sympathetic fibers in the superior hypogastric plexus"
  },
  {
    id: 36,
    image: "",
    question:
      "A 64-year-old man presents with progressive painless jaundice, anorexia, and significant weight loss over 3 months. On examination, the gallbladder is palpable, enlarged, and non-tender. Contrast-enhanced Computed Tomography shows a mass in the head of the pancreas causing distal common bile duct obstruction. Which of the following additional findings is most likely to be associated with this condition?",
    options: [
      "Alpha-fetoprotein markedly elevated",
      "Courvoisier sign",
      "Pain relieved by meals with recurrent melena",
      "Multiple hepatic cysts with daughter cysts"
    ],
    answerIndex: 1,
    correctAnswerText: "Courvoisier sign"
  },
  {
    id: 37,
    image: "",
    question:
      "A 48-year-old woman underwent laparoscopic cholecystectomy 4 years ago. She now presents with recurrent right upper quadrant pain, fever, and jaundice. Ultrasonography shows a dilated common bile duct with an intraductal calculus. Which of the following best describes the most likely nature of this stone?",
    options: [
      "Secondary common bile duct stone",
      "Primary common bile duct stone",
      "Tertiary common bile duct stone",
      "Residual cystic duct stump stone"
    ],
    answerIndex: 2,
    correctAnswerText: "Tertiary common bile duct stone"
  },
  {
    id: 38,
    image: "",
    question:
      "A 58-year-old man presents with high-grade fever, chills, right upper quadrant pain, and jaundice for 3 days. He is confused and hypotensive. Ultrasonography shows a dilated common bile duct with multiple calculi. Which of the following is the most appropriate next step in management?",
    options: [
      "Immediate elective cholecystectomy",
      "Endoscopic Retrograde Cholangiopancreatography with biliary decompression",
      "Oral antibiotics and outpatient follow-up",
      "Percutaneous liver biopsy"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Endoscopic Retrograde Cholangiopancreatography with biliary decompression"
  },
  {
    id: 39,
    image: "",
    question:
      "A 62-year-old man presents with persistent vomiting, early satiety, weight loss, and abdominal discomfort. Endoscopy reveals an antral carcinoma causing gastric outlet obstruction. Contrast-enhanced Computed Tomography shows direct invasion into the pancreas and multiple metastatic deposits in the liver. Which of the following is the most appropriate management?",
    options: [
      "Radical distal gastrectomy with D2 lymphadenectomy",
      "Pancreaticoduodenectomy with curative intent",
      "Palliative gastrojejunostomy followed by systemic chemotherapy",
      "Total gastrectomy with hepatic metastasectomy"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Palliative gastrojejunostomy followed by systemic chemotherapy"
  },
  {
    id: 40,
    image: "",
    question:
      "A 27-year-old man is brought after a motorcycle accident. He is conscious, pulse is 92 per minute, blood pressure is 118/76 millimeters of mercury, and oxygen saturation is normal. He has tenderness and guarding in the left upper abdomen but no signs of peritonitis or shock. Which of the following is the most appropriate investigation of choice to evaluate intra-abdominal injury in this hemodynamically stable patient?",
    options: [
      "Focused Assessment with Sonography for Trauma alone",
      "Contrast-enhanced Computed Tomography of the abdomen",
      "Diagnostic peritoneal lavage",
      "Immediate exploratory laparotomy"
    ],
    answerIndex: 1,
    correctAnswerText: "Contrast-enhanced Computed Tomography of the abdomen"
  },
  {
    id: 41,
    image: "",
    question:
      "A 26-year-old man is brought to the emergency department after a road traffic accident. On examination, he opens his eyes to speech, utters incomprehensible sounds, and shows abnormal flexion of the upper limbs in response to painful stimulus. Which of the following is the correct Glasgow Coma Scale score?",
    options: ["E3V2M3", "E2V3M4", "E3V3M2", "E4V2M3"],
    answerIndex: 0,
    correctAnswerText: "E3V2M3"
  },
  {
    id: 42,
    image: "",
    question:
      "A 54-year-old man presents with a swelling in the groin that appears above and medial to the pubic tubercle. On examination, the swelling lies medial to the inferior epigastric vessels and protrudes through the posterior wall of the inguinal canal. Which of the following operative repairs is classically most appropriate for this hernia?",
    options: [
      "Bassini repair",
      "Lichtenstein tension-free mesh repair",
      "McVay repair only for all cases",
      "Shouldice repair only in children"
    ],
    answerIndex: 1,
    correctAnswerText: "Lichtenstein tension-free mesh repair"
  },
  {
    id: 43,
    image: "",
    question:
      "A 46-year-old man with chronic alcohol use presents with severe epigastric pain radiating to the back, vomiting, and abdominal distension. Plain radiograph of the abdomen shows a localized loop of dilated proximal jejunum in the left upper quadrant near the pancreas, without generalized small bowel dilatation. Which of the following radiological signs is most likely being described?",
    options: [
      "Ground glass appearance",
      "Sentinel loop sign",
      "Rigler sign",
      "String sign of Kantor"
    ],
    answerIndex: 1,
    correctAnswerText: "Sentinel loop sign"
  },
  {
    id: 44,
    image: "",
    question:
      "A 43-year-old man undergoes laparoscopic mesh repair for bilateral inguinal hernia. One week later, he complains of burning pain and numbness over the upper medial thigh and root of the scrotum. There is no quadriceps weakness and no sensory loss over the lateral thigh. Which of the following nerves is most likely injured?",
    options: [
      "Lateral cutaneous nerve of thigh",
      "Femoral nerve",
      "Genital branch of genitofemoral nerve",
      "Iliohypogastric nerve"
    ],
    answerIndex: 2,
    correctAnswerText: "Genital branch of genitofemoral nerve"
  },
  {
    id: 45,
    image: "",
    question:
      "A 62-year-old man develops profuse watery diarrhea and lower abdominal cramps 6 days after receiving clindamycin for a dental infection. Colonoscopy reveals multiple elevated yellow-white plaques scattered over an erythematous colonic mucosa. Which of the following is the most likely etiological organism?",
    options: [
      "Entamoeba histolytica",
      "Clostridioides difficile",
      "Salmonella typhi",
      "Cytomegalovirus"
    ],
    answerIndex: 1,
    correctAnswerText: "Clostridioides difficile"
  },
  {
    id: 46,
    image: "",
    question:
      "A 48-year-old man with chronic alcohol-related liver disease presents to the emergency department with profuse hematemesis and dizziness. He is pale, tachycardic, and hypotensive. Intravenous proton pump inhibitor therapy has already been started. Ultrasonography shows features of portal hypertension. Which of the following is the most appropriate immediate next step in management?",
    options: [
      "Emergency upper gastrointestinal endoscopy before resuscitation",
      "Intravenous fluid resuscitation and blood product support as needed",
      "Liver biopsy to confirm cirrhosis",
      "Start oral non-selective beta blocker immediately"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Intravenous fluid resuscitation and blood product support as needed"
  },
  {
    id: 47,
    image: "",
    question:
      "A 63-year-old man with postoperative sepsis is in the intensive care unit and is being maintained on total parenteral nutrition because of prolonged paralytic ileus. On daily monitoring, the team is most concerned about a common metabolic complication related to the high dextrose load of parenteral feeding, especially in the setting of stress-induced insulin resistance. Which of the following is the most likely complication?",
    options: [
      "Hypocalcemia",
      "Hyperglycemia",
      "Hyponatremia",
      "Metabolic alkalosis"
    ],
    answerIndex: 1,
    correctAnswerText: "Hyperglycemia"
  },
  {
    id: 48,
    image: "",
    question:
      "A 28-year-old woman sustains deep dermal and full-thickness flame burns over 35 percent of the total body surface area. After excision of the burn wound, the reconstructive surgeon wants a graft that can cover a large area, can be meshed, and allows the donor site to heal spontaneously for repeated harvesting if needed. Which of the following is the most appropriate graft?",
    options: [
      "Full-thickness skin graft",
      "Split-thickness skin graft",
      "Composite graft",
      "Pedicled flap"
    ],
    answerIndex: 1,
    correctAnswerText: "Split-thickness skin graft"
  },
  {
    id: 49,
    image: "",
    question:
      "A 29-year-old man is brought to the emergency department after a knife assault to the abdomen. He is pale, restless, and hypotensive. On examination, there is a penetrating wound in the left lower abdomen with diffuse abdominal tenderness, guarding, and rebound tenderness. Which of the following is the most appropriate next step in management?",
    options: [
      "Contrast-enhanced Computed Tomography of the abdomen",
      "Diagnostic laparoscopy",
      "Emergency exploratory laparotomy",
      "Focused Assessment with Sonography for Trauma only"
    ],
    answerIndex: 2,
    correctAnswerText: "Emergency exploratory laparotomy"
  },
  {
    id: 50,
    image: "",
    question:
      "A 61-year-old man with known sigmoid diverticular disease presents with fever, severe lower abdominal pain, abdominal rigidity, and septic shock. Emergency laparotomy reveals generalized purulent contamination of the peritoneal cavity without obvious fecal matter. According to the modified Hinchey classification, which stage best describes this condition?",
    options: ["Stage 1", "Stage 2", "Stage 3", "Stage 4"],
    answerIndex: 2,
    correctAnswerText: "Stage 3"
  },
  {
    id: 51,
    image: "",
    question:
      "A 68-year-old woman presents with obstructive jaundice, pruritus, and right upper quadrant discomfort. Ultrasonography shows a distended gallbladder and a dilated common bile duct with an obstructing stone in its distal part. She is hemodynamically stable and has no generalized peritonitis. Which of the following is the most appropriate next step in management?",
    options: [
      "Immediate cholecystectomy",
      "Endoscopic Retrograde Cholangiopancreatography with stone extraction",
      "Contrast-enhanced Computed Tomography scan only",
      "Observation with analgesics and review after 1 week"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Endoscopic Retrograde Cholangiopancreatography with stone extraction"
  },
  {
    id: 52,
    image: "",
    question:
      "A 68-year-old man with carcinoma lung is being evaluated before major thoracic surgery. The team decides to use the Thoracoscore for preoperative risk stratification. Which of the following parameters is included in the Thoracoscore?",
    options: [
      "Postoperative air leak duration",
      "American Society of Anesthesiologists (ASA) classification",
      "Need for postoperative ventilatory support",
      "Intraoperative blood loss"
    ],
    answerIndex: 1,
    correctAnswerText: "American Society of Anesthesiologists (ASA) classification"
  },
  {
    id: 53,
    image: "",
    question:
      "A 9-year-old child with acute liver failure due to Wilson disease is being evaluated for urgent liver transplantation. The treating team applies the Nazer prognostic index. Which of the following findings is most strongly suggestive of a poor prognosis and supports the need for liver transplantation?",
    options: [
      "Serum bilirubin 3 mg/dL, prothrombin time 18 seconds, aspartate aminotransferase 60 IU/L",
      "Serum bilirubin 8 mg/dL, prothrombin time 55 seconds, aspartate aminotransferase 180 IU/L",
      "Nazer prognostic score of 9 or more",
      "Presence of mild hepatomegaly without coagulopathy"
    ],
    answerIndex: 2,
    correctAnswerText: "Nazer prognostic score of 9 or more"
  },
  {
    id: 54,
    image: "",
    question:
      "A 27-year-old man is brought to the emergency department after a road traffic accident. He is conscious, blood pressure is stable, and pulse rate is normal. He has abdominal pain and tenderness over the left flank. Chest X-ray shows no hemothorax or pneumothorax. What is the most appropriate next step in evaluation?",
    options: [
      "Immediate contrast-enhanced computed tomography (CECT) of chest",
      "Extended Focused Assessment with Sonography for Trauma (eFAST)",
      "Diagnostic peritoneal lavage",
      "Tube thoracostomy"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Extended Focused Assessment with Sonography for Trauma (eFAST)"
  },
  {
    id: 55,
    image: "",
    question:
      "A 52-year-old man presents to the emergency department with severe retrosternal chest pain after repeated forceful vomiting following an episode of binge eating and alcohol intake. On examination, he has tachycardia, subcutaneous crepitus over the neck, and mild respiratory distress. Chest X-ray shows left-sided pleural effusion with pneumomediastinum. What is the most likely diagnosis?",
    options: [
      "Mallory–Weiss tear",
      "Spontaneous esophageal rupture",
      "Acute pancreatitis",
      "Perforated peptic ulcer"
    ],
    answerIndex: 1,
    correctAnswerText: "Spontaneous esophageal rupture"
  },
  {
    id: 56,
    image: "",
    question:
      "A 34-year-old woman presents with recurrent episodes of sweating, palpitations, confusion, and blurred vision, especially when she skips meals. Her symptoms improve rapidly after taking glucose. During a supervised fast, her blood glucose is found to be low with inappropriately elevated insulin levels. Which of the following is the most likely diagnosis?",
    options: ["Gastrinoma", "Insulinoma", "Somatostatinoma", "VIPoma"],
    answerIndex: 1,
    correctAnswerText: "Insulinoma"
  },
  {
    id: 57,
    image: "",
    question:
      "A 40-year-old man presents with progressive dysphagia for both solids and liquids along with regurgitation of undigested food. High-resolution esophageal manometry shows elevated Integrated Relaxation Pressure (IRP), 100% failed peristalsis, and panesophageal pressurization in more than 20% of swallows. According to the Chicago classification, which type of achalasia is most likely?",
    options: [
      "Type I achalasia",
      "Type II achalasia",
      "Type III achalasia",
      "Distal esophageal spasm"
    ],
    answerIndex: 1,
    correctAnswerText: "Type II achalasia"
  },
  {
    id: 58,
    image: "",
    question:
      "A 58-year-old chronic smoker presents with progressive pain in both buttocks while walking, erectile dysfunction, and diminished pulses in both lower limbs. On examination, femoral pulses are absent bilaterally. Which of the following is the most likely site of arterial occlusion?",
    options: [
      "External iliac artery",
      "Common femoral artery",
      "Aortic bifurcation",
      "Popliteal artery"
    ],
    answerIndex: 2,
    correctAnswerText: "Aortic bifurcation"
  },
  {
    id: 59,
    image: "",
    question:
      "A bus carrying factory workers meets with an accident, and multiple victims are brought to the emergency department. One injured patient is awake, able to walk without assistance, has superficial lacerations over the forearm, and complains only of mild pain. His airway, breathing, and circulation are stable. Under mass-casualty triage, how should this patient be categorized?",
    options: [
      "Red category",
      "Yellow category",
      "Green category",
      "Black category"
    ],
    answerIndex: 2,
    correctAnswerText: "Green category"
  },
  {
    id: 60,
    image: "",
    question:
      "A 26-year-old man is brought to the emergency department after a road traffic accident. He is conscious but tachypneic, with bruising over the chest and abdomen. The trauma team begins evaluation according to the Advanced Trauma Life Support approach. Which of the following is most appropriately performed during the secondary survey rather than the primary survey?",
    options: [
      "Assessment of airway patency with cervical spine protection",
      "Exposure of the patient with prevention of hypothermia",
      "Focused neurological assessment using Glasgow Coma Scale",
      "Detailed history using the AMPLE mnemonic"
    ],
    answerIndex: 3,
    correctAnswerText: "Detailed history using the AMPLE mnemonic"
  },
  {
    id: 61,
    image: "",
    question:
      "A 67-year-old man with a history of smoking and hypertension is found to have an incidental infrarenal abdominal aortic aneurysm measuring 4.8 cm on ultrasonography. He has no abdominal pain, back pain, or signs of rupture. What is the most appropriate management?",
    options: [
      "Immediate open surgical repair",
      "Endovascular aneurysm repair for all aneurysms more than 4 cm",
      "Regular surveillance with risk factor modification",
      "Emergency laparotomy"
    ],
    answerIndex: 2,
    correctAnswerText: "Regular surveillance with risk factor modification"
  },
  {
    id: 62,
    image: "",
    question:
      "A 46-year-old man develops fever, persistent abdominal pain, and leukocytosis 8 days after surgery for perforation peritonitis. He has been lying supine for most of his postoperative period. Ultrasound abdomen is planned to look for a localized intraperitoneal collection. In a recumbent patient, which of the following is the most likely site for intraperitoneal abscess formation?",
    options: [
      "Left subphrenic space",
      "Right subhepatic space",
      "Lesser sac",
      "Left paracolic gutter"
    ],
    answerIndex: 1,
    correctAnswerText: "Right subhepatic space"
  },

  {
    id: 63,
    image: "",
    question:
      "A 46-year-old man undergoes upper gastrointestinal endoscopy for progressive dysphagia. The endoscopist notes that the scope passes a normal constriction at 15 centimeters from the upper incisors, then another narrowing near the level of the aortic arch and left main bronchus, and finally through the diaphragmatic hiatus before entering the stomach. Which of the following is the correct statement regarding the anatomy of the esophagus?",
    options: [
      "The esophagus begins at the level of fifth cervical vertebra and is 15 centimeters long",
      "The esophagus is about 25 centimeters long, begins at sixth cervical vertebra, and has normal constrictions at about 15 centimeters, 23.5 centimeters, and at the diaphragmatic hiatus",
      "The gastroesophageal junction is at tenth thoracic vertebra and the aortic constriction is caused by the right main bronchus",
      "The diaphragmatic opening for the esophagus is at twelfth thoracic vertebra along with aorta and thoracic duct"
    ],
    answerIndex: 1,
    correctAnswerText:
      "The esophagus is about 25 centimeters long, begins at sixth cervical vertebra, and has normal constrictions at about 15 centimeters, 23.5 centimeters, and at the diaphragmatic hiatus"
  },
  {
    id: 64,
    image: "",
    question:
      "A 55-year-old man with long-standing Gastroesophageal Reflux Disease (GERD) undergoes endoscopy. The lower esophagus shows replacement of normal squamous epithelium by columnar-lined mucosa with intestinal metaplasia. Which of the following statements is most accurate?",
    options: [
      "Normal esophageal mucosa is keratinizing stratified squamous epithelium and Barrett esophagus predisposes mainly to squamous cell carcinoma",
      "Barrett esophagus is diagnosed when columnar epithelium undergoes intestinal metaplasia, and long-segment disease is more than 3 centimeters",
      "The upper one-third of esophagus is lined by simple columnar epithelium and commonly develops adenocarcinoma",
      "Methlyene blue is the best histological stain for Barrett esophagus, whereas Lugol iodine stains columnar epithelium selectively"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Barrett esophagus is diagnosed when columnar epithelium undergoes intestinal metaplasia, and long-segment disease is more than 3 centimeters"
  },
  {
    id: 65,
    image: "",
    question:
      "A 48-year-old man presents with intermittent dysphagia for solid food for 8 months. He has no difficulty swallowing liquids. Symptoms are mild, episodic, and occasionally worsen when eating meat. Barium swallow shows a symmetrical concentric narrowing at the gastroesophageal junction just above the diaphragm. Which of the following is the most likely diagnosis?",
    options: [
      "Esophageal web in post-cricoid region",
      "Schatzki ring",
      "Zenker diverticulum",
      "Achalasia cardia"
    ],
    answerIndex: 1,
    correctAnswerText: "Schatzki ring"
  },
  {
    id: 66,
    image: "",
    question:
      "A 43-year-old woman presents with fatigue, dysphagia, and angular cheilitis. Examination reveals pallor, glossitis, and koilonychia. Barium swallow shows a thin mucosal shelf in the post-cricoid region of the cervical esophagus. Which of the following is the most likely diagnosis?",
    options: [
      "Schatzki ring",
      "Esophageal web associated with Plummer-Vinson syndrome",
      "Zenker diverticulum",
      "Lower esophageal peptic stricture"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Esophageal web associated with Plummer-Vinson syndrome"
  },
  {
    id: 67,
    image: "",
    question:
      "A 70-year-old man is diagnosed with Zenker diverticulum measuring 5 centimeters on barium swallow. He has significant regurgitation and recurrent aspiration. Which of the following is the most appropriate treatment?",
    options: [
      "Iron therapy and balloon dilatation",
      "Proton pump inhibitor therapy alone",
      "Diverticulectomy with cricopharyngeal myotomy",
      "Observation only because malignancy risk is absent"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Diverticulectomy with cricopharyngeal myotomy"
  },
  {
    id: 68,
    image: "",
    question:
      "A term newborn develops excessive salivation soon after birth and has repeated choking and coughing episodes during feeds. A radiopaque infant feeding tube cannot be advanced into the stomach and coils in the upper mediastinum on X-ray. The abdomen is distended with gas shadows in the bowel. Which of the following is the most likely diagnosis?",
    options: [
      "Pure esophageal atresia without fistula",
      "Esophageal atresia with distal tracheoesophageal fistula",
      "Isolated H-type tracheoesophageal fistula",
      "Congenital hypertrophic pyloric stenosis"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Esophageal atresia with distal tracheoesophageal fistula"
  },
  {
    id: 69,
    image: "",
    question:
      "A patient with suspected Boerhaave syndrome undergoes chest examination. A crunching, rasping sound synchronous with the heartbeat is heard over the precordium. Which of the following best describes this sign?",
    options: [
      "Murphy sign, suggestive of diaphragmatic irritation",
      "Hamman crunch, suggestive of pneumomediastinum",
      "Cullen sign, suggestive of retroperitoneal hemorrhage",
      "Succussion splash, suggestive of gastric outlet obstruction"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Hamman crunch, suggestive of pneumomediastinum"
  },
  {
    id: 70,
    image: "",
    question:
      "A 50-year-old woman develops a small iatrogenic cervical esophageal perforation during flexible endoscopy. She is hemodynamically stable and has minimal contamination. Which of the following is the best next step?",
    options: [
      "Conservative management",
      "Immediate esophagectomy",
      "Left posterolateral thoracotomy in all cases",
      "Total gastrectomy with feeding jejunostomy"
    ],
    answerIndex: 0,
    correctAnswerText: "Conservative management"
  },
  {
    id: 71,
    image: "",
    question:
      "A 32-year-old pregnant woman presents with hematemesis after repeated episodes of vomiting. Endoscopy shows a longitudinal mucosal tear just below the gastroesophageal junction, usually on the right side. Which of the following is the most likely diagnosis?",
    options: [
      "Boerhaave syndrome",
      "Mallory-Weiss tear",
      "Esophageal varix rupture",
      "Barrett esophagus"
    ],
    answerIndex: 1,
    correctAnswerText: "Mallory-Weiss tear"
  },
  {
    id: 72,
    image: "",
    question:
      "A 28-year-old woman presents with progressive dysphagia for both liquids and solids, regurgitation of retained food, nocturnal aspiration, and weight loss. Manometry shows failure of Lower Esophageal Sphincter (LES) relaxation with absent peristalsis. Which of the following is the most likely underlying pathology in primary achalasia cardia?",
    options: [
      "Hypertrophy of Meissner plexus with excessive inhibitory input",
      "Absence of inhibitory ganglion cells in Auerbach plexus",
      "Fibrosis of upper esophageal sphincter with preserved myenteric plexus",
      "Hyperplasia of submucosal ganglia causing high resting pressure"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Absence of inhibitory ganglion cells in Auerbach plexus"
  },
  {
    id: 73,
    image: "",
    question:
      "A 52-year-old obese man presents with chronic heartburn and regurgitation. Endoscopy shows upward displacement of the gastroesophageal junction above the diaphragm. Which of the following is the most likely diagnosis and the most appropriate general management approach?",
    options: [
      "Rolling hiatus hernia; surgery is always indicated",
      "Sliding hiatus hernia; usually managed conservatively and surgery is rarely needed",
      "Mixed hiatus hernia; only endoscopic injection is indicated",
      "Congenital diaphragmatic hernia; urgent thoracotomy in all cases"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Sliding hiatus hernia; usually managed conservatively and surgery is rarely needed"
  },
  {
    id: 74,
    image: "",
    question:
      "A 64-year-old woman presents with postprandial chest discomfort, dysphagia, and epigastric pain. Imaging reveals herniation of only the gastric fundus through the esophageal hiatus while the gastroesophageal junction remains near its normal position. Which of the following complications is she most at risk for?",
    options: [
      "Cameron ulcer, ischemia, gangrene, and volvulus",
      "Barrett esophagus only",
      "Diffuse esophageal spasm",
      "Achalasia cardia"
    ],
    answerIndex: 0,
    correctAnswerText:
      "Cameron ulcer, ischemia, gangrene, and volvulus"
  },
  {
    id: 75,
    image: "",
    question:
      "A 45-year-old man with severe chronic reflux symptoms undergoes ambulatory pH monitoring. A pH probe is placed 5 centimeters above the gastroesophageal junction. Which of the following findings is diagnostic of pathological reflux, and which score is commonly used?",
    options: [
      "pH more than 7 for 5 minutes; Glasgow score",
      "pH less than 4 for 5 minutes; DeMeester score",
      "pH less than 6 for 30 minutes; MELD score",
      "pH more than 4 for 5 minutes; Chicago score"
    ],
    answerIndex: 1,
    correctAnswerText:
      "pH less than 4 for 5 minutes; DeMeester score"
  },
  {
    id: 76,
    image: "",
    question:
      "A 56-year-old man with severe reflux and a short esophagus is undergoing surgery. The surgeon plans an esophageal-lengthening procedure before wrapping the fundus. Which of the following is the correct procedure, and which newer endoscopic or device-based modalities are also used in reflux management?",
    options: [
      "Collis gastroplasty; Stretta, LINX, and Transoral Incisionless Fundoplication",
      "Heller myotomy; POEM and balloon dilatation",
      "Foker procedure; endoscopic clipping and SEMS",
      "Dor myotomy; radiofrequency ablation only"
    ],
    answerIndex: 0,
    correctAnswerText:
      "Collis gastroplasty; Stretta, LINX, and Transoral Incisionless Fundoplication"
  },
  {
    id: 77,
    image: "",
    question:
      "A 62-year-old man with progressive dysphagia is diagnosed with esophageal malignancy. Which of the following site–histology pairs is most commonly seen?",
    options: [
      "Upper one-third – Adenocarcinoma",
      "Mid one-third – Squamous cell carcinoma",
      "Lower one-third – Squamous cell carcinoma",
      "Cervical esophagus – Adenocarcinoma"
    ],
    answerIndex: 1,
    correctAnswerText: "Mid one-third – Squamous cell carcinoma"
  },
  {
    id: 78,
    image: "",
    question:
      "A patient with biopsy-proven esophageal carcinoma is being evaluated for locoregional staging. Which investigation is best for assessing depth of tumor invasion and regional lymph node status?",
    options: [
      "Barium swallow",
      "Endoscopic ultrasound",
      "Plain computed tomography",
      "Positron emission tomography only"
    ],
    answerIndex: 1,
    correctAnswerText: "Endoscopic ultrasound"
  },
  {
    id: 79,
    image: "",
    question:
      "A 5-week-old infant with suspected congenital hypertrophic pyloric stenosis undergoes evaluation. Which of the following is the investigation of choice, and which sonographic criterion is most supportive of the diagnosis?",
    options: [
      "Barium meal; pyloric length less than 10 millimeters",
      "Ultrasonography; pyloric muscle thickness more than 4 millimeters",
      "X-ray abdomen; double-bubble sign",
      "Contrast-enhanced computed tomography; pyloric width less than 5 millimeters"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Ultrasonography; pyloric muscle thickness more than 4 millimeters"
  },
  {
    id: 80,
    image: "",
    question:
      "A 3-year-old child presents with recurrent upper abdominal fullness, intermittent non-bilious vomiting, and chronic symptoms. Imaging reveals rotation of the stomach around an axis connecting the greater and lesser curvatures. Which of the following is the most likely diagnosis?",
    options: [
      "Organo-axial gastric volvulus",
      "Mesentero-axial gastric volvulus",
      "Trichobezoar",
      "Menetrier disease"
    ],
    answerIndex: 1,
    correctAnswerText: "Mesentero-axial gastric volvulus"
  },
  {
    id: 81,
    image: "",
    question:
      "A 16-year-old girl with psychiatric illness presents with abdominal pain, vomiting, and a firm mobile epigastric mass with indentation on palpation. She has a history of eating hair. Which of the following is the most likely diagnosis?",
    options: [
      "Phytobezoar",
      "Pharmacobezoar",
      "Trichobezoar",
      "Metal bezoar"
    ],
    answerIndex: 2,
    correctAnswerText: "Trichobezoar"
  },
  {
    id: 82,
    image: "",
    question:
      "A 54-year-old man presents with epigastric pain, diarrhea, weight loss, and edema. Endoscopy shows giant rugal folds predominantly involving the proximal stomach. Laboratory evaluation reveals hypoproteinemia. Which of the following is the most likely diagnosis and best associated pathophysiology?",
    options: [
      "Zollinger-Ellison syndrome; parietal cell hyperplasia with acid hypersecretion",
      "Menetrier disease; foveolar hyperplasia causing protein-losing gastropathy",
      "Gastric lymphoma; transmural lymphoid infiltration with hyperchlorhydria",
      "Peptic ulcer disease; mucosal atrophy with decreased mucus production"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Menetrier disease; foveolar hyperplasia causing protein-losing gastropathy"
  },
  {
    id: 83,
    image: "",
    question:
      "A patient with a gastric phytobezoar asks which component of vegetable fiber is indigestible and contributes most to bezoar persistence. Which of the following is correct?",
    options: [
      "Pectin is completely indigestible",
      "Cellulose is fully digested in humans",
      "Lignin is indigestible",
      "Starch polymerization forms all phytobezoars"
    ],
    answerIndex: 2,
    correctAnswerText: "Lignin is indigestible"
  },
  {
    id: 84,
    image: "",
    question:
      "A patient with chronic recurrent duodenal ulcer is planned for acid-reducing surgery. The surgeon wants to preserve gastric motor innervation to the pylorus so that a drainage procedure is not required. Which of the following is the best option?",
    options: [
      "Truncal vagotomy",
      "Selective vagotomy",
      "Highly selective vagotomy",
      "Billroth II gastrectomy"
    ],
    answerIndex: 2,
    correctAnswerText: "Highly selective vagotomy"
  },
  {
    id: 85,
    image: "",
    question:
      "A 60-year-old man underwent distal gastrectomy with gastrojejunostomy for peptic ulcer disease 1 month ago. He now develops palpitations, abdominal discomfort, bloating, tachycardia, diarrhea, and flushing within 15 minutes of meals. Two hours later, he often experiences sweating and weakness that improve after eating again. Which of the following is the most appropriate dietary advice?",
    options: [
      "Increase simple carbohydrate intake during meals",
      "Large frequent liquid-rich meals",
      "Small frequent dry meals with low carbohydrate and high protein intake",
      "High fiber only, without change in meal frequency"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Small frequent dry meals with low carbohydrate and high protein intake"
  },
  {
    id: 86,
    image: "",
    question:
      "A 58-year-old man presents with hematemesis and melena. After stabilization, endoscopy shows a peptic ulcer with a nonbleeding visible vessel. Which of the following is the correct interpretation and management implication?",
    options: [
      "Forrest III lesion; low risk of rebleeding; discharge without therapy",
      "Forrest IIA lesion; past bleeding with high rebleeding risk; requires endoscopic therapy",
      "Forrest IB lesion; active oozing; no need for intervention",
      "Forrest IIC lesion; spurting arterial bleed with highest risk of rebleeding"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Forrest IIA lesion; past bleeding with high rebleeding risk; requires endoscopic therapy"
  },
  {
    id: 87,
    image: "",
    question:
      "A 62-year-old man is found to have a tumor centered 1 centimeter above the gastroesophageal junction. According to the Siewert classification, this lesion is best classified as:",
    options: [
      "Type I, and it is considered gastric carcinoma",
      "Type II, and it is considered true cardia carcinoma",
      "Type III, and it is considered esophageal carcinoma",
      "Type II, and it is considered distal gastric carcinoma"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Type II, and it is considered true cardia carcinoma"
  },
  {
    id: 88,
    image: "",
    question:
      "A 58-year-old man presents with anorexia, weight loss, progressive dyspepsia, vomiting, and anemia. On examination, he has a hard left supraclavicular lymph node. Upper gastrointestinal endoscopy with biopsy confirms gastric adenocarcinoma involving the distal stomach. Which of the following statements is most accurate regarding the spread and prognosis of this malignancy?",
    options: [
      "The most important prognostic indicator is tumor size alone",
      "Left supraclavicular nodal enlargement represents Irish node",
      "Depth of tumor invasion is the most important indicator of metastatic potential",
      "Best prognosis is seen in diffusely infiltrative linitis plastica type"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Depth of tumor invasion is the most important indicator of metastatic potential"
  },
  {
    id: 89,
    image: "",
    question:
      "A 58-year-old man presents with upper gastrointestinal bleeding and vague abdominal discomfort. Contrast-Enhanced Computed Tomography reveals a large exophytic gastric mass. Biopsy is planned. Which of the following statements regarding Gastrointestinal Stromal Tumor is most accurate?",
    options: [
      "It is a true smooth muscle tumor arising from the muscularis propria and is best called leiomyosarcoma",
      "Lymph node metastasis is common, and routine lymphadenectomy is mandatory",
      "It arises from mesenchymal tissue related to the interstitial cells of Cajal, and the liver is the most common site of metastasis",
      "The ileum is the most common site, and peritoneal dissemination is rare"
    ],
    answerIndex: 2,
    correctAnswerText:
      "It arises from mesenchymal tissue related to the interstitial cells of Cajal, and the liver is the most common site of metastasis"
  },
  {
    id: 90,
    image: "",
    question:
      "A 9-month-old infant is brought with recurrent episodes of severe crying, drawing up of legs, and vomiting. Between episodes the child appears relatively comfortable. On examination, there is an empty right iliac fossa and a sausage-shaped lump in the abdomen. The stool passed in the emergency room is mixed with blood and mucus. What is the most likely diagnosis?",
    options: [
      "Hypertrophic pyloric stenosis",
      "Intussusception",
      "Rectal prolapse",
      "Hirschsprung disease"
    ],
    answerIndex: 1,
    correctAnswerText: "Intussusception"
  },
  {
    id: 91,
    image: "",
    question:
      "A 1-year-old child is diagnosed with ileo-colic intussusception. There are no signs of perforation, shock, or gangrene. What is the best initial management?",
    options: [
      "Immediate resection and anastomosis in all cases",
      "Reduction by air or enema",
      "Only intravenous antibiotics and observation",
      "Manual reduction by squeezing the proximal loop first"
    ],
    answerIndex: 1,
    correctAnswerText: "Reduction by air or enema"
  },
  {
    id: 92,
    image: "",
    question:
      "A patient with suspected midgut carcinoid has episodic flushing, diarrhea, and features of right-sided valvular heart disease. Which of the following is the investigation of choice for localization of this tumor?",
    options: [
      "Contrast-enhanced computed tomography only",
      "Somatostatin receptor scintigraphy using radiolabeled octreotide or related agents",
      "Plain abdominal radiograph",
      "Diagnostic laparoscopy as the first test"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Somatostatin receptor scintigraphy using radiolabeled octreotide or related agents"
  },
  {
    id: 93,
    image: "",
    question:
      "A 42-year-old man with a previous history of laparotomy presents with colicky abdominal pain, repeated vomiting, abdominal distension, and absolute constipation. On examination, bowel sounds are exaggerated. Which of the following best describes the type of obstruction in this patient?",
    options: [
      "Adynamic obstruction due to ileus",
      "Dynamic obstruction due to mechanical cause",
      "Colonic pseudo-obstruction",
      "Mesenteric ischemia without obstruction"
    ],
    answerIndex: 1,
    correctAnswerText: "Dynamic obstruction due to mechanical cause"
  },
  {
    id: 94,
    image: "",
    question:
      "A 72-year-old hospitalized man develops progressive abdominal distension and constipation. Pain is mild and late. Imaging shows a dilated colon with air present in the rectum and marked cecal dilatation. There is no mechanical lesion. Which of the following is the best next pharmacologic treatment?",
    options: ["Octreotide", "Neostigmine", "Loperamide", "Bisacodyl"],
    answerIndex: 1,
    correctAnswerText: "Neostigmine"
  },
  {
    id: 95,
    image: "",
    question:
      "A 24-year-old woman presents with chronic diarrhea, abdominal bloating, steatorrhea, weight loss, and an intensely pruritic vesicular rash over the extensor surfaces. Serology is positive for Immunoglobulin A anti-tissue transglutaminase antibodies. Which of the following is the most likely underlying diagnosis?",
    options: [
      "Tropical sprue",
      "Celiac disease",
      "Crohn disease",
      "Ulcerative colitis"
    ],
    answerIndex: 1,
    correctAnswerText: "Celiac disease"
  },
  {
    id: 96,
    image: "",
    question:
      "A 38-year-old man undergoes extensive small bowel resection for mesenteric ischemia. After recovery, he develops chronic diarrhea, steatorrhea, bloating, and nutritional deficiencies. Which of the following additional complications is especially expected after ileal resection?",
    options: [
      "Copper excess and uric acid stones",
      "Bile salt deficiency leading to gallstones and oxalate renal stones",
      "Iron overload and calcium phosphate stones",
      "Increased bile salt pool with prevention of steatorrhea"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Bile salt deficiency leading to gallstones and oxalate renal stones"
  },
  {
    id: 97,
    image: "",
    question:
      "A patient with short bowel syndrome is being considered for medical therapy to enhance intestinal adaptation and reduce parenteral nutritional dependence. Which of the following is the drug of choice?",
    options: ["Neostigmine", "Teduglutide", "Octreotide", "Mesalamine"],
    answerIndex: 1,
    correctAnswerText: "Teduglutide"
  },
  {
    id: 98,
    image: "",
    question:
      "A child presents with a painless mid-abdominal swelling. On examination, the swelling is mobile at a right angle to the root of the mesentery and a band of resonance is present in front of the swelling. Which of the following best describes this clinical picture?",
    options: [
      "Courvoisier sign",
      "Tillaux triad of mesenteric cyst",
      "Grey Turner sign",
      "Dance sign of intussusception"
    ],
    answerIndex: 1,
    correctAnswerText: "Tillaux triad of mesenteric cyst"
  },
  {
    id: 99,
    image: "",
    question:
      "A 2-month-old infant presents with sudden onset bilious vomiting, abdominal distension, excessive crying, and features of acute small bowel obstruction. Imaging with contrast study shows a corkscrew appearance of the bowel, and Computed Tomography scan demonstrates a whirlpool sign. Which of the following is the most appropriate definitive management?",
    options: [
      "Simple adhesiolysis only",
      "Ladd’s operation",
      "Right hemicolectomy",
      "Gastrojejunostomy"
    ],
    answerIndex: 1,
    correctAnswerText: "Ladd’s operation"
  },
  {
    id: 100,
    image: "",
    question:
      "A 22-year-old man presents with abdominal pain that started around the umbilicus and later shifted to the right iliac fossa. He has vomiting and low-grade fever. On examination, there is guarding, tenderness, and muscular rigidity in the right iliac fossa. Which of the following best explains the classical migration of pain in acute appendicitis?",
    options: [
      "Initial pain is somatic due to parietal peritoneal irritation and later becomes visceral",
      "Initial pain is visceral due to appendicular distension and later becomes somatic due to parietal peritoneal involvement",
      "Initial pain is referred from the gallbladder and later localizes to the appendix",
      "Initial pain is due to mesenteric adenitis and later shifts because of psoas spasm"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Initial pain is visceral due to appendicular distension and later becomes somatic due to parietal peritoneal involvement"
  },
  {
    id: 101,
    image: "",
    question:
      "A 10-year-old child presents with anorexia, migratory right iliac fossa pain, nausea, tenderness, rebound tenderness, leukocytosis, and neutrophilic shift to the left. Which of the following statements regarding the Alvarado score is correct?",
    options: [
      "Score less than 4 strongly suggests appendicitis",
      "Score 5 to 6 confirms appendicitis and mandates immediate surgery",
      "Score greater than 7 is strongly suggestive of appendicitis",
      "Ultrasound finding is included in the Alvarado score"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Score greater than 7 is strongly suggestive of appendicitis"
  },
  {
    id: 102,
    image: "",
    question:
      "A 48-year-old woman is found to have a mucinous neoplasm of the appendix that ruptures into the peritoneal cavity, producing gelatinous deposits throughout the abdomen. Which of the following is the most appropriate treatment?",
    options: [
      "Appendicectomy alone",
      "Right hemicolectomy only",
      "Hyperthermic intraperitoneal chemotherapy",
      "Ochsner-Sherren regimen"
    ],
    answerIndex: 2,
    correctAnswerText: "Hyperthermic intraperitoneal chemotherapy"
  },
  {
    id: 103,
    image: "",
    question:
      "A 72-year-old man with chronic constipation presents with progressive abdominal distension, non-colicky abdominal pain, and features of large bowel obstruction. Abdominal X-ray shows a massively dilated loop of colon with a coffee bean appearance. Which of the following is the most likely diagnosis?",
    options: [
      "Cecal volvulus",
      "Sigmoid volvulus",
      "Compound volvulus",
      "Cecal bascule"
    ],
    answerIndex: 1,
    correctAnswerText: "Sigmoid volvulus"
  },
  {
    id: 104,
    image: "",
    question:
      "A 65-year-old man has recurrent painless episodes of lower gastrointestinal bleeding. Colonoscopy shows multiple diverticula in the colon. Which of the following statements regarding diverticular disease is most accurate?",
    options: [
      "Diverticulosis is more common in India because fiber increases risk",
      "The most common site is the rectum",
      "Diverticulosis is the most common cause of colonic bleeding",
      "Diverticulitis refers to congenital colonic outpouchings"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Diverticulosis is the most common cause of colonic bleeding"
  },
  {
    id: 105,
    image: "",
    question:
      "A 70-year-old patient presents with intermittent painless lower gastrointestinal bleeding. Colonoscopy reveals dilated mucosal and submucosal vascular lesions in the ascending colon. He also has a history of aortic stenosis. Which of the following is the most likely diagnosis?",
    options: [
      "Diverticulitis",
      "Angiodysplasia",
      "Ulcerative colitis",
      "Colorectal carcinoma"
    ],
    answerIndex: 1,
    correctAnswerText: "Angiodysplasia"
  },
  {
    id: 106,
    image: "",
    question:
      "A full-term neonate has delayed passage of meconium beyond 48 hours, abdominal distension, vomiting, a collapsed rectum on examination, and explosive passage of stool after withdrawal of the examining finger. Which of the following is the most likely diagnosis?",
    options: [
      "Meconium ileus",
      "Hirschsprung disease",
      "Intussusception",
      "Necrotizing enterocolitis"
    ],
    answerIndex: 1,
    correctAnswerText: "Hirschsprung disease"
  },
  {
    id: 107,
    image: "",
    question:
      "A 19-year-old man is found on screening colonoscopy to have hundreds of colorectal adenomatous polyps. Genetic testing reveals a mutation in the Adenomatous Polyposis Coli gene on chromosome 5q. Which of the following is the most appropriate definitive management?",
    options: [
      "Annual colonoscopic polypectomy alone",
      "Segmental colectomy",
      "Total proctocolectomy with ileal pouch-anal anastomosis",
      "Only observation until symptoms develop"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Total proctocolectomy with ileal pouch-anal anastomosis"
  },
  {
    id: 108,
    image: "",
    question:
      "A 42-year-old woman has a strong family history of right-sided colon cancer. Her mother had endometrial carcinoma, and her uncle had upper urinary tract transitional cell carcinoma. Genetic testing reveals a mismatch repair gene defect. Which of the following statements is most accurate?",
    options: [
      "This is Familial Adenomatous Polyposis and acts through the WNT pathway",
      "This is Hereditary Nonpolyposis Colorectal Cancer with microsatellite instability and better prognosis",
      "This is Peutz-Jeghers syndrome caused by PTEN mutation on chromosome 10",
      "This is Cowden syndrome with highest colon cancer risk"
    ],
    answerIndex: 1,
    correctAnswerText:
      "This is Hereditary Nonpolyposis Colorectal Cancer with microsatellite instability and better prognosis"
  },
  {
    id: 109,
    image: "",
    question:
      "A 58-year-old man presents with altered bowel habits and weight loss. Digital rectal examination is suspicious for a rectal mass. Which of the following is the best next investigation to establish the diagnosis?",
    options: [
      "Barium enema",
      "Full colonoscopy with biopsy",
      "Flexible sigmoidoscopy alone",
      "Contrast-enhanced Computed Tomography abdomen alone"
    ],
    answerIndex: 1,
    correctAnswerText: "Full colonoscopy with biopsy"
  },
  {
    id: 110,
    image: "",
    question:
      "A patient is diagnosed with carcinoma at the hepatic flexure extending into the proximal transverse colon. Which of the following is the most appropriate standard resection?",
    options: [
      "Sigmoid colectomy",
      "Left hemicolectomy",
      "Extended right hemicolectomy",
      "Abdominoperineal resection"
    ],
    answerIndex: 2,
    correctAnswerText: "Extended right hemicolectomy"
  },
  {
    id: 111,
    image: "",
    question:
      "A lesion is located above the dentate line in the anal canal. Which of the following combinations is correct?",
    options: [
      "Squamous epithelium, somatic pain, inguinal lymph node drainage",
      "Columnar epithelium, autonomic innervation, internal iliac lymph node drainage",
      "Stratified squamous epithelium, autonomic innervation, superficial inguinal node drainage",
      "Transitional epithelium, somatic innervation, external iliac node drainage"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Columnar epithelium, autonomic innervation, internal iliac lymph node drainage"
  },
  {
    id: 112,
    image: "",
    question:
      "A 42-year-old patient has bleeding during defecation. On examination, prolapsing hemorrhoids are seen during straining, but they reduce spontaneously. What is the grade of hemorrhoids?",
    options: [
      "First-degree hemorrhoids",
      "Second-degree hemorrhoids",
      "Third-degree hemorrhoids",
      "Fourth-degree hemorrhoids"
    ],
    answerIndex: 1,
    correctAnswerText: "Second-degree hemorrhoids"
  },
  {
    id: 113,
    image: "",
    question:
      "A 30-year-old man presents with severe pain during and after defecation, streaks of blood on stool, and constipation due to fear of passing stool. On examination, a linear tear is seen in the anoderm, and a sentinel pile is present. What is the most likely diagnosis?",
    options: [
      "Internal hemorrhoids",
      "Fissure in ano",
      "Fistula in ano",
      "Rectal prolapse"
    ],
    answerIndex: 1,
    correctAnswerText: "Fissure in ano"
  },
  {
    id: 114,
    image: "",
    question:
      "An elderly frail woman presents with a full-thickness rectal prolapse. She has chronic constipation and a protruding circumferential mass with concentric mucosal folds that requires manual reduction. She is a poor candidate for major abdominal surgery. Which of the following is the most appropriate operation?",
    options: [
      "Delorme procedure",
      "Altemeier procedure",
      "Laparoscopic mesh rectopexy",
      "Ripstein procedure"
    ],
    answerIndex: 1,
    correctAnswerText: "Altemeier procedure"
  },
  {
    id: 115,
    image: "",
    question:
      "A 42-year-old man presents with chronic constipation, straining during defecation, passage of mucus, and intermittent rectal bleeding. Colonoscopy shows a solitary ulcer on the anterior rectal wall, about 6 to 8 centimeters above the anal verge. Which of the following is the most likely diagnosis?",
    options: [
      "Ulcerative colitis",
      "Solitary rectal ulcer syndrome",
      "Rectal carcinoma",
      "Anal fissure"
    ],
    answerIndex: 1,
    correctAnswerText: "Solitary rectal ulcer syndrome"
  },
  {
    id: 116,
    image: "",
    question:
      "A 3-year-old boy is brought with a painless, cystic swelling in the inguinal region. The swelling is separate from the testis and does not show expansile cough impulse. It is found to be due to persistence of a segment of the processus vaginalis with no communication with the peritoneal cavity. Which of the following is the most likely diagnosis?",
    options: [
      "Congenital hydrocele",
      "Infantile hydrocele",
      "Encysted hydrocele of the spermatic cord",
      "Vaginal hydrocele"
    ],
    answerIndex: 2,
    correctAnswerText: "Encysted hydrocele of the spermatic cord"
  },
  {
    id: 117,
    image: "",
    question:
      "A 68-year-old man presents with a reducible groin swelling. On examination, the swelling appears medial to the inferior epigastric vessels, has a broad neck, and rarely descends into the scrotum. Which of the following is the most likely diagnosis?",
    options: [
      "Indirect inguinal hernia",
      "Direct inguinal hernia",
      "Femoral hernia",
      "Obturator hernia"
    ],
    answerIndex: 1,
    correctAnswerText: "Direct inguinal hernia"
  },
  {
    id: 118,
    image: "",
    question:
      "A patient with a long-standing groin hernia develops abdominal pain and vomiting. On exploration, only part of the bowel wall is trapped in the hernial defect, while the intestinal lumen remains partially patent. Which of the following best describes this condition?",
    options: [
      "Pantaloon hernia",
      "Sliding hernia",
      "Richter hernia",
      "Maydl hernia"
    ],
    answerIndex: 2,
    correctAnswerText: "Richter hernia"
  },
  {
    id: 119,
    image: "",
    question:
      "A 2-year-old boy is brought with an intermittent right inguinoscrotal swelling that increases on crying and reduces on lying down. At surgery, the sac is found to be due to persistence of the processus vaginalis. Which of the following is the most appropriate operative treatment in this child?",
    options: [
      "Lichtenstein hernioplasty with polypropylene mesh",
      "Herniotomy alone",
      "Bassini herniorrhaphy",
      "Shouldice repair"
    ],
    answerIndex: 1,
    correctAnswerText: "Herniotomy alone"
  },
  {
    id: 120,
    image: "",
    question:
      "A patient with a groin swelling is being evaluated clinically. On invagination test, the examiner’s finger enters the scrotum and is directed upwards along the spermatic cord toward the superficial inguinal ring. On coughing, an impulse is felt at the tip of the finger. Which of the following is the most likely diagnosis?",
    options: [
      "Direct inguinal hernia",
      "Indirect inguinal hernia",
      "Femoral hernia",
      "Obturator hernia"
    ],
    answerIndex: 1,
    correctAnswerText: "Indirect inguinal hernia"
  },
  {
    id: 121,
    image: "",
    question:
      "A 72-year-old thin multiparous woman presents with features of small bowel obstruction and pain radiating along the medial aspect of the thigh to the knee. On examination, there is no obvious external groin swelling. Which of the following is the most likely diagnosis?",
    options: [
      "Femoral hernia",
      "Obturator hernia",
      "Sciatic hernia",
      "Spigelian hernia"
    ],
    answerIndex: 1,
    correctAnswerText: "Obturator hernia"
  },
  {
    id: 122,
    image: "",
    question:
      "A patient develops a hernia through the abdominal wall along the semilunar line, usually at or below the arcuate line. Which of the following is the most likely diagnosis?",
    options: [
      "Lumbar hernia",
      "Femoral hernia",
      "Spigelian hernia",
      "Obturator hernia"
    ],
    answerIndex: 2,
    correctAnswerText: "Spigelian hernia"
  },
  {
    id: 123,
    image: "",
    question:
      "A 58-year-old woman presents with a painful groin swelling located below and lateral to the pubic tubercle and below the inguinal ligament. The swelling has become irreducible and tender. Which of the following is the most likely diagnosis?",
    options: [
      "Direct inguinal hernia",
      "Indirect inguinal hernia",
      "Femoral hernia",
      "Richter hernia"
    ],
    answerIndex: 2,
    correctAnswerText: "Femoral hernia"
  },
  {
    id: 124,
    image: "",
    question:
      "A patient presents with a swelling in the superior lumbar triangle. Which of the following boundaries correctly corresponds to the superior lumbar triangle of Grynfeltt–Lesshaft?",
    options: [
      "Iliac crest, latissimus dorsi, external oblique",
      "Twelfth rib, internal oblique, quadratus lumborum",
      "Inguinal ligament, femoral vein, lacunar ligament",
      "Rectus abdominis, semilunar line, inguinal ligament"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Twelfth rib, internal oblique, quadratus lumborum"
  },
  {
    id: 125,
    image: "",
    question:
      "A 55-year-old man develops a swelling at the site of a previous midline laparotomy scar that increases on coughing and standing. Which of the following is the most likely diagnosis?",
    options: [
      "Umbilical hernia",
      "Incisional hernia",
      "Epigastric hernia",
      "Richter hernia"
    ],
    answerIndex: 1,
    correctAnswerText: "Incisional hernia"
  },
  {
    id: 126,
    image: "",
    question:
      "A 3-year-old child is brought with a small swelling at the umbilicus that becomes prominent on crying. There is no pain or skin change. Which of the following is the best management?",
    options: [
      "Immediate mesh repair in all cases",
      "Observation because many close spontaneously",
      "Emergency laparotomy",
      "Femoral hernia repair"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Observation because many close spontaneously"
  },
  {
    id: 127,
    image: "",
    question:
      "A 48-year-old woman undergoes bariatric surgery in which a small proximal gastric pouch is created and an alimentary limb of jejunum is anastomosed to it, bypassing the duodenum and proximal jejunum. Which of the following procedures has most likely been performed?",
    options: [
      "Adjustable gastric banding",
      "Sleeve gastrectomy",
      "Roux-en-Y gastric bypass",
      "Vertical banded gastroplasty"
    ],
    answerIndex: 2,
    correctAnswerText: "Roux-en-Y gastric bypass"
  },
  {
    id: 128,
    image: "",
    question:
      "A severely obese patient with poorly controlled diabetes undergoes a bariatric procedure that combines sleeve gastrectomy with diversion of biliopancreatic secretions and a very short common channel, producing the greatest malabsorptive effect among common bariatric operations. Which of the following is the most likely procedure?",
    options: [
      "Adjustable gastric banding",
      "Sleeve gastrectomy",
      "Biliopancreatic diversion with duodenal switch",
      "Intragastric balloon placement"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Biliopancreatic diversion with duodenal switch"
  },

  {
    id: 129,
    image: "",
    question:
      "A restrained driver involved in a road traffic accident has bruising across the lower chest and abdomen in the distribution of the seat belt. He is conscious and hemodynamically stable. Which of the following hidden injuries should be actively searched for in this patient despite the obvious external mark?",
    options: [
      "Posterior dislocation of hip and duodenal disruption",
      "Patellar fracture and scalp laceration",
      "Clavicle fracture and pneumothorax only",
      "Mandibular fracture and splenic rupture only"
    ],
    answerIndex: 0,
    correctAnswerText:
      "Posterior dislocation of hip and duodenal disruption"
  },
  {
    id: 130,
    image: "",
    question:
      "A polytrauma patient is brought to the emergency department with massive hemorrhage from pelvic vascular trauma. According to the current trauma sequence, which of the following best describes the modified primary survey and early hemorrhage control strategy?",
    options: [
      "ABCDE with hemorrhage control after airway stabilization only",
      "CABCDE with early control of exsanguinating hemorrhage; options include Resuscitative Endovascular Balloon Occlusion of the Aorta and emergency resuscitative thoracotomy",
      "BACDE with immediate definitive orthopedic fixation first",
      "EDCBA with detailed secondary survey before resuscitation"
    ],
    answerIndex: 1,
    correctAnswerText:
      "CABCDE with early control of exsanguinating hemorrhage; options include Resuscitative Endovascular Balloon Occlusion of the Aorta and emergency resuscitative thoracotomy"
  },
  {
    id: 131,
    image: "",
    question:
      "A hypotensive trauma patient requires urgent vascular access during the circulation step of primary survey. Peripheral wide-bore intravenous access is difficult. Which of the following is the most appropriate next step and supporting trauma principle?",
    options: [
      "Delay resuscitation until a subclavian central line is secured under fluoroscopy",
      "Establish two peripheral wide-bore cannulas if possible; if not, use alternatives such as central venous access, surgical cutdown, or intraosseous access, and begin warm crystalloid resuscitation",
      "Give only oral fluids because intravenous fluids may worsen shock",
      "Perform arterial cannulation first because it is faster than venous access for resuscitation"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Establish two peripheral wide-bore cannulas if possible; if not, use alternatives such as central venous access, surgical cutdown, or intraosseous access, and begin warm crystalloid resuscitation"
  },
  {
    id: 132,
    image: "",
    question:
      "A 28-year-old man with polytrauma is brought after a road traffic accident. He is hypotensive from ongoing hemorrhage. The trauma team plans damage control resuscitation. Which of the following best represents the core principle of modern damage control resuscitation?",
    options: [
      "Rapid normalization of blood pressure with large-volume crystalloids before bleeding control",
      "Permissive hypotension, avoidance of large-volume crystalloids, early correction of acute traumatic coagulopathy, and early blood product administration",
      "Immediate vasopressors as first-line treatment in hemorrhagic shock",
      "Delayed transfusion until all laboratory reports are available"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Permissive hypotension, avoidance of large-volume crystalloids, early correction of acute traumatic coagulopathy, and early blood product administration"
  },
  {
    id: 133,
    image: "",
    question:
      "A patient with severe head injury develops hypertension, bradycardia, and irregular respiration. Which of the following best explains this clinical picture?",
    options: [
      "Decreased intracranial pressure causing medullary ischemia",
      "Increased intracranial pressure causing reduced cerebral perfusion pressure with brainstem compression",
      "Isolated cerebellar injury without effect on perfusion",
      "Hypovolemia causing reflex tachycardia and hyperventilation"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Increased intracranial pressure causing reduced cerebral perfusion pressure with brainstem compression"
  },
  {
    id: 134,
    image: "",
    question:
      "A patient with head trauma has periorbital ecchymosis, cerebrospinal fluid rhinorrhea, and hemotympanum. He is conscious with Glasgow Coma Scale 15 and no focal neurological deficit. Which of the following is the most appropriate statement?",
    options: [
      "This is most likely a linear skull fracture and prophylactic nasogastric tube insertion is recommended",
      "This is suggestive of basilar skull fracture; nasogastric tube insertion is contraindicated and management is usually conservative unless complications occur",
      "This is diffuse axonal injury and urgent craniotomy is always required",
      "Antibiotics are mandatory in every case of mild head injury with no imaging findings"
    ],
    answerIndex: 1,
    correctAnswerText:
      "This is suggestive of basilar skull fracture; nasogastric tube insertion is contraindicated and management is usually conservative unless complications occur"
  },
  {
    id: 135,
    image: "",
    question:
      "A 24-year-old man is brought to the emergency department after a road traffic accident. He initially had a brief loss of consciousness, then became normal and talking, but deteriorated again after 2 hours. Computed tomography of the brain shows a biconvex, hyperdense extra-axial collection that does not cross suture lines. Which of the following is the most likely diagnosis and the usual source of bleeding?",
    options: [
      "Acute subdural hematoma due to rupture of bridging veins",
      "Epidural hematoma due to middle meningeal artery injury",
      "Chronic subdural hematoma due to cortical vein ooze",
      "Traumatic subarachnoid hemorrhage due to berry aneurysm rupture"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Epidural hematoma due to middle meningeal artery injury"
  },
  {
    id: 136,
    image: "",
    question:
      "A 26-year-old man is brought after a road traffic accident with blunt abdominal trauma. He is hemodynamically unstable. A bedside ultrasound is planned as the first investigation. Which of the following statements regarding Focused Assessment with Sonology for Trauma is most accurate?",
    options: [
      "It is indicated only in hemodynamically stable abdominal trauma patients",
      "It has 100% sensitivity for hollow viscus injury",
      "It is a rapid bedside tool useful in both stable and unstable abdominal trauma, but its sensitivity is not 100%",
      "It is mainly used to grade solid organ injury severity"
    ],
    answerIndex: 2,
    correctAnswerText:
      "It is a rapid bedside tool useful in both stable and unstable abdominal trauma, but its sensitivity is not 100%"
  },
  {
    id: 137,
    image: "",
    question:
      "A trauma patient is suspected to have thoracoabdominal injury. The emergency team performs an Extended Focused Assessment with Sonology for Trauma examination. Which of the following best describes Extended Focused Assessment with Sonology for Trauma?",
    options: [
      "Focused Assessment with Sonology for Trauma plus bilateral thoracic cavity assessment for hemothorax and pneumothorax",
      "Focused Assessment with Sonology for Trauma plus computed tomography of thorax",
      "Focused Assessment with Sonology for Trauma with contrast enhancement to detect bowel injury",
      "Focused Assessment with Sonology for Trauma used only for penetrating chest trauma"
    ],
    answerIndex: 0,
    correctAnswerText:
      "Focused Assessment with Sonology for Trauma plus bilateral thoracic cavity assessment for hemothorax and pneumothorax"
  },
  {
    id: 138,
    image: "",
    question:
      "A hemodynamically stable patient with blunt abdominal trauma undergoes contrast-enhanced computed tomography. It reveals an isolated splenic injury with subcapsular hematoma involving less than 10% of the surface area. Which of the following is the most likely grade and preferred management approach?",
    options: [
      "Grade I injury; intensive care monitoring with conservative management",
      "Grade III injury; immediate splenectomy in all cases",
      "Grade IV injury; diagnostic laparoscopy only",
      "Grade V injury; discharge after observation"
    ],
    answerIndex: 0,
    correctAnswerText:
      "Grade I injury; intensive care monitoring with conservative management"
  },
  {
    id: 139,
    image: "",
    question:
      "A 28-year-old man sustains a stab injury to the right upper abdomen. At laparotomy, the liver is found to be the major injured organ. Which of the following statements is most accurate regarding liver trauma?",
    options: [
      "Spleen is the most commonly involved organ in penetrating abdominal trauma",
      "Liver is the most commonly involved organ in penetrating abdominal trauma",
      "Kidney is the most commonly involved organ in penetrating abdominal trauma",
      "Pancreas is the most commonly involved organ in penetrating abdominal trauma"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Liver is the most commonly involved organ in penetrating abdominal trauma"
  },
  {
    id: 140,
    image: "",
    question:
      "During laparotomy for severe liver trauma, the surgeon performs a maneuver by compressing the hepatoduodenal ligament along the free border of the lesser omentum. What is the purpose of this maneuver?",
    options: [
      "To occlude hepatic venous outflow",
      "To occlude hepatic inflow",
      "To occlude inferior mesenteric artery flow",
      "To decompress the portal vein permanently"
    ],
    answerIndex: 1,
    correctAnswerText: "To occlude hepatic inflow"
  },
  {
    id: 141,
    image: "",
    question:
      "A patient with penetrating gastric trauma is found to have a small gastric laceration without tissue loss or devascularization. What is the most appropriate management?",
    options: [
      "Conservative management alone in all cases",
      "Two-layer closure",
      "Total gastrectomy",
      "Feeding jejunostomy only"
    ],
    answerIndex: 1,
    correctAnswerText: "Two-layer closure"
  },
  {
    id: 142,
    image: "",
    question:
      "A patient has pancreatic trauma with distal pancreatic duct injury. Which of the following is the most appropriate management?",
    options: [
      "Observation only because all pancreatic injuries are treated conservatively",
      "Distal pancreatectomy",
      "Whipple procedure in every case",
      "Only external drainage without dealing with the duct"
    ],
    answerIndex: 1,
    correctAnswerText: "Distal pancreatectomy"
  },
  {
    id: 143,
    image: "",
    question:
      "A 26-year-old male with traumatic hemopneumothorax requires tube thoracostomy. The most appropriate site for insertion of the intercostal drainage tube in a stable emergency setup is:",
    options: [
      "Second intercostal space, parasternal line",
      "Fifth intercostal space, mid-axillary line, within the triangle of safety",
      "Eighth intercostal space, posterior axillary line",
      "First intercostal space, midclavicular line"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Fifth intercostal space, mid-axillary line, within the triangle of safety"
  },
  {
    id: 144,
    image: "",
    question:
      "A patient with severe thoracic trauma is taken for emergency chest exploration. Which of the following statements regarding thoracotomy approaches is most accurate?",
    options: [
      "Clamshell thoracotomy is mainly for midline mediastinal structures only",
      "Anterolateral thoracotomy is the most common emergency exploration approach",
      "Posterolateral thoracotomy is preferred for bilateral pleural exploration in unstable trauma",
      "Median sternotomy is the best approach for unilateral esophageal trauma"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Anterolateral thoracotomy is the most common emergency exploration approach"
  },
  {
    id: 145,
    image: "",
    question:
      "A 28-year-old man is brought after a high-speed motor vehicle collision with severe blunt chest trauma. After a symptom-free interval of a few hours, he develops worsening dyspnea and hypoxemia. Computed tomography of the chest shows patchy parenchymal hyperdensities within the lung, while pleural space blood is absent. Which of the following is the most likely diagnosis?",
    options: [
      "Pulmonary contusion",
      "Lung laceration",
      "Massive hemothorax",
      "Tension pneumothorax"
    ],
    answerIndex: 0,
    correctAnswerText: "Pulmonary contusion"
  },
  {
    id: 146,
    image: "",
    question:
      "A 42-year-old man is involved in a high-speed deceleration injury. Chest X-ray shows widened mediastinum with loss of the aortic knob. Blunt traumatic aortic injury is suspected near the aortic isthmus, distal to the origin of the left subclavian artery. Which of the following pairs correctly matches the grade with the preferred treatment?",
    options: [
      "Grade I intimal tear — beta blockers and medical management",
      "Grade II intramural hematoma — immediate open surgery in all cases",
      "Grade III pseudoaneurysm — observation only",
      "Grade IV transection — beta blockers alone"
    ],
    answerIndex: 0,
    correctAnswerText:
      "Grade I intimal tear — beta blockers and medical management"
  },
  {
    id: 147,
    image: "",
    question:
      "A 30-year-old polytrauma patient is assessed in the emergency department. The clinician calculates a trauma score using the sum of the squares of the highest Abbreviated Injury Scale scores in the three most severely injured body regions. Which scoring system is being used?",
    options: [
      "Revised Trauma Score",
      "Trauma and Injury Severity Score",
      "Injury Severity Score",
      "Mangled Extremity Severity Score"
    ],
    answerIndex: 2,
    correctAnswerText: "Injury Severity Score"
  },
  {
    id: 148,
    image: "",
    question:
      "A 26-year-old man is injured in an explosion. He develops ear pain and later is found to have tympanic membrane perforation. Another victim from the same incident has bowel injury without external wounds. Which of the following statements is most accurate regarding blast trauma?",
    options: [
      "Primary blast injury is caused by bomb fragments and most commonly affects the skin",
      "Secondary blast injury is due to blast wind and typically causes tympanic membrane rupture",
      "Primary blast injury is due to the blast wave and commonly affects the tympanic membrane and gastrointestinal tract",
      "Quinary blast injury refers only to crush syndrome after building collapse"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Primary blast injury is due to the blast wave and commonly affects the tympanic membrane and gastrointestinal tract"
  },

  {
    id: 149,
    image: "",
    question:
      "A 28-year-old woman sustains a scald injury over the forearm. On examination, the burn has blisters, is painful, erythematous, and shows blanching on pressure. Lateral pressure causes the epidermis to peel away. Which of the following is the most likely diagnosis?",
    options: [
      "Superficial burn involving only epidermis",
      "Superficial partial-thickness burn",
      "Deep partial-thickness burn",
      "Full-thickness burn"
    ],
    answerIndex: 1,
    correctAnswerText: "Superficial partial-thickness burn"
  },
  {
    id: 150,
    image: "",
    question:
      "A 50-kilogram adult sustains 50% total body surface area burns. Using the Parkland formula, what is the total fluid requirement in the first 24 hours?",
    options: [
      "5,000 milliliters",
      "8,000 milliliters",
      "10,000 milliliters",
      "20,000 milliliters"
    ],
    answerIndex: 2,
    correctAnswerText: "10,000 milliliters"
  },
  {
    id: 151,
    image: "",
    question:
      "A burn patient has singed facial hair, hoarseness, suspected inhalational injury, and circumferential full-thickness burn of the forearm with a tight black eschar. Distal pulses are becoming weak. Which of the following is the best next step?",
    options: [
      "Reassure and continue open dressing only",
      "Immediate escharotomy of the circumferential burn",
      "Wait for spontaneous eschar separation",
      "Start intramuscular antibiotics and review after 24 hours"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Immediate escharotomy of the circumferential burn"
  },
  {
    id: 152,
    image: "",
    question:
      "A patient with a thermal burn has a central area of irreversible tissue necrosis surrounded by an ischemic but potentially salvageable zone, and an outermost area of vasodilatation with increased perfusion. Which of the following correctly identifies the zone that is most likely to convert into full-thickness tissue loss if resuscitation is inadequate?",
    options: [
      "Zone of hyperaemia",
      "Zone of stasis",
      "Zone of coagulation",
      "Zone of epithelialization"
    ],
    answerIndex: 1,
    correctAnswerText: "Zone of stasis"
  },
  {
    id: 153,
    image: "",
    question:
      "A worker sustains a chemical burn after exposure to hydrofluoric acid. He develops severe pain, local tissue injury, and later systemic toxicity. Which of the following is the most appropriate specific treatment principle?",
    options: [
      "Neutralize the acid with an alkali immediately",
      "Apply topical calcium gluconate because fluoride ions chelate calcium and magnesium",
      "Cover the wound with dry dressing and observe only",
      "Give intravenous sodium bicarbonate as the universal antidote"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Apply topical calcium gluconate because fluoride ions chelate calcium and magnesium"
  },
  {
    id: 154,
    image: "",
    question:
      "A mountaineer presents with pale, numb fingers after prolonged cold exposure. On rewarming, blisters develop. Another patient with severe frostbite later develops black, demarcated distal tissue. Which of the following statements is most accurate?",
    options: [
      "Frostbite commonly affects the trunk first and requires immediate early amputation",
      "Hemorrhagic blisters indicate superficial frostbite, and debridement should be immediate in all cases",
      "Frostbite commonly affects extremities; treatment is rewarming, and debridement is usually delayed until clear demarcation occurs",
      "Passive cooling is the mainstay of treatment after rescue"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Frostbite commonly affects extremities; treatment is rewarming, and debridement is usually delayed until clear demarcation occurs"
  },

  {
    id: 155,
    image: "",
    question:
      "A 36-year-old man with history of travel to an endemic area presents with fever, right upper abdominal pain, and recent loose stools. Imaging shows a solitary liver abscess in the right lobe. Serology is positive, and isotope scan is negative. Which of the following is the most likely diagnosis and the most appropriate first-line treatment?",
    options: [
      "Pyogenic liver abscess; broad-spectrum antibiotics with pus culture-guided therapy",
      "Amoebic liver abscess; metronidazole followed by diloxanide furoate",
      "Hydatid cyst of liver; immediate Percutaneous Aspiration Injection Reaspiration without antihelminthic cover",
      "Pyogenic liver abscess; albendazole for 7 to 10 days followed by aspiration"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Amoebic liver abscess; metronidazole followed by diloxanide furoate"
  },
  {
    id: 156,
    image: "",
    question:
      "A 36-year-old woman undergoes ultrasonography for vague abdominal discomfort, and an incidental liver lesion is found. Contrast-enhanced computed tomography shows peripheral nodular enhancement in the arterial phase with progressive centripetal fill-in on delayed images. Magnetic resonance imaging shows a markedly hyperintense lesion on T2-weighted imaging, described as a “light bulb sign.” What is the most likely diagnosis?",
    options: [
      "Focal nodular hyperplasia",
      "Hepatic hemangioma",
      "Hepatic adenoma",
      "Hepatocellular carcinoma"
    ],
    answerIndex: 1,
    correctAnswerText: "Hepatic hemangioma"
  },
  {
    id: 157,
    image: "",
    question:
      "A 28-year-old woman taking oral contraceptive pills is found to have a liver mass. Computed tomography shows a hypervascular encapsulated tumor with heterogeneous enhancement. Sulfur colloid isotope scan is negative, suggesting absence of Kupffer cells. Which of the following is the most likely diagnosis?",
    options: [
      "Focal nodular hyperplasia",
      "Hepatic adenoma",
      "Cavernous hemangioma",
      "Fibrolamellar hepatocellular carcinoma"
    ],
    answerIndex: 1,
    correctAnswerText: "Hepatic adenoma"
  },
  {
    id: 158,
    image: "",
    question:
      "A patient with hepatocellular carcinoma is being evaluated for liver transplantation. Which of the following best represents the Milan criteria?",
    options: [
      "One nodule up to 8 centimeters or up to three nodules each less than 5 centimeters",
      "One nodule up to 5 centimeters or up to three nodules each up to 3 centimeters",
      "Two nodules each less than 4 centimeters with any vascular invasion absent",
      "Any number of nodules if there is no extrahepatic spread"
    ],
    answerIndex: 1,
    correctAnswerText:
      "One nodule up to 5 centimeters or up to three nodules each up to 3 centimeters"
  },
  {
    id: 159,
    image: "",
    question:
      "A 42-year-old obese woman presents with recurrent postprandial right upper abdominal pain. Ultrasonography of the abdomen shows mobile echogenic foci in the gallbladder with posterior acoustic shadowing. Which of the following is the most appropriate definitive treatment?",
    options: [
      "Oral dissolution therapy for all patients with gallstones",
      "Laparoscopic cholecystectomy",
      "Observation only because most stones are asymptomatic",
      "Endoscopic retrograde cholangiopancreatography as first-line treatment"
    ],
    answerIndex: 1,
    correctAnswerText: "Laparoscopic cholecystectomy"
  },
  {
    id: 160,
    image: "",
    question:
      "A patient is found to have multiple small black pigment gallstones. Which of the following conditions is most strongly associated with this type of gallstone?",
    options: [
      "Obesity with supersaturation of bile by cholesterol",
      "Hereditary spherocytosis",
      "Prolonged fasting after vagotomy",
      "Oral contraceptive pill use during pregnancy"
    ],
    answerIndex: 1,
    correctAnswerText: "Hereditary spherocytosis"
  },
  {
    id: 161,
    image: "",
    question:
      "A 52-year-old woman presents with fever, nausea, vomiting, and severe pain in the right upper quadrant of the abdomen. On examination, deep palpation just below the right ninth costal cartilage during inspiration causes sudden arrest of inspiration due to pain. What is this sign called?",
    options: [
      "Boas sign",
      "Murphy sign",
      "Courvoisier sign",
      "Rovsing sign"
    ],
    answerIndex: 1,
    correctAnswerText: "Murphy sign"
  },
  {
    id: 162,
    image: "",
    question:
      "A 52-year-old woman with long-standing gallstone disease presents with progressive obstructive jaundice. Imaging suggests a stone impacted in the neck of the gallbladder causing external compression of the common hepatic duct without any cholecysto-biliary fistula. Which of the following is the most likely diagnosis?",
    options: [
      "Type I Mirizzi syndrome",
      "Type II Mirizzi syndrome",
      "Type III Mirizzi syndrome",
      "Type V Mirizzi syndrome"
    ],
    answerIndex: 0,
    correctAnswerText: "Type I Mirizzi syndrome"
  },
  {
    id: 163,
    image: "",
    question:
      "A patient is found to have retained common bile duct stones through a mature T-tube tract after surgery. The stones are removed through the same tract under radiologic guidance. This method is known as:",
    options: [
      "Burhenne technique",
      "Whipple procedure",
      "Pringle maneuver",
      "Seldinger biliary bypass"
    ],
    answerIndex: 0,
    correctAnswerText: "Burhenne technique"
  },
  {
    id: 164,
    image: "",
    question:
      "Which of the following statements regarding evaluation and staging of gallbladder malignancy is most accurate?",
    options: [
      "Magnetic resonance cholangiopancreatography is the best test for distant metastasis",
      "Contrast-enhanced computed tomography of the abdomen helps assess local extent and spread",
      "Positron emission tomography-computed tomography is primarily used for common bile duct anatomy",
      "T1 disease means tumor has invaded the liver directly"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Contrast-enhanced computed tomography of the abdomen helps assess local extent and spread"
  },
  {
    id: 165,
    image: "",
    question:
      "A patient is diagnosed with perihilar cholangiocarcinoma involving the biliary bifurcation and extending into both right and left hepatic ducts. According to the Bismuth-Corlette classification, this lesion is best classified as:",
    options: [
      "Type I",
      "Type II",
      "Type III",
      "Type IV"
    ],
    answerIndex: 3,
    correctAnswerText: "Type IV"
  },

 {
    id: 165,
    image: "",
    question:
      "A 28-year-old man presents with recurrent episodes of upper abdominal pain radiating to the back for the past 1 year. He has had multiple admissions for acute pancreatitis, but evaluation shows no gallstones, no history of alcohol use, and normal serum triglyceride levels. Magnetic Resonance Cholangiopancreatography reveals failure of fusion of the dorsal and ventral pancreatic ducts, with most of the pancreatic secretions draining through the minor papilla.\n\nWhat is the most likely diagnosis?",
    options: [
      "Annular pancreas",
      "Pancreas divisum",
      "Choledochal cyst",
      "Pancreatic pseudocyst"
    ],
    answerIndex: 1,
    correctAnswerText: "Pancreas divisum"
  },
  {
    id: 166,
    image: "",
    question:
      "A 42-year-old woman presents with recurrent episodes of severe right upper abdominal pain for 8 months. She underwent cholecystectomy 1 year ago, but her pain persists. The pain is episodic, lasts for more than 30 minutes, and is associated with transient elevation of liver enzymes. Ultrasonography shows no retained gallstones. Endoscopic Retrograde Cholangiopancreatography demonstrates delayed drainage of contrast from the Common Bile Duct, and sphincter of Oddi manometry shows a resting pressure greater than 40 millimeters of mercury.\n\nWhat is the most likely diagnosis?",
    options: [
      "Biliary stricture",
      "Sphincter of Oddi dysfunction Type I",
      "Chronic calculous cholecystitis",
      "Carcinoma head of pancreas"
    ],
    answerIndex: 1,
    correctAnswerText: "Sphincter of Oddi dysfunction Type I"
  },
  {
    id: 167,
    image: "",
    question:
      "A 48-year-old man with a history of chronic alcohol use presents to the emergency department with sudden onset severe epigastric pain radiating to the back. He has repeated vomiting and prefers to sit leaning forward because it slightly relieves the pain. On examination, he has abdominal tenderness with guarding and bluish discoloration around the umbilicus. Serum lipase is markedly elevated.\n\nWhich of the following physical signs is represented by the periumbilical ecchymosis seen in this patient?",
    options: [
      "Grey Turner sign",
      "Cullen sign",
      "Fox sign",
      "Bryant sign"
    ],
    answerIndex: 1,
    correctAnswerText: "Cullen sign"
  },
  {
    id: 168,
    image: "",
    question:
      "A 52-year-old man presents with acute onset severe epigastric pain radiating to the back, vomiting, and abdominal distension. Serum lipase is markedly elevated, and he is diagnosed with acute biliary pancreatitis. Ultrasonography reveals gallstones with a dilated Common Bile Duct, suggesting persistent biliary obstruction. He is hemodynamically stable after initial resuscitation.\n\nWhich of the following is the most appropriate next step in management?",
    options: [
      "Start prophylactic antibiotics in all cases of acute pancreatitis",
      "Keep the patient nil per oral for many days and avoid enteral nutrition",
      "Perform Endoscopic Retrograde Cholangiopancreatography for biliary pancreatitis with suspected Common Bile Duct obstruction",
      "Delay cholecystectomy for 6 months in all patients with biliary pancreatitis"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Perform Endoscopic Retrograde Cholangiopancreatography for biliary pancreatitis with suspected Common Bile Duct obstruction"
  },
  {
    id: 169,
    image: "",
    question:
      "A 46-year-old man with a long history of alcohol use presents with recurrent epigastric pain radiating to the back for several years. He now reports weight loss, bulky foul-smelling stools, and difficulty controlling his blood glucose levels despite insulin therapy. On evaluation, stool elastase is markedly reduced to less than 100 micrograms per gram of stool, and fasting C-peptide levels are low.\n\nWhich of the following is the most appropriate interpretation of these findings?",
    options: [
      "Acute pancreatitis with preserved exocrine and endocrine function",
      "Chronic pancreatitis with exocrine insufficiency and endocrine insufficiency",
      "Pancreatic pseudocyst causing only mass effect without pancreatic failure",
      "Carcinoma head of pancreas with isolated obstructive jaundice"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Chronic pancreatitis with exocrine insufficiency and endocrine insufficiency"
  },
  {
    id: 170,
    image: "",
    question:
      "A 68-year-old man presents with recurrent abdominal pain, weight loss, and new-onset diabetes mellitus. Magnetic resonance cholangiopancreatography shows a dilated main pancreatic duct with mural nodules. Endoscopic retrograde cholangiopancreatography reveals a patulous ampulla with mucin extruding from it, producing a “fish mouth” appearance. Which of the following statements is most accurate regarding this condition?",
    options: [
      "It is a benign lesion with no malignant potential and is best managed by observation alone",
      "It is most likely mucinous cystic neoplasm, which classically occurs in the tail with ovarian-type stroma",
      "It is intraductal papillary mucinous neoplasm, and all main duct lesions require resection",
      "It is serous cystadenoma, and glycogen-rich epithelium is the defining feature"
    ],
    answerIndex: 2,
    correctAnswerText:
      "It is intraductal papillary mucinous neoplasm, and all main duct lesions require resection"
  },
  {
    id: 171,
    image: "",
    question:
      "A 64-year-old man presents with progressive jaundice, weight loss, dull upper abdominal pain, and recent-onset diabetes mellitus. On examination, he has a palpable distended gallbladder. Contrast-enhanced computed tomography shows a mass in the head of the pancreas causing obstruction of both the common bile duct and the pancreatic duct. Which of the following is the most likely diagnosis?",
    options: [
      "Carcinoma of head of pancreas",
      "Carcinoma of body of pancreas",
      "Cholangiocarcinoma",
      "Chronic calcific pancreatitis"
    ],
    answerIndex: 0,
    correctAnswerText: "Carcinoma of head of pancreas"
  },
  {
    id: 172,
    image: "",
    question:
      "A patient with carcinoma head of pancreas is being staged for operability. The tumor shows less than 180 degrees contact with the portal vein and superior mesenteric vein, and there is no involvement of the superior mesenteric artery. Which of the following best describes this tumor?",
    options: [
      "Metastatic",
      "Borderline resectable",
      "Resectable",
      "Unresectable"
    ],
    answerIndex: 2,
    correctAnswerText: "Resectable"
  },

  {
    id: 173,
    image: "images/IMG_1380.jpeg",
    question:
      "A 36-year-old woman presents with progressive dysphagia, easy fatigability, and reduced exercise tolerance. On examination, she has pallor, angular cheilitis, and spoon-shaped nails. A barium swallow image shows a thin, shelf-like intraluminal filling defect in the upper esophagus.\n\nWhich of the following is the most likely diagnosis associated with this radiological finding?",
    options: [
      "Schatzki ring in gastroesophageal reflux disease",
      "Esophageal web in Plummer–Vinson syndrome",
      "Achalasia cardia due to degeneration of Auerbach plexus",
      "Esophageal diverticulum in diffuse esophageal spasm"
    ],
    answerIndex: 1,
    correctAnswerText: "Esophageal web in Plummer–Vinson syndrome"
  },

  {
    id: 174,
    image: "images/IMG_1384.jpeg",
    question:
      "A 78-year-old frail man with long-standing complete rectal prolapse undergoes a perineal procedure because he is a poor candidate for major abdominal surgery. In the postoperative image, a circumferential purse-string suture has been placed around the anal canal to narrow the outlet and prevent recurrent prolapse.\n\nWhich of the following procedures is most likely being shown?",
    options: [
      "Stapled hemorrhoidopexy",
      "Wells procedure",
      "Thiersch wiring",
      "Altemeier repair"
    ],
    answerIndex: 2,
    correctAnswerText: "Thiersch wiring"
  },

  {
    id: 175,
    image: "images/IMG_1387.jpeg",
    question:
      "A 19-year-old man presents with recurrent abdominal pain and episodes of intestinal obstruction. On examination, multiple dark-brown pigmented macules are seen over the lips and buccal mucosa. Endoscopy reveals multiple gastrointestinal polyps, and histopathology shows an arborizing network of smooth muscle extending into polyp fronds lined by normal intestinal epithelium.\n\nWhich of the following is the most likely underlying diagnosis?",
    options: [
      "Familial adenomatous polyposis due to adenomatous polyps from adenomatous polyposis coli gene mutation",
      "Peutz–Jeghers syndrome due to hamartomatous polyps associated with serine threonine kinase 11 gene mutation",
      "Juvenile polyposis syndrome due to inflammatory polyps associated with Kirsten rat sarcoma mutation",
      "Cowden syndrome due to hyperplastic polyps associated with ret proto-oncogene mutation"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Peutz–Jeghers syndrome due to hamartomatous polyps associated with serine threonine kinase 11 gene mutation"
  },

  {
    id: 176,
    image: "images/IMG_1397.jpeg",
    question:
      "A 48-year-old man with pancytopenia is planned for bone marrow examination. The hematologist asks for the instrument shown in the image, which is a reusable bone marrow biopsy needle with an adjustable guard placed about 2 centimeters from the tip and a side screw to control depth.\n\nWhich of the following instruments is being shown?",
    options: [
      "Klima needle",
      "Salah’s needle",
      "Vim–Silverman needle",
      "Von Graefe knife"
    ],
    answerIndex: 1,
    correctAnswerText: "Salah’s needle"
  },

  {
    id: 177,
    image: "images/IMG_1399.jpeg",
    question:
      "A 58-year-old man is undergoing open inguinal hernia repair. After the skin and superficial fascia are divided, the surgeon asks for the instrument shown in the image to maintain exposure of the wound without requiring an assistant to hold the edges apart continuously.\n\nWhich of the following instruments is being shown?",
    options: [
      "Langenbeck retractor",
      "Volkmann retractor",
      "Balfour retractor",
      "Travers retractor"
    ],
    answerIndex: 3,
    correctAnswerText: "Travers retractor"
  },

  {
    id: 178,
    image: "images/IMG_1401.jpeg",
    question:
      "A 24-year-old man is brought to the emergency department after a high-velocity road traffic accident. He is tachypneic, hypotensive, and has diminished breath sounds on the right side. Chest radiograph shows a near-complete homogeneous white-out of the right hemithorax with loss of normal aeration of the underlying lung.\n\nWhat is the most likely diagnosis?",
    options: [
      "Right hemothorax",
      "Right pneumothorax",
      "Right hydropneumothorax",
      "Right lung abscess"
    ],
    answerIndex: 0,
    correctAnswerText: "Right hemothorax"
  },

  {
    id: 179,
    image: "images/IMG_1403.jpeg",
    question:
      "A 10-day-old preterm neonate develops abdominal distension, feeding intolerance, bilious vomiting, and lethargy. On examination, the abdomen is tense and tender. An abdominal radiograph shows multiple lucent, bubbly, linear collections of gas outlining the bowel wall.\n\nWhich of the following is the most likely radiological diagnosis?",
    options: [
      "Pneumoperitoneum due to intestinal perforation",
      "Portal venous gas due to neonatal sepsis",
      "Double-bubble sign due to duodenal atresia",
      "Pneumatosis intestinalis due to necrotizing enterocolitis"
    ],
    answerIndex: 3,
    correctAnswerText:
      "Pneumatosis intestinalis due to necrotizing enterocolitis"
  },

  {
    id: 180,
    image: "images/IMG_1406.jpeg",
    question:
      "A 42-year-old woman presents with a slowly progressive swelling over the forehead and scalp region causing facial disfigurement. On examination, the lesion is tortuous, compressible, and pulsatile. A bruit is heard on auscultation. She also reports occasional headache and tinnitus. The clinical image is shown above.\n\nWhat is the most likely diagnosis?",
    options: [
      "Plexiform neurofibroma",
      "Cavernous hemangioma",
      "Cirsoid aneurysm",
      "Dermoid cyst"
    ],
    answerIndex: 2,
    correctAnswerText: "Cirsoid aneurysm"
  },

];
