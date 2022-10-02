var consorsbankBanner = {
  init: function () {
    this.styleFn();
    this.mainFn();
  },
  styleFn: function () {
    var mainCss = `
      .main-container{
        margin: 4px 0px 36px;
      }
      .main-container-head-text{
        font-weight: 600;
        font-size: 28px;
        line-height: 34.1px;
        color: #464646;

    }

      .bold-text-el {
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.05em;
        margin-top: 13px;
        color: #fff;
      }
      .normal-text-el {
        color: #fff;
        font-size: 14px;
        margin-top: -5px;
        margin-bottom: 25px;
        font-weight: 300;

      }
      .normal-text-ul-el {
        color: #444444;
        font-size: 14px;
        
      }
      .section-head-h3-el{
        font-size: 28px !important;
        color: #464646;

      }
      .flex-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
      }
      .flex-left{
        justify-content: start;
        

      }
      .flex-one {
        position: relative;
        width: 32%;
        background-color: #1e9fc4;
        text-align: center;
        padding: 25px 10px;
      }
      .img_icon_el{
        width: 46.2px;
        height: 48px;
      }

      .title-img{
        width: 39.75px;
        height: 41.3px;
      }
      .corner {
        position: absolute;
        left: 85%;
        top: 5%;
      }
      .cb-container {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      .cb-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      
      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 35px;
        border-radius: 50%;
        width: 35px;
        background-color: #eee;
        border: 2px solid #fff;
      }
      
      .cb-container:hover input ~ .checkmark {
        background-color: #ccc;
      }
      
      .cb-container input:checked ~ .checkmark {
        background-color: #61af34;
      }
      
      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }
      
      .cb-container input:checked ~ .checkmark:after {
        display: block;
      }
      
      .cb-container .checkmark:after {
        left: 12px;
        top: 5px;
        width: 8px;
        height: 20px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      .main-container-bottom-text{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #464646;
        border-bottom: 1px solid #444444;
        padding-bottom:8px;
        margin-top: 28px;

    }
    .bold-text-weight-el{
      font-weight: 800;

    }

    .benefits-container-el {
      margin: 5px 0px 0px  10px;
      margin-left: 0px;
    }
    .benefit.row {
      background-color: #F5F5F5;
      margin-bottom:30px;
      padding-bottom:0px;
      margin-left: 0px;


    }
    .block_benefits .benefit .content ul{
      width:110%;
    }
    .image__part{
      padding-left: 0px;


    }
   
    .flex-left {
      display: flex;
      align-items: center;
      justify-content: start;
      margin-bottom:30px;
    }
    .tile-text-el {
      margin-left: 10px;
      line-height:16px;

    }
    .bold-title-text-el {
      font-weight: 600;
      font-size: 28px;
      color: #464646;
    }
    .normal-title-text-el {
      font-size: 16px;
      font-weight: 600;
      color: #8F8D8D;
    }
    .img-width-height-el{
      width: 397px;
      height: 274px; 
    }
    .section-para-margin-el{
      margin-top: -17px;
      margin-bottom: 23px;
    }
    #tagesgeld-section-el,#wertpapiere-section-el,#girokonto-section-el{
      margin-bottom:60px;
     }
   
      

          `;

    var headofdoc = document.getElementsByTagName("head")[0];
    var style_el = document.createElement("style");
    style_el.setAttribute("type", "text/css");
    style_el.appendChild(document.createTextNode(mainCss));
    headofdoc.appendChild(style_el);
  },

  mainFn: function () {
    // array for flex-left, array for row(category check)
    let mContainer = document.querySelector(".block_benefits.container");
    let mrowBenefit = mContainer.querySelector(".benefit.row");
    let mrowBenefitAll = document.querySelectorAll(".benefit.row");
    Array.from(mrowBenefitAll).forEach((i) => i.remove());

    // card details
    const cardDetails = [
      {
        cardImg: "https://i.ibb.co/gzpQrTK/Tagesgeld-Vector.png",
        cardHead: "Tagesgeldkonto",
        cardText: "Geld parken und 0,6 % Zinsen p. a. sichern",
        checkbox: "checkbox1",
        categoty: "tagesgeld-section-el",
      },
      {
        cardImg: "https://i.ibb.co/DG9d390/Anlegen-Vector.png",
        cardHead: "Wertpapiere",
        cardText: "Vermögensaufbau und Sparen",
        checkbox: "checkbox2",
        categoty: "wertpapiere-section-el",
      },
      {
        cardImg: "https://i.ibb.co/KFZ93x2/Card-Vector-2.png",
        cardHead: "Girokonto",
        cardText: "Unsere Klassiker mit Top-Konditionen",
        checkbox: "checkbox3",
        categoty: "girokonto-section-el",
      },
    ];

    // array for row...
    rowList = [
      {
        categoty: "tagesgeld-section-el",
        rowImg: "https://i.ibb.co/c3LcgfQ/zinsen.jpg",
        rowImgAlt: "Tagesgeld image",
        rowHead: "Tagesgeldkonto",
        rowSubHead: "Kostenlos und sicher Vermögen parken",
        rowUlTitle: "Ihre Vorteile bei der Consorsbank:",
        rowListOne:
          "0,60 % p. a. auf Ihr Tagesgeld bis 250.000 Euro für 6 Monate",
        rowListTwo: "Ihr Geld ist jederzeit verfügbar.",
        rowBtnAnchor:
          "https://aktionen.consorsbank.de/ev/tagesgeld/?icid=WEB-1231",
        rowBtnArial: "Zum Tagesgeld",
        rowBtnText: "Zum Tagesgeldkonto",
      },
      {
        categoty: "wertpapiere-section-el",
        rowImg: "https://i.ibb.co/q05RNyw/trd.jpg",
        rowImgAlt: "Tagesgeld image",
        rowHead: "Wertpapierdepot",
        rowSubHead: "Vielfältige Möglichkeiten zum Vermögensaufbau",
        rowUlTitle: "Ihre Vorteile bei der Consorsbank:",
        rowListOne:
          "6 Monate für 0 Euro Ordergebühr traden (zzgl. marktüblicher Spreads)",
        rowListTwo: "Kostenlose Depotführung",
        rowBtnAnchor:
          "https://aktionen.consorsbank.de/ev/tagesgeld/?icid=WEB-1231",
        rowBtnArial: "Zum Tagesgeld",
        rowBtnText: "Zum Wertpapierdepot",
      },
      {
        categoty: "wertpapiere-section-el",
        rowImg: "https://i.ibb.co/ZT44S7X/snd.jpg",
        rowImgAlt: "Tagesgeld image",
        rowHead: "Sparplan",
        rowSubHead: "Kleine Sparrate, große Träume",
        rowUlTitle: "Ihre Vorteile bei der Consorsbank:",
        rowListOne:
          "0,60 % p. a. auf Ihr Tagesgeld bis 250.000 Euro für 6 Monate",
        rowListTwo: "Ihr Geld ist jederzeit verfügbar.",
        rowBtnAnchor:
          "https://aktionen.consorsbank.de/ev/tagesgeld/?icid=WEB-1231",
        rowBtnArial: "Zum Tagesgeld",
        rowBtnText: "Zum Tagesgeldkonto",
      },
      {
        categoty: "wertpapiere-section-el",
        rowImg: "https://i.ibb.co/n3z41bC/frt.jpg",
        rowImgAlt: "Tagesgeld image",
        rowHead: "Tagesgeldkonto",
        rowSubHead: "Kostenlos und sicher Vermögen parken",
        rowUlTitle: "Ihre Vorteile bei der Consorsbank:",
        rowListOne:
          "0,60 % p. a. auf Ihr Tagesgeld bis 250.000 Euro für 6 Monate",
        rowListTwo: "Ihr Geld ist jederzeit verfügbar.",
        rowBtnAnchor:
          "https://aktionen.consorsbank.de/ev/tagesgeld/?icid=WEB-1231",
        rowBtnArial: "Zum Tagesgeld",
        rowBtnText: "Zum Tagesgeldkonto",
      },
      {
        categoty: "girokonto-section-el",
        rowImg: "https://i.ibb.co/VLs3Rpg/fft.jpg",
        rowImgAlt: "Tagesgeld image",
        rowHead: "Tagesgeldkonto",
        rowSubHead: "Kostenlos und sicher Vermögen parken",
        rowUlTitle: "Ihre Vorteile bei der Consorsbank:",
        rowListOne:
          "0,60 % p. a. auf Ihr Tagesgeld bis 250.000 Euro für 6 Monate",
        rowListTwo: "Ihr Geld ist jederzeit verfügbar.",
        rowBtnAnchor:
          "https://aktionen.consorsbank.de/ev/tagesgeld/?icid=WEB-1231",
        rowBtnArial: "Zum Tagesgeld",
        rowBtnText: "Zum Tagesgeldkonto",
      },
      {
        categoty: "girokonto-section-el",
        rowImg: "https://i.ibb.co/n3z41bC/frt.jpg",
        rowImgAlt: "Tagesgeld image",
        rowHead: "Tagesgeldkonto",
        rowSubHead: "Kostenlos und sicher Vermögen parken",
        rowUlTitle: "Ihre Vorteile bei der Consorsbank:",
        rowListOne:
          "0,60 % p. a. auf Ihr Tagesgeld bis 250.000 Euro für 6 Monate",
        rowListTwo: "Ihr Geld ist jederzeit verfügbar.",
        rowBtnAnchor:
          "https://aktionen.consorsbank.de/ev/tagesgeld/?icid=WEB-1231",
        rowBtnArial: "Zum Tagesgeld",
        rowBtnText: "Zum Tagesgeldkonto",
      },
    ];

    // section intro array
    sectionIntro = [
      {
        introImg: "https://i.ibb.co/BPNCZgf/Tagesgeld-Vector.png",
        introTitle: "Tagesgeldkonto",
        introProductCount: "1 Produkt",
      },
      {
        introImg: "https://i.ibb.co/fQwGmqR/Anlegen-Vector-1.png",
        introTitle: "Wertpapiere",
        introProductCount: "3 Produkt",
      },
      {
        introImg: "https://i.ibb.co/wdr2yzF/Card-Vector-1.png",
        introTitle: "Girokonto",
        introProductCount: "2 Produkt",
      },
    ];

    let addCard = cardDetails.map(
      (i) => ` <div class="flex-one checkBoxCard">
      <div class="corner">
        <label class="cb-container">
          <input type="checkbox" checked="checked" data-target = ${i.categoty} />
          <span class="checkmark"></span>
        </label>
      </div>

      <img
        class="img_icon_el"
        src=${i.cardImg}
        alt="icon"
      />
      <p class="bold-text-el">${i.cardHead}</p>
      <p class="normal-text-el">${i.cardText}</p>
    </div>`
    );

    var add_section = `
    <div class="main-container">
      <p class="main-container-head-text">Wofür interessieren Sie sich?</p>
      <div class="flex-container">
        ${addCard.join("")}
      
      </div>
    
      <p class="main-container-bottom-text">Wir haben <span class="bold-text-weight-el">6 Produkte</span> gefunden, die zu Ihren Interessen passen.</p>

    </div> `;
    mContainer.insertAdjacentHTML("afterbegin", add_section);

    // intro map....
    let threeSection = sectionIntro.map(
      (si) =>
        `
    <div class="flex-left">
        <img
            class="title-img"
            src=${si.introImg}
            alt="icon"
        />
        <div class="tile-text-el">
            <p class="bold-title-text-el">${si.introTitle}</p>
            <p class="normal-title-text-el">${si.introProductCount}</p>
        </div>
    </div>
   
`
    );

    // section making...
    let addSec = `
<div class="benefits-container-el" id="tagesgeld-section-el"></div>
<div class="benefits-container-el" id="wertpapiere-section-el"></div>
<div class="benefits-container-el" id="girokonto-section-el"></div>

`;
    mContainer.insertAdjacentHTML("beforeend", addSec);
    // Three sction query and add the intro ....
    let tagSec_el = document.querySelector("#tagesgeld-section-el");
    tagSec_el.insertAdjacentHTML("afterbegin", threeSection[0]);

    let wertSec_el = document.querySelector("#wertpapiere-section-el");
    wertSec_el.insertAdjacentHTML("afterbegin", threeSection[1]);

    let giroSec_el = document.querySelector("#girokonto-section-el");
    giroSec_el.insertAdjacentHTML("afterbegin", threeSection[2]);

    // rowList html ...........
    let createRowBenefit = rowList.map(
      (r) =>
        `
<div class="benefit row" data-target=${r.categoty}>
    <div class="col-12 col-sm-6 col-md-6 image__part">
        <a class="image__anchor" href=${r.rowBtnAnchor} aria-label=${r.rowBtnArial}>
            <figure>
                <picture>
                    <img src=${r.rowImg} alt=${r.rowImgAlt} class="img-width-height-el">
                </picture>
            </figure>
        </a>
    </div>
    <div class="content col-12 col-sm-6 col-md-6">
        <h3>${r.rowHead}</h3>
        <p class='section-para-margin-el'>${r.rowSubHead}</p>
        <p class='normal-text-ul-el'>${r.rowUlTitle}</p>
        <ul>
            <li>${r.rowListOne}</li>
            <li>${r.rowListTwo}</li>
        </ul>
        <p>
            <a href=${r.rowBtnAnchor} class="button primary" aria-label=${r.rowBtnArial}>${r.rowBtnText}</a>
        </p>
    </div>
</div>
`
    );

    createRowBenefit.forEach((cr) => {
      if (cr.includes("data-target=tagesgeld-section-el")) {
        tagSec_el.insertAdjacentHTML("beforeend", cr);
      } else if (cr.includes("data-target=wertpapiere-section-el")) {
        wertSec_el.insertAdjacentHTML("beforeend", cr);
      } else if (cr.includes("data-target=girokonto-section-el")) {
        giroSec_el.insertAdjacentHTML("beforeend", cr);
      }
    });

    // checkbox functionalities.
    let checkboxCard = document.querySelectorAll(
      ".checkBoxCard .cb-container input[type='checkbox']"
    );
    let benefitsContainer1 = document.querySelectorAll(
      ".benefits-container-el"
    )[0];
    let benefitsContainer2 = document.querySelectorAll(
      ".benefits-container-el"
    )[1];
    let benefitsContainer3 = document.querySelectorAll(
      ".benefits-container-el"
    )[2];
    Array.from(checkboxCard).forEach((card) => {
      card.addEventListener("click", function (e) {
        if (
          e.target.dataset.target === benefitsContainer1.id &&
          card.checked === false
        ) {
          benefitsContainer1.style.display = "none";
        } else if (
          e.target.dataset.target === benefitsContainer1.id &&
          card.checked === true
        ) {
          benefitsContainer1.style.display = "block";
        } else if (
          e.target.dataset.target === benefitsContainer2.id &&
          card.checked === false
        ) {
          benefitsContainer2.style.display = "none";
        } else if (
          e.target.dataset.target === benefitsContainer2.id &&
          card.checked === true
        ) {
          benefitsContainer2.style.display = "block";
        } else if (
          e.target.dataset.target === benefitsContainer3.id &&
          card.checked === false
        ) {
          benefitsContainer3.style.display = "none";
        } else if (
          e.target.dataset.target === benefitsContainer3.id &&
          card.checked === true
        ) {
          benefitsContainer3.style.display = "block";
        }
      });
    });
  },
};
(function pollonLoad() {
  if (document.querySelector("footer")) {
    try {
      consorsbankBanner.init();
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log("Element not found");
    setTimeout(pollonLoad, 10000);
  }
})();
