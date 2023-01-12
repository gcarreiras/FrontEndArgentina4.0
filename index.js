
const data = {
    me : {
        title : 'Hi, My name is',
        subTitle: 'Amber Stewart'
    },
    mail : {
        title : 'My email address is',
        subTitle: 'amber.stewart@example.com'
    },
    myBirthday : {
        title : 'My birthday is',
        subTitle: '9/1/1949'
    },
    location : {
        title : 'My address is',
        subTitle: '1689 Hogan St'
    },
    callMe : {
        title : 'My phone number is',
        subTitle: '(530) 396-5221'
    }
    
}

const toLinks = {
    git: 'https://github.com/gcarreiras',
    briefcase:'http://gcarreiras.online/',
    linkedin:'https://www.linkedin.com/in/gaston-carreiras/'
}

function link(where) {
    window.open(toLinks[where])
  }

  function changeText(text) {
    const elemh5 = document.getElementById('h5-text');
    elemh5.textContent = data[text].title;
    const elemh2 = document.getElementById('h2-text');
    elemh2.textContent = data[text].subTitle;
   
  }
