<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Formulaire de Commentaires</title
</head>
<body>
    <h1>Laissez un commentaire :</h1>
    <textarea id="commentaire" placeholder="Votre commentaire"></textarea>
    <br>
    <button id="envoyer">Envoyer</button>
    
    <div id="liste-commentaires"></div>

    <script>
        const commentaireInput = document.getElementById('commentaire');
        const envoyerBtn = document.getElementById('envoyer');
        const listeCommentaires = document.getElementById('liste-commentaires');

        envoyerBtn.addEventListener('click', function() {
            const commentaire = commentaireInput.value;
            if(commentaire.trim() !== '') {
                const nouveauCommentaire = document.createElement('p');
                nouveauCommentaire.textContent = commentaire;
                listeCommentaires.appendChild(nouveauCommentaire);
                commentaireInput.value = '';
            } else {
                alert('Veuillez saisir un commentaire valide.');
            }
        });
    </script>
</body>
</html>
