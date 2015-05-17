export default {
	isMobile() {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	},
	propValueToCssFormat(prop, val) {
		switch (prop){
			case 'scale':
				return 'scale('+val+')';
			case 'rotate':
				return 'rotate('+val+'deg)';
			case 'translate3d':
				return 'translate3d(' + 
					(val.x ? val.x+'px' : 0)+','+
					(val.y ? val.y+'px' : 0)+','+
					(val.z ? val.z+'px' : 0)+')';
			case 'rotate3d':
				return 'rotate3d(' + 
					(val.x ? val.x : 0)+','+
					(val.y ? val.y : 0)+','+
					(val.z ? val.z : 0)+','+
					(val.angle ? val.angle+'deg' : 0)+')';
			default:
				return val;
		}
	}
};