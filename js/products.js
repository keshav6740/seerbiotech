// Products Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // --- START: COMPLETE AND CORRECTED PRODUCT DATA ---
    const products = [
    {
        "id": 1,
        "name": "BONSER-CZ Softgel",
        "composition": "Calcitriol 0.25 mcg, Calcium Carbonate 500 mg, Zinc Sulphate 7.5 mg",
        "packing": "10x10 Blister",
        "description": "Ensures desired support of calcium with better absorption. Helps build greater peak bone mass and slows the rate of bone loss after menopause. Provides the active form of vitamin D (Calcitriol) and helps strengthen connective tissues in bone with zinc.",
        "image": "images/merged/BONSER-CZ-3D-BIG.png"
    },
    {
        "id": 2,
        "name": "BONSER-D Tabs",
        "composition": "Calcium (As Carbonate) 500 mg, Vitamin D3 250 I.U.",
        "packing": "10x15 Blister",
        "description": "A foundational supplement that improves osteogenesis and prevents osteoporosis. Ideal during pregnancy and lactation, it compensates for age-related calcium decrease in postmenopausal women and enhances bone mineral density in adolescents.",
        "image": "images/merged/BONSER-D-TAB-3D-BIG.png"
    },
    {
        "id": 3,
        "name": "BONSER-K2-7 Softgel",
        "composition": "Calcitriol 0.25 mcg, Calcium Carbonate 625 mg, Vitamin K2-7 45 mcg",
        "packing": "10x1x10 Blister",
        "description": "Provides calcium carbonate to strengthen skeletal tissues and improves absorption with non-skeletal benefits from Vitamin D3. Vitamin K2-7 helps in calcium homeostasis and stimulates the synthesis of osteoblastic markers.",
        "image": "images/merged/BONSER-K2-7-3D.jpg"
    },
    {
        "id": 4,
        "name": "BONSER-MZ Tabs",
        "composition": "Calcium Citrate 1000 mg, Magnesium Hydroxide 100 mg, Zinc Sulphate 4 mg, Vitamin D3 200 I.U.",
        "packing": "10x10 Blister",
        "description": "A nutritional booster for healthy life that ensures stronger structural build-up of bones. Prevents falls, fractures, and osteopenia, and improves the weight-bearing capacity of the bone.",
        "image": "images/merged/Bonser-Mz.jpg"
    },
    {
        "id": 5,
        "name": "BPSER-AT Tabs",
        "composition": "Atenolol 50 mg, Amlodipine 5 mg",
        "packing": "10x10 Alu. Alu.",
        "description": "A targeted combination for blood pressure control. Atenolol inhibits Beta-1 adrenergic receptors, while Amlodipine inhibits calcium channels in vascular smooth muscles, ensuring better B.P. control than either drug alone.",
        "image": "images/merged/bpser-at.jpg"
    },
    {
        "id": 6,
        "name": "CIDGO SUSP (Sugar Free)",
        "composition": "Aluminium Hydroxide, Magnesium Hydroxide, Simethicone (Sorbitol Base)",
        "packing": "170 ml",
        "description": "Effectively solves the twin problems of flatulence and acidity. This sugar-free formula offers antacids and methylpolysiloxane to relieve dyspepsia without side effects like constipation or diarrhoea. Suitable for diabetic patients.",
        "image": "images/merged/Cidgo-Susp.jpg"
    },
    {
        "id": 7,
        "name": "CIDGO-PLUS SUSP",
        "composition": "Dried Aluminium Hydroxide Gel 291mg/5ml, Magnesium Hydroxide 98mg/5ml, Oxetacaine 10mg/5ml",
        "packing": "170 ml",
        "description": "A high-power antacid against hyperacidity. Provides a profound antacid effect without gastrointestinal disturbance and relieves burning sensation with the potent local anaesthetic effect of Oxetacaine.",
        "image": "images/merged/Cidgo-Susp.jpg"
    },
    {
        "id": 8,
        "name": "COFSER Syp",
        "composition": "Terbutaline Sulphate 1.25mg/5ml, Bromhexine HCL 2mg/5ml, Guaiphenesin 50mg/5ml, Menthol 0.5mg/5ml",
        "packing": "100ml With M.Cup",
        "description": "A multi-action combination to treat productive cough. It produces mucolytic, bronchodilator, and expectorant effects to clear the airway, improving quality of life and patient compliance.",
        "image": "images/merged/Cofser-Syrup.jpg"
    },
    {
        "id": 9,
        "name": "COFSER-AM Syp",
        "composition": "Ambroxol 15mg/5ml, Terbutaline Sulphate 1.25mg/5ml, Guaiphenesin 50mg/5ml, Menthol 1mg/5ml",
        "packing": "100 ml. With M.Cup",
        "description": "A combination syrup for productive coughs. Ambroxol acts as a mucolytic, Terbutaline as a bronchodilator, and Guaifenesin as an expectorant, with Menthol providing a soothing effect.",
        "image": "images/merged/cofser-am.jpg"
    },
    {
        "id": 10,
        "name": "COFSER-AM Syp",
        "composition": "Ambroxol 15mg/5ml, Terbutaline Sulphate 1.25mg/5ml, Guaiphenesin 50mg/5ml, Menthol 1mg/5ml",
        "packing": "60 ml. With M.Cup",
        "description": "A combination syrup for productive coughs, available in a smaller 60ml pack. Ambroxol acts as a mucolytic, Terbutaline as a bronchodilator, and Guaifenesin as an expectorant, with Menthol providing a soothing effect.",
        "image": "images/merged/cofser-am.jpg"
    },
    {
        "id": 11,
        "name": "COFSER-DX Syp",
        "composition": "Dextromethorphan HBr 10mg/5ml, Chlorpheniramine Maleate (CPM) 4mg/5ml",
        "packing": "100ml With M.Cup",
        "description": "A syrup for dry cough relief. Dextromethorphan provides antitussive action to suppress coughs, while CPM reduces allergic manifestations like sneezing and runny nose that can trigger coughing.",
        "image": "images/merged/Cofser-dx.jpg"
    },
    {
        "id": 12,
        "name": "COFSER-LS Syp",
        "composition": "Levosalbutamol 1mg, Ambroxol 30mg, Guaifenesin 50mg",
        "packing": "100ml With M.Cup",
        "description": "Relaxes a restless bronchial tree by producing bronchodilation with Beta-2 agonistic activity of Levosalbutamol. It effectively reduces sputum viscosity and induces easy passage for expulsion of cough.",
        "image": "images/merged/Cofser-Ls.jpg"
    },
    {
        "id": 13,
        "name": "COFSER PLUS Syp (Sugar Free)",
        "composition": "Dextromethorphan HBr 10mg/5ml, Phenylephrine HCL 5mg/5ml, Chlorpheniramine Maleate 2mg/5ml",
        "packing": "100ml With Box",
        "description": "A sugar-free syrup for non-productive allergic coughs. It produces a profound antitussive effect with dextromethorphan, suppresses allergic manifestations with chlorpheniramine, and prevents the influence of allergy on mucosa with phenylephrine.",
        "image": "images/merged/cofser-plus.png"
    },
    {
        "id": 14,
        "name": "COLNET CREAM",
        "composition": "Clobetasol Propionate 0.05% w/w, Miconazole Nitrate 2.00% w/w, Neomycin Sulphate 0.50% w/w",
        "packing": "20 gm Lemi Tube",
        "description": "A fifth-generation corticosteroid cream for hyperkeratosis and skin inflammation. It offers strong immunosuppressive capacity, removes bacterial infection with Neomycin, and corrects fungal infestation with Clotrimazole.",
        "image": "images/merged/COLNET-3D-BIG.png"
    },
    {
        "id": 15,
        "name": "DEFNET-6 Tabs",
        "composition": "Deflazacort 6 mg",
        "packing": "10x10 Alu.Alu.",
        "description": "A prednisolone derivative steroid with a better safety profile. It offers less risk of osteoporosis and has a lesser negative impact on growth rate in children, while displaying desired anti-inflammatory and immunosuppressant effects.",
        "image": "images/merged/DEFNET-6-3D.png"
    },
    {
        "id": 16,
        "name": "DROSER Tabs",
        "composition": "Drotaverine 80mg, Mefenamic Acid 250mg",
        "packing": "10x10 Alu.Alu.",
        "description": "For comprehensive pain relief in dysmenorrhoea. Produces a dual-phase pain-relieving effect, with Drotaverine providing early analgesic effect and Mefenamic acid offering sustained relief. Displays synergistic effect and patient compliance.",
        "image": "images/merged/Droser.jpg"
    },
    {
        "id": 17,
        "name": "DIGISER Syp",
        "composition": "Pepsin with Diastase Liquid",
        "packing": "200ml",
        "description": "Assures relief from indigestion problems. Induces a sigh of relief from symptoms like belching and flatulence. An extrinsic support to digest dietary carbohydrates and proteins, it is a valuable digestant in insufficient pancreatic activity.",
        "image": "images/merged/DIGISER-SYP-3D-BIG.png"
    },
    {
        "id": 18,
        "name": "FIXER-100 Tabs",
        "composition": "Cefixime (Dispersible & Flavoured Tabs) 100 mg",
        "packing": "10x10 Alu. Alu.",
        "description": "A dispersible and flavoured tablet form of a third-generation cephalosporin antibiotic. Useful for treating a wide range of bacterial infections with improved patient compliance, especially in empirical treatment.",
        "image": "images/merged/FIXER-100-3D.png"
    },
    {
        "id": 19,
        "name": "FIXER-200 Tabs",
        "composition": "Cefixime 200 mg",
        "packing": "10x10 Alu. Alu.",
        "description": "A 200mg tablet providing a compact solution to control bacterial infections. This semisynthetic, third-generation cephalosporin antibiotic has a broad Gram-positive spectrum and is useful even against fluoroquinolone-resistant N. gonorrhoeae.",
        "image": "images/merged/FIXER-200-3D.png"
    },
    {
        "id": 20,
        "name": "FIXER-200 LB Tabs",
        "composition": "Cefixime 200 mg, Lactic Acid Bacillus 60 million spores",
        "packing": "10x10 Alu. Alu.",
        "description": "An antibiotic treatment that preserves microflora. It offers a third-generation broad-spectrum oral cephalosporin and provides a built-in probiotic supplement to maintain natural microflora and prevent antibiotic-associated diarrhoea.",
        "image": "images/merged/FIXER-200-3D.png"
    },
    {
        "id": 21,
        "name": "FIXER Dry Syp",
        "composition": "Cefixime 50mg/5ml",
        "packing": "30 ml With Box",
        "description": "A dry syrup formulation of Cefixime, available in a delicious kid-friendly flavour. It offers a compact solution to control bacterial infections in a convenient, easy-to-administer liquid form for pediatric patients.",
        "image": "images/merged/FIXER-DS-3D.png"
    },
    {
        "id": 22,
        "name": "FIXER-OF Tabs",
        "composition": "Cefixime 200mg, Ofloxacin 200mg",
        "packing": "10x10 Alu.Alu.",
        "description": "A dominating combination to devastate bacterial infections. Offers a broader antibacterial spectrum than either drug alone, effective against many aerobic and anaerobic bacteria and even betalactamase producing strains.",
        "image": "images/merged/FIXER-OF-3D.png"
    },
    {
        "id": 23,
        "name": "FLOXER-500 Tabs",
        "composition": "Levofloxacin 500 mg",
        "packing": "20x10 Blister",
        "description": "A broad-spectrum antibacterial agent for a victorious smile. Exhibits activity against a range of Gram-positive and Gram-negative bacteria and is highly appreciable in genito-urinary infections and community-acquired pneumonia.",
        "image": "images/merged/FLOXER-3D.png"
    },
    {
        "id": 24,
        "name": "GASONET-40 Inj (Lyophilized)",
        "composition": "Pantoprazole 40 mg",
        "packing": "Vial",
        "description": "An injectable form of Pantoprazole, provided as a lyophilized powder for reconstitution. It causes potent and long-lasting suppression of gastric acid secretion, ideal for acute care settings where oral administration is not possible.",
        "image": "images/merged/GASONET-40-INJ-3D.png"
    },
    {
        "id": 25,
        "name": "GASONET-40 Tabs",
        "composition": "Pantoprazole (Enteric Coated) 40 mg",
        "packing": "10x10 Alu. Alu.",
        "description": "An enteric-coated tablet for power, pace, and perfection in treating peptic disorders. It causes potent and long-lasting suppression of basal and stimulated gastric acid secretion and has a lower potential for drug-drug interactions.",
        "image": "images/merged/GASONET-40-3D.png"
    },
    {
        "id": 26,
        "name": "GASONET-D Tabs",
        "composition": "Pantoprazole 40 mg, Domperidone 10 mg",
        "packing": "10x10 Alu. Alu.",
        "description": "A combination tablet that pairs the acid-suppressing power of Pantoprazole with the prokinetic action of Domperidone. This formulation is effective in treating dyspepsia associated with delayed gastric emptying.",
        "image": "images/merged/GASONET-D-3D.png"
    },
    {
        "id": 27,
        "name": "GASONET-D SR Caps",
        "composition": "Pantoprazole Sodium 40 mg, Domperidone (Sustained Release) 30 mg",
        "packing": "10x10 Alu. Alu.",
        "description": "A gastro-friendly combination with prokinetic advantages. This sustained-release capsule offers round-the-clock control on acid release and improves symptoms of dyspepsia, GERD, and diabetic gastropathy.",
        "image": "images/merged/GASONET-DSR-3D.png"
    },
    {
        "id": 28,
        "name": "GINSER Softgel (Drug Formula)",
        "composition": "Multivitamins with Ginseng Softgel",
        "packing": "10x1x10 Blister",
        "description": "A multi-vitamin supplement with added features. Offers multi-vitamin support for better metabolic activities, blessed with anti-oxidants vitamins like A, C, and E, and also provides calcium & a phytoadaptogen in the form of Ginseng.",
        "image": "images/merged/GINSER-3D-BIG.png"
    },
    {
        "id": 29,
        "name": "LIVCEP Syp",
        "composition": "Cyproheptadine 2mg/5ml, Tricholine Citrate 275mg/5ml",
        "packing": "200ml",
        "description": "A syrup that relives the liver. It effectively improves liver's functional ability and also corrects anorexia with the appetite-stimulating effects of Cyproheptadine. Indicated for various forms of hepatitis and liver abnormalities.",
        "image": "images/merged/livcep-Syrp.jpg"
    },
    {
        "id": 30,
        "name": "LIVSAFE Syp",
        "composition": "An Ayurvedic Liver Tonic",
        "packing": "200ML",
        "description": "A natural, Ayurvedic liver tonic designed to support and protect liver function. This herbal formulation helps in detoxification and promotes overall liver health.",
        "image": "images/merged/LIvsafe-Syrup.jpg"
    },
    {
        "id": 31,
        "name": "LUBISER EYE Drops",
        "composition": "Carboxymethyl-Cellulose 0.5% w/v, Stabilized Oxychloro Complex 0.0075%",
        "packing": "10 ml. With Box",
        "description": "Lubricating eye drops for relieving dryness and irritation. The Carboxymethyl-Cellulose provides long-lasting moisture, while the stabilized oxychloro complex acts as a gentle, non-irritating preservative.",
        "image": "images/merged/LUBISER-DROPS-3D.jpg"
    },
    {
        "id": 32,
        "name": "LYCOSER SOFTGEL (Drug Formula)",
        "composition": "Grape Seed Extract 25mg, Lycopene 6% USP 2mg, Lutein 8% USP 3mg, Vitamin A 5000 I.U, B-Vitamins, Zinc, Selenium",
        "packing": "10x10 Blister",
        "description": "A lycopene-enriched multi-antioxidant preparation for health and longevity. Lycopene is a powerful antioxidant, and the formula is fortified with B-complex vitamins and essential minerals to improve energy metabolism.",
        "image": "images/merged/LYCOSER-SOFT-3D-BIG.png"
    },
    {
        "id": 33,
        "name": "LYCOSER Syp (Food Formula) (Sugar Free)",
        "composition": "Lycopene 10% 1000 mcg, Vitamins, Selenium, Zinc, Manganese, Iodine, Copper",
        "packing": "200 ml. Sorbitol Base",
        "description": "A sugar-free syrup providing a powerful antioxidant boost with Lycopene. Fortified with essential vitamins and minerals, this formula supports overall health and is suitable for a wide range of patients.",
        "image": "images/merged/LYCOSER-SYP-3D.png"
    },
    {
        "id": 34,
        "name": "MECOSER-PLUS Inj",
        "composition": "Methylcobalamin 1000 mcg/2ml, Vitamin B6 100mg/2ml, Niacinamide 100mg/2ml",
        "packing": "5x2ml Blister",
        "description": "An injectable neurotropic and neuroprotective B-complex formula. Provides high-dose Methylcobalamin for improved neurological control and helps prevent the degeneration of neurological tissues.",
        "image": "images/merged/MECOSER-PLUS-3D-BIG.png"
    },
    {
        "id": 35,
        "name": "MECOSER-PLUS Tabs",
        "composition": "Methylcobalamin 1500mcg, Alpha Lipoic Acid 100mg, Pyridoxine Hydrochloride 3mg, Folic Acid 1.5mg",
        "packing": "10x10 Alu.Alu.",
        "description": "An oral neuroprotective formula for conditions like diabetic neuropathy. It combines Methylcobalamin for nerve health with the potent antioxidant Alpha-Lipoic Acid, which acts in both water and lipid media.",
        "image": "images/merged/MECOSER-PLUS-3D.png"
    },
    {
        "id": 36,
        "name": "MEFTEN-D Tabs",
        "composition": "Dicyclomine 20 mg, Mefenamic Acid 250 mg",
        "packing": "20x10 Blister",
        "description": "Provides effective relief from colic pain. Dicyclomine helps subside acute spasmodic pain, while Mefenamic Acid also relieves the associated inflammation, offering a sigh of relief from severe pain.",
        "image": "images/merged/MEFTEN-D-3D.png"
    },
    {
        "id": 37,
        "name": "MOXISER-250 DT Tabs",
        "composition": "Amoxycillin 250 mg",
        "packing": "10x10",
        "description": "A dispersible tablet of Amoxycillin 250mg, a trusted penicillin antibiotic. It is stable at gastric pH, completely absorbed, and diffuses rapidly into most body tissues and fluids.",
        "image": "images/merged/MOXISER-250-3D-BIG.png"
    },
    {
        "id": 38,
        "name": "MOXISER-500 Caps",
        "composition": "Amoxycillin 500 mg",
        "packing": "10x10",
        "description": "A 500mg capsule of the trusted penicillin antibiotic, Amoxycillin. It offers desirable pharmacokinetic characteristics and is useful for a wide range of bacterial infections.",
        "image": "images/merged/Moxiser-500-dt.jpg"
    },
    {
        "id": 39,
        "name": "MOXISER-CV-625 Tabs",
        "composition": "Amoxycillin 500 mg, Clavulanic Acid 125 mg",
        "packing": "10x10 Alu. Strip.",
        "description": "Ensures a high level of clinical success by offering a protected amoxicillin for the treatment of a range of infections, including those caused by beta-lactamase producing bacteria. Useful as an empirical treatment.",
        "image": "images/merged/moxiser-625.png"
    },
    {
        "id": 40,
        "name": "MOXISER-CV+ 625 Tabs",
        "composition": "Amoxycillin 500 mg, Clavulanic Acid 125 mg, Lactic Acid Bacillus 60 million spores",
        "packing": "10x10 Alu. Strip.",
        "description": "Protects the antibiotic and preserves microflora. This formulation offers a probiotic-enriched, pathogen-protected amoxicillin, preventing secondary infective complications and reducing the chances of antibiotic-induced diarrhoea.",
        "image": "images/merged/Moxiser-cv-625-3d.jpg"
    },
    {
        "id": 41,
        "name": "MULTOX Softgel (Food Formula)",
        "composition": "Anti Oxidants, Multi-Vitamin & Multi-Mineral Capsules",
        "packing": "10x10 Blister",
        "description": "Keeps the body active and energetic. This softgel furnishes both lipid-soluble and water-soluble vitamins, ensures trace element supplement, and gratifies micronutrient support with antioxidants.",
        "image": "images/merged/Multox-Softgel.jpg"
    },
    {
        "id": 42,
        "name": "NACPOL-MR Tabs",
        "composition": "Aceclofenac 100 mg, Paracetamol 325 mg, Chlorzoxazone 250mg",
        "packing": "10x10 Alu. Alu.",
        "description": "Assists movement and provides pain relief in musculoskeletal conditions. Ensures both early and sustained pain relief from inflammation, extends a built-in antispasmodic effect, and provides chondro-promotive effect of aceclofenac.",
        "image": "images/merged/Nacpol-Mr.jpg"
    },
    {
        "id": 43,
        "name": "NACPOL-P Tabs",
        "composition": "Aceclofenac 100 mg, Paracetamol 325 mg",
        "packing": "10x2x10 Blister",
        "description": "A combination of Aceclofenac and Paracetamol, offering potent anti-inflammatory and analgesic effects for pain management in conditions like arthritis and sports injuries.",
        "image": "images/merged/NACPOL-P-3D.png"
    },
    {
        "id": 44,
        "name": "NACPOL-SP Tabs",
        "composition": "Aceclofenac 100 mg, Paracetamol 325 mg, Serratiopeptidase 15mg",
        "packing": "10x10 Alu. Alu.",
        "description": "A super power among NSAID combinations. Displays super power to tackle inflammation by stopping inflammatory mediators and removing exudates, ensuring early pain relief.",
        "image": "images/merged/NACPOL-SP-3D.png"
    },
    {
        "id": 45,
        "name": "NIMOTEN-MD Tabs",
        "composition": "Nimesulide 100 mg",
        "packing": "10x2x10 Blister",
        "description": "A mouth-dissolving tablet of Nimesulide for rapid onset of action. It provides potent antipyretic and anti-inflammatory effects for conditions like fever, typhoid, and acute arthritic pain.",
        "image": "images/merged/NIMOTEN-MD-3D.png"
    },
    {
        "id": 46,
        "name": "NIMOTEN -P Tabs",
        "composition": "Nimesulide 100 mg, Paracetamol 325 mg",
        "packing": "10X2X10 Blister",
        "description": "A potent antipyretic combination for faster and durable action in spectacular performance against fever and pain. It extends additional built-in analgesic & anti-inflammatory effects and exhibits a low propensity for gastric irritation.",
        "image": "images/merged/NIMOTEN-P-3D.png"
    },
    {
        "id": 47,
        "name": "OFTEN-200 Tabs",
        "composition": "Ofloxacin 200 mg",
        "packing": "10x10 Blister",
        "description": "Your search for a good anti-bacterial is over. More effective than chloramphenicol in typhoid, requiring only 3 days of treatment. A valuable antibacterial for nosocomial infections and helps prevent biofilm formation.",
        "image": "images/merged/OFTEN-200-3D.png"
    },
    {
        "id": 48,
        "name": "OFTEN-OZ Tabs",
        "composition": "Ofloxacin 200 mg, Ornidazole 500 mg",
        "packing": "10x10 Blister",
        "description": "A joint effort to eradicate mixed infections. Ensures complete eradication by targeting both aerobic (Ofloxacin) and anaerobic bacteria/parasites (Ornidazole). Free from typical nitroimidazole side effects like metallic taste.",
        "image": "images/merged/OFTEN-OZ-3D.png"
    },
    {
        "id": 49,
        "name": "OFTEN-PLUS Cream",
        "composition": "Itraconazole 1% w/w, Ofloxacin 0.75% w/w, Ornidazole 2.0% w/w, Clobetasol Propionate 0.05% w/w",
        "packing": "15 gm Lemi Tube",
        "description": "A comprehensive cream to vanish mixed skin infections. It eradicates bacterial infection with Ofloxacin and Metronidazole, clears fungal infestation with Terbinafine, and ensures moisturizing effect of dexpanthenol.",
        "image": "images/merged/Often-Plus-Cream.jpg"
    },
    {
        "id": 50,
        "name": "PLAXINET Caps",
        "composition": "Vitamin B-complex with L-Lysine cap",
        "packing": "10x10 Blister",
        "description": "A capsule formulation to reduce risk and restore balance. It effectively corrects B-complex vitamin deficiencies and provides the built-in advantages of probiotics to maintain homeostasis of the colon.",
        "image": "images/merged/PLAXINET-CAP-3D-BIG.png"
    },
    {
        "id": 51,
        "name": "PLAXINET Syp",
        "composition": "Vitamin B-complex with L-Lysine Syp",
        "packing": "200 ml",
        "description": "A syrup to reduce risk and restore balance. It corrects B-complex deficiencies, provides probiotic benefits, and offers L-lysine for growth promotion in a palatable syrup form.",
        "image": "images/merged/PLAXINET-SYP-3D-BIG.png"
    },
    {
        "id": 52,
        "name": "PRETECH-M Caps",
        "composition": "Pregabalin 75mg, Methylcobalamin 750mcg",
        "packing": "10x10 Alu.Alu.",
        "description": "Aids in neuronal repair and maintenance. Helps repair damaged nerves with neuro-specific methylcobalamin, which improves nerve conduction and promotes regeneration. Pregabalin reduces the synaptic release of several neurotransmitters.",
        "image": "images/merged/pretech-m.png"
    },
    {
        "id": 53,
        "name": "RABENET-DSR Caps",
        "composition": "Rabeprazole Sodium 20 mg, Domperidone (Sustained Release) 30 mg",
        "packing": "10x10 Alu. Alu.",
        "description": "Enjoy the festival with desired food. This capsule rapidly checks hyperacidity, effectively improves rabeprazole-induced dyspepsia, and offers patient compliance with smooth control on gastrointestinal motility.",
        "image": "images/merged/RABENET-DSR-3D.png"
    },
    {
        "id": 54,
        "name": "RABENET-LSR Caps",
        "composition": "Rabeprazole Sodium 20 mg, Levosulpiride (Sustained Release) 75 mg",
        "packing": "10x1x10 Alu. Alu.",
        "description": "Suppresses acidity and stimulates gut motility. Effectively counters hyperacidity with faster-acting PPI Rabeprazole and ensures effective gut motility with prokinetic Levosulpiride, improving patient compliance.",
        "image": "images/merged/RABENET-LSR-3D.png"
    },
    {
        "id": 55,
        "name": "SANDIC-AQ Inj",
        "composition": "Diclofenac 75 mg/1ml, Benzyl Alcohol 4% v/v",
        "packing": "10x5x1 ml Blister",
        "description": "That ensures, \"Small quantity, Big relief\". A painless injection that provides a better and convenient dosing alternative with improved tolerability. It allows for faster absorption from the deltoid region.",
        "image": "images/merged/SANDIC-AQ-3D.png"
    },
    {
        "id": 56,
        "name": "SANDIC-SP Tabs",
        "composition": "Diclofenac Sodium 50 mg, Paracetamol 325mg, Serratiopeptidase 10 mg",
        "packing": "10x10 Alu. Alu.",
        "description": "A special power to resolve inflammation. Provides dual modes of action to curb inflammation, with Diclofenac stopping prostaglandins and Serratiopeptidase removing exudates. Exerts early symptomatic pain relief.",
        "image": "images/merged/SANDIC-SP-3D.jpg"
    },
    {
        "id": 57,
        "name": "SCANER Tabs",
        "composition": "Fluconazole 150 mg",
        "packing": "20x3x1 Blister",
        "description": "For candid support in vaginal candidiasis. Establishes an exceptional therapeutic record for candidal infections with remarkable efficacy and a favorable safety profile. Highly valuable in superficial and systemic fungal infections.",
        "image": "images/merged/SCANER-3D-BIG.png"
    },
    {
        "id": 58,
        "name": "SECER-ES-DSR Caps",
        "composition": "Esomeprazole 40 mg, Domperidone (Sustained Release) 30 mg",
        "packing": "10x10 Alu. Strip.",
        "description": "For managing effective suppression of acid and dyspepsia. Dramatically decreases the secretion of hydrochloric acid, decreases postprandial reflux time, and improves symptoms control and patient compliance.",
        "image": "images/merged/secer-es.png"
    },
    {
        "id": 59,
        "name": "SECER-O Caps",
        "composition": "Omeprazole 20 mg",
        "packing": "10x15 Alu. Strip",
        "description": "A standard Omeprazole capsule for treating acid-peptic disorders. It effectively controls gastric acid, providing relief from conditions like GERD and peptic ulcers.",
        "image": "images/merged/SECER-O-3D.png"
    },
    {
        "id": 60,
        "name": "SECER-OD Caps",
        "composition": "Omeprazole 20 mg, Domperidone 10 mg",
        "packing": "10x15 Alu strip",
        "description": "An obvious choice in oppressive conditions. A breakthrough therapy for acid-peptic disorders that also controls associated nausea and vomiting, offering excellent patient compliance.",
        "image": "images/merged/SECER-OD-3D.png"
    },
    {
        "id": 61,
        "name": "SECOLD-PLUS Susp",
        "composition": "Paracetamol 250mg/5ml, Phenylepherine 5mg/5ml, C.P.M. 2mg/5ml",
        "packing": "60ml With M.Cup",
        "description": "A multi-symptom cold and flu suspension for pediatric use. It contains Paracetamol for fever, Phenylephrine for nasal congestion, and Chlorpheniramine Maleate for allergy relief.",
        "image": "images/merged/Secold-susp.jpg"
    },
    {
        "id": 62,
        "name": "SECOLD-PLUS Tabs",
        "composition": "Paracetamol 500mg, Phenylepherine 10mg, C.P.M. 4mg",
        "packing": "20x10 Blister",
        "description": "A tablet formulation for comprehensive cold and flu relief. Paracetamol manages pain and fever, Phenylephrine acts as a decongestant, and Chlorpheniramine Maleate addresses allergic symptoms.",
        "image": "images/merged/SECOLD-3D.png"
    },
    {
        "id": 63,
        "name": "SEER-4G Softgel (Food Formula)",
        "composition": "Omega-3 Fatty Acid, Green Tea Extract, Ginkgo Biloba, Ginseng, Grape Seed Extract, Vitamins, Minerals & Trace Elements",
        "packing": "10x1x10 Blister",
        "description": "For four great nutritional benefits. Extends nutritional support as a health promoter and maintainer. Displays multiple effects including antimicrobial, immunostimulant, antioxidant and enduring effects.",
        "image": "images/merged/seer-4g.jpg"
    },
    {
        "id": 64,
        "name": "SEERCEF Dry Syp",
        "composition": "Cefpodoxime 50mg/5ml",
        "packing": "30 ml. With Box",
        "description": "An antibiotic dry syrup providing profound efficacy, safety, and tolerability. A useful option for empirical therapy due to its wide antibacterial spectrum, particularly for community-acquired pneumonia in children.",
        "image": "images/merged/seercef.png"
    },
    {
        "id": 65,
        "name": "SEERCEF-200 Tabs",
        "composition": "Cefpodoxime 200 mg",
        "packing": "10x10 Alu. Alu.",
        "description": "An oral antibiotic with profound efficacy, safety, and tolerability. A useful option for empirical therapy due to its wide antibacterial spectrum and as a stepdown from parenteral therapy in community-acquired pneumonia.",
        "image": "images/merged/seercef-200.jpg"
    },
    {
        "id": 66,
        "name": "SEERCEF-250 Inj",
        "composition": "Ceftriaxone 250 mg",
        "packing": "Vial with WFI",
        "description": "An injectable antibiotic for compact benefit in bacterial infections. Highly active against most Gram-positive and Gram-negative organisms and exhibits stability against betalactamases. Effectively clears typhoid infection.",
        "image": "images/merged/Seercef-250INJ.jpg"
    },
    {
        "id": 67,
        "name": "SEERCEF-1000 Inj",
        "composition": "Ceftriaxone 1000 mg",
        "packing": "Vial with WFI",
        "description": "A higher-strength injectable antibiotic for severe bacterial infections. Highly active against a broad range of pathogens and shows excellent activity against CNS infections by crossing the blood-brain barrier.",
        "image": "images/merged/Seercef-1000INJ.jpg"
    },
    {
        "id": 68,
        "name": "SEERCEF-S 375 Inj",
        "composition": "Ceftriaxone 250 mg, Sulbactam 125 mg",
        "packing": "Vial with WFI",
        "description": "For excellent cure with enhanced efficacy. This combination of Ceftriaxone and Sulbactam (a beta-lactamase inhibitor) expands the efficacy even to betalactamase-sensitive strains, allowing for successful outpatient treatment.",
        "image": "images/merged/placeholder.png"
    },
    {
        "id": 69,
        "name": "SEERCEF-S 1500 Inj",
        "composition": "Ceftriaxone 1000 mg, Sulbactam 500 mg",
        "packing": "Vial with WFI",
        "description": "A high-dose injectable for severe mixed infections. The combination with Sulbactam provides a broad spectrum of activity against beta-lactamase producing organisms, ensuring an enhanced and excellent cure rate.",
        "image": "images/merged/placeholder.png"
    },
    {
        "id": 70,
        "name": "SEERPRO POWDER (Food Formula)",
        "composition": "Protein Powder with Calcium, Iron, Minerals & Carbohydrates (Chocolate Flavour)",
        "packing": "200 Gms. Tin",
        "description": "A chocolate-flavoured protein powder fortified with essential minerals like Calcium and Iron. It serves as a nutritional supplement to support muscle growth, bone health, and overall vitality.",
        "image": "images/merged/seerpro.png"
    },
    {
        "id": 71,
        "name": "SEPOL-650 Tabs",
        "composition": "Paracetamol 650mg",
        "packing": "10x2x10 Blister",
        "description": "A higher strength Paracetamol tablet for effective pain and fever relief. Offers an important non-opiate analgesic with better tolerability and is widely preferred over NSAIDs due to lower risk of gastrointestinal toxicity.",
        "image": "images/merged/SEPOL-650-3D.png"
    },
    {
        "id": 72,
        "name": "SEPOL- M-DS Susp",
        "composition": "Mefenamic Acid 100 mg, Paracetamol 250 mg",
        "packing": "60ml With M.Cup",
        "description": "A pediatric suspension to tackle both pain and fever. It produces a fast and sustained analgesic effect and also displays a potent antipyretic effect due to the combination of Mefenamic Acid and Paracetamol, in a kid-friendly flavour.",
        "image": "images/merged/sepol-mds.png"
    },
    {
        "id": 73,
        "name": "SERALAX POWDER",
        "composition": "Isapgol Husk 40%, Sonamukhi 5%, Gulab Dal 5%, Harad 10%, Mulethi 5%, Saunf 5%",
        "packing": "100gm Jar",
        "description": "A natural solution for a hard-core problem. This herbal powder induces smooth laxation and relieves constipation by providing multiple mechanisms, including prokinetic and stool-softening effects. It is free from habit-forming effects.",
        "image": "images/merged/Seralax.png"
    },
    {
        "id": 74,
        "name": "SERICET Tabs",
        "composition": "Levocetirizine 5 mg",
        "packing": "6x5x10 Blister",
        "description": "For seasonal or routine complaints of allergy. This tablet extends antiallergic and built-in anti-inflammatory effects. It is more potent than other available H1 blockers and offers the convenience of once-a-day dosing.",
        "image": "images/merged/SERICET-3D.png"
    },
    {
        "id": 75,
        "name": "SERICET-M Syp",
        "composition": "Montelukast Sodium 4 mg/5ml, Levocetirizine 2.5 mg/5ml",
        "packing": "60ml With Box",
        "description": "A pediatric syrup for when air and allergy go parallel. It checks allergic manifestations by preventing the effect of leukotrienes (Montelukast) and histamine (Levocetirizine), improving the quality of life of allergic patients.",
        "image": "images/merged/Sericet-m-Syrup.jpg"
    },
    {
        "id": 76,
        "name": "SERICET-M Tabs",
        "composition": "Montelukast Sodium 10 mg, Levocetirizine 5 mg",
        "packing": "10x10 Alu. Alu.",
        "description": "A combination tablet to separate air and allergy. Checks allergic manifestations with a combination of Montelukast (prevents leukotrienes) and Levocetirizine (prevents histamine), proving more effective than either drug alone.",
        "image": "images/merged/SERICET-M-3D.png"
    },
    {
        "id": 77,
        "name": "SERVE-E Powder (Orange Flavour)",
        "composition": "Dextrose 17.5gm, Sucrose 14gm, Zinc Sulphate (Eq. to 32.5mg Elemental Zinc), Ascorbic Acid (Coated) 50mg",
        "packing": "105 gm",
        "description": "Energize your patients with this orange-flavoured powder. It provides both instant and sustained sources of energy from dextrose and sucrose, improves immunity against cold with Vitamin C and Zinc, and is highly beneficial to counter heat stroke.",
        "image": "images/merged/SERVE-E-3D.jpg"
    },
    {
        "id": 78,
        "name": "TACZI-250 Tabs",
        "composition": "Azithromycin 250 mg",
        "packing": "10x10 Alu.Alu.",
        "description": "An effective treatment for throat and other bacterial infections. This 250mg Azithromycin tablet provides broad-spectrum antibiotic action with extended pharmacokinetic support, including longer tissue penetration and a half-life of 2-4 days.",
        "image": "images/merged/TACZI-250-3D.png"
    },
    {
        "id": 79,
        "name": "TACZI-500 Tabs",
        "composition": "Azithromycin 500 mg",
        "packing": "10 x 1 x 5",
        "description": "A 500mg dose of Azithromycin for more severe infections. It offers a broad-spectrum antibiotic with an extended pharmacokinetic profile, allowing for convenient once-daily dosing and effective treatment of STDs due to treponema.",
        "image": "images/merged/TACZI-500-3D.png"
    },
    {
        "id": 80,
        "name": "TACZI-200 Susp",
        "composition": "Azithromycin 200 mg/5ml",
        "packing": "30 ml With Box",
        "description": "A pediatric suspension for throat infections. This Azithromycin formulation provides a broad-spectrum antibiotic with a long half-life in a pleasant flavour, ensuring patient compliance.",
        "image": "images/merged/TACZI-SUSP.-3D-BIG.png"
    },
    {
        "id": 81,
        "name": "TENRON-XT Tabs",
        "composition": "Ferrous Ascorbate eq. to Elemental Iron 100 mg, Folic Acid 1.5 mg",
        "packing": "10x10 Alu.Alu.",
        "description": "Raises haemoglobin when it's less than perfect. Ensures better and greater absorption of iron from the gut by providing ascorbic acid. It also provides built-in folic acid supplementation to prevent macrocytic anaemia and birth defects.",
        "image": "images/merged/TENRON-XT-3D.png"
    },
    {
        "id": 82,
        "name": "TENRON-XT Susp",
        "composition": "Ferrous Ascorbate eq. to Elemental Iron 30mg/5 ml, Folic Acid 550mcg/5 ml",
        "packing": "200 ml with Box",
        "description": "A delicious flavoured suspension to raise haemoglobin. Provides easily absorbable iron (Ferrous Ascorbate) and essential Folic Acid to combat anaemia, especially during pregnancy.",
        "image": "images/merged/TENRON-XT-SYP-3D-BIG.png"
    },
    {
        "id": 83,
        "name": "TIPSIN-PLUS Tabs",
        "composition": "Trypsin 48 mg, Bromelain 90 mg, Rutoside 100 mg, Aceclofenac 100 mg",
        "packing": "10x10 Alu.Alu.",
        "description": "Brings relief in osteoarthritis by producing multiple effects to relieve inflammation and improve healing. This combination effectively improves pain, stiffness, and physical debility caused by inflammation.",
        "image": "images/merged/Tipsin-plus.jpg"
    },
    {
        "id": 84,
        "name": "VITIGON -16 Tabs",
        "composition": "Betahistine Hydrochloride 16mg",
        "packing": "10x10 Alu.Alu.",
        "description": "For when vertigo is gone. Provides a unique antivertiginous drug that acts as a weak H1 agonist and potent H3 antagonist. It is free from sedative effects and does not interfere with vestibular rehabilitation.",
        "image": "images/merged/vitigon-16.jpg"
    },
    {
        "id": 85,
        "name": "VOLNET GEL",
        "composition": "Diclofenac Diethyl Amine 1.16% w/w, Eq. to Diclofenac Sodium 1.00% w/w, Methyl Salicylate 10.00% w/w, Menthol 5.00% w/w, Linseed Oil 3.00% w/w",
        "packing": "30gm Lemi Tube",
        "description": "A spell exit for pain. This gel extends double control on the inflammatory process with diclofenac and linseed oil, improves local blood circulation, and reduces burning sensation with menthol. Available in a non-messy gel formulation.",
        "image": "images/merged/VOLNET-GEL-3D-BIG.png"
    },
    {
        "id": 86,
        "name": "VOMSER Inj",
        "composition": "Ondansetron 4mg/2ml",
        "packing": "50x2ml Blister",
        "description": "An injectable antiemetic for heightened challenges posed by nausea and vomiting. Provides better control on vomiting incidences without extrapyramidal symptoms. Highly beneficial in post-operative nausea and vomiting (PONV).",
        "image": "images/merged/VOMSER-INJ-3D-BIG.png"
    },
    {
        "id": 87,
        "name": "VOMSER Syp",
        "composition": "Ondansetron 2mg/5ml",
        "packing": "30ml With Box With Dropper",
        "description": "A syrup formulation of Ondansetron, ideal for pediatric use. It provides reliable control over vomiting and is effective even against highly emetogenic triggers, ensuring patient compliance.",
        "image": "images/merged/VOMSER-3D-BIG.png"
    },
    {
        "id": 88,
        "name": "VOMSER-MD Tabs",
        "composition": "Ondansetron 4 mg",
        "packing": "10x10 Alu.Alu",
        "description": "A mouth-dissolving tablet for quick relief from nausea and vomiting. This antiemetic has an improved clinical profile with better control on vomiting incidences and no extrapyramidal symptoms.",
        "image": "images/merged/VOMSER-MD-3D.png"
    },
    {
        "id": 89,
        "name": "XIBORIC Tabs",
        "composition": "Etoricoxib 90 mg",
        "packing": "10x10 Alu.Alu.",
        "description": "A recommended NSAID for refractory pain. A COX-2 selective NSAID with high selectivity, it demonstrates therapeutic benefit in both acute and chronic pain conditions and is useful in preventing heterotopic ossification after total hip arthroplasty.",
        "image": "images/merged/xiboric-90.png"
    }
];
    let currentView = 'grid';
    let currentPage = 1;
    let currentSort = 'name-asc';
    let searchTerm = '';
    let formFilter = '';
    const productsPerPage = 12;
    let filteredProducts = [...products];

    // --- Element Caching ---
    const searchInput = document.getElementById('search-term');
    const formSelect = document.getElementById('form-filter');
    const sortSelect = document.getElementById('sort-products');
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');

    function initialize() {
        displayProducts(filteredProducts, currentPage, productsPerPage);
        updateResultsCount(filteredProducts.length);
        addEventListeners();
    }

    function addEventListeners() {
        searchInput.addEventListener('keyup', () => { searchTerm = searchInput.value.toLowerCase(); filterAndDisplay(); });
        formSelect.addEventListener('change', () => { formFilter = formSelect.value; filterAndDisplay(); });
        sortSelect.addEventListener('change', () => { currentSort = sortSelect.value; filterAndDisplay(); });
        gridViewBtn.addEventListener('click', () => setActiveView('grid'));
        listViewBtn.addEventListener('click', () => setActiveView('list'));
    }

    function filterAndDisplay() {
        filteredProducts = products.filter(product => {
            const nameLower = product.name.toLowerCase();
            const compLower = product.composition.toLowerCase();
            const formType = (nameLower.split(' ').pop() || '').replace('.', '');
            const matchesSearch = searchTerm === '' || nameLower.includes(searchTerm) || compLower.includes(searchTerm);
            const matchesForm = formFilter === '' || formType.includes(formFilter);
            return matchesSearch && matchesForm;
        });
        currentPage = 1;
        sortProducts();
        displayProducts(filteredProducts, currentPage, productsPerPage);
        updateResultsCount(filteredProducts.length);
    }
    
    function sortProducts() {
        filteredProducts.sort((a, b) => {
            if (currentSort === 'name-desc') return b.name.localeCompare(a.name);
            if (currentSort === 'newest') return b.id - a.id;
            return a.name.localeCompare(b.name);
        });
    }

    function displayProducts(productsData, page, perPage) {
        const startIndex = (page - 1) * perPage;
        const paginatedProducts = productsData.slice(startIndex, startIndex + perPage);
        currentView === 'grid' ? displayGridView(paginatedProducts) : displayListView(paginatedProducts);
        setupPagination(productsData.length, perPage);
    }

    function displayGridView(productsData) {
        const container = document.getElementById('products-grid-container');
        container.innerHTML = productsData.length === 0
            ? '<div class="col-12 text-center py-5"><p class="lead text-muted">No products found.</p></div>'
            : productsData.map(product => `
                <div class="col-md-6 col-lg-4 col-xl-3 mb-4 d-flex">
                    <div class="card product-card w-100 border-0 shadow-sm d-flex flex-column" data-product-id="${product.id}" style="cursor:pointer;" data-aos="fade-up">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}" class="img-fluid">
                        </div>
                        <div class="product-content">
                            <h5 class="product-title">${product.name}</h5>
                            <p class="product-category">${product.packing}</p>
                        </div>
                        <div class="p-3 pt-0 mt-auto">
                            <button class="btn btn-sm btn-outline-primary w-100 view-product" data-product-id="${product.id}">View Details</button>
                        </div>
                    </div>
                </div>
            `).join('');
        addProductEventListeners();
    }

    function displayListView(productsData) {
        const container = document.getElementById('products-list-container');
        container.innerHTML = productsData.length === 0
            ? '<div class="text-center py-5"><p class="lead text-muted">No products found.</p></div>'
            : productsData.map(product => `
                <div class="product-list-item mb-3 p-3" data-product-id="${product.id}" style="cursor:pointer;" data-aos="fade-up">
                    <div class="row g-0 align-items-center">
                        <div class="col-md-2 d-none d-md-flex align-items-center justify-content-center p-2">
                            <div class="list-view-image">
                               <img src="${product.image}" alt="${product.name}" class="img-fluid">
                            </div>
                        </div>
                        <div class="col-md-10">
                            <div class="product-content">
                                <div class="product-header">
                                    <div>
                                        <h5 class="product-title mb-1">${product.name}</h5>
                                        <span class="text-muted small">${product.packing}</span>
                                    </div>
                                    <button class="btn btn-sm btn-primary view-product ms-3" data-product-id="${product.id}">Details</button>
                                </div>
                                <p class="product-description small mt-2 mb-0 text-muted">${product.composition}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        addProductEventListeners();
    }
    
    function addProductEventListeners() {
        document.querySelectorAll('.view-product, .product-card, .product-list-item').forEach(element => {
            element.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = e.currentTarget.getAttribute('data-product-id');
                const product = products.find(p => p.id == productId);
                if (product) showProductModal(product);
            });
        });
    }

    function showProductModal(product) {
        // Populate text content
        document.getElementById('modal-product-name').textContent = product.name;
        document.getElementById('modal-product-packing').textContent = product.packing;
        document.getElementById('modal-product-composition').textContent = product.composition;
        document.getElementById('modal-product-description').textContent = product.description;
        document.getElementById('modal-product-image').src = product.image;
        
        // Show the modal
        const productModal = new bootstrap.Modal(document.getElementById('productModal'));
        productModal.show();

        // Setup the image viewer once the modal is shown
        const modalElement = document.getElementById('productModal');
        modalElement.addEventListener('shown.bs.modal', setupImageViewer, { once: true });
    }

    function setupImageViewer() {
        const image = document.getElementById('modal-product-image');
        const zoomInBtn = document.getElementById('zoom-in-btn');
        const zoomOutBtn = document.getElementById('zoom-out-btn');
        const resetBtn = document.getElementById('reset-zoom-btn');

        let scale = 1;
        let translateX = 0;
        let translateY = 0;
        let isPanning = false;
        let startX, startY;

        const updateTransform = () => {
            image.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        };

        const resetTransform = () => {
            scale = 1;
            translateX = 0;
            translateY = 0;
            updateTransform();
        };

        zoomInBtn.onclick = () => {
            scale = Math.min(3, scale + 0.2); // Max zoom 3x
            updateTransform();
        };

        zoomOutBtn.onclick = () => {
            scale = Math.max(1, scale - 0.2); // Min zoom 1x
            if (scale === 1) { // Reset position when zoomed all the way out
                translateX = 0;
                translateY = 0;
            }
            updateTransform();
        };

        resetBtn.onclick = resetTransform;

        image.onmousedown = (e) => {
            if (scale <= 1) return;
            e.preventDefault();
            isPanning = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
            image.style.cursor = 'grabbing';
        };

        window.onmousemove = (e) => {
            if (!isPanning) return;
            translateX = e.clientX - startX;
            translateY = e.clientY - startY;
            updateTransform();
        };

        window.onmouseup = () => {
            isPanning = false;
            image.style.cursor = 'grab';
        };
        
        // Also reset on modal close to be safe
        document.getElementById('productModal').addEventListener('hidden.bs.modal', resetTransform, { once: true });
    }

    function setActiveView(view) {
        currentView = view;
        document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`${view}-view`).classList.add('active');
        document.querySelectorAll('.products-grid, .products-list').forEach(el => el.classList.remove('active-view'));
        document.getElementById(`products-${view}`).classList.add('active-view');
        displayProducts(filteredProducts, currentPage, productsPerPage);
    }

    function updateResultsCount(count) {
        document.getElementById('results-count').textContent = count;
    }

    function setupPagination(totalProducts, perPage) {
        const totalPages = Math.ceil(totalProducts / perPage);
        const container = document.querySelector(`#products-${currentView} .pagination`);
        if (!container) return;
        container.innerHTML = '';
        if (totalPages <= 1) return;

        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, currentPage + 2);
        if (currentPage <= 3) endPage = Math.min(5, totalPages);
        if (currentPage > totalPages - 3) startPage = Math.max(1, totalPages - 4);

        const createPageItem = (text, pageNum, isDisabled = false, isActive = false) => {
            const li = document.createElement('li');
            li.className = `page-item ${isDisabled ? 'disabled' : ''} ${isActive ? 'active' : ''}`;
            li.innerHTML = `<a class="page-link" href="#" data-page="${pageNum}">${text}</a>`;
            return li;
        };

        container.appendChild(createPageItem('«', currentPage - 1, currentPage === 1));
        if (startPage > 1) { container.appendChild(createPageItem('1', 1)); container.appendChild(createPageItem('...', 1, true)); }
        for (let i = startPage; i <= endPage; i++) {
            container.appendChild(createPageItem(i, i, false, i === currentPage));
        }
        if (endPage < totalPages) { container.appendChild(createPageItem('...', totalPages, true)); container.appendChild(createPageItem(totalPages, totalPages)); }
        container.appendChild(createPageItem('»', currentPage + 1, currentPage === totalPages));

        container.querySelectorAll('a.page-link').forEach(link => {
            if (link.parentElement.classList.contains('disabled')) return;
            link.addEventListener('click', e => {
                e.preventDefault();
                currentPage = parseInt(e.target.dataset.page);
                displayProducts(filteredProducts, currentPage, perPage);
                const targetSection = document.querySelector('.product-display-section');
                if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    initialize();
});
