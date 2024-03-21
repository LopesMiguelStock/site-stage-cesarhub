const getData = document.querySelector('input[type="file"]');
let data = "";


getData.addEventListener('change', (event) => {
   const file = event.target.files[0];

   if (file) {
      if (file.type === 'application/json') {
      const reader = new FileReader();

      reader.onload = (e) => {
         const jsonContent = e.target.result;
         console.log('Contenu JSON :', jsonContent);

         data  = JSON.parse(jsonContent);
         console.log('Données parsées :', data);
         document.getElementById("Input").style.display = "none"
         document.getElementById("menu").style.display = "flex"
         main()
      };

      reader.readAsText(file);
      } else {
         console.error('Le fichier doit être au format .json.');
         alert('Le fichier doit être au format .json.')
      }
   }
});


function main(){
   for(let recherche = 0; recherche <data["recherches_google"].length; recherche++){
      const ParendDiv = document.createElement("div");
      ParendDiv.setAttribute("id", recherche);
      ParendDiv.setAttribute("class", "divContainer");
      document.body.appendChild(ParendDiv);
   
      // const buttonForDisplay = document.createElement("button");
      // buttonForDisplay.onclick = function() { changeDisplay(recherche); };
      // buttonForDisplay.innerText = data["recherches_google"][recherche]["recherche"];
      // document.getElementById("sous-menu").appendChild(buttonForDisplay)
      const GoToDestination = document.createElement("a");
      GoToDestination.href = "#" + recherche;
      GoToDestination.innerText = data["recherches_google"][recherche]["recherche"];
      document.getElementById("sous-menu").appendChild(GoToDestination)
   
      const ParentBaliseDivContainer = document.createElement("div");
      ParentBaliseDivContainer.setAttribute("id", "boxParent" + recherche);
      ParentBaliseDivContainer.setAttribute("class", "ParentBaliseDivContainer");
      document.getElementById(recherche).appendChild(ParentBaliseDivContainer);
   
      const MilieuBaliseDivContainer = document.createElement("div");
      MilieuBaliseDivContainer.setAttribute("id", "boxMilieu" + recherche)
      MilieuBaliseDivContainer.setAttribute("class", "MilieuBaliseDivContainer")
      document.getElementById("boxParent" + recherche).appendChild(MilieuBaliseDivContainer)
   
      const createTitle = document.createElement("h1");
      createTitle.setAttribute("class", "title")
      createTitle.innerText = "Recherche: " + data["recherches_google"][recherche]["recherche"];
      document.getElementById("boxMilieu" + recherche).appendChild(createTitle);
   
      const numberResult = document.createElement("p");
      numberResult.setAttribute("class", "numberResult")
      numberResult.innerText = "Nombre de résultat: " + data["recherches_google"][recherche]["datas"].length;
      document.getElementById("boxMilieu" + recherche).appendChild(numberResult)
   
      const EnfantBaliseDivContainer = document.createElement("div");
      EnfantBaliseDivContainer.setAttribute("id", "box" + recherche);
      EnfantBaliseDivContainer.setAttribute("class", "EnfantBaliseDivContainer");
      document.getElementById("boxMilieu" + recherche).appendChild(EnfantBaliseDivContainer);
   
   
   
      for(let JsonDatas = 0; JsonDatas < data["recherches_google"][recherche]["datas"].length; JsonDatas++){
         let url = data["recherches_google"][recherche]["datas"][JsonDatas]["url"];
         let title = data["recherches_google"][recherche]["datas"][JsonDatas]["title"];
         let description = data["recherches_google"][recherche]["datas"][JsonDatas]["description"];
         let date = data["recherches_google"][recherche]["datas"][JsonDatas]["date_derniere_update"];
   
         const BaliseDivContainer = document.createElement("div");
         BaliseDivContainer.setAttribute("class", "baliseContainer");
         BaliseDivContainer.setAttribute("id", "container" + recherche + JsonDatas);
         document.getElementById("box" + recherche).appendChild(BaliseDivContainer);
   
         const TitleOfbaliseUrl = document.createElement("h3");
         TitleOfbaliseUrl.innerText = "Url";
         document.getElementById("container" + recherche + JsonDatas).appendChild(TitleOfbaliseUrl);
         const baliseUrl = document.createElement("a");
         baliseUrl.href = url;
         baliseUrl.innerText = url + ""
         document.getElementById("container" + recherche + JsonDatas).appendChild(baliseUrl);
         
         const ReturnLign1 = document.createElement("br");
         document.getElementById("container" + recherche + JsonDatas).appendChild(ReturnLign1);
         const ReturnLign2 = document.createElement("br");
         document.getElementById("container" + recherche + JsonDatas).appendChild(ReturnLign2);
   
         const TitleOfbaliseTitle = document.createElement("h4");
         TitleOfbaliseTitle.innerText = "Titre";
         document.getElementById("container" + recherche + JsonDatas).appendChild(TitleOfbaliseTitle);
         const baliseTitle = document.createElement("p");
         baliseTitle.innerText = title;
         document.getElementById("container" + recherche + JsonDatas).appendChild(baliseTitle);
   
         const ReturnLign3 = document.createElement("br");
         document.getElementById("container" + recherche + JsonDatas).appendChild(ReturnLign3);
   
         const TitleOfbaliseDescription = document.createElement("h4");
         TitleOfbaliseDescription.innerText = "Description";
         document.getElementById("container" + recherche + JsonDatas).appendChild(TitleOfbaliseDescription);
         const baliseDescription = document.createElement("p");
         baliseDescription.innerText = description;
         document.getElementById("container" + recherche + JsonDatas).appendChild(baliseDescription);
   
         
         const ReturnLign4 = document.createElement("br");
         document.getElementById("container" + recherche + JsonDatas).appendChild(ReturnLign4);
   
         const TitleOfbaliseDate = document.createElement("h4");
         TitleOfbaliseDate.innerText = "Date dernière update";
         document.getElementById("container" + recherche + JsonDatas).appendChild(TitleOfbaliseDate);
         const baliseDate = document.createElement("p");
         baliseDate.innerText = date;
         document.getElementById("container" + recherche + JsonDatas).appendChild(baliseDate);
      }
   } 
}