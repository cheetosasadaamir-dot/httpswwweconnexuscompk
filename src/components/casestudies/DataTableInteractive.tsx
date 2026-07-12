import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { DataTable } from "@/data/caseStudies";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface DataTableInteractiveProps {
 table: DataTable;
 isHighlighted?: boolean;
}

const DataTableInteractive = ({ table, isHighlighted }: DataTableInteractiveProps) => {
 const [showCalculator, setShowCalculator] = useState(false);
 const [selectedCells, setSelectedCells] = useState<[number, number][]>([]);

 const calculateChange =  => {
 if (selectedCells.length !== 2) return null;
 
 const [first, second] = selectedCells;
 const val1 = parseFloat(table.rows[first[0]][first[1]]);
 const val2 = parseFloat(table.rows[second[0]][second[1]]);
 
 if (isNaN(val1) || isNaN(val2)) return null;
 
 const absoluteChange = val2 - val1;
 const percentChange = ((val2 - val1) / val1) * 100;
 
 return { absoluteChange, percentChange, val1, val2 };
 };

 const toggleCellSelection = (rowIdx: number, colIdx: number) => {
 if (!showCalculator) return;
 
 const cellKey: [number, number] = [rowIdx, colIdx];
 const existingIndex = selectedCells.findIndex(
 ([r, c]) => r === rowIdx && c === colIdx
 );
 
 if (existingIndex >= 0) {
 setSelectedCells(selectedCells.filter((_, i) => i !== existingIndex));
 } else if (selectedCells.length < 2) {
 setSelectedCells([...selectedCells, cellKey]);
 } else {
 setSelectedCells([cellKey]);
 }
 };

 const result = calculateChange;

 return (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className={`glass-card p-6 transition-all duration-500 ${
 isHighlighted 
 ? "ring-2 ring-cambridge-cyan shadow-[0_0_40px_rgba(0,255,255,0.2)]": ""
 }`}
 >
 <div className="flex items-center justify-between mb-4">
 <h4 className="font-['Playfair_Display'] text-lg font-semibold text-foreground">
 {table.title}
 </h4>
 <Button
 variant="outline"
 size="sm"
 onClick={ => {
 setShowCalculator(!showCalculator);
 setSelectedCells([]);
 }}
 className={`transition-all ${
 showCalculator ? "bg-cambridge-cyan/20 border-cambridge-cyan": ""
 }`}
 >
 <Calculator className="w-4 h-4 mr-2" />
 {showCalculator ? "Close Calculator": "Calculate"}
 </Button>
 </div>

 <AnimatePresence>
 {showCalculator && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: "auto", opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 className="mb-4 p-4 rounded-lg bg-muted/30 border border-border/50"
 >
 <p className="text-sm text-muted-foreground mb-2">
 Click two numeric cells to calculate the change between them.
 </p>
 {result && (
 <div className="flex items-center gap-4 mt-3">
 <div className="flex items-center gap-2">
 {result.absoluteChange > 0 ? (
 <TrendingUp className="w-4 h-4 text-green-400" />
 ): result.absoluteChange < 0 ? (
 <TrendingDown className="w-4 h-4 text-red-400" />
 ): (
 <Minus className="w-4 h-4 text-muted-foreground" />
 )}
 <span className="text-sm">
 Absolute: <strong>{result.absoluteChange > 0 ? "+": ""}{result.absoluteChange.toFixed(2)}</strong>
 </span>
 </div>
 <div className="text-sm">
 Percentage: <strong>{result.percentChange > 0 ? "+": ""}{result.percentChange.toFixed(1)}%</strong>
 </div>
 <div className="text-xs text-muted-foreground ml-auto">
 Formula: ((New - Old) / Old) × 100
 </div>
 </div>
 )}
 </motion.div>
 )}
 </AnimatePresence>

 <div className="overflow-x-auto">
 <Table>
 <TableHeader>
 <TableRow>
 {table.headers.map((header, idx) => (
 <TableHead key={idx} className="text-foreground font-semibold">
 {header}
 </TableHead>
 ))}
 </TableRow>
 </TableHeader>
 <TableBody>
 {table.rows.map((row, rowIdx) => (
 <TableRow key={rowIdx}>
 {row.map((cell, colIdx) => {
 const isSelected = selectedCells.some(
 ([r, c]) => r === rowIdx && c === colIdx
 );
 const isNumeric = !isNaN(parseFloat(cell));
 
 return (
 <TableCell
 key={colIdx}
 onClick={ => isNumeric && toggleCellSelection(rowIdx, colIdx)}
 className={`transition-all ${
 showCalculator && isNumeric
 ? "cursor-pointer hover:bg-primary/20": ""
 } ${
 isSelected
 ? "bg-cambridge-cyan/30 ring-1 ring-cambridge-cyan": ""
 }`}
 >
 {cell}
 </TableCell>
 );
 })}
 </TableRow>
 ))}
 </TableBody>
 </Table>
 </div>

 {table.source && (
 <p className="text-xs text-muted-foreground mt-4 italic">
 Source: {table.source}
 </p>
 )}
 </motion.div>
 );
};

export default DataTableInteractive;
