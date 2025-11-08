import getIdFromTitle from "@/utils/getIdFromTitle";

const getTabsElementsIdsFromTitle = (title) => {
    const titleFormatted = getIdFromTitle(title)

    return {
        buttonId: `${titleFormatted}-tabs`,
        contentId: `${titleFormatted}-tabpanel`,
    }
}

export default getTabsElementsIdsFromTitle