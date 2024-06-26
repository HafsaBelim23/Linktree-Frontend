const shareButtons = document.querySelectorAll('.tile-share-button')

async function copyText(e){
    e.preventDefault();
    const copyLink = this.getAttribute('link');
    try{
        await navigator.clipboard.writeText(copyLink)
        alert("Copied!")
    }catch (err){
        console.log(err)
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))