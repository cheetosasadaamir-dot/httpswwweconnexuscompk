import { motion } from "framer-motion";
import { FileText, Clock, Award } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";

interface CaseStudyCardProps {
 caseStudy: CaseStudy;
 onClick:  => void;
 isSelected: boolean;
}

const CaseStudyCard = ({ caseStudy, onClick, isSelected }: CaseStudyCardProps) => {
 const totalMarks = caseStudy.questions.reduce((sum, q) => sum + q.marks, 0);
 
 return (
 <motion.div
 whileHover={{ scale: 1.02, y: -4 }}
 whileTap={{ scale: 0.98 }}
 onClick={onClick}
 className={`glass-card-hover cursor-pointer p-6 transition-all duration-300 ${
 isSelected 
 ? "ring-2 ring-primary shadow-[0_0_30px_rgba(59,130,246,0.3)]": ""
 }`}
 >
 <div className="flex items-start justify-between mb-4">
 <div className="flex items-center gap-3">
 <div className="p-2 rounded-lg bg-primary/20">
 <FileText className="w-5 h-5 text-primary" />
 </div>
 <div>
 <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
 {caseStudy.paperCode}
 </span>
 <p className="text-xs text-muted-foreground">
 {caseStudy.session} {caseStudy.year}
 </p>
 </div>
 </div>
 <div className="flex items-center gap-1 text-xs text-cambridge-cyan">
 <Award className="w-4 h-4" />
 <span>{totalMarks} marks</span>
 </div>
 </div>
 
 <h3 className="font-['Playfair_Display'] text-lg font-semibold text-foreground mb-3 line-clamp-2">
 {caseStudy.title}
 </h3>
 
 <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
 {caseStudy.paragraphs[0]}
 </p>
 
 <div className="flex items-center justify-between pt-4 border-t border-border/50">
 <div className="flex items-center gap-4 text-xs text-muted-foreground">
 <span className="flex items-center gap-1">
 <Clock className="w-3 h-3" />
 {caseStudy.questions.length} questions
 </span>
 <span>{caseStudy.tables.length} data table{caseStudy.tables.length !== 1 ? 's': ''}</span>
 </div>
 <motion.span
 initial={{ opacity: 0 }}
 animate={{ opacity: isSelected ? 1: 0.6 }}
 className="text-xs text-primary"
 >
 {isSelected ? "Selected": "Click to view"}
 </motion.span>
 </div>
 </motion.div>
 );
};

export default CaseStudyCard;
