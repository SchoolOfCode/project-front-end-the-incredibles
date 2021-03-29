# https://docs.microsoft.com/cli/azure/storage/cors?view=azure-cli-latest#az_storage_cors_add
az storage cors add --methods DELETE GET HEAD MERGE OPTIONS POST PUT \
    --origins "*" \
    --allowed-headers "*" \
    --exposed-headers "*" \
    --services b \
    --max-age 86400 \
    --timeout 86400 \
    --account-key  \
    --account-name YOUR-RESOURCE-NAME \
    --subscription YOUR-SUBSCRIPTION-ID \
    --sas-token "sv=2020-02-10&ss=b&srt=sco&sp=rwdlacx&se=2021-04-09T17:56:14Z&st=2021-03-29T09:56:14Z&spr=https,http&sig=HV3ddcFSkIDL%2FxOEyCpiS3Xdf9lil3uXFYiati0WLjo%3D"