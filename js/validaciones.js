            var plantel = new Array()
            plantel[1] = ["Selecciona...","Orizaba","Poza Rica","Tuxpam"]
            plantel[2] = ["Selecciona...","Orizaba Norte 26","Orizaba Oriente 3"]
            plantel[3] = ["Selecciona...","Orizaba","Cosamaloapan","Tierra Blanca", "Martin de la Torre"]
            plantel[4]  = ["Selecciona...","Orizaba Norte 26","Orizaba Oriente 3", "Tuxpan", "Poza Rica Villa de las Flores", "Poza Rica 2 de Enero","Martinez de la Torre", "San Andres Tuxtla", "Tierra Blanca", "Cosamaloapan", "Queretaro"]
            

            plantel[5] = ["Selecciona...","Orizaba Circunvalacion", "Orizaba Oriente 17", "Tuxpam", "Poza Rica", "Martinez de la Torre", "Cosamaloapan", "San Andres Tuxtla", "Tierra Blanca", "Queretaro, Culiacan"]

            var provincias = new Array()
            provincias[4] = new Array()
            provincias[5] = new Array()

            provincias[4][1] = ["Servicios para medicos","Diseño"]
            provincias[4][2] = ["Informatica","Servicios Turisticos","Electricidad","Trabajo Social", "Contabilidad", "Gastronomia", "Desarrollo de Emprendedores"]
            provincias[4][3] = ["Informatica","Servicios Paramedicos","Contabilidad"]
            provincias[4][4] = ["Gastronomia"]
            provincias[4][5] = ["Informatica", "Electricidad", "Desarrollo de Emprendedores"]
            provincias[4][6] = ["Informatica", "Contabilidad", "Desarrollo de Emprendedores"]
            provincias[4][7] = ["Informatica","Servicios Turisticos", "Gastronomia"]
            provincias[4][8] = ["Informatica","Contabilidad"," Desarrollo de Emprendedores"]
            provincias[4][9] = ["Informatica"]
            provincias[4][10] = ["Servicios Turisticos"]

            provincias[5][1] = ["Administracion de Empresas","Arquitectura","Ciencias de la Comunicacion","Contaduria","Derecho", "Diseño y comunicacion visual","Didactica del Ingles","Ing. en Sistemas Computacionales","Ing. Industrial","Pedagogia","Psicologia"]
            provincias[5][2] = ["Administracion de empresas Turisticas", "Comercio Esterior y Aduanas", "Gastronomia"]
            provincias[5][3] = ["Administracion de Empreas", "Ciencias de la comunicacion", "Comercio Exterior y Aduanas", "Contaduria", "Derecho", "Pedagogia"]
            provincias[5][4] = ["Administracion de Empresas","Admon. de Empresas Turisticas", "Arquitectura", "Ciencias de la comunicacion", "Comercio Exterior y Aduanas", "Contaduria", "Derecho", "Gastronomia", "Ing. Industrial", "Mercadotecnia", "Pedagogia"]
            provincias[5][5] = ["Administracion de Empresas","Ciencias de la comunicacion", "Contaduria", "Derecho", "Pedagogia"]
            provincias[5][6] = ["Administracion de Empresas", "Contaduria", "Derecho", "Pedagogia"]
            provincias[5][7] = ["Administracion de Empresas", "Admon. de Empresas Turisticas","Arquitectura", "Ciencias de la Comunicacion", "Contaduria", "Derecho", "Diseño y Comunicacion visual"," Didactica del Ingles", "Pedagogia", "Psicologia"]
            provincias[5][8] = ["Administracion de Empresas", "Contaduria", "Derecho", "Pedagogia"]
            provincias[5][9] = ["Administracion de Empresas", "Admon. de Empreasas Turisticas", "Informatica", "Contaduria", "Ing. Industrial", "Pedagogia"]
            provincias[5][10] = ["Administracion de Empresas"," Admon. de Empresas Turisticas", "Arquitectura", "Cienciasde la comunicacion", "Derecho", "Diseño y Comunicacion Visual", "Gastronomia", "Ing. en Sistemas Computacionales", "Ing. Industrial"]




            function ponPaises(formu)
            { var elConti = formu.conti.selectedIndex
              formu.plantel.length = plantel[elConti].length
              for (i=0; i<formu.pais.length; i++)
              { formu.pais.options[i].text = plantel[elConti][i]
              }
            }
            function ponProvincias(formu)
            { var elConti = formu.conti.selectedIndex
              var elPais = formu.pais.selectedIndex
              formu.provincia.length = provincias[elConti][elPais].length
              for (i=0; i<formu.provincia.length; i++)
              { formu.provincia.options[i].text = provincias[elConti][elPais][i]
              }
            }
