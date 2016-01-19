var datasetBC = {
    data3DesKey : "6BFB383EFB1358AE2ADAEAEA615BFE7626D08F020446C720",
    data3DesInitVector : "AAAAAAAAAAAAAAAA",
    generateDecryptColumn : function (selectedColumn, columnName) {
        var sqlStr = "decrypt(" + selectedColumn + ", " + 
            "'3des', " +
            "'" + this.data3DesKey + "', " +
            "'cbc', " +
            "'" + this.data3DesInitVector + "', " +
            "'pkcs7')";
        if (columnName) {
            sqlStr += ' as \"' + columnName + '\"';
        }
        return sqlStr;
    },
    generateEncryptValue : function (input) {
        var sqlStr = "encrypt(" + input + ", " +
            "'3des', " +
            "'" + this.data3DesKey + "', " +
            "'cbc', " +
            "'" + this.data3DesInitVector + "', " +
            "'pkcs7')";
        return sqlStr;
    }
};
