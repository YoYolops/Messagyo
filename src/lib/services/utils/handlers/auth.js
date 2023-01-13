export default async function handleAuthRequest({
    submissionData,
    validator,
    updateErrors,
    service,
    onSuccessCallbackFunction,
    onFailureCallbackFunction
}) {
    const validationOutput = {}
    for(const key in submissionData) validationOutput[key] = validator[key](submissionData[key])
    for(const key in validationOutput) if(!validationOutput[key].isValid) return updateErrors({ ...validationOutput })

    console.log(service)

    try {
        const response = await service(submissionData)
        console.log("REQUEST SUCCEEDED")
        console.log(response.data)
        onSuccessCallbackFunction(response.data)
    } catch(error) {
        console.log("REQUEST FAILED")
        console.error(error)
        onFailureCallbackFunction(error);
    }
}