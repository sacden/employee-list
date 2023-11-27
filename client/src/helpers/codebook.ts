const LANGUAGE = "cs";

export const getCodebookItemName = (codebookCode, codebookItemCode) => {
  let codebookItemName = codebookItemCode;
  const codebook = codebooks[codebookCode];
  if (codebook) {
    const codebookItem = codebook.find((item) => item.code === codebookItemCode);
    if (codebookItem && codebookItem.names[LANGUAGE]) {
      codebookItemName = codebookItem.names[LANGUAGE];
    }
  }
  return codebookItemName;
};

export const codebooks = {
  POSITION: [
    { code: "SOFTWAREENGINEER", names: { cs: "Programátor", en: "Software Engineer" }, order: 1 },
    { code: "TEAMLEAD", names: { cs: "Team Leader", en: "Team Lead" }, order: 2 },
    { code: "ENGINEERINGMANAGER", names: { cs: "Manažer inženýringu", en: "Engineering Manager" }, order: 3 },
    { code: "HRMANAGER", names: { cs: "HR Manažér", en: "HR Manager" }, order: 4 },
    { code: "RECRUITER", names: { cs: "Náborář", en: "Recruiter" }, order: 5 },
    { code: "FINANCEMANAGER", names: { cs: "Manažer financí", en: "Finance Manager" }, order: 6 },
    { code: "ACCOUNTANT", names: { cs: "Účetní", en: "Accountant" }, order: 7 },
    { code: "MARKETINGMANAGER", names: { cs: "Marketingový manažer", en: "Marketing Manager" }, order: 8 },
    { code: "MARKETINGSPECIALIST", names: { cs: "Marketingový specialista", en: "Marketing Specialist" }, order: 9 },
    { code: "CEO", names: { cs: "Výkonný ředitel", en: "CEO" }, order: 10 },
  ],
  DEPARTMENT: [
    { code: "1", names: { cs: "IT", en: "Engineering" }, order: 1 },
    { code: "2", names: { cs: "HR", en: "Human Resources" }, order: 2 },
    { code: "3", names: { cs: "Finance", en: "Finance" }, order: 2 },
    { code: "4", names: { cs: "Marketing", en: "Marketing" }, order: 2 },
    { code: "5", names: { cs: "Board", en: "Executive" }, order: 2 },
  ],
};
