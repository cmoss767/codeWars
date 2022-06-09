//replace all characters from text with the char argument 

function contamination(text, char){
    if(text.length<1 || char.length<1){
      return ''
      }else{
        return text.replace(/[\D\d]/g, char)
      }
    
  }