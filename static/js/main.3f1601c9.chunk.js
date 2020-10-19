(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{52:function(e,t,a){e.exports=a(84)},57:function(e,t,a){},58:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(42),l=a.n(o),c=(a(57),a(2)),i=a(3),m=a(5),s=a(4),u=(a(58),a(59),a(7)),d=a(28),p=a(9),h=a(10),b=a(46),f=a.n(b),g=a(6);function v(){var e=Object(p.a)(["\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n\n  li {\n    padding: 18px 10px;\n    a{\n      text-decoration:none;\n    }\n\n    a:hover{\n      color:#0ABDE3 !important;\n    }\n\n    .menu_active {\n      font-weight: bold;\n      border-bottom: 2px solid #19dae7;\n  }\n  }\n\n  \n\n  .form-center{\n    display: flex;\n    fext-flow: row nowrap;\n    justify-content: center;\n    background: #fff;\n    height: 2.5rem;\n    width: 13rem;\n    align-items: center;\n    border-radius: 5rem;\n    padding: 0 0.2rem 0 0.5rem;\n  }\n  .form-center input{\n    height: 1rem;\n    border-radius: 1.5rem;\n    border: none;\n    padding: 0.5rem;\n  }\n\n  .form-center button{\n    height: 2.5rem;\n    width: 2.5rem;\n    border-radius: 1rem;\n    border: none;\n    background: none;\n  }\n\n  @media (max-width: 768px) {\n    z-index: 1222;\n    flex-flow: column nowrap;\n    // background-color: #0D2538;\n    // background-color: #DAE0E2;\n    position: fixed;\n    transform: ",";\n    top: 4.4rem;\n    left: -15rem;\n    height: 100vh;\n    width: 15rem;\n    // padding-top: 2rem;\n    // transition: transform 0.1s ease-in-out;\n\n    li {\n      color: #fff;\n\n      .menu_active {\n        font-weight: bold;\n        border-bottom: none;\n    }\n\n    }\n    \n    .form-center{\n      margin-left: -1rem;\n    }\n  }\n"]);return v=function(){return e},e}var E=h.a.ul(v(),(function(e){return e.open?"translateX(100%)":"translateX(0)"})),y=function(e){var t=e.open;return r.a.createElement(E,{open:t,className:"bg-dark text-light"},r.a.createElement("form",{className:"form-center mt-3 mr-2"},r.a.createElement("input",{className:"form-control",type:"search",placeholder:"Search by name","aria-label":"Search",style:{height:"2rem"}}),r.a.createElement("button",{className:"btn btn-white",type:"submit",style:{height:"2rem"}},r.a.createElement(f.a,null))),r.a.createElement("li",null,r.a.createElement(g.c,{activeClassName:"menu_active",exact:!0,className:"text-white active",to:"/ecommerce"},"Home")),r.a.createElement("li",null,r.a.createElement(g.c,{activeClassName:"menu_active",className:"text-light",to:"/artist"},"Artist")),r.a.createElement("li",null,r.a.createElement(g.c,{activeClassName:"menu_active",className:"text-white",to:"/contact"},"Contact Us")),r.a.createElement("li",null,r.a.createElement(g.c,{activeClassName:"menu_active",className:"text-white",to:"/login"},"LogIn")),r.a.createElement("li",null,r.a.createElement(g.c,{activeClassName:"menu_active",className:"text-white",to:"/signup"},"SingUp")),r.a.createElement("li",null,r.a.createElement(g.c,{activeClassName:"menu_active",className:"text-white",to:"/about"},"About Us")))};function x(){var e=Object(p.a)(["\n  width: 2rem;\n  height: 2rem;\n  // position: fixed;\n  top: 15px;\n  right: 1rem;\n  z-index: 20;\n  display: none;\n\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n    margin-top: 10px;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    // transition: all 0.1s linear;\n\n    &:nth-child(1) {\n      transform: ",";\n    }\n\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return x=function(){return e},e}var N=h.a.div(x(),(function(e){e.open;return"#fff"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),k=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],o=t[1];return window.addEventListener("scroll",(function(){window.scrollY>=0&&o(!1)})),r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{open:a,onClick:function(){return o(!a)}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement(y,{open:a}))};function w(){var e=Object(p.a)(["\ntext-transform: capitalize ;\nfont-size: 1.4rem;\nbackground: transparent;\nborder: 0.05rem solid var(--lightBlue);\nborder-color:",";\ncolor: ",";\nborder-radius: 0.5rem;\npadding: 0.2rem 0.5rem;\ncursor: pointer;\nmargin 0.2rem 0.5rem;\ntransition: all 0.5s ease-in-out;\n&:hover{\n    background:",";\n    color: var(--mainBlue);\n}\n\n&:focus {\n    outline: none;\n}\n"]);return w=function(){return e},e}var j=h.a.button(w(),(function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"}),(function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"}),(function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"}));function O(){var e=Object(p.a)(["\nwidth: 100%;\n// height: 4.5rem;\n// border-bottom: 5px solid #f1f1f1;\npadding: 10px 20px;\ndisplay: flex;\njustify-content: space-between;\nbackground: #DAE0E2;\ncolor: black;\nbox-shadow: 0 0 8px #95a5a6;\n\n.cart{\n  margin-top: 1rem;\n}\n\n.logo {\n  font-size: 2rem;\n}\n\n  .logo img {\n    padding: 5px 0;\n    height: 3rem;\n    width:8rem;\n    animation: brand 2s linear infinite alternate-reverse both;\n\n  }\n\n  @-webkit-keyframes brand {\n    0%{\n        transform: scale(0.8);\n    }\n\n    100%{\n        transform: scale(1.1);\n    }\n}\n\n@keyframes brand {\n    0%{\n        transform: scale(0.8);\n    }\n\n    100%{\n        transform: scale(1.1);\n    }\n}\n\n@media(max-width:768px){\n  .cart{\n    margin: 0 1rem;\n  }\n\n}\n\n"]);return O=function(){return e},e}var C=h.a.nav(O()),S=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],o=t[1];return window.addEventListener("scroll",(function(){window.scrollY>=50?o(!0):o(!1)})),r.a.createElement(C,{className:a?"fixed-top container-fluid bg-dark my-1":"container-fluid bg-dark my-1"},r.a.createElement("div",{className:"logo text-white font-weight-bold"},r.a.createElement(g.c,{className:"text-white navbar-brand",to:"/ecommerce"}," Sketch")),r.a.createElement(g.b,{to:"/cart",className:"ml-auto cart"},r.a.createElement(j,null,r.a.createElement("span",{className:"mr-2"},r.a.createElement("i",{className:"fa fa-cart-plus "})),"my cart")),r.a.createElement(k,null))},T=a(13),I=a(25),L=[{id:1,title:"Daya",img:"img/Daya.jpg",price:10,company:"Ravi Shankar",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:2,title:"Jethalal",img:"img/Jethalal.jpg",price:16,company:"Ravi Shankar",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:3,title:"Heath Ledger",img:"img/Heath Ledger.jpg",price:8,company:"Ravi Shankar",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:4,title:"Rohit Sharma",img:"img/Rohit Sharma.jpg",price:18,company:"Ravi Shankar",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:5,title:"Rishi",img:"img/Rishi.jpg",price:24,company:"",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:6,title:"Irfan Khan",img:"img/Irfan Khan.jpg",price:17,company:"Ravi Shankar",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:7,title:"Nawaz",img:"img/Nawaz.jpg",price:30,company:"Ravi Shankar",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:8,title:"Hrithik Roshan",img:"img/Hritik Roshan.jpg",price:2,company:"Ravi Shankar",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0}],D={id:1,title:"Aishwariya",img:"img/Aish.jpg",price:10,company:"Ravi Shankar",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},F=r.a.createContext(),P=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={products:[],detailProduct:D,cart:[],modalOpen:!1,modalProduct:D,cartSubTotal:0,cartTax:0,cartTotal:0,openLogin:!1},e.setProducts=function(){var t=[];L.forEach((function(e){var a=Object(I.a)({},e);t=[].concat(Object(T.a)(t),[a])})),e.setState((function(){return{products:t}}),e.checkCartItems)},e.getItem=function(t){return e.state.products.find((function(e){return e.id===t}))},e.handleDetail=function(t){var a=e.getItem(t);e.setState((function(){return{detailProduct:a}}))},e.addToCart=function(t){var a=Object(T.a)(e.state.products),n=a.indexOf(e.getItem(t)),r=a[n];r.inCart=!0,r.count=1;var o=r.price;r.total=o,e.setState((function(){return{products:Object(T.a)(a),cart:[].concat(Object(T.a)(e.state.cart),[r]),detailProduct:Object(I.a)({},r)}}),e.addTotals)},e.openModal=function(t){var a=e.getItem(t);e.setState((function(){return{modalProduct:a,modalOpen:!0}}))},e.closeModal=function(){e.setState((function(){return{modalOpen:!1}}))},e.increment=function(t){var a=Object(T.a)(e.state.cart),n=a.find((function(e){return e.id===t})),r=a.indexOf(n),o=a[r];o.count=o.count+1,o.total=o.count*o.price,e.setState((function(){return{cart:Object(T.a)(a)}}),e.addTotals)},e.decrement=function(t){var a=Object(T.a)(e.state.cart),n=a.find((function(e){return e.id===t})),r=a.indexOf(n),o=a[r];o.count=o.count-1,0===o.count?e.removeItem(t):(o.total=o.count*o.price,e.setState((function(){return{cart:Object(T.a)(a)}}),e.addTotals))},e.getTotals=function(){var t=0;e.state.cart.map((function(e){return t+=e.total}));var a=parseFloat((.5*t).toFixed(2));return{subTotal:t,tax:a,total:t+a}},e.addTotals=function(){var t=e.getTotals();e.setState((function(){return{cartSubTotal:t.subTotal,cartTax:t.tax,cartTotal:t.total}}),(function(){}))},e.removeItem=function(t){var a=Object(T.a)(e.state.products),n=Object(T.a)(e.state.cart),r=a.indexOf(e.getItem(t)),o=a[r];o.inCart=!1,o.count=0,o.total=0,n=n.filter((function(e){return e.id!==t})),e.setState((function(){return{cart:Object(T.a)(n),products:Object(T.a)(a)}}),e.addTotals)},e.clearCart=function(){e.setState((function(){return{cart:[]}}),(function(){e.setProducts(),e.addTotals()}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setProducts()}},{key:"render",value:function(){return r.a.createElement(F.Provider,{value:Object(I.a)(Object(I.a)({},this.state),{},{handleDetail:this.handleDetail,addToCart:this.addToCart,openModal:this.openModal,closeModal:this.closeModal,increment:this.increment,decrement:this.decrement,removeItem:this.removeItem,clearCart:this.clearCart,openLogin:this.openLogin,closeLogin:this.closeLogin})},this.props.children)}}]),a}(n.Component),U=F.Consumer;function A(){var e=Object(p.a)(["\n.card{\n    border-color:transparent;\n    transition:all 1s linear;\n    border:0.2rem solid #FAC42F;\n    box-shadow:2px 2px 0.5rem 0px #FAC42F;\n}\n.card-footer{\n    // background:transparent;\n    border-top: transparent;\n    tranisition:all 1s linear;\n}\n&:hover{\n    .card{\n        // border:0.04rem solid rgba(0,0,0,0.2);\n        border:0.2rem solid #FAC42F;\n        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);\n    }\n    .card-footer{\n        background: #FAC42F !important;\n        color: #192A56;\n        font-size: 1.5rem;\n    }\n}\n.img-container{\n    position:relative;\n    overflow:hidden;\n}\n.card-img-top{\n    transition: all 1s linear;\n}\n.img-container:hover .card-img-top {\n    transform: scale(1.3);\n}\n.cart-btn{\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 0.2rem 0.4rem;\n    background: var(--lightBlue);\n    border:none;\n    color: var(--mainWhite);\n    font-size: 1.4rem;\n    border-radius: 0.5rem 0 0 0;\n    transform: translate(100%, 100%);\n    transition: all 1s linear;\n}\n.img-container:hover .cart-btn{\n    transform: translate(0,0);\n}\n.cart-btn:hover{\n    color: var(--mainBlue);\n    cursor:pointer;\n}\n"]);return A=function(){return e},e}var H=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.product,t=e.id,a=e.title,n=e.img,o=e.price,l=e.inCart;return r.a.createElement(R,{className:"col-9 mx-auto col-md-4 col-sm-6 col-lg-3 my-3"},r.a.createElement("div",{className:"card bg-dark"},r.a.createElement(U,null,(function(e){return r.a.createElement("div",{className:"img-container p-5",onClick:function(){return e.handleDetail(t)}},r.a.createElement(g.b,{to:"/details"},r.a.createElement("img",{src:n,alt:"",className:"card-img-top",height:"200vh",width:"20rem"})),r.a.createElement("button",{className:"cart-btn",disabled:!!l,onClick:function(){e.addToCart(t),e.openModal(t)}},l?r.a.createElement("p",{className:"text-capitalize mb-0",disabled:!0},"in cart"):r.a.createElement("i",{className:"fa fa-cart-plus"})))})),r.a.createElement("div",{className:"card-footer d-flex justify-content-between bg-secondary"},r.a.createElement("p",{className:"align-self-center mb-0"},a),r.a.createElement("h5",{className:"font-italic mb-0"},r.a.createElement("span",{className:"mr-1"},"Rs"),o))))}}]),a}(n.Component),R=h.a.div(A());function z(e){return r.a.createElement("div",{className:"row my-5 text-white col-12 col-lg-12"},r.a.createElement("div",{className:"col-12 mx-auto my-2 text-center text-title"},r.a.createElement("h1",{className:"text-uppercase font-weight-bold text-light mt-5"},e.name," ",r.a.createElement("strong",{className:"text-warning"},e.title))))}var B=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"py-5"},r.a.createElement("div",{className:"container"},r.a.createElement(z,{name:"our",title:"Sketches"}),r.a.createElement("div",{className:"row"},r.a.createElement(U,null,(function(e){return e.products.map((function(e){return r.a.createElement(H,{key:e.id,product:e})}))}))))))}}]),a}(n.Component),q=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(U,null,(function(e){var t=e.detailProduct,a=t.id,n=t.company,o=t.img,l=t.info,c=t.price,i=t.title,m=t.inCart;return r.a.createElement("div",{className:"container py-5 my-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-slanted text-white my-5"},r.a.createElement("h1",null,i))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("img",{src:o,className:"img-fluid",alt:"",height:"10vh",width:"70%"})),r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3 text-capitalize"},r.a.createElement("h1",null,"Sketch : ",i),r.a.createElement("h4",{className:"text-title text-uppercase text-muted mt-3 mb-2"},"Sketched by : ",r.a.createElement("span",{className:"text-uppercase"},n)),r.a.createElement("h4",{className:"text-blue"},r.a.createElement("strong",null,"price : ",r.a.createElement("span",null,"Rs "),c)),r.a.createElement("p",{className:"text-capitalize font-weight-bold mt-3 mb-0"},"some info about Sketch :"),r.a.createElement("p",{className:"text-muted lead"},l),r.a.createElement("div",null,r.a.createElement(g.b,{to:"/"},r.a.createElement(j,null,"back to products")),r.a.createElement(j,{cart:!0,disabled:!!m,onClick:function(){e.addToCart(a),e.openModal(a)}},m?"in cart":"add to cart")))))}))}}]),a}(n.Component);function Y(e){return console.log(e),r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-title text-uppercase pt-5"},r.a.createElement("h1",{className:"display-3"},"404"),r.a.createElement("h1",null,"error"),r.a.createElement("h2",null,"page not found"),r.a.createElement("h3",null,"the requested URL"," ",r.a.createElement("span",{className:"text-danger"},'"',e.location.pathname,'"')," was not found"))))}var _=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container text-center d-none d-lg-block my-5"},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"products")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"name of product")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"price")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"quantity")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"remove")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"total"))))}}]),a}(n.Component),M=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.item,t=e.id,a=e.title,n=e.img,o=e.price,l=e.total,c=e.count,i=this.props.value,m=i.increment,s=i.decrement,u=i.removeItem;return r.a.createElement("div",{className:"row my-1 text-capitalize text-center"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("img",{src:n,style:{width:"5rem",heigth:"5rem"},className:"img-fluid",alt:""})),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 "},r.a.createElement("span",{className:"d-lg-none"},"product :")," ",a),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 "},r.a.createElement("strong",null,r.a.createElement("span",{className:"d-lg-none"},"price :")," $",o)),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 my-2 my-lg-0 "},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",null,r.a.createElement("span",{className:"btn btn-primary mx-1",onClick:function(){return s(t)}},"-"),r.a.createElement("span",{className:"btn btn-primary text-white mx-1"},c),r.a.createElement("span",{className:"btn btn-primary mx-1",onClick:function(){return m(t)}},"+")))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 "},r.a.createElement("div",{className:" cart-icon btn btn-primary",onClick:function(){return u(t)}},r.a.createElement("i",{className:"fa fa-trash"}))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 "},r.a.createElement("strong",null,"item total : $",l," ")))}}]),a}(n.Component),V=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.value,t=this.props.value.cart;return r.a.createElement("div",{className:"container"},r.a.createElement("hr",null),t.map((function(t){return r.a.createElement(M,{key:t.id,item:t,value:e})})))}}]),a}(n.Component),$=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.value,t=e.cartSubTotal,a=e.cartTax,n=e.cartTotal,o=e.cart,l=e.clearCart,c=0===o.length;return r.a.createElement(r.a.Fragment,null,!c&&r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right"},r.a.createElement(g.b,{to:"/"},r.a.createElement("button",{className:"btn btn-outline-danger text-uppercase mb-3 px-5",type:"button",onClick:function(){l()}},"clear cart")),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"}," subtotal :")," ",r.a.createElement("strong",null,"$ ",t," ")),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"}," tax :")," ",r.a.createElement("strong",null,"$ ",a," ")),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"}," total :")," ",r.a.createElement("strong",null,"$ ",n," ")),r.a.createElement(g.b,{to:"/order",className:"btn btn-warning p-2 text-capitalize  font-weight-bold text-center"},"order now")))))}}]),a}(n.Component);function J(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-title text-capitalize"},r.a.createElement("h1",null,"your cart is currently empty"))))}var X=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement(U,null,(function(t){return t.cart.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{name:"Your",title:"Cart"}),r.a.createElement(_,null),r.a.createElement(V,{value:t}),r.a.createElement($,{value:t,history:e.props.history})):r.a.createElement(J,null)})))}}]),a}(n.Component);function K(){var e=Object(p.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index:9999;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  #modal {\n    background: var(--mainDark);\n  }\n"]);return K=function(){return e},e}var G=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(U,null,(function(e){var t=e.modalOpen,a=e.closeModal,n=e.modalProduct,o=n.img,l=n.title,c=n.price;return t?r.a.createElement(W,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8 mx-auto col-md-6 col-lg-4 p-5 my-5 text-center text-capitalize",id:"modal"},r.a.createElement("h5",null,"item added to cart"),r.a.createElement("img",{src:o,className:"img-fluid",alt:""}),r.a.createElement("h5",null,l),r.a.createElement("h5",{className:"text-muted"},"price : Rs",c),r.a.createElement(g.b,{to:"/"},r.a.createElement(j,{onClick:function(){a()}},"Continue Shopping")),r.a.createElement(g.b,{to:"/cart"},r.a.createElement(j,{cart:!0,onClick:function(){a()}},"Go To Cart")))))):null}))}}]),a}(n.Component),W=h.a.div(K()),Q=a(14),Z=a(27),ee=a.n(Z),te=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(Q.a)(n)),n.onChangeAddress=n.onChangeAddress.bind(Object(Q.a)(n)),n.onChangePhone=n.onChangePhone.bind(Object(Q.a)(n)),n.onChangeLandmark=n.onChangeLandmark.bind(Object(Q.a)(n)),n.onSubmit=n.onSubmit.bind(Object(Q.a)(n)),n.state={username:"",address:"",phone:"0123456789",landmark:""},n}return Object(i.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeAddress",value:function(e){this.setState({address:e.target.value})}},{key:"onChangePhone",value:function(e){this.setState({phone:e.target.value})}},{key:"onChangeLandmark",value:function(e){this.setState({landmark:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,address:this.state.address,phone:this.state.phone,landmark:this.state.landmark};console.log(t),ee.a.post("http://localhost:5000/order/add",t).then((function(e){return console.log(e.data)})),window.location="/payment"}},{key:"render",value:function(){return r.a.createElement("div",{className:"container mb-5"},r.a.createElement(z,{name:"Order",title:"Details"}),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("form",{className:" form col-lg-5 col-md-8 col-sm-10 col-10 ",onSubmit:this.onSubmit},r.a.createElement("div",{name:"register"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Name:"),r.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"name","aria-describedby":"nameHelp",placeholder:"Enter name",value:this.state.username,onChange:this.onChangeUsername,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Address:"),r.a.createElement("input",{type:"text",name:"address",className:"form-control",id:"adress","aria-describedby":"emailHelp",placeholder:"Enter Address",value:this.state.address,onChange:this.onChangeAddress,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Phone:"),r.a.createElement("input",{type:"number",name:"phone",className:"form-control",id:"phone","aria-describedby":"emailHelp",placeholder:"Enter Phone Number",value:this.state.phone,onChange:this.onChangePhone,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Landmark:"),r.a.createElement("input",{type:"text",name:"landmark",id:"landmark",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter Landmark",value:this.state.landmark,onChange:this.onChangeLandmark,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",value:"Submit",className:"btn btn-primary p-2 text-center"},"Submit"))))))}}]),a}(n.Component);function ae(){var e=Object(p.a)(["\n\n    margin: 5rem 30rem;\n    border-radius: 10%;\n  background: rgba(0, 0, 0, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  btn {\n      padding: 5;\n  }\n\n  @media(max-width:768px){\n      margin: 0rem 0 0 0;\n    height: 100vh;\n      border-radius: 0;\n  }\n"]);return ae=function(){return e},e}var ne=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(Q.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(Q.a)(n)),n.onSubmit=n.onSubmit.bind(Object(Q.a)(n)),n.state={username:"",password:""},n}return Object(i.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};console.log(t),ee.a.post("http://localhost:5000/order/add",t).then((function(e){return console.log(e.data)})),window.location="/payment"}},{key:"render",value:function(){return r.a.createElement(re,null,r.a.createElement("div",{className:"container mb-5"},r.a.createElement(z,{name:"Login",title:" "}),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("form",{className:" form col-lg-5 col-md-8 col-sm-10 col-10 ",onSubmit:this.onSubmit},r.a.createElement("div",{name:"register"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Username:"),r.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"name","aria-describedby":"nameHelp",placeholder:"Enter name",value:this.state.username,onChange:this.onChangeUsername,required:!0})),r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Password:"),r.a.createElement("input",{type:"password",name:"name",className:"form-control",id:"name","aria-describedby":"nameHelp",placeholder:"Enter password",value:this.state.password,onChange:this.onChangePassword,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",value:"Submit",className:"btn btn-primary mt-2 text-center"},"Login"))))))}}]),a}(n.Component),re=h.a.div(ae()),oe=a(47),le=a.n(oe),ce=a(48),ie=a.n(ce),me=a(49),se=a.n(me),ue=a(50),de=a.n(ue),pe=(a(82),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"container-fluid text-center "},r.a.createElement("div",{className:"social_media p-3 text-light"},r.a.createElement("a",{href:""}," ",r.a.createElement(le.a,{className:"icon_f"})," "),r.a.createElement("a",{href:""}," ",r.a.createElement(ie.a,{className:"icon_l"})," "),r.a.createElement("a",{href:""}," ",r.a.createElement(se.a,{className:"icon_i"})," "),r.a.createElement("a",{href:""}," ",r.a.createElement(de.a,{className:"icon_t"})," ")),r.a.createElement("div",{className:"text-white p-3"}," \xa9 2020 Sketch. All Rights Reserved | Terms and Condition Apply ")))}),he=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/ecommerce",component:B}),r.a.createElement(u.a,{path:"/details",component:q}),r.a.createElement(u.a,{path:"/cart",component:X}),r.a.createElement(u.a,{path:"/order",component:te}),r.a.createElement(u.a,{path:"/login",component:ne}),r.a.createElement(u.a,{component:Y})),r.a.createElement(G,null),r.a.createElement(pe,null))}}]),a}(n.Component);l.a.render(r.a.createElement(P,null,r.a.createElement(g.a,null,r.a.createElement(he,null))),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.3f1601c9.chunk.js.map