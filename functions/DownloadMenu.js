import PDF from '../src/assets/galerieImages/Menu.pdf';
 
 const DownloadMenu = () => {
    setTimeout(() => {
      const downloadLink = document.createElement('a');
      downloadLink.href = PDF;
      downloadLink.download = PDF;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink)
    }, 5000);
  }

  export default DownloadMenu;