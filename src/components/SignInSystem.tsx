// 'use client'; // Add this at the top for App Router

// // [Paste the entire component code from the artifact here]

// import React, { useState, useEffect } from 'react';
// import { Mail, User, CheckCircle, ArrowRight, Shield } from 'lucide-react';

// const SignInSystem = () => {
//   const [mode, setMode] = useState<'initial' | 'guest' | 'email' | 'sent' | 'signed-in'>('initial');
//   const [email, setEmail] = useState('');
//   const [guestId, setGuestId] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   // Generate guest ID
//   const generateGuestId = () => 'guest_' + Math.random().toString(36).substr(2, 9);

//   // Guest sign-in
//   const handleGuestSignIn = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       const newGuestId = generateGuestId();
//       setGuestId(newGuestId);
//       setMode('signed-in');
//       setIsLoading(false);
//     }, 1000);
//   };

//   // Email magic link
//   const handleEmailSignIn = () => {
//     if (!email.trim()) return;
//     setIsLoading(true);
//     setTimeout(() => {
//       setMode('sent');
//       setIsLoading(false);
//     }, 1500);
//   };

//   // Simulate magic link verification
//   const handleMagicLinkVerification = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setMode('signed-in');
//       setIsLoading(false);
//     }, 2000);
//   };

//   return (
//     <div>
//       {/* You can render different UIs here depending on mode */}
//       <h2>Sign In System</h2>
//     </div>
//   );
// };

// export default SignInSystem;

'use client';

// import React, { useState } from 'react';
// import { Mail, User, CheckCircle, ArrowRight, Shield } from 'lucide-react';

// type Mode = 'initial' | 'email' | 'sent' | 'signed-in';

// export default function SignInSystem() {
//   const [mode, setMode] = useState<Mode>('initial');
//   const [email, setEmail] = useState('');
//   const [guestId, setGuestId] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const generateGuestId = () => 'guest_' + Math.random().toString(36).substr(2, 9);

//   const handleGuestSignIn = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       const id = generateGuestId();
//       setGuestId(id);
//       setMode('signed-in');
//       setIsLoading(false);
//     }, 900);
//   };

//   const handleStartEmail = () => setMode('email');

//   const handleEmailSignIn = () => {
//     if (!email.trim()) return;
//     setIsLoading(true);
//     // simulate API sending magic link
//     setTimeout(() => {
//       setIsLoading(false);
//       setMode('sent');
//     }, 1200);
//   };

//   const handleMagicLinkVerification = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       setMode('signed-in');
//     }, 1100);
//   };

//   const handleSignOut = () => {
//     setEmail('');
//     setGuestId('');
//     setMode('initial');
//   };

//   // Simple inline styles so you can paste without extra setup
//   const box: React.CSSProperties = {
//     maxWidth: 420,
//     margin: '0 auto',
//     padding: 20,
//     borderRadius: 12,
//     boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
//     background: 'white',
//     fontFamily: 'Inter, system-ui, sans-serif',
//   };
//   const btn: React.CSSProperties = {
//     display: 'inline-flex',
//     gap: 8,
//     alignItems: 'center',
//     padding: '10px 14px',
//     borderRadius: 8,
//     border: '1px solid #e6e6e6',
//     cursor: 'pointer',
//     background: '#f9fafb',
//   };
//   const primaryBtn: React.CSSProperties = { ...btn, background: '#111827', color: 'white', border: 'none' };
//   const inputStyle: React.CSSProperties = { width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e6e6e6', marginTop: 8 };

//   return (
//     <div style={box}>
//       <header style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}>
//         <Shield size={22} />
//         <div>
//           <h3 style={{ margin: 0 }}>Sign in</h3>
//           <small style={{ color: '#6b7280' }}>Choose a quick way to get started</small>
//         </div>
//       </header>

//       {mode === 'initial' && (
//         <div style={{ display: 'grid', gap: 12 }}>
//           <button style={primaryBtn} onClick={handleGuestSignIn} disabled={isLoading}>
//             <User size={16} />
//             {isLoading ? 'Signing in...' : 'Continue as Guest'}
//           </button>

//           <button style={btn} onClick={handleStartEmail} aria-label="Sign in with email">
//             <Mail size={16} />
//             Sign in with email
//             <ArrowRight size={14} style={{ marginLeft: 'auto' }} />
//           </button>
//         </div>
//       )}

//       {mode === 'email' && (
//         <div style={{ display: 'grid', gap: 10 }}>
//           <label style={{ fontSize: 13, color: '#374151' }}>Email address</label>
//           <input
//             style={inputStyle}
//             type="email"
//             placeholder="you@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             disabled={isLoading}
//           />
//           <div style={{ display: 'flex', gap: 8 }}>
//             <button style={primaryBtn} onClick={handleEmailSignIn} disabled={isLoading}>
//               {isLoading ? 'Sending...' : 'Send magic link'}
//             </button>
//             <button style={btn} onClick={() => setMode('initial')} disabled={isLoading}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}

//       {mode === 'sent' && (
//         <div style={{ display: 'grid', gap: 12, alignItems: 'center' }}>
//           <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
//             <CheckCircle size={20} color="#10b981" />
//             <div>
//               <strong>Magic link sent</strong>
//               <div style={{ fontSize: 13, color: '#6b7280' }}>Check your inbox for the sign-in link.</div>
//             </div>
//           </div>

//           <div style={{ display: 'flex', gap: 8 }}>
//             <button style={primaryBtn} onClick={handleMagicLinkVerification} disabled={isLoading}>
//               {isLoading ? 'Verifying...' : "I clicked the link"}
//             </button>
//             <button style={btn} onClick={() => setMode('email')} disabled={isLoading}>
//               Resend / Change email
//             </button>
//           </div>
//         </div>
//       )}

//       {mode === 'signed-in' && (
//         <div style={{ display: 'grid', gap: 12 }}>
//           <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
//             <CheckCircle size={20} color="#10b981" />
//             <div>
//               <strong>You're signed in</strong>
//               <div style={{ fontSize: 13, color: '#6b7280' }}>
//                 {guestId ? `Guest ID: ${guestId}` : `Signed in as ${email || 'user'}`}
//               </div>
//             </div>
//           </div>

//           <div style={{ display: 'flex', gap: 8 }}>
//             <button style={btn} onClick={() => alert('Proceeding to app...')}>
//               Continue
//             </button>
//             <button style={btn} onClick={handleSignOut}>
//               Sign out
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Mail, User, CheckCircle, ArrowRight, Shield } from 'lucide-react';

const SignInSystem = () => {
  const [mode, setMode] = useState('initial'); // initial, guest, email, sent, signed-in
  const [email, setEmail] = useState('');
  const [guestId, setGuestId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Generate guest ID
  const generateGuestId = () => {
    return 'guest_' + Math.random().toString(36).substr(2, 9);
  };

  // Guest sign-in
  const handleGuestSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newGuestId = generateGuestId();
      setGuestId(newGuestId);
      setMode('signed-in');
      setIsLoading(false);
    }, 1000);
  };

  // Email magic link
  const handleEmailSignIn = () => {
    if (!email.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setMode('sent');
      setIsLoading(false);
    }, 1500);
  };

  // Simulate magic link verification
  const handleMagicLinkVerification = () => {
    setIsLoading(true);
    setTimeout(() => {
      setMode('signed-in');
      setIsLoading(false);
    }, 1000);
  };

  // Convert guest to email account
  const convertGuestAccount = () => {
    if (!email.trim()) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setMode('sent');
      setIsLoading(false);
    }, 1500);
  };

  const renderInitialScreen = () => (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome</h1>
        <p className="text-gray-600">Choose how you'd like to continue</p>
      </div>

      <div className="space-y-4">
        {/* Guest Mode */}
        <button
          onClick={handleGuestSignIn}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-3 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
        >
          <User size={20} />
          {isLoading ? 'Signing in...' : 'Continue as Guest'}
        </button>

        <div className="flex items-center gap-3 text-sm text-gray-500">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span>or</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Email Sign-in */}
        <button
          onClick={() => setMode('email')}
          className="w-full flex items-center justify-center gap-3 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Mail size={20} />
          Sign in with Email
        </button>
      </div>

      <div className="text-xs text-gray-500 space-y-1">
        <div className="flex items-center gap-2">
          <CheckCircle size={12} className="text-green-500" />
          <span>Guest mode: Start immediately, no email required</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield size={12} className="text-blue-500" />
          <span>Email sign-in: Secure your account and sync across devices</span>
        </div>
      </div>
    </div>
  );

  const renderEmailScreen = () => (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Sign in with Email</h1>
        <p className="text-gray-600">We'll send you a secure magic link</p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          onClick={handleEmailSignIn}
          disabled={isLoading || !email.trim()}
          className="w-full flex items-center justify-center gap-3 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
        >
          <Mail size={20} />
          {isLoading ? 'Sending...' : 'Send Magic Link'}
        </button>
      </div>

      <button
        onClick={() => setMode('initial')}
        className="w-full text-gray-500 hover:text-gray-700 py-2"
      >
        Back to options
      </button>
    </div>
  );

  const renderSentScreen = () => (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail size={24} className="text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h1>
        <p className="text-gray-600">
          We sent a magic link to <span className="font-medium">{email}</span>
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          Click the link in your email to sign in. The link will expire in 15 minutes.
        </p>
      </div>

      {/* Simulate magic link button for demo */}
      <button
        onClick={handleMagicLinkVerification}
        disabled={isLoading}
        className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 text-sm"
      >
        {isLoading ? 'Verifying...' : '🔗 Simulate Magic Link Click (Demo)'}
      </button>

      <button
        onClick={() => setMode('email')}
        className="w-full text-gray-500 hover:text-gray-700 py-2"
      >
        Try different email
      </button>
    </div>
  );

  const renderSignedInScreen = () => (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={24} className="text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome!</h1>
        <p className="text-gray-600">
          {guestId ? `Signed in as guest (${guestId})` : `Signed in as ${email}`}
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
        <h3 className="font-medium text-gray-900">Your account status:</h3>
        {guestId ? (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-amber-700">
              <User size={16} />
              <span>Guest account - data stored locally</span>
            </div>
            <p className="text-xs text-gray-600">
              Consider linking an email to sync across devices and secure your account.
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm text-green-700">
            <Shield size={16} />
            <span>Email-verified account - synced across devices</span>
          </div>
        )}
      </div>

      {guestId && (
        <div className="space-y-4">
          <div>
            <label htmlFor="convert-email" className="block text-sm font-medium text-gray-700 mb-2">
              Link Email Address (Optional)
            </label>
            <input
              id="convert-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={convertGuestAccount}
            disabled={isLoading || !email.trim()}
            className="w-full flex items-center justify-center gap-3 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 text-sm"
          >
            <ArrowRight size={16} />
            {isLoading ? 'Converting...' : 'Convert to Email Account'}
          </button>
        </div>
      )}

      <button
        onClick={() => {
          setMode('initial');
          setEmail('');
          setGuestId('');
        }}
        className="w-full text-gray-500 hover:text-gray-700 py-2 text-sm"
      >
        Sign out
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {mode === 'initial' && renderInitialScreen()}
      {mode === 'email' && renderEmailScreen()}
      {mode === 'sent' && renderSentScreen()}
      {mode === 'signed-in' && renderSignedInScreen()}
    </div>
  );
};

export default SignInSystem;