# Project Notes & Considerations

## 🎯 Business Positioning

This website serves as a **lead generation tool** for independent aftermarket repair services. It's NOT a marketing blog or general information site.

### Target Psychology
- **High-Intent Users:** People with broken machines seeking immediate solutions
- **Pain-Driven:** Machine downtime costs money, urgency is high
- **Assessment-First:** Collect diagnostic information before recommending solutions
- **Trust-Building:** Show competence without claiming OEM status

---

## ⚖️ Legal Compliance

### Critical Rules (NEVER Violate)

**Forbidden Terms:**
- ❌ "official"
- ❌ "authorized"
- ❌ "certified"
- ❌ "OEM-approved"
- ❌ "endorsed by [OEM]"

**Required Terms:**
- ✅ "independent"
- ✅ "aftermarket"
- ✅ "non-OEM"
- ✅ "for machines equipped with..."

### Every Page Must Include:
1. Clear non-OEM disclaimer in footer
2. Trademark notice for brand names
3. No comparison to OEM services
4. No criticism of OEM design

---

## 📊 SEO Strategy

### Keyword Strategy

**Primary Keywords (High Intent):**
- "Cytec two-axis head repair"
- "spindle rotary union leakage"
- "hydraulic aggregate pressure"
- "spindle repair rebuild"

**Secondary Keywords (Problem-Focused):**
- "cannot hold pressure"
- "spindle oil leak"
- "encoder signal error"
- "hydraulic clamping issues"

**Search Intent:**
Users are searching because:
1. Machine is currently down or failing
2. They've received alarms they don't understand
3. OEM support is slow/expensive/unavailable
4. They need independent alternative assessment

### Content Approach

**NOT:**
- Technical specifications
- General education
- Product comparisons
- OEM manual reproduction

**YES:**
- Symptom descriptions
- Failure progression patterns
- Assessment process clarity
- Clear CTAs for diagnosis

---

## 🎨 Design Principles

### Visual Hierarchy
1. **Hero:** Immediate value proposition + CTA
2. **Services:** Clear problem-solution mapping
3. **Process:** Reduce uncertainty about how it works
4. **Evidence:** Build credibility (when case photos added)
5. **FAQ:** Address objections and concerns
6. **Contact:** Low-friction assessment request

### Color Psychology
- **Primary Blue:** Trust, reliability, engineering competence
- **Secondary Gray:** Neutral, professional, industrial
- **Accent Colors:** 
  - Green: Safety, success, validation
  - Amber/Orange: Urgency, warning, attention
  - Red: Critical issues, danger, immediate action needed

### Typography
- **Headings:** Bold, clear, scannable
- **Body:** Easy to read, sufficient line spacing
- **CTAs:** High contrast, action-oriented

---

## 🔄 Conversion Funnel

### Stage 1: Awareness (Landing Page)
**Goal:** "I understand what you fix"
- Problem recognition
- Service categorization
- Initial trust signals

### Stage 2: Interest (SEO Pages)
**Goal:** "You understand my specific problem"
- Detailed symptom matching
- Failure mechanism explanation
- Assessment process clarity

### Stage 3: Consideration (Forms)
**Goal:** "I'm ready to share information"
- Low commitment (online assessment, not purchase)
- Clear next steps
- Diagnostic information request

### Stage 4: Action (Submission)
**Goal:** "Information submitted, awaiting response"
- Confirmation message
- Timeline expectation (24-48 hours)
- What happens next clarity

---

## 📝 Content Update Guidelines

### Adding Case Studies (Future)

When adding anonymized case photos:

1. **Remove ALL identifying information:**
   - Customer names
   - Company names
   - Serial numbers
   - Location indicators
   - Date stamps (if specific)

2. **Focus on technical content:**
   - Before/after condition
   - Failure mechanism visualization
   - Repair process documentation

3. **Add descriptive captions:**
   - What failed
   - What was done
   - Outcome

### Maintaining Tone

**Voice Characteristics:**
- **Competent but not arrogant**
- **Urgent but not alarmist**
- **Honest about risks**
- **Clear about limitations**
- **Engineering-focused**
- **Risk-aware**

**Tone Examples:**

❌ Bad: "OEM repair is overpriced and slow. We're better and faster!"  
✅ Good: "We are an independent aftermarket alternative. Assessment helps determine if we're a good fit for your situation."

❌ Bad: "This tiny leak will destroy your entire machine!"  
✅ Good: "Early intervention addresses seal-level issues. Delayed response often escalates to bearing replacement."

❌ Bad: "We're certified experts with 50 years of experience!"  
✅ Good: "We specialize in machines equipped with Cytec two-axis heads. Assessment-first approach ensures accurate diagnosis."

---

## 🔧 Technical Considerations

### Form Backend (TODO)

Current state: Forms log to console  
Production need: Email notification or CRM integration

**Options:**
1. **Email Service (Simple)**
   - Use Resend, SendGrid, or similar
   - Send form data as email
   - Store in email inbox

2. **CRM Integration (Better)**
   - HubSpot, Salesforce, etc.
   - Structured lead data
   - Follow-up tracking

3. **Database + Admin Panel (Best)**
   - Store submissions in database
   - Admin interface to review/respond
   - Status tracking

### File Uploads (TODO)

Assessment form mentions photos/videos but doesn't upload them yet.

**Implementation Options:**
1. **Cloud Storage (AWS S3, Cloudinary)**
   - Upload directly from browser
   - Generate secure URLs
   - Include URLs in form submission

2. **Email Attachment Request**
   - Send follow-up email after submission
   - Request photos via reply
   - Simpler but less convenient

### Analytics (TODO)

**Recommended Tracking:**
- Page views (which problems get most traffic)
- Form submissions (conversion rate)
- Form abandonment (where users drop off)
- Traffic sources (how people find the site)
- Device types (mobile vs. desktop)

**Privacy Considerations:**
- No personal data in analytics
- Cookie consent if required in target regions
- GDPR compliance if serving EU users

---

## 🌐 Future Enhancements

### Phase 2: Chinese Language Support

When adding Chinese version:
1. Keep URL structure parallel: `/zh/spindle-repair-rebuild`
2. Translate all content (don't just machine translate)
3. Consider separate meta descriptions
4. Use `lang="zh"` attribute
5. Maintain same legal disclaimers

### Phase 3: Advanced Features

**Diagnostic Tool:**
- Interactive symptom checker
- Guide users to correct service page
- Collect structured diagnostic data

**Customer Portal:**
- Track repair status
- Upload photos/videos securely
- Communication history
- Invoice/documentation access

**Knowledge Base:**
- Technical articles
- Preventive maintenance guides
- Common alarm code explanations
- NOT marketing blog - stay technical

---

## 📞 Contact Information (TODO)

Currently missing:
- Phone number
- Email address
- Physical address (if applicable)
- Business hours
- Response time commitment

**Recommendation:** Add contact info after legal entity is confirmed and support process is ready.

---

## 🎯 Success Metrics

### Primary Metrics
1. **Lead Volume:** Number of assessment form submissions per month
2. **Lead Quality:** Percentage of submissions that convert to paid repairs
3. **Response Time:** Average time from submission to first response
4. **Geographic Distribution:** Where leads are coming from

### Secondary Metrics
1. **Traffic Sources:** Organic search vs. direct vs. referral
2. **Page Performance:** Which SEO pages generate most conversions
3. **Mobile vs. Desktop:** Device usage patterns
4. **Bounce Rate:** Especially on landing page

### SEO Metrics
1. **Keyword Rankings:** Position for target keywords
2. **Organic Traffic Growth:** Month-over-month increase
3. **Rich Snippet Presence:** FAQ schema displaying in SERPs
4. **Click-Through Rate:** From search results to site

---

## ⚠️ Risk Management

### Trademark Issues
- Monitor for OEM complaints
- Keep all disclaimers visible
- Never claim authorization
- Document all as aftermarket

### Quality Issues
- Only take jobs after assessment
- Clearly communicate limitations
- No guarantees of compatibility
- Document everything

### Communication
- Set clear expectations on timelines
- Don't overpromise capabilities
- Be honest about risks
- Keep records of all assessments

---

**Last Updated:** 2026-02-04  
**Review:** Update this document as business evolves
