boutonCreer = document.getElementById('boutonCreer');
boutonConfirmer = document.getElementById('creerCollaborateur');

boutonCreer.addEventListener('click', function() {
    var nom = document.getElementById('nom').value,
        prenom = document.getElementById('prenom').value,
        dateNaissance = document.getElementById('dateNaissance').value,
        adresse = document.getElementById('adresse').value,
        numeroSecu = document.getElementById('numeroSecu').value;

    var ligneNom = document.getElementById('ligneNom'),
        lignePrenom = document.getElementById('lignePrenom'),
        ligneDateNaissance = document.getElementById('ligneDateNaissance'),
        ligneAdresse = document.getElementById('ligneAdresse'),
        ligneSecu = document.getElementById('ligneSecu');

    ligneNom.innerHTML = nom;
    lignePrenom.innerHTML = prenom;
    ligneDateNaissance.innerHTML = dateNaissance;
    ligneAdresse.innerHTML = adresse;
    ligneSecu.innerHTML = numeroSecu;

    $('#myModal').modal('show');
});

boutonConfirmer.addEventListener('click', function() {
    var formulaire = document.getElementById('formulaireCreationCollaborateur');
    formulaire.submit();
})