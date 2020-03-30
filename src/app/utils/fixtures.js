// (C) 2007-2019 GoodData Corporation

const demoProject = {
    "https://secure.gooddata.com": "k26dtejorcqlqf11crn6imbeevp2q4kg",
    "https://staging3.intgdc.com": "ht3owbpk6h0yfjtkcsgva3osu3z7paol",
    "https://staging2.intgdc.com": "cxmrlinh0gcspntxsytkwcky7gkay4so",
    "https://staging.intgdc.com": "xskxypodp5s4p2t6x99b2szivf8qi3st",
    "https://developer.na.gooddata.com": "xms7ga4tf3g3nzucd8380o2bev8oeknp",
};

const backendUrl = "https://staging2.intgdc.com"; // eslint-disable-line no-undef
const demoProjectId = demoProject[backendUrl];
if (!demoProjectId) {
    console.error(`[fixtures.js] ProjectId for backend "${backendUrl}" is not in `, demoProject); // eslint-disable-line no-console
}

console.log("The /gdc proxy is connected to: ", backendUrl, " with projectId: ", demoProjectId); // eslint-disable-line no-console

// your projectId would be probably static (you may ignore the code above)

export const backendUrlForInfo = backendUrl;
 //export const projectId = 'ht3owbpk6h0yfjtkcsgva3osu3z7paol';
export const projectId=demoProjectId;
 


export const g_Latlon = "label.geopushpin.latlon";
export const a_City = "label.geopushpin.city";  
export const m_SumPopulation = "aacK5iL5gY5t";
export const m_MinPopulation = "aadK4OCEgY7L";





