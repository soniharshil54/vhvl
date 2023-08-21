const products = [
    {
        categoryName: 'COMMITTED TO DIABETIC CARE',
        products: [
            {
                name: 'Y-GLIPT M',
                content:'Teneligliptin 20mg, Metformin Hcl. 500mg Tablets',
            },
            {
                name: 'Y-GLIM M1',
                content:'Glimepiride 1mg + Metformin Hydrochloride (SR) 500mg Tablets',
            },
            {
                name: 'Y-GLIM M2',
                content:'Glimepiride 2mg + Metformin Hydrochloride (SR) 500mg Tablets',
            },
            {
                name: 'VILDABETIC 50',
                content:'Vildagliptin 50mg Tablets',
            },
            {
                name: 'VILDABETIC M',
                content:'Vildagliptin 50mg, Metformin 500mg Tablets',
            },
            {
                name: 'VILDABETIC M FORTE',
                content:'Vildagliptin 50mg, Metformin 1000mg',
            },
            {
                name: 'DAPABETIC 10',
                content:'Dapagliflozin 10mg Tablets',
            },
            {
                name: 'DAPABETIC M',
                content:'Dapagliflozin 10mg, Metformin 500mg Tablets',
            },
            {
                name: 'VOGLIBETIC 0.3',
                content:'Voglibose 0.3mg Tablets',
            },
            {
                name: 'LINAPRAN-M',
                content:'Linagliptin 2.5mg, Metformin 500mg Tablets',
            },
            {
                name: 'LINAPRAN-5',
                content:'Linagliptin 5mg Tablets',
            },
            {
                name: 'METABETIC-500 SR',
                content:'Metformin 500mg (SR) Tablets',
            },
            {
                name: 'GLICLABETIC-M80',
                content:'Gliclazide 80mg, Metformin 500mg Tablets',
            }
        ],
    },
    {
        categoryName: 'COMMITTED TO HYPERTENSION',
        products: [
            {
                name: 'Telmysar-H40',
                content:'Telmisartan 40mg, Hydrochlorothiazide 12.5mg Tablet',
            },
            {
                name: 'Telmysar-40',
                content:'Telmisartan 40mg Tablet',
            },
            
            {
                name: 'METAPRAN XL25/50',
                content:'Metoprolol Succinate XI 25/50mg Tablets',
            },
            {
                name: 'Cilnidepin 10',
                content:'Cilnidipine 10mg Tablets',
            },
        ],
    },
    {
        categoryName: 'FOR HEART CARE',
        products: [
            {
                name: 'Ticapran-90',
                content:'Ticagrelor 90mg Tablet',
            },
            {
                name: 'Valpran SB-50',
                content:'Sacubitril 24 mg, Valsartan 26 mg Tablets',
            }
        ],
    },
    {
        categoryName: 'OUR STATINS',
        products: [
            {
                name: 'ROSUSTOL-10/20',
                content:'Rosuvastatin 10/20mg Tab',
            },
            {
                name: 'ATOSTOL-10/20/40',
                content:'Atorvastatin 10/20/40mg Tab',
            },
            {
                name: 'ROSUSTOL-ASP',
                content:'Rosuvastatin 10mg, Aspirin 75mg Tab',
            },
            {
                name: 'ATOSTOL-ASP',
                content:'Atorvastatin 10mg, Aspirin 75mg Tab',
            },
            {
                name: 'ROSUSTOL-ASP GOLD 10/20',
                content: 'Rosuvastatin 10/20mg, Clopidogrel 75mg, Aspirin 75mg Tab',
            },
            {
                name: 'ATOSTOL-ASP GOLD 10/20',
                content: 'Atorvastatin 10/20mg, Clopidogrel 75mg, Aspirin 75mg Tab',
            }
        ],
    },
    {
        categoryName: 'OUR PPI',
        products: [
            {
                name: 'YRAB-20',
                content:'Rabeprazole Sodium 20mg Tab',
            },
            {
                name: 'YRAB-D',
                content:'Rabeprazole Sodium 20mg (Entric Coated Pellets), Domperidone 30mg Tab (Sustain Release Pellets) Capsule',
            }
        ],
    },
    {
        categoryName: 'FOR ALLERGY',
        products: [
            {
                name: 'Monteran-L',
                content:'Levocetirizine Hcl 5mg, Montelukast 10mg Tablets',
            }
        ],
    },
    {
        categoryName: 'COMMITTED TO BPH',
        products: [
            {
                name: 'TAMLO PLUS',
                content:'Tamsulosin Hcl 0.4mg, Dutasteride 0.5mg Tablets',
            }
        ],
    },
    {
        categoryName: 'ANTI FUNGAL',
        products: [
            {
                name: 'ITZY 200',
                content:'Itraconazole 200mg Capsule',
            },
        ],
    },
    {
        categoryName: 'MULTIVITAMIN',
        products: [
            {
                name: 'YCOB-D3',
                content: 'Mecobalamine 1500 mcg, Alphalipoic Acid 100mg,  Vitamin D3 1000 IU, Pyridoxine Hydrochloride 3mg, Folic Acid 1.5mg Tablet'
            },
        ],
    },
    {
        categoryName: 'FOR ARTHERITIS',
        products: [
            {
                name: 'Glucokep Advance',
                content: 'Glucosamine, Collagen peptide, Chondroitin, Rosehip Ginger, Boswellia Serrata, Curcumma longa, Hyaluronic acid, Vitamin  D 3, Vitamin B12, Zinc, Copper Tablets'
            }
        ],
    },
    {
        categoryName: 'VITAMIN B12 DEFICIENCY',
        products: [
            {
                name: 'Neurokep-12 2ml inj',
                content: 'Methylcobalamin 1000mcg, Niacinamide 10mg, Pyridoxine Hcl 100mg'
            }
        ],
    },
    {
        categoryName: 'STEROIDS',
        products: [
            {
                name: 'Galacort 6',
                content: 'Deflazacort 6mg Tablets'
            }
        ],
    },
    {
        categoryName: 'FOR EPILEPSY',
        products: [
            {
                name: 'TAMLEV-500',
                content: 'Levetiracetam 500mg Tablet'
            }
        ],
    },
    {
        categoryName: 'VITAMIN D3 DEFICIENCY',
        products: [
            {
                name: 'GALA-D3 60K',
                content: 'Cholecalciferol softgel capsules 60000 I.U.'
            },
        ],
    }
];
