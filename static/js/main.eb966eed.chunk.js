(this.webpackJsonprecette=this.webpackJsonprecette||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),l=(n(13),n(5)),s=n(1),o=n(2),u=n(4),m=n(3),d=(n(14),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={recette:e.props.detail,isEdit:!1,newIng:""},e.handleEditButton=function(){e.setState({isEdit:!e.state.isEdit})},e.handleNewIngChange=function(t){e.setState({newIng:t.currentTarget.value})},e.handleNewIngSubmit=function(t){if(t.preventDefault(),e.state.newIng.length>0){var n=e.state.recette,a=(new Date).getTime(),r=e.state.newIng;n.ings.push({id:a,nom:r}),e.setState({newIng:""}),e.props.editRecette(n)}},e.deleteIng=function(t){var n=e.state.recette,a=n.ings.findIndex((function(e){return e.id===t}));n.ings.splice(a,1),e.props.editRecette(n)},e.deleteRecette=function(){e.props.deleteRecette(e.state.recette.id)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col mb-4"},r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.state.recette.nom),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Ingr\xe9dients"),r.a.createElement("ul",{className:"list-group list-group-flush"},this.state.recette.ings.map((function(t){return r.a.createElement("li",{className:"list-group-item",key:t.id},t.nom," ",r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){return e.deleteIng(t.id)}},"Supprimer"))}))),this.state.isEdit?r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:this.handleNewIngSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Nom de l'ingr\xe9dient",className:"form-control",value:this.state.newIng,onChange:this.handleNewIngChange})),r.a.createElement("button",{className:"btn btn-outline-dark"},"Ajouter")),r.a.createElement("hr",null)):r.a.createElement("div",null),r.a.createElement("div",{className:"mt-3 d-flex flex-wrap justify-content-around"},this.state.isEdit?r.a.createElement("button",{onClick:this.handleEditButton,className:"btn btn-outline-success"},"Enregister"):r.a.createElement("button",{onClick:this.handleEditButton,className:"btn btn-outline-secondary"},"Modifier"),r.a.createElement("button",{onClick:this.deleteRecette,className:"btn btn-outline-danger"},"Supprimer")))))}}]),n}(r.a.Component)),h=(n(15),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={recettes:[],newRecette:""},e.handleNewRecetteSubmit=function(t){if(t.preventDefault(),e.state.newRecette.length>0){var n=Object(l.a)(e.state.recettes),a=(new Date).getTime(),r=e.state.newRecette,c=[];n.unshift({id:a,nom:r,ings:c}),e.setState({recettes:n,newRecette:""}),localStorage.setItem(a,JSON.stringify({nom:r,ings:c}))}},e.handleNewRecetteChange=function(t){e.setState({newRecette:t.currentTarget.value})},e.editRecette=function(t){var n=Object(l.a)(e.state.recettes),a=n.findIndex((function(e){return e.id===t.id}));n[a]=t,e.setState({recettes:n}),localStorage.setItem(n[a].id,JSON.stringify({nom:n[a].nom,ings:n[a].ings}))},e.deleteRecette=function(t){var n=Object(l.a)(e.state.recettes),a=n.findIndex((function(e){return e.id===t}));localStorage.removeItem(n[a].id),n.splice(a,1),e.setState({recettes:n})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object.keys(localStorage);if(e.length>0){for(var t=[],n=0;n<e.length;n++){for(var a=[],r=JSON.parse(localStorage.getItem(e[n])),c=0;c<r.ings.length;c++)a.push({id:r.ings[c].id,nom:r.ings[c].nom});t.push({id:e[n],nom:r.nom,ings:a})}this.setState({recettes:t,newRecette:""})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App container"},r.a.createElement("br",null),r.a.createElement("h1",{className:"display-3 text-center"},"Ajouter une Recette"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleNewRecetteSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Ajoouter le Nom de la Recette",value:this.state.newRecette,onChange:this.handleNewRecetteChange})),r.a.createElement("button",{className:"btn btn-outline-dark "},"Ajouter")),r.a.createElement("hr",null),r.a.createElement("h1",{className:"display-4 text-center"},"Recettes"),r.a.createElement("div",{className:"row row-cols-1 row-cols-md-3"},this.state.recettes.map((function(t){return r.a.createElement(d,{detail:t,editRecette:e.editRecette,deleteRecette:e.deleteRecette,key:t.id})}))))}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.eb966eed.chunk.js.map