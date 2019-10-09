export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export function removeFeature(item) {
    return {
        type: REMOVE_FEATURE,
        payload: item,
    }
}