var plans = [
    {
        plan: '2030 Transit Corridor System Plan',
        website:
            'https://charlottenc.gov/cats/transit-planning/Pages/2030-plan.aspx',
        strategies: ['c', 'g']
    },
    {
        plan: 'American Leadership Forum-Charlotte Fellows Program',
        website: 'https://alfcharlotteregion.org/program/senior-fellows-program/',
        strategies: ['u']
    },
    {
        plan: 'Arts and Science Council',
        website:
            'https://artsandscience.org/',
        strategies: ['c', 'd', 'm', 'n']
    },
    {
        plan: 'Blue Line Extension/University City Area Plan',
        website:
            'http://charmeck.org/city/charlotte/planning/areaplanning/transitstationareaplans/northeastcorridor/Pages/home.aspx',
        strategies: ['c']
    },
    {
        plan: 'C.W. Williams Community Health Center Health Education Programs',
        website: 'http://www.cwwilliams.org/v5/programs.php',
        strategies: ['f']
    },
    {
        plan: 'CATS Art-in-Transit Program',
        website:
            'https://charlottenc.gov/cats/transit-planning/art-in-transit/Pages/default.aspx',
        strategies: ['c', 'd']
    },
    {
        plan: 'CATS Clean the Air Campaign',
        website:
            'https://charlottenc.gov/cats/about/programs/Pages/default.aspx',
        strategies: ['q', 'r', 't']
    },
    {
        plan: 'CATS Seniors in Motion',
        website:
            'https://charlottenc.gov/cats/about/programs/Pages/default.aspx',
        strategies: ['a', 'i', 'j', 'n', 'p']
    },
    {
        plan: 'CATS Service Route Map',
        website:
            'https://charlottenc.gov/cats/bus/riding-cats/Pages/default.aspx',
        strategies: ['g']
    },
    {
        plan: 'CATS Wheels for Learning',
        website:
            'https://charlottenc.gov/cats/about/programs/Pages/default.aspx',
        strategies: ['b', 'j', 'n', 'u']
    },
    {
        plan: 'CLT Joules Business Development Program',
        website: 'http://cltjoules.com/',
        strategies: ['e', 'f', 'h', 'n', 'o']
    },
    {
        plan: 'CMS Community Partnerships and Family Engagement Programs',
        website:
            'http://www.cms.k12.nc.us/cmsdepartments/cpfe/Pages/default.aspx',
        strategies: ['l']
    },
    {
        plan: 'CMS Facilities ',
        website:
            'http://www.cms.k12.nc.us/cmsdepartments/construction/facilityplanning/Pages/default.aspx',
        strategies: ['m']
    },
    {
        plan: 'CONNECT Our Future - Action Plan for Food Systems Improvement',
        website:
            'http://www.carolinafarmstewards.org/connect-our-future-food-systems-project/',
        strategies: ['p']
    },
    {
        plan:
            'CONNECT Our Future - Catawba Region Comprehensive Economic Development Strategy',
        website:
            'http://connectourfuture.org/wp-content/uploads/2013/01/CatawbaRegionalCEDS2012.pdf',
        strategies: ['e', 'f']
    },
    {
        plan: 'CONNECT Our Future - Climate Change Planning Assessment',
        website:
            'http://connectourfuture.org/wp-content/uploads/2013/05/CONNECT-Our-Future-Climate-Change-Planning-Assessment.pdf',
        strategies: ['s', 't']
    },
    {
        plan:
            'CONNECT Our Future - Diesel/Black Carbon Technical Assessment and Feasibility Study',
        website:
            'http://connectourfuture.org/wp-content/uploads/2013/05/Diesel-Black-Carbon-Tech-Assessment-and-Feasibility-Study_7-11-2014.pdf',
        strategies: ['s', 't']
    },
    {
        plan: 'CONNECT Our Future - Food Systems Assessment',
        website:
            'http://asapconnections.org/downloads/connect-future-food-systems-assessment-report.pdf',
        strategies: ['p']
    },
    {
        plan:
            'CONNECT Our Future - Prosperity for Greater Charlotte: Comprehensive Economic Development Strategy NC',
        website:
            'http://connectourfuture.org/comprehensive-economic-development-strategy-ceds-north-carolina/',
        strategies: ['f']
    },
    {
        plan:
            'CONNECT Our Future - Prosperity for Greater Charlotte: Jobs, Workforce, and Education Alignment Strategy',
        website:
            'http://www.centralinaedc.org/documents/WorkforceEducationAlignmentReport12-6.pdf',
        strategies: ['d', 'e', 'f', 'h', 'n', 'o']
    },
    {
        plan: 'CONNECT Our Future - Public Sites Renewable Energy Blue Print',
        website:
            'http://connectourfuture.org/wp-content/uploads/2013/01/Local-Governments-and-Public-Blue-Print.pdf',
        strategies: ['f', 's', 't']
    },
    {
        plan: 'CONNECT Our Future - Reality Check Final Report (ULI)',
        website:
            'http://connectourfuture.org/wp-content/uploads/2013/01/2013-RC2050-report_draft.pdf',
        strategies: ['f', 'h', 'i', 's', 't']
    },
    {
        plan: 'CONNECT Our Future - Regional Housing Needs Assessment',
        website:
            'http://connectourfuture.org/wp-content/uploads/2013/01/CONNECT-Vol-I-FNL.pdf',
        strategies: ['k']
    },
    {
        plan: 'CONNECT Our Future - Smart Growth and Economic Success (EPA)',
        website: 'http://www.epa.gov/dced/pdf/economic_success.pdf',
        strategies: ['g', 'h', 'i', 'q', 'r', 's']
    },
    {
        plan: 'CPCC Quality Enhancement Plan',
        website: 'http://www.cpcc.edu/accreditation/quality-enhancement-plan',
        strategies: ['c', 'e', 'f', 'h', 'j', 'o', 'u']
    },
    {
        plan: 'CPCC Strategic Plan ',
        website: 'http://www.cpcc.edu/administration/strategic-plan',
        strategies: ['n', 'o']
    },
    {
        plan: 'CRTPO Long Range Transportation Plan',
        website: 'http://www.crtpo.org/2035-long-range-transportation-plan',
        strategies: ['a', 'i', 'r', 's']
    },
    {
        plan: "CRVA Charlotte's Got a Lot Transportation Information",
        website: 'http://www.charlottesgotalot.com/',
        strategies: ['c', 'r', 's', 't']
    },
    {
        plan: 'Center City 2020 Vision Plan',
        website:
            'http://www.charlottecentercity.org/center-city-initiatives-2/plans/2020-vision-plan/',
        strategies: ['e']
    },
    {
        plan: 'Central Piedmont Community College Small Business Center',
        website: 'http://www.cpcc.edu/sbc',
        strategies: ['e', 'f', 'h', 'n', 'o']
    },
    {
        plan: 'Central Piedmont Community College Strategic Plan',
        website:
            'http://www.cpcc.edu/learning/goals-and-initiatives/strategic-plans-and-objectives',
        strategies: ['e', 'f', 'h', 'n']
    },
    {
        plan: 'Centralina Council of Governments Core Values',
        website:
            'http://www.centralinawdb.com/ccogworking/wp-content/uploads/2012/01/Connecting-Vision-to-Plan.pdf',
        strategies: ['b', 'c', 'd', 'j']
    },
    {
        plan: 'Charlotte - Hands-On Charlotte Volunteer Training Programs',
        website: 'http://www.handsoncharlotte.org/',
        strategies: ['j', 'l', 'n', 'u']
    },
    {
        plan: 'Charlotte Apartment Façade Grant Program',
        website:
            'http://charmeck.org/city/charlotte/nbs/ed/financialprograms/pages/apartmentfacadegrantprogram.aspx',
        strategies: ['g', 'k']
    },
    {
        plan: 'Charlotte Applied Innovation Corridor ',
        website:
            'http://charmeck.org/city/charlotte/charlottefuture/CIP/Documents/Applied%20Innovation%20Corridor%20ULI%20Report.pdf',
        strategies: ['c']
    },
    {
        plan: 'Charlotte Area Plans',
        website:
            'http://charmeck.org/city/charlotte/planning/areaplanning/plans/Pages/Home.aspx',
        strategies: ['a', 'i', 'k', 'r']
    },
    {
        plan: 'Charlotte Bicycle Plan ',
        website:
            'http://charmeck.org/city/charlotte/Transportation/PedBike/Pages/Bicycle%20Home.aspx',
        strategies: ['i', 'p']
    },
    {
        plan: 'Charlotte Business Corridor Grant Program',
        website:
            'http://charmeck.org/city/charlotte/nbs/ed/financialprograms/documents/business%20security%20grant%20program.pdf',
        strategies: ['g']
    },
    {
        plan: 'Charlotte Business Investment Program',
        website:
            'http://charmeck.org/city/charlotte/nbs/ed/financialprograms/documents/business%20investment%20program_2011.pdf',
        strategies: ['c', 'e', 'f', 'g', 'h']
    },
    {
        plan: 'Charlotte Centers, Corridors, and Wedges Growth Framework',
        website:
            'http://ww.charmeck.org/Planning/Land%20Use%20Planning/CentersCorridorsWedges/CentersCorridorsWedges(Adopted).pdf',
        strategies: ['g', 's']
    },
    {
        plan: 'Charlotte Chamber of Commerce 2014 Program of Work',
        website:
            'http://charlottechamber.com/about-the-chamber/program-of-work/',
        strategies: ['e', 'g', 'h', 'k', 'n', 'o']
    },
    {
        plan: 'Charlotte Chamber of Commerce International Initiatives',
        website:
            'http://charlottechamber.com/clientuploads/Economic_pdfs/Intl_Review2013.pdf',
        strategies: ['f']
    },
    {
        plan: 'Charlotte City Council Focus Area Plans',
        website:
            'http://charmeck.org/city/charlotte/focusareas/pages/home.aspx',
        strategies: ['e', 'g', 'k']
    },
    {
        plan: 'Charlotte Clean Streets Program',
        website:
            'http://charmeck.org/city/charlotte/nbs/kcb/Pages/AdoptaCityStreetProgram.aspx',
        strategies: ['a', 'p', 'u']
    },
    {
        plan:
            'Charlotte Commercial Building Energy Efficiency Retrofit Program ',
        website:
            'http://charmeck.org/city/charlotte/econrecovery/pages/commercialbuildingenergyefficiencyretrofitprogram.aspx',
        strategies: ['s']
    },
    {
        plan: 'Charlotte Community Investment Plan',
        website:
            'http://charmeck.org/city/charlotte/charlottefuture/Pages/default.aspx',
        strategies: ['i', 'r', 's']
    },
    {
        plan: 'Charlotte Comprehensive Neighborhood Improvement Program',
        website:
            'http://charmeck.org/city/charlotte/charlottefuture/CIP/CNIP/Pages/default.aspx',
        strategies: ['i']
    },
    {
        plan: 'Charlotte Crime Stoppers Program',
        website:
            'http://charmeck.org/city/charlotte/CMPD/safety/CrimeStoppers/Pages/default.aspx',
        strategies: ['a', 'j', 'l']
    },
    {
        plan:
            'Charlotte Engineering and Property Management Development Services',
        website: 'http://charmeck.org/city/charlotte/epm/Pages/default.aspx',
        strategies: ['e', 'g', 'k']
    },
    {
        plan: 'Charlotte General Development Policies',
        website:
            'http://charmeck.org/city/charlotte/planning/areaplanning/plans/gdp/pages/home.aspx',
        strategies: ['a', 'c', 'i', 'k', 'q', 'r', 's', 't']
    },
    {
        plan: 'Charlotte Housing Trust Fund',
        website:
            'http://charmeck.org/city/charlotte/nbs/housing/pages/housingtrustfund.aspx',
        strategies: ['k']
    },
    {
        plan: 'Charlotte Neighborhood Energy Challenge',
        website:
            'http://charmeck.org/city/charlotte/econrecovery/Pages/NeighborhoodEnergyChallenge.aspx',
        strategies: ['h', 'k', 'p', 'q', 't']
    },
    {
        plan: 'Charlotte Neighborhood Matching Grants',
        website:
            'http://charmeck.org/city/charlotte/nbs/communityengagement/nmg/Pages/aboutNMG.aspx',
        strategies: ['j', 'k', 'l']
    },
    {
        plan: 'Charlotte Neighborhood Watch Program',
        website:
            'http://charmeck.org/city/charlotte/cmpd/safety/neighborhoodwatch/Pages/default.aspx',
        strategies: ['a', 'j', 'u']
    },
    {
        plan: 'Charlotte Pedestrian Safety Action Plan',
        website:
            'http://charmeck.org/city/charlotte/transportation/traffic/documents/pedestrian%20safety%20action%20plan.pdf',
        strategies: ['a', 'i', 'p', 'r']
    },
    {
        plan: 'Charlotte Security Grants',
        website:
            'http://charmeck.org/city/charlotte/nbs/ed/financialprograms/Documents/Apartment%20Security%20Grant%20Program.pdf',
        strategies: ['a']
    },
    {
        plan: 'Charlotte Stormwater Pilot: Best Management Practices Program',
        website:
            'http://charmeck.org/stormwater/StormWaterAgencies/Pages/PilotBMPProgram(City).aspx',
        strategies: ['q', 's', 't']
    },
    {
        plan: 'Charlotte Stormwater Regulations and Ordinances',
        website:
            'http://charmeck.org/stormwater/regulations/Pages/default.aspx',
        strategies: ['q', 's', 't']
    },
    {
        plan: 'Charlotte Strategic Plan Overview ',
        website:
            'http://charmeck.org/city/charlotte/CityCouncil/AboutUs/Pages/Strategic%20Overview.aspx',
        strategies: ['a', 'g', 'i', 'n', 'o', 'r', 's']
    },
    {
        plan: 'Charlotte Transportation Action Plan',
        website:
            'http://charmeck.org/city/charlotte/transportation/plansprojects/pages/transportation%20action%20plan.aspx',
        strategies: ['a', 'i', 'p']
    },
    {
        plan: 'Charlotte Tree Ordinance and Guidelines',
        website:
            'http://charmeck.org/city/charlotte/charlottetrees/Pages/LandDevelopment.aspx',
        strategies: ['q', 's']
    },
    {
        plan: 'Charlotte University City-Blue Line Extension Plan',
        website:
            'http://ww.charmeck.org/Planning/Land%20Use%20Planning/UnivCity/UCAP%20Existing%20Conditions%20Report.pdf',
        strategies: ['c', 'i']
    },
    {
        plan: 'Charlotte Urban Street Design Guidelines',
        website:
            'http://charmeck.org/city/charlotte/transportation/plansprojects/pages/urban%20street%20design%20guidelines.aspx',
        strategies: ['d', 'i', 's']
    },
    {
        plan: 'Charlotte Voluntary Mixed Income Housing Development Program ',
        website:
            'https://www.google.com/#q=Charlotte+Voluntary+Mixed+Income+Housing+Development+Program+',
        strategies: ['k']
    },
    {
        plan: 'Charlotte Water Smart Program',
        website:
            'http://charmeck.org/city/charlotte/Utilities/WaterSmart/Pages/home.aspx',
        strategies: ['q', 't']
    },
    {
        plan: 'Charlotte Zoning Ordinance ',
        website:
            'http://charmeck.org/city/charlotte/planning/rezoning/pages/zoningordinance.aspx',
        strategies: ['g', 'k', 's']
    },
    {
        plan: 'Charlotte-Mecklenburg 2015 Plan ',
        website:
            'http://charmeck.org/city/charlotte/planning/areaplanning/plans/2015plan/pages/2015%20plan%20goals.aspx',
        strategies: ['k']
    },
    {
        plan: 'Charlotte-Mecklenburg Business Investment Program',
        website:
            'http://charmeck.org/city/charlotte/nbs/ed/financialprograms/documents/business%20investment%20program_2011.pdf',
        strategies: ['e', 'f', 'h', 'n', 'o']
    },
    {
        plan: 'Charlotte-Mecklenburg Continuum of Care Program',
        website:
            'http://charmeck.org/mecklenburg/county/CommunitySupportServices/HomelessServices/Pages/CharlotteMecklenburgContinuumofCare.aspx',
        strategies: ['j', 'l', 'p']
    },
    {
        plan: 'Charlotte-Mecklenburg General Development Policies ',
        website:
            'http://charmeck.org/city/charlotte/planning/areaplanning/plans/gdp/pages/home.aspx',
        strategies: ['g', 'i', 'k', 'q', 'r', 's', 't']
    },
    {
        plan: 'Charlotte-Mecklenburg Historic Landmarks Commission ',
        website: 'http://www.cmhpf.org/',
        strategies: ['b', 'c', 'd', 'j', 'n']
    },
    {
        plan:
            'Charlotte-Mecklenburg Library Carolina Room Historic Information',
        website:
            'https://www.google.com/#q=Charlotte-Mecklenburg+Library+Carolina+Room+Historic+Information',
        strategies: ['b', 'c', 'd', 'j', 'm']
    },
    {
        plan: 'Charlotte-Mecklenburg Library Computer Access in Neighborhoods',
        website: 'http://www.cmlibrary.org/Services/can.asp',
        strategies: ['l', 'n']
    },
    {
        plan: 'Charlotte-Mecklenburg Library Conexienes que Cuentan',
        website: 'http://www.cmlibrary.org/services/services-outreach.asp',
        strategies: ['l', 'n']
    },
    {
        plan: 'Charlotte-Mecklenburg Library Get Set 4 K',
        website:
            'https://www.google.com/#q=Charlotte-Mecklenburg+Library+Get+Set+4+K',
        strategies: ['h', 'j', 'n', 'u']
    },
    {
        plan: 'Charlotte-Mecklenburg Library Internet Services',
        website: 'http://www.cmlibrary.org/about_us/policiesInternet.asp',
        strategies: ['h']
    },
    {
        plan: 'Charlotte-Mecklenburg Library Job Help Center',
        website: 'http://www.cmlibrary.org/jobs/mainjhc.asp',
        strategies: ['e', 'j', 'l', 'o', 'u']
    },
    {
        plan:
            'Charlotte-Mecklenburg Library Senior and Hispanic Outreach Services',
        website: 'http://www.cmlibrary.org/services/services-outreach.asp',
        strategies: ['h', 'j', 'n', 'u']
    },
    {
        plan: 'Charlotte-Mecklenburg Library Strategic Plan 2014-2017',
        website: 'http://cmlibrary.org/about_us/info.asp?id=51',
        strategies: ['f']
    },
    {
        plan: 'Charlotte-Mecklenburg Neighborhood Organization List',
        website:
            'http://charmeck.org/city/charlotte/planning/areaplanning/neighborhoodorganizationallist/Pages/home.aspx',
        strategies: ['h', 'u']
    },
    {
        plan: 'Charlotte-Mecklenburg Neighborhood Watch',
        website:
            'http://charmeck.org/city/charlotte/cmpd/safety/neighborhoodwatch/Pages/default.aspx',
        strategies: ['u']
    },
    {
        plan:
            'Charlotte-Mecklenburg Planning - Historic District Policy & Design Guidelines',
        website:
            'http://charmeck.org/city/charlotte/planning/historicdistricts/pages/home.aspx',
        strategies: ['b', 'c', 'd', 'g']
    },
    {
        plan: 'Charlotte-Mecklenburg Read To Me Charlotte',
        website: 'http://www.cmlibrary.org/kids/readToMeCharlotte.asp',
        strategies: ['j', 'n', 'u']
    },
    {
        plan: 'Charlotte-Mecklenburg Ride Along Program',
        website:
            'http://charmeck.org/city/charlotte/CMPD/safety/RideAlong/Pages/default.aspx',
        strategies: ['h', 'i', 'j', 'l', 'q', 't']
    },
    {
        plan: 'Charlotte-Mecklenburg Schools Strategic Plan 2018',
        website:
            'http://www.cms.k12.nc.us/mediaroom/strategicplan2018/Pages/StrategicPlan2018.aspx',
        strategies: ['f', 'n']
    },
    {
        plan: 'Charlotte-Mecklenburg Schools Student Assignment Boundary Maps',
        website:
            'http://www.cms.k12.nc.us/cmsdepartments/StudentPlacement/Pages/BoundaryMaps.aspx',
        strategies: ['a']
    },
    {
        plan:
            'Charlotte-Mecklenburg Ten-Year Plan to End and Prevent Homelessness',
        website:
            'http://charmeck.org/city/charlotte/nbs/housing/housingcoalition/Documents/10YearPlantoEndandPreventHomelessness.pdf',
        strategies: ['k']
    },
    {
        plan: 'Charlotte-Mecklenburg Utilities Department Strategic Plan ',
        website:
            'http://charmeck.org/city/charlotte/utilities/publicationsandeducation/documents/strategic_operating_plan_fy2014_2015.pdf',
        strategies: ['s', 't']
    },
    {
        plan:
            'Charlotte-Mecklenburg Utility Department Industrial Pretreatment Policy ',
        website:
            'http://charmeck.org/city/charlotte/utilities/customerservice/pages/industrialpretreatment.aspx',
        strategies: ['q']
    },
    {
        plan: 'Charlotte-Mecklenburg Youth Business Connector',
        website: 'http://youthbusinessconnector.com/',
        strategies: ['e', 'f', 'h', 'n', 'o']
    },
    {
        plan: 'Charlotte: Trees Charlotte Fund',
        website:
            'http://charmeck.org/city/charlotte/charlottetrees/Pages/default.aspx',
        strategies: ['q', 'r', 't']
    },
    {
        plan: 'Code for America - Charlotte Programs ',
        website: 'http://www.codeforamerica.org/governments/charlotte/',
        strategies: ['u']
    },
    {
        plan: 'Community Building Initiative Leadership Programs ',
        website: 'http://cbicharlotte.org/',
        strategies: ['u']
    },
    {
        plan: 'Community Pulse',
        website:
            'http://charmeck.org/mecklenburg/county/CountyManagersOffice/OMB/Documents/FY16%20Budget%20Retreat/Community%20Pulse_OnlineVersion.pdf',
        strategies: [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's',
            't'
        ]
    },
    {
        plan:
            'Coordinated Human Services Transportation Plan For Charlotte-Mecklenburg',
        website:
            'http://charmeck.org/city/charlotte/cats/bus/ridingcats/documents/coordinated%20hs%20transportation%20plan%20rev%201.pdf',
        strategies: ['i']
    },
    {
        plan:
            "Council for Children's Rights, The State of Mecklenburg's Children, 2012",
        website:
            'http://cfcrights.org/old/lkc/research-and-evaluation/research-documents/research/',
        strategies: ['l']
    },
    {
        plan: 'Crisis Assistance Ministry Partner Agreements',
        website:
            'http://www.crisisassistance.org/about-crisis-assistance-ministry/about-us/',
        strategies: ['l']
    },
    {
        plan: 'Crisis Assistance Ministry Programs ',
        website:
            'http://www.crisisassistance.org/crisis-assistance-ministry-is-mission-driven/about-us/',
        strategies: ['l']
    },
    {
        plan: 'Davidson - Civics 101',
        website: 'http://www.ci.davidson.nc.us/?nid=235',
        strategies: ['j', 'u']
    },
    {
        plan: 'Davidson - Read Davidson',
        website: 'http://nc-davidson2.civicplus.com/index.aspx?nid=459',
        strategies: ['j', 'l', 'n', 'u']
    },
    {
        plan: 'Davidson Bicycle Transportation Plan',
        website: 'http://www.ci.davidson.nc.us/DocumentCenter/Home/View/864',
        strategies: ['i', 'q', 'r']
    },
    {
        plan: 'Davidson Circulation Plan',
        website: 'http://www.ci.davidson.nc.us/DocumentCenter/Home/View/563',
        strategies: ['i']
    },
    {
        plan: 'Davidson Comprehensive Plan',
        website: 'http://www.ci.davidson.nc.us/DocumentCenter/Home/View/1471',
        strategies: [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's'
        ]
    },
    {
        plan: 'Davidson MI-Connection ',
        website: 'http://www.ci.davidson.nc.us/index.aspx?NID=124',
        strategies: ['h']
    },
    {
        plan: 'Davidson Mission Statement',
        website: 'http://www.ci.davidson.nc.us/index.aspx?nid=472',
        strategies: ['a', 'd', 'e', 'j', 'n', 'q', 'r', 't']
    },
    {
        plan: 'Davidson Open Space Plan',
        website: 'http://www.ci.davidson.nc.us/index.aspx?NID=576',
        strategies: ['p', 'q', 'r', 's', 't']
    },
    {
        plan: 'Davidson Parks and Recreation Master Plan',
        website: 'http://www.ci.davidson.nc.us/CivicAlerts.aspx?AID=673',
        strategies: ['m', 'p', 'q', 'r']
    },
    {
        plan: 'Davidson Plan for Public Art',
        website:
            'http://charmeck.org/city/charlotte/charlottetrees/Pages/LandDevelopment.aspx',
        strategies: ['b', 'c', 'd']
    },
    {
        plan: 'Davidson Transit Station Small Area Plan',
        website: 'http://www.ci.davidson.nc.us/DocumentCenter/Home/View/1007',
        strategies: ['i', 'r']
    },
    {
        plan: 'Davidson Walks and Rolls Active Transportation Master Plan',
        website: 'http://www.ci.davidson.nc.us/index.aspx?NID=774',
        strategies: ['a', 'i']
    },
    {
        plan: 'Duke Energy Efficiency Programs',
        website:
            'http://www.duke-energy.com/north-carolina-large-business/energy-efficiency/nclb-energy-efficiency-programs.asp',
        strategies: ['h']
    },
    {
        plan: 'E2D',
        website: 'http://www.e-2-d.org/about/',
        strategies: ['h']
    },
    {
        plan: 'E4 Carolinas Programs',
        website: 'http://e4carolinas.org/e4-emerging-leaders/',
        strategies: ['h']
    },
    {
        plan: 'Flood Risk Assessment and Risk Reduction Plan',
        website:
            'ftp://ftp1.co.mecklenburg.nc.us/luesa/stormwater/Storage%26Exchange/Flood%20RARR%20Plan/Flood_RARR_Plan-Final.pdf',
        strategies: ['s']
    },
    {
        plan: 'For Charlotte - Fostering Unity Program',
        website: 'http://www.forcharlotte.org/',
        strategies: ['c', 'j', 'n', 'u']
    },
    {
        plan: 'Four Town Economic Development Alliance Grant',
        website:
            'http://www.matthewsnc.gov/AboutMatthews/News/tabid/126/articleType/ArticleView/articleId/5533/Economic-Development-Grant-Will-Aid-Four-Towns.aspx',
        strategies: ['e', 'f', 'h', 'n', 'o']
    },
    {
        plan: 'GenerationNation - Charlotte Learning Center ',
        website: 'http://www.generationnation.org/',
        strategies: ['u']
    },
    {
        plan: 'Hands On Charlotte Volunteer Training Programs',
        website: 'http://www.handsoncharlotte.org/',
        strategies: ['u']
    },
    {
        plan: 'HeartBright Foundation Health Initiatives ',
        website: 'https://www.heartbright.org/press_details2.cfm?PressID=36',
        strategies: ['f']
    },
    {
        plan: 'High Growth Entreprenurship Strategy',
        website:
            'http://charmeck.org/city/charlotte/citymanager/CommunicationstoCouncil/Memo%20attachments/High%20growth%20entrepreneurship%20strategy.pdf',
        strategies: ['c', 'e', 'f', 'h', 'o']
    },
    {
        plan: 'Huntersville - Safety Town',
        website:
            'http://www.huntersville.org/Departments/Police/CommunityPrograms/SafetyTown.aspx',
        strategies: ['a']
    },
    {
        plan: 'Huntersville 101',
        website: 'http://www.huntersville.org/Residents/Huntersville101.aspx',
        strategies: ['c', 'u']
    },
    {
        plan: 'Huntersville 2030 Community plan',
        website:
            'http://www.huntersville.org/Departments/Planning/PlansStudies/Huntersville2030CommunityPlan.aspx',
        strategies: [
            'a',
            'b',
            'c',
            'd',
            'g',
            'i',
            'j',
            'k',
            'm',
            'n',
            'o',
            'r',
            's'
        ]
    },
    {
        plan: 'Huntersville Citizens Police Academy',
        website:
            'http://www.huntersville.org/Departments/Police/CommunityPrograms/CitizensPoliceAcademy.aspx',
        strategies: ['a']
    },
    {
        plan: 'Huntersville Downtown Master Plan',
        website:
            'http://www.huntersville.org/Departments/Planning/PlansStudies/tabid/158/PlanType/View/typeID/126/Default.aspx',
        strategies: ['f', 'i', 'p']
    },
    {
        plan: 'Huntersville Downtown Transportation System Plan',
        website:
            'http://www.huntersville.org/Departments/Planning/PlansStudies/DowntownHuntersvilleTransportationSystemPlan.aspx',
        strategies: ['g', 'i']
    },
    {
        plan: 'Huntersville Growers Market',
        website:
            'http://www.huntersville.org/Departments/ParksRecreation/GrowersMarket.aspx',
        strategies: ['p', 'q']
    },
    {
        plan: 'Huntersville National Night Out',
        website:
            'http://www.huntersville.org/Departments/Police/CommunityPrograms/NationalNightOut.aspx',
        strategies: ['a', 'u']
    },
    {
        plan: 'Huntersville Parks and Recreation Master Plan',
        website:
            'http://www.huntersville.org/Portals/0/Parks%20and%20Rec/(Final)%20Master%20Plan%20Document%20Approved-1%20Nov%207%202011%20(2).pdf',
        strategies: ['m', 'p', 'q', 'r', 't']
    },
    {
        plan: 'Huntersville Rape Agrression Defense',
        website:
            'http://www.huntersville.org/Departments/Police/CommunityPrograms/RADRapeAggressionDefense.aspx',
        strategies: ['a']
    },
    {
        plan: 'Huntersville Strategic Economic Development Plan',
        website:
            'http://www.huntersville.org/Departments/Planning/PlansStudies/StrategicEconomicDevelopmentPlan%28SEDP%29.aspx',
        strategies: ['e']
    },
    {
        plan: 'Junior Achievement Carolinas Programs ',
        website: 'http://www.jacarolinas.org/programs/ja-job-shadow/',
        strategies: ['u']
    },
    {
        plan: 'Lake Norman Economic Development Corporation Investment Studies',
        website:
            'http://www.lakenormanregion.com/partners/investmentstudies/tabid/848/default.aspx',
        strategies: ['e', 'h']
    },
    {
        plan:
            'Latin American Chamber of Commerce Networking and Mentoring Programs ',
        website: 'http://lacccharlotte.com/',
        strategies: ['u']
    },
    {
        plan: 'Leadership Charlotte Training Program ',
        website: 'http://leadershipcharlotte.org/programs-events/',
        strategies: ['u']
    },
    {
        plan: 'Leadership Charlotte, ENCOUNTER Charlotte Program ',
        website:
            'http://leadershipcharlotte.org/programs-events/encounter-charlotte/',
        strategies: ['u']
    },
    {
        plan: 'MUMPO Long Range Transportation Plan',
        website: 'http://www.crtpo.org/',
        strategies: ['i']
    },
    {
        plan: 'Matthews - Planning, Aging, and Matthews',
        website:
            'http://www.matthewsnc.gov/LinkClick.aspx?fileticket=NunmMVPvjww%3d&tabid=222',
        strategies: ['c', 'k', 'n', 'p', 'r']
    },
    {
        plan: 'Matthews - Stallings Comprehensive Transportation Plan',
        website:
            'http://www.stallingsnc.org/vertical/Sites/%7B052C66EC-317E-4C0C-8034-D2D91E376211%7D/uploads/Comprehensive_Transportation_Plan_2014.pdf',
        strategies: ['i', 'q', 's']
    },
    {
        plan: 'Matthews Assessment of the Land Review Process',
        website:
            'http://www.matthewsnc.gov/Portals/0/Departments/Economic%20Development/Documents/Development_Process_report.pdf',
        strategies: ['e', 'g', 'k']
    },
    {
        plan: 'Matthews Comprehensive Bicycle Plan',
        website:
            'http://www.matthewsnc.gov/Portals/0/Repository/6/comprehensive%20bicycle%20plan.74def0eb-814d-4ac1-9746-37278358d65d.pdf',
        strategies: ['i', 'm', 'p', 'q', 'r']
    },
    {
        plan: 'Matthews Cultural Arts Plan',
        website:
            'http://www.artsandscience.org/images/stories/ProgramsServices/CulturalPlanning/cciplanningculturalfacilitiesmasterplan.pdf',
        strategies: ['b', 'c', 'j', 'm']
    },
    {
        plan: 'Matthews Downtown Façade Enhancement Program',
        website:
            'http://www.matthewsnc.gov/Portals/0/Departments/Economic%20Development/Documents/Facade_Grant_Application_2014-02-10.pdf',
        strategies: ['c', 'e', 'g']
    },
    {
        plan: 'Matthews Downtown Master Plan',
        website:
            'http://matthewsnc.gov/Portals/0/Departments/Planning%20and%20Zoning/Documents/Downtown%20PlanFinal%201.7.2013.pdf',
        strategies: ['c', 'd', 'g', 'i', 's']
    },
    {
        plan: 'Matthews Economic Development Advisory Committee',
        website:
            'http://www.matthewsnc.gov/Departments/EconomicDevelopment.aspx',
        strategies: ['e', 'f', 'h', 'n', 'o']
    },
    {
        plan: 'Matthews Historic Properties Inventory',
        website:
            'http://www.matthewsnc.gov/Portals/0/Board%20Agenda/2013%20Feb%2025/10A-Heritage_prop_inventory_excel.pdf',
        strategies: ['g']
    },
    {
        plan: 'Matthews Land Use Plan',
        website:
            'http://matthewsnc.gov/Portals/0/Departments/Planning%20and%20Zoning/Documents/LUP_SAP_Appendix_final_2014-06-09.pdf',
        strategies: ['g', 'k', 's']
    },
    {
        plan: 'Matthews Parks and Recreation Strategic Plan',
        website:
            'http://matthewsnc.gov/Portals/0/Departments/Parks%20and%20Rec/Documents/Final%20Master%20Plan.pdf',
        strategies: ['g', 'm', 'r']
    },
    {
        plan: 'Matthews Strategic Economic Development Grants',
        website:
            'http://www.matthewsnc.gov/Departments/EconomicDevelopment/GeneralInformation.aspx',
        strategies: ['c', 'e', 'o']
    },
    {
        plan: 'Matthews Strategic Economic Development Plan',
        website:
            'http://www.matthewsnc.gov/Portals/0/Departments/Economic%20Development/Documents/Strategic%20Economic%20Development%20Plan.pdf',
        strategies: ['c', 'e', 'o']
    },
    {
        plan: 'Matthews Strategic Framework',
        website:
            'http://matthewsnc.gov/Portals/0/Repository/2/0423Matthews_Strategic_Plan.pdf',
        strategies: ['a', 'i']
    },
    {
        plan: 'Matthews Unified Development Ordinance',
        website: 'http://www.matthewsnc.gov/TownGovernment/TownOrdinances.aspx',
        strategies: ['e', 'g', 'k', 'p', 's', 't']
    },
    {
        plan: 'Matthews Vision Statement - Our Town Our Vision',
        website:
            'http://www.matthewsnc.gov/Portals/0/Repository/Our%20Town%20Our%20Vision%202005.bfad55c4-8547-435c-88b1-405bbcc25a27.pdf',
        strategies: ['d', 'f']
    },
    {
        plan: 'Mecklenburg County - Project Safe Neighborhoods',
        website:
            'http://charmeck.org/mecklenburg/county/CommunitySupportServices/WomensCommission/ProjectSafeNeighborhoods/Pages/default.aspx',
        strategies: ['a']
    },
    {
        plan: 'Mecklenburg County Build an Ark Flood Program',
        website:
            'http://charmeck.org/stormwater/drainageandflooding/pages/buildanark.aspx',
        strategies: ['q', 't']
    },
    {
        plan: 'Mecklenburg County Code Enforcement Consistency Policy ',
        website:
            'http://charmeck.org/mecklenburg/county/dead/cearchive/resources/documents/consistencypolicy.pdf',
        strategies: ['s']
    },
    {
        plan: 'Mecklenburg County Community Health Assessment - 2013',
        website:
            'http://charmeck.org/mecklenburg/county/healthdepartment/healthstatistics/Pages/default.aspx',
        strategies: ['f', 'i', 'p']
    },
    {
        plan: 'Mecklenburg County Community Health Resources',
        website:
            'http://charmeck.org/mecklenburg/county/HealthDepartment/CommunityHealthServices/Pages/ResourceGuide.aspx',
        strategies: ['j', 'l', 'p']
    },
    {
        plan:
            'Mecklenburg County Department of Social Services Comprehensive Community Program',
        website:
            'http://charmeck.org/mecklenburg/county/dss/families/Pages/default.aspx',
        strategies: ['i', 'm']
    },
    {
        plan: 'Mecklenburg County Energy Management Plan ',
        website:
            'http://charmeck.org/mecklenburg/county/LUESA/sustainability/Documents/Energypln.pdf',
        strategies: ['t']
    },
    {
        plan: 'Mecklenburg County Family and Children Medicaid Programs',
        website:
            'http://charmeck.org/mecklenburg/county/dss/children/Pages/default.aspx',
        strategies: ['l']
    },
    {
        plan: 'Mecklenburg County Flood Information and Notification System',
        website:
            'http://charmeck.org/stormwater/DrainageandFlooding/Pages/FINS-FloodInformationandNotificationSystem.aspx',
        strategies: ['q', 't']
    },
    {
        plan: 'Mecklenburg County Food Assessment 2010',
        website:
            'http://ui.uncc.edu/story/mecklenburg-county-community-food-assessment-2010-phase-2',
        strategies: ['p']
    },
    {
        plan: 'Mecklenburg County Food and Nutrition Services',
        website:
            'http://charmeck.org/mecklenburg/county/dss/esd/Pages/FoodandNutrition.aspx',
        strategies: ['f', 'i', 'p']
    },
    {
        plan: 'Mecklenburg County Grants to Replace Aging Diesel Engines',
        website:
            'http://charmeck.org/mecklenburg/county/LUESA/AirQuality/MobileSources/Pages/GRADE.aspx',
        strategies: ['q', 't']
    },
    {
        plan: 'Mecklenburg County Hazard Plans',
        website: 'http://charmeck.org/emergency/Pages/default.aspx',
        strategies: ['a', 'q', 't']
    },
    {
        plan: 'Mecklenburg County Health Report (State of the County Health)',
        website:
            'http://charmeck.org/mecklenburg/county/HealthDepartment/HealthStatistics/Documents/2014%20Mecklenburg%20SOTCH%20Report.pdf',
        strategies: ['l']
    },
    {
        plan: 'Mecklenburg County Homeless Support Services',
        website:
            'http://charmeck.org/mecklenburg/county/communitysupportservices/Pages/Home.aspx',
        strategies: ['c', 'e', 'u']
    },
    {
        plan: 'Mecklenburg County Job Link Career Program',
        website:
            'http://charmeck.org/city/charlotte/econrecovery/pages/jobtrainingadultanddislocatedworkers.aspx',
        strategies: []
    },
    {
        plan: 'Mecklenburg County Land Use and Environmental Services Programs',
        website: 'http://charmeck.org/mecklenburg/county/luesa/Pages/Home.aspx',
        strategies: ['h']
    },
    {
        plan: 'Mecklenburg County Park and Recreation Master Plan ',
        website:
            'http://charmeck.org/mecklenburg/county/ParkandRec/Parks/ParkPlanning/Pages/10YrPlan.aspx',
        strategies: ['a', 'i', 'l', 'm', 'q']
    },
    {
        plan: 'Mecklenburg County Park and Recreation Programs',
        website:
            'http://charmeck.org/mecklenburg/county/parkandrec/Pages/Home.aspx',
        strategies: ['i', 'm', 'q', 'r', 't']
    },
    {
        plan: 'Mecklenburg County Shelter Plus Care Services',
        website:
            'http://charmeck.org/mecklenburg/county/CommunitySupportServices/HomelessServices/Pages/ShelterPlusCare.aspx',
        strategies: ['j', 'l']
    },
    {
        plan: "Mecklenburg County Sheriff's Office",
        website: 'http://mcsowebsvr.co.mecklenburg.nc.us/mecklenburg/index.asp',
        strategies: ['a']
    },
    {
        plan: 'Mecklenburg County Smart Start',
        website: 'http://www.smartstartofmeck.org/',
        strategies: ['c', 'j', 'l', 'p', 'u']
    },
    {
        plan: 'Mecklenburg County Solid Waste - Wipe Out Waste Guide',
        website:
            'http://charmeck.org/mecklenburg/county/LUESA/SolidWaste/ResidentialRecycling/Documents/Wipe%20Out%20Waste%20Guide%202014-2015.pdf',
        strategies: ['r', 't']
    },
    {
        plan: 'Mecklenburg County Solid Waste Management Plan',
        website:
            'http://charmeck.org/mecklenburg/county/LUESA/SolidWaste/ManagementPlan/Pages/default.aspx',
        strategies: ['r', 't']
    },
    {
        plan: 'Mecklenburg County State of the Environment Report - 2014',
        website:
            'http://charmeck.org/mecklenburg/county/luesa/soer/Pages/default.aspx',
        strategies: ['i', 'q', 'r', 's', 't']
    },
    {
        plan: "Mecklenburg County Veterans' Services",
        website:
            'http://charmeck.org/mecklenburg/county/CommunitySupportServices/VeteransServices/Pages/default.aspx',
        strategies: ['c', 'p']
    },
    {
        plan: 'Mecklenburg County Watershed Protection Plan ',
        website:
            'http://charmeck.org/stormwater/creekslakesponds/lakes/documents/protectinglakewaterquality2011.pdf',
        strategies: ['r', 's']
    },
    {
        plan:
            "Mecklenburg County Women's Commission:  Domestic Violence Program",
        website:
            'http://charmeck.org/mecklenburg/county/CommunitySupportServices/WomensCommission/AboutUs/Pages/default.aspx',
        strategies: ['a', 'l']
    },
    {
        plan: "Mecklenburg County Women's Infants and Children's Program",
        website:
            'http://charmeck.org/mecklenburg/county/HealthDepartment/ClinicServices/WIC/Pages/Default.aspx',
        strategies: ['c', 'f', 'i', 'l', 'p']
    },
    {
        plan: 'Mecklenburg County Work First Family Assistance',
        website:
            'http://charmeck.org/mecklenburg/county/dss/esd/Pages/WorkFirstFamilyAssistance.aspx',
        strategies: ['c', 'l']
    },
    {
        plan:
            'Mecklenburg Historical Association Inventory of Local Historic Sites',
        website: 'http://www.meckdec.org/',
        strategies: ['a', 'b', 'c', 'j', 'm']
    },
    {
        plan: 'Mecklenburg Ministries Community Programs',
        website: 'http://www.meckmin.org/community-programs/',
        strategies: ['b', 'c', 'd', 'j', 'm']
    },
    {
        plan: 'Mint Hill 2000 Land Use Plan',
        website:
            'http://minthill.com/documents/68/154/2000%20Land%20Use%20Plan.PDF',
        strategies: ['c', 'e', 'g', 'k', 'q', 'r', 's']
    },
    {
        plan: 'Mint Hill Downtown Master Plan',
        website:
            'http://minthill.com/documents/18/Downtown%20Mint%20Hill%20Master%20Plan.pdf',
        strategies: ['c', 'g', 'i']
    },
    {
        plan: 'Mint Hill Pedestrian Master Plan',
        website: 'http://www.minthill.com/index.aspx?NID=348',
        strategies: ['i', 'r']
    },
    {
        plan: 'NC Air Awareness Program',
        website: 'http://www.ncair.org/airaware/airawaredescription.shtml',
        strategies: ['p', 'q', 't']
    },
    {
        plan: 'NC BE Smart Health Planning Program ',
        website: 'http://www.ncdhhs.gov/dma/mfpw/MFPWbrochure.pdf',
        strategies: ['l', 'p']
    },
    {
        plan: 'NC Low Income Energy Assistance Program ',
        website: 'http://www.benefits.gov/benefits/benefit-details/1564',
        strategies: ['s', 't']
    },
    {
        plan: 'Pineville Overlay District Plans',
        website:
            'http://townofpineville.com/town-departments/planning-and-zoning/important-links/',
        strategies: ['q', 'r', 's', 't']
    },
    {
        plan: 'Project L.I.F.T Programs ',
        website: 'http://www.projectliftcharlotte.org/',
        strategies: ['u']
    },
    {
        plan: 'Quality of Life Dashboard',
        website: 'http://mcmap.org/qol',
        strategies: [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's',
            't'
        ]
    },
    {
        plan:
            'Project for Innovation, Energy & Sustainability Support Programs',
        website: 'http://www.pies-northcarolina.org/',
        strategies: ['e', 'f', 'h', 'n', 'o']
    },
    {
        plan: 'The Learning Collaborative - Pre-School and Parent Programs',
        website: 'http://www.tlccharlotte.org/our-mission-and-vision/',
        strategies: ['l', 'n']
    },
    {
        plan: 'United Way Children and Youth Impact Study ',
        website:
            'http://ui.uncc.edu/story/collective-impact-children-youth-year-2-report',
        strategies: ['l', 'p']
    },
    {
        plan:
            'Universal Design in Single-Family Housing: A Health Impact Assessment (HIA) in Davidson, NC',
        website:
            'http://www.pewtrusts.org/hip/universal-design-in-davidson-north-carolina.html',
        strategies: ['k']
    },
    {
        plan: 'Urban Poverty Data Update for Durham and Mecklenburg Counties',
        website:
            'http://queencityforward.org/wp-content/uploads/2014/09/finalurbanpovertyreport-durhamandmecklenburg.pdf',
        strategies: ['l']
    },
    {
        plan: 'Water Management Group - Water Supply Master Plans',
        website: 'http://catawbawatereewmg.com/2014/WSMP_Report_20140513.pdf',
        strategies: ['q', 't']
    },
    {
        plan:
            'Wipe Out Waste Guide, 2014-15 Charlotte-Mecklenburg Utilities Commission ',
        website:
            'http://charmeck.org/mecklenburg/county/LUESA/SolidWaste/ResidentialRecycling/Documents/finalwow.pdf',
        strategies: ['t']
    }
];
