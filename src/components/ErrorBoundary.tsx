import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ErrorBoundaryProps {
 children: ReactNode;
}

interface ErrorBoundaryState {
 hasError: boolean;
 error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
 constructor(props: ErrorBoundaryProps) {
 super(props);
 this.state = { hasError: false, error: null };
 }

 static getDerivedStateFromError(error: Error): ErrorBoundaryState {
 return { hasError: true, error };
 }

 componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
 console.error('Page Error:', error, errorInfo);
 }

 render {
 if (this.state.hasError) {
 return (
 <div className="min-h-screen bg-background flex items-center justify-center px-6">
 <div className="text-center max-w-md">
 <h2 className="font-['Playfair_Display'] text-2xl font-bold mb-4 text-foreground">
 Something went wrong
 </h2>
 <p className="text-muted-foreground mb-6 text-sm">
 This section failed to load. Please try again.
 </p>
 <div className="flex gap-3 justify-center">
 <button
 onClick={ => this.setState({ hasError: false, error: null })}
 className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
 >
 Try Again
 </button>
 <Link
 to="/"
 onClick={ => this.setState({ hasError: false, error: null })}
 className="px-5 py-2.5 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
 >
 Go Home
 </Link>
 </div>
 </div>
 </div>
 );
 }

 return this.props.children;
 }
}

export default ErrorBoundary;
