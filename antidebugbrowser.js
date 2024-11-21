document.addEventListener('DOMContentLoaded', function() {
		function disableCtrlKeyCombination(e) {
			let forbiddenKeys = ['a', 'x', 'u'];
			let key = e.keyCode || e.which;
			let isCtrl = e.ctrlKey || e.metaKey; // Also handle metaKey for Mac
	
			if (isCtrl) {
				for (let i = 0; i < forbiddenKeys.length; i++) {
					if (forbiddenKeys[i].toLowerCase() === String.fromCharCode(key).toLowerCase()) {
						e.preventDefault();
						return false;
					}
				}
			}
			return true;
		}
	
		document.addEventListener('keydown', function (event) {
			if (event.keyCode === 123) {
				event.preventDefault();
			} else if ((event.ctrlKey && event.shiftKey && event.keyCode === 67) ||
				(event.ctrlKey && event.shiftKey && event.keyCode === 73) ||
				(event.ctrlKey && event.shiftKey && event.keyCode === 74)) {
				event.preventDefault();
			}
		});
	
		(() => {
			let a, b;
			(a = () => {
				try {
					if (!localStorage.getItem('BROWSE_VERSION')) {
						(b = (i) => {
							if (('' + (i / i)).length !== 1 || i % 20 === 0) {
								(() => {}).constructor('debugger')()
							} else {
								debugger
							}
							b(++i)
						})(0)
					}
				} catch (e) {
					setTimeout(a, 2000)
				}
			})()
		})();
	
		window.oncontextmenu = function(event) {
			event.preventDefault();
			return false;
		};
	
		document.onkeydown = function(e) {
			if (e.keyCode == 123 || e.button == 2) {
				e.preventDefault();
				return false;
			}
		};
	});
