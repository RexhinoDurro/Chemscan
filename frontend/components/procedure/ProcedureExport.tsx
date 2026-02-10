'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import type { ProcedureResponse } from '@/lib/types';

interface ProcedureExportProps {
  procedure: ProcedureResponse;
}

export function ProcedureExport({ procedure }: ProcedureExportProps) {
  const exportPDF = async () => {
    const { default: jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    let y = 20;

    doc.setFontSize(18);
    doc.text(procedure.title, 20, y);
    y += 10;

    doc.setFontSize(10);
    doc.text(`Estimated Time: ${procedure.estimated_time}`, 20, y);
    y += 10;

    if (procedure.safety_warnings.length > 0) {
      doc.setFontSize(14);
      doc.text('Safety Warnings', 20, y);
      y += 7;
      doc.setFontSize(10);
      procedure.safety_warnings.forEach((w) => {
        doc.text(`! ${w}`, 25, y);
        y += 6;
      });
      y += 4;
    }

    doc.setFontSize(14);
    doc.text('Materials', 20, y);
    y += 7;
    doc.setFontSize(10);
    procedure.materials.forEach((m) => {
      const text = m.quantity ? `${m.item} - ${m.quantity}` : m.item;
      doc.text(`- ${text}`, 25, y);
      y += 6;
    });
    y += 4;

    doc.setFontSize(14);
    doc.text('Procedure', 20, y);
    y += 7;
    doc.setFontSize(10);
    procedure.steps.forEach((step) => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
      doc.text(`${step.number}. ${step.instruction}`, 25, y);
      y += 6;
      if (step.notes) {
        doc.setFontSize(8);
        doc.text(`   Note: ${step.notes}`, 30, y);
        doc.setFontSize(10);
        y += 5;
      }
    });
    y += 4;

    if (procedure.cleanup.length > 0) {
      if (y > 260) {
        doc.addPage();
        y = 20;
      }
      doc.setFontSize(14);
      doc.text('Cleanup', 20, y);
      y += 7;
      doc.setFontSize(10);
      procedure.cleanup.forEach((c, i) => {
        doc.text(`${i + 1}. ${c}`, 25, y);
        y += 6;
      });
    }

    doc.save(`${procedure.title.replace(/\s+/g, '_')}.pdf`);
  };

  return (
    <Button onClick={exportPDF} variant="outline">
      <Download className="h-4 w-4 mr-2" />
      Export PDF
    </Button>
  );
}
