(function($) {
	'use strict';

	function ProcChain() {
		
		var _chainList = [];
		var _index = 0;
		var _isPlay = false;

		this.add = function (chainList) {
			if( $.isArray(chainList) )
				_chainList = chainList;
		};

		this.start = function () {
			_isPlay = true;
		};

		this.pause = function () {
			_isPlay = false;
		};

		this.stop = function () {
			_isPlay = false;
			_index = 0;
		};

	}

	window.ProcChain = ProcChain;

})(jQuery);
