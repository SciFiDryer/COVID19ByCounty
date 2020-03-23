var batchTime = "2020-03-23 05:45 PM EST";
var countycases = { "counties" : [
{"name": "Albany", "stateid": 36,"cases": 127}
,
{"name": "Allegany", "stateid": 36,"cases": 2}
,
{"name": "Broome", "stateid": 36,"cases": 7}
,
{"name": "Cayuga", "stateid": 36,"cases": 2}
,
{"name": "Chenango", "stateid": 36,"cases": 3}
,
{"name": "Clinton", "stateid": 36,"cases": 6}
,
{"name": "Columbia", "stateid": 36,"cases": 10}
,
{"name": "Cortland", "stateid": 36,"cases": 2}
,
{"name": "Delaware", "stateid": 36,"cases": 3}
,
{"name": "Dutchess", "stateid": 36,"cases": 100}
,
{"name": "Erie", "stateid": 36,"cases": 87}
,
{"name": "Essex", "stateid": 36,"cases": 3}
,
{"name": "Fulton", "stateid": 36,"cases": 1}
,
{"name": "Genesee", "stateid": 36,"cases": 1}
,
{"name": "Greene", "stateid": 36,"cases": 4}
,
{"name": "Hamilton", "stateid": 36,"cases": 2}
,
{"name": "Herkimer", "stateid": 36,"cases": 4}
,
{"name": "Jefferson", "stateid": 36,"cases": 2}
,
{"name": "Livingston", "stateid": 36,"cases": 3}
,
{"name": "Madison", "stateid": 36,"cases": 4}
,
{"name": "Monroe", "stateid": 36,"cases": 76}
,
{"name": "Montgomery", "stateid": 36,"cases": 3}
,
{"name": "Nassau", "stateid": 36,"cases": 2442}
,
{"name": "Niagara", "stateid": 36,"cases": 10}
,
{"name": "New York City", "stateid": 36,"cases": 12305}
,
{"name": "Oneida", "stateid": 36,"cases": 7}
,
{"name": "Onondaga", "stateid": 36,"cases": 52}
,
{"name": "Ontario", "stateid": 36,"cases": 6}
,
{"name": "Orange", "stateid": 36,"cases": 389}
,
{"name": "Oswego", "stateid": 36,"cases": 1}
,
{"name": "Otsego", "stateid": 36,"cases": 1}
,
{"name": "Putnam", "stateid": 36,"cases": 45}
,
{"name": "Rensselaer", "stateid": 36,"cases": 29}
,
{"name": "Rockland", "stateid": 36,"cases": 592}
,
{"name": "Saratoga", "stateid": 36,"cases": 53}
,
{"name": "Schenectady", "stateid": 36,"cases": 44}
,
{"name": "Schoharie", "stateid": 36,"cases": 1}
,
{"name": "St. Lawrence", "stateid": 36,"cases": 1}
,
{"name": "Steuben", "stateid": 36,"cases": 4}
,
{"name": "Suffolk", "stateid": 36,"cases": 1458}
,
{"name": "Sullivan", "stateid": 36,"cases": 23}
,
{"name": "Tioga", "stateid": 36,"cases": 1}
,
{"name": "Tompkins", "stateid": 36,"cases": 15}
,
{"name": "Ulster", "stateid": 36,"cases": 35}
,
{"name": "Warren", "stateid": 36,"cases": 2}
,
{"name": "Washington", "stateid": 36,"cases": 3}
,
{"name": "Wayne", "stateid": 36,"cases": 6}
,
{"name": "Westchester", "stateid": 36,"cases": 2894}
,
{"name": "Wyoming", "stateid": 36,"cases": 4}
,
{"name": "Total Number of Positive Cases", "stateid": 36,"cases": 20875}
,
{"name": "Adams", "stateid": 42, "cases": 6}
,
{"name": "Allegheny", "stateid": 42, "cases": 48}
,
{"name": "Beaver", "stateid": 42, "cases": 3}
,
{"name": "Centre", "stateid": 42, "cases": 3}
,
{"name": "Chester", "stateid": 42, "cases": 40}
,
{"name": "Columbia", "stateid": 42, "cases": 1}
,
{"name": "Berks", "stateid": 42, "cases": 14}
,
{"name": "Bucks", "stateid": 42, "cases": 43}
,
{"name": "Butler", "stateid": 42, "cases": 5}
,
{"name": "Cambria", "stateid": 42, "cases": 1}
,
{"name": "Cumberland", "stateid": 42, "cases": 12}
,
{"name": "Dauphin", "stateid": 42, "cases": 1}
,
{"name": "Delaware", "stateid": 42, "cases": 54}
,
{"name": "Erie", "stateid": 42, "cases": 3}
,
{"name": "Fayette", "stateid": 42, "cases": 1}
,
{"name": "Potter", "stateid": 42, "cases": 1}
,
{"name": "Franklin", "stateid": 42, "cases": 1}
,
{"name": "Lackawanna", "stateid": 42, "cases": 7}
,
{"name": "Lancaster", "stateid": 42, "cases": 5}
,
{"name": "Lebanon", "stateid": 42, "cases": 3}
,
{"name": "Lehigh", "stateid": 42, "cases": 25}
,
{"name": "Luzerne", "stateid": 42, "cases": 10}
,
{"name": "Mercer", "stateid": 42, "cases": 1}
,
{"name": "Monroe", "stateid": 42, "cases": 43}
,
{"name": "Montgomery", "stateid": 42, "cases": 129}
,
{"name": "Montour", "stateid": 42, "cases": 1}
,
{"name": "Northampton", "stateid": 42, "cases": 23}
,
{"name": "Pike", "stateid": 42, "cases": 3}
,
{"name": "Schuylkill", "stateid": 42, "cases": 3}
,
{"name": "Washington", "stateid": 42, "cases": 7}
,
{"name": "Wayne", "stateid": 42, "cases": 3}
,
{"name": "Westmoreland", "stateid": 42, "cases": 6}
,
{"name": "York", "stateid": 42, "cases": 10}
,
{"name": "Philadelphia", "stateid": 42, "cases": 128}
,
{"name": "Bergen", "stateid": 34, "cases": 609}
,
{"name": "Essex", "stateid": 34, "cases": 273}
,
{"name": "Monmouth", "stateid": 34, "cases": 238}
,
{"name": "Middlesex", "stateid": 34, "cases": 210}
,
{"name": "Hudson", "stateid": 34, "cases": 190}
,
{"name": "Union", "stateid": 34, "cases": 189}
,
{"name": "Morris", "stateid": 34, "cases": 177}
,
{"name": "Ocean", "stateid": 34, "cases": 144}
,
{"name": "Passaic", "stateid": 34, "cases": 141}
,
{"name": "Somerset", "stateid": 34, "cases": 67}
,
{"name": "Mercer", "stateid": 34, "cases": 50}
,
{"name": "Burlington", "stateid": 34, "cases": 36}
,
{"name": "Camden", "stateid": 34, "cases": 33}
,
{"name": "Hunterdon", "stateid": 34, "cases": 18}
,
{"name": "Sussex", "stateid": 34, "cases": 15}
,
{"name": "Gloucester", "stateid": 34, "cases": 13}
,
{"name": "Warren", "stateid": 34, "cases": 12}
,
{"name": "Atlantic", "stateid": 34, "cases": 6}
,
{"name": "Cape may", "stateid": 34, "cases": 2}
,
{"name": "Cumberland", "stateid": 34, "cases": 1}
,
{"name": "Salem", "stateid": 34, "cases": 1}
,
{"name": "Ashland", "stateid": 39,"cases": 1}
,
{"name": "Ashtabula", "stateid": 39,"cases": 3}
,
{"name": "Belmont", "stateid": 39,"cases": 2}
,
{"name": "Butler", "stateid": 39,"cases": 17}
,
{"name": "Carroll", "stateid": 39,"cases": 2}
,
{"name": "Clark", "stateid": 39,"cases": 1}
,
{"name": "Clermont", "stateid": 39,"cases": 5}
,
{"name": "Clinton", "stateid": 39,"cases": 1}
,
{"name": "Columbiana", "stateid": 39,"cases": 2}
,
{"name": "Coshocton", "stateid": 39,"cases": 3}
,
{"name": "Cuyahoga", "stateid": 39,"cases": 149}
,
{"name": "Darke", "stateid": 39,"cases": 1}
,
{"name": "Defiance", "stateid": 39,"cases": 2}
,
{"name": "Delaware", "stateid": 39,"cases": 7}
,
{"name": "Erie", "stateid": 39,"cases": 1}
,
{"name": "Franklin", "stateid": 39,"cases": 44}
,
{"name": "Gallia", "stateid": 39,"cases": 1}
,
{"name": "Geauga", "stateid": 39,"cases": 2}
,
{"name": "Greene", "stateid": 39,"cases": 1}
,
{"name": "Hamilton", "stateid": 39,"cases": 26}
,
{"name": "Hancock", "stateid": 39,"cases": 1}
,
{"name": "Highland", "stateid": 39,"cases": 1}
,
{"name": "Huron", "stateid": 39,"cases": 1}
,
{"name": "Knox", "stateid": 39,"cases": 1}
,
{"name": "Lake", "stateid": 39,"cases": 8}
,
{"name": "Licking", "stateid": 39,"cases": 1}
,
{"name": "Logan", "stateid": 39,"cases": 1}
,
{"name": "Lorain", "stateid": 39,"cases": 24}
,
{"name": "Lucas", "stateid": 39,"cases": 9}
,
{"name": "Madison", "stateid": 39,"cases": 1}
,
{"name": "Mahoning", "stateid": 39,"cases": 23}
,
{"name": "Marion", "stateid": 39,"cases": 3}
,
{"name": "Medina", "stateid": 39,"cases": 15}
,
{"name": "Miami", "stateid": 39,"cases": 17}
,
{"name": "Montgomery", "stateid": 39,"cases": 7}
,
{"name": "Portage", "stateid": 39,"cases": 2}
,
{"name": "Richland", "stateid": 39,"cases": 1}
,
{"name": "Sandusky", "stateid": 39,"cases": 1}
,
{"name": "Stark", "stateid": 39,"cases": 12}
,
{"name": "Summit", "stateid": 39,"cases": 28}
,
{"name": "Trumbull", "stateid": 39,"cases": 3}
,
{"name": "Tuscarawas", "stateid": 39,"cases": 2}
,
{"name": "Union", "stateid": 39,"cases": 1}
,
{"name": "Warren", "stateid": 39,"cases": 5}
,
{"name": "Washington", "stateid": 39,"cases": 1}
,
{"name": "Wood", "stateid": 39,"cases": 2}
,
{"name": "Fairfield", "stateid": 9, "cases": 270}
,
{"name": "Hartford", "stateid": 9, "cases": 61}
,
{"name": "Litchfield", "stateid": 9, "cases": 13}
,
{"name": "Middlesex", "stateid": 9, "cases": 8}
,
{"name": "New Haven", "stateid": 9, "cases": 41}
,
{"name": "New London", "stateid": 9, "cases": 4}
,
{"name": "Tolland", "stateid": 9, "cases": 16}
,
{"name": "Windham", "stateid": 9, "cases": 2}
,
{"name": "Barnstable", "stateid": 25, "cases": 30}
,
{"name": "Berkshire", "stateid": 25, "cases": 26}
,
{"name": "Bristol", "stateid": 25, "cases": 25}
,
{"name": "Dukes and Nantucket", "stateid": 25, "cases": 1}
,
{"name": "Essex", "stateid": 25, "cases": 73}
,
{"name": "Franklin", "stateid": 25, "cases": 2}
,
{"name": "Hampden", "stateid": 25, "cases": 15}
,
{"name": "Hampshire", "stateid": 25, "cases": 6}
,
{"name": "Middlesex", "stateid": 25, "cases": 232}
,
{"name": "Norfolk", "stateid": 25, "cases": 82}
,
{"name": "Plymouth", "stateid": 25, "cases": 32}
,
{"name": "Suffolk", "stateid": 25, "cases": 154}
,
{"name": "Worcester", "stateid": 25, "cases": 42}
,
{"name": "Unknown", "stateid": 25, "cases": 57}
,
{"name": "Allegan", "stateid": 26, "cases": 1}
,
{"name": "Barry", "stateid": 26, "cases": 1}
,
{"name": "Bay", "stateid": 26, "cases": 1}
,
{"name": "Berrien", "stateid": 26, "cases": 5}
,
{"name": "Calhoun", "stateid": 26, "cases": 3}
,
{"name": "Charlevoix", "stateid": 26, "cases": 2}
,
{"name": "Chippewa", "stateid": 26, "cases": 1}
,
{"name": "Clare", "stateid": 26, "cases": 1}
,
{"name": "Clinton", "stateid": 26, "cases": 2}
,
{"name": "Eaton", "stateid": 26, "cases": 2}
,
{"name": "Emmet", "stateid": 26, "cases": 1}
,
{"name": "Genesee", "stateid": 26, "cases": 23}
,
{"name": "Gladwin", "stateid": 26, "cases": 1}
,
{"name": "Grand Traverse", "stateid": 26, "cases": 1}
,
{"name": "Ingham", "stateid": 26, "cases": 12}
,
{"name": "Jackson", "stateid": 26, "cases": 1}
,
{"name": "Kalamazoo", "stateid": 26, "cases": 3}
,
{"name": "Kent", "stateid": 26, "cases": 28}
,
{"name": "Leelanau", "stateid": 26, "cases": 1}
,
{"name": "Livingston", "stateid": 26, "cases": 9}
,
{"name": "Macomb", "stateid": 26, "cases": 175}
,
{"name": "Midland", "stateid": 26, "cases": 5}
,
{"name": "Monroe", "stateid": 26, "cases": 7}
,
{"name": "Montcalm", "stateid": 26, "cases": 1}
,
{"name": "Muskegon", "stateid": 26, "cases": 1}
,
{"name": "Newaygo", "stateid": 26, "cases": 1}
,
{"name": "Oakland", "stateid": 26, "cases": 329}
,
{"name": "Otsego", "stateid": 26, "cases": 3}
,
{"name": "Ottawa", "stateid": 26, "cases": 11}
,
{"name": "Roscommon", "stateid": 26, "cases": 1}
,
{"name": "Saginaw", "stateid": 26, "cases": 2}
,
{"name": "St. Clair", "stateid": 26, "cases": 7}
,
{"name": "Tuscola", "stateid": 26, "cases": 1}
,
{"name": "Washtenaw", "stateid": 26, "cases": 42}
,
{"name": "Wayne", "stateid": 26, "cases": 638}
,
{"name": "Wexford", "stateid": 26, "cases": 1}
,
{"name": "Out of State", "stateid": 26, "cases": 4}
,
{"name": "Adams", "stateid": 18, "cases": 1}
,
{"name": "Allen", "stateid": 18, "cases": 6}
,
{"name": "Bartholomew", "stateid": 18, "cases": 5}
,
{"name": "Boone", "stateid": 18, "cases": 3}
,
{"name": "Clark", "stateid": 18, "cases": 5}
,
{"name": "Delaware", "stateid": 18, "cases": 3}
,
{"name": "Dubois", "stateid": 18, "cases": 1}
,
{"name": "Elkhart", "stateid": 18, "cases": 4}
,
{"name": "Fayette", "stateid": 18, "cases": 1}
,
{"name": "Floyd", "stateid": 18, "cases": 4}
,
{"name": "Franklin", "stateid": 18, "cases": 4}
,
{"name": "Grant", "stateid": 18, "cases": 3}
,
{"name": "Hamilton", "stateid": 18, "cases": 21}
,
{"name": "Hancock", "stateid": 18, "cases": 3}
,
{"name": "Harrison", "stateid": 18, "cases": 1}
,
{"name": "Hendricks", "stateid": 18, "cases": 12}
,
{"name": "Howard", "stateid": 18, "cases": 6}
,
{"name": "Jennings", "stateid": 18, "cases": 2}
,
{"name": "Johnson", "stateid": 18, "cases": 14}
,
{"name": "Lake", "stateid": 18, "cases": 11}
,
{"name": "LaPorte", "stateid": 18, "cases": 2}
,
{"name": "Madison", "stateid": 18, "cases": 3}
,
{"name": "Marion", "stateid": 18, "cases": 110}
,
{"name": "Miami", "stateid": 18, "cases": 1}
,
{"name": "Monroe", "stateid": 18, "cases": 3}
,
{"name": "Morgan", "stateid": 18, "cases": 3}
,
{"name": "Noble", "stateid": 18, "cases": 1}
,
{"name": "Owen", "stateid": 18, "cases": 2}
,
{"name": "Putnam", "stateid": 18, "cases": 1}
,
{"name": "Ripley", "stateid": 18, "cases": 1}
,
{"name": "Scott", "stateid": 18, "cases": 1}
,
{"name": "Shelby", "stateid": 18, "cases": 1}
,
{"name": "St Joseph", "stateid": 18, "cases": 9}
,
{"name": "Tippecanoe", "stateid": 18, "cases": 2}
,
{"name": "Tipton", "stateid": 18, "cases": 2}
,
{"name": "Vander.", "stateid": 18, "cases": 1}
,
{"name": "Vigo", "stateid": 18, "cases": 2}
,
{"name": "Washington", "stateid": 18, "cases": 2}
,
{"name": "Wayne", "stateid": 18, "cases": 1}
,
{"name": "Wells", "stateid": 18, "cases": 1}
,
{"name": "Illinois", "stateid": 17, "cases": 1285}
,
{"name": "Chicago", "stateid": 17, "cases": 636}
,
{"name": "Suburban Cook", "stateid": 17, "cases": 0}
,
{"name": "Adams", "stateid": 17, "cases": 1}
,
{"name": "Alexander", "stateid": 17, "cases": 0}
,
{"name": "Bond", "stateid": 17, "cases": 0}
,
{"name": "Boone", "stateid": 17, "cases": 0}
,
{"name": "Brown", "stateid": 17, "cases": 0}
,
{"name": "Bureau", "stateid": 17, "cases": 0}
,
{"name": "Calhoun", "stateid": 17, "cases": 0}
,
{"name": "Carroll", "stateid": 17, "cases": 0}
,
{"name": "Cass", "stateid": 17, "cases": 0}
,
{"name": "Champaign", "stateid": 17, "cases": 2}
,
{"name": "Christian", "stateid": 17, "cases": 1}
,
{"name": "Clark", "stateid": 17, "cases": 0}
,
{"name": "Clay", "stateid": 17, "cases": 0}
,
{"name": "Clinton", "stateid": 17, "cases": 3}
,
{"name": "Coles", "stateid": 17, "cases": 0}
,
{"name": "Cook", "stateid": 17, "cases": 286}
,
{"name": "Crawford", "stateid": 17, "cases": 0}
,
{"name": "Cumberland", "stateid": 17, "cases": 1}
,
{"name": "DeKalb", "stateid": 17, "cases": 1}
,
{"name": "De Witt", "stateid": 17, "cases": 0}
,
{"name": "Douglas", "stateid": 17, "cases": 0}
,
{"name": "DuPage", "stateid": 17, "cases": 95}
,
{"name": "Edgar", "stateid": 17, "cases": 0}
,
{"name": "Edwards", "stateid": 17, "cases": 0}
,
{"name": "Effingham", "stateid": 17, "cases": 0}
,
{"name": "Fayette", "stateid": 17, "cases": 0}
,
{"name": "Ford", "stateid": 17, "cases": 0}
,
{"name": "Franklin", "stateid": 17, "cases": 0}
,
{"name": "Fulton", "stateid": 17, "cases": 0}
,
{"name": "Gallatin", "stateid": 17, "cases": 0}
,
{"name": "Greene", "stateid": 17, "cases": 0}
,
{"name": "Grundy", "stateid": 17, "cases": 0}
,
{"name": "Hamilton", "stateid": 17, "cases": 0}
,
{"name": "Hancock", "stateid": 17, "cases": 0}
,
{"name": "Hardin", "stateid": 17, "cases": 0}
,
{"name": "Henderson", "stateid": 17, "cases": 0}
,
{"name": "Henry", "stateid": 17, "cases": 0}
,
{"name": "Iroquois", "stateid": 17, "cases": 0}
,
{"name": "Jackson", "stateid": 17, "cases": 1}
,
{"name": "Jasper", "stateid": 17, "cases": 0}
,
{"name": "Jefferson", "stateid": 17, "cases": 0}
,
{"name": "Jersey", "stateid": 17, "cases": 0}
,
{"name": "Jo Daviess", "stateid": 17, "cases": 1}
,
{"name": "Johnson", "stateid": 17, "cases": 0}
,
{"name": "Kane", "stateid": 17, "cases": 18}
,
{"name": "Kankakee", "stateid": 17, "cases": 3}
,
{"name": "Kendall", "stateid": 17, "cases": 4}
,
{"name": "Knox", "stateid": 17, "cases": 0}
,
{"name": "Lake", "stateid": 17, "cases": 96}
,
{"name": "LaSalle", "stateid": 17, "cases": 2}
,
{"name": "Lawrence", "stateid": 17, "cases": 0}
,
{"name": "Lee", "stateid": 17, "cases": 0}
,
{"name": "Livingston", "stateid": 17, "cases": 1}
,
{"name": "Logan", "stateid": 17, "cases": 0}
,
{"name": "McDonough", "stateid": 17, "cases": 0}
,
{"name": "McHenry", "stateid": 17, "cases": 12}
,
{"name": "McLean", "stateid": 17, "cases": 7}
,
{"name": "Macon", "stateid": 17, "cases": 0}
,
{"name": "Macoupin", "stateid": 17, "cases": 0}
,
{"name": "Madison", "stateid": 17, "cases": 2}
,
{"name": "Marion", "stateid": 17, "cases": 0}
,
{"name": "Marshall", "stateid": 17, "cases": 0}
,
{"name": "Mason", "stateid": 17, "cases": 0}
,
{"name": "Massac", "stateid": 17, "cases": 0}
,
{"name": "Menard", "stateid": 17, "cases": 0}
,
{"name": "Mercer", "stateid": 17, "cases": 0}
,
{"name": "Monroe", "stateid": 17, "cases": 1}
,
{"name": "Montgomery", "stateid": 17, "cases": 0}
,
{"name": "Morgan", "stateid": 17, "cases": 0}
,
{"name": "Moultrie", "stateid": 17, "cases": 0}
,
{"name": "Ogle", "stateid": 17, "cases": 0}
,
{"name": "Peoria", "stateid": 17, "cases": 3}
,
{"name": "Perry", "stateid": 17, "cases": 0}
,
{"name": "Piatt", "stateid": 17, "cases": 0}
,
{"name": "Pike", "stateid": 17, "cases": 0}
,
{"name": "Pope", "stateid": 17, "cases": 0}
,
{"name": "Pulaski", "stateid": 17, "cases": 0}
,
{"name": "Putnam", "stateid": 17, "cases": 0}
,
{"name": "Randolph", "stateid": 17, "cases": 0}
,
{"name": "Richland", "stateid": 17, "cases": 0}
,
{"name": "Rock Island", "stateid": 17, "cases": 1}
,
{"name": "St. Clair", "stateid": 17, "cases": 4}
,
{"name": "Saline", "stateid": 17, "cases": 0}
,
{"name": "Sangamon", "stateid": 17, "cases": 4}
,
{"name": "Schuyler", "stateid": 17, "cases": 0}
,
{"name": "Scott", "stateid": 17, "cases": 0}
,
{"name": "Shelby", "stateid": 17, "cases": 0}
,
{"name": "Stark", "stateid": 17, "cases": 0}
,
{"name": "Stephenson", "stateid": 17, "cases": 1}
,
{"name": "Tazewell", "stateid": 17, "cases": 0}
,
{"name": "Union", "stateid": 17, "cases": 0}
,
{"name": "Vermilion", "stateid": 17, "cases": 0}
,
{"name": "Wabash", "stateid": 17, "cases": 0}
,
{"name": "Warren", "stateid": 17, "cases": 0}
,
{"name": "Washington", "stateid": 17, "cases": 1}
,
{"name": "Wayne", "stateid": 17, "cases": 0}
,
{"name": "White", "stateid": 17, "cases": 0}
,
{"name": "Whiteside", "stateid": 17, "cases": 1}
,
{"name": "Will", "stateid": 17, "cases": 24}
,
{"name": "Williamson", "stateid": 17, "cases": 1}
,
{"name": "Winnebago", "stateid": 17, "cases": 5}
,
{"name": "Woodford", "stateid": 17, "cases": 2}
,
{"name": "Milwaukee", "stateid": 55, "cases": 204}
,
{"name": "Dane", "stateid": 55, "cases": 61}
,
{"name": "Waukesha", "stateid": 55, "cases": 31}
,
{"name": "Fond du Lac", "stateid": 55, "cases": 16}
,
{"name": "Washington", "stateid": 55, "cases": 15}
,
{"name": "Ozaukee", "stateid": 55, "cases": 14}
,
{"name": "Kenosha", "stateid": 55, "cases": 12}
,
{"name": "Sheboygan", "stateid": 55, "cases": 6}
,
{"name": "La Crosse", "stateid": 55, "cases": 5}
,
{"name": "Racine", "stateid": 55, "cases": 5}
,
{"name": "Winnebago", "stateid": 55, "cases": 5}
,
{"name": "Columbia", "stateid": 55, "cases": 5}
,
{"name": "Eau Claire", "stateid": 55, "cases": 4}
,
{"name": "Sauk", "stateid": 55, "cases": 3}
,
{"name": "Pierce", "stateid": 55, "cases": 3}
,
{"name": "Walworth", "stateid": 55, "cases": 3}
,
{"name": "Rock", "stateid": 55, "cases": 3}
,
{"name": "Brown", "stateid": 55, "cases": 3}
,
{"name": "St. Croix", "stateid": 55, "cases": 3}
,
{"name": "Outagamie", "stateid": 55, "cases": 2}
,
{"name": "Dodge", "stateid": 55, "cases": 2}
,
{"name": "Jefferson", "stateid": 55, "cases": 2}
,
{"name": "Douglas", "stateid": 55, "cases": 2}
,
{"name": "Dunn", "stateid": 55, "cases": 1}
,
{"name": "Bayfield", "stateid": 55, "cases": 1}
,
{"name": "Green", "stateid": 55, "cases": 1}
,
{"name": "Marathon", "stateid": 55, "cases": 1}
,
{"name": "Calumet", "stateid": 55, "cases": 1}
,
{"name": "Chippewa", "stateid": 55, "cases": 1}
,
{"name": "Wood", "stateid": 55, "cases": 1}
,
{"name": "Lake of the Woods", "stateid": 27, "cases": 0}
,
{"name": "Kittson", "stateid": 27, "cases": 0}
,
{"name": "Roseau", "stateid": 27, "cases": 0}
,
{"name": "Koochiching", "stateid": 27, "cases": 0}
,
{"name": "Marshall", "stateid": 27, "cases": 0}
,
{"name": "St. Louis", "stateid": 27, "cases": 2}
,
{"name": "Beltrami", "stateid": 27, "cases": 0}
,
{"name": "Polk", "stateid": 27, "cases": 0}
,
{"name": "Pennington", "stateid": 27, "cases": 0}
,
{"name": "Cook", "stateid": 27, "cases": 0}
,
{"name": "Lake", "stateid": 27, "cases": 0}
,
{"name": "Clearwater", "stateid": 27, "cases": 0}
,
{"name": "Red Lake", "stateid": 27, "cases": 0}
,
{"name": "Itasca", "stateid": 27, "cases": 0}
,
{"name": "Norman", "stateid": 27, "cases": 0}
,
{"name": "Mahnomen", "stateid": 27, "cases": 0}
,
{"name": "Cass", "stateid": 27, "cases": 1}
,
{"name": "Hubbard", "stateid": 27, "cases": 0}
,
{"name": "Clay", "stateid": 27, "cases": 2}
,
{"name": "Becker", "stateid": 27, "cases": 0}
,
{"name": "Aitkin", "stateid": 27, "cases": 0}
,
{"name": "Wadena", "stateid": 27, "cases": 0}
,
{"name": "Crow Wing", "stateid": 27, "cases": 0}
,
{"name": "Carlton", "stateid": 27, "cases": 0}
,
{"name": "Otter Tail", "stateid": 27, "cases": 0}
,
{"name": "Wilkin", "stateid": 27, "cases": 0}
,
{"name": "Pine", "stateid": 27, "cases": 0}
,
{"name": "Todd", "stateid": 27, "cases": 0}
,
{"name": "Morrison", "stateid": 27, "cases": 0}
,
{"name": "Mille Lacs", "stateid": 27, "cases": 0}
,
{"name": "Kanabec", "stateid": 27, "cases": 0}
,
{"name": "Grant", "stateid": 27, "cases": 0}
,
{"name": "Douglas", "stateid": 27, "cases": 0}
,
{"name": "Traverse", "stateid": 27, "cases": 0}
,
{"name": "Benton", "stateid": 27, "cases": 1}
,
{"name": "Stevens", "stateid": 27, "cases": 0}
,
{"name": "Stearns", "stateid": 27, "cases": 5}
,
{"name": "Pope", "stateid": 27, "cases": 0}
,
{"name": "Isanti", "stateid": 27, "cases": 0}
,
{"name": "Chisago", "stateid": 27, "cases": 2}
,
{"name": "Big Stone", "stateid": 27, "cases": 1}
,
{"name": "Sherburne", "stateid": 27, "cases": 1}
,
{"name": "Swift", "stateid": 27, "cases": 0}
,
{"name": "Kandiyohi", "stateid": 27, "cases": 0}
,
{"name": "Wright", "stateid": 27, "cases": 3}
,
{"name": "Anoka", "stateid": 27, "cases": 7}
,
{"name": "Meeker", "stateid": 27, "cases": 0}
,
{"name": "Lac qui Parle", "stateid": 27, "cases": 1}
,
{"name": "Washington", "stateid": 27, "cases": 10}
,
{"name": "Hennepin", "stateid": 27, "cases": 89}
,
{"name": "Chippewa", "stateid": 27, "cases": 0}
,
{"name": "Ramsey", "stateid": 27, "cases": 24}
,
{"name": "McLeod", "stateid": 27, "cases": 0}
,
{"name": "Carver", "stateid": 27, "cases": 8}
,
{"name": "Yellow Medicine", "stateid": 27, "cases": 0}
,
{"name": "Dakota", "stateid": 27, "cases": 18}
,
{"name": "Renville", "stateid": 27, "cases": 1}
,
{"name": "Scott", "stateid": 27, "cases": 5}
,
{"name": "Sibley", "stateid": 27, "cases": 0}
,
{"name": "Redwood", "stateid": 27, "cases": 0}
,
{"name": "Goodhue", "stateid": 27, "cases": 0}
,
{"name": "Lincoln", "stateid": 27, "cases": 0}
,
{"name": "Lyon", "stateid": 27, "cases": 0}
,
{"name": "Le Sueur", "stateid": 27, "cases": 1}
,
{"name": "Rice", "stateid": 27, "cases": 2}
,
{"name": "Brown", "stateid": 27, "cases": 0}
,
{"name": "Nicollet", "stateid": 27, "cases": 3}
,
{"name": "Wabasha", "stateid": 27, "cases": 1}
,
{"name": "Blue Earth", "stateid": 27, "cases": 5}
,
{"name": "Pipestone", "stateid": 27, "cases": 0}
,
{"name": "Murray", "stateid": 27, "cases": 0}
,
{"name": "Cottonwood", "stateid": 27, "cases": 0}
,
{"name": "Winona", "stateid": 27, "cases": 0}
,
{"name": "Waseca", "stateid": 27, "cases": 2}
,
{"name": "Steele", "stateid": 27, "cases": 3}
,
{"name": "Dodge", "stateid": 27, "cases": 2}
,
{"name": "Olmsted", "stateid": 27, "cases": 16}
,
{"name": "Watonwan", "stateid": 27, "cases": 0}
,
{"name": "Rock", "stateid": 27, "cases": 0}
,
{"name": "Nobles", "stateid": 27, "cases": 0}
,
{"name": "Jackson", "stateid": 27, "cases": 1}
,
{"name": "Martin", "stateid": 27, "cases": 8}
,
{"name": "Houston", "stateid": 27, "cases": 0}
,
{"name": "Faribault", "stateid": 27, "cases": 0}
,
{"name": "Fillmore", "stateid": 27, "cases": 3}
,
{"name": "Freeborn", "stateid": 27, "cases": 0}
,
{"name": "Mower", "stateid": 27, "cases": 6}
,
{"name": "Montgomery", "stateid": 24, "cases": 93}
,
{"name": "Prince George's", "stateid": 24, "cases": 47}
,
{"name": "Baltimore", "stateid": 24, "cases": 35}
,
{"name": "Baltimore City", "stateid": 24, "cases": 31}
,
{"name": "Howard", "stateid": 24, "cases": 26}
,
{"name": "Anne Arundel", "stateid": 24, "cases": 20}
,
{"name": "Carroll", "stateid": 24, "cases": 5}
,
{"name": "Charles", "stateid": 24, "cases": 5}
,
{"name": "Harford", "stateid": 24, "cases": 5}
,
{"name": "Wicomico", "stateid": 24, "cases": 4}
,
{"name": "Garrett", "stateid": 24, "cases": 3}
,
{"name": "Calvert", "stateid": 24, "cases": 2}
,
{"name": "Frederick", "stateid": 24, "cases": 2}
,
{"name": "Washington", "stateid": 24, "cases": 2}
,
{"name": "Worcester", "stateid": 24, "cases": 2}
,
{"name": "Caroline", "stateid": 24, "cases": 1}
,
{"name": "Cecil", "stateid": 24, "cases": 1}
,
{"name": "Queen Anne's", "stateid": 24, "cases": 1}
,
{"name": "Somerset", "stateid": 24, "cases": 1}
,
{"name": "St. Mary's", "stateid": 24, "cases": 1}
,
{"name": "Talbot", "stateid": 24, "cases": 1}
,
{"name": "New Castle", "stateid": 10, "cases": 58}
,
{"name": "Kent", "stateid": 10, "cases": 9}
,
{"name": "Sussex", "stateid": 10, "cases": 20}
,
{"name": "St Louis", "stateid": 29, "cases": 69}
,
{"name": "Boone", "stateid": 29, "cases": 17}
,
{"name": "Kansas City", "stateid": 29, "cases": 17}
,
{"name": "Greene", "stateid": 29, "cases": 16}
,
{"name": "St Louis City", "stateid": 29, "cases": 15}
,
{"name": "Jackson", "stateid": 29, "cases": 10}
,
{"name": "Cass", "stateid": 29, "cases": 6}
,
{"name": "TBD", "stateid": 29, "cases": 6}
,
{"name": "Cole", "stateid": 29, "cases": 5}
,
{"name": "St Charles", "stateid": 29, "cases": 4}
,
{"name": "Adair", "stateid": 29, "cases": 2}
,
{"name": "Clinton", "stateid": 29, "cases": 1}
,
{"name": "Lafayette", "stateid": 29, "cases": 1}
,
{"name": "Callaway", "stateid": 29, "cases": 1}
,
{"name": "Johnson", "stateid": 29, "cases": 1}
,
{"name": "Moniteau", "stateid": 29, "cases": 1}
,
{"name": "Henry", "stateid": 29, "cases": 1}
,
{"name": "Bates", "stateid": 29, "cases": 1}
,
{"name": "Camden", "stateid": 29, "cases": 1}
,
{"name": "St Francois", "stateid": 29, "cases": 1}
,
{"name": "Pulaski", "stateid": 29, "cases": 1}
,
{"name": "Perry", "stateid": 29, "cases": 1}
,
{"name": "Jasper", "stateid": 29, "cases": 1}
,
{"name": "Scott", "stateid": 29, "cases": 1}
,
{"name": "Christian", "stateid": 29, "cases": 1}
,
{"name": "Androscoggin", "stateid": 23, "cases": 3}
,
{"name": "Aroostook", "stateid": 23, "cases": 0}
,
{"name": "Cumberland", "stateid": 23, "cases": 66}
,
{"name": "Franklin", "stateid": 23, "cases": 0}
,
{"name": "Hancock", "stateid": 23, "cases": 0}
,
{"name": "Kennebec", "stateid": 23, "cases": 4}
,
{"name": "Knox", "stateid": 23, "cases": 1}
,
{"name": "Lincoln", "stateid": 23, "cases": 5}
,
{"name": "Oxford", "stateid": 23, "cases": 5}
,
{"name": "Penobscot", "stateid": 23, "cases": 3}
,
{"name": "Piscataquis", "stateid": 23, "cases": 0}
,
{"name": "Sagadahoc", "stateid": 23, "cases": 3}
,
{"name": "Somerset", "stateid": 23, "cases": 0}
,
{"name": "Waldo", "stateid": 23, "cases": 0}
,
{"name": "Washington", "stateid": 23, "cases": 0}
,
{"name": "York", "stateid": 23, "cases": 12}
,
{"name": "Missing County Info", "stateid": 5, "cases": 2}
,
{"name": "Howard", "stateid": 5, "cases": 0}
,
{"name": "Pulaski", "stateid": 5, "cases": 61}
,
{"name": "Lonoke", "stateid": 5, "cases": 0}
,
{"name": "Prairie", "stateid": 5, "cases": 0}
,
{"name": "Desha", "stateid": 5, "cases": 2}
,
{"name": "Phillips", "stateid": 5, "cases": 0}
,
{"name": "Searcy", "stateid": 5, "cases": 2}
,
{"name": "Independence", "stateid": 5, "cases": 3}
,
{"name": "Jackson", "stateid": 5, "cases": 0}
,
{"name": "Mississippi", "stateid": 5, "cases": 0}
,
{"name": "Greene", "stateid": 5, "cases": 3}
,
{"name": "Clay", "stateid": 5, "cases": 0}
,
{"name": "Randolph", "stateid": 5, "cases": 0}
,
{"name": "Lawrence", "stateid": 5, "cases": 1}
,
{"name": "Baxter", "stateid": 5, "cases": 0}
,
{"name": "Marion", "stateid": 5, "cases": 0}
,
{"name": "Perry", "stateid": 5, "cases": 0}
,
{"name": "Jefferson", "stateid": 5, "cases": 21}
,
{"name": "Washington", "stateid": 5, "cases": 5}
,
{"name": "Crawford", "stateid": 5, "cases": 1}
,
{"name": "Little River", "stateid": 5, "cases": 0}
,
{"name": "Miller", "stateid": 5, "cases": 0}
,
{"name": "Lafayette", "stateid": 5, "cases": 0}
,
{"name": "Columbia", "stateid": 5, "cases": 1}
,
{"name": "Union", "stateid": 5, "cases": 1}
,
{"name": "Ashley", "stateid": 5, "cases": 0}
,
{"name": "Chicot", "stateid": 5, "cases": 0}
,
{"name": "Benton", "stateid": 5, "cases": 1}
,
{"name": "Carroll", "stateid": 5, "cases": 0}
,
{"name": "Madison", "stateid": 5, "cases": 0}
,
{"name": "Sebastian", "stateid": 5, "cases": 1}
,
{"name": "Polk", "stateid": 5, "cases": 2}
,
{"name": "Sevier", "stateid": 5, "cases": 1}
,
{"name": "Garland", "stateid": 5, "cases": 9}
,
{"name": "Saline", "stateid": 5, "cases": 4}
,
{"name": "Franklin", "stateid": 5, "cases": 0}
,
{"name": "Scott", "stateid": 5, "cases": 0}
,
{"name": "Logan", "stateid": 5, "cases": 0}
,
{"name": "Yell", "stateid": 5, "cases": 0}
,
{"name": "Montgomery", "stateid": 5, "cases": 0}
,
{"name": "Pike", "stateid": 5, "cases": 0}
,
{"name": "Hempstead", "stateid": 5, "cases": 0}
,
{"name": "Drew", "stateid": 5, "cases": 0}
,
{"name": "Bradley", "stateid": 5, "cases": 4}
,
{"name": "Calhoun", "stateid": 5, "cases": 0}
,
{"name": "Ouachita", "stateid": 5, "cases": 0}
,
{"name": "Nevada", "stateid": 5, "cases": 0}
,
{"name": "Clark", "stateid": 5, "cases": 7}
,
{"name": "Dallas", "stateid": 5, "cases": 0}
,
{"name": "Cleveland", "stateid": 5, "cases": 3}
,
{"name": "Lincoln", "stateid": 5, "cases": 2}
,
{"name": "Arkansas", "stateid": 5, "cases": 0}
,
{"name": "Grant", "stateid": 5, "cases": 3}
,
{"name": "Monroe", "stateid": 5, "cases": 0}
,
{"name": "Lee", "stateid": 5, "cases": 0}
,
{"name": "Hot Spring", "stateid": 5, "cases": 0}
,
{"name": "St. Francis", "stateid": 5, "cases": 0}
,
{"name": "Crittenden", "stateid": 5, "cases": 2}
,
{"name": "Cross", "stateid": 5, "cases": 0}
,
{"name": "Woodruff", "stateid": 5, "cases": 1}
,
{"name": "White", "stateid": 5, "cases": 3}
,
{"name": "Faulkner", "stateid": 5, "cases": 10}
,
{"name": "Conway", "stateid": 5, "cases": 1}
,
{"name": "Newton", "stateid": 5, "cases": 0}
,
{"name": "Pope", "stateid": 5, "cases": 1}
,
{"name": "Johnson", "stateid": 5, "cases": 0}
,
{"name": "Van Buren", "stateid": 5, "cases": 3}
,
{"name": "Cleburne", "stateid": 5, "cases": 27}
,
{"name": "Poinsett", "stateid": 5, "cases": 3}
,
{"name": "Craighead", "stateid": 5, "cases": 3}
,
{"name": "Sharp", "stateid": 5, "cases": 0}
,
{"name": "Izard", "stateid": 5, "cases": 0}
,
{"name": "Fulton", "stateid": 5, "cases": 0}
,
{"name": "Stone", "stateid": 5, "cases": 2}
,
{"name": "Boone", "stateid": 5, "cases": 1}
,
{"name": "Orleans", "stateid": 22, "cases": 567}
,
{"name": "Jefferson", "stateid": 22, "cases": 252}
,
{"name": "East Baton Rouge", "stateid": 22, "cases": 43}
,
{"name": "Ascension", "stateid": 22, "cases": 26}
,
{"name": "Ouachita", "stateid": 22, "cases": 9}
,
{"name": "Rapides", "stateid": 22, "cases": 8}
,
{"name": "St. James", "stateid": 22, "cases": 8}
,
{"name": "West Baton Rouge", "stateid": 22, "cases": 4}
,
{"name": "Webster", "stateid": 22, "cases": 3}
,
{"name": "Washington", "stateid": 22, "cases": 2}
,
{"name": "Catahoula", "stateid": 22, "cases": 1}
,
{"name": "St. Tammany", "stateid": 22, "cases": 47}
,
{"name": "Caddo", "stateid": 22, "cases": 34}
,
{"name": "St. John the Baptist", "stateid": 22, "cases": 16}
,
{"name": "Lafourche", "stateid": 22, "cases": 15}
,
{"name": "St. Bernard", "stateid": 22, "cases": 15}
,
{"name": "St. Charles", "stateid": 22, "cases": 15}
,
{"name": "Terrebonne", "stateid": 22, "cases": 14}
,
{"name": "Bossier", "stateid": 22, "cases": 12}
,
{"name": "Parish Under Investigation", "stateid": 22, "cases": 12}
,
{"name": "Iberville", "stateid": 22, "cases": 10}
,
{"name": "Lafayette", "stateid": 22, "cases": 9}
,
{"name": "Plaquemines", "stateid": 22, "cases": 8}
,
{"name": "De Soto", "stateid": 22, "cases": 5}
,
{"name": "Livingston", "stateid": 22, "cases": 5}
,
{"name": "Calcasieu", "stateid": 22, "cases": 4}
,
{"name": "Iberia", "stateid": 22, "cases": 3}
,
{"name": "St. Landry", "stateid": 22, "cases": 3}
,
{"name": "Tangipahoa", "stateid": 22, "cases": 3}
,
{"name": "Allen", "stateid": 22, "cases": 2}
,
{"name": "Claiborne", "stateid": 22, "cases": 2}
,
{"name": "Evangeline", "stateid": 22, "cases": 2}
,
{"name": "Lincoln", "stateid": 22, "cases": 2}
,
{"name": "Natchitoches", "stateid": 22, "cases": 2}
,
{"name": "Richland", "stateid": 22, "cases": 2}
,
{"name": "Acadia", "stateid": 22, "cases": 1}
,
{"name": "Assumption", "stateid": 22, "cases": 1}
,
{"name": "Avoyelles", "stateid": 22, "cases": 1}
,
{"name": "Beauregard", "stateid": 22, "cases": 1}
,
{"name": "Bienville", "stateid": 22, "cases": 1}
,
{"name": "Grant", "stateid": 22, "cases": 1}
,
{"name": "St. Mary", "stateid": 22, "cases": 1}
,
{"name": "Caldwell", "stateid": 22, "cases": 0}
,
{"name": "Cameron", "stateid": 22, "cases": 0}
,
{"name": "Concordia", "stateid": 22, "cases": 0}
,
{"name": "East Carroll", "stateid": 22, "cases": 0}
,
{"name": "East Feliciana", "stateid": 22, "cases": 0}
,
{"name": "Franklin", "stateid": 22, "cases": 0}
,
{"name": "Jackson", "stateid": 22, "cases": 0}
,
{"name": "Jefferson Davis", "stateid": 22, "cases": 0}
,
{"name": "La Salle", "stateid": 22, "cases": 0}
,
{"name": "Madison", "stateid": 22, "cases": 0}
,
{"name": "Morehouse", "stateid": 22, "cases": 0}
,
{"name": "Pointe Coupee", "stateid": 22, "cases": 0}
,
{"name": "Red River", "stateid": 22, "cases": 0}
,
{"name": "Sabine", "stateid": 22, "cases": 0}
,
{"name": "St. Helena", "stateid": 22, "cases": 0}
,
{"name": "St. Martin", "stateid": 22, "cases": 0}
,
{"name": "Tensas", "stateid": 22, "cases": 0}
,
{"name": "Union", "stateid": 22, "cases": 0}
,
{"name": "Vermilion", "stateid": 22, "cases": 0}
,
{"name": "Vernon", "stateid": 22, "cases": 0}
,
{"name": "West Carroll", "stateid": 22, "cases": 0}
,
{"name": "West Feliciana", "stateid": 22, "cases": 0}
,
{"name": "Winn", "stateid": 22, "cases": 0}
,
{"name": "Johnson", "stateid": 19, "cases": 35}
,
{"name": "Polk", "stateid": 19, "cases": 12}
,
{"name": "Allamakee", "stateid": 19, "cases": 6}
,
{"name": "Dallas", "stateid": 19, "cases": 6}
,
{"name": "Dubuque", "stateid": 19, "cases": 6}
,
{"name": "Linn", "stateid": 19, "cases": 6}
,
{"name": "Black Hawk", "stateid": 19, "cases": 3}
,
{"name": "Harrison", "stateid": 19, "cases": 3}
,
{"name": "Muscatine", "stateid": 19, "cases": 3}
,
{"name": "Tama", "stateid": 19, "cases": 3}
,
{"name": "Washington", "stateid": 19, "cases": 3}
,
{"name": "Cerro Gordo", "stateid": 19, "cases": 2}
,
{"name": "Hancock", "stateid": 19, "cases": 2}
,
{"name": "Pottawattamie", "stateid": 19, "cases": 2}
,
{"name": "Woodbury", "stateid": 19, "cases": 2}
,
{"name": "Adair", "stateid": 19, "cases": 1}
,
{"name": "Carroll", "stateid": 19, "cases": 1}
,
{"name": "Fayette", "stateid": 19, "cases": 1}
,
{"name": "Henry", "stateid": 19, "cases": 1}
,
{"name": "Kossuth", "stateid": 19, "cases": 1}
,
{"name": "Poweshiek", "stateid": 19, "cases": 1}
,
{"name": "Scott", "stateid": 19, "cases": 1}
,
{"name": "Sioux", "stateid": 19, "cases": 1}
,
{"name": "Story", "stateid": 19, "cases": 1}
,
{"name": "Wapello", "stateid": 19, "cases": 1}
,
{"name": "Winneshiek", "stateid": 19, "cases": 1}
,
{"name": "Alachua", "stateid": 12, "cases": 36}
,
{"name": "Baker", "stateid": 12, "cases": 3}
,
{"name": "Bay", "stateid": 12, "cases": 1}
,
{"name": "Bradford", "stateid": 12, "cases": 1}
,
{"name": "Brevard", "stateid": 12, "cases": 7}
,
{"name": "Broward", "stateid": 12, "cases": 263}
,
{"name": "Calhoun", "stateid": 12, "cases": 0}
,
{"name": "Charlotte", "stateid": 12, "cases": 3}
,
{"name": "Citrus", "stateid": 12, "cases": 9}
,
{"name": "Clay", "stateid": 12, "cases": 8}
,
{"name": "Collier", "stateid": 12, "cases": 39}
,
{"name": "Columbia", "stateid": 12, "cases": 2}
,
{"name": "Dade", "stateid": 12, "cases": 278}
,
{"name": "Desoto", "stateid": 12, "cases": 1}
,
{"name": "Dixie", "stateid": 12, "cases": 0}
,
{"name": "Duval", "stateid": 12, "cases": 50}
,
{"name": "Escambia", "stateid": 12, "cases": 9}
,
{"name": "Flagler", "stateid": 12, "cases": 3}
,
{"name": "Franklin", "stateid": 12, "cases": 0}
,
{"name": "Gadsden", "stateid": 12, "cases": 1}
,
{"name": "Gilchrist", "stateid": 12, "cases": 0}
,
{"name": "Glades", "stateid": 12, "cases": 0}
,
{"name": "Gulf", "stateid": 12, "cases": 0}
,
{"name": "Hamilton", "stateid": 12, "cases": 0}
,
{"name": "Hardee", "stateid": 12, "cases": 0}
,
{"name": "Hendry", "stateid": 12, "cases": 0}
,
{"name": "Hernando", "stateid": 12, "cases": 5}
,
{"name": "Highlands", "stateid": 12, "cases": 2}
,
{"name": "Hillsborough", "stateid": 12, "cases": 75}
,
{"name": "Holmes", "stateid": 12, "cases": 0}
,
{"name": "Indian River", "stateid": 12, "cases": 10}
,
{"name": "Jackson", "stateid": 12, "cases": 1}
,
{"name": "Jefferson", "stateid": 12, "cases": 0}
,
{"name": "Lafayette", "stateid": 12, "cases": 0}
,
{"name": "Lake", "stateid": 12, "cases": 9}
,
{"name": "Lee", "stateid": 12, "cases": 30}
,
{"name": "Leon", "stateid": 12, "cases": 6}
,
{"name": "Levy", "stateid": 12, "cases": 0}
,
{"name": "Liberty", "stateid": 12, "cases": 0}
,
{"name": "Madison", "stateid": 12, "cases": 0}
,
{"name": "Manatee", "stateid": 12, "cases": 15}
,
{"name": "Marion", "stateid": 12, "cases": 4}
,
{"name": "Martin", "stateid": 12, "cases": 4}
,
{"name": "Monroe", "stateid": 12, "cases": 2}
,
{"name": "Nassau", "stateid": 12, "cases": 1}
,
{"name": "Okaloosa", "stateid": 12, "cases": 14}
,
{"name": "Okeechobee", "stateid": 12, "cases": 0}
,
{"name": "Orange", "stateid": 12, "cases": 48}
,
{"name": "Osceola", "stateid": 12, "cases": 25}
,
{"name": "Palm Beach", "stateid": 12, "cases": 89}
,
{"name": "Pasco", "stateid": 12, "cases": 14}
,
{"name": "Pinellas", "stateid": 12, "cases": 41}
,
{"name": "Polk", "stateid": 12, "cases": 13}
,
{"name": "Putnam", "stateid": 12, "cases": 2}
,
{"name": "Santa Rosa", "stateid": 12, "cases": 4}
,
{"name": "Sarasota", "stateid": 12, "cases": 21}
,
{"name": "Seminole", "stateid": 12, "cases": 22}
,
{"name": "St. Johns", "stateid": 12, "cases": 18}
,
{"name": "St. Lucie", "stateid": 12, "cases": 5}
,
{"name": "Sumter", "stateid": 12, "cases": 8}
,
{"name": "Suwannee", "stateid": 12, "cases": 0}
,
{"name": "Taylor", "stateid": 12, "cases": 0}
,
{"name": "Union", "stateid": 12, "cases": 0}
,
{"name": "Unknown", "stateid": 12, "cases": 0}
,
{"name": "Volusia", "stateid": 12, "cases": 16}
,
{"name": "Wakulla", "stateid": 12, "cases": 0}
,
{"name": "Walton", "stateid": 12, "cases": 9}
,
{"name": "Washington", "stateid": 12, "cases": 0}
,
{"name": "Baldwin", "stateid": 1, "cases": 3}
,
{"name": "Calhoun", "stateid": 1, "cases": 2}
,
{"name": "Chambers", "stateid": 1, "cases": 2}
,
{"name": "Cullman", "stateid": 1, "cases": 2}
,
{"name": "Elmore", "stateid": 1, "cases": 6}
,
{"name": "Franklin", "stateid": 1, "cases": 1}
,
{"name": "Houston", "stateid": 1, "cases": 1}
,
{"name": "Jackson", "stateid": 1, "cases": 1}
,
{"name": "Jefferson", "stateid": 1, "cases": 86}
,
{"name": "Lamar", "stateid": 1, "cases": 1}
,
{"name": "Lauderdale", "stateid": 1, "cases": 3}
,
{"name": "Lee", "stateid": 1, "cases": 19}
,
{"name": "Limestone", "stateid": 1, "cases": 1}
,
{"name": "Madison", "stateid": 1, "cases": 21}
,
{"name": "Marion", "stateid": 1, "cases": 1}
,
{"name": "Mobile", "stateid": 1, "cases": 2}
,
{"name": "Montgomery", "stateid": 1, "cases": 4}
,
{"name": "St. Clair", "stateid": 1, "cases": 3}
,
{"name": "Shelby", "stateid": 1, "cases": 22}
,
{"name": "Talladega", "stateid": 1, "cases": 1}
,
{"name": "Tallapoosa", "stateid": 1, "cases": 1}
,
{"name": "Tuscaloosa", "stateid": 1, "cases": 9}
,
{"name": "Walker", "stateid": 1, "cases": 3}
,
{"name": "Washington", "stateid": 1, "cases": 1}
,
{"name": "Fulton", "stateid": 13,"cases": 145}
,
{"name": "Cobb", "stateid": 13,"cases": 79}
,
{"name": "Dekalb", "stateid": 13,"cases": 75}
,
{"name": "Dougherty", "stateid": 13,"cases": 64}
,
{"name": "Bartow", "stateid": 13,"cases": 61}
,
{"name": "Gwinnett", "stateid": 13,"cases": 34}
,
{"name": "Carroll", "stateid": 13,"cases": 21}
,
{"name": "Cherokee", "stateid": 13,"cases": 20}
,
{"name": "Clayton", "stateid": 13,"cases": 18}
,
{"name": "Lee", "stateid": 13,"cases": 16}
,
{"name": "Clarke", "stateid": 13,"cases": 14}
,
{"name": "Richmond", "stateid": 13,"cases": 11}
,
{"name": "Fayette", "stateid": 13,"cases": 10}
,
{"name": "Floyd", "stateid": 13,"cases": 10}
,
{"name": "Hall", "stateid": 13,"cases": 10}
,
{"name": "Coweta", "stateid": 13,"cases": 9}
,
{"name": "Henry", "stateid": 13,"cases": 9}
,
{"name": "Lowndes", "stateid": 13,"cases": 8}
,
{"name": "Douglas", "stateid": 13,"cases": 7}
,
{"name": "Forsyth", "stateid": 13,"cases": 7}
,
{"name": "Gordon", "stateid": 13,"cases": 5}
,
{"name": "Paulding", "stateid": 13,"cases": 5}
,
{"name": "Chatham", "stateid": 13,"cases": 4}
,
{"name": "Glynn", "stateid": 13,"cases": 4}
,
{"name": "Newton", "stateid": 13,"cases": 4}
,
{"name": "Polk", "stateid": 13,"cases": 4}
,
{"name": "Rockdale", "stateid": 13,"cases": 4}
,
{"name": "Spalding", "stateid": 13,"cases": 4}
,
{"name": "Troup", "stateid": 13,"cases": 4}
,
{"name": "Columbia", "stateid": 13,"cases": 3}
,
{"name": "Lamar", "stateid": 13,"cases": 3}
,
{"name": "Oconee", "stateid": 13,"cases": 3}
,
{"name": "Peach", "stateid": 13,"cases": 3}
,
{"name": "Worth", "stateid": 13,"cases": 3}
,
{"name": "Baldwin", "stateid": 13,"cases": 2}
,
{"name": "Bibb", "stateid": 13,"cases": 2}
,
{"name": "Butts", "stateid": 13,"cases": 2}
,
{"name": "Early", "stateid": 13,"cases": 2}
,
{"name": "Effingham", "stateid": 13,"cases": 2}
,
{"name": "Laurens", "stateid": 13,"cases": 2}
,
{"name": "Lumpkin", "stateid": 13,"cases": 2}
,
{"name": "Muscogee", "stateid": 13,"cases": 2}
,
{"name": "Pickens", "stateid": 13,"cases": 2}
,
{"name": "Sumter", "stateid": 13,"cases": 2}
,
{"name": "Terrell", "stateid": 13,"cases": 2}
,
{"name": "Tift", "stateid": 13,"cases": 2}
,
{"name": "Whitfield", "stateid": 13,"cases": 2}
,
{"name": "Barrow", "stateid": 13,"cases": 1}
,
{"name": "Catoosa", "stateid": 13,"cases": 1}
,
{"name": "Charlton", "stateid": 13,"cases": 1}
,
{"name": "Chattooga", "stateid": 13,"cases": 1}
,
{"name": "Clinch", "stateid": 13,"cases": 1}
,
{"name": "Coffee", "stateid": 13,"cases": 1}
,
{"name": "Dawson", "stateid": 13,"cases": 1}
,
{"name": "Heard", "stateid": 13,"cases": 1}
,
{"name": "Houston", "stateid": 13,"cases": 1}
,
{"name": "Lincoln", "stateid": 13,"cases": 1}
,
{"name": "Madison", "stateid": 13,"cases": 1}
,
{"name": "Miller", "stateid": 13,"cases": 1}
,
{"name": "Monroe", "stateid": 13,"cases": 1}
,
{"name": "Morgan", "stateid": 13,"cases": 1}
,
{"name": "Pierce", "stateid": 13,"cases": 1}
,
{"name": "Randolph", "stateid": 13,"cases": 1}
,
{"name": "Tattnall", "stateid": 13,"cases": 1}
,
{"name": "Turner", "stateid": 13,"cases": 1}
,
{"name": "Twiggs", "stateid": 13,"cases": 1}
,
{"name": "Washington", "stateid": 13,"cases": 1}
,
{"name": "Adams", "stateid": 28, "cases": 2}
,
{"name": "Attala", "stateid": 28, "cases": 1}
,
{"name": "Bolivar", "stateid": 28, "cases": 4}
,
{"name": "Chickasaw", "stateid": 28, "cases": 3}
,
{"name": "Clay", "stateid": 28, "cases": 1}
,
{"name": "Coahoma", "stateid": 28, "cases": 8}
,
{"name": "Copiah", "stateid": 28, "cases": 4}
,
{"name": "De Soto", "stateid": 28, "cases": 23}
,
{"name": "Forrest", "stateid": 28, "cases": 11}
,
{"name": "Franklin", "stateid": 28, "cases": 3}
,
{"name": "George", "stateid": 28, "cases": 1}
,
{"name": "Grenada", "stateid": 28, "cases": 2}
,
{"name": "Hancock", "stateid": 28, "cases": 4}
,
{"name": "Harrison", "stateid": 28, "cases": 21}
,
{"name": "Hinds", "stateid": 28, "cases": 24}
,
{"name": "Holmes", "stateid": 28, "cases": 6}
,
{"name": "Humphreys", "stateid": 28, "cases": 1}
,
{"name": "Itawamba", "stateid": 28, "cases": 3}
,
{"name": "Jackson", "stateid": 28, "cases": 7}
,
{"name": "Jones", "stateid": 28, "cases": 1}
,
{"name": "Lafayette", "stateid": 28, "cases": 5}
,
{"name": "Lamar", "stateid": 28, "cases": 1}
,
{"name": "Lawrence", "stateid": 28, "cases": 2}
,
{"name": "Leake", "stateid": 28, "cases": 1}
,
{"name": "Lee", "stateid": 28, "cases": 8}
,
{"name": "Leflore", "stateid": 28, "cases": 9}
,
{"name": "Lincoln", "stateid": 28, "cases": 4}
,
{"name": "Lowndes", "stateid": 28, "cases": 6}
,
{"name": "Madison", "stateid": 28, "cases": 11}
,
{"name": "Marion", "stateid": 28, "cases": 1}
,
{"name": "Marshall", "stateid": 28, "cases": 3}
,
{"name": "Monroe", "stateid": 28, "cases": 2}
,
{"name": "Montgomery", "stateid": 28, "cases": 1}
,
{"name": "Oktibbeha", "stateid": 28, "cases": 5}
,
{"name": "Panola", "stateid": 28, "cases": 2}
,
{"name": "Pearl River", "stateid": 28, "cases": 12}
,
{"name": "Perry", "stateid": 28, "cases": 1}
,
{"name": "Pike", "stateid": 28, "cases": 4}
,
{"name": "Pontotoc", "stateid": 28, "cases": 1}
,
{"name": "Rankin", "stateid": 28, "cases": 8}
,
{"name": "Scott", "stateid": 28, "cases": 1}
,
{"name": "Simpson", "stateid": 28, "cases": 1}
,
{"name": "Smith", "stateid": 28, "cases": 1}
,
{"name": "Sunflower", "stateid": 28, "cases": 2}
,
{"name": "Tallahatchie", "stateid": 28, "cases": 1}
,
{"name": "Tate", "stateid": 28, "cases": 1}
,
{"name": "Tippah", "stateid": 28, "cases": 9}
,
{"name": "Tunica", "stateid": 28, "cases": 2}
,
{"name": "Union", "stateid": 28, "cases": 1}
,
{"name": "Walthall", "stateid": 28, "cases": 2}
,
{"name": "Washington", "stateid": 28, "cases": 4}
,
{"name": "Webster", "stateid": 28, "cases": 1}
,
{"name": "Wilkinson", "stateid": 28, "cases": 3}
,
{"name": "Winston", "stateid": 28, "cases": 2}
,
{"name": "Yazoo", "stateid": 28, "cases": 1}
,
{"name": "Anderson", "stateid": 47,"cases": 1}
,
{"name": "Blount", "stateid": 47,"cases": 2}
,
{"name": "Bradley", "stateid": 47,"cases": 1}
,
{"name": "Campbell", "stateid": 47,"cases": 2}
,
{"name": "Carroll", "stateid": 47,"cases": 2}
,
{"name": "Cheatham", "stateid": 47,"cases": 4}
,
{"name": "Chester", "stateid": 47,"cases": 1}
,
{"name": "Claiborne", "stateid": 47,"cases": 1}
,
{"name": "Cocke", "stateid": 47,"cases": 1}
,
{"name": "Cumberland", "stateid": 47,"cases": 2}
,
{"name": "Davidson", "stateid": 47,"cases": 164}
,
{"name": "Dekalb", "stateid": 47,"cases": 1}
,
{"name": "Dickson", "stateid": 47,"cases": 5}
,
{"name": "Dyer", "stateid": 47,"cases": 2}
,
{"name": "Fayette", "stateid": 47,"cases": 2}
,
{"name": "Franklin", "stateid": 47,"cases": 1}
,
{"name": "Gibson", "stateid": 47,"cases": 1}
,
{"name": "Greene", "stateid": 47,"cases": 4}
,
{"name": "Hamblen", "stateid": 47,"cases": 3}
,
{"name": "Hamilton", "stateid": 47,"cases": 12}
,
{"name": "Hardin", "stateid": 47,"cases": 1}
,
{"name": "Houston", "stateid": 47,"cases": 1}
,
{"name": "Jefferson", "stateid": 47,"cases": 3}
,
{"name": "Knox", "stateid": 47,"cases": 12}
,
{"name": "Lincoln", "stateid": 47,"cases": 1}
,
{"name": "Loudon", "stateid": 47,"cases": 1}
,
{"name": "Marion", "stateid": 47,"cases": 1}
,
{"name": "Maury", "stateid": 47,"cases": 6}
,
{"name": "McMinn", "stateid": 47,"cases": 2}
,
{"name": "Monroe", "stateid": 47,"cases": 2}
,
{"name": "Montgomery", "stateid": 47,"cases": 3}
,
{"name": "Perry", "stateid": 47,"cases": 2}
,
{"name": "Putnam", "stateid": 47,"cases": 6}
,
{"name": "Roane", "stateid": 47,"cases": 1}
,
{"name": "Robertson", "stateid": 47,"cases": 6}
,
{"name": "Rutherford", "stateid": 47,"cases": 9}
,
{"name": "Scott", "stateid": 47,"cases": 1}
,
{"name": "Sevier", "stateid": 47,"cases": 1}
,
{"name": "Shelby", "stateid": 47,"cases": 93}
,
{"name": "Sullivan", "stateid": 47,"cases": 2}
,
{"name": "Sumner", "stateid": 47,"cases": 34}
,
{"name": "Tipton", "stateid": 47,"cases": 6}
,
{"name": "Washington", "stateid": 47,"cases": 6}
,
{"name": "Weakley", "stateid": 47,"cases": 1}
,
{"name": "Williamson", "stateid": 47,"cases": 53}
,
{"name": "Wilson", "stateid": 47,"cases": 6}
,
{"name": "Out of TN", "stateid": 47,"cases": 89}
,
{"name": "Guilford", "stateid": 37, "cases": 11}
,
{"name": "Alamance", "stateid": 37, "cases": 3}
,
{"name": "Randolph", "stateid": 37, "cases": 1}
,
{"name": "Wayne", "stateid": 37, "cases": 1}
,
{"name": "Vance", "stateid": 37, "cases": 1}
,
{"name": "Granville", "stateid": 37, "cases": 1}
,
{"name": "Pasquotank", "stateid": 37, "cases": 1}
,
{"name": "Watauga", "stateid": 37, "cases": 2}
,
{"name": "Forsyth", "stateid": 37, "cases": 12}
,
{"name": "Franklin", "stateid": 37, "cases": 4}
,
{"name": "Orange", "stateid": 37, "cases": 6}
,
{"name": "Durham", "stateid": 37, "cases": 40}
,
{"name": "Nash", "stateid": 37, "cases": 1}
,
{"name": "Wake", "stateid": 37, "cases": 46}
,
{"name": "Davie", "stateid": 37, "cases": 1}
,
{"name": "Davidson", "stateid": 37, "cases": 2}
,
{"name": "Chatham", "stateid": 37, "cases": 3}
,
{"name": "Wilson", "stateid": 37, "cases": 3}
,
{"name": "Buncombe", "stateid": 37, "cases": 1}
,
{"name": "Catawba", "stateid": 37, "cases": 1}
,
{"name": "Pitt", "stateid": 37, "cases": 3}
,
{"name": "Johnston", "stateid": 37, "cases": 3}
,
{"name": "Lee", "stateid": 37, "cases": 1}
,
{"name": "Harnett", "stateid": 37, "cases": 9}
,
{"name": "Henderson", "stateid": 37, "cases": 1}
,
{"name": "Moore", "stateid": 37, "cases": 2}
,
{"name": "Montgomery", "stateid": 37, "cases": 1}
,
{"name": "Craven", "stateid": 37, "cases": 2}
,
{"name": "Cherokee", "stateid": 37, "cases": 4}
,
{"name": "Sampson", "stateid": 37, "cases": 1}
,
{"name": "Cumberland", "stateid": 37, "cases": 2}
,
{"name": "Carteret", "stateid": 37, "cases": 4}
,
{"name": "Union", "stateid": 37, "cases": 12}
,
{"name": "Hoke", "stateid": 37, "cases": 1}
,
{"name": "Scotland", "stateid": 37, "cases": 1}
,
{"name": "Onslow", "stateid": 37, "cases": 1}
,
{"name": "Robeson", "stateid": 37, "cases": 1}
,
{"name": "New Hanover", "stateid": 37, "cases": 4}
,
{"name": "Brunswick", "stateid": 37, "cases": 5}
,
{"name": "Iredell", "stateid": 37, "cases": 6}
,
{"name": "Rowan", "stateid": 37, "cases": 2}
,
{"name": "Lincoln", "stateid": 37, "cases": 1}
,
{"name": "Mecklenburg", "stateid": 37, "cases": 79}
,
{"name": "Cabarrus", "stateid": 37, "cases": 6}
,
{"name": "Gaston", "stateid": 37, "cases": 4}
,
{"name": "Abbeville", "stateid": 45, "cases": 1}
,
{"name": "Aiken", "stateid": 45, "cases": 1}
,
{"name": "Anderson", "stateid": 45, "cases": 15}
,
{"name": "Beaufort", "stateid": 45, "cases": 21}
,
{"name": "Berkeley", "stateid": 45, "cases": 4}
,
{"name": "Calhoun", "stateid": 45, "cases": 1}
,
{"name": "Charleston", "stateid": 45, "cases": 31}
,
{"name": "Chester", "stateid": 45, "cases": 1}
,
{"name": "Clarendon", "stateid": 45, "cases": 4}
,
{"name": "Colleton", "stateid": 45, "cases": 1}
,
{"name": "Darlington", "stateid": 45, "cases": 7}
,
{"name": "Dillon", "stateid": 45, "cases": 1}
,
{"name": "Dorchester", "stateid": 45, "cases": 2}
,
{"name": "Edgefield", "stateid": 45, "cases": 1}
,
{"name": "Fairfield", "stateid": 45, "cases": 2}
,
{"name": "Florence", "stateid": 45, "cases": 3}
,
{"name": "Georgetown", "stateid": 45, "cases": 2}
,
{"name": "Greenville", "stateid": 45, "cases": 31}
,
{"name": "Greenwood", "stateid": 45, "cases": 2}
,
{"name": "Horry", "stateid": 45, "cases": 16}
,
{"name": "Jasper", "stateid": 45, "cases": 1}
,
{"name": "Kershaw", "stateid": 45, "cases": 54}
,
{"name": "Lancaster", "stateid": 45, "cases": 7}
,
{"name": "Lee", "stateid": 45, "cases": 2}
,
{"name": "Lexington", "stateid": 45, "cases": 17}
,
{"name": "Newberry", "stateid": 45, "cases": 1}
,
{"name": "Oconee", "stateid": 45, "cases": 2}
,
{"name": "Orangeburg", "stateid": 45, "cases": 8}
,
{"name": "Pickens", "stateid": 45, "cases": 1}
,
{"name": "Richland", "stateid": 45, "cases": 43}
,
{"name": "Saluda", "stateid": 45, "cases": 1}
,
{"name": "Spartanburg", "stateid": 45, "cases": 3}
,
{"name": "Sumter", "stateid": 45, "cases": 4}
,
{"name": "York", "stateid": 45, "cases": 7}
]}