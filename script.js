var pri = 0;
var prirot = 0;

function dropdownnav() {
    if (pri == 0) {
    
        pri = 160;
    } 
    
    else {
        pri = 0;
    }

    document.getElementById("botoesnav").style.height = pri + "px";
    document.getElementById("navbarj").style.margin = "0px 0px  "+ pri +"px 0px";

    if (prirot == 180) {

        prirot = 0;
    } 
    
    else {
        prirot = 180;
    }


   document.getElementById("dropdownnn").style.transform = "rotate("+prirot+"deg)";
}

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };



const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight*0.75);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));
}

function setacima () {
  if (window.pageYOffset > 1066) {
    document.getElementById("jogartopo").style.display="block";
  } else {
    document.getElementById("jogartopo").style.display="none";
  }
}


if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    setacima();
  }, 200));
}

/*---------------------------------------------------------------------------------*/

function botao_primeiro_produto() {
  if(document.getElementsByClassName("segundo")[0].id == "socialmedia"){
    
  } else {
  document.getElementById("produativo").id = "socialmedia"
 
    document.getElementById("socialmedia").style.border = "1px #000000 solid"

    setTimeout(function() {
      document.getElementById("socialmedia").style.border = "none"
    }, 500);
  }

  if(document.getElementsByClassName("terceiro")[0].id == "artedig"){
    
  } else {
  document.getElementById("produativo").id = "artedig"
 
    document.getElementById("artedig").style.border = "1px #000000 solid"

    setTimeout(function() {
      document.getElementById("artedig").style.border = "none"
    }, 500);
  }

  if(document.getElementsByClassName("quarto")[0].id == "curric"){
    
  } else {
  document.getElementById("produativo").id = "curric"
 
    document.getElementById("curric").style.border = "1px #000000 solid"

    setTimeout(function() {
      document.getElementById("curric").style.border = "none"
    }, 500);
  }
  /*ESSA PARTE FECHA OS OUTROS DROPS ABERTOS*/

  if(document.getElementsByClassName("primeiro")[0].id == "devweb"){
    document.getElementById("devweb").id = "produativo"
    document.getElementById("produativo").style.border = "1px #000000 solid"
  }else{
    document.getElementById("produativo").id = "devweb"
 
    document.getElementById("devweb").style.border = "1px #000000 solid"

    setTimeout(function() {
      document.getElementById("devweb").style.border = "none"
    }, 500);
  }
}

function botao_segundo_produto() {
  if(document.getElementsByClassName("primeiro")[0].id == "devweb"){
    
  } else {
  document.getElementById("produativo").id = "devweb"
 
    document.getElementById("devweb").style.border = "1px #000000 solid"

    setTimeout(function() {
      document.getElementById("devweb").style.border = "none"
    }, 500);
  }

  if(document.getElementsByClassName("terceiro")[0].id == "artedig"){
    
  } else {
  document.getElementById("produativo").id = "artedig"
 
    document.getElementById("artedig").style.border = "1px #000000 solid"

    setTimeout(function() {
      document.getElementById("artedig").style.border = "none"
    }, 500);
  }

  if(document.getElementsByClassName("quarto")[0].id == "curric"){
    
  } else {
  document.getElementById("produativo").id = "curric"
 
    document.getElementById("curric").style.border = "1px #000000 solid"

    setTimeout(function() {
      document.getElementById("curric").style.border = "none"
    }, 500);
  }
  /*ESSA PARTE FECHA OS OUTROS DROPS ABERTOS*/

  if(document.getElementsByClassName("segundo")[0].id == "socialmedia"){
    document.getElementById("socialmedia").id = "produativo"
    document.getElementById("produativo").style.border = "1px #000000 solid"
  }else{
    document.getElementById("produativo").id = "socialmedia"
 
    document.getElementById("socialmedia").style.border = "1px #000000 solid"

    setTimeout(function() {
      document.getElementById("socialmedia").style.border = "none"
    }, 500);
  }

}

function botao_terceiro_produto() {
  if(document.getElementsByClassName("primeiro")[0].id == "devweb"){
    
  } else {
  document.getElementById("produativo").id = "devweb"
 
    document.getElementById("devweb").style.border = "1px #000000 solid"

    setTimeout(function() {
      document.getElementById("devweb").style.border = "none"
    }, 500);
  }

  if(document.getElementsByClassName("segundo")[0].id == "socialmedia"){
    
  } else {
  document.getElementById("produativo").id = "socialmedia"
 
    document.getElementById("socialmedia").style.border = "1px #000000 solid"

    setTimeout(function() {
      document.getElementById("socialmedia").style.border = "none"
    }, 500);
  }

  if(document.getElementsByClassName("quarto")[0].id == "curric"){
    
  } else {
  document.getElementById("produativo").id = "curric"
 
    document.getElementById("curric").style.border = "1px #000000 solid"

    setTimeout(function() {
      document.getElementById("curric").style.border = "none"
    }, 500);
  }
  /*ESSA PARTE FECHA OS OUTROS DROPS ABERTOS*/

  if(document.getElementsByClassName("terceiro")[0].id == "artedig"){
    document.getElementById("artedig").id = "produativo"
    document.getElementById("produativo").style.border = "1px #000000 solid"
  }else{
    document.getElementById("produativo").id = "artedig"
 
    document.getElementById("artedig").style.border = "1px #000000 solid"

    setTimeout(function() {
      document.getElementById("artedig").style.border = "none"
    }, 500);
  }

}

function botao_quarto_produto() {
  if(document.getElementsByClassName("primeiro")[0].id == "devweb"){
    
  } else {
  document.getElementById("produativo").id = "devweb"
 
    document.getElementById("devweb").style.border = "1px #000000 solid"

    setTimeout(function() {
      document.getElementById("devweb").style.border = "none"
    }, 500);
  }

  if(document.getElementsByClassName("segundo")[0].id == "socialmedia"){
    
  } else {
  document.getElementById("produativo").id = "socialmedia"
 
    document.getElementById("socialmedia").style.border = "1px #000000 solid"

    setTimeout(function() {
      document.getElementById("socialmedia").style.border = "none"
    }, 500);
  }

  if(document.getElementsByClassName("terceiro")[0].id == "artedig"){
    
  } else {
  document.getElementById("produativo").id = "artedig"
 
    document.getElementById("artedig").style.border = "1px #000000 solid"

    setTimeout(function() {
      document.getElementById("artedig").style.border = "none"
    }, 500);
  }
  /*ESSA PARTE FECHA OS OUTROS DROPS ABERTOS*/

  if(document.getElementsByClassName("quarto")[0].id == "curric"){
    document.getElementById("curric").id = "produativo"
    document.getElementById("produativo").style.border = "1px #000000 solid"
  }else{
    document.getElementById("produativo").id = "curric"
 
    document.getElementById("curric").style.border = "1px #000000 solid"

    setTimeout(function() {
      document.getElementById("curric").style.border = "none"
    }, 500);
  }
}
/*----------------------------------------------------------------------------------*/
var telaconta = window.innerHeight - 100;

function rodapeprodutos () {
  document.getElementById("rodape_produtos").style.top=telaconta+"px";
}

rodapeprodutos ()
