CHEMSCAN: School Project Edition
Let me refine this into something achievable, impressive, and genuinely useful for a school project while keeping the core value.

🎯 Simplified Core Concept
"Chemistry Calculator that Actually Understands Your Lab Work"
Focus on ONE killer feature that solves a real problem:
→ Stoichiometry Calculator with Safety Warnings

What Makes This Version Achievable
Phase 1: MVP (School Project Scope - 4-6 weeks)
Core Features (Keep it Simple)

Input Method:

Text-based input (skip OCR for now - that's complex)
Simple form: paste or type chemical equation
Add quantities (grams, moles, or molarity + volume)


Computation Engine:

Balance chemical equations automatically
Calculate stoichiometry (limiting reagent, theoretical yield)
Show step-by-step math


Safety Checker:

Flag common hazards (acids + bases, oxidizers + fuels, water-reactive compounds)
Simple color-coded warnings (🟢 Safe / 🟡 Caution / 🔴 Danger)


Output:

Balanced equation
Required quantities for each reactant
Expected products and amounts
Safety warnings
Downloadable lab report (PDF)




💡 Improved Features That Add Real Value
What Makes This Better Than Just a Calculator:

Pre-Lab Planning Tool

Students input what they have in the lab
App calculates exactly what they need
Prevents waste and dangerous over-mixing


Common Reactions Library

Pre-loaded reactions students actually do:

Acid-base neutralizations
Precipitation reactions
Redox reactions
Combustion


One-click setup for common labs


Reverse Calculator

"I want to make 10g of NaCl, what do I need?"
App works backward from desired product


Lab Report Generator

Auto-generates calculation section
Students can fill in observations and conclusions
Saves hours of writeup time


Error Prevention

Warns if ratios are way off (like using 100x too much)
Checks if equation is chemically possible
Flags if concentration is unrealistically high/low




🛠️ Realistic Tech Stack for School Project
Frontend:
├── React or simple HTML/CSS/JavaScript
├── Clean, mobile-friendly interface
└── Chart.js for visualizing quantities

Backend/Logic:
├── Python Flask (simple web framework)
├── ChemPy or custom parser (reaction balancing)
├── Basic chemical database (JSON file with ~100 common compounds)
└── Simple rule-based safety checker

Deployment:
├── GitHub Pages (frontend) + free hosting (Render/Railway for backend)
└── Total cost: $0
No complex AI needed - rule-based logic is enough and more reliable!

📱 User Flow (Super Simple)
1. Student opens app
   ↓
2. Selects "Quick Reaction" or "Common Lab"
   ↓
3. Types: "HCl + NaOH" or picks from list
   ↓
4. Enters what they have:
   - 0.1 M HCl, 50 mL
   ↓
5. App instantly shows:
   ✓ Balanced: HCl + NaOH → NaCl + H₂O
   ✓ You need: 0.2g NaOH (0.005 mol)
   ✓ You'll make: 0.29g NaCl
   ⚠️ Caution: Exothermic - add slowly
   ↓
6. Downloads calculation sheet for lab report
Time to use: 2 minutes
Time saved: 20+ minutes of manual calculation

🎓 What Makes This a Great School Project
Demonstrates:

✅ Real-world problem solving
✅ Full-stack development
✅ Chemical knowledge application
✅ User interface design
✅ Safety awareness
✅ Practical utility

Presentation Highlights:

"Every chemistry student spends hours on stoichiometry homework"
"Lab accidents happen from calculation errors"
"This tool could save my class 10+ hours per semester"
Live demo with actual lab scenario
Survey classmates: "Would you use this?" (spoiler: yes!)


🚀 Development Roadmap
Week 1-2: Foundation

Build reaction balancer
Create basic UI
Test with 5-10 common reactions

Week 3-4: Enhancement

Add safety checker
Create common reactions library
Build PDF export

Week 5-6: Polish

Make it pretty
Add error handling
Test with real lab assignments
Create demo video


📊 Suggested Features Priority
Must Have (Core):

Equation balancer
Stoichiometry calculator
Basic safety warnings
Clean interface

Should Have (Impressive):

Common reactions library
Reverse calculator
PDF export
Step-by-step explanation

Nice to Have (If Time):

Save calculation history
Unit converter
Compound property lookup
Mobile app version

Skip for School Project:

❌ OCR/handwriting recognition (too complex)
❌ AI predictions (unnecessary)
❌ Complex reaction databases (use simple JSON)


💪 Your Competitive Advantages

It's FREE (other tools charge subscriptions)
It's FOCUSED (not trying to do everything)
It's SAFE (includes hazard warnings)
It's PRACTICAL (solves actual homework/lab problems)
It's YOURS (you understand every line of code)


🎯 Success Metrics

Works correctly for 20+ common reactions
Generates accurate calculations
Gives relevant safety warnings
Usable in under 5 minutes without instructions
Classmates actually want to use it


Alternative: Even Simpler "Minimum Viable Product"
If you want to start super small and expand:
Week 1 MVP:

Single page web app
Input: chemical equation + one quantity
Output: balanced equation + required amounts
That's it!

Then add one feature per week:

Week 2: Safety warnings
Week 3: PDF export
Week 4: Common reactions library
Week 5: Reverse calculator


Want me to:

Sketch the actual interface design (what buttons, where?)
Write starter code for the reaction balancer?
Create a detailed technical implementation plan (exactly what libraries, functions, etc.)?
Design the presentation/pitch for your teacher?

Pick what would help you most, and I'll create it! 🧪✨integrate photo analysis from like reactions handwritten, when user wants to create equations they can easily type, when they want to make a certain chemical reaction the program will basically tell them what tools do they need. how to operate for the equation to be successful and what hasards they need to prevent or risks.  right now i will build also a pwa app that can use photo capture for this,  but the ai will be gemini 2.5 free so these are the contstraints , now make the plan11:09 PMArchitected comprehensive chemistry app integrating vision, typing, and safety guidanceThe user wants to:

Integrate photo analysis for handwritten reactions
Allow typing for easy equation input
Add a "lab preparation" feature that tells users what tools/equipment they need
Include safety procedures and hazard prevention
Build as a PWA (Progressive Web App) with camera capture
Use Gemini 2.5 Flash (free tier) for AI

Key constraints:

Using free Gemini 2.5 Flash API
School project timeline
Must be achievable
PWA requirements (offline capability, camera access, installable)

I need to create a comprehensive plan that:

Works within Gemini's free tier limits
Leverages Gemini's vision capabilities for handwriting recognition
Uses Gemini smartly (not for every calculation, only for OCR and safety/procedure guidance)
Has a clear technical architecture
Is achievable in 6-8 weeks
Includes all the features they mentioned

Let me structure this properly:

Feature breakdown
Technical architecture
Gemini integration strategy (how to optimize free tier)
PWA requirements
Development roadmap
Code structure
Implementation details
Show moreDoneCHEMSCAN PWA: Complete Implementation Plan
With Gemini 2.5 Flash Integration

🎯 Final Feature Set
Three Core Workflows:

📸 Scan Handwritten Reaction

Take photo of handwritten equation/lab notes
Gemini extracts chemical formulas and quantities
Auto-populates calculator


⌨️ Type Reaction Manually

Quick text input for known reactions
Faster than scanning for simple cases


🧪 Lab Preparation Mode

Input desired reaction
Get complete lab procedure:

Equipment needed
Safety gear required
Step-by-step instructions
Hazard warnings & prevention
Emergency protocols






🏗️ Technical Architecture
CHEMSCAN PWA
│
├── Frontend (PWA)
│   ├── HTML/CSS/JavaScript
│   ├── Camera API (for photo capture)
│   ├── Service Worker (offline capability)
│   └── IndexedDB (local storage)
│
├── Backend (Lightweight)
│   ├── Python Flask (API server)
│   ├── Chemistry Engine (calculation logic)
│   └── Gemini Integration (AI features)
│
└── Services
    ├── Gemini 2.5 Flash API
    ├── Chemistry Database (JSON)
    └── Safety Database (JSON)

🤖 Gemini 2.5 Flash Integration Strategy
What Gemini Does (Vision + Language):

OCR for Handwritten Reactions (Vision API)

Extract chemical formulas from photos
Parse quantities and units
Identify reaction arrows and conditions


Lab Procedure Generation (Language API)

Generate step-by-step instructions
Explain safety procedures
Suggest alternative methods


Safety Analysis (Language API)

Analyze chemical combinations
Generate hazard warnings
Provide emergency response info



What Gemini Does NOT Do (To Save API Calls):

❌ Equation balancing (use algorithm)
❌ Stoichiometry math (use Python)
❌ Basic lookups (use local database)
❌ Simple validations (use rules)

API Call Optimization (Free Tier):
Gemini 2.5 Flash Free Limits:
- 15 requests per minute
- 1,500 requests per day
- 1 million tokens per day

Strategy:
✓ Cache Gemini responses locally
✓ Batch questions when possible
✓ Use Gemini only for complex tasks
✓ Store common reactions/procedures
✓ Implement request queue with delays

📱 PWA Requirements Checklist
javascript// manifest.json - Makes app installable
{
  "name": "ChemScan",
  "short_name": "ChemScan",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#2196F3",
  "icons": [...],
  "permissions": ["camera", "storage"]
}

// Service Worker - Offline capability
- Cache static assets
- Cache common reactions
- Queue API calls when offline
- Sync when back online

// Features Required:
✓ HTTPS (required for camera access)
✓ Responsive design (mobile-first)
✓ Touch-friendly UI
✓ Works offline for cached reactions
✓ Installable on home screen
✓ Fast loading (<3 seconds)
```

---

## **🗂️ Project Structure**
```
chemscan/
│
├── frontend/
│   ├── index.html
│   ├── styles/
│   │   ├── main.css
│   │   └── mobile.css
│   ├── js/
│   │   ├── app.js              # Main app logic
│   │   ├── camera.js           # Camera handling
│   │   ├── calculator.js       # Stoichiometry engine
│   │   ├── gemini-client.js    # Gemini API calls
│   │   └── storage.js          # IndexedDB wrapper
│   ├── sw.js                   # Service Worker
│   ├── manifest.json
│   └── icons/
│
├── backend/
│   ├── app.py                  # Flask server
│   ├── routes/
│   │   ├── analyze.py          # Photo analysis endpoint
│   │   ├── calculate.py        # Calculation endpoint
│   │   └── lab_prep.py         # Lab procedure endpoint
│   ├── engines/
│   │   ├── balancer.py         # Equation balancing
│   │   ├── stoichiometry.py    # Calculations
│   │   └── safety.py           # Safety checker
│   ├── integrations/
│   │   └── gemini_service.py   # Gemini API wrapper
│   └── data/
│       ├── compounds.json       # Chemical properties
│       ├── reactions.json       # Common reactions
│       ├── equipment.json       # Lab equipment
│       └── safety_rules.json    # Safety database
│
├── requirements.txt
├── .env                        # API keys
└── README.md
```

---

## **🔄 Complete User Workflows**

### **Workflow 1: Scan Handwritten Reaction**
```
User Flow:
1. Click "Scan Reaction" button
2. Camera opens in PWA
3. Take photo of handwritten equation
4. Show preview with "Analyze" button
5. [Gemini Vision API] Extract text & chemicals
6. Display extracted equation (user can edit)
7. User adds any missing quantities
8. [Python Engine] Calculate stoichiometry
9. Show results + safety warnings
10. Option: "Get Lab Procedure"
Gemini Prompt for OCR:
javascriptconst prompt = `
Analyze this image of a handwritten chemical reaction.

Extract:
1. Chemical formulas (reactants and products)
2. Any quantities (masses, volumes, concentrations)
3. Reaction conditions (temperature, catalyst, etc.)

Return as JSON:
{
  "reactants": ["H2SO4", "NaOH"],
  "products": ["Na2SO4", "H2O"],
  "quantities": [
    {"compound": "H2SO4", "amount": "0.1", "unit": "M", "volume": "50", "volume_unit": "mL"}
  ],
  "conditions": ["room temperature"]
}

If anything is unclear, mark it as "unclear" in the JSON.
`;
```

---

### **Workflow 2: Type Reaction Manually**
```
User Flow:
1. Click "Type Reaction"
2. Input field appears
3. Type: "HCl + NaOH" or select from common reactions
4. Add quantities in simple form
5. [Python Engine] Balance & calculate
6. Show results
7. Option: "Get Lab Procedure"
```

---

### **Workflow 3: Lab Preparation**
```
User Flow:
1. After calculation, click "Lab Prep"
2. [Gemini Language API] Generate procedure
3. Display:
   ├── Equipment Needed (from database + AI)
   ├── Safety Gear (gloves, goggles, etc.)
   ├── Step-by-step Procedure
   ├── Hazard Warnings (color-coded)
   ├── What to Do If... (emergency)
   └── Disposal Instructions
4. Download as PDF or save to history
Gemini Prompt for Lab Prep:
javascriptconst prompt = `
Generate a complete lab procedure for this reaction:
Reaction: ${balancedEquation}
Reactants: ${reactantsList}
Quantities: ${quantities}
Known hazards: ${safetyFlags}

Provide:
1. **Equipment Needed**: List all glassware, tools, and safety equipment
2. **Setup**: How to arrange equipment
3. **Procedure**: Step-by-step instructions (numbered, specific)
4. **Safety Precautions**: What to watch for, how to prevent accidents
5. **Hazards**: Specific risks with THIS reaction
6. **Emergency Response**: What to do if something goes wrong
7. **Cleanup & Disposal**: How to safely dispose of products

Be specific and practical for a school/university lab setting.
Format in clear sections with bullet points.
`;

⚙️ Core Chemistry Engine (Python)
1. Equation Balancer
python# backend/engines/balancer.py
from chempy import balance_stoichiometry
import re

def balance_equation(reactants, products):
    """
    Input: ['H2', 'O2'], ['H2O']
    Output: {'H2': 2, 'O2': 1, 'H2O': 2}
    """
    try:
        # Use chempy library
        reac, prod = balance_stoichiometry(
            set(reactants), 
            set(products)
        )
        return {'reactants': reac, 'products': prod}
    except:
        # Fallback to custom algorithm
        return custom_balance(reactants, products)

def parse_equation(equation_string):
    """
    Parse "2H2 + O2 -> 2H2O" into components
    """
    parts = equation_string.split('->')
    reactants = parse_side(parts[0])
    products = parse_side(parts[1])
    return reactants, products
2. Stoichiometry Calculator
python# backend/engines/stoichiometry.py
from chemicals import molecular_weight

class StoichiometryCalculator:
    def __init__(self, balanced_equation):
        self.equation = balanced_equation
        
    def calculate_from_mass(self, compound, mass_g):
        """Given mass of one compound, calculate all others"""
        mw = molecular_weight(compound)
        moles = mass_g / mw
        
        # Calculate other compounds based on stoichiometry
        results = {}
        for comp, coeff in self.equation.items():
            ratio = coeff / self.equation[compound]
            results[comp] = {
                'moles': moles * ratio,
                'mass_g': moles * ratio * molecular_weight(comp)
            }
        
        return results
    
    def find_limiting_reagent(self, quantities):
        """Determine which reactant runs out first"""
        # Implementation here
        pass
    
    def calculate_yield(self, limiting_reagent_moles):
        """Calculate theoretical yield of products"""
        # Implementation here
        pass
3. Safety Checker
python# backend/engines/safety.py
import json

class SafetyChecker:
    def __init__(self):
        with open('data/safety_rules.json') as f:
            self.rules = json.load(f)
    
    def check_reaction(self, reactants, products, conditions):
        """Check for hazards"""
        hazards = []
        
        # Check incompatible combinations
        if self._check_acid_base(reactants):
            hazards.append({
                'level': 'caution',
                'type': 'exothermic',
                'message': 'Acid-base reaction releases heat. Add slowly.',
                'prevention': 'Use ice bath, add dropwise'
            })
        
        # Check for toxic compounds
        for compound in reactants + products:
            if compound in self.rules['toxic']:
                hazards.append({
                    'level': 'danger',
                    'type': 'toxic',
                    'message': f'{compound} is toxic',
                    'prevention': 'Use fume hood, wear gloves'
                })
        
        # Check for explosive combinations
        # Check for water-reactive compounds
        # etc.
        
        return hazards

🔌 Gemini API Integration
python# backend/integrations/gemini_service.py
import google.generativeai as genai
import os
from functools import lru_cache
import hashlib

genai.configure(api_key=os.environ.get('GEMINI_API_KEY'))
model = genai.GenerativeModel('gemini-2.0-flash-exp')

class GeminiService:
    def __init__(self):
        self.request_count = 0
        self.cache = {}
    
    @lru_cache(maxsize=100)
    def analyze_image(self, image_path):
        """Extract chemical equation from image"""
        # Rate limiting check
        if self.request_count >= 15:
            time.sleep(60)  # Wait 1 minute
            self.request_count = 0
        
        # Check cache first
        img_hash = self._hash_image(image_path)
        if img_hash in self.cache:
            return self.cache[img_hash]
        
        # Call Gemini
        with open(image_path, 'rb') as img:
            response = model.generate_content([
                "Extract chemical formulas and quantities from this image...",
                {"mime_type": "image/jpeg", "data": img.read()}
            ])
        
        result = self._parse_json_response(response.text)
        
        # Cache result
        self.cache[img_hash] = result
        self.request_count += 1
        
        return result
    
    def generate_lab_procedure(self, reaction_data):
        """Generate step-by-step lab instructions"""
        prompt = self._build_procedure_prompt(reaction_data)
        
        response = model.generate_content(prompt)
        self.request_count += 1
        
        return self._format_procedure(response.text)
    
    def _hash_image(self, image_path):
        """Create hash for caching"""
        with open(image_path, 'rb') as f:
            return hashlib.md5(f.read()).hexdigest()

🌐 Flask API Endpoints
python# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from engines.balancer import balance_equation
from engines.stoichiometry import StoichiometryCalculator
from engines.safety import SafetyChecker
from integrations.gemini_service import GeminiService

app = Flask(__name__)
CORS(app)

gemini = GeminiService()
safety = SafetyChecker()

@app.route('/api/analyze-photo', methods=['POST'])
def analyze_photo():
    """Analyze uploaded photo of handwritten reaction"""
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400
    
    image = request.files['image']
    image_path = f'/tmp/{image.filename}'
    image.save(image_path)
    
    # Use Gemini to extract equation
    extracted = gemini.analyze_image(image_path)
    
    return jsonify(extracted)

@app.route('/api/calculate', methods=['POST'])
def calculate():
    """Perform stoichiometry calculations"""
    data = request.json
    
    # Balance equation (no AI needed)
    balanced = balance_equation(
        data['reactants'],
        data['products']
    )
    
    # Calculate stoichiometry
    calc = StoichiometryCalculator(balanced)
    results = calc.calculate_from_mass(
        data['given_compound'],
        data['given_mass']
    )
    
    # Check safety
    hazards = safety.check_reaction(
        data['reactants'],
        data['products'],
        data.get('conditions', {})
    )
    
    return jsonify({
        'balanced_equation': balanced,
        'calculations': results,
        'hazards': hazards
    })

@app.route('/api/lab-procedure', methods=['POST'])
def lab_procedure():
    """Generate complete lab procedure"""
    data = request.json
    
    # Use Gemini to generate procedure
    procedure = gemini.generate_lab_procedure(data)
    
    # Add equipment from database
    equipment = get_required_equipment(data['reactants'])
    
    return jsonify({
        'procedure': procedure,
        'equipment': equipment
    })

if __name__ == '__main__':
    app.run(debug=True)

📱 PWA Frontend (Key Components)
Camera Capture
javascript// frontend/js/camera.js
class CameraHandler {
    constructor() {
        this.stream = null;
        this.video = document.getElementById('camera-preview');
    }
    
    async startCamera() {
        try {
            this.stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment' } // Back camera
            });
            this.video.srcObject = this.stream;
        } catch (err) {
            console.error('Camera access denied:', err);
            alert('Please enable camera access');
        }
    }
    
    capturePhoto() {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        
        canvas.width = this.video.videoWidth;
        canvas.height = this.video.videoHeight;
        context.drawImage(this.video, 0, 0);
        
        return canvas.toDataURL('image/jpeg');
    }
    
    stopCamera() {
        if (this.stream) {
            this.stream.getTracks().forEach(track => track.stop());
        }
    }
}
Gemini Client
javascript// frontend/js/gemini-client.js
class GeminiClient {
    constructor() {
        this.apiUrl = '/api'; // Your Flask backend
        this.requestQueue = [];
    }
    
    async analyzePhoto(imageData) {
        const formData = new FormData();
        const blob = this.dataURLtoBlob(imageData);
        formData.append('image', blob, 'reaction.jpg');
        
        const response = await fetch(`${this.apiUrl}/analyze-photo`, {
            method: 'POST',
            body: formData
        });
        
        return await response.json();
    }
    
    async calculate(reactionData) {
        const response = await fetch(`${this.apiUrl}/calculate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reactionData)
        });
        
        return await response.json();
    }
    
    async getLabProcedure(reactionData) {
        const response = await fetch(`${this.apiUrl}/lab-procedure`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reactionData)
        });
        
        return await response.json();
    }
    
    dataURLtoBlob(dataURL) {
        const parts = dataURL.split(',');
        const contentType = parts[0].match(/:(.*?);/)[1];
        const raw = window.atob(parts[1]);
        const array = new Uint8Array(raw.length);
        
        for (let i = 0; i < raw.length; i++) {
            array[i] = raw.charCodeAt(i);
        }
        
        return new Blob([array], { type: contentType });
    }
}
Service Worker (Offline Support)
javascript// frontend/sw.js
const CACHE_NAME = 'chemscan-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles/main.css',
    '/js/app.js',
    '/js/calculator.js',
    '/data/common-reactions.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});

📅 Development Roadmap (6-8 Weeks)
Week 1-2: Foundation

✅ Set up project structure
✅ Build equation balancer (Python)
✅ Build stoichiometry calculator
✅ Create basic Flask API
✅ Design UI mockups

Deliverable: Working calculator with typed input

Week 3-4: PWA + Camera

✅ Convert to PWA (manifest, service worker)
✅ Implement camera capture
✅ Set up Gemini API integration
✅ Test OCR with sample images
✅ Build photo analysis endpoint

Deliverable: Can scan and extract equations

Week 5-6: Safety + Lab Prep

✅ Build safety checker with rules database
✅ Integrate Gemini for procedure generation
✅ Create equipment database
✅ Build lab procedure UI
✅ Add PDF export

Deliverable: Full lab preparation feature

Week 7-8: Polish + Testing

✅ Improve UI/UX
✅ Add offline capabilities
✅ Test with real lab scenarios
✅ Optimize Gemini API usage
✅ Create demo video
✅ Write documentation

Deliverable: Production-ready app

💾 Database Files (JSON)
compounds.json
json{
  "HCl": {
    "name": "Hydrochloric Acid",
    "molecular_weight": 36.46,
    "state": "aqueous",
    "hazards": ["corrosive", "toxic"],
    "storage": "Cool, dry place"
  },
  "NaOH": {
    "name": "Sodium Hydroxide",
    "molecular_weight": 40.00,
    "state": "solid",
    "hazards": ["corrosive"],
    "storage": "Airtight container"
  }
}
equipment.json
json{
  "acid_base_reaction": [
    "Beaker (250 mL)",
    "Stirring rod",
    "pH paper",
    "Safety goggles",
    "Nitrile gloves",
    "Lab coat"
  ],
  "titration": [
    "Burette",
    "Pipette",
    "Conical flask",
    "Indicator solution",
    "...
  ]
}
safety_rules.json
json{
  "incompatible_pairs": [
    {
      "compounds": ["acid", "base"],
      "hazard": "exothermic",
      "severity": "medium",
      "precaution": "Add slowly with stirring"
    }
  ],
  "toxic": ["HCN", "H2S", "CO", "Cl2"],
  "explosive": [
    {"compounds": ["NH3", "Cl2"], "condition": "any"}
  ]
}
```

---

## **🚀 Deployment Plan**

### **Free Hosting Options:**
```
Frontend PWA:
├── Netlify (free tier)
├── Vercel (free tier)
└── GitHub Pages

Backend API:
├── Render (free tier - 750 hrs/month)
├── Railway (free $5 credit/month)
└── PythonAnywhere (free tier - limited)

Database:
└── JSON files in repo (no external DB needed)
Environment Variables:
bash# .env
GEMINI_API_KEY=your_api_key_here
FLASK_ENV=production
ALLOWED_ORIGINS=https://your-app.netlify.app

📊 Testing Checklist
Functionality:

 Photo capture works on mobile
 OCR accurately extracts equations (>80% accuracy)
 Calculations are mathematically correct
 Safety warnings are relevant
 Lab procedures are practical
 PDF export works

Performance:

 Loads in <3 seconds
 Photo analysis <5 seconds
 Works offline (cached reactions)
 Handles slow connections

Compatibility:

 Works on Chrome (mobile + desktop)
 Works on Safari (iOS)
 Works on Firefox
 Installable as PWA


🎓 Presentation Tips
Demo Script:

Problem: Show manual calculation taking 10 minutes
Solution: Scan handwritten equation → instant results
Safety: Show hazard warning preventing accident
Lab Prep: Generate complete procedure in seconds
Impact: "Saves 2+ hours per lab session"

Key Talking Points:

"Used by chemistry students for homework & labs"
"Free alternative to paid tools"
"Built with modern web technology (PWA)"
"Gemini AI makes it smart, but math keeps it accurate"
"Could expand to physics, biology, etc."


🔧 Quick Start Commands
bash# Backend
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py

# Frontend (just open in browser)
cd frontend
python -m http.server 8000
# Open http://localhost:8000

# Or use live server in VS Code
```

---

## **📦 requirements.txt**
```
Flask==3.0.0
Flask-CORS==4.0.0
google-generativeai==0.3.0
chempy==0.8.0
chemicals==1.1.4
python-dotenv==1.0.0
Pillow==10.0.0
reportlab==4.0.0  # For PDF generation

Want me to now create:

The actual starter code (HTML + JS + Python files)?
Gemini prompt templates for different scenarios?
UI mockups showing exact layout?
Testing scenarios with sample reactions?

Let me know what to build next! 🧪✨now give a full propmt documentation so i can give to claude code11:15 PMArchitected comprehensive Claude Code prompt for CHEMSCAN PWA implementationThe user wants me to create a comprehensive prompt/documentation that they can give to Claude Code (the AI coding assistant) to build this CHEMSCAN PWA project. This needs to be very detailed, specific, and actionable so Claude Code can actually implement the entire project.
I need to create a document that:

Clearly explains the project goals and requirements
Provides complete technical specifications
Includes detailed file structure
Specifies exact implementation details for each component
Provides example code and prompts for Gemini integration
Includes testing requirements
Is structured in a way that Claude Code can work through systematically

This should be formatted as a single, comprehensive prompt that covers everything Claude Code needs to know to build the project from scratch.Show moreDoneCHEMSCAN PWA - Complete Development Prompt for Claude Code

PROJECT OVERVIEW
Build a Progressive Web App (PWA) called ChemScan - a chemistry calculation tool that helps students and lab technicians with stoichiometry calculations, safety analysis, and lab procedure generation.
Core Capabilities:

Photo Analysis: Scan handwritten chemical equations using camera → extract formulas via Gemini AI
Manual Input: Type chemical equations directly for quick calculations
Stoichiometry Calculator: Balance equations, calculate moles/mass, find limiting reagents
Safety Checker: Identify hazards and provide safety warnings
Lab Procedure Generator: Create complete lab instructions using Gemini AI
Offline Support: PWA with service worker for offline functionality

Tech Stack:

Frontend: Vanilla JavaScript, HTML5, CSS3 (PWA)
Backend: Python Flask (lightweight API)
AI: Google Gemini 2.0 Flash (free tier)
Chemistry: chempy, chemicals libraries
Storage: IndexedDB (client), JSON files (server)


PROJECT STRUCTURE
Create this exact folder structure:
chemscan/
│
├── frontend/
│   ├── index.html
│   ├── manifest.json
│   ├── sw.js                          # Service Worker
│   │
│   ├── css/
│   │   ├── main.css
│   │   ├── components.css
│   │   └── mobile.css
│   │
│   ├── js/
│   │   ├── app.js                     # Main application controller
│   │   ├── camera.js                  # Camera capture handler
│   │   ├── calculator.js              # Client-side calculation display
│   │   ├── api-client.js              # Backend API calls
│   │   ├── ui-manager.js              # UI state management
│   │   ├── storage.js                 # IndexedDB wrapper
│   │   └── pdf-export.js              # PDF generation
│   │
│   ├── assets/
│   │   ├── icons/
│   │   │   ├── icon-192.png
│   │   │   ├── icon-512.png
│   │   │   └── favicon.ico
│   │   └── images/
│   │       └── placeholder.png
│   │
│   └── data/
│       └── common-reactions.json      # Offline cache data
│
├── backend/
│   ├── app.py                         # Flask main application
│   ├── requirements.txt
│   ├── .env.example
│   │
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── analyze.py                 # Photo analysis endpoint
│   │   ├── calculate.py               # Calculation endpoint
│   │   └── lab_prep.py                # Lab procedure endpoint
│   │
│   ├── engines/
│   │   ├── __init__.py
│   │   ├── balancer.py                # Equation balancing algorithm
│   │   ├── stoichiometry.py           # Stoichiometry calculations
│   │   └── safety_checker.py          # Safety rules engine
│   │
│   ├── services/
│   │   ├── __init__.py
│   │   ├── gemini_service.py          # Gemini API integration
│   │   └── cache_service.py           # Response caching
│   │
│   └── data/
│       ├── compounds.json             # Chemical database
│       ├── equipment.json             # Lab equipment lists
│       ├── safety_rules.json          # Safety database
│       └── common_reactions.json      # Pre-loaded reactions
│
├── tests/
│   ├── test_balancer.py
│   ├── test_stoichiometry.py
│   └── test_api.py
│
├── docs/
│   ├── API.md
│   ├── SETUP.md
│   └── USER_GUIDE.md
│
├── .gitignore
├── README.md
└── LICENSE

DETAILED IMPLEMENTATION SPECIFICATIONS

1. BACKEND - Flask API
app.py - Main Flask Application
python"""
ChemScan Flask Backend
Main application file with CORS, error handling, and route registration
"""

from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from dotenv import load_dotenv
import os
import logging

# Import routes
from routes.analyze import analyze_bp
from routes.calculate import calculate_bp
from routes.lab_prep import lab_prep_bp

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app, origins=os.getenv('ALLOWED_ORIGINS', '*'))

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Register blueprints
app.register_blueprint(analyze_bp, url_prefix='/api/analyze')
app.register_blueprint(calculate_bp, url_prefix='/api/calculate')
app.register_blueprint(lab_prep_bp, url_prefix='/api/lab-prep')

# Health check endpoint
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'version': '1.0.0',
        'gemini_configured': os.getenv('GEMINI_API_KEY') is not None
    })

# Global error handler
@app.errorhandler(Exception)
def handle_error(error):
    logger.error(f"Error: {str(error)}")
    return jsonify({
        'error': str(error),
        'type': type(error).__name__
    }), 500

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    debug = os.getenv('FLASK_ENV') == 'development'
    app.run(host='0.0.0.0', port=port, debug=debug)
Requirements:

Implement CORS with configurable origins
Add request logging middleware
Add rate limiting for Gemini endpoints (15 req/min)
Handle file uploads with size limits (max 5MB)
Return consistent JSON error format


routes/analyze.py - Photo Analysis Endpoint
python"""
Photo analysis route
Handles image upload and chemical equation extraction using Gemini Vision API
"""

from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
from services.gemini_service import GeminiService
from services.cache_service import CacheService
import os
import hashlib

analyze_bp = Blueprint('analyze', __name__)
gemini_service = GeminiService()
cache_service = CacheService()

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'heic'}
MAX_FILE_SIZE = 5 * 1024 * 1024  # 5MB

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@analyze_bp.route('/photo', methods=['POST'])
def analyze_photo():
    """
    Analyze uploaded photo of handwritten chemical equation
    
    Expected: multipart/form-data with 'image' file
    Returns: JSON with extracted chemical data
    """
    
    # Validate request
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400
    
    file = request.files['image']
    
    if file.filename == '':
        return jsonify({'error': 'Empty filename'}), 400
    
    if not allowed_file(file.filename):
        return jsonify({'error': 'Invalid file type. Use PNG, JPG, or JPEG'}), 400
    
    # Check file size
    file.seek(0, os.SEEK_END)
    size = file.tell()
    if size > MAX_FILE_SIZE:
        return jsonify({'error': 'File too large. Max 5MB'}), 400
    file.seek(0)
    
    # Save temporarily
    filename = secure_filename(file.filename)
    temp_path = os.path.join('/tmp', filename)
    file.save(temp_path)
    
    try:
        # Check cache first (based on image hash)
        image_hash = hash_file(temp_path)
        cached_result = cache_service.get(f'ocr_{image_hash}')
        
        if cached_result:
            return jsonify({
                'cached': True,
                'data': cached_result
            })
        
        # Call Gemini Vision API
        result = gemini_service.analyze_equation_image(temp_path)
        
        # Cache result (24 hour TTL)
        cache_service.set(f'ocr_{image_hash}', result, ttl=86400)
        
        return jsonify({
            'cached': False,
            'data': result
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
    finally:
        # Cleanup temp file
        if os.path.exists(temp_path):
            os.remove(temp_path)

def hash_file(filepath):
    """Generate MD5 hash of file for caching"""
    hasher = hashlib.md5()
    with open(filepath, 'rb') as f:
        hasher.update(f.read())
    return hasher.hexdigest()
Implementation Requirements:

Validate file type and size before processing
Generate file hash for intelligent caching
Clean up temporary files after processing
Return structured JSON with confidence scores
Handle Gemini API rate limits gracefully

Expected Response Format:
json{
  "cached": false,
  "data": {
    "success": true,
    "confidence": 0.92,
    "reactants": [
      {"formula": "HCl", "coefficient": 1},
      {"formula": "NaOH", "coefficient": 1}
    ],
    "products": [
      {"formula": "NaCl", "coefficient": 1},
      {"formula": "H2O", "coefficient": 1}
    ],
    "quantities": [
      {
        "compound": "HCl",
        "amount": 0.1,
        "unit": "M",
        "volume": 50,
        "volume_unit": "mL"
      }
    ],
    "conditions": ["room temperature"],
    "raw_text": "HCl + NaOH → NaCl + H2O\n0.1M HCl, 50mL"
  }
}

routes/calculate.py - Stoichiometry Calculator
python"""
Calculation route
Handles equation balancing, stoichiometry, and safety analysis
"""

from flask import Blueprint, request, jsonify
from engines.balancer import EquationBalancer
from engines.stoichiometry import StoichiometryCalculator
from engines.safety_checker import SafetyChecker

calculate_bp = Blueprint('calculate', __name__)

balancer = EquationBalancer()
safety_checker = SafetyChecker()

@calculate_bp.route('/', methods=['POST'])
def calculate():
    """
    Perform stoichiometry calculations
    
    Expected JSON:
    {
        "reactants": ["HCl", "NaOH"],
        "products": ["NaCl", "H2O"],
        "given_data": {
            "compound": "HCl",
            "amount": 0.1,
            "unit": "M",
            "volume": 50,
            "volume_unit": "mL"
        }
    }
    """
    
    data = request.json
    
    # Validate input
    required_fields = ['reactants', 'products']
    if not all(field in data for field in required_fields):
        return jsonify({'error': 'Missing required fields'}), 400
    
    try:
        # Step 1: Balance equation
        balanced = balancer.balance(
            reactants=data['reactants'],
            products=data['products']
        )
        
        if not balanced['success']:
            return jsonify({
                'error': 'Could not balance equation',
                'details': balanced.get('message')
            }), 400
        
        # Step 2: Calculate stoichiometry
        if 'given_data' in data:
            calc = StoichiometryCalculator(balanced['equation'])
            results = calc.calculate_all(data['given_data'])
        else:
            results = None
        
        # Step 3: Safety analysis
        hazards = safety_checker.analyze(
            reactants=data['reactants'],
            products=data['products'],
            conditions=data.get('conditions', {})
        )
        
        # Step 4: Compile response
        return jsonify({
            'balanced_equation': balanced['equation'],
            'balanced_string': balanced['string'],
            'calculations': results,
            'safety': hazards,
            'warnings': generate_warnings(hazards)
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def generate_warnings(hazards):
    """Generate user-friendly warning messages"""
    warnings = []
    for hazard in hazards:
        if hazard['severity'] == 'high':
            warnings.append({
                'level': 'danger',
                'message': hazard['message'],
                'icon': '⚠️'
            })
        elif hazard['severity'] == 'medium':
            warnings.append({
                'level': 'warning',
                'message': hazard['message'],
                'icon': '⚡'
            })
    return warnings
Implementation Requirements:

Validate chemical formulas before processing
Handle cases where equation cannot be balanced
Provide detailed calculation breakdown
Include unit conversions (g, mol, M, mL, L)
Return both numerical results and formatted strings


routes/lab_prep.py - Lab Procedure Generator
python"""
Lab preparation route
Generates complete lab procedures using Gemini AI
"""

from flask import Blueprint, request, jsonify
from services.gemini_service import GeminiService
from services.cache_service import CacheService
import json

lab_prep_bp = Blueprint('lab_prep', __name__)
gemini_service = GeminiService()
cache_service = CacheService()

# Load equipment database
with open('data/equipment.json', 'r') as f:
    EQUIPMENT_DB = json.load(f)

@lab_prep_bp.route('/generate', methods=['POST'])
def generate_procedure():
    """
    Generate complete lab procedure using Gemini AI
    
    Expected JSON:
    {
        "reaction": "HCl + NaOH → NaCl + H2O",
        "balanced_equation": {...},
        "quantities": {...},
        "hazards": [...]
    }
    """
    
    data = request.json
    
    # Generate cache key
    cache_key = f"procedure_{hash(str(data))}"
    cached = cache_service.get(cache_key)
    
    if cached:
        return jsonify({'cached': True, 'data': cached})
    
    try:
        # Get base equipment from database
        reaction_type = classify_reaction_type(data['reaction'])
        base_equipment = EQUIPMENT_DB.get(reaction_type, EQUIPMENT_DB['general'])
        
        # Generate procedure with Gemini
        procedure = gemini_service.generate_lab_procedure(
            reaction=data['reaction'],
            quantities=data.get('quantities', {}),
            hazards=data.get('hazards', []),
            base_equipment=base_equipment
        )
        
        # Enrich with structured data
        result = {
            'procedure': procedure,
            'equipment': base_equipment,
            'estimated_time': estimate_time(reaction_type),
            'difficulty': classify_difficulty(data),
            'cost_estimate': estimate_cost(data)
        }
        
        # Cache for 7 days
        cache_service.set(cache_key, result, ttl=604800)
        
        return jsonify({'cached': False, 'data': result})
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def classify_reaction_type(reaction_string):
    """Determine reaction type for equipment selection"""
    # Implementation: pattern matching or simple rules
    if '→' in reaction_string:
        if 'acid' in reaction_string.lower() or 'base' in reaction_string.lower():
            return 'acid_base'
        elif 'heat' in reaction_string.lower():
            return 'heating'
    return 'general'

def estimate_time(reaction_type):
    """Estimate lab time based on reaction type"""
    time_map = {
        'acid_base': 30,
        'titration': 45,
        'heating': 60,
        'precipitation': 40,
        'general': 30
    }
    return time_map.get(reaction_type, 30)

def classify_difficulty(data):
    """Classify difficulty: beginner, intermediate, advanced"""
    hazard_count = len(data.get('hazards', []))
    if hazard_count >= 3:
        return 'advanced'
    elif hazard_count >= 1:
        return 'intermediate'
    return 'beginner'

def estimate_cost(data):
    """Estimate material cost"""
    # Simple implementation - can be enhanced
    return {'amount': 5.00, 'currency': 'USD', 'note': 'Approximate for common chemicals'}

services/gemini_service.py - Gemini API Integration
python"""
Gemini AI Service
Handles all interactions with Google Gemini 2.0 Flash API
Includes rate limiting, caching, and error handling
"""

import google.generativeai as genai
import os
import time
from datetime import datetime, timedelta
import json

class GeminiService:
    def __init__(self):
        # Configure Gemini
        api_key = os.getenv('GEMINI_API_KEY')
        if not api_key:
            raise ValueError("GEMINI_API_KEY not found in environment variables")
        
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel('gemini-2.0-flash-exp')
        
        # Rate limiting (15 requests per minute for free tier)
        self.request_times = []
        self.max_requests_per_minute = 15
        
    def _check_rate_limit(self):
        """Enforce rate limiting"""
        now = datetime.now()
        # Remove requests older than 1 minute
        self.request_times = [t for t in self.request_times if now - t < timedelta(minutes=1)]
        
        if len(self.request_times) >= self.max_requests_per_minute:
            # Wait until oldest request is >1 minute old
            wait_time = 60 - (now - self.request_times[0]).seconds
            if wait_time > 0:
                time.sleep(wait_time)
                self.request_times = []
        
        self.request_times.append(now)
    
    def analyze_equation_image(self, image_path):
        """
        Extract chemical equation from image using Gemini Vision
        
        Args:
            image_path: Path to image file
            
        Returns:
            dict: Structured chemical equation data
        """
        self._check_rate_limit()
        
        prompt = """
Analyze this image of a handwritten or printed chemical reaction.

Extract the following information:
1. **Reactants**: List of chemical formulas on the left side
2. **Products**: List of chemical formulas on the right side
3. **Coefficients**: Numbers before each formula (if present)
4. **Quantities**: Any amounts, concentrations, or volumes mentioned
5. **Conditions**: Temperature, catalyst, solvent, or other conditions noted

Return your response as a JSON object with this exact structure:
{
  "success": true,
  "confidence": 0.0-1.0,
  "reactants": [
    {"formula": "H2SO4", "coefficient": 1}
  ],
  "products": [
    {"formula": "H2O", "coefficient": 2}
  ],
  "quantities": [
    {
      "compound": "H2SO4",
      "amount": 0.1,
      "unit": "M",
      "volume": 50,
      "volume_unit": "mL"
    }
  ],
  "conditions": ["room temperature", "stirring"],
  "raw_text": "The exact text you see in the image"
}

Rules:
- Use standard chemical formulas (e.g., H2O not h2o)
- If coefficient is not shown, use 1
- confidence should reflect how clearly you can read the image
- If something is unclear, mark it in raw_text but make your best guess
- If no quantities are shown, return empty array for quantities
"""
        
        try:
            # Upload image to Gemini
            with open(image_path, 'rb') as img_file:
                image_data = img_file.read()
            
            # Generate response
            response = self.model.generate_content([
                prompt,
                {"mime_type": "image/jpeg", "data": image_data}
            ])
            
            # Parse JSON response
            result = self._parse_json_from_response(response.text)
            return result
            
        except Exception as e:
            return {
                'success': False,
                'error': str(e),
                'message': 'Failed to analyze image'
            }
    
    def generate_lab_procedure(self, reaction, quantities, hazards, base_equipment):
        """
        Generate complete lab procedure using Gemini
        
        Args:
            reaction: Balanced equation string
            quantities: Dict of calculated quantities
            hazards: List of identified hazards
            base_equipment: Base equipment list from database
            
        Returns:
            dict: Complete lab procedure
        """
        self._check_rate_limit()
        
        # Build context
        hazards_text = "\n".join([f"- {h['message']}" for h in hazards])
        equipment_text = "\n".join([f"- {item}" for item in base_equipment])
        
        prompt = f"""
Generate a complete, professional lab procedure for this chemical reaction.

**Reaction:** {reaction}

**Quantities:**
{json.dumps(quantities, indent=2)}

**Known Hazards:**
{hazards_text}

**Base Equipment Available:**
{equipment_text}

Provide a complete lab procedure with these sections:

1. **Title**: Give the procedure a clear name
2. **Objective**: One sentence explaining what we're doing
3. **Safety Precautions**: 
   - Personal protective equipment needed
   - Specific hazards to watch for
   - What to do if something goes wrong
4. **Materials & Equipment**: 
   - All chemicals with exact amounts
   - All equipment needed
   - Add any additional items not in base list
5. **Procedure**: 
   - Step-by-step instructions (numbered)
   - Be specific about amounts, timing, techniques
   - Include observations to watch for
6. **Cleanup & Disposal**: 
   - How to safely clean equipment
   - How to dispose of products/waste
7. **Expected Results**: 
   - What should happen
   - How to verify success

Format as JSON:
{{
  "title": "...",
  "objective": "...",
  "safety": {{
    "ppe": ["...", "..."],
    "hazards": ["...", "..."],
    "emergency": ["...", "..."]
  }},
  "materials": {{
    "chemicals": [
      {{"name": "...", "amount": "...", "note": "..."}}
    ],
    "equipment": ["...", "..."]
  }},
  "procedure": [
    {{"step": 1, "instruction": "...", "note": "...", "warning": "..."}},
    ...
  ],
  "cleanup": ["...", "..."],
  "expected_results": "..."
}}

Make it suitable for a high school or university chemistry lab.
Be specific, practical, and safety-conscious.
"""
        
        try:
            response = self.model.generate_content(prompt)
            result = self._parse_json_from_response(response.text)
            return result
            
        except Exception as e:
            return {
                'error': str(e),
                'message': 'Failed to generate procedure'
            }
    
    def _parse_json_from_response(self, text):
        """
        Extract JSON from Gemini response
        Handles cases where response includes markdown code blocks
        """
        # Remove markdown code blocks if present
        if '```json' in text:
            text = text.split('```json')[1].split('```')[0]
        elif '```' in text:
            text = text.split('```')[1].split('```')[0]
        
        # Parse JSON
        try:
            return json.loads(text.strip())
        except json.JSONDecodeError:
            # If direct parse fails, try to find JSON object
            start = text.find('{')
            end = text.rfind('}') + 1
            if start != -1 and end != 0:
                return json.loads(text[start:end])
            raise ValueError("No valid JSON found in response")
Gemini Prompt Engineering Best Practices:

Always specify exact JSON structure needed
Include examples when format is complex
Add rules/constraints to guide the model
Request confidence scores for OCR tasks
Use structured prompts with clear sections
Handle errors gracefully with fallbacks


engines/balancer.py - Equation Balancing
python"""
Chemical Equation Balancer
Uses chempy library with custom fallback algorithm
"""

from chempy import balance_stoichiometry
from collections import defaultdict
import re

class EquationBalancer:
    def __init__(self):
        self.element_pattern = re.compile(r'([A-Z][a-z]?)(\d*)')
    
    def balance(self, reactants, products):
        """
        Balance chemical equation
        
        Args:
            reactants: List of reactant formulas ['H2', 'O2']
            products: List of product formulas ['H2O']
            
        Returns:
            dict: Balanced equation with coefficients
        """
        try:
            # Try chempy first
            reac_dict, prod_dict = balance_stoichiometry(
                set(reactants),
                set(products)
            )
            
            return {
                'success': True,
                'equation': {
                    'reactants': dict(reac_dict),
                    'products': dict(prod_dict)
                },
                'string': self._format_equation(reac_dict, prod_dict)
            }
            
        except Exception as e:
            # Fallback to custom algorithm
            try:
                balanced = self._balance_custom(reactants, products)
                return {
                    'success': True,
                    'equation': balanced,
                    'string': self._format_equation(
                        balanced['reactants'],
                        balanced['products']
                    ),
                    'method': 'custom'
                }
            except:
                return {
                    'success': False,
                    'message': f'Could not balance equation: {str(e)}'
                }
    
    def _balance_custom(self, reactants, products):
        """
        Custom balancing algorithm for simple equations
        Uses trial and error with element counting
        """
        # Parse all formulas
        reac_elements = [self._parse_formula(r) for r in reactants]
        prod_elements = [self._parse_formula(p) for p in products]
        
        # Get all unique elements
        all_elements = set()
        for formula in reac_elements + prod_elements:
            all_elements.update(formula.keys())
        
        # Try coefficients from 1 to 10
        for max_coef in range(1, 11):
            # Generate all combinations
            from itertools import product as cartesian_product
            for reac_coefs in cartesian_product(range(1, max_coef + 1), repeat=len(reactants)):
                for prod_coefs in cartesian_product(range(1, max_coef + 1), repeat=len(products)):
                    if self._check_balance(
                        reactants, reac_coefs, reac_elements,
                        products, prod_coefs, prod_elements,
                        all_elements
                    ):
                        return {
                            'reactants': dict(zip(reactants, reac_coefs)),
                            'products': dict(zip(products, prod_coefs))
                        }
        
        raise ValueError("Could not balance equation with coefficients up to 10")
    
    def _parse_formula(self, formula):
        """Parse chemical formula into element counts"""
        elements = defaultdict(int)
        matches = self.element_pattern.findall(formula)
        
        for element, count in matches:
            elements[element] += int(count) if count else 1
        
        return dict(elements)
    
    def _check_balance(self, reactants, reac_coefs, reac_elements,
                       products, prod_coefs, prod_elements, all_elements):
        """Check if given coefficients balance the equation"""
        for element in all_elements:
            # Count on reactant side
            reac_count = sum(
                coef * reac_elements[i].get(element, 0)
                for i, coef in enumerate(reac_coefs)
            )
            
            # Count on product side
            prod_count = sum(
                coef * prod_elements[i].get(element, 0)
                for i, coef in enumerate(prod_coefs)
            )
            
            if reac_count != prod_count:
                return False
        
        return True
    
    def _format_equation(self, reactants_dict, products_dict):
        """Format equation as string"""
        reac_str = ' + '.join([
            f"{coef if coef > 1 else ''}{formula}"
            for formula, coef in reactants_dict.items()
        ])
        
        prod_str = ' + '.join([
            f"{coef if coef > 1 else ''}{formula}"
            for formula, coef in products_dict.items()
        ])
        
        return f"{reac_str} → {prod_str}"
Implementation Requirements:

Handle simple organic formulas (CH3COOH, C6H12O6)
Support parentheses in formulas: Ca(OH)2
Validate that equation can be balanced
Return both dict and formatted string
Minimize coefficients (no common factors)


engines/stoichiometry.py - Calculations
python"""
Stoichiometry Calculator
Performs mole, mass, and concentration calculations
"""

from chemicals import molecular_weight
from decimal import Decimal, ROUND_HALF_UP

class StoichiometryCalculator:
    def __init__(self, balanced_equation):
        """
        Initialize with balanced equation
        
        Args:
            balanced_equation: dict with 'reactants' and 'products'
        """
        self.equation = balanced_equation
    
    def calculate_all(self, given_data):
        """
        Calculate all quantities from given data
        
        Args:
            given_data: dict with compound, amount, unit, volume, volume_unit
            
        Returns:
            dict: All calculated quantities
        """
        compound = given_data['compound']
        
        # Convert to moles first
        moles = self._convert_to_moles(given_data)
        
        # Calculate all other compounds
        results = {}
        
        for comp, coef in {**self.equation['reactants'], **self.equation['products']}.items():
            # Calculate moles of this compound
            ratio = coef / self.equation['reactants'].get(compound, self.equation['products'].get(compound))
            comp_moles = moles * ratio
            
            # Calculate mass
            mw = molecular_weight(comp)
            comp_mass = comp_moles * mw
            
            results[comp] = {
                'moles': self._round(comp_moles, 4),
                'mass_g': self._round(comp_mass, 3),
                'mass_mg': self._round(comp_mass * 1000, 2),
                'molecular_weight': self._round(mw, 2)
            }
        
        # Identify limiting reagent
        limiting = self._find_limiting_reagent(given_data, results)
        
        # Calculate theoretical yield
        yields = self._calculate_yields(limiting, results)
        
        return {
            'compounds': results,
            'limiting_reagent': limiting,
            'theoretical_yields': yields,
            'given': given_data
        }
    
    def _convert_to_moles(self, data):
        """Convert any input to moles"""
        if data['unit'] == 'mol':
            return data['amount']
        
        elif data['unit'] == 'g':
            mw = molecular_weight(data['compound'])
            return data['amount'] / mw
        
        elif data['unit'] == 'M':  # Molarity
            volume_L = self._convert_volume_to_L(data['volume'], data['volume_unit'])
            return data['amount'] * volume_L
        
        elif data['unit'] == 'mg':
            mw = molecular_weight(data['compound'])
            return (data['amount'] / 1000) / mw
        
        else:
            raise ValueError(f"Unsupported unit: {data['unit']}")
    
    def _convert_volume_to_L(self, volume, unit):
        """Convert volume to liters"""
        conversions = {
            'L': 1,
            'mL': 0.001,
            'µL': 0.000001,
            'uL': 0.000001
        }
        return volume * conversions.get(unit, 1)
    
    def _find_limiting_reagent(self, given_data, results):
        """Identify limiting reagent"""
        # Compare mole ratios
        min_ratio = float('inf')
        limiting = None
        
        for compound in self.equation['reactants'].keys():
            if compound == given_data['compound']:
                continue
            
            required_moles = results[compound]['moles']
            coefficient = self.equation['reactants'][compound]
            ratio = required_moles / coefficient
            
            if ratio < min_ratio:
                min_ratio = ratio
                limiting = compound
        
        return limiting if limiting else given_data['compound']
    
    def _calculate_yields(self, limiting_reagent, results):
        """Calculate theoretical yields for products"""
        yields = {}
        
        for product in self.equation['products'].keys():
            yields[product] = {
                'moles': results[product]['moles'],
                'mass_g': results[product]['mass_g'],
                'note': f'Based on limiting reagent: {limiting_reagent}'
            }
        
        return yields
    
    def _round(self, value, decimals):
        """Round to specified decimals"""
        d = Decimal(str(value))
        rounded = d.quantize(Decimal(10) ** -decimals, rounding=ROUND_HALF_UP)
        return float(rounded)
Implementation Requirements:

Support multiple units: g, mg, mol, M (molarity)
Handle volume conversions: L, mL, µL
Calculate limiting reagent correctly
Round values appropriately for display
Include molecular weights in output
Handle edge cases (zero amounts, very small/large numbers)


engines/safety_checker.py - Safety Analysis
python"""
Safety Checker
Analyzes reactions for hazards based on rules database
"""

import json

class SafetyChecker:
    def __init__(self):
        # Load safety rules
        with open('data/safety_rules.json', 'r') as f:
            self.rules = json.load(f)
        
        # Load compound properties
        with open('data/compounds.json', 'r') as f:
            self.compounds = json.load(f)
    
    def analyze(self, reactants, products, conditions=None):
        """
        Analyze reaction for safety hazards
        
        Returns:
            list: Hazard warnings with severity and prevention
        """
        hazards = []
        
        # Check individual compound hazards
        hazards.extend(self._check_compound_hazards(reactants + products))
        
        # Check incompatible combinations
        hazards.extend(self._check_incompatibilities(reactants))
        
        # Check reaction type hazards
        hazards.extend(self._check_reaction_type(reactants, products))
        
        # Check condition-related hazards
        if conditions:
            hazards.extend(self._check_conditions(conditions, reactants))
        
        # Remove duplicates and sort by severity
        hazards = self._deduplicate(hazards)
        hazards.sort(key=lambda x: {'high': 0, 'medium': 1, 'low': 2}[x['severity']])
        
        return hazards
    
    def _check_compound_hazards(self, compounds):
        """Check individual compound hazards"""
        hazards = []
        
        for compound in compounds:
            comp_data = self.compounds.get(compound, {})
            comp_hazards = comp_data.get('hazards', [])
            
            for hazard in comp_hazards:
                if hazard in self.rules['hazard_types']:
                    rule = self.rules['hazard_types'][hazard]
                    hazards.append({
                        'type': hazard,
                        'severity': rule['severity'],
                        'message': f"{compound}: {rule['message']}",
                        'prevention': rule['prevention'],
                        'compounds': [compound]
                    })
        
        return hazards
    
    def _check_incompatibilities(self, reactants):
        """Check for incompatible compound pairs"""
        hazards = []
        
        for i, comp1 in enumerate(reactants):
            for comp2 in reactants[i+1:]:
                # Check if pair is incompatible
                for incomp in self.rules['incompatible_pairs']:
                    if self._matches_pattern(comp1, comp2, incomp):
                        hazards.append({
                            'type': 'incompatible',
                            'severity': incomp['severity'],
                            'message': f"{comp1} + {comp2}: {incomp['hazard']}",
                            'prevention': incomp['precaution'],
                            'compounds': [comp1, comp2]
                        })
        
        return hazards
    
    def _check_reaction_type(self, reactants, products):
        """Check hazards based on reaction type"""
        hazards = []
        
        # Detect reaction type
        if self._is_acid_base(reactants):
            hazards.append({
                'type': 'exothermic',
                'severity': 'medium',
                'message': 'Acid-base neutralization releases heat',
                'prevention': 'Add slowly with stirring. Use ice bath if needed.',
                'compounds': reactants
            })
        
        if self._is_combustion(reactants, products):
            hazards.append({
                'type': 'fire',
                'severity': 'high',
                'message': 'Combustion reaction - fire hazard',
                'prevention': 'Perform in fume hood. Have fire extinguisher ready.',
                'compounds': reactants
            })
        
        return hazards
    
    def _check_conditions(self, conditions, reactants):
        """Check condition-related hazards"""
        hazards = []
        
        # High temperature
        if 'temperature' in conditions and conditions['temperature'] > 100:
            hazards.append({
                'type': 'heat',
                'severity': 'medium',
                'message': f"High temperature ({conditions['temperature']}°C) required",
                'prevention': 'Use heat-resistant glassware. Wear heat-resistant gloves.',
                'compounds': reactants
            })
        
        # Pressure
        if 'pressure' in conditions and conditions['pressure'] != 'atmospheric':
            hazards.append({
                'type': 'pressure',
                'severity': 'high',
                'message': 'Non-atmospheric pressure - explosion risk',
                'prevention': 'Use pressure-rated equipment. Follow pressure safety protocols.',
                'compounds': reactants
            })
        
        return hazards
    
    def _matches_pattern(self, comp1, comp2, pattern):
        """Check if compounds match incompatibility pattern"""
        categories = pattern['compounds']
        
        # Check if compounds belong to specified categories
        match_count = 0
        for comp in [comp1, comp2]:
            comp_data = self.compounds.get(comp, {})
            comp_categories = comp_data.get('categories', [])
            
            for category in categories:
                if category in comp_categories:
                    match_count += 1
                    break
        
        return match_count >= 2
    
    def _is_acid_base(self, reactants):
        """Detect acid-base reaction"""
        has_acid = False
        has_base = False
        
        for comp in reactants:
            comp_data = self.compounds.get(comp, {})
            if 'acid' in comp_data.get('categories', []):
                has_acid = True
            if 'base' in comp_data.get('categories', []):
                has_base = True
        
        return has_acid and has_base
    
    def _is_combustion(self, reactants, products):
        """Detect combustion reaction"""
        has_o2 = 'O2' in reactants
        has_co2 = 'CO2' in products
        has_h2o = 'H2O' in products
        
        return has_o2 and (has_co2 or has_h2o)
    
    def _deduplicate(self, hazards):
        """Remove duplicate hazards"""
        seen = set()
        unique = []
        
        for hazard in hazards:
            key = (hazard['type'], tuple(sorted(hazard['compounds'])))
            if key not in seen:
                seen.add(key)
                unique.append(hazard)
        
        return unique

2. DATA FILES - JSON Databases
data/compounds.json
json{
  "HCl": {
    "name": "Hydrochloric Acid",
    "formula": "HCl",
    "molecular_weight": 36.46,
    "state": "aqueous",
    "categories": ["acid", "strong_acid", "corrosive"],
    "hazards": ["corrosive", "toxic_fumes"],
    "safety_equipment": ["goggles", "gloves", "lab_coat", "fume_hood"],
    "storage": "Cool, dry place. Corrosive cabinet.",
    "first_aid": {
      "skin": "Rinse immediately with water for 15 minutes",
      "eyes": "Flush with water for 15 minutes. Seek medical attention.",
      "inhalation": "Move to fresh air. Seek medical attention if symptoms persist."
    }
  },
  "NaOH": {
    "name": "Sodium Hydroxide",
    "formula": "NaOH",
    "molecular_weight": 40.00,
    "state": "solid",
    "categories": ["base", "strong_base", "corrosive"],
    "hazards": ["corrosive", "burns"],
    "safety_equipment": ["goggles", "gloves", "lab_coat"],
    "storage": "Airtight container. Prevent moisture exposure.",
    "first_aid": {
      "skin": "Rinse with water for 15 minutes. Remove contaminated clothing.",
      "eyes": "Flush with water for 15 minutes. Seek immediate medical attention.",
      "ingestion": "DO NOT induce vomiting. Drink water. Seek immediate medical attention."
    }
  },
  "H2SO4": {
    "name": "Sulfuric Acid",
    "formula": "H2SO4",
    "molecular_weight": 98.08,
    "state": "liquid",
    "categories": ["acid", "strong_acid", "corrosive", "dehydrating"],
    "hazards": ["corrosive", "heat_on_dilution", "severe_burns"],
    "safety_equipment": ["goggles", "face_shield", "gloves", "lab_coat", "fume_hood"],
    "storage": "Corrosive cabinet. Away from bases and metals.",
    "first_aid": {
      "skin": "Brush off if solid. Rinse with copious water for 20+ minutes.",
      "eyes": "Flush with water for 20 minutes. Immediate medical attention required.",
      "dilution_warning": "ALWAYS add acid to water, never water to acid"
    }
  },
  "NaCl": {
    "name": "Sodium Chloride",
    "formula": "NaCl",
    "molecular_weight": 58.44,
    "state": "solid",
    "categories": ["salt", "ionic_compound"],
    "hazards": [],
    "safety_equipment": ["goggles"],
    "storage": "Room temperature. Dry location."
  },
  "H2O": {
    "name": "Water",
    "formula": "H2O",
    "molecular_weight": 18.02,
    "state": "liquid",
    "categories": ["solvent"],
    "hazards": [],
    "safety_equipment": []
  }
}
Add at least 50-100 common chemicals with similar detail.

data/safety_rules.json
json{
  "hazard_types": {
    "corrosive": {
      "severity": "high",
      "message": "Causes severe burns to skin and eyes",
      "prevention": "Wear goggles, gloves, and lab coat. Use fume hood.",
      "ppe_required": ["goggles", "gloves", "lab_coat"]
    },
    "toxic": {
      "severity": "high",
      "message": "Harmful if inhaled, ingested, or absorbed",
      "prevention": "Use fume hood. Avoid skin contact. Wear gloves.",
      "ppe_required": ["gloves", "fume_hood", "goggles"]
    },
    "flammable": {
      "severity": "high",
      "message": "Fire hazard - keep away from flames and sparks",
      "prevention": "No open flames. Use in well-ventilated area.",
      "ppe_required": ["fire_extinguisher"]
    },
    "oxidizer": {
      "severity": "medium",
      "message": "Can intensify fires. Keep away from combustibles.",
      "prevention": "Store separately from flammables and reducers.",
      "ppe_required": ["goggles", "gloves"]
    },
    "explosive": {
      "severity": "high",
      "message": "Can explode under heat, shock, or friction",
      "prevention": "Handle with extreme care. Follow specific protocols.",
      "ppe_required": ["safety_shield", "goggles", "gloves"]
    }
  },
  
  "incompatible_pairs": [
    {
      "compounds": ["acid", "base"],
      "hazard": "Exothermic neutralization - can cause splattering",
      "severity": "medium",
      "precaution": "Add slowly with constant stirring. Use ice bath for concentrated solutions."
    },
    {
      "compounds": ["acid", "metal"],
      "hazard": "Generates hydrogen gas - fire/explosion risk",
      "severity": "high",
      "precaution": "Perform in fume hood. No ignition sources nearby. Add metal slowly."
    },
    {
      "compounds": ["oxidizer", "reducer"],
      "hazard": "Violent reaction possible - fire/explosion risk",
      "severity": "high",
      "precaution": "Keep separated. Use protective barriers. Small quantities only."
    },
    {
      "compounds": ["water_reactive", "water"],
      "hazard": "Violent reaction with water - fire risk",
      "severity": "high",
      "precaution": "Keep away from moisture. Use dry equipment. Have fire extinguisher ready."
    },
    {
      "compounds": ["concentrated_acid", "organic_compound"],
      "hazard": "Can cause charring, fire, or explosion",
      "severity": "high",
      "precaution": "Use dilute solutions. Add acid slowly. Fume hood required."
    }
  ],
  
  "reaction_types": {
    "combustion": {
      "severity": "high",
      "hazards": ["fire", "heat", "CO2_production"],
      "precautions": ["Fume hood required", "Fire extinguisher ready", "Heat-resistant equipment"]
    },
    "decomposition": {
      "severity": "medium",
      "hazards": ["gas_production", "heat"],
      "precautions": ["Fume hood if gases toxic", "Controlled heating"]
    },
    "polymerization": {
      "severity": "medium",
      "hazards": ["exothermic", "runaway_reaction"],
      "precautions": ["Temperature control critical", "Add monomer slowly", "Cooling system"]
    }
  },
  
  "temperature_thresholds": {
    "low": {
      "range": [-273, 0],
      "hazards": ["frostbite", "brittle_equipment"],
      "ppe": ["insulated_gloves", "goggles"]
    },
    "elevated": {
      "range": [50, 150],
      "hazards": ["burns", "solvent_evaporation"],
      "ppe": ["heat_gloves", "goggles"]
    },
    "high": {
      "range": [150, 1000],
      "hazards": ["severe_burns", "fire", "pressure_buildup"],
      "ppe": ["heat_shield", "heat_gloves", "face_shield", "heat_resistant_clothing"]
    }
  }
}

data/equipment.json
json{
  "general": [
    "Safety goggles",
    "Nitrile gloves",
    "Lab coat",
    "Beaker (various sizes)",
    "Graduated cylinder",
    "Stirring rod",
    "Spatula",
    "Weighing boat",
    "Wash bottle",
    "Waste container"
  ],
  
  "acid_base": [
    "Safety goggles",
    "Nitrile gloves",
    "Lab coat",
    "Beaker (250 mL)",
    "Beaker (100 mL)",
    "Graduated cylinder (50 mL)",
    "Stirring rod",
    "pH paper or pH meter",
    "Thermometer",
    "Ice bath (optional)",
    "Wash bottle",
    "Waste container"
  ],
  
  "titration": [
    "Safety goggles",
    "Nitrile gloves",
    "Lab coat",
    "Burette (50 mL)",
    "Burette stand and clamp",
    "Pipette (25 mL)",
    "Pipette bulb",
    "Erlenmeyer flask (250 mL)",
    "White tile (for color observation)",
    "pH indicator solution",
    "Funnel",
    "Wash bottle",
    "Waste container"
  ],
  
  "heating": [
    "Safety goggles",
    "Heat-resistant gloves",
    "Lab coat",
    "Round-bottom flask or beaker",
    "Hot plate or Bunsen burner",
    "Ring stand and clamp",
    "Thermometer",
    "Condenser (if reflux needed)",
    "Heat-resistant mat",
    "Tongs",
    "Wash bottle",
    "Waste container"
  ],
  
  "precipitation": [
    "Safety goggles",
    "Nitrile gloves",
    "Lab coat",
    "Beakers (2x 250 mL)",
    "Stirring rod",
    "Filter paper",
    "Funnel",
    "Ring stand and ring",
    "Graduated cylinder",
    "Spatula",
    "Drying oven (optional)",
    "Wash bottle",
    "Waste container"
  ],
  
  "synthesis": [
    "Safety goggles",
    "Nitrile gloves",
    "Lab coat",
    "Round-bottom flask",
    "Reflux condenser",
    "Heating mantle or hot plate",
    "Magnetic stirrer and stir bar",
    "Thermometer",
    "Separatory funnel",
    "Büchner funnel",
    "Filter flask",
    "Ring stand and clamps",
    "Ice bath",
    "Wash bottle",
    "Waste container"
  ]
}

data/common_reactions.json
json{
  "acid_base_neutralizations": [
    {
      "name": "HCl + NaOH Neutralization",
      "reactants": ["HCl", "NaOH"],
      "products": ["NaCl", "H2O"],
      "type": "acid_base",
      "difficulty": "beginner",
      "time_minutes": 30,
      "description": "Classic neutralization producing table salt and water"
    },
    {
      "name": "H2SO4 + NaOH Neutralization",
      "reactants": ["H2SO4", "NaOH"],
      "products": ["Na2SO4", "H2O"],
      "type": "acid_base",
      "difficulty": "intermediate",
      "time_minutes": 40,
      "description": "Sulfuric acid neutralization - highly exothermic"
    }
  ],
  
  "precipitation": [
    {
      "name": "Silver Nitrate + Sodium Chloride",
      "reactants": ["AgNO3", "NaCl"],
      "products": ["AgCl", "NaNO3"],
      "type": "precipitation",
      "difficulty": "beginner",
      "time_minutes": 20,
      "description": "Forms white precipitate of silver chloride"
    }
  ],
  
  "combustion": [
    {
      "name": "Methane Combustion",
      "reactants": ["CH4", "O2"],
      "products": ["CO2", "H2O"],
      "type": "combustion",
      "difficulty": "advanced",
      "time_minutes": 45,
      "description": "Complete combustion of methane"
    }
  ]
}

3. FRONTEND - PWA Implementation
index.html
html<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta name="theme-color" content="#2196F3">
    <meta name="description" content="ChemScan - Chemistry calculator with photo analysis, safety checking, and lab procedures">
    
    <title>ChemScan - Chemistry Calculator</title>
    
    <!-- PWA Manifest -->
    <link rel="manifest" href="/manifest.json">
    <link rel="icon" href="/assets/icons/favicon.ico">
    <link rel="apple-touch-icon" href="/assets/icons/icon-192.png">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/components.css">
    <link rel="stylesheet" href="/css/mobile.css">
</head>
<body>
    <!-- App Container -->
    <div id="app" class="app-container">
        
        <!-- Header -->
        <header class="app-header">
            <div class="header-content">
                <div class="logo">
                    <svg class="logo-icon" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                    <h1>ChemScan</h1>
                </div>
                <button id="menu-btn" class="icon-button" aria-label="Menu">
                    <svg viewBox="0 0 24 24">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                    </svg>
                </button>
            </div>
        </header>
        
        <!-- Main Content -->
        <main class="app-main">
            
            <!-- Home Screen -->
            <section id="home-screen" class="screen active">
                <div class="welcome-card">
                    <h2>Welcome to ChemScan</h2>
                    <p>Your chemistry lab assistant for calculations, safety, and procedures</p>
                </div>
                
                <div class="action-grid">
                    <button class="action-card" id="scan-btn">
                        <svg class="action-icon" viewBox="0 0 24 24">
                            <path d="M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2V6z"/>
                        </svg>
                        <h3>Scan Reaction</h3>
                        <p>Take photo of handwritten equation</p>
                    </button>
                    
                    <button class="action-card" id="type-btn">
                        <svg class="action-icon" viewBox="0 0 24 24">
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
                        </svg>
                        <h3>Type Reaction</h3>
                        <p>Enter equation manually</p>
                    </button>
                    
                    <button class="action-card" id="library-btn">
                        <svg class="action-icon" viewBox="0 0 24 24">
                            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
                        </svg>
                        <h3>Common Reactions</h3>
                        <p>Choose from library</p>
                    </button>
                    
                    <button class="action-card" id="history-btn">
                        <svg class="action-icon" viewBox="0 0 24 24">
                            <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z"/>
                        </svg>
                        <h3>History</h3>
                        <p>View past calculations</p>
                    </button>
                </div>
            </section>
            
            <!-- Camera Screen -->
            <section id="camera-screen" class="screen">
                <div class="camera-container">
                    <video id="camera-preview" autoplay playsinline></video>
                    <canvas id="camera-canvas" style="display:none;"></canvas>
                    
                    <div class="camera-overlay">
                        <div class="capture-guide">
                            <p>Position equation in frame</p>
                        </div>
                    </div>
                    
                    <div class="camera-controls">
                        <button id="cancel-camera" class="secondary-button">Cancel</button>
                        <button id="capture-photo" class="primary-button large-button">
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10"/>
                            </svg>
                        </button>
                        <button id="switch-camera" class="secondary-button" style="visibility:hidden;">Switch</button>
                    </div>
                </div>
            </section>
            
            <!-- Analysis Screen -->
            <section id="analysis-screen" class="screen">
                <div class="analysis-container">
                    <div class="preview-image-container">
                        <img id="preview-image" alt="Captured equation">
                    </div>
                    
                    <div class="loading-overlay" id="analysis-loading">
                        <div class="spinner"></div>
                        <p>Analyzing equation...</p>
                    </div>
                    
                    <div id="extracted-data" class="extraction-results" style="display:none;">
                        <h3>Extracted Equation</h3>
                        <div class="equation-display" id="extracted-equation"></div>
                        
                        <div class="extracted-quantities" id="extracted-quantities"></div>
                        
                        <div class="confidence-badge" id="confidence-badge"></div>
                        
                        <div class="action-buttons">
                            <button id="edit-extracted" class="secondary-button">Edit</button>
                            <button id="calculate-extracted" class="primary-button">Calculate</button>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Input Screen (Manual) -->
            <section id="input-screen" class="screen">
                <div class="input-container">
                    <h2>Enter Reaction</h2>
                    
                    <div class="equation-input">
                        <label for="reactants-input">Reactants (separate with +)</label>
                        <input type="text" id="reactants-input" placeholder="H2 + O2">
                        
                        <div class="arrow-symbol">→</div>
                        
                        <label for="products-input">Products (separate with +)</label>
                        <input type="text" id="products-input" placeholder="H2O">
                    </div>
                    
                    <div class="quantities-input">
                        <h3>Quantities (Optional)</h3>
                        <div id="quantity-inputs"></div>
                        <button id="add-quantity" class="secondary-button small-button">+ Add Quantity</button>
                    </div>
                    
                    <div class="action-buttons">
                        <button id="cancel-input" class="secondary-button">Cancel</button>
                        <button id="submit-input" class="primary-button">Calculate</button>
                    </div>
                </div>
            </section>
            
            <!-- Results Screen -->
            <section id="results-screen" class="screen">
                <div class="results-container">
                    <div class="result-section">
                        <h2>Balanced Equation</h2>
                        <div class="equation-display large" id="balanced-equation"></div>
                    </div>
                    
                    <div class="result-section" id="calculations-section">
                        <h2>Calculations</h2>
                        <div id="calculations-results"></div>
                    </div>
                    
                    <div class="result-section" id="safety-section">
                        <h2>Safety Analysis</h2>
                        <div id="safety-warnings"></div>
                    </div>
                    
                    <div class="action-buttons">
                        <button id="get-procedure" class="primary-button">Get Lab Procedure</button>
                        <button id="save-result" class="secondary-button">Save</button>
                        <button id="new-calculation" class="secondary-button">New</button>
                    </div>
                </div>
            </section>
            
            <!-- Lab Procedure Screen -->
            <section id="procedure-screen" class="screen">
                <div class="procedure-container">
                    <div class="loading-overlay" id="procedure-loading">
                        <div class="spinner"></div>
                        <p>Generating procedure...</p>
                    </div>
                    
                    <div id="procedure-content" style="display:none;">
                        <h2 id="procedure-title"></h2>
                        <p id="procedure-objective" class="objective"></p>
                        
                        <div class="procedure-section">
                            <h3>Safety Precautions</h3>
                            <div id="procedure-safety"></div>
                        </div>
                        
                        <div class="procedure-section">
                            <h3>Materials & Equipment</h3>
                            <div id="procedure-materials"></div>
                        </div>
                        
                        <div class="procedure-section">
                            <h3>Procedure</h3>
                            <div id="procedure-steps"></div>
                        </div>
                        
                        <div class="procedure-section">
                            <h3>Cleanup & Disposal</h3>
                            <div id="procedure-cleanup"></div>
                        </div>
                        
                        <div class="action-buttons">
                            <button id="download-pdf" class="primary-button">Download PDF</button>
                            <button id="back-to-results" class="secondary-button">Back</button>
                        </div>
                    </div>
                </div>
            </section>
            
        </main>
        
        <!-- Toast Notifications -->
        <div id="toast-container"></div>
        
    </div>
    
    <!-- Scripts -->
    <script src="/js/storage.js"></script>
    <script src="/js/api-client.js"></script>
    <script src="/js/camera.js"></script>
    <script src="/js/calculator.js"></script>
    <script src="/js/ui-manager.js"></script>
    <script src="/js/pdf-export.js"></script>
    <script src="/js/app.js"></script>
    
    <script>
        // Register service worker
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(reg => console.log('Service Worker registered'))
                    .catch(err => console.error('Service Worker registration failed:', err));
            });
        }
    </script>
</body>
</html>

manifest.json
json{
  "name": "ChemScan - Chemistry Calculator",
  "short_name": "ChemScan",
  "description": "Photo analysis, stoichiometry calculator, and lab safety tool for chemistry students",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2196F3",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/assets/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/assets/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "screenshots": [
    {
      "src": "/assets/screenshots/home.png",
      "sizes": "540x720",
      "type": "image/png",
      "label": "Home screen"
    },
    {
      "src": "/assets/screenshots/camera.png",
      "sizes": "540x720",
      "type": "image/png",
      "label": "Camera view"
    }
  ],
  "categories": ["education", "productivity", "utilities"],
  "prefer_related_applications": false
}

js/app.js - Main Application Controller
javascript/**
 * ChemScan Main Application
 * Coordinates all modules and handles navigation
 */

class ChemScanApp {
    constructor() {
        this.currentScreen = 'home-screen';
        this.currentData = null;
        
        // Initialize modules
        this.api = new APIClient();
        this.camera = new CameraHandler();
        this.ui = new UIManager();
        this.storage = new StorageManager();
        this.pdfExport = new PDFExporter();
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadHistory();
        console.log('ChemScan initialized');
    }
    
    setupEventListeners() {
        // Home screen actions
        document.getElementById('scan-btn').addEventListener('click', () => {
            this.navigateTo('camera-screen');
            this.camera.startCamera();
        });
        
        document.getElementById('type-btn').addEventListener('click', () => {
            this.navigateTo('input-screen');
        });
        
        document.getElementById('library-btn').addEventListener('click', () => {
            this.showCommonReactions();
        });
        
        document.getElementById('history-btn').addEventListener('click', () => {
            this.showHistory();
        });
        
        // Camera controls
        document.getElementById('cancel-camera').addEventListener('click', () => {
            this.camera.stopCamera();
            this.navigateTo('home-screen');
        });
        
        document.getElementById('capture-photo').addEventListener('click', async () => {
            const imageData = this.camera.capturePhoto();
            this.camera.stopCamera();
            await this.analyzePhoto(imageData);
        });
        
        // Input screen
        document.getElementById('cancel-input').addEventListener('click', () => {
            this.navigateTo('home-screen');
        });
        
        document.getElementById('submit-input').addEventListener('click', async () => {
            await this.calculateFromInput();
        });
        
        document.getElementById('add-quantity').addEventListener('click', () => {
            this.addQuantityInput();
        });
        
        // Results screen
        document.getElementById('get-procedure').addEventListener('click', async () => {
            await this.generateProcedure();
        });
        
        document.getElementById('save-result').addEventListener('click', () => {
            this.saveResult();
        });
        
        document.getElementById('new-calculation').addEventListener('click', () => {
            this.navigateTo('home-screen');
        });
        
        // Procedure screen
        document.getElementById('download-pdf').addEventListener('click', () => {
            this.pdfExport.exportProcedure(this.currentData);
        });
        
        document.getElementById('back-to-results').addEventListener('click', () => {
            this.navigateTo('results-screen');
        });
    }
    
    navigateTo(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show target screen
        document.getElementById(screenId).classList.add('active');
        this.currentScreen = screenId;
    }
    
    async analyzePhoto(imageData) {
        this.navigateTo('analysis-screen');
        
        // Show preview
        document.getElementById('preview-image').src = imageData;
        document.getElementById('analysis-loading').style.display = 'flex';
        
        try {
            // Call API
            const result = await this.api.analyzePhoto(imageData);
            
            // Hide loading
            document.getElementById('analysis-loading').style.display = 'none';
            
            if (result.data.success) {
                // Display extracted data
                this.displayExtractedData(result.data);
            } else {
                this.ui.showToast('Failed to analyze image. Please try again.', 'error');
                this.navigateTo('home-screen');
            }
            
        } catch (error) {
            console.error('Analysis error:', error);
            this.ui.showToast('Error analyzing image: ' + error.message, 'error');
            this.navigateTo('home-screen');
        }
    }
    
    displayExtractedData(data) {
        // Show extracted equation
        const equationHTML = this.formatEquation(data.reactants, data.products);
        document.getElementById('extracted-equation').innerHTML = equationHTML;
        
        // Show quantities if any
        if (data.quantities && data.quantities.length > 0) {
            const quantitiesHTML = data.quantities.map(q => `
                <div class="quantity-item">
                    <strong>${q.compound}:</strong> 
                    ${q.amount} ${q.unit}
                    ${q.volume ? `, ${q.volume} ${q.volume_unit}` : ''}
                </div>
            `).join('');
            document.getElementById('extracted-quantities').innerHTML = quantitiesHTML;
        }
        
        // Show confidence
        const confidence = (data.confidence * 100).toFixed(0);
        const confidenceClass = confidence > 80 ? 'high' : confidence > 50 ? 'medium' : 'low';
        document.getElementById('confidence-badge').innerHTML = `
            <span class="confidence-${confidenceClass}">
                Confidence: ${confidence}%
            </span>
        `;
        
        // Show results
        document.getElementById('extracted-data').style.display = 'block';
        
        // Set up calculate button
        document.getElementById('calculate-extracted').onclick = async () => {
            await this.calculateFromExtracted(data);
        };
        
        this.currentData = data;
    }
    
    async calculateFromExtracted(extractedData) {
        const calculationData = {
            reactants: extractedData.reactants.map(r => r.formula),
            products: extractedData.products.map(p => p.formula),
            given_data: extractedData.quantities[0] || null
        };
        
        await this.performCalculation(calculationData);
    }
    
    async calculateFromInput() {
        // Get reactants and products
        const reactantsInput = document.getElementById('reactants-input').value;
        const productsInput = document.getElementById('products-input').value;
        
        if (!reactantsInput || !productsInput) {
            this.ui.showToast('Please enter both reactants and products', 'warning');
            return;
        }
        
        const reactants = reactantsInput.split('+').map(s => s.trim());
        const products = productsInput.split('+').map(s => s.trim());
        
        // Get quantity if provided
        // (implementation depends on UI - simplified here)
        const given_data = null; // Parse from quantity inputs
        
        const calculationData = {
            reactants,
            products,
            given_data
        };
        
        await this.performCalculation(calculationData);
    }
    
    async performCalculation(data) {
        this.ui.showToast('Calculating...', 'info');
        
        try {
            const result = await this.api.calculate(data);
            
            this.currentData = {
                ...data,
                ...result
            };
            
            this.displayResults(result);
            this.navigateTo('results-screen');
            
        } catch (error) {
            console.error('Calculation error:', error);
            this.ui.showToast('Error calculating: ' + error.message, 'error');
        }
    }
    
    displayResults(result) {
        // Balanced equation
        document.getElementById('balanced-equation').innerHTML = result.balanced_string;
        
        // Calculations
        if (result.calculations) {
            const calcHTML = this.formatCalculations(result.calculations);
            document.getElementById('calculations-results').innerHTML = calcHTML;
            document.getElementById('calculations-section').style.display = 'block';
        } else {
            document.getElementById('calculations-section').style.display = 'none';
        }
        
        // Safety warnings
        if (result.safety && result.safety.length > 0) {
            const safetyHTML = this.formatSafetyWarnings(result.safety);
            document.getElementById('safety-warnings').innerHTML = safetyHTML;
            document.getElementById('safety-section').style.display = 'block';
        } else {
            document.getElementById('safety-warnings').innerHTML = '<p class="safe-badge">✓ No major hazards detected</p>';
        }
    }
    
    formatEquation(reactants, products) {
        const reactantsStr = reactants.map(r => 
            `${r.coefficient > 1 ? r.coefficient : ''}${r.formula}`
        ).join(' + ');
        
        const productsStr = products.map(p => 
            `${p.coefficient > 1 ? p.coefficient : ''}${p.formula}`
        ).join(' + ');
        
        return `${reactantsStr} → ${productsStr}`;
    }
    
    formatCalculations(calculations) {
        // Format calculation results into HTML table
        // Implementation here
        return `<div class="calculations-table">...</div>`;
    }
    
    formatSafetyWarnings(hazards) {
        return hazards.map(h => `
            <div class="warning-card severity-${h.severity}">
                <div class="warning-header">
                    <span class="warning-icon">⚠️</span>
                    <strong>${h.type}</strong>
                </div>
                <p>${h.message}</p>
                <div class="prevention">
                    <strong>Prevention:</strong> ${h.prevention}
                </div>
            </div>
        `).join('');
    }
    
    async generateProcedure() {
        this.navigateTo('procedure-screen');
        document.getElementById('procedure-loading').style.display = 'flex';
        
        try {
            const result = await this.api.getLabProcedure(this.currentData);
            
            // Hide loading
            document.getElementById('procedure-loading').style.display = 'none';
            
            // Display procedure
            this.displayProcedure(result.data);
            document.getElementById('procedure-content').style.display = 'block';
            
        } catch (error) {
            console.error('Procedure generation error:', error);
            this.ui.showToast('Error generating procedure: ' + error.message, 'error');
            this.navigateTo('results-screen');
        }
    }
    
    displayProcedure(procedure) {
        // Title & Objective
        document.getElementById('procedure-title').textContent = procedure.title;
        document.getElementById('procedure-objective').textContent = procedure.objective;
        
        // Safety
        const safetyHTML = `
            <div class="ppe-list">
                <strong>PPE Required:</strong>
                <ul>${procedure.safety.ppe.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
            <div class="hazards-list">
                <strong>Hazards:</strong>
                <ul>${procedure.safety.hazards.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
            <div class="emergency-list">
                <strong>Emergency Response:</strong>
                <ul>${procedure.safety.emergency.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
        `;
        document.getElementById('procedure-safety').innerHTML = safetyHTML;
        
        // Materials
        const materialsHTML = `
            <div class="chemicals-list">
                <strong>Chemicals:</strong>
                <ul>${procedure.materials.chemicals.map(c => 
                    `<li>${c.name} - ${c.amount} ${c.note ? `(${c.note})` : ''}</li>`
                ).join('')}</ul>
            </div>
            <div class="equipment-list">
                <strong>Equipment:</strong>
                <ul>${procedure.materials.equipment.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
        `;
        document.getElementById('procedure-materials').innerHTML = materialsHTML;
        
        // Steps
        const stepsHTML = procedure.procedure.map(step => `
            <div class="procedure-step">
                <div class="step-number">${step.step}</div>
                <div class="step-content">
                    <p>${step.instruction}</p>
                    ${step.note ? `<p class="step-note">${step.note}</p>` : ''}
                    ${step.warning ? `<p class="step-warning">⚠️ ${step.warning}</p>` : ''}
                </div>
            </div>
        `).join('');
        document.getElementById('procedure-steps').innerHTML = stepsHTML;
        
        // Cleanup
        const cleanupHTML = `
            <ul>${procedure.cleanup.map(item => `<li>${item}</li>`).join('')}</ul>
        `;
        document.getElementById('procedure-cleanup').innerHTML = cleanupHTML;
        
        // Store for PDF export
        this.currentData.procedure = procedure;
    }
    
    async saveResult() {
        await this.storage.saveCalculation(this.currentData);
        this.ui.showToast('Result saved!', 'success');
    }
    
    async loadHistory() {
        const history = await this.storage.getHistory();
        console.log('Loaded history:', history.length, 'items');
    }
    
    showCommonReactions() {
        // Implementation: Show modal with common reactions
        this.ui.showToast('Common reactions library coming soon!', 'info');
    }
    
    showHistory() {
        // Implementation: Show history screen
        this.ui.showToast('History view coming soon!', 'info');
    }
    
    addQuantityInput() {
        // Implementation: Add quantity input field
        const container = document.getElementById('quantity-inputs');
        const inputHTML = `
            <div class="quantity-input-group">
                <select class="compound-select">
                    <option>Select compound</option>
                </select>
                <input type="number" placeholder="Amount">
                <select class="unit-select">
                    <option value="g">g</option>
                    <option value="mol">mol</option>
                    <option value="M">M</option>
                </select>
                <button class="remove-quantity">×</button>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', inputHTML);
    }
}

// Initialize app
const app = new ChemScanApp();

Due to character limits, I've provided the complete structure and critical implementations. For the remaining JavaScript modules (camera.js, api-client.js, storage.js, ui-manager.js, pdf-export.js) and CSS files, I can provide them in follow-up messages.

IMPLEMENTATION INSTRUCTIONS FOR CLAUDE CODE
Phase 1: Backend Setup

Create folder structure as specified
Install Python dependencies from requirements.txt
Implement all backend routes and engines
Create JSON database files with sample data
Test API endpoints with Postman or curl
Set up Gemini API integration with rate limiting

Phase 2: Frontend Core

Create HTML structure
Implement PWA manifest and service worker
Build CSS (responsive, mobile-first)
Implement JavaScript modules
Test offline capability

Phase 3: Integration

Connect frontend to backend API
Test photo analysis workflow
Test manual input workflow
Test lab procedure generation
Implement PDF export

Phase 4: Polish

Add error handling
Optimize performance
Test on mobile devices
Add loading states and transitions
Implement local caching

Testing Requirements:

Test with at least 10 different reactions
Test OCR with handwritten vs printed text
Test safety warnings with hazardous combinations
Test offline mode
Test on iOS and Android
Verify Gemini API rate limiting works

Deployment:

Deploy backend to Render/Railway
Deploy frontend to Netlify/Vercel
Configure CORS properly
Set environment variables
Test production build