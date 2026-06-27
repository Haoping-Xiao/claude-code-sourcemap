// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qYn
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/typescript.js
// class=new  jaccard=0.0302  score=0.0394  fileCov=0.1152
// note: nearest: node_modules/highlight.js/lib/languages/typescript.js (0.0302); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module qYn] (exports=WYn, module=aml)
var WYn = {};
var aml = {
  exports: WYn
};
(function (e, t) {
  typeof WYn === "object" && typeof aml < "u" ? t(WYn) : typeof define === "function" && define.amd ? define(["exports"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, t(e.acorn = {}));
})(WYn, function (e) {
  var t = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239],
    n = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191],
    r = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65",
    o = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",
    s = {
      3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
      5: "class enum extends super const export import",
      6: "enum",
      strict: "implements interface let package private protected public static yield",
      strictBind: "eval arguments"
    },
    i = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
    a = {
      5: i,
      "5module": i + " export import",
      6: i + " const class extends export import super"
    },
    l = /^in(stanceof)?$/,
    c = new RegExp("[" + o + "]"),
    u = new RegExp("[" + o + r + "]");
  function d(X, Se) {
    var qe = 65536;
    for (var ot = 0; ot < Se.length; ot += 2) {
      if (qe += Se[ot], qe > X) return !1;
      if (qe += Se[ot + 1], qe >= X) return !0;
    }
    return !1;
  }
  function p(X, Se) {
    if (X < 65) return X === 36;
    if (X < 91) return !0;
    if (X < 97) return X === 95;
    if (X < 123) return !0;
    if (X <= 65535) return X >= 170 && c.test(String.fromCharCode(X));
    if (Se === !1) return !1;
    return d(X, n);
  }
  function f(X, Se) {
    if (X < 48) return X === 36;
    if (X < 58) return !0;
    if (X < 65) return !1;
    if (X < 91) return !0;
    if (X < 97) return X === 95;
    if (X < 123) return !0;
    if (X <= 65535) return X >= 170 && u.test(String.fromCharCode(X));
    if (Se === !1) return !1;
    return d(X, n) || d(X, t);
  }
  var m = function (Se, qe) {
    if (qe === void 0) qe = {};
    this.label = Se, this.keyword = qe.keyword, this.beforeExpr = !!qe.beforeExpr, this.startsExpr = !!qe.startsExpr, this.isLoop = !!qe.isLoop, this.isAssign = !!qe.isAssign, this.prefix = !!qe.prefix, this.postfix = !!qe.postfix, this.binop = qe.binop || null, this.updateContext = null;
  };
  function g(X, Se) {
    return new m(X, {
      beforeExpr: !0,
      binop: Se
    });
  }
  var h = {
      beforeExpr: !0
    },
    y = {
      startsExpr: !0
    },
    b = {};
  function _(X, Se) {
    if (Se === void 0) Se = {};
    return Se.keyword = X, b[X] = new m(X, Se);
  }
  var S = {
      num: new m("num", y),
      regexp: new m("regexp", y),
      string: new m("string", y),
      name: new m("name", y),
      privateId: new m("privateId", y),
      eof: new m("eof"),
      bracketL: new m("[", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      bracketR: new m("]"),
      braceL: new m("{", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      braceR: new m("}"),
      parenL: new m("(", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      parenR: new m(")"),
      comma: new m(",", h),
      semi: new m(";", h),
      colon: new m(":", h),
      dot: new m("."),
      question: new m("?", h),
      questionDot: new m("?."),
      arrow: new m("=>", h),
      template: new m("template"),
      invalidTemplate: new m("invalidTemplate"),
      ellipsis: new m("...", h),
      backQuote: new m("`", y),
      dollarBraceL: new m("${", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      eq: new m("=", {
        beforeExpr: !0,
        isAssign: !0
      }),
      assign: new m("_=", {
        beforeExpr: !0,
        isAssign: !0
      }),
      incDec: new m("++/--", {
        prefix: !0,
        postfix: !0,
        startsExpr: !0
      }),
      prefix: new m("!/~", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      }),
      logicalOR: g("||", 1),
      logicalAND: g("&&", 2),
      bitwiseOR: g("|", 3),
      bitwiseXOR: g("^", 4),
      bitwiseAND: g("&", 5),
      equality: g("==/!=/===/!==", 6),
      relational: g("</>/<=/>=", 7),
      bitShift: g("<</>>/>>>", 8),
      plusMin: new m("+/-", {
        beforeExpr: !0,
        binop: 9,
        prefix: !0,
        startsExpr: !0
      }),
      modulo: g("%", 10),
      star: g("*", 10),
      slash: g("/", 10),
      starstar: new m("**", {
        beforeExpr: !0
      }),
      coalesce: g("??", 1),
      _break: _("break"),
      _case: _("case", h),
      _catch: _("catch"),
      _continue: _("continue"),
      _debugger: _("debugger"),
      _default: _("default", h),
      _do: _("do", {
        isLoop: !0,
        beforeExpr: !0
      }),
      _else: _("else", h),
      _finally: _("finally"),
      _for: _("for", {
        isLoop: !0
      }),
      _function: _("function", y),
      _if: _("if"),
      _return: _("return", h),
      _switch: _("switch"),
      _throw: _("throw", h),
      _try: _("try"),
      _var: _("var"),
      _const: _("const"),
      _while: _("while", {
        isLoop: !0
      }),
      _with: _("with"),
      _new: _("new", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      _this: _("this", y),
      _super: _("super", y),
      _class: _("class", y),
      _extends: _("extends", h),
      _export: _("export"),
      _import: _("import", y),
      _null: _("null", y),
      _true: _("true", y),
      _false: _("false", y),
      _in: _("in", {
        beforeExpr: !0,
        binop: 7
      }),
      _instanceof: _("instanceof", {
        beforeExpr: !0,
        binop: 7
      }),
      _typeof: _("typeof", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      }),
      _void: _("void", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      }),
      _delete: _("delete", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      })
    },
    A = /\r\n?|\n|\u2028|\u2029/,
    v = new RegExp(A.source, "g");
  function C(X) {
    return X === 10 || X === 13 || X === 8232 || X === 8233;
  }
  function x(X, Se, qe) {
    if (qe === void 0) qe = X.length;
    for (var ot = Se; ot < qe; ot++) {
      var zt = X.charCodeAt(ot);
      if (C(zt)) return ot < qe - 1 && zt === 13 && X.charCodeAt(ot + 1) === 10 ? ot + 2 : ot + 1;
    }
    return -1;
  }
  var I = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
    k = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
    D = Object.prototype,
    P = D.hasOwnProperty,
    O = D.toString,
    L = Object.hasOwn || function (X, Se) {
      return P.call(X, Se);
    },
    M = Array.isArray || function (X) {
      return O.call(X) === "[object Array]";
    },
    N = Object.create(null);
  function B(X) {
    return N[X] || (N[X] = new RegExp("^(?:" + X.replace(/ /g, "|") + ")$"));
  }
  function $(X) {
    if (X <= 65535) return String.fromCharCode(X);
    return X -= 65536, String.fromCharCode((X >> 10) + 55296, (X & 1023) + 56320);
  }
  var q = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/,
    W = function (Se, qe) {
      this.line = Se, this.column = qe;
    };
  W.prototype.offset = function (Se) {
    return new W(this.line, this.column + Se);
  };
  var V = function (Se, qe, ot) {
    if (this.start = qe, this.end = ot, Se.sourceFile !== null) this.source = Se.sourceFile;
  };
  function Y(X, Se) {
    for (var qe = 1, ot = 0;;) {
      var zt = x(X, ot, Se);
      if (zt < 0) return new W(qe, Se - ot);
      ++qe, ot = zt;
    }
  }
  var z = {
      ecmaVersion: null,
      sourceType: "script",
      onInsertedSemicolon: null,
      onTrailingComma: null,
      allowReserved: null,
      allowReturnOutsideFunction: !1,
      allowImportExportEverywhere: !1,
      allowAwaitOutsideFunction: null,
      allowSuperOutsideMethod: null,
      allowHashBang: !1,
      checkPrivateFields: !0,
      locations: !1,
      onToken: null,
      onComment: null,
      ranges: !1,
      program: null,
      sourceFile: null,
      directSourceFile: null,
      preserveParens: !1
    },
    K = !1;
  function Z(X) {
    var Se = {};
    for (var qe in z) Se[qe] = X && L(X, qe) ? X[qe] : z[qe];
    if (Se.ecmaVersion === "latest") Se.ecmaVersion = 1e8;else if (Se.ecmaVersion == null) {
      if (!K && typeof console === "object" && console.warn) K = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`);
      Se.ecmaVersion = 11;
    } else if (Se.ecmaVersion >= 2015) Se.ecmaVersion -= 2009;
    if (Se.allowReserved == null) Se.allowReserved = Se.ecmaVersion < 5;
    if (!X || X.allowHashBang == null) Se.allowHashBang = Se.ecmaVersion >= 14;
    if (M(Se.onToken)) {
      var ot = Se.onToken;
      Se.onToken = function (zt) {
        return ot.push(zt);
      };
    }
    if (M(Se.onComment)) Se.onComment = J(Se, Se.onComment);
    return Se;
  }
  function J(X, Se) {
    return function (qe, ot, zt, cn, hr, Tr) {
      var Br = {
        type: qe ? "Block" : "Line",
        value: ot,
        start: zt,
        end: cn
      };
      if (X.locations) Br.loc = new V(this, hr, Tr);
      if (X.ranges) Br.range = [zt, cn];
      Se.push(Br);
    };
  }
  var ne = 1,
    oe = 2,
    re = 4,
    ee = 8,
    ce = 16,
    ae = 32,
    de = 64,
    Ee = 128,
    me = 256,
    pe = 512,
    ge = ne | oe | me;
  function he(X, Se) {
    return oe | (X ? re : 0) | (Se ? ee : 0);
  }
  var ie = 0,
    le = 1,
    He = 2,
    ye = 3,
    ue = 4,
    we = 5,
    Ce = function (Se, qe, ot) {
      this.options = Se = Z(Se), this.sourceFile = Se.sourceFile, this.keywords = B(a[Se.ecmaVersion >= 6 ? 6 : Se.sourceType === "module" ? "5module" : 5]);
      var zt = "";
      if (Se.allowReserved !== !0) {
        if (zt = s[Se.ecmaVersion >= 6 ? 6 : Se.ecmaVersion === 5 ? 5 : 3], Se.sourceType === "module") zt += " await";
      }
      this.reservedWords = B(zt);
      var cn = (zt ? zt + " " : "") + s.strict;
      if (this.reservedWordsStrict = B(cn), this.reservedWordsStrictBind = B(cn + " " + s.strictBind), this.input = String(qe), this.containsEsc = !1, ot) this.pos = ot, this.lineStart = this.input.lastIndexOf(`
`, ot - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(A).length;else this.pos = this.lineStart = 0, this.curLine = 1;
      if (this.type = S.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = Se.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = Object.create(null), this.pos === 0 && Se.allowHashBang && this.input.slice(0, 2) === "#!") this.skipLineComment(2);
      this.scopeStack = [], this.enterScope(ne), this.regexpState = null, this.privateNameStack = [];
    },
    Ie = {
      inFunction: {
        configurable: !0
      },
      inGenerator: {
        configurable: !0
      },
      inAsync: {
        configurable: !0
      },
      canAwait: {
        configurable: !0
      },
      allowSuper: {
        configurable: !0
      },
      allowDirectSuper: {
        configurable: !0
      },
      treatFunctionsAsVar: {
        configurable: !0
      },
      allowNewDotTarget: {
        configurable: !0
      },
      inClassStaticBlock: {
        configurable: !0
      }
    };
  Ce.prototype.parse = function () {
    var Se = this.options.program || this.startNode();
    return this.nextToken(), this.parseTopLevel(Se);
  }, Ie.inFunction.get = function () {
    return (this.currentVarScope().flags & oe) > 0;
  }, Ie.inGenerator.get = function () {
    return (this.currentVarScope().flags & ee) > 0;
  }, Ie.inAsync.get = function () {
    return (this.currentVarScope().flags & re) > 0;
  }, Ie.canAwait.get = function () {
    for (var X = this.scopeStack.length - 1; X >= 0; X--) {
      var Se = this.scopeStack[X],
        qe = Se.flags;
      if (qe & (me | pe)) return !1;
      if (qe & oe) return (qe & re) > 0;
    }
    return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
  }, Ie.allowSuper.get = function () {
    var X = this.currentThisScope(),
      Se = X.flags;
    return (Se & de) > 0 || this.options.allowSuperOutsideMethod;
  }, Ie.allowDirectSuper.get = function () {
    return (this.currentThisScope().flags & Ee) > 0;
  }, Ie.treatFunctionsAsVar.get = function () {
    return this.treatFunctionsAsVarInScope(this.currentScope());
  }, Ie.allowNewDotTarget.get = function () {
    for (var X = this.scopeStack.length - 1; X >= 0; X--) {
      var Se = this.scopeStack[X],
        qe = Se.flags;
      if (qe & (me | pe) || qe & oe && !(qe & ce)) return !0;
    }
    return !1;
  }, Ie.inClassStaticBlock.get = function () {
    return (this.currentVarScope().flags & me) > 0;
  }, Ce.extend = function () {
    var Se = [],
      qe = arguments.length;
    while (qe--) Se[qe] = arguments[qe];
    var ot = this;
    for (var zt = 0; zt < Se.length; zt++) ot = Se[zt](ot);
    return ot;
  }, Ce.parse = function (Se, qe) {
    return new this(qe, Se).parse();
  }, Ce.parseExpressionAt = function (Se, qe, ot) {
    var zt = new this(ot, Se, qe);
    return zt.nextToken(), zt.parseExpression();
  }, Ce.tokenizer = function (Se, qe) {
    return new this(qe, Se);
  }, Object.defineProperties(Ce.prototype, Ie);
  var Ve = Ce.prototype,
    Ze = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
  Ve.strictDirective = function (X) {
    if (this.options.ecmaVersion < 5) return !1;
    for (;;) {
      k.lastIndex = X, X += k.exec(this.input)[0].length;
      var Se = Ze.exec(this.input.slice(X));
      if (!Se) return !1;
      if ((Se[1] || Se[2]) === "use strict") {
        k.lastIndex = X + Se[0].length;
        var qe = k.exec(this.input),
          ot = qe.index + qe[0].length,
          zt = this.input.charAt(ot);
        return zt === ";" || zt === "}" || A.test(qe[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(zt) || zt === "!" && this.input.charAt(ot + 1) === "=");
      }
      if (X += Se[0].length, k.lastIndex = X, X += k.exec(this.input)[0].length, this.input[X] === ";") X++;
    }
  }, Ve.eat = function (X) {
    if (this.type === X) return this.next(), !0;else return !1;
  }, Ve.isContextual = function (X) {
    return this.type === S.name && this.value === X && !this.containsEsc;
  }, Ve.eatContextual = function (X) {
    if (!this.isContextual(X)) return !1;
    return this.next(), !0;
  }, Ve.expectContextual = function (X) {
    if (!this.eatContextual(X)) this.unexpected();
  }, Ve.canInsertSemicolon = function () {
    return this.type === S.eof || this.type === S.braceR || A.test(this.input.slice(this.lastTokEnd, this.start));
  }, Ve.insertSemicolon = function () {
    if (this.canInsertSemicolon()) {
      if (this.options.onInsertedSemicolon) this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
      return !0;
    }
  }, Ve.semicolon = function () {
    if (!this.eat(S.semi) && !this.insertSemicolon()) this.unexpected();
  }, Ve.afterTrailingComma = function (X, Se) {
    if (this.type === X) {
      if (this.options.onTrailingComma) this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
      if (!Se) this.next();
      return !0;
    }
  }, Ve.expect = function (X) {
    this.eat(X) || this.unexpected();
  }, Ve.unexpected = function (X) {
    this.raise(X != null ? X : this.start, "Unexpected token");
  };
  var Be = function () {
    this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
  };
  Ve.checkPatternErrors = function (X, Se) {
    if (!X) return;
    if (X.trailingComma > -1) this.raiseRecoverable(X.trailingComma, "Comma is not permitted after the rest element");
    var qe = Se ? X.parenthesizedAssign : X.parenthesizedBind;
    if (qe > -1) this.raiseRecoverable(qe, Se ? "Assigning to rvalue" : "Parenthesized pattern");
  }, Ve.checkExpressionErrors = function (X, Se) {
    if (!X) return !1;
    var {
      shorthandAssign: qe,
      doubleProto: ot
    } = X;
    if (!Se) return qe >= 0 || ot >= 0;
    if (qe >= 0) this.raise(qe, "Shorthand property assignments are valid only in destructuring patterns");
    if (ot >= 0) this.raiseRecoverable(ot, "Redefinition of __proto__ property");
  }, Ve.checkYieldAwaitInDefaultParams = function () {
    if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) this.raise(this.yieldPos, "Yield expression cannot be a default value");
    if (this.awaitPos) this.raise(this.awaitPos, "Await expression cannot be a default value");
  }, Ve.isSimpleAssignTarget = function (X) {
    if (X.type === "ParenthesizedExpression") return this.isSimpleAssignTarget(X.expression);
    return X.type === "Identifier" || X.type === "MemberExpression";
  };
  var Me = Ce.prototype;
  Me.parseTopLevel = function (X) {
    var Se = Object.create(null);
    if (!X.body) X.body = [];
    while (this.type !== S.eof) {
      var qe = this.parseStatement(null, !0, Se);
      X.body.push(qe);
    }
    if (this.inModule) for (var ot = 0, zt = Object.keys(this.undefinedExports); ot < zt.length; ot += 1) {
      var cn = zt[ot];
      this.raiseRecoverable(this.undefinedExports[cn].start, "Export '" + cn + "' is not defined");
    }
    return this.adaptDirectivePrologue(X.body), this.next(), X.sourceType = this.options.sourceType, this.finishNode(X, "Program");
  };
  var Ue = {
      kind: "loop"
    },
    tt = {
      kind: "switch"
    };
  Me.isLet = function (X) {
    if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
    k.lastIndex = this.pos;
    var Se = k.exec(this.input),
      qe = this.pos + Se[0].length,
      ot = this.input.charCodeAt(qe);
    if (ot === 91 || ot === 92) return !0;
    if (X) return !1;
    if (ot === 123 || ot > 55295 && ot < 56320) return !0;
    if (p(ot, !0)) {
      var zt = qe + 1;
      while (f(ot = this.input.charCodeAt(zt), !0)) ++zt;
      if (ot === 92 || ot > 55295 && ot < 56320) return !0;
      var cn = this.input.slice(qe, zt);
      if (!l.test(cn)) return !0;
    }
    return !1;
  }, Me.isAsyncFunction = function () {
    if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
    k.lastIndex = this.pos;
    var X = k.exec(this.input),
      Se = this.pos + X[0].length,
      qe;
    return !A.test(this.input.slice(this.pos, Se)) && this.input.slice(Se, Se + 8) === "function" && (Se + 8 === this.input.length || !(f(qe = this.input.charCodeAt(Se + 8)) || qe > 55295 && qe < 56320));
  }, Me.isUsingKeyword = function (X, Se) {
    if (this.options.ecmaVersion < 17 || !this.isContextual(X ? "await" : "using")) return !1;
    k.lastIndex = this.pos;
    var qe = k.exec(this.input),
      ot = this.pos + qe[0].length;
    if (A.test(this.input.slice(this.pos, ot))) return !1;
    if (X) {
      var zt = ot + 5,
        cn;
      if (this.input.slice(ot, zt) !== "using" || zt === this.input.length || f(cn = this.input.charCodeAt(zt)) || cn > 55295 && cn < 56320) return !1;
      k.lastIndex = zt;
      var hr = k.exec(this.input);
      if (hr && A.test(this.input.slice(zt, zt + hr[0].length))) return !1;
    }
    if (Se) {
      var Tr = ot + 2,
        Br;
      if (this.input.slice(ot, Tr) === "of") {
        if (Tr === this.input.length || !f(Br = this.input.charCodeAt(Tr)) && !(Br > 55295 && Br < 56320)) return !1;
      }
    }
    var fi = this.input.charCodeAt(ot);
    return p(fi, !0) || fi === 92;
  }, Me.isAwaitUsing = function (X) {
    return this.isUsingKeyword(!0, X);
  }, Me.isUsing = function (X) {
    return this.isUsingKeyword(!1, X);
  }, Me.parseStatement = function (X, Se, qe) {
    var ot = this.type,
      zt = this.startNode(),
      cn;
    if (this.isLet(X)) ot = S._var, cn = "let";
    switch (ot) {
      case S._break:
      case S._continue:
        return this.parseBreakContinueStatement(zt, ot.keyword);
      case S._debugger:
        return this.parseDebuggerStatement(zt);
      case S._do:
        return this.parseDoStatement(zt);
      case S._for:
        return this.parseForStatement(zt);
      case S._function:
        if (X && (this.strict || X !== "if" && X !== "label") && this.options.ecmaVersion >= 6) this.unexpected();
        return this.parseFunctionStatement(zt, !1, !X);
      case S._class:
        if (X) this.unexpected();
        return this.parseClass(zt, !0);
      case S._if:
        return this.parseIfStatement(zt);
      case S._return:
        return this.parseReturnStatement(zt);
      case S._switch:
        return this.parseSwitchStatement(zt);
      case S._throw:
        return this.parseThrowStatement(zt);
      case S._try:
        return this.parseTryStatement(zt);
      case S._const:
      case S._var:
        if (cn = cn || this.value, X && cn !== "var") this.unexpected();
        return this.parseVarStatement(zt, cn);
      case S._while:
        return this.parseWhileStatement(zt);
      case S._with:
        return this.parseWithStatement(zt);
      case S.braceL:
        return this.parseBlock(!0, zt);
      case S.semi:
        return this.parseEmptyStatement(zt);
      case S._export:
      case S._import:
        if (this.options.ecmaVersion > 10 && ot === S._import) {
          k.lastIndex = this.pos;
          var hr = k.exec(this.input),
            Tr = this.pos + hr[0].length,
            Br = this.input.charCodeAt(Tr);
          if (Br === 40 || Br === 46) return this.parseExpressionStatement(zt, this.parseExpression());
        }
        if (!this.options.allowImportExportEverywhere) {
          if (!Se) this.raise(this.start, "'import' and 'export' may only appear at the top level");
          if (!this.inModule) this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
        }
        return ot === S._import ? this.parseImport(zt) : this.parseExport(zt, qe);
      default:
        if (this.isAsyncFunction()) {
          if (X) this.unexpected();
          return this.next(), this.parseFunctionStatement(zt, !0, !X);
        }
        var fi = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
        if (fi) {
          if (Se && this.options.sourceType === "script") this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script`");
          if (fi === "await using") {
            if (!this.canAwait) this.raise(this.start, "Await using cannot appear outside of async function");
            this.next();
          }
          return this.next(), this.parseVar(zt, !1, fi), this.semicolon(), this.finishNode(zt, "VariableDeclaration");
        }
        var oi = this.value,
          Pa = this.parseExpression();
        if (ot === S.name && Pa.type === "Identifier" && this.eat(S.colon)) return this.parseLabeledStatement(zt, oi, Pa, X);else return this.parseExpressionStatement(zt, Pa);
    }
  }, Me.parseBreakContinueStatement = function (X, Se) {
    var qe = Se === "break";
    if (this.next(), this.eat(S.semi) || this.insertSemicolon()) X.label = null;else if (this.type !== S.name) this.unexpected();else X.label = this.parseIdent(), this.semicolon();
    var ot = 0;
    for (; ot < this.labels.length; ++ot) {
      var zt = this.labels[ot];
      if (X.label == null || zt.name === X.label.name) {
        if (zt.kind != null && (qe || zt.kind === "loop")) break;
        if (X.label && qe) break;
      }
    }
    if (ot === this.labels.length) this.raise(X.start, "Unsyntactic " + Se);
    return this.finishNode(X, qe ? "BreakStatement" : "ContinueStatement");
  }, Me.parseDebuggerStatement = function (X) {
    return this.next(), this.semicolon(), this.finishNode(X, "DebuggerStatement");
  }, Me.parseDoStatement = function (X) {
    if (this.next(), this.labels.push(Ue), X.body = this.parseStatement("do"), this.labels.pop(), this.expect(S._while), X.test = this.parseParenExpression(), this.options.ecmaVersion >= 6) this.eat(S.semi);else this.semicolon();
    return this.finishNode(X, "DoWhileStatement");
  }, Me.parseForStatement = function (X) {
    this.next();
    var Se = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
    if (this.labels.push(Ue), this.enterScope(0), this.expect(S.parenL), this.type === S.semi) {
      if (Se > -1) this.unexpected(Se);
      return this.parseFor(X, null);
    }
    var qe = this.isLet();
    if (this.type === S._var || this.type === S._const || qe) {
      var ot = this.startNode(),
        zt = qe ? "let" : this.value;
      return this.next(), this.parseVar(ot, !0, zt), this.finishNode(ot, "VariableDeclaration"), this.parseForAfterInit(X, ot, Se);
    }
    var cn = this.isContextual("let"),
      hr = !1,
      Tr = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
    if (Tr) {
      var Br = this.startNode();
      if (this.next(), Tr === "await using") this.next();
      return this.parseVar(Br, !0, Tr), this.finishNode(Br, "VariableDeclaration"), this.parseForAfterInit(X, Br, Se);
    }
    var fi = this.containsEsc,
      oi = new Be(),
      Pa = this.start,
      nc = Se > -1 ? this.parseExprSubscripts(oi, "await") : this.parseExpression(!0, oi);
    if (this.type === S._in || (hr = this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
      if (Se > -1) {
        if (this.type === S._in) this.unexpected(Se);
        X.await = !0;
      } else if (hr && this.options.ecmaVersion >= 8) {
        if (nc.start === Pa && !fi && nc.type === "Identifier" && nc.name === "async") this.unexpected();else if (this.options.ecmaVersion >= 9) X.await = !1;
      }
      if (cn && hr) this.raise(nc.start, "The left-hand side of a for-of loop may not start with 'let'.");
      return this.toAssignable(nc, !1, oi), this.checkLValPattern(nc), this.parseForIn(X, nc);
    } else this.checkExpressionErrors(oi, !0);
    if (Se > -1) this.unexpected(Se);
    return this.parseFor(X, nc);
  }, Me.parseForAfterInit = function (X, Se, qe) {
    if ((this.type === S._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && Se.declarations.length === 1) {
      if (this.options.ecmaVersion >= 9) if (this.type === S._in) {
        if (qe > -1) this.unexpected(qe);
      } else X.await = qe > -1;
      return this.parseForIn(X, Se);
    }
    if (qe > -1) this.unexpected(qe);
    return this.parseFor(X, Se);
  }, Me.parseFunctionStatement = function (X, Se, qe) {
    return this.next(), this.parseFunction(X, Ke | (qe ? 0 : Et), !1, Se);
  }, Me.parseIfStatement = function (X) {
    return this.next(), X.test = this.parseParenExpression(), X.consequent = this.parseStatement("if"), X.alternate = this.eat(S._else) ? this.parseStatement("if") : null, this.finishNode(X, "IfStatement");
  }, Me.parseReturnStatement = function (X) {
    if (!this.inFunction && !this.options.allowReturnOutsideFunction) this.raise(this.start, "'return' outside of function");
    if (this.next(), this.eat(S.semi) || this.insertSemicolon()) X.argument = null;else X.argument = this.parseExpression(), this.semicolon();
    return this.finishNode(X, "ReturnStatement");
  }, Me.parseSwitchStatement = function (X) {
    this.next(), X.discriminant = this.parseParenExpression(), X.cases = [], this.expect(S.braceL), this.labels.push(tt), this.enterScope(0);
    var Se;
    for (var qe = !1; this.type !== S.braceR;) if (this.type === S._case || this.type === S._default) {
      var ot = this.type === S._case;
      if (Se) this.finishNode(Se, "SwitchCase");
      if (X.cases.push(Se = this.startNode()), Se.consequent = [], this.next(), ot) Se.test = this.parseExpression();else {
        if (qe) this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
        qe = !0, Se.test = null;
      }
      this.expect(S.colon);
    } else {
      if (!Se) this.unexpected();
      Se.consequent.push(this.parseStatement(null));
    }
    if (this.exitScope(), Se) this.finishNode(Se, "SwitchCase");
    return this.next(), this.labels.pop(), this.finishNode(X, "SwitchStatement");
  }, Me.parseThrowStatement = function (X) {
    if (this.next(), A.test(this.input.slice(this.lastTokEnd, this.start))) this.raise(this.lastTokEnd, "Illegal newline after throw");
    return X.argument = this.parseExpression(), this.semicolon(), this.finishNode(X, "ThrowStatement");
  };
  var bt = [];
  Me.parseCatchClauseParam = function () {
    var X = this.parseBindingAtom(),
      Se = X.type === "Identifier";
    return this.enterScope(Se ? ae : 0), this.checkLValPattern(X, Se ? ue : He), this.expect(S.parenR), X;
  }, Me.parseTryStatement = function (X) {
    if (this.next(), X.block = this.parseBlock(), X.handler = null, this.type === S._catch) {
      var Se = this.startNode();
      if (this.next(), this.eat(S.parenL)) Se.param = this.parseCatchClauseParam();else {
        if (this.options.ecmaVersion < 10) this.unexpected();
        Se.param = null, this.enterScope(0);
      }
      Se.body = this.parseBlock(!1), this.exitScope(), X.handler = this.finishNode(Se, "CatchClause");
    }
    if (X.finalizer = this.eat(S._finally) ? this.parseBlock() : null, !X.handler && !X.finalizer) this.raise(X.start, "Missing catch or finally clause");
    return this.finishNode(X, "TryStatement");
  }, Me.parseVarStatement = function (X, Se, qe) {
    return this.next(), this.parseVar(X, !1, Se, qe), this.semicolon(), this.finishNode(X, "VariableDeclaration");
  }, Me.parseWhileStatement = function (X) {
    return this.next(), X.test = this.parseParenExpression(), this.labels.push(Ue), X.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(X, "WhileStatement");
  }, Me.parseWithStatement = function (X) {
    if (this.strict) this.raise(this.start, "'with' in strict mode");
    return this.next(), X.object = this.parseParenExpression(), X.body = this.parseStatement("with"), this.finishNode(X, "WithStatement");
  }, Me.parseEmptyStatement = function (X) {
    return this.next(), this.finishNode(X, "EmptyStatement");
  }, Me.parseLabeledStatement = function (X, Se, qe, ot) {
    for (var zt = 0, cn = this.labels; zt < cn.length; zt += 1) {
      var hr = cn[zt];
      if (hr.name === Se) this.raise(qe.start, "Label '" + Se + "' is already declared");
    }
    var Tr = this.type.isLoop ? "loop" : this.type === S._switch ? "switch" : null;
    for (var Br = this.labels.length - 1; Br >= 0; Br--) {
      var fi = this.labels[Br];
      if (fi.statementStart === X.start) fi.statementStart = this.start, fi.kind = Tr;else break;
    }
    return this.labels.push({
      name: Se,
      kind: Tr,
      statementStart: this.start
    }), X.body = this.parseStatement(ot ? ot.indexOf("label") === -1 ? ot + "label" : ot : "label"), this.labels.pop(), X.label = qe, this.finishNode(X, "LabeledStatement");
  }, Me.parseExpressionStatement = function (X, Se) {
    return X.expression = Se, this.semicolon(), this.finishNode(X, "ExpressionStatement");
  }, Me.parseBlock = function (X, Se, qe) {
    if (X === void 0) X = !0;
    if (Se === void 0) Se = this.startNode();
    if (Se.body = [], this.expect(S.braceL), X) this.enterScope(0);
    while (this.type !== S.braceR) {
      var ot = this.parseStatement(null);
      Se.body.push(ot);
    }
    if (qe) this.strict = !1;
    if (this.next(), X) this.exitScope();
    return this.finishNode(Se, "BlockStatement");
  }, Me.parseFor = function (X, Se) {
    return X.init = Se, this.expect(S.semi), X.test = this.type === S.semi ? null : this.parseExpression(), this.expect(S.semi), X.update = this.type === S.parenR ? null : this.parseExpression(), this.expect(S.parenR), X.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(X, "ForStatement");
  }, Me.parseForIn = function (X, Se) {
    var qe = this.type === S._in;
    if (this.next(), Se.type === "VariableDeclaration" && Se.declarations[0].init != null && (!qe || this.options.ecmaVersion < 8 || this.strict || Se.kind !== "var" || Se.declarations[0].id.type !== "Identifier")) this.raise(Se.start, (qe ? "for-in" : "for-of") + " loop variable declaration may not have an initializer");
    return X.left = Se, X.right = qe ? this.parseExpression() : this.parseMaybeAssign(), this.expect(S.parenR), X.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(X, qe ? "ForInStatement" : "ForOfStatement");
  }, Me.parseVar = function (X, Se, qe, ot) {
    X.declarations = [], X.kind = qe;
    for (;;) {
      var zt = this.startNode();
      if (this.parseVarId(zt, qe), this.eat(S.eq)) zt.init = this.parseMaybeAssign(Se);else if (!ot && qe === "const" && !(this.type === S._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) this.unexpected();else if (!ot && (qe === "using" || qe === "await using") && this.options.ecmaVersion >= 17 && this.type !== S._in && !this.isContextual("of")) this.raise(this.lastTokEnd, "Missing initializer in " + qe + " declaration");else if (!ot && zt.id.type !== "Identifier" && !(Se && (this.type === S._in || this.isContextual("of")))) this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");else zt.init = null;
      if (X.declarations.push(this.finishNode(zt, "VariableDeclarator")), !this.eat(S.comma)) break;
    }
    return X;
  }, Me.parseVarId = function (X, Se) {
    X.id = Se === "using" || Se === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(X.id, Se === "var" ? le : He, !1);
  };
  var Ke = 1,
    Et = 2,
    ct = 4;
  Me.parseFunction = function (X, Se, qe, ot, zt) {
    if (this.initFunction(X), this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !ot) {
      if (this.type === S.star && Se & Et) this.unexpected();
      X.generator = this.eat(S.star);
    }
    if (this.options.ecmaVersion >= 8) X.async = !!ot;
    if (Se & Ke) {
      if (X.id = Se & ct && this.type !== S.name ? null : this.parseIdent(), X.id && !(Se & Et)) this.checkLValSimple(X.id, this.strict || X.generator || X.async ? this.treatFunctionsAsVar ? le : He : ye);
    }
    var cn = this.yieldPos,
      hr = this.awaitPos,
      Tr = this.awaitIdentPos;
    if (this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(he(X.async, X.generator)), !(Se & Ke)) X.id = this.type === S.name ? this.parseIdent() : null;
    return this.parseFunctionParams(X), this.parseFunctionBody(X, qe, !1, zt), this.yieldPos = cn, this.awaitPos = hr, this.awaitIdentPos = Tr, this.finishNode(X, Se & Ke ? "FunctionDeclaration" : "FunctionExpression");
  }, Me.parseFunctionParams = function (X) {
    this.expect(S.parenL), X.params = this.parseBindingList(S.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
  }, Me.parseClass = function (X, Se) {
    this.next();
    var qe = this.strict;
    this.strict = !0, this.parseClassId(X, Se), this.parseClassSuper(X);
    var ot = this.enterClassBody(),
      zt = this.startNode(),
      cn = !1;
    zt.body = [], this.expect(S.braceL);
    while (this.type !== S.braceR) {
      var hr = this.parseClassElement(X.superClass !== null);
      if (hr) {
        if (zt.body.push(hr), hr.type === "MethodDefinition" && hr.kind === "constructor") {
          if (cn) this.raiseRecoverable(hr.start, "Duplicate constructor in the same class");
          cn = !0;
        } else if (hr.key && hr.key.type === "PrivateIdentifier" && Je(ot, hr)) this.raiseRecoverable(hr.key.start, "Identifier '#" + hr.key.name + "' has already been declared");
      }
    }
    return this.strict = qe, this.next(), X.body = this.finishNode(zt, "ClassBody"), this.exitClassBody(), this.finishNode(X, Se ? "ClassDeclaration" : "ClassExpression");
  }, Me.parseClassElement = function (X) {
    if (this.eat(S.semi)) return null;
    var Se = this.options.ecmaVersion,
      qe = this.startNode(),
      ot = "",
      zt = !1,
      cn = !1,
      hr = "method",
      Tr = !1;
    if (this.eatContextual("static")) {
      if (Se >= 13 && this.eat(S.braceL)) return this.parseClassStaticBlock(qe), qe;
      if (this.isClassElementNameStart() || this.type === S.star) Tr = !0;else ot = "static";
    }
    if (qe.static = Tr, !ot && Se >= 8 && this.eatContextual("async")) if ((this.isClassElementNameStart() || this.type === S.star) && !this.canInsertSemicolon()) cn = !0;else ot = "async";
    if (!ot && (Se >= 9 || !cn) && this.eat(S.star)) zt = !0;
    if (!ot && !cn && !zt) {
      var Br = this.value;
      if (this.eatContextual("get") || this.eatContextual("set")) if (this.isClassElementNameStart()) hr = Br;else ot = Br;
    }
    if (ot) qe.computed = !1, qe.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), qe.key.name = ot, this.finishNode(qe.key, "Identifier");else this.parseClassElementName(qe);
    if (Se < 13 || this.type === S.parenL || hr !== "method" || zt || cn) {
      var fi = !qe.static && gt(qe, "constructor"),
        oi = fi && X;
      if (fi && hr !== "method") this.raise(qe.key.start, "Constructor can't have get/set modifier");
      qe.kind = fi ? "constructor" : hr, this.parseClassMethod(qe, zt, cn, oi);
    } else this.parseClassField(qe);
    return qe;
  }, Me.isClassElementNameStart = function () {
    return this.type === S.name || this.type === S.privateId || this.type === S.num || this.type === S.string || this.type === S.bracketL || this.type.keyword;
  }, Me.parseClassElementName = function (X) {
    if (this.type === S.privateId) {
      if (this.value === "constructor") this.raise(this.start, "Classes can't have an element named '#constructor'");
      X.computed = !1, X.key = this.parsePrivateIdent();
    } else this.parsePropertyName(X);
  }, Me.parseClassMethod = function (X, Se, qe, ot) {
    var zt = X.key;
    if (X.kind === "constructor") {
      if (Se) this.raise(zt.start, "Constructor can't be a generator");
      if (qe) this.raise(zt.start, "Constructor can't be an async method");
    } else if (X.static && gt(X, "prototype")) this.raise(zt.start, "Classes may not have a static property named prototype");
    var cn = X.value = this.parseMethod(Se, qe, ot);
    if (X.kind === "get" && cn.params.length !== 0) this.raiseRecoverable(cn.start, "getter should have no params");
    if (X.kind === "set" && cn.params.length !== 1) this.raiseRecoverable(cn.start, "setter should have exactly one param");
    if (X.kind === "set" && cn.params[0].type === "RestElement") this.raiseRecoverable(cn.params[0].start, "Setter cannot use rest params");
    return this.finishNode(X, "MethodDefinition");
  }, Me.parseClassField = function (X) {
    if (gt(X, "constructor")) this.raise(X.key.start, "Classes can't have a field named 'constructor'");else if (X.static && gt(X, "prototype")) this.raise(X.key.start, "Classes can't have a static field named 'prototype'");
    if (this.eat(S.eq)) this.enterScope(pe | de), X.value = this.parseMaybeAssign(), this.exitScope();else X.value = null;
    return this.semicolon(), this.finishNode(X, "PropertyDefinition");
  }, Me.parseClassStaticBlock = function (X) {
    X.body = [];
    var Se = this.labels;
    this.labels = [], this.enterScope(me | de);
    while (this.type !== S.braceR) {
      var qe = this.parseStatement(null);
      X.body.push(qe);
    }
    return this.next(), this.exitScope(), this.labels = Se, this.finishNode(X, "StaticBlock");
  }, Me.parseClassId = function (X, Se) {
    if (this.type === S.name) {
      if (X.id = this.parseIdent(), Se) this.checkLValSimple(X.id, He, !1);
    } else {
      if (Se === !0) this.unexpected();
      X.id = null;
    }
  }, Me.parseClassSuper = function (X) {
    X.superClass = this.eat(S._extends) ? this.parseExprSubscripts(null, !1) : null;
  }, Me.enterClassBody = function () {
    var X = {
      declared: Object.create(null),
      used: []
    };
    return this.privateNameStack.push(X), X.declared;
  }, Me.exitClassBody = function () {
    var X = this.privateNameStack.pop(),
      Se = X.declared,
      qe = X.used;
    if (!this.options.checkPrivateFields) return;
    var ot = this.privateNameStack.length,
      zt = ot === 0 ? null : this.privateNameStack[ot - 1];
    for (var cn = 0; cn < qe.length; ++cn) {
      var hr = qe[cn];
      if (!L(Se, hr.name)) if (zt) zt.used.push(hr);else this.raiseRecoverable(hr.start, "Private field '#" + hr.name + "' must be declared in an enclosing class");
    }
  };
  function Je(X, Se) {
    var qe = Se.key.name,
      ot = X[qe],
      zt = "true";
    if (Se.type === "MethodDefinition" && (Se.kind === "get" || Se.kind === "set")) zt = (Se.static ? "s" : "i") + Se.kind;
    if (ot === "iget" && zt === "iset" || ot === "iset" && zt === "iget" || ot === "sget" && zt === "sset" || ot === "sset" && zt === "sget") return X[qe] = "true", !1;else if (!ot) return X[qe] = zt, !1;else return !0;
  }
  function gt(X, Se) {
    var {
      computed: qe,
      key: ot
    } = X;
    return !qe && (ot.type === "Identifier" && ot.name === Se || ot.type === "Literal" && ot.value === Se);
  }
  Me.parseExportAllDeclaration = function (X, Se) {
    if (this.options.ecmaVersion >= 11) if (this.eatContextual("as")) X.exported = this.parseModuleExportName(), this.checkExport(Se, X.exported, this.lastTokStart);else X.exported = null;
    if (this.expectContextual("from"), this.type !== S.string) this.unexpected();
    if (X.source = this.parseExprAtom(), this.options.ecmaVersion >= 16) X.attributes = this.parseWithClause();
    return this.semicolon(), this.finishNode(X, "ExportAllDeclaration");
  }, Me.parseExport = function (X, Se) {
    if (this.next(), this.eat(S.star)) return this.parseExportAllDeclaration(X, Se);
    if (this.eat(S._default)) return this.checkExport(Se, "default", this.lastTokStart), X.declaration = this.parseExportDefaultDeclaration(), this.finishNode(X, "ExportDefaultDeclaration");
    if (this.shouldParseExportStatement()) {
      if (X.declaration = this.parseExportDeclaration(X), X.declaration.type === "VariableDeclaration") this.checkVariableExport(Se, X.declaration.declarations);else this.checkExport(Se, X.declaration.id, X.declaration.id.start);
      if (X.specifiers = [], X.source = null, this.options.ecmaVersion >= 16) X.attributes = [];
    } else {
      if (X.declaration = null, X.specifiers = this.parseExportSpecifiers(Se), this.eatContextual("from")) {
        if (this.type !== S.string) this.unexpected();
        if (X.source = this.parseExprAtom(), this.options.ecmaVersion >= 16) X.attributes = this.parseWithClause();
      } else {
        for (var qe = 0, ot = X.specifiers; qe < ot.length; qe += 1) {
          var zt = ot[qe];
          if (this.checkUnreserved(zt.local), this.checkLocalExport(zt.local), zt.local.type === "Literal") this.raise(zt.local.start, "A string literal cannot be used as an exported binding without `from`.");
        }
        if (X.source = null, this.options.ecmaVersion >= 16) X.attributes = [];
      }
      this.semicolon();
    }
    return this.finishNode(X, "ExportNamedDeclaration");
  }, Me.parseExportDeclaration = function (X) {
    return this.parseStatement(null);
  }, Me.parseExportDefaultDeclaration = function () {
    var X;
    if (this.type === S._function || (X = this.isAsyncFunction())) {
      var Se = this.startNode();
      if (this.next(), X) this.next();
      return this.parseFunction(Se, Ke | ct, !1, X);
    } else if (this.type === S._class) {
      var qe = this.startNode();
      return this.parseClass(qe, "nullableID");
    } else {
      var ot = this.parseMaybeAssign();
      return this.semicolon(), ot;
    }
  }, Me.checkExport = function (X, Se, qe) {
    if (!X) return;
    if (typeof Se !== "string") Se = Se.type === "Identifier" ? Se.name : Se.value;
    if (L(X, Se)) this.raiseRecoverable(qe, "Duplicate export '" + Se + "'");
    X[Se] = !0;
  }, Me.checkPatternExport = function (X, Se) {
    var qe = Se.type;
    if (qe === "Identifier") this.checkExport(X, Se, Se.start);else if (qe === "ObjectPattern") for (var ot = 0, zt = Se.properties; ot < zt.length; ot += 1) {
      var cn = zt[ot];
      this.checkPatternExport(X, cn);
    } else if (qe === "ArrayPattern") for (var hr = 0, Tr = Se.elements; hr < Tr.length; hr += 1) {
      var Br = Tr[hr];
      if (Br) this.checkPatternExport(X, Br);
    } else if (qe === "Property") this.checkPatternExport(X, Se.value);else if (qe === "AssignmentPattern") this.checkPatternExport(X, Se.left);else if (qe === "RestElement") this.checkPatternExport(X, Se.argument);
  }, Me.checkVariableExport = function (X, Se) {
    if (!X) return;
    for (var qe = 0, ot = Se; qe < ot.length; qe += 1) {
      var zt = ot[qe];
      this.checkPatternExport(X, zt.id);
    }
  }, Me.shouldParseExportStatement = function () {
    return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
  }, Me.parseExportSpecifier = function (X) {
    var Se = this.startNode();
    return Se.local = this.parseModuleExportName(), Se.exported = this.eatContextual("as") ? this.parseModuleExportName() : Se.local, this.checkExport(X, Se.exported, Se.exported.start), this.finishNode(Se, "ExportSpecifier");
  }, Me.parseExportSpecifiers = function (X) {
    var Se = [],
      qe = !0;
    this.expect(S.braceL);
    while (!this.eat(S.braceR)) {
      if (!qe) {
        if (this.expect(S.comma), this.afterTrailingComma(S.braceR)) break;
      } else qe = !1;
      Se.push(this.parseExportSpecifier(X));
    }
    return Se;
  }, Me.parseImport = function (X) {
    if (this.next(), this.type === S.string) X.specifiers = bt, X.source = this.parseExprAtom();else X.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), X.source = this.type === S.string ? this.parseExprAtom() : this.unexpected();
    if (this.options.ecmaVersion >= 16) X.attributes = this.parseWithClause();
    return this.semicolon(), this.finishNode(X, "ImportDeclaration");
  }, Me.parseImportSpecifier = function () {
    var X = this.startNode();
    if (X.imported = this.parseModuleExportName(), this.eatContextual("as")) X.local = this.parseIdent();else this.checkUnreserved(X.imported), X.local = X.imported;
    return this.checkLValSimple(X.local, He), this.finishNode(X, "ImportSpecifier");
  }, Me.parseImportDefaultSpecifier = function () {
    var X = this.startNode();
    return X.local = this.parseIdent(), this.checkLValSimple(X.local, He), this.finishNode(X, "ImportDefaultSpecifier");
  }, Me.parseImportNamespaceSpecifier = function () {
    var X = this.startNode();
    return this.next(), this.expectContextual("as"), X.local = this.parseIdent(), this.checkLValSimple(X.local, He), this.finishNode(X, "ImportNamespaceSpecifier");
  }, Me.parseImportSpecifiers = function () {
    var X = [],
      Se = !0;
    if (this.type === S.name) {
      if (X.push(this.parseImportDefaultSpecifier()), !this.eat(S.comma)) return X;
    }
    if (this.type === S.star) return X.push(this.parseImportNamespaceSpecifier()), X;
    this.expect(S.braceL);
    while (!this.eat(S.braceR)) {
      if (!Se) {
        if (this.expect(S.comma), this.afterTrailingComma(S.braceR)) break;
      } else Se = !1;
      X.push(this.parseImportSpecifier());
    }
    return X;
  }, Me.parseWithClause = function () {
    var X = [];
    if (!this.eat(S._with)) return X;
    this.expect(S.braceL);
    var Se = {},
      qe = !0;
    while (!this.eat(S.braceR)) {
      if (!qe) {
        if (this.expect(S.comma), this.afterTrailingComma(S.braceR)) break;
      } else qe = !1;
      var ot = this.parseImportAttribute(),
        zt = ot.key.type === "Identifier" ? ot.key.name : ot.key.value;
      if (L(Se, zt)) this.raiseRecoverable(ot.key.start, "Duplicate attribute key '" + zt + "'");
      Se[zt] = !0, X.push(ot);
    }
    return X;
  }, Me.parseImportAttribute = function () {
    var X = this.startNode();
    if (X.key = this.type === S.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(S.colon), this.type !== S.string) this.unexpected();
    return X.value = this.parseExprAtom(), this.finishNode(X, "ImportAttribute");
  }, Me.parseModuleExportName = function () {
    if (this.options.ecmaVersion >= 13 && this.type === S.string) {
      var X = this.parseLiteral(this.value);
      if (q.test(X.value)) this.raise(X.start, "An export name cannot include a lone surrogate.");
      return X;
    }
    return this.parseIdent(!0);
  }, Me.adaptDirectivePrologue = function (X) {
    for (var Se = 0; Se < X.length && this.isDirectiveCandidate(X[Se]); ++Se) X[Se].directive = X[Se].expression.raw.slice(1, -1);
  }, Me.isDirectiveCandidate = function (X) {
    return this.options.ecmaVersion >= 5 && X.type === "ExpressionStatement" && X.expression.type === "Literal" && typeof X.expression.value === "string" && (this.input[X.start] === '"' || this.input[X.start] === "'");
  };
  var st = Ce.prototype;
  st.toAssignable = function (X, Se, qe) {
    if (this.options.ecmaVersion >= 6 && X) switch (X.type) {
      case "Identifier":
        if (this.inAsync && X.name === "await") this.raise(X.start, "Cannot use 'await' as identifier inside an async function");
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        if (X.type = "ObjectPattern", qe) this.checkPatternErrors(qe, !0);
        for (var ot = 0, zt = X.properties; ot < zt.length; ot += 1) {
          var cn = zt[ot];
          if (this.toAssignable(cn, Se), cn.type === "RestElement" && (cn.argument.type === "ArrayPattern" || cn.argument.type === "ObjectPattern")) this.raise(cn.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        if (X.kind !== "init") this.raise(X.key.start, "Object pattern can't contain getter or setter");
        this.toAssignable(X.value, Se);
        break;
      case "ArrayExpression":
        if (X.type = "ArrayPattern", qe) this.checkPatternErrors(qe, !0);
        this.toAssignableList(X.elements, Se);
        break;
      case "SpreadElement":
        if (X.type = "RestElement", this.toAssignable(X.argument, Se), X.argument.type === "AssignmentPattern") this.raise(X.argument.start, "Rest elements cannot have a default value");
        break;
      case "AssignmentExpression":
        if (X.operator !== "=") this.raise(X.left.end, "Only '=' operator can be used for specifying default value.");
        X.type = "AssignmentPattern", delete X.operator, this.toAssignable(X.left, Se);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(X.expression, Se, qe);
        break;
      case "ChainExpression":
        this.raiseRecoverable(X.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!Se) break;
      default:
        this.raise(X.start, "Assigning to rvalue");
    } else if (qe) this.checkPatternErrors(qe, !0);
    return X;
  }, st.toAssignableList = function (X, Se) {
    var qe = X.length;
    for (var ot = 0; ot < qe; ot++) {
      var zt = X[ot];
      if (zt) this.toAssignable(zt, Se);
    }
    if (qe) {
      var cn = X[qe - 1];
      if (this.options.ecmaVersion === 6 && Se && cn && cn.type === "RestElement" && cn.argument.type !== "Identifier") this.unexpected(cn.argument.start);
    }
    return X;
  }, st.parseSpread = function (X) {
    var Se = this.startNode();
    return this.next(), Se.argument = this.parseMaybeAssign(!1, X), this.finishNode(Se, "SpreadElement");
  }, st.parseRestBinding = function () {
    var X = this.startNode();
    if (this.next(), this.options.ecmaVersion === 6 && this.type !== S.name) this.unexpected();
    return X.argument = this.parseBindingAtom(), this.finishNode(X, "RestElement");
  }, st.parseBindingAtom = function () {
    if (this.options.ecmaVersion >= 6) switch (this.type) {
      case S.bracketL:
        var X = this.startNode();
        return this.next(), X.elements = this.parseBindingList(S.bracketR, !0, !0), this.finishNode(X, "ArrayPattern");
      case S.braceL:
        return this.parseObj(!0);
    }
    return this.parseIdent();
  }, st.parseBindingList = function (X, Se, qe, ot) {
    var zt = [],
      cn = !0;
    while (!this.eat(X)) {
      if (cn) cn = !1;else this.expect(S.comma);
      if (Se && this.type === S.comma) zt.push(null);else if (qe && this.afterTrailingComma(X)) break;else if (this.type === S.ellipsis) {
        var hr = this.parseRestBinding();
        if (this.parseBindingListItem(hr), zt.push(hr), this.type === S.comma) this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
        this.expect(X);
        break;
      } else zt.push(this.parseAssignableListItem(ot));
    }
    return zt;
  }, st.parseAssignableListItem = function (X) {
    var Se = this.parseMaybeDefault(this.start, this.startLoc);
    return this.parseBindingListItem(Se), Se;
  }, st.parseBindingListItem = function (X) {
    return X;
  }, st.parseMaybeDefault = function (X, Se, qe) {
    if (qe = qe || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(S.eq)) return qe;
    var ot = this.startNodeAt(X, Se);
    return ot.left = qe, ot.right = this.parseMaybeAssign(), this.finishNode(ot, "AssignmentPattern");
  }, st.checkLValSimple = function (X, Se, qe) {
    if (Se === void 0) Se = ie;
    var ot = Se !== ie;
    switch (X.type) {
      case "Identifier":
        if (this.strict && this.reservedWordsStrictBind.test(X.name)) this.raiseRecoverable(X.start, (ot ? "Binding " : "Assigning to ") + X.name + " in strict mode");
        if (ot) {
          if (Se === He && X.name === "let") this.raiseRecoverable(X.start, "let is disallowed as a lexically bound name");
          if (qe) {
            if (L(qe, X.name)) this.raiseRecoverable(X.start, "Argument name clash");
            qe[X.name] = !0;
          }
          if (Se !== we) this.declareName(X.name, Se, X.start);
        }
        break;
      case "ChainExpression":
        this.raiseRecoverable(X.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (ot) this.raiseRecoverable(X.start, "Binding member expression");
        break;
      case "ParenthesizedExpression":
        if (ot) this.raiseRecoverable(X.start, "Binding parenthesized expression");
        return this.checkLValSimple(X.expression, Se, qe);
      default:
        this.raise(X.start, (ot ? "Binding" : "Assigning to") + " rvalue");
    }
  }, st.checkLValPattern = function (X, Se, qe) {
    if (Se === void 0) Se = ie;
    switch (X.type) {
      case "ObjectPattern":
        for (var ot = 0, zt = X.properties; ot < zt.length; ot += 1) {
          var cn = zt[ot];
          this.checkLValInnerPattern(cn, Se, qe);
        }
        break;
      case "ArrayPattern":
        for (var hr = 0, Tr = X.elements; hr < Tr.length; hr += 1) {
          var Br = Tr[hr];
          if (Br) this.checkLValInnerPattern(Br, Se, qe);
        }
        break;
      default:
        this.checkLValSimple(X, Se, qe);
    }
  }, st.checkLValInnerPattern = function (X, Se, qe) {
    if (Se === void 0) Se = ie;
    switch (X.type) {
      case "Property":
        this.checkLValInnerPattern(X.value, Se, qe);
        break;
      case "AssignmentPattern":
        this.checkLValPattern(X.left, Se, qe);
        break;
      case "RestElement":
        this.checkLValPattern(X.argument, Se, qe);
        break;
      default:
        this.checkLValPattern(X, Se, qe);
    }
  };
  var xt = function (Se, qe, ot, zt, cn) {
      this.token = Se, this.isExpr = !!qe, this.preserveSpace = !!ot, this.override = zt, this.generator = !!cn;
    },
    vt = {
      b_stat: new xt("{", !1),
      b_expr: new xt("{", !0),
      b_tmpl: new xt("${", !1),
      p_stat: new xt("(", !1),
      p_expr: new xt("(", !0),
      q_tmpl: new xt("`", !0, !0, function (X) {
        return X.tryReadTemplateToken();
      }),
      f_stat: new xt("function", !1),
      f_expr: new xt("function", !0),
      f_expr_gen: new xt("function", !0, !1, null, !0),
      f_gen: new xt("function", !1, !1, null, !0)
    },
    jt = Ce.prototype;
  jt.initialContext = function () {
    return [vt.b_stat];
  }, jt.curContext = function () {
    return this.context[this.context.length - 1];
  }, jt.braceIsBlock = function (X) {
    var Se = this.curContext();
    if (Se === vt.f_expr || Se === vt.f_stat) return !0;
    if (X === S.colon && (Se === vt.b_stat || Se === vt.b_expr)) return !Se.isExpr;
    if (X === S._return || X === S.name && this.exprAllowed) return A.test(this.input.slice(this.lastTokEnd, this.start));
    if (X === S._else || X === S.semi || X === S.eof || X === S.parenR || X === S.arrow) return !0;
    if (X === S.braceL) return Se === vt.b_stat;
    if (X === S._var || X === S._const || X === S.name) return !1;
    return !this.exprAllowed;
  }, jt.inGeneratorContext = function () {
    for (var X = this.context.length - 1; X >= 1; X--) {
      var Se = this.context[X];
      if (Se.token === "function") return Se.generator;
    }
    return !1;
  }, jt.updateContext = function (X) {
    var Se,
      qe = this.type;
    if (qe.keyword && X === S.dot) this.exprAllowed = !1;else if (Se = qe.updateContext) Se.call(this, X);else this.exprAllowed = qe.beforeExpr;
  }, jt.overrideContext = function (X) {
    if (this.curContext() !== X) this.context[this.context.length - 1] = X;
  }, S.parenR.updateContext = S.braceR.updateContext = function () {
    if (this.context.length === 1) {
      this.exprAllowed = !0;
      return;
    }
    var X = this.context.pop();
    if (X === vt.b_stat && this.curContext().token === "function") X = this.context.pop();
    this.exprAllowed = !X.isExpr;
  }, S.braceL.updateContext = function (X) {
    this.context.push(this.braceIsBlock(X) ? vt.b_stat : vt.b_expr), this.exprAllowed = !0;
  }, S.dollarBraceL.updateContext = function () {
    this.context.push(vt.b_tmpl), this.exprAllowed = !0;
  }, S.parenL.updateContext = function (X) {
    var Se = X === S._if || X === S._for || X === S._with || X === S._while;
    this.context.push(Se ? vt.p_stat : vt.p_expr), this.exprAllowed = !0;
  }, S.incDec.updateContext = function () {}, S._function.updateContext = S._class.updateContext = function (X) {
    if (X.beforeExpr && X !== S._else && !(X === S.semi && this.curContext() !== vt.p_stat) && !(X === S._return && A.test(this.input.slice(this.lastTokEnd, this.start))) && !((X === S.colon || X === S.braceL) && this.curContext() === vt.b_stat)) this.context.push(vt.f_expr);else this.context.push(vt.f_stat);
    this.exprAllowed = !1;
  }, S.colon.updateContext = function () {
    if (this.curContext().token === "function") this.context.pop();
    this.exprAllowed = !0;
  }, S.backQuote.updateContext = function () {
    if (this.curContext() === vt.q_tmpl) this.context.pop();else this.context.push(vt.q_tmpl);
    this.exprAllowed = !1;
  }, S.star.updateContext = function (X) {
    if (X === S._function) {
      var Se = this.context.length - 1;
      if (this.context[Se] === vt.f_expr) this.context[Se] = vt.f_expr_gen;else this.context[Se] = vt.f_gen;
    }
    this.exprAllowed = !0;
  }, S.name.updateContext = function (X) {
    var Se = !1;
    if (this.options.ecmaVersion >= 6 && X !== S.dot) {
      if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) Se = !0;
    }
    this.exprAllowed = Se;
  };
  var en = Ce.prototype;
  en.checkPropClash = function (X, Se, qe) {
    if (this.options.ecmaVersion >= 9 && X.type === "SpreadElement") return;
    if (this.options.ecmaVersion >= 6 && (X.computed || X.method || X.shorthand)) return;
    var ot = X.key,
      zt;
    switch (ot.type) {
      case "Identifier":
        zt = ot.name;
        break;
      case "Literal":
        zt = String(ot.value);
        break;
      default:
        return;
    }
    var cn = X.kind;
    if (this.options.ecmaVersion >= 6) {
      if (zt === "__proto__" && cn === "init") {
        if (Se.proto) if (qe) {
          if (qe.doubleProto < 0) qe.doubleProto = ot.start;
        } else this.raiseRecoverable(ot.start, "Redefinition of __proto__ property");
        Se.proto = !0;
      }
      return;
    }
    zt = "$" + zt;
    var hr = Se[zt];
    if (hr) {
      var Tr;
      if (cn === "init") Tr = this.strict && hr.init || hr.get || hr.set;else Tr = hr.init || hr[cn];
      if (Tr) this.raiseRecoverable(ot.start, "Redefinition of property");
    } else hr = Se[zt] = {
      init: !1,
      get: !1,
      set: !1
    };
    hr[cn] = !0;
  }, en.parseExpression = function (X, Se) {
    var qe = this.start,
      ot = this.startLoc,
      zt = this.parseMaybeAssign(X, Se);
    if (this.type === S.comma) {
      var cn = this.startNodeAt(qe, ot);
      cn.expressions = [zt];
      while (this.eat(S.comma)) cn.expressions.push(this.parseMaybeAssign(X, Se));
      return this.finishNode(cn, "SequenceExpression");
    }
    return zt;
  }, en.parseMaybeAssign = function (X, Se, qe) {
    if (this.isContextual("yield")) if (this.inGenerator) return this.parseYield(X);else this.exprAllowed = !1;
    var ot = !1,
      zt = -1,
      cn = -1,
      hr = -1;
    if (Se) zt = Se.parenthesizedAssign, cn = Se.trailingComma, hr = Se.doubleProto, Se.parenthesizedAssign = Se.trailingComma = -1;else Se = new Be(), ot = !0;
    var Tr = this.start,
      Br = this.startLoc;
    if (this.type === S.parenL || this.type === S.name) this.potentialArrowAt = this.start, this.potentialArrowInForAwait = X === "await";
    var fi = this.parseMaybeConditional(X, Se);
    if (qe) fi = qe.call(this, fi, Tr, Br);
    if (this.type.isAssign) {
      var oi = this.startNodeAt(Tr, Br);
      if (oi.operator = this.value, this.type === S.eq) fi = this.toAssignable(fi, !1, Se);
      if (!ot) Se.parenthesizedAssign = Se.trailingComma = Se.doubleProto = -1;
      if (Se.shorthandAssign >= fi.start) Se.shorthandAssign = -1;
      if (this.type === S.eq) this.checkLValPattern(fi);else this.checkLValSimple(fi);
      if (oi.left = fi, this.next(), oi.right = this.parseMaybeAssign(X), hr > -1) Se.doubleProto = hr;
      return this.finishNode(oi, "AssignmentExpression");
    } else if (ot) this.checkExpressionErrors(Se, !0);
    if (zt > -1) Se.parenthesizedAssign = zt;
    if (cn > -1) Se.trailingComma = cn;
    return fi;
  }, en.parseMaybeConditional = function (X, Se) {
    var qe = this.start,
      ot = this.startLoc,
      zt = this.parseExprOps(X, Se);
    if (this.checkExpressionErrors(Se)) return zt;
    if (this.eat(S.question)) {
      var cn = this.startNodeAt(qe, ot);
      return cn.test = zt, cn.consequent = this.parseMaybeAssign(), this.expect(S.colon), cn.alternate = this.parseMaybeAssign(X), this.finishNode(cn, "ConditionalExpression");
    }
    return zt;
  }, en.parseExprOps = function (X, Se) {
    var qe = this.start,
      ot = this.startLoc,
      zt = this.parseMaybeUnary(Se, !1, !1, X);
    if (this.checkExpressionErrors(Se)) return zt;
    return zt.start === qe && zt.type === "ArrowFunctionExpression" ? zt : this.parseExprOp(zt, qe, ot, -1, X);
  }, en.parseExprOp = function (X, Se, qe, ot, zt) {
    var cn = this.type.binop;
    if (cn != null && (!zt || this.type !== S._in)) {
      if (cn > ot) {
        var hr = this.type === S.logicalOR || this.type === S.logicalAND,
          Tr = this.type === S.coalesce;
        if (Tr) cn = S.logicalAND.binop;
        var Br = this.value;
        this.next();
        var fi = this.start,
          oi = this.startLoc,
          Pa = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, zt), fi, oi, cn, zt),
          nc = this.buildBinary(Se, qe, X, Pa, Br, hr || Tr);
        if (hr && this.type === S.coalesce || Tr && (this.type === S.logicalOR || this.type === S.logicalAND)) this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
        return this.parseExprOp(nc, Se, qe, ot, zt);
      }
    }
    return X;
  }, en.buildBinary = function (X, Se, qe, ot, zt, cn) {
    if (ot.type === "PrivateIdentifier") this.raise(ot.start, "Private identifier can only be left side of binary expression");
    var hr = this.startNodeAt(X, Se);
    return hr.left = qe, hr.operator = zt, hr.right = ot, this.finishNode(hr, cn ? "LogicalExpression" : "BinaryExpression");
  }, en.parseMaybeUnary = function (X, Se, qe, ot) {
    var zt = this.start,
      cn = this.startLoc,
      hr;
    if (this.isContextual("await") && this.canAwait) hr = this.parseAwait(ot), Se = !0;else if (this.type.prefix) {
      var Tr = this.startNode(),
        Br = this.type === S.incDec;
      if (Tr.operator = this.value, Tr.prefix = !0, this.next(), Tr.argument = this.parseMaybeUnary(null, !0, Br, ot), this.checkExpressionErrors(X, !0), Br) this.checkLValSimple(Tr.argument);else if (this.strict && Tr.operator === "delete" && Dn(Tr.argument)) this.raiseRecoverable(Tr.start, "Deleting local variable in strict mode");else if (Tr.operator === "delete" && nn(Tr.argument)) this.raiseRecoverable(Tr.start, "Private fields can not be deleted");else Se = !0;
      hr = this.finishNode(Tr, Br ? "UpdateExpression" : "UnaryExpression");
    } else if (!Se && this.type === S.privateId) {
      if ((ot || this.privateNameStack.length === 0) && this.options.checkPrivateFields) this.unexpected();
      if (hr = this.parsePrivateIdent(), this.type !== S._in) this.unexpected();
    } else {
      if (hr = this.parseExprSubscripts(X, ot), this.checkExpressionErrors(X)) return hr;
      while (this.type.postfix && !this.canInsertSemicolon()) {
        var fi = this.startNodeAt(zt, cn);
        fi.operator = this.value, fi.prefix = !1, fi.argument = hr, this.checkLValSimple(hr), this.next(), hr = this.finishNode(fi, "UpdateExpression");
      }
    }
    if (!qe && this.eat(S.starstar)) {
      if (Se) this.unexpected(this.lastTokStart);else return this.buildBinary(zt, cn, hr, this.parseMaybeUnary(null, !1, !1, ot), "**", !1);
    } else return hr;
  };
  function Dn(X) {
    return X.type === "Identifier" || X.type === "ParenthesizedExpression" && Dn(X.expression);
  }
  function nn(X) {
    return X.type === "MemberExpression" && X.property.type === "PrivateIdentifier" || X.type === "ChainExpression" && nn(X.expression) || X.type === "ParenthesizedExpression" && nn(X.expression);
  }
  en.parseExprSubscripts = function (X, Se) {
    var qe = this.start,
      ot = this.startLoc,
      zt = this.parseExprAtom(X, Se);
    if (zt.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") return zt;
    var cn = this.parseSubscripts(zt, qe, ot, !1, Se);
    if (X && cn.type === "MemberExpression") {
      if (X.parenthesizedAssign >= cn.start) X.parenthesizedAssign = -1;
      if (X.parenthesizedBind >= cn.start) X.parenthesizedBind = -1;
      if (X.trailingComma >= cn.start) X.trailingComma = -1;
    }
    return cn;
  }, en.parseSubscripts = function (X, Se, qe, ot, zt) {
    var cn = this.options.ecmaVersion >= 8 && X.type === "Identifier" && X.name === "async" && this.lastTokEnd === X.end && !this.canInsertSemicolon() && X.end - X.start === 5 && this.potentialArrowAt === X.start,
      hr = !1;
    while (!0) {
      var Tr = this.parseSubscript(X, Se, qe, ot, cn, hr, zt);
      if (Tr.optional) hr = !0;
      if (Tr === X || Tr.type === "ArrowFunctionExpression") {
        if (hr) {
          var Br = this.startNodeAt(Se, qe);
          Br.expression = Tr, Tr = this.finishNode(Br, "ChainExpression");
        }
        return Tr;
      }
      X = Tr;
    }
  }, en.shouldParseAsyncArrow = function () {
    return !this.canInsertSemicolon() && this.eat(S.arrow);
  }, en.parseSubscriptAsyncArrow = function (X, Se, qe, ot) {
    return this.parseArrowExpression(this.startNodeAt(X, Se), qe, !0, ot);
  }, en.parseSubscript = function (X, Se, qe, ot, zt, cn, hr) {
    var Tr = this.options.ecmaVersion >= 11,
      Br = Tr && this.eat(S.questionDot);
    if (ot && Br) this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
    var fi = this.eat(S.bracketL);
    if (fi || Br && this.type !== S.parenL && this.type !== S.backQuote || this.eat(S.dot)) {
      var oi = this.startNodeAt(Se, qe);
      if (oi.object = X, fi) oi.property = this.parseExpression(), this.expect(S.bracketR);else if (this.type === S.privateId && X.type !== "Super") oi.property = this.parsePrivateIdent();else oi.property = this.parseIdent(this.options.allowReserved !== "never");
      if (oi.computed = !!fi, Tr) oi.optional = Br;
      X = this.finishNode(oi, "MemberExpression");
    } else if (!ot && this.eat(S.parenL)) {
      var Pa = new Be(),
        nc = this.yieldPos,
        Qp = this.awaitPos,
        sd = this.awaitIdentPos;
      this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
      var ca = this.parseExprList(S.parenR, this.options.ecmaVersion >= 8, !1, Pa);
      if (zt && !Br && this.shouldParseAsyncArrow()) {
        if (this.checkPatternErrors(Pa, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0) this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
        return this.yieldPos = nc, this.awaitPos = Qp, this.awaitIdentPos = sd, this.parseSubscriptAsyncArrow(Se, qe, ca, hr);
      }
      this.checkExpressionErrors(Pa, !0), this.yieldPos = nc || this.yieldPos, this.awaitPos = Qp || this.awaitPos, this.awaitIdentPos = sd || this.awaitIdentPos;
      var _p = this.startNodeAt(Se, qe);
      if (_p.callee = X, _p.arguments = ca, Tr) _p.optional = Br;
      X = this.finishNode(_p, "CallExpression");
    } else if (this.type === S.backQuote) {
      if (Br || cn) this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
      var bg = this.startNodeAt(Se, qe);
      bg.tag = X, bg.quasi = this.parseTemplate({
        isTagged: !0
      }), X = this.finishNode(bg, "TaggedTemplateExpression");
    }
    return X;
  }, en.parseExprAtom = function (X, Se, qe) {
    if (this.type === S.slash) this.readRegexp();
    var ot,
      zt = this.potentialArrowAt === this.start;
    switch (this.type) {
      case S._super:
        if (!this.allowSuper) this.raise(this.start, "'super' keyword outside a method");
        if (ot = this.startNode(), this.next(), this.type === S.parenL && !this.allowDirectSuper) this.raise(ot.start, "super() call outside constructor of a subclass");
        if (this.type !== S.dot && this.type !== S.bracketL && this.type !== S.parenL) this.unexpected();
        return this.finishNode(ot, "Super");
      case S._this:
        return ot = this.startNode(), this.next(), this.finishNode(ot, "ThisExpression");
      case S.name:
        var cn = this.start,
          hr = this.startLoc,
          Tr = this.containsEsc,
          Br = this.parseIdent(!1);
        if (this.options.ecmaVersion >= 8 && !Tr && Br.name === "async" && !this.canInsertSemicolon() && this.eat(S._function)) return this.overrideContext(vt.f_expr), this.parseFunction(this.startNodeAt(cn, hr), 0, !1, !0, Se);
        if (zt && !this.canInsertSemicolon()) {
          if (this.eat(S.arrow)) return this.parseArrowExpression(this.startNodeAt(cn, hr), [Br], !1, Se);
          if (this.options.ecmaVersion >= 8 && Br.name === "async" && this.type === S.name && !Tr && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
            if (Br = this.parseIdent(!1), this.canInsertSemicolon() || !this.eat(S.arrow)) this.unexpected();
            return this.parseArrowExpression(this.startNodeAt(cn, hr), [Br], !0, Se);
          }
        }
        return Br;
      case S.regexp:
        var fi = this.value;
        return ot = this.parseLiteral(fi.value), ot.regex = {
          pattern: fi.pattern,
          flags: fi.flags
        }, ot;
      case S.num:
      case S.string:
        return this.parseLiteral(this.value);
      case S._null:
      case S._true:
      case S._false:
        return ot = this.startNode(), ot.value = this.type === S._null ? null : this.type === S._true, ot.raw = this.type.keyword, this.next(), this.finishNode(ot, "Literal");
      case S.parenL:
        var oi = this.start,
          Pa = this.parseParenAndDistinguishExpression(zt, Se);
        if (X) {
          if (X.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(Pa)) X.parenthesizedAssign = oi;
          if (X.parenthesizedBind < 0) X.parenthesizedBind = oi;
        }
        return Pa;
      case S.bracketL:
        return ot = this.startNode(), this.next(), ot.elements = this.parseExprList(S.bracketR, !0, !0, X), this.finishNode(ot, "ArrayExpression");
      case S.braceL:
        return this.overrideContext(vt.b_expr), this.parseObj(!1, X);
      case S._function:
        return ot = this.startNode(), this.next(), this.parseFunction(ot, 0);
      case S._class:
        return this.parseClass(this.startNode(), !1);
      case S._new:
        return this.parseNew();
      case S.backQuote:
        return this.parseTemplate();
      case S._import:
        if (this.options.ecmaVersion >= 11) return this.parseExprImport(qe);else return this.unexpected();
      default:
        return this.parseExprAtomDefault();
    }
  }, en.parseExprAtomDefault = function () {
    this.unexpected();
  }, en.parseExprImport = function (X) {
    var Se = this.startNode();
    if (this.containsEsc) this.raiseRecoverable(this.start, "Escape sequence in keyword import");
    if (this.next(), this.type === S.parenL && !X) return this.parseDynamicImport(Se);else if (this.type === S.dot) {
      var qe = this.startNodeAt(Se.start, Se.loc && Se.loc.start);
      return qe.name = "import", Se.meta = this.finishNode(qe, "Identifier"), this.parseImportMeta(Se);
    } else this.unexpected();
  }, en.parseDynamicImport = function (X) {
    if (this.next(), X.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16) {
      if (!this.eat(S.parenR)) {
        if (this.expect(S.comma), !this.afterTrailingComma(S.parenR)) {
          if (X.options = this.parseMaybeAssign(), !this.eat(S.parenR)) {
            if (this.expect(S.comma), !this.afterTrailingComma(S.parenR)) this.unexpected();
          }
        } else X.options = null;
      } else X.options = null;
    } else if (!this.eat(S.parenR)) {
      var Se = this.start;
      if (this.eat(S.comma) && this.eat(S.parenR)) this.raiseRecoverable(Se, "Trailing comma is not allowed in import()");else this.unexpected(Se);
    }
    return this.finishNode(X, "ImportExpression");
  }, en.parseImportMeta = function (X) {
    this.next();
    var Se = this.containsEsc;
    if (X.property = this.parseIdent(!0), X.property.name !== "meta") this.raiseRecoverable(X.property.start, "The only valid meta property for import is 'import.meta'");
    if (Se) this.raiseRecoverable(X.start, "'import.meta' must not contain escaped characters");
    if (this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere) this.raiseRecoverable(X.start, "Cannot use 'import.meta' outside a module");
    return this.finishNode(X, "MetaProperty");
  }, en.parseLiteral = function (X) {
    var Se = this.startNode();
    if (Se.value = X, Se.raw = this.input.slice(this.start, this.end), Se.raw.charCodeAt(Se.raw.length - 1) === 110) Se.bigint = Se.value != null ? Se.value.toString() : Se.raw.slice(0, -1).replace(/_/g, "");
    return this.next(), this.finishNode(Se, "Literal");
  }, en.parseParenExpression = function () {
    this.expect(S.parenL);
    var X = this.parseExpression();
    return this.expect(S.parenR), X;
  }, en.shouldParseArrow = function (X) {
    return !this.canInsertSemicolon();
  }, en.parseParenAndDistinguishExpression = function (X, Se) {
    var qe = this.start,
      ot = this.startLoc,
      zt,
      cn = this.options.ecmaVersion >= 8;
    if (this.options.ecmaVersion >= 6) {
      this.next();
      var hr = this.start,
        Tr = this.startLoc,
        Br = [],
        fi = !0,
        oi = !1,
        Pa = new Be(),
        nc = this.yieldPos,
        Qp = this.awaitPos,
        sd;
      this.yieldPos = 0, this.awaitPos = 0;
      while (this.type !== S.parenR) if (fi ? fi = !1 : this.expect(S.comma), cn && this.afterTrailingComma(S.parenR, !0)) {
        oi = !0;
        break;
      } else if (this.type === S.ellipsis) {
        if (sd = this.start, Br.push(this.parseParenItem(this.parseRestBinding())), this.type === S.comma) this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
        break;
      } else Br.push(this.parseMaybeAssign(!1, Pa, this.parseParenItem));
      var ca = this.lastTokEnd,
        _p = this.lastTokEndLoc;
      if (this.expect(S.parenR), X && this.shouldParseArrow(Br) && this.eat(S.arrow)) return this.checkPatternErrors(Pa, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = nc, this.awaitPos = Qp, this.parseParenArrowList(qe, ot, Br, Se);
      if (!Br.length || oi) this.unexpected(this.lastTokStart);
      if (sd) this.unexpected(sd);
      if (this.checkExpressionErrors(Pa, !0), this.yieldPos = nc || this.yieldPos, this.awaitPos = Qp || this.awaitPos, Br.length > 1) zt = this.startNodeAt(hr, Tr), zt.expressions = Br, this.finishNodeAt(zt, "SequenceExpression", ca, _p);else zt = Br[0];
    } else zt = this.parseParenExpression();
    if (this.options.preserveParens) {
      var bg = this.startNodeAt(qe, ot);
      return bg.expression = zt, this.finishNode(bg, "ParenthesizedExpression");
    } else return zt;
  }, en.parseParenItem = function (X) {
    return X;
  }, en.parseParenArrowList = function (X, Se, qe, ot) {
    return this.parseArrowExpression(this.startNodeAt(X, Se), qe, !1, ot);
  };
  var Ln = [];
  en.parseNew = function () {
    if (this.containsEsc) this.raiseRecoverable(this.start, "Escape sequence in keyword new");
    var X = this.startNode();
    if (this.next(), this.options.ecmaVersion >= 6 && this.type === S.dot) {
      var Se = this.startNodeAt(X.start, X.loc && X.loc.start);
      Se.name = "new", X.meta = this.finishNode(Se, "Identifier"), this.next();
      var qe = this.containsEsc;
      if (X.property = this.parseIdent(!0), X.property.name !== "target") this.raiseRecoverable(X.property.start, "The only valid meta property for new is 'new.target'");
      if (qe) this.raiseRecoverable(X.start, "'new.target' must not contain escaped characters");
      if (!this.allowNewDotTarget) this.raiseRecoverable(X.start, "'new.target' can only be used in functions and class static block");
      return this.finishNode(X, "MetaProperty");
    }
    var ot = this.start,
      zt = this.startLoc;
    if (X.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), ot, zt, !0, !1), this.eat(S.parenL)) X.arguments = this.parseExprList(S.parenR, this.options.ecmaVersion >= 8, !1);else X.arguments = Ln;
    return this.finishNode(X, "NewExpression");
  }, en.parseTemplateElement = function (X) {
    var Se = X.isTagged,
      qe = this.startNode();
    if (this.type === S.invalidTemplate) {
      if (!Se) this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
      qe.value = {
        raw: this.value.replace(/\r\n?/g, `
`),
        cooked: null
      };
    } else qe.value = {
      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
      cooked: this.value
    };
    return this.next(), qe.tail = this.type === S.backQuote, this.finishNode(qe, "TemplateElement");
  }, en.parseTemplate = function (X) {
    if (X === void 0) X = {};
    var Se = X.isTagged;
    if (Se === void 0) Se = !1;
    var qe = this.startNode();
    this.next(), qe.expressions = [];
    var ot = this.parseTemplateElement({
      isTagged: Se
    });
    qe.quasis = [ot];
    while (!ot.tail) {
      if (this.type === S.eof) this.raise(this.pos, "Unterminated template literal");
      this.expect(S.dollarBraceL), qe.expressions.push(this.parseExpression()), this.expect(S.braceR), qe.quasis.push(ot = this.parseTemplateElement({
        isTagged: Se
      }));
    }
    return this.next(), this.finishNode(qe, "TemplateLiteral");
  }, en.isAsyncProp = function (X) {
    return !X.computed && X.key.type === "Identifier" && X.key.name === "async" && (this.type === S.name || this.type === S.num || this.type === S.string || this.type === S.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === S.star) && !A.test(this.input.slice(this.lastTokEnd, this.start));
  }, en.parseObj = function (X, Se) {
    var qe = this.startNode(),
      ot = !0,
      zt = {};
    qe.properties = [], this.next();
    while (!this.eat(S.braceR)) {
      if (!ot) {
        if (this.expect(S.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(S.braceR)) break;
      } else ot = !1;
      var cn = this.parseProperty(X, Se);
      if (!X) this.checkPropClash(cn, zt, Se);
      qe.properties.push(cn);
    }
    return this.finishNode(qe, X ? "ObjectPattern" : "ObjectExpression");
  }, en.parseProperty = function (X, Se) {
    var qe = this.startNode(),
      ot,
      zt,
      cn,
      hr;
    if (this.options.ecmaVersion >= 9 && this.eat(S.ellipsis)) {
      if (X) {
        if (qe.argument = this.parseIdent(!1), this.type === S.comma) this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
        return this.finishNode(qe, "RestElement");
      }
      if (qe.argument = this.parseMaybeAssign(!1, Se), this.type === S.comma && Se && Se.trailingComma < 0) Se.trailingComma = this.start;
      return this.finishNode(qe, "SpreadElement");
    }
    if (this.options.ecmaVersion >= 6) {
      if (qe.method = !1, qe.shorthand = !1, X || Se) cn = this.start, hr = this.startLoc;
      if (!X) ot = this.eat(S.star);
    }
    var Tr = this.containsEsc;
    if (this.parsePropertyName(qe), !X && !Tr && this.options.ecmaVersion >= 8 && !ot && this.isAsyncProp(qe)) zt = !0, ot = this.options.ecmaVersion >= 9 && this.eat(S.star), this.parsePropertyName(qe);else zt = !1;
    return this.parsePropertyValue(qe, X, ot, zt, cn, hr, Se, Tr), this.finishNode(qe, "Property");
  }, en.parseGetterSetter = function (X) {
    var Se = X.key.name;
    this.parsePropertyName(X), X.value = this.parseMethod(!1), X.kind = Se;
    var qe = X.kind === "get" ? 0 : 1;
    if (X.value.params.length !== qe) {
      var ot = X.value.start;
      if (X.kind === "get") this.raiseRecoverable(ot, "getter should have no params");else this.raiseRecoverable(ot, "setter should have exactly one param");
    } else if (X.kind === "set" && X.value.params[0].type === "RestElement") this.raiseRecoverable(X.value.params[0].start, "Setter cannot use rest params");
  }, en.parsePropertyValue = function (X, Se, qe, ot, zt, cn, hr, Tr) {
    if ((qe || ot) && this.type === S.colon) this.unexpected();
    if (this.eat(S.colon)) X.value = Se ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, hr), X.kind = "init";else if (this.options.ecmaVersion >= 6 && this.type === S.parenL) {
      if (Se) this.unexpected();
      X.method = !0, X.value = this.parseMethod(qe, ot), X.kind = "init";
    } else if (!Se && !Tr && this.options.ecmaVersion >= 5 && !X.computed && X.key.type === "Identifier" && (X.key.name === "get" || X.key.name === "set") && this.type !== S.comma && this.type !== S.braceR && this.type !== S.eq) {
      if (qe || ot) this.unexpected();
      this.parseGetterSetter(X);
    } else if (this.options.ecmaVersion >= 6 && !X.computed && X.key.type === "Identifier") {
      if (qe || ot) this.unexpected();
      if (this.checkUnreserved(X.key), X.key.name === "await" && !this.awaitIdentPos) this.awaitIdentPos = zt;
      if (Se) X.value = this.parseMaybeDefault(zt, cn, this.copyNode(X.key));else if (this.type === S.eq && hr) {
        if (hr.shorthandAssign < 0) hr.shorthandAssign = this.start;
        X.value = this.parseMaybeDefault(zt, cn, this.copyNode(X.key));
      } else X.value = this.copyNode(X.key);
      X.kind = "init", X.shorthand = !0;
    } else this.unexpected();
  }, en.parsePropertyName = function (X) {
    if (this.options.ecmaVersion >= 6) if (this.eat(S.bracketL)) return X.computed = !0, X.key = this.parseMaybeAssign(), this.expect(S.bracketR), X.key;else X.computed = !1;
    return X.key = this.type === S.num || this.type === S.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
  }, en.initFunction = function (X) {
    if (X.id = null, this.options.ecmaVersion >= 6) X.generator = X.expression = !1;
    if (this.options.ecmaVersion >= 8) X.async = !1;
  }, en.parseMethod = function (X, Se, qe) {
    var ot = this.startNode(),
      zt = this.yieldPos,
      cn = this.awaitPos,
      hr = this.awaitIdentPos;
    if (this.initFunction(ot), this.options.ecmaVersion >= 6) ot.generator = X;
    if (this.options.ecmaVersion >= 8) ot.async = !!Se;
    return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(he(Se, ot.generator) | de | (qe ? Ee : 0)), this.expect(S.parenL), ot.params = this.parseBindingList(S.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(ot, !1, !0, !1), this.yieldPos = zt, this.awaitPos = cn, this.awaitIdentPos = hr, this.finishNode(ot, "FunctionExpression");
  }, en.parseArrowExpression = function (X, Se, qe, ot) {
    var zt = this.yieldPos,
      cn = this.awaitPos,
      hr = this.awaitIdentPos;
    if (this.enterScope(he(qe, !1) | ce), this.initFunction(X), this.options.ecmaVersion >= 8) X.async = !!qe;
    return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, X.params = this.toAssignableList(Se, !0), this.parseFunctionBody(X, !0, !1, ot), this.yieldPos = zt, this.awaitPos = cn, this.awaitIdentPos = hr, this.finishNode(X, "ArrowFunctionExpression");
  }, en.parseFunctionBody = function (X, Se, qe, ot) {
    var zt = Se && this.type !== S.braceL,
      cn = this.strict,
      hr = !1;
    if (zt) X.body = this.parseMaybeAssign(ot), X.expression = !0, this.checkParams(X, !1);else {
      var Tr = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(X.params);
      if (!cn || Tr) {
        if (hr = this.strictDirective(this.end), hr && Tr) this.raiseRecoverable(X.start, "Illegal 'use strict' directive in function with non-simple parameter list");
      }
      var Br = this.labels;
      if (this.labels = [], hr) this.strict = !0;
      if (this.checkParams(X, !cn && !hr && !Se && !qe && this.isSimpleParamList(X.params)), this.strict && X.id) this.checkLValSimple(X.id, we);
      X.body = this.parseBlock(!1, void 0, hr && !cn), X.expression = !1, this.adaptDirectivePrologue(X.body.body), this.labels = Br;
    }
    this.exitScope();
  }, en.isSimpleParamList = function (X) {
    for (var Se = 0, qe = X; Se < qe.length; Se += 1) {
      var ot = qe[Se];
      if (ot.type !== "Identifier") return !1;
    }
    return !0;
  }, en.checkParams = function (X, Se) {
    var qe = Object.create(null);
    for (var ot = 0, zt = X.params; ot < zt.length; ot += 1) {
      var cn = zt[ot];
      this.checkLValInnerPattern(cn, le, Se ? null : qe);
    }
  }, en.parseExprList = function (X, Se, qe, ot) {
    var zt = [],
      cn = !0;
    while (!this.eat(X)) {
      if (!cn) {
        if (this.expect(S.comma), Se && this.afterTrailingComma(X)) break;
      } else cn = !1;
      var hr = void 0;
      if (qe && this.type === S.comma) hr = null;else if (this.type === S.ellipsis) {
        if (hr = this.parseSpread(ot), ot && this.type === S.comma && ot.trailingComma < 0) ot.trailingComma = this.start;
      } else hr = this.parseMaybeAssign(!1, ot);
      zt.push(hr);
    }
    return zt;
  }, en.checkUnreserved = function (X) {
    var {
      start: Se,
      end: qe,
      name: ot
    } = X;
    if (this.inGenerator && ot === "yield") this.raiseRecoverable(Se, "Cannot use 'yield' as identifier inside a generator");
    if (this.inAsync && ot === "await") this.raiseRecoverable(Se, "Cannot use 'await' as identifier inside an async function");
    if (!(this.currentThisScope().flags & ge) && ot === "arguments") this.raiseRecoverable(Se, "Cannot use 'arguments' in class field initializer");
    if (this.inClassStaticBlock && (ot === "arguments" || ot === "await")) this.raise(Se, "Cannot use " + ot + " in class static initialization block");
    if (this.keywords.test(ot)) this.raise(Se, "Unexpected keyword '" + ot + "'");
    if (this.options.ecmaVersion < 6 && this.input.slice(Se, qe).indexOf("\\") !== -1) return;
    var zt = this.strict ? this.reservedWordsStrict : this.reservedWords;
    if (zt.test(ot)) {
      if (!this.inAsync && ot === "await") this.raiseRecoverable(Se, "Cannot use keyword 'await' outside an async function");
      this.raiseRecoverable(Se, "The keyword '" + ot + "' is reserved");
    }
  }, en.parseIdent = function (X) {
    var Se = this.parseIdentNode();
    if (this.next(!!X), this.finishNode(Se, "Identifier"), !X) {
      if (this.checkUnreserved(Se), Se.name === "await" && !this.awaitIdentPos) this.awaitIdentPos = Se.start;
    }
    return Se;
  }, en.parseIdentNode = function () {
    var X = this.startNode();
    if (this.type === S.name) X.name = this.value;else if (this.type.keyword) {
      if (X.name = this.type.keyword, (X.name === "class" || X.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) this.context.pop();
      this.type = S.name;
    } else this.unexpected();
    return X;
  }, en.parsePrivateIdent = function () {
    var X = this.startNode();
    if (this.type === S.privateId) X.name = this.value;else this.unexpected();
    if (this.next(), this.finishNode(X, "PrivateIdentifier"), this.options.checkPrivateFields) if (this.privateNameStack.length === 0) this.raise(X.start, "Private field '#" + X.name + "' must be declared in an enclosing class");else this.privateNameStack[this.privateNameStack.length - 1].used.push(X);
    return X;
  }, en.parseYield = function (X) {
    if (!this.yieldPos) this.yieldPos = this.start;
    var Se = this.startNode();
    if (this.next(), this.type === S.semi || this.canInsertSemicolon() || this.type !== S.star && !this.type.startsExpr) Se.delegate = !1, Se.argument = null;else Se.delegate = this.eat(S.star), Se.argument = this.parseMaybeAssign(X);
    return this.finishNode(Se, "YieldExpression");
  }, en.parseAwait = function (X) {
    if (!this.awaitPos) this.awaitPos = this.start;
    var Se = this.startNode();
    return this.next(), Se.argument = this.parseMaybeUnary(null, !0, !1, X), this.finishNode(Se, "AwaitExpression");
  };
  var Hn = Ce.prototype;
  Hn.raise = function (X, Se) {
    var qe = Y(this.input, X);
    if (Se += " (" + qe.line + ":" + qe.column + ")", this.sourceFile) Se += " in " + this.sourceFile;
    var ot = SyntaxError(Se);
    throw ot.pos = X, ot.loc = qe, ot.raisedAt = this.pos, ot;
  }, Hn.raiseRecoverable = Hn.raise, Hn.curPosition = function () {
    if (this.options.locations) return new W(this.curLine, this.pos - this.lineStart);
  };
  var kr = Ce.prototype,
    Mr = function (Se) {
      this.flags = Se, this.var = [], this.lexical = [], this.functions = [];
    };
  kr.enterScope = function (X) {
    this.scopeStack.push(new Mr(X));
  }, kr.exitScope = function () {
    this.scopeStack.pop();
  }, kr.treatFunctionsAsVarInScope = function (X) {
    return X.flags & oe || !this.inModule && X.flags & ne;
  }, kr.declareName = function (X, Se, qe) {
    var ot = !1;
    if (Se === He) {
      var zt = this.currentScope();
      if (ot = zt.lexical.indexOf(X) > -1 || zt.functions.indexOf(X) > -1 || zt.var.indexOf(X) > -1, zt.lexical.push(X), this.inModule && zt.flags & ne) delete this.undefinedExports[X];
    } else if (Se === ue) {
      var cn = this.currentScope();
      cn.lexical.push(X);
    } else if (Se === ye) {
      var hr = this.currentScope();
      if (this.treatFunctionsAsVar) ot = hr.lexical.indexOf(X) > -1;else ot = hr.lexical.indexOf(X) > -1 || hr.var.indexOf(X) > -1;
      hr.functions.push(X);
    } else for (var Tr = this.scopeStack.length - 1; Tr >= 0; --Tr) {
      var Br = this.scopeStack[Tr];
      if (Br.lexical.indexOf(X) > -1 && !(Br.flags & ae && Br.lexical[0] === X) || !this.treatFunctionsAsVarInScope(Br) && Br.functions.indexOf(X) > -1) {
        ot = !0;
        break;
      }
      if (Br.var.push(X), this.inModule && Br.flags & ne) delete this.undefinedExports[X];
      if (Br.flags & ge) break;
    }
    if (ot) this.raiseRecoverable(qe, "Identifier '" + X + "' has already been declared");
  }, kr.checkLocalExport = function (X) {
    if (this.scopeStack[0].lexical.indexOf(X.name) === -1 && this.scopeStack[0].var.indexOf(X.name) === -1) this.undefinedExports[X.name] = X;
  }, kr.currentScope = function () {
    return this.scopeStack[this.scopeStack.length - 1];
  }, kr.currentVarScope = function () {
    for (var X = this.scopeStack.length - 1;; X--) {
      var Se = this.scopeStack[X];
      if (Se.flags & (ge | pe | me)) return Se;
    }
  }, kr.currentThisScope = function () {
    for (var X = this.scopeStack.length - 1;; X--) {
      var Se = this.scopeStack[X];
      if (Se.flags & (ge | pe | me) && !(Se.flags & ce)) return Se;
    }
  };
  var fe = function (Se, qe, ot) {
      if (this.type = "", this.start = qe, this.end = 0, Se.options.locations) this.loc = new V(Se, ot);
      if (Se.options.directSourceFile) this.sourceFile = Se.options.directSourceFile;
      if (Se.options.ranges) this.range = [qe, 0];
    },
    Te = Ce.prototype;
  Te.startNode = function () {
    return new fe(this, this.start, this.startLoc);
  }, Te.startNodeAt = function (X, Se) {
    return new fe(this, X, Se);
  };
  function Re(X, Se, qe, ot) {
    if (X.type = Se, X.end = qe, this.options.locations) X.loc.end = ot;
    if (this.options.ranges) X.range[1] = qe;
    return X;
  }
  Te.finishNode = function (X, Se) {
    return Re.call(this, X, Se, this.lastTokEnd, this.lastTokEndLoc);
  }, Te.finishNodeAt = function (X, Se, qe, ot) {
    return Re.call(this, X, Se, qe, ot);
  }, Te.copyNode = function (X) {
    var Se = new fe(this, X.start, this.startLoc);
    for (var qe in X) Se[qe] = X[qe];
    return Se;
  };
  var Ne = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz",
    it = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
    Tt = it + " Extended_Pictographic",
    un = Tt,
    ze = un + " EBase EComp EMod EPres ExtPict",
    Mt = ze,
    Qt = Mt,
    Er = {
      9: it,
      10: Tt,
      11: un,
      12: ze,
      13: Mt,
      14: Qt
    },
    pt = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji",
    ln = {
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: pt
    },
    pn = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
    ir = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
    Rr = ir + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
    _o = Rr + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
    Xo = _o + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi",
    Pn = Xo + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith",
    lr = Pn + " " + Ne,
    eo = {
      9: ir,
      10: Rr,
      11: _o,
      12: Xo,
      13: Pn,
      14: lr
    },
    Kn = {};
  function Nt(X) {
    var Se = Kn[X] = {
      binary: B(Er[X] + " " + pn),
      binaryOfStrings: B(ln[X]),
      nonBinary: {
        General_Category: B(pn),
        Script: B(eo[X])
      }
    };
    Se.nonBinary.Script_Extensions = Se.nonBinary.Script, Se.nonBinary.gc = Se.nonBinary.General_Category, Se.nonBinary.sc = Se.nonBinary.Script, Se.nonBinary.scx = Se.nonBinary.Script_Extensions;
  }
  for (var Ut = 0, Fn = [9, 10, 11, 12, 13, 14]; Ut < Fn.length; Ut += 1) {
    var xi = Fn[Ut];
    Nt(xi);
  }
  var jn = Ce.prototype,
    So = function (Se, qe) {
      this.parent = Se, this.base = qe || this;
    };
  So.prototype.separatedFrom = function (Se) {
    for (var qe = this; qe; qe = qe.parent) for (var ot = Se; ot; ot = ot.parent) if (qe.base === ot.base && qe !== ot) return !0;
    return !1;
  }, So.prototype.sibling = function () {
    return new So(this.parent, this.base);
  };
  var Mo = function (Se) {
    this.parser = Se, this.validFlags = "gim" + (Se.options.ecmaVersion >= 6 ? "uy" : "") + (Se.options.ecmaVersion >= 9 ? "s" : "") + (Se.options.ecmaVersion >= 13 ? "d" : "") + (Se.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = Kn[Se.options.ecmaVersion >= 14 ? 14 : Se.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = Object.create(null), this.backReferenceNames = [], this.branchID = null;
  };
  Mo.prototype.reset = function (Se, qe, ot) {
    var zt = ot.indexOf("v") !== -1,
      cn = ot.indexOf("u") !== -1;
    if (this.start = Se | 0, this.source = qe + "", this.flags = ot, zt && this.parser.options.ecmaVersion >= 15) this.switchU = !0, this.switchV = !0, this.switchN = !0;else this.switchU = cn && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = cn && this.parser.options.ecmaVersion >= 9;
  }, Mo.prototype.raise = function (Se) {
    this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + Se);
  }, Mo.prototype.at = function (Se, qe) {
    if (qe === void 0) qe = !1;
    var ot = this.source,
      zt = ot.length;
    if (Se >= zt) return -1;
    var cn = ot.charCodeAt(Se);
    if (!(qe || this.switchU) || cn <= 55295 || cn >= 57344 || Se + 1 >= zt) return cn;
    var hr = ot.charCodeAt(Se + 1);
    return hr >= 56320 && hr <= 57343 ? (cn << 10) + hr - 56613888 : cn;
  }, Mo.prototype.nextIndex = function (Se, qe) {
    if (qe === void 0) qe = !1;
    var ot = this.source,
      zt = ot.length;
    if (Se >= zt) return zt;
    var cn = ot.charCodeAt(Se),
      hr;
    if (!(qe || this.switchU) || cn <= 55295 || cn >= 57344 || Se + 1 >= zt || (hr = ot.charCodeAt(Se + 1)) < 56320 || hr > 57343) return Se + 1;
    return Se + 2;
  }, Mo.prototype.current = function (Se) {
    if (Se === void 0) Se = !1;
    return this.at(this.pos, Se);
  }, Mo.prototype.lookahead = function (Se) {
    if (Se === void 0) Se = !1;
    return this.at(this.nextIndex(this.pos, Se), Se);
  }, Mo.prototype.advance = function (Se) {
    if (Se === void 0) Se = !1;
    this.pos = this.nextIndex(this.pos, Se);
  }, Mo.prototype.eat = function (Se, qe) {
    if (qe === void 0) qe = !1;
    if (this.current(qe) === Se) return this.advance(qe), !0;
    return !1;
  }, Mo.prototype.eatChars = function (Se, qe) {
    if (qe === void 0) qe = !1;
    var ot = this.pos;
    for (var zt = 0, cn = Se; zt < cn.length; zt += 1) {
      var hr = cn[zt],
        Tr = this.at(ot, qe);
      if (Tr === -1 || Tr !== hr) return !1;
      ot = this.nextIndex(ot, qe);
    }
    return this.pos = ot, !0;
  }, jn.validateRegExpFlags = function (X) {
    var {
        validFlags: Se,
        flags: qe
      } = X,
      ot = !1,
      zt = !1;
    for (var cn = 0; cn < qe.length; cn++) {
      var hr = qe.charAt(cn);
      if (Se.indexOf(hr) === -1) this.raise(X.start, "Invalid regular expression flag");
      if (qe.indexOf(hr, cn + 1) > -1) this.raise(X.start, "Duplicate regular expression flag");
      if (hr === "u") ot = !0;
      if (hr === "v") zt = !0;
    }
    if (this.options.ecmaVersion >= 15 && ot && zt) this.raise(X.start, "Invalid regular expression flag");
  };
  function rs(X) {
    for (var Se in X) return !0;
    return !1;
  }
  jn.validateRegExpPattern = function (X) {
    if (this.regexp_pattern(X), !X.switchN && this.options.ecmaVersion >= 9 && rs(X.groupNames)) X.switchN = !0, this.regexp_pattern(X);
  }, jn.regexp_pattern = function (X) {
    if (X.pos = 0, X.lastIntValue = 0, X.lastStringValue = "", X.lastAssertionIsQuantifiable = !1, X.numCapturingParens = 0, X.maxBackReference = 0, X.groupNames = Object.create(null), X.backReferenceNames.length = 0, X.branchID = null, this.regexp_disjunction(X), X.pos !== X.source.length) {
      if (X.eat(41)) X.raise("Unmatched ')'");
      if (X.eat(93) || X.eat(125)) X.raise("Lone quantifier brackets");
    }
    if (X.maxBackReference > X.numCapturingParens) X.raise("Invalid escape");
    for (var Se = 0, qe = X.backReferenceNames; Se < qe.length; Se += 1) {
      var ot = qe[Se];
      if (!X.groupNames[ot]) X.raise("Invalid named capture referenced");
    }
  }, jn.regexp_disjunction = function (X) {
    var Se = this.options.ecmaVersion >= 16;
    if (Se) X.branchID = new So(X.branchID, null);
    this.regexp_alternative(X);
    while (X.eat(124)) {
      if (Se) X.branchID = X.branchID.sibling();
      this.regexp_alternative(X);
    }
    if (Se) X.branchID = X.branchID.parent;
    if (this.regexp_eatQuantifier(X, !0)) X.raise("Nothing to repeat");
    if (X.eat(123)) X.raise("Lone quantifier brackets");
  }, jn.regexp_alternative = function (X) {
    while (X.pos < X.source.length && this.regexp_eatTerm(X));
  }, jn.regexp_eatTerm = function (X) {
    if (this.regexp_eatAssertion(X)) {
      if (X.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(X)) {
        if (X.switchU) X.raise("Invalid quantifier");
      }
      return !0;
    }
    if (X.switchU ? this.regexp_eatAtom(X) : this.regexp_eatExtendedAtom(X)) return this.regexp_eatQuantifier(X), !0;
    return !1;
  }, jn.regexp_eatAssertion = function (X) {
    var Se = X.pos;
    if (X.lastAssertionIsQuantifiable = !1, X.eat(94) || X.eat(36)) return !0;
    if (X.eat(92)) {
      if (X.eat(66) || X.eat(98)) return !0;
      X.pos = Se;
    }
    if (X.eat(40) && X.eat(63)) {
      var qe = !1;
      if (this.options.ecmaVersion >= 9) qe = X.eat(60);
      if (X.eat(61) || X.eat(33)) {
        if (this.regexp_disjunction(X), !X.eat(41)) X.raise("Unterminated group");
        return X.lastAssertionIsQuantifiable = !qe, !0;
      }
    }
    return X.pos = Se, !1;
  }, jn.regexp_eatQuantifier = function (X, Se) {
    if (Se === void 0) Se = !1;
    if (this.regexp_eatQuantifierPrefix(X, Se)) return X.eat(63), !0;
    return !1;
  }, jn.regexp_eatQuantifierPrefix = function (X, Se) {
    return X.eat(42) || X.eat(43) || X.eat(63) || this.regexp_eatBracedQuantifier(X, Se);
  }, jn.regexp_eatBracedQuantifier = function (X, Se) {
    var qe = X.pos;
    if (X.eat(123)) {
      var ot = 0,
        zt = -1;
      if (this.regexp_eatDecimalDigits(X)) {
        if (ot = X.lastIntValue, X.eat(44) && this.regexp_eatDecimalDigits(X)) zt = X.lastIntValue;
        if (X.eat(125)) {
          if (zt !== -1 && zt < ot && !Se) X.raise("numbers out of order in {} quantifier");
          return !0;
        }
      }
      if (X.switchU && !Se) X.raise("Incomplete quantifier");
      X.pos = qe;
    }
    return !1;
  }, jn.regexp_eatAtom = function (X) {
    return this.regexp_eatPatternCharacters(X) || X.eat(46) || this.regexp_eatReverseSolidusAtomEscape(X) || this.regexp_eatCharacterClass(X) || this.regexp_eatUncapturingGroup(X) || this.regexp_eatCapturingGroup(X);
  }, jn.regexp_eatReverseSolidusAtomEscape = function (X) {
    var Se = X.pos;
    if (X.eat(92)) {
      if (this.regexp_eatAtomEscape(X)) return !0;
      X.pos = Se;
    }
    return !1;
  }, jn.regexp_eatUncapturingGroup = function (X) {
    var Se = X.pos;
    if (X.eat(40)) {
      if (X.eat(63)) {
        if (this.options.ecmaVersion >= 16) {
          var qe = this.regexp_eatModifiers(X),
            ot = X.eat(45);
          if (qe || ot) {
            for (var zt = 0; zt < qe.length; zt++) {
              var cn = qe.charAt(zt);
              if (qe.indexOf(cn, zt + 1) > -1) X.raise("Duplicate regular expression modifiers");
            }
            if (ot) {
              var hr = this.regexp_eatModifiers(X);
              if (!qe && !hr && X.current() === 58) X.raise("Invalid regular expression modifiers");
              for (var Tr = 0; Tr < hr.length; Tr++) {
                var Br = hr.charAt(Tr);
                if (hr.indexOf(Br, Tr + 1) > -1 || qe.indexOf(Br) > -1) X.raise("Duplicate regular expression modifiers");
              }
            }
          }
        }
        if (X.eat(58)) {
          if (this.regexp_disjunction(X), X.eat(41)) return !0;
          X.raise("Unterminated group");
        }
      }
      X.pos = Se;
    }
    return !1;
  }, jn.regexp_eatCapturingGroup = function (X) {
    if (X.eat(40)) {
      if (this.options.ecmaVersion >= 9) this.regexp_groupSpecifier(X);else if (X.current() === 63) X.raise("Invalid group");
      if (this.regexp_disjunction(X), X.eat(41)) return X.numCapturingParens += 1, !0;
      X.raise("Unterminated group");
    }
    return !1;
  }, jn.regexp_eatModifiers = function (X) {
    var Se = "",
      qe = 0;
    while ((qe = X.current()) !== -1 && js(qe)) Se += $(qe), X.advance();
    return Se;
  };
  function js(X) {
    return X === 105 || X === 109 || X === 115;
  }
  jn.regexp_eatExtendedAtom = function (X) {
    return X.eat(46) || this.regexp_eatReverseSolidusAtomEscape(X) || this.regexp_eatCharacterClass(X) || this.regexp_eatUncapturingGroup(X) || this.regexp_eatCapturingGroup(X) || this.regexp_eatInvalidBracedQuantifier(X) || this.regexp_eatExtendedPatternCharacter(X);
  }, jn.regexp_eatInvalidBracedQuantifier = function (X) {
    if (this.regexp_eatBracedQuantifier(X, !0)) X.raise("Nothing to repeat");
    return !1;
  }, jn.regexp_eatSyntaxCharacter = function (X) {
    var Se = X.current();
    if (Gn(Se)) return X.lastIntValue = Se, X.advance(), !0;
    return !1;
  };
  function Gn(X) {
    return X === 36 || X >= 40 && X <= 43 || X === 46 || X === 63 || X >= 91 && X <= 94 || X >= 123 && X <= 125;
  }
  jn.regexp_eatPatternCharacters = function (X) {
    var Se = X.pos,
      qe = 0;
    while ((qe = X.current()) !== -1 && !Gn(qe)) X.advance();
    return X.pos !== Se;
  }, jn.regexp_eatExtendedPatternCharacter = function (X) {
    var Se = X.current();
    if (Se !== -1 && Se !== 36 && !(Se >= 40 && Se <= 43) && Se !== 46 && Se !== 63 && Se !== 91 && Se !== 94 && Se !== 124) return X.advance(), !0;
    return !1;
  }, jn.regexp_groupSpecifier = function (X) {
    if (X.eat(63)) {
      if (!this.regexp_eatGroupName(X)) X.raise("Invalid group");
      var Se = this.options.ecmaVersion >= 16,
        qe = X.groupNames[X.lastStringValue];
      if (qe) if (Se) for (var ot = 0, zt = qe; ot < zt.length; ot += 1) {
        var cn = zt[ot];
        if (!cn.separatedFrom(X.branchID)) X.raise("Duplicate capture group name");
      } else X.raise("Duplicate capture group name");
      if (Se) (qe || (X.groupNames[X.lastStringValue] = [])).push(X.branchID);else X.groupNames[X.lastStringValue] = !0;
    }
  }, jn.regexp_eatGroupName = function (X) {
    if (X.lastStringValue = "", X.eat(60)) {
      if (this.regexp_eatRegExpIdentifierName(X) && X.eat(62)) return !0;
      X.raise("Invalid capture group name");
    }
    return !1;
  }, jn.regexp_eatRegExpIdentifierName = function (X) {
    if (X.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(X)) {
      X.lastStringValue += $(X.lastIntValue);
      while (this.regexp_eatRegExpIdentifierPart(X)) X.lastStringValue += $(X.lastIntValue);
      return !0;
    }
    return !1;
  }, jn.regexp_eatRegExpIdentifierStart = function (X) {
    var Se = X.pos,
      qe = this.options.ecmaVersion >= 11,
      ot = X.current(qe);
    if (X.advance(qe), ot === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(X, qe)) ot = X.lastIntValue;
    if (cr(ot)) return X.lastIntValue = ot, !0;
    return X.pos = Se, !1;
  };
  function cr(X) {
    return p(X, !0) || X === 36 || X === 95;
  }
  jn.regexp_eatRegExpIdentifierPart = function (X) {
    var Se = X.pos,
      qe = this.options.ecmaVersion >= 11,
      ot = X.current(qe);
    if (X.advance(qe), ot === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(X, qe)) ot = X.lastIntValue;
    if (Lt(ot)) return X.lastIntValue = ot, !0;
    return X.pos = Se, !1;
  };
  function Lt(X) {
    return f(X, !0) || X === 36 || X === 95 || X === 8204 || X === 8205;
  }
  jn.regexp_eatAtomEscape = function (X) {
    if (this.regexp_eatBackReference(X) || this.regexp_eatCharacterClassEscape(X) || this.regexp_eatCharacterEscape(X) || X.switchN && this.regexp_eatKGroupName(X)) return !0;
    if (X.switchU) {
      if (X.current() === 99) X.raise("Invalid unicode escape");
      X.raise("Invalid escape");
    }
    return !1;
  }, jn.regexp_eatBackReference = function (X) {
    var Se = X.pos;
    if (this.regexp_eatDecimalEscape(X)) {
      var qe = X.lastIntValue;
      if (X.switchU) {
        if (qe > X.maxBackReference) X.maxBackReference = qe;
        return !0;
      }
      if (qe <= X.numCapturingParens) return !0;
      X.pos = Se;
    }
    return !1;
  }, jn.regexp_eatKGroupName = function (X) {
    if (X.eat(107)) {
      if (this.regexp_eatGroupName(X)) return X.backReferenceNames.push(X.lastStringValue), !0;
      X.raise("Invalid named reference");
    }
    return !1;
  }, jn.regexp_eatCharacterEscape = function (X) {
    return this.regexp_eatControlEscape(X) || this.regexp_eatCControlLetter(X) || this.regexp_eatZero(X) || this.regexp_eatHexEscapeSequence(X) || this.regexp_eatRegExpUnicodeEscapeSequence(X, !1) || !X.switchU && this.regexp_eatLegacyOctalEscapeSequence(X) || this.regexp_eatIdentityEscape(X);
  }, jn.regexp_eatCControlLetter = function (X) {
    var Se = X.pos;
    if (X.eat(99)) {
      if (this.regexp_eatControlLetter(X)) return !0;
      X.pos = Se;
    }
    return !1;
  }, jn.regexp_eatZero = function (X) {
    if (X.current() === 48 && !nr(X.lookahead())) return X.lastIntValue = 0, X.advance(), !0;
    return !1;
  }, jn.regexp_eatControlEscape = function (X) {
    var Se = X.current();
    if (Se === 116) return X.lastIntValue = 9, X.advance(), !0;
    if (Se === 110) return X.lastIntValue = 10, X.advance(), !0;
    if (Se === 118) return X.lastIntValue = 11, X.advance(), !0;
    if (Se === 102) return X.lastIntValue = 12, X.advance(), !0;
    if (Se === 114) return X.lastIntValue = 13, X.advance(), !0;
    return !1;
  }, jn.regexp_eatControlLetter = function (X) {
    var Se = X.current();
    if (En(Se)) return X.lastIntValue = Se % 32, X.advance(), !0;
    return !1;
  };
  function En(X) {
    return X >= 65 && X <= 90 || X >= 97 && X <= 122;
  }
  jn.regexp_eatRegExpUnicodeEscapeSequence = function (X, Se) {
    if (Se === void 0) Se = !1;
    var qe = X.pos,
      ot = Se || X.switchU;
    if (X.eat(117)) {
      if (this.regexp_eatFixedHexDigits(X, 4)) {
        var zt = X.lastIntValue;
        if (ot && zt >= 55296 && zt <= 56319) {
          var cn = X.pos;
          if (X.eat(92) && X.eat(117) && this.regexp_eatFixedHexDigits(X, 4)) {
            var hr = X.lastIntValue;
            if (hr >= 56320 && hr <= 57343) return X.lastIntValue = (zt - 55296) * 1024 + (hr - 56320) + 65536, !0;
          }
          X.pos = cn, X.lastIntValue = zt;
        }
        return !0;
      }
      if (ot && X.eat(123) && this.regexp_eatHexDigits(X) && X.eat(125) && Sn(X.lastIntValue)) return !0;
      if (ot) X.raise("Invalid unicode escape");
      X.pos = qe;
    }
    return !1;
  };
  function Sn(X) {
    return X >= 0 && X <= 1114111;
  }
  jn.regexp_eatIdentityEscape = function (X) {
    if (X.switchU) {
      if (this.regexp_eatSyntaxCharacter(X)) return !0;
      if (X.eat(47)) return X.lastIntValue = 47, !0;
      return !1;
    }
    var Se = X.current();
    if (Se !== 99 && (!X.switchN || Se !== 107)) return X.lastIntValue = Se, X.advance(), !0;
    return !1;
  }, jn.regexp_eatDecimalEscape = function (X) {
    X.lastIntValue = 0;
    var Se = X.current();
    if (Se >= 49 && Se <= 57) {
      do X.lastIntValue = 10 * X.lastIntValue + (Se - 48), X.advance(); while ((Se = X.current()) >= 48 && Se <= 57);
      return !0;
    }
    return !1;
  };
  var Jn = 0,
    Qn = 1,
    gr = 2;
  jn.regexp_eatCharacterClassEscape = function (X) {
    var Se = X.current();
    if (fo(Se)) return X.lastIntValue = -1, X.advance(), Qn;
    var qe = !1;
    if (X.switchU && this.options.ecmaVersion >= 9 && ((qe = Se === 80) || Se === 112)) {
      X.lastIntValue = -1, X.advance();
      var ot;
      if (X.eat(123) && (ot = this.regexp_eatUnicodePropertyValueExpression(X)) && X.eat(125)) {
        if (qe && ot === gr) X.raise("Invalid property name");
        return ot;
      }
      X.raise("Invalid property name");
    }
    return Jn;
  };
  function fo(X) {
    return X === 100 || X === 68 || X === 115 || X === 83 || X === 119 || X === 87;
  }
  jn.regexp_eatUnicodePropertyValueExpression = function (X) {
    var Se = X.pos;
    if (this.regexp_eatUnicodePropertyName(X) && X.eat(61)) {
      var qe = X.lastStringValue;
      if (this.regexp_eatUnicodePropertyValue(X)) {
        var ot = X.lastStringValue;
        return this.regexp_validateUnicodePropertyNameAndValue(X, qe, ot), Qn;
      }
    }
    if (X.pos = Se, this.regexp_eatLoneUnicodePropertyNameOrValue(X)) {
      var zt = X.lastStringValue;
      return this.regexp_validateUnicodePropertyNameOrValue(X, zt);
    }
    return Jn;
  }, jn.regexp_validateUnicodePropertyNameAndValue = function (X, Se, qe) {
    if (!L(X.unicodeProperties.nonBinary, Se)) X.raise("Invalid property name");
    if (!X.unicodeProperties.nonBinary[Se].test(qe)) X.raise("Invalid property value");
  }, jn.regexp_validateUnicodePropertyNameOrValue = function (X, Se) {
    if (X.unicodeProperties.binary.test(Se)) return Qn;
    if (X.switchV && X.unicodeProperties.binaryOfStrings.test(Se)) return gr;
    X.raise("Invalid property name");
  }, jn.regexp_eatUnicodePropertyName = function (X) {
    var Se = 0;
    X.lastStringValue = "";
    while (cs(Se = X.current())) X.lastStringValue += $(Se), X.advance();
    return X.lastStringValue !== "";
  };
  function cs(X) {
    return En(X) || X === 95;
  }
  jn.regexp_eatUnicodePropertyValue = function (X) {
    var Se = 0;
    X.lastStringValue = "";
    while (Gs(Se = X.current())) X.lastStringValue += $(Se), X.advance();
    return X.lastStringValue !== "";
  };
  function Gs(X) {
    return cs(X) || nr(X);
  }
  jn.regexp_eatLoneUnicodePropertyNameOrValue = function (X) {
    return this.regexp_eatUnicodePropertyValue(X);
  }, jn.regexp_eatCharacterClass = function (X) {
    if (X.eat(91)) {
      var Se = X.eat(94),
        qe = this.regexp_classContents(X);
      if (!X.eat(93)) X.raise("Unterminated character class");
      if (Se && qe === gr) X.raise("Negated character class may contain strings");
      return !0;
    }
    return !1;
  }, jn.regexp_classContents = function (X) {
    if (X.current() === 93) return Qn;
    if (X.switchV) return this.regexp_classSetExpression(X);
    return this.regexp_nonEmptyClassRanges(X), Qn;
  }, jn.regexp_nonEmptyClassRanges = function (X) {
    while (this.regexp_eatClassAtom(X)) {
      var Se = X.lastIntValue;
      if (X.eat(45) && this.regexp_eatClassAtom(X)) {
        var qe = X.lastIntValue;
        if (X.switchU && (Se === -1 || qe === -1)) X.raise("Invalid character class");
        if (Se !== -1 && qe !== -1 && Se > qe) X.raise("Range out of order in character class");
      }
    }
  }, jn.regexp_eatClassAtom = function (X) {
    var Se = X.pos;
    if (X.eat(92)) {
      if (this.regexp_eatClassEscape(X)) return !0;
      if (X.switchU) {
        var qe = X.current();
        if (qe === 99 || Jr(qe)) X.raise("Invalid class escape");
        X.raise("Invalid escape");
      }
      X.pos = Se;
    }
    var ot = X.current();
    if (ot !== 93) return X.lastIntValue = ot, X.advance(), !0;
    return !1;
  }, jn.regexp_eatClassEscape = function (X) {
    var Se = X.pos;
    if (X.eat(98)) return X.lastIntValue = 8, !0;
    if (X.switchU && X.eat(45)) return X.lastIntValue = 45, !0;
    if (!X.switchU && X.eat(99)) {
      if (this.regexp_eatClassControlLetter(X)) return !0;
      X.pos = Se;
    }
    return this.regexp_eatCharacterClassEscape(X) || this.regexp_eatCharacterEscape(X);
  }, jn.regexp_classSetExpression = function (X) {
    var Se = Qn,
      qe;
    if (this.regexp_eatClassSetRange(X)) ;else if (qe = this.regexp_eatClassSetOperand(X)) {
      if (qe === gr) Se = gr;
      var ot = X.pos;
      while (X.eatChars([38, 38])) {
        if (X.current() !== 38 && (qe = this.regexp_eatClassSetOperand(X))) {
          if (qe !== gr) Se = Qn;
          continue;
        }
        X.raise("Invalid character in character class");
      }
      if (ot !== X.pos) return Se;
      while (X.eatChars([45, 45])) {
        if (this.regexp_eatClassSetOperand(X)) continue;
        X.raise("Invalid character in character class");
      }
      if (ot !== X.pos) return Se;
    } else X.raise("Invalid character in character class");
    for (;;) {
      if (this.regexp_eatClassSetRange(X)) continue;
      if (qe = this.regexp_eatClassSetOperand(X), !qe) return Se;
      if (qe === gr) Se = gr;
    }
  }, jn.regexp_eatClassSetRange = function (X) {
    var Se = X.pos;
    if (this.regexp_eatClassSetCharacter(X)) {
      var qe = X.lastIntValue;
      if (X.eat(45) && this.regexp_eatClassSetCharacter(X)) {
        var ot = X.lastIntValue;
        if (qe !== -1 && ot !== -1 && qe > ot) X.raise("Range out of order in character class");
        return !0;
      }
      X.pos = Se;
    }
    return !1;
  }, jn.regexp_eatClassSetOperand = function (X) {
    if (this.regexp_eatClassSetCharacter(X)) return Qn;
    return this.regexp_eatClassStringDisjunction(X) || this.regexp_eatNestedClass(X);
  }, jn.regexp_eatNestedClass = function (X) {
    var Se = X.pos;
    if (X.eat(91)) {
      var qe = X.eat(94),
        ot = this.regexp_classContents(X);
      if (X.eat(93)) {
        if (qe && ot === gr) X.raise("Negated character class may contain strings");
        return ot;
      }
      X.pos = Se;
    }
    if (X.eat(92)) {
      var zt = this.regexp_eatCharacterClassEscape(X);
      if (zt) return zt;
      X.pos = Se;
    }
    return null;
  }, jn.regexp_eatClassStringDisjunction = function (X) {
    var Se = X.pos;
    if (X.eatChars([92, 113])) {
      if (X.eat(123)) {
        var qe = this.regexp_classStringDisjunctionContents(X);
        if (X.eat(125)) return qe;
      } else X.raise("Invalid escape");
      X.pos = Se;
    }
    return null;
  }, jn.regexp_classStringDisjunctionContents = function (X) {
    var Se = this.regexp_classString(X);
    while (X.eat(124)) if (this.regexp_classString(X) === gr) Se = gr;
    return Se;
  }, jn.regexp_classString = function (X) {
    var Se = 0;
    while (this.regexp_eatClassSetCharacter(X)) Se++;
    return Se === 1 ? Qn : gr;
  }, jn.regexp_eatClassSetCharacter = function (X) {
    var Se = X.pos;
    if (X.eat(92)) {
      if (this.regexp_eatCharacterEscape(X) || this.regexp_eatClassSetReservedPunctuator(X)) return !0;
      if (X.eat(98)) return X.lastIntValue = 8, !0;
      return X.pos = Se, !1;
    }
    var qe = X.current();
    if (qe < 0 || qe === X.lookahead() && la(qe)) return !1;
    if (Fi(qe)) return !1;
    return X.advance(), X.lastIntValue = qe, !0;
  };
  function la(X) {
    return X === 33 || X >= 35 && X <= 38 || X >= 42 && X <= 44 || X === 46 || X >= 58 && X <= 64 || X === 94 || X === 96 || X === 126;
  }
  function Fi(X) {
    return X === 40 || X === 41 || X === 45 || X === 47 || X >= 91 && X <= 93 || X >= 123 && X <= 125;
  }
  jn.regexp_eatClassSetReservedPunctuator = function (X) {
    var Se = X.current();
    if (xn(Se)) return X.lastIntValue = Se, X.advance(), !0;
    return !1;
  };
  function xn(X) {
    return X === 33 || X === 35 || X === 37 || X === 38 || X === 44 || X === 45 || X >= 58 && X <= 62 || X === 64 || X === 96 || X === 126;
  }
  jn.regexp_eatClassControlLetter = function (X) {
    var Se = X.current();
    if (nr(Se) || Se === 95) return X.lastIntValue = Se % 32, X.advance(), !0;
    return !1;
  }, jn.regexp_eatHexEscapeSequence = function (X) {
    var Se = X.pos;
    if (X.eat(120)) {
      if (this.regexp_eatFixedHexDigits(X, 2)) return !0;
      if (X.switchU) X.raise("Invalid escape");
      X.pos = Se;
    }
    return !1;
  }, jn.regexp_eatDecimalDigits = function (X) {
    var Se = X.pos,
      qe = 0;
    X.lastIntValue = 0;
    while (nr(qe = X.current())) X.lastIntValue = 10 * X.lastIntValue + (qe - 48), X.advance();
    return X.pos !== Se;
  };
  function nr(X) {
    return X >= 48 && X <= 57;
  }
  jn.regexp_eatHexDigits = function (X) {
    var Se = X.pos,
      qe = 0;
    X.lastIntValue = 0;
    while (Yn(qe = X.current())) X.lastIntValue = 16 * X.lastIntValue + Xn(qe), X.advance();
    return X.pos !== Se;
  };
  function Yn(X) {
    return X >= 48 && X <= 57 || X >= 65 && X <= 70 || X >= 97 && X <= 102;
  }
  function Xn(X) {
    if (X >= 65 && X <= 70) return 10 + (X - 65);
    if (X >= 97 && X <= 102) return 10 + (X - 97);
    return X - 48;
  }
  jn.regexp_eatLegacyOctalEscapeSequence = function (X) {
    if (this.regexp_eatOctalDigit(X)) {
      var Se = X.lastIntValue;
      if (this.regexp_eatOctalDigit(X)) {
        var qe = X.lastIntValue;
        if (Se <= 3 && this.regexp_eatOctalDigit(X)) X.lastIntValue = Se * 64 + qe * 8 + X.lastIntValue;else X.lastIntValue = Se * 8 + qe;
      } else X.lastIntValue = Se;
      return !0;
    }
    return !1;
  }, jn.regexp_eatOctalDigit = function (X) {
    var Se = X.current();
    if (Jr(Se)) return X.lastIntValue = Se - 48, X.advance(), !0;
    return X.lastIntValue = 0, !1;
  };
  function Jr(X) {
    return X >= 48 && X <= 55;
  }
  jn.regexp_eatFixedHexDigits = function (X, Se) {
    var qe = X.pos;
    X.lastIntValue = 0;
    for (var ot = 0; ot < Se; ++ot) {
      var zt = X.current();
      if (!Yn(zt)) return X.pos = qe, !1;
      X.lastIntValue = 16 * X.lastIntValue + Xn(zt), X.advance();
    }
    return !0;
  };
  var zr = function (Se) {
      if (this.type = Se.type, this.value = Se.value, this.start = Se.start, this.end = Se.end, Se.options.locations) this.loc = new V(Se, Se.startLoc, Se.endLoc);
      if (Se.options.ranges) this.range = [Se.start, Se.end];
    },
    to = Ce.prototype;
  if (to.next = function (X) {
    if (!X && this.type.keyword && this.containsEsc) this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
    if (this.options.onToken) this.options.onToken(new zr(this));
    this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
  }, to.getToken = function () {
    return this.next(), new zr(this);
  }, typeof Symbol < "u") to[Symbol.iterator] = function () {
    var X = this;
    return {
      next: function () {
        var Se = X.getToken();
        return {
          done: Se.type === S.eof,
          value: Se
        };
      }
    };
  };
  to.nextToken = function () {
    var X = this.curContext();
    if (!X || !X.preserveSpace) this.skipSpace();
    if (this.start = this.pos, this.options.locations) this.startLoc = this.curPosition();
    if (this.pos >= this.input.length) return this.finishToken(S.eof);
    if (X.override) return X.override(this);else this.readToken(this.fullCharCodeAtPos());
  }, to.readToken = function (X) {
    if (p(X, this.options.ecmaVersion >= 6) || X === 92) return this.readWord();
    return this.getTokenFromCode(X);
  }, to.fullCharCodeAtPos = function () {
    var X = this.input.charCodeAt(this.pos);
    if (X <= 55295 || X >= 56320) return X;
    var Se = this.input.charCodeAt(this.pos + 1);
    return Se <= 56319 || Se >= 57344 ? X : (X << 10) + Se - 56613888;
  }, to.skipBlockComment = function () {
    var X = this.options.onComment && this.curPosition(),
      Se = this.pos,
      qe = this.input.indexOf("*/", this.pos += 2);
    if (qe === -1) this.raise(this.pos - 2, "Unterminated comment");
    if (this.pos = qe + 2, this.options.locations) for (var ot = void 0, zt = Se; (ot = x(this.input, zt, this.pos)) > -1;) ++this.curLine, zt = this.lineStart = ot;
    if (this.options.onComment) this.options.onComment(!0, this.input.slice(Se + 2, qe), Se, this.pos, X, this.curPosition());
  }, to.skipLineComment = function (X) {
    var Se = this.pos,
      qe = this.options.onComment && this.curPosition(),
      ot = this.input.charCodeAt(this.pos += X);
    while (this.pos < this.input.length && !C(ot)) ot = this.input.charCodeAt(++this.pos);
    if (this.options.onComment) this.options.onComment(!1, this.input.slice(Se + X, this.pos), Se, this.pos, qe, this.curPosition());
  }, to.skipSpace = function () {
    e: while (this.pos < this.input.length) {
      var X = this.input.charCodeAt(this.pos);
      switch (X) {
        case 32:
        case 160:
          ++this.pos;
          break;
        case 13:
          if (this.input.charCodeAt(this.pos + 1) === 10) ++this.pos;
        case 10:
        case 8232:
        case 8233:
          if (++this.pos, this.options.locations) ++this.curLine, this.lineStart = this.pos;
          break;
        case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;
            case 47:
              this.skipLineComment(2);
              break;
            default:
              break e;
          }
          break;
        default:
          if (X > 8 && X < 14 || X >= 5760 && I.test(String.fromCharCode(X))) ++this.pos;else break e;
      }
    }
  }, to.finishToken = function (X, Se) {
    if (this.end = this.pos, this.options.locations) this.endLoc = this.curPosition();
    var qe = this.type;
    this.type = X, this.value = Se, this.updateContext(qe);
  }, to.readToken_dot = function () {
    var X = this.input.charCodeAt(this.pos + 1);
    if (X >= 48 && X <= 57) return this.readNumber(!0);
    var Se = this.input.charCodeAt(this.pos + 2);
    if (this.options.ecmaVersion >= 6 && X === 46 && Se === 46) return this.pos += 3, this.finishToken(S.ellipsis);else return ++this.pos, this.finishToken(S.dot);
  }, to.readToken_slash = function () {
    var X = this.input.charCodeAt(this.pos + 1);
    if (this.exprAllowed) return ++this.pos, this.readRegexp();
    if (X === 61) return this.finishOp(S.assign, 2);
    return this.finishOp(S.slash, 1);
  }, to.readToken_mult_modulo_exp = function (X) {
    var Se = this.input.charCodeAt(this.pos + 1),
      qe = 1,
      ot = X === 42 ? S.star : S.modulo;
    if (this.options.ecmaVersion >= 7 && X === 42 && Se === 42) ++qe, ot = S.starstar, Se = this.input.charCodeAt(this.pos + 2);
    if (Se === 61) return this.finishOp(S.assign, qe + 1);
    return this.finishOp(ot, qe);
  }, to.readToken_pipe_amp = function (X) {
    var Se = this.input.charCodeAt(this.pos + 1);
    if (Se === X) {
      if (this.options.ecmaVersion >= 12) {
        var qe = this.input.charCodeAt(this.pos + 2);
        if (qe === 61) return this.finishOp(S.assign, 3);
      }
      return this.finishOp(X === 124 ? S.logicalOR : S.logicalAND, 2);
    }
    if (Se === 61) return this.finishOp(S.assign, 2);
    return this.finishOp(X === 124 ? S.bitwiseOR : S.bitwiseAND, 1);
  }, to.readToken_caret = function () {
    var X = this.input.charCodeAt(this.pos + 1);
    if (X === 61) return this.finishOp(S.assign, 2);
    return this.finishOp(S.bitwiseXOR, 1);
  }, to.readToken_plus_min = function (X) {
    var Se = this.input.charCodeAt(this.pos + 1);
    if (Se === X) {
      if (Se === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || A.test(this.input.slice(this.lastTokEnd, this.pos)))) return this.skipLineComment(3), this.skipSpace(), this.nextToken();
      return this.finishOp(S.incDec, 2);
    }
    if (Se === 61) return this.finishOp(S.assign, 2);
    return this.finishOp(S.plusMin, 1);
  }, to.readToken_lt_gt = function (X) {
    var Se = this.input.charCodeAt(this.pos + 1),
      qe = 1;
    if (Se === X) {
      if (qe = X === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + qe) === 61) return this.finishOp(S.assign, qe + 1);
      return this.finishOp(S.bitShift, qe);
    }
    if (Se === 33 && X === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) return this.skipLineComment(4), this.skipSpace(), this.nextToken();
    if (Se === 61) qe = 2;
    return this.finishOp(S.relational, qe);
  }, to.readToken_eq_excl = function (X) {
    var Se = this.input.charCodeAt(this.pos + 1);
    if (Se === 61) return this.finishOp(S.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
    if (X === 61 && Se === 62 && this.options.ecmaVersion >= 6) return this.pos += 2, this.finishToken(S.arrow);
    return this.finishOp(X === 61 ? S.eq : S.prefix, 1);
  }, to.readToken_question = function () {
    var X = this.options.ecmaVersion;
    if (X >= 11) {
      var Se = this.input.charCodeAt(this.pos + 1);
      if (Se === 46) {
        var qe = this.input.charCodeAt(this.pos + 2);
        if (qe < 48 || qe > 57) return this.finishOp(S.questionDot, 2);
      }
      if (Se === 63) {
        if (X >= 12) {
          var ot = this.input.charCodeAt(this.pos + 2);
          if (ot === 61) return this.finishOp(S.assign, 3);
        }
        return this.finishOp(S.coalesce, 2);
      }
    }
    return this.finishOp(S.question, 1);
  }, to.readToken_numberSign = function () {
    var X = this.options.ecmaVersion,
      Se = 35;
    if (X >= 13) {
      if (++this.pos, Se = this.fullCharCodeAtPos(), p(Se, !0) || Se === 92) return this.finishToken(S.privateId, this.readWord1());
    }
    this.raise(this.pos, "Unexpected character '" + $(Se) + "'");
  }, to.getTokenFromCode = function (X) {
    switch (X) {
      case 46:
        return this.readToken_dot();
      case 40:
        return ++this.pos, this.finishToken(S.parenL);
      case 41:
        return ++this.pos, this.finishToken(S.parenR);
      case 59:
        return ++this.pos, this.finishToken(S.semi);
      case 44:
        return ++this.pos, this.finishToken(S.comma);
      case 91:
        return ++this.pos, this.finishToken(S.bracketL);
      case 93:
        return ++this.pos, this.finishToken(S.bracketR);
      case 123:
        return ++this.pos, this.finishToken(S.braceL);
      case 125:
        return ++this.pos, this.finishToken(S.braceR);
      case 58:
        return ++this.pos, this.finishToken(S.colon);
      case 96:
        if (this.options.ecmaVersion < 6) break;
        return ++this.pos, this.finishToken(S.backQuote);
      case 48:
        var Se = this.input.charCodeAt(this.pos + 1);
        if (Se === 120 || Se === 88) return this.readRadixNumber(16);
        if (this.options.ecmaVersion >= 6) {
          if (Se === 111 || Se === 79) return this.readRadixNumber(8);
          if (Se === 98 || Se === 66) return this.readRadixNumber(2);
        }
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return this.readNumber(!1);
      case 34:
      case 39:
        return this.readString(X);
      case 47:
        return this.readToken_slash();
      case 37:
      case 42:
        return this.readToken_mult_modulo_exp(X);
      case 124:
      case 38:
        return this.readToken_pipe_amp(X);
      case 94:
        return this.readToken_caret();
      case 43:
      case 45:
        return this.readToken_plus_min(X);
      case 60:
      case 62:
        return this.readToken_lt_gt(X);
      case 61:
      case 33:
        return this.readToken_eq_excl(X);
      case 63:
        return this.readToken_question();
      case 126:
        return this.finishOp(S.prefix, 1);
      case 35:
        return this.readToken_numberSign();
    }
    this.raise(this.pos, "Unexpected character '" + $(X) + "'");
  }, to.finishOp = function (X, Se) {
    var qe = this.input.slice(this.pos, this.pos + Se);
    return this.pos += Se, this.finishToken(X, qe);
  }, to.readRegexp = function () {
    var X,
      Se,
      qe = this.pos;
    for (;;) {
      if (this.pos >= this.input.length) this.raise(qe, "Unterminated regular expression");
      var ot = this.input.charAt(this.pos);
      if (A.test(ot)) this.raise(qe, "Unterminated regular expression");
      if (!X) {
        if (ot === "[") Se = !0;else if (ot === "]" && Se) Se = !1;else if (ot === "/" && !Se) break;
        X = ot === "\\";
      } else X = !1;
      ++this.pos;
    }
    var zt = this.input.slice(qe, this.pos);
    ++this.pos;
    var cn = this.pos,
      hr = this.readWord1();
    if (this.containsEsc) this.unexpected(cn);
    var Tr = this.regexpState || (this.regexpState = new Mo(this));
    Tr.reset(qe, zt, hr), this.validateRegExpFlags(Tr), this.validateRegExpPattern(Tr);
    var Br = null;
    try {
      Br = new RegExp(zt, hr);
    } catch (fi) {}
    return this.finishToken(S.regexp, {
      pattern: zt,
      flags: hr,
      value: Br
    });
  }, to.readInt = function (X, Se, qe) {
    var ot = this.options.ecmaVersion >= 12 && Se === void 0,
      zt = qe && this.input.charCodeAt(this.pos) === 48,
      cn = this.pos,
      hr = 0,
      Tr = 0;
    for (var Br = 0, fi = Se == null ? 1 / 0 : Se; Br < fi; ++Br, ++this.pos) {
      var oi = this.input.charCodeAt(this.pos),
        Pa = void 0;
      if (ot && oi === 95) {
        if (zt) this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
        if (Tr === 95) this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
        if (Br === 0) this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
        Tr = oi;
        continue;
      }
      if (oi >= 97) Pa = oi - 97 + 10;else if (oi >= 65) Pa = oi - 65 + 10;else if (oi >= 48 && oi <= 57) Pa = oi - 48;else Pa = 1 / 0;
      if (Pa >= X) break;
      Tr = oi, hr = hr * X + Pa;
    }
    if (ot && Tr === 95) this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
    if (this.pos === cn || Se != null && this.pos - cn !== Se) return null;
    return hr;
  };
  function vs(X, Se) {
    if (Se) return parseInt(X, 8);
    return parseFloat(X.replace(/_/g, ""));
  }
  function bs(X) {
    if (typeof BigInt !== "function") return null;
    return BigInt(X.replace(/_/g, ""));
  }
  to.readRadixNumber = function (X) {
    var Se = this.pos;
    this.pos += 2;
    var qe = this.readInt(X);
    if (qe == null) this.raise(this.start + 2, "Expected number in radix " + X);
    if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) qe = bs(this.input.slice(Se, this.pos)), ++this.pos;else if (p(this.fullCharCodeAtPos())) this.raise(this.pos, "Identifier directly after number");
    return this.finishToken(S.num, qe);
  }, to.readNumber = function (X) {
    var Se = this.pos;
    if (!X && this.readInt(10, void 0, !0) === null) this.raise(Se, "Invalid number");
    var qe = this.pos - Se >= 2 && this.input.charCodeAt(Se) === 48;
    if (qe && this.strict) this.raise(Se, "Invalid number");
    var ot = this.input.charCodeAt(this.pos);
    if (!qe && !X && this.options.ecmaVersion >= 11 && ot === 110) {
      var zt = bs(this.input.slice(Se, this.pos));
      if (++this.pos, p(this.fullCharCodeAtPos())) this.raise(this.pos, "Identifier directly after number");
      return this.finishToken(S.num, zt);
    }
    if (qe && /[89]/.test(this.input.slice(Se, this.pos))) qe = !1;
    if (ot === 46 && !qe) ++this.pos, this.readInt(10), ot = this.input.charCodeAt(this.pos);
    if ((ot === 69 || ot === 101) && !qe) {
      if (ot = this.input.charCodeAt(++this.pos), ot === 43 || ot === 45) ++this.pos;
      if (this.readInt(10) === null) this.raise(Se, "Invalid number");
    }
    if (p(this.fullCharCodeAtPos())) this.raise(this.pos, "Identifier directly after number");
    var cn = vs(this.input.slice(Se, this.pos), qe);
    return this.finishToken(S.num, cn);
  }, to.readCodePoint = function () {
    var X = this.input.charCodeAt(this.pos),
      Se;
    if (X === 123) {
      if (this.options.ecmaVersion < 6) this.unexpected();
      var qe = ++this.pos;
      if (Se = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, Se > 1114111) this.invalidStringToken(qe, "Code point out of bounds");
    } else Se = this.readHexChar(4);
    return Se;
  }, to.readString = function (X) {
    var Se = "",
      qe = ++this.pos;
    for (;;) {
      if (this.pos >= this.input.length) this.raise(this.start, "Unterminated string constant");
      var ot = this.input.charCodeAt(this.pos);
      if (ot === X) break;
      if (ot === 92) Se += this.input.slice(qe, this.pos), Se += this.readEscapedChar(!1), qe = this.pos;else if (ot === 8232 || ot === 8233) {
        if (this.options.ecmaVersion < 10) this.raise(this.start, "Unterminated string constant");
        if (++this.pos, this.options.locations) this.curLine++, this.lineStart = this.pos;
      } else {
        if (C(ot)) this.raise(this.start, "Unterminated string constant");
        ++this.pos;
      }
    }
    return Se += this.input.slice(qe, this.pos++), this.finishToken(S.string, Se);
  };
  var Da = {};
  to.tryReadTemplateToken = function () {
    this.inTemplateElement = !0;
    try {
      this.readTmplToken();
    } catch (X) {
      if (X === Da) this.readInvalidTemplateToken();else throw X;
    }
    this.inTemplateElement = !1;
  }, to.invalidStringToken = function (X, Se) {
    if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Da;else this.raise(X, Se);
  }, to.readTmplToken = function () {
    var X = "",
      Se = this.pos;
    for (;;) {
      if (this.pos >= this.input.length) this.raise(this.start, "Unterminated template");
      var qe = this.input.charCodeAt(this.pos);
      if (qe === 96 || qe === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
        if (this.pos === this.start && (this.type === S.template || this.type === S.invalidTemplate)) if (qe === 36) return this.pos += 2, this.finishToken(S.dollarBraceL);else return ++this.pos, this.finishToken(S.backQuote);
        return X += this.input.slice(Se, this.pos), this.finishToken(S.template, X);
      }
      if (qe === 92) X += this.input.slice(Se, this.pos), X += this.readEscapedChar(!0), Se = this.pos;else if (C(qe)) {
        switch (X += this.input.slice(Se, this.pos), ++this.pos, qe) {
          case 13:
            if (this.input.charCodeAt(this.pos) === 10) ++this.pos;
          case 10:
            X += `
`;
            break;
          default:
            X += String.fromCharCode(qe);
            break;
        }
        if (this.options.locations) ++this.curLine, this.lineStart = this.pos;
        Se = this.pos;
      } else ++this.pos;
    }
  }, to.readInvalidTemplateToken = function () {
    for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{") break;
      case "`":
        return this.finishToken(S.invalidTemplate, this.input.slice(this.start, this.pos));
      case "\r":
        if (this.input[this.pos + 1] === `
`) ++this.pos;
      case `
`:
      case "\u2028":
      case "\u2029":
        ++this.curLine, this.lineStart = this.pos + 1;
        break;
    }
    this.raise(this.start, "Unterminated template");
  }, to.readEscapedChar = function (X) {
    var Se = this.input.charCodeAt(++this.pos);
    switch (++this.pos, Se) {
      case 110:
        return `
`;
      case 114:
        return "\r";
      case 120:
        return String.fromCharCode(this.readHexChar(2));
      case 117:
        return $(this.readCodePoint());
      case 116:
        return "\t";
      case 98:
        return "\b";
      case 118:
        return "\v";
      case 102:
        return "\f";
      case 13:
        if (this.input.charCodeAt(this.pos) === 10) ++this.pos;
      case 10:
        if (this.options.locations) this.lineStart = this.pos, ++this.curLine;
        return "";
      case 56:
      case 57:
        if (this.strict) this.invalidStringToken(this.pos - 1, "Invalid escape sequence");
        if (X) {
          var qe = this.pos - 1;
          this.invalidStringToken(qe, "Invalid escape sequence in template string");
        }
      default:
        if (Se >= 48 && Se <= 55) {
          var ot = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
            zt = parseInt(ot, 8);
          if (zt > 255) ot = ot.slice(0, -1), zt = parseInt(ot, 8);
          if (this.pos += ot.length - 1, Se = this.input.charCodeAt(this.pos), (ot !== "0" || Se === 56 || Se === 57) && (this.strict || X)) this.invalidStringToken(this.pos - 1 - ot.length, X ? "Octal literal in template string" : "Octal literal in strict mode");
          return String.fromCharCode(zt);
        }
        if (C(Se)) {
          if (this.options.locations) this.lineStart = this.pos, ++this.curLine;
          return "";
        }
        return String.fromCharCode(Se);
    }
  }, to.readHexChar = function (X) {
    var Se = this.pos,
      qe = this.readInt(16, X);
    if (qe === null) this.invalidStringToken(Se, "Bad character escape sequence");
    return qe;
  }, to.readWord1 = function () {
    this.containsEsc = !1;
    var X = "",
      Se = !0,
      qe = this.pos,
      ot = this.options.ecmaVersion >= 6;
    while (this.pos < this.input.length) {
      var zt = this.fullCharCodeAtPos();
      if (f(zt, ot)) this.pos += zt <= 65535 ? 1 : 2;else if (zt === 92) {
        this.containsEsc = !0, X += this.input.slice(qe, this.pos);
        var cn = this.pos;
        if (this.input.charCodeAt(++this.pos) !== 117) this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
        ++this.pos;
        var hr = this.readCodePoint();
        if (!(Se ? p : f)(hr, ot)) this.invalidStringToken(cn, "Invalid Unicode escape");
        X += $(hr), qe = this.pos;
      } else break;
      Se = !1;
    }
    return X + this.input.slice(qe, this.pos);
  }, to.readWord = function () {
    var X = this.readWord1(),
      Se = S.name;
    if (this.keywords.test(X)) Se = b[X];
    return this.finishToken(Se, X);
  };
  var Qs = "8.15.0";
  Ce.acorn = {
    Parser: Ce,
    version: Qs,
    defaultOptions: z,
    Position: W,
    SourceLocation: V,
    getLineInfo: Y,
    Node: fe,
    TokenType: m,
    tokTypes: S,
    keywordTypes: b,
    TokContext: xt,
    tokContexts: vt,
    isIdentifierChar: f,
    isIdentifierStart: p,
    Token: zr,
    isNewLine: C,
    lineBreak: A,
    lineBreakG: v,
    nonASCIIwhitespace: I
  };
  function To(X, Se) {
    return Ce.parse(X, Se);
  }
  function ji(X, Se, qe) {
    return Ce.parseExpressionAt(X, Se, qe);
  }
  function us(X, Se) {
    return Ce.tokenizer(X, Se);
  }
  e.Node = fe, e.Parser = Ce, e.Position = W, e.SourceLocation = V, e.TokContext = xt, e.Token = zr, e.TokenType = m, e.defaultOptions = z, e.getLineInfo = Y, e.isIdentifierChar = f, e.isIdentifierStart = p, e.isNewLine = C, e.keywordTypes = b, e.lineBreak = A, e.lineBreakG = v, e.nonASCIIwhitespace = I, e.parse = To, e.parseExpressionAt = ji, e.tokContexts = vt, e.tokTypes = S, e.tokenizer = us, e.version = Qs;
});