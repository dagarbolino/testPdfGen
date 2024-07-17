import InfoPerso from './propsType/InfoPerso';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PdfGenerator = () => {
  const handleGeneratePDF = () => {
    const input = document.getElementById('content-to-pdf');
    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });

        const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('download.pdf');
      })
      .catch((error) => {
        console.error("Erreur lors de la génération du PDF: ", error);
      });
  };

  return <InfoPerso onGeneratePDF={handleGeneratePDF} />;
};

export default PdfGenerator;