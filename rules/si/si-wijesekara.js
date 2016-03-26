( function ( $ ) {
	'use strict';

	var siWijesekara = {
		id: 'si-wijesekara',
		name: 'Sinhalese Wijesekara',
		description: 'Wijesekara layout for Sinhalese',
		date: '2012-10-16',
		URL: 'http://www.ucsc.lk/ltrl/services/layout/',
		author: 'Junaid P V',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 0,
		maxKeyLength: 2,
		patterns: [
			[ '`', '\u0DCA\u200D\u0DBB' ],
			[ '~', '\u0DBB\u0DCA\u200D' ],
			[ 'q', 'ු' ],
			[ 'w', 'අ' ],
			[ 'අe', 'ඇ' ],
			[ 'e', 'ැ' ],
			[ 'r', 'ර' ],
			[ 'ෙt', 'ඓ' ],
			[ 't', 'එ' ],
			[ 'y', 'හ' ],
			[ 'u', 'ම' ],
			[ 'i', 'ස' ],
			[ 'o', 'ද' ],
			[ 'p', 'ච' ],
			[ '\\[', 'ඤ' ],
			[ '\\]', ';' ],
			[ 'එa', 'ඒ' ],
			[ 'ඔa', 'ඕ' ],
			[ 'a', '්' ],
			[ 's', 'ි' ],
			[ 'අd', 'ආ' ],
			[ 'd', 'ා' ],
			[ 'f', 'ෙ' ],
			[ 'g', 'ට' ],
			[ 'h', 'ය' ],
			[ 'j', 'ව' ],
			[ 'k', 'න' ],
			[ 'l', 'ක' ],
			[ ';', 'ත' ],
			[ '\'', '.' ],
			[ 'z', '\'' ],
			[ 'x', 'ං' ],
			[ 'c', 'ජ' ],
			[ 'v', 'ඩ' ],
			[ 'b', 'ඉ' ],
			[ 'n', 'බ' ],
			[ 'm', 'ප' ],
			[ '\\,', 'ල' ],
			[ '\\.', 'ග' ],

			[ 'Q', 'ූ' ],
			[ 'W', 'උ' ],
			[ 'අE', 'ඈ' ],
			[ 'E', 'ෑ' ],
			[ 'R', 'ඍ' ],
			[ 'T', 'ඔ' ],
			[ 'Y', 'ශ' ],
			[ 'U', 'ඹ' ],
			[ 'I', 'ෂ' ],
			[ 'O', 'ධ' ],
			[ 'P', 'ඡ' ],
			[ '\\{', 'ඥ' ],
			[ '\\}', ':' ],
			[ 'උA', 'ඌ' ],
			[ 'ඏA', 'ඐ' ],
			[ 'ඔA', 'ඖ' ],
			[ 'A', 'ෟ' ],
			[ 'S', 'ී' ],
			[ 'ඍD', 'ඎ' ],
			[ 'ෘD', 'ෲ' ],
			[ 'D', 'ෘ' ],
			[ 'F', 'ෆ' ],
			[ 'G', 'ඨ' ],
			[ 'H', 'ය' ],
			[ 'J', 'ළ' ],
			[ 'K', 'ණ' ],
			[ 'L', 'ඛ' ],
			[ '\\:', 'ථ' ],
			[ '\"', ',' ],
			[ 'Z', '"' ],
			[ 'X', 'ඃ' ],
			[ 'C', 'ඣ' ],
			[ 'V', 'ඪ' ],
			[ 'B', 'ඊ' ],
			[ 'N', 'භ' ],
			[ 'M', 'ඵ' ],
			[ '\\<', 'ළ' ],
			[ '\\>', 'ඝ' ] ],
		patterns_x: [
			[ 'o', 'ඳ' ],
			[ 'v', 'ඬ' ],
			[ '\'', '෴' ],
			[ 'a', 'ෳ' ],
			[ '\\.', 'ඟ' ],
			[ 'x', 'ඦ' ],
			[ ',', 'ඏ' ] ]
	};

	$.ime.register( siWijesekara );
}( jQuery ) );
