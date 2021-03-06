/* ------------------------------------------------------------------
* EOJX2: Class Name
* ---------------------------------------------------------------- */
module.exports = {
	0x00: { // Sensor-related device class group
		0x01: 'Gas leak sensor class',
		0x02: 'Crime prevention sensor class',
		0x03: 'Emergency button class',
		0x04: 'First-aid sensor class',
		0x05: 'Earthquake sensor class',
		0x06: 'Electric leak sensor class',
		0x07: 'Human detection sensor class',
		0x08: 'Visitor sensor class',
		0x09: 'Call sensor class',
		0x0A: 'Condensation sensor class',
		0x0B: 'Air pollution sensor class',
		0x0C: 'Oxygen sensor class',
		0x0D: 'Illuminance sensor class',
		0x0E: 'Sound sensor class',
		0x0F: 'Mailing sensor class',
		0x10: 'Weight sensor class',
		0x11: 'Temperature sensor class',
		0x12: 'Humidity sensor class',
		0x13: 'Rain sensor class',
		0x14: 'Water level sensor class',
		0x15: 'Bath water level sensor class',
		0x16: 'Bath heating status sensor class',
		0x17: 'Water leak sensor class',
		0x18: 'Water overflow sensor class',
		0x19: 'Fire sensor class',
		0x1A: 'Cigarette smoke sensor class',
		0x1B: 'CO2 sensor class',
		0x1C: 'Gas sensor class',
		0x1D: 'VOC sensor class',
		0x1E: 'Differential pressure sensor class',
		0x1F: 'Air speed sensor class',
		0x20: 'Odor sensor class',
		0x21: 'Flame sensor class',
		0x22: 'Electric energy sensor class',
		0x23: 'Current value sensor class',
		0x24: 'Daylight sensor class',
		0x25: 'Water flow rate sensor class',
		0x26: 'Micromotion sensor class',
		0x27: 'Passage sensor class',
		0x28: 'Bed presence sensor class',
		0x29: 'Open/close sensor class',
		0x2A: 'Activity amount sensor class',
		0x2B: 'Human body location sensor',
		0x2C: 'Snow sensor class',
		0x2D: 'Air pressure sensor class'
	},
	0x01: { // Air conditioner-related device class group
		0x30: 'Home air conditioner class',
		0x31: 'Cold blaster class',
		0x32: 'Electric fan class',
		0x33: 'Ventilation fan class',
		0x34: 'Air conditioner ventilation fan class',
		0x35: 'Air cleaner class',
		0x36: 'Cold blast fan class',
		0x37: 'Circulator class',
		0x38: 'Dehumidifier class',
		0x39: 'Humidifier class',
		0x3A: 'Ceiling fan class',
		0x3B: 'Electric Kotatsu class',
		0x3C: 'Electric heating pad class',
		0x3D: 'Electric blanket class',
		0x3E: 'Space heater class',
		0x3F: 'Panel heater class',
		0x40: 'Electric carpet class',
		0x41: 'Floor heater class',
		0x42: 'Electric heater class',
		0x43: 'Fan heater class',
		0x44: 'Battery charger class',
		0x45: 'Package-type commercial air conditioner (indoor unit) class',
		0x46: 'Package-type commercial air conditioner (outdoor unit) class',
		0x47: 'Package-type commercial air conditioner thermal storage unit class',
		0x48: 'Commercial fan coil unit class',
		0x49: 'Commercial air conditioner cold source (chiller) class',
		0x50: 'Commercial air conditioning hot source (boiler) class',
		0x51: 'Air-conditioning VAV for commercial applications class',
		0x52: 'Air handling unit (air-conditioning) for commercial applications class',
		0x53: 'Unit-cooler class',
		0x54: 'Condensing unit for commercial applications class',
		0x55: 'Electric storage heater class'
	},
	0x02: { // Housing/facility-related device class group
		0x60: 'Electrically operated blind/shade class',
		0x61: 'Electrically operated shutter class',
		0x62: 'Electrically operated curtain class',
		0x63: 'Electrically operated rain sliding door/shutter class',
		0x64: 'Electrically operated gate class',
		0x65: 'Electrically operated window class',
		0x66: 'Automatically operated entrance door/sliding door class',
		0x67: 'Garden sprinkler class',
		0x68: 'Fire sprinkler class',
		0x69: 'Fountain',
		0x6A: 'Instantaneous water heater class',
		0x6B: 'Electric water heater class',
		0x6C: 'Solar water heater class',
		0x6D: 'Circulation pump class',
		0x6E: 'Bidet-equipped toilet (with electrically warmed seat) class',
		0x6F: 'Electric lock class',
		0x70: 'Gas line valve class',
		0x71: 'Home sauna class',
		0x72: 'Hot water generator class',
		0x73: 'Bathroom dryer class',
		0x74: 'Home elevator class',
		0x75: 'Electrically operated room divider class',
		0x76: 'Horizontal transfer class',
		0x77: 'Electrically operated clothes-drying pole class',
		0x78: 'Septic tank class',
		0x79: 'Home solar power generation class',
		0x7A: 'Cold/hot water heat source equipment class',
		0x7B: 'Floor heater class',
		0x7C: 'Fuel cell class',
		0x7D: 'Storage battery class',
		0x7E: 'Electric vehicle charger/discharger class',
		0x7F: 'Engine cogeneration class',
		0x80: 'Electric energy meter class',
		0x81: 'Water flow meter class',
		0x82: 'Gas meter class',
		0x83: 'LP gas meter class',
		0x84: 'Clock class',
		0x85: 'Automatic door class',
		0x86: 'Commercial elevator class',
		0x87: 'Distribution panel metering class',
		0x88: 'Low voltage smart electric energy meter class',
		0x89: 'Smart gas meter class',
		0x8A: 'High voltage smart electric energy meter class',
		0x90: 'General lighting class class',
		0x91: 'Single function lighting class',
		0x99: 'Emergency lighting class',
		0x9D: 'Equipment light class',
		0xA0: 'Buzzer class'
	},
	0x03: { // Cooking/housework-related device class group
		0xB0: 'Coffee machine class',
		0xB1: 'Coffee mill class',
		0xB2: 'Electric hot water pot (Electric thermos) class',
		0xB3: 'Electric stove class',
		0xB4: 'Toaster class',
		0xB5: 'Juicer, food mixer class',
		0xB6: 'Food processor class',
		0xB7: 'Refrigerator class',
		0xB8: 'Combination microwave oven (Electronic oven) class',
		0xB9: 'Cooking heater class',
		0xBA: 'Oven class',
		0xBB: 'Raice cooker class',
		0xBC: 'Electronic jar class',
		0xBD: 'Dish washer class',
		0xBE: 'Dish dryer class',
		0xBF: 'Electric rice card cooker class',
		0xC0: 'Keep-warm machine class',
		0xC1: 'Race mill class',
		0xC2: 'Automatic bread cooker class',
		0xC3: 'Slow cooker class',
		0xC4: 'Electric pickles cooker class',
		0xC5: 'Washing machine class',
		0xC6: 'Clothes dryer class',
		0xC7: 'Electric iron class',
		0xC8: 'Trouser press class',
		0xC9: 'Futon dryer class',
		0xCA: 'Small article, shoes dryer class',
		0xCB: 'Electric vacuum cleaner (including central vacuum cleaner) class',
		0xCC: 'Disposer class',
		0xCD: 'Electric mosquito catcher class',
		0xCE: 'Commercial show case class',
		0xCF: 'Commercial refrigerator class',
		0xD0: 'Commercial hot case class',
		0xD1: 'Commercial fryer class',
		0xD2: 'Commercial microwave oven class',
		0xD3: 'Washer and dryer class',
		0xD4: 'Commercial show case outdoor unit class'
	},
	0x04: { // Health-related device class group
		0x01: 'Weighing machine class',
		0x02: 'Clinical thermometer class',
		0x03: 'Blood pressure meter class',
		0x04: 'Blood suger meter class',
		0x05: 'Body fat meter class',
	},
	0x05: { // Management/control-related device class group
		0xFC: 'Secure communication shared key setup node class',
		0xFD: 'Switch (supporting JEM-A/HA terminals) class',
		0xFE: 'Portable (mobile) terminal class',
		0xFF: 'Controller class'
	},
	0x06: { // AV-related device class group
		0x01: 'Display class',
		0x02: 'Television class',
		0x03: 'Audio class',
		0x04: 'Network camera class'
	},
	0x0E: { // Profile class group
		0xF0: 'Node profile class'
	}
};