
document.getElementById("inscriptionForm").addEventListener("submit", function (e) 
{
                e.preventDefault();
                const nomUtilisateur = document.getElementById("nomUtilisateur").value;
                const motDePasse = document.getElementById("motDePasse").value;
                
                // Enregistrement des données d'inscription dans localStorage
                localStorage.setItem(nomUtilisateur, motDePasse);

                document.getElementById("message").innerText = "Inscription réussie. Vous pouvez maintenant vous connecter.";
});


let connex = document.getElementById("connexionForm");
console.log(connex);
connex.addEventListener("submit",  (e) => 
{
    e.preventDefault();
    const nomUtilisateurConnexion = document.getElementById("nomUtilisateurConnexion").value;
    const motDePasseConnexion = document.getElementById("motDePasseConnexion").value;

            
    const motDePasseStocke = localStorage.getItem(nomUtilisateurConnexion);

    if (motDePasseStocke === motDePasseConnexion) 
    {
        document.getElementById("message").innerText = "Connexion réussie !";
    } 
    else 
        {
            document.getElementById("message").innerText = "Nom d'utilisateur ou mot de passe incorrect.";
        }
});
    