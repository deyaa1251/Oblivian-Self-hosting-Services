# Google Sheets Integration Setup Guide

This guide will help you connect the consultation form to Google Sheets.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Consultation Requests" (or any name you prefer)
4. In the first row, add these column headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code in the editor
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);

    // Append a new row with the form data
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone
    ]);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional)
function doGet(e) {
  return ContentService.createTextOutput("The web app is working!");
}
```

4. Click **Save** (disk icon)
5. Name your project (e.g., "Consultation Form Handler")

## Step 3: Deploy the Web App

1. Click **Deploy > New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Configure the deployment:
   - **Description**: "Consultation form integration"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. Review and authorize:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** (if you see a warning)
   - Click **Go to [Project Name] (unsafe)**
   - Click **Allow**
6. Copy the **Web app URL** (it looks like: `https://script.google.com/macros/s/XXXXX/exec`)

## Step 4: Add the URL to Your Project

1. In your project root, create a file named `.env` (if it doesn't exist)
2. Add this line with your Web app URL:

```
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. Save the file

## Step 5: Test the Integration

1. Restart your development server:
```bash
npm run dev
```

2. Go to your website
3. Click the "Free Consultation" button in the footer
4. Fill out and submit the form
5. Check your Google Sheet - you should see the new entry!

## Security Notes

- The Web app is deployed as "Anyone" can access to allow form submissions
- No sensitive data is stored in the frontend
- All data goes directly to your Google Sheet
- Only you have access to view the Google Sheet

## Troubleshooting

### Form submits but data doesn't appear in sheet:
- Double-check the Web app URL in your `.env` file
- Make sure you deployed the script as "Anyone" can access
- Check that column headers match exactly: Timestamp, Name, Email, Phone

### "Not authorized" error:
- Redeploy the script and authorize again
- Make sure you authorized with the correct Google account

### Data appears in wrong columns:
- Ensure the column headers are in the correct order (Timestamp, Name, Email, Phone)

## Need Help?

If you encounter any issues, feel free to reach out or check the [Google Apps Script documentation](https://developers.google.com/apps-script).
