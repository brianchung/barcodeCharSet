function barcodeCharSet(event){
	var iKeyCode = (event.which) ? event.which : event.keyCode; // get keycode value
	var isShift = event.shiftKey; // detect if shift key pressed

    if(isShift){
	    switch(iKeyCode){
	      	case 52:
	       	case 53:
	       	case 56:
			case 65:
		    case 66:
		    case 67:
		    case 68: 	
		    case 69:
		    case 70:
		    case 71:
		    case 72:
		    case 73:
		    case 74:
		    case 75:
		    case 76:
		    case 77:
		    case 78:
		    case 79:
		    case 80:
		    case 81:
		    case 82:
		    case 83:
		    case 84:
		    case 85:
		    case 86:
		    case 87:
		    case 88:
		    case 89:
		    case 90:
	       	case 187:
	            return true;
	       	default:
	            return false;
	    }
	}
	else{
	   	switch(iKeyCode){
	       	case 8: 
	       	case 32:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 65:
		    case 66:
		    case 67:
		    case 68: 	
		    case 69:
		    case 70:
		    case 71:
		    case 72:
		    case 73:
		    case 74:
		    case 75:
		    case 76:
		    case 77:
		    case 78:
		    case 79:
		    case 80:
		    case 81:
		    case 82:
		    case 83:
		    case 84:
		    case 85:
		    case 86:
		    case 87:
		    case 88:
		    case 89:
		    case 90:
	        case 189:
	        case 190:
	        case 191:
	           	return true;
	        default:
	            return false;
	    }
	}
}
 
 // list of code39 characters:  http://www.azalea.com/code-39/character-set/
 // javascripts keycodes: http://www.cambiaresearch.com/articles/15/javascript-key-codes
 // code 39 wiki: https://en.wikipedia.org/wiki/Code_39
 
 // example:
 // <input type="text" name="text" value="" onkeypress="javascript:return barcodeCharSet(event)">