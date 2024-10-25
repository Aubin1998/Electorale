import {defineStore} from "pinia";
import {ref} from "vue";

export const useShow = defineStore('Show', () => {
	const showLogin = ref(true)
	const showSingUp = ref(false)
	const showDashboard = ref(false)
	const showDesc = ref(false)
	const showElection = ref(false)
	const showCandidat = ref(false)
	const showElecteur = ref(false)
	const showBureau = ref(false)
	const showUtilisateur = ref(false)
	const showStatistique = ref(false)
	const showHistorique = ref(false)
	const showElectionActive = ref(false)
	const showElecteursActive = ref(false) //remarque
	const showBureauxActive = ref(false)
	const showUtilisateurActive = ref(false)
	const showStatistiquesActive = ref(false)
	const showHistoriqueActive = ref(false)



	

	


	function showLoginFunc() {
		showLogin.value = true
		showSingUp.value = false


	}
	function showSingUpFunc() {
		showLogin.value = false
		showSingUp.value = true

	}
	function showDashboardFunc() {
		showLogin.value = false
		showSingUp.value = false
		showDashboard.value = true
	}

	function showDescFunc() {
		showDesc.value = ! showDesc.value // !showDesc.value veut dire exécute le cas contraire , soit true soit false

	}
	function showElectionFunc() {
		showElection.value = ! showElection.value

	}
	function showCandidatFunc() {
		showCandidat.value = ! showCandidat.value

	}
	function showElecteurFunc() {
		showElecteur.value = ! showElecteur.value

	}
	function showBureauFunc() {
		showBureau.value = ! showBureau.value

	}
	function showUtilisateurFunc() {
		showUtilisateur.value = ! showUtilisateur.value

	}

	function showStatistiqueFunc() {
		showStatistique.value = ! showStatistique.value

	}
	showHistorique
	function showHistoriqueFunc() {
		showHistorique.value = ! showHistorique.value

	}
	const selectSideBar = ref('')

	function setSelectSideBar(text) {
		selectSideBar.value = text;
		//for Création électorale
		if (selectSideBar.value === "Création élection") {
			showElectionFunc();
			showElectionActive.value = true
		} else {
			showElectionActive.value = false
		}
		//for Gestion des électeurs
		if (selectSideBar.value === "Gestion des électeurs") {
			showElecteurFunc();
			showElecteursActive.value = true //
		}else{
			showElecteursActive.value = false
		}

		//for gestion bureaux
		if (selectSideBar.value === "Gestion des bureaux") {
			showBureauFunc();
			showBureauxActive.value = true //
		}else{
			showBureauxActive.value = false
		}

		//for gestion utilisateur
		if (selectSideBar.value === "Gestion des utilisateurs") {
			showUtilisateurFunc();
			showUtilisateurActive.value = true //
		}else{
			showUtilisateurActive.value = false
		}
		//for gestion utilisateur
		if (selectSideBar.value === "Statistiques") {
			showStatistiqueFunc();
			showStatistiquesActive.value = true //
		}else{
			showStatistiquesActive.value = false
		}
		//for gestion utilisateur
		if (selectSideBar.value === "Historique") {
			showHistoriqueFunc();
			showHistoriqueActive.value = true //
		}else{
			showHistoriqueActive.value = false
		}
		
		


		
	}

	//Variable of  subsection list
	const optionText = ref('')
	const showAnneElectoral = ref(false);
	const showGenreElection = ref(false);
	const showListeElecteurs = ref(false);
	const showFiltrageRecherche = ref(false);
	const showActionsGestion = ref(false);
	const showSurveillance = ref(false);
	const showParQuartier = ref(false);
	const showParRegion = ref(false)
	const showAjoutUtilisateur = ref(false)
	const showListeUtilisateurs = ref(false)
	const showChanger = ref(false)
	const showElecteurInscrit = ref(false)
	const showBureauActifs = ref(false)
	const showTauxParticipation = ref(false)
	const showNombreTotalVotes = ref(false)
	const showMesTaches = ref(false)
	const showAutres = ref(false)

	 




	
	
	




	


	
	//condition non ternaire
	function setOption(option) { //set option ampesaign @condition jiaby, na showElectionFunc na showElecteurFunc na ...
		optionText.value = option
		//for election
		if (option === 'Année électorale') { 
			showElectionFunc()
			showAnneElectoral.value = true
		} else {
			showAnneElectoral.value = false
		}
	
		if (option === 'Genre élection') {
			showElectionFunc()
			showGenreElection.value = true
		} else {
			showGenreElection.value = false
		}
		//for electeur
		if (option === 'Liste complète des électeurs') {
			showElecteurFunc()
			showListeElecteurs.value = true
		} else {
			showListeElecteurs.value = false
		}

		if (option === 'Filtrage et recherche') {
			showElecteurFunc()
			showFiltrageRecherche.value = true
		} else {
			showFiltrageRecherche.value = false
		}

		if (option === 'Actions de gestion') {
			showElecteurFunc()
			showActionsGestion.value = true
		} else {
			showActionsGestion.value = false
		}
		
		if (option === 'Surveillance') {
			showElecteurFunc()
			showSurveillance.value = true
		} else {
			showSurveillance.value = false
		}

		//for bureaux
		if (option === 'Par quartier') { 
			showBureauFunc()
			showParQuartier.value = true
		} else {
			showParQuartier.value = false
		}

		if (option === 'Par région') { 
			showBureauFunc()
			showParRegion.value = true
		} else {
			showParRegion.value = false
		}
		
		
		//for utilisateur
		if (option === 'Ajout des utilisateurs') { 
			showUtilisateurFunc()
			showAjoutUtilisateur.value = true
		} else {
			showAjoutUtilisateur.value = false
		}

		if (option === 'Liste des utilisateurs') { 
			showUtilisateurFunc()
			showListeUtilisateurs.value = true
		} else {
			showListeUtilisateurs.value = false
		}

		if (option === 'Changer') { 
			showUtilisateurFunc()
			showChanger.value = true
		} else {
			showChanger.value = false
		}
		
		//for statistique
		if (option === 'Nombre total inscrit des électeurs') { 
			showStatistiqueFunc()
			showElecteurInscrit.value = true
		} else {
			showElecteurInscrit.value = false
		}
		if (option === 'Nombre de bureaux de vote actifs') { 
			showStatistiqueFunc()
			showBureauActifs.value = true
		} else {
			showBureauActifs.value = false
		}
		if (option === 'Taux de participation global') { 
			showStatistiqueFunc()
			showTauxParticipation.value = true
		} else {
			showTauxParticipation.value = false
		}
		if (option === 'Nombre total de votes enregistrés') { 
			showStatistiqueFunc()
			showNombreTotalVotes.value = true
		} else {
			showNombreTotalVotes.value = false
		}

		//for historique
		if (option === 'Mes tâches') { 
			showHistoriqueFunc()
			showMesTaches.value = true
		} else {
			showMesTaches.value = false
		}
		if (option === 'Autres') { 
			showHistoriqueFunc()
			showAutres.value = true
		} else {
			showAutres.value = false
		}
		
		
	}

	

	/*function showAnneElectoralFunc() {
		showAnneElectoral.value = ! showAnneElectoral.value;
		showElectionFunc();
	}
*/
	return {
		showLogin,
		showLoginFunc,

		showSingUp,
		showSingUpFunc,

		showDashboard,
		showDashboardFunc,

		showDesc,
		showDescFunc,

		showElection,
		showElectionFunc,

		showCandidat,
		showCandidatFunc,

		showElecteur,
		showElecteurFunc,

		showBureau,
		showBureauFunc,

		showUtilisateur,
		showUtilisateurFunc,

		showStatistique,
		showStatistiqueFunc,

		showHistorique,
		showHistoriqueFunc,

		selectSideBar,
		setSelectSideBar,

//active
		showElectionActive,
		showElecteursActive, 
		showBureauxActive,
		showUtilisateurActive,
		showStatistiquesActive,
		showHistoriqueActive,
		
//importation subsection list
		optionText,
		setOption,
		showAnneElectoral,
		showGenreElection,
		showListeElecteurs,
		showFiltrageRecherche,
		showActionsGestion,
		showSurveillance,
		showParQuartier,
		showParRegion,
		showAjoutUtilisateur,
		showListeUtilisateurs,
		showChanger,
		showElecteurInscrit,
		showBureauActifs,
		showTauxParticipation,	
		showNombreTotalVotes,
		showMesTaches,
		showAutres,


	}


})
