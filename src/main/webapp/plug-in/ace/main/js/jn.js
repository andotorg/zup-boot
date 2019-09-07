(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        factory(exports, require('echarts'));
    } else {
        factory({},
            root.echarts);
    }
} (this,
    function(exports, echarts) {
        var log = function(msg) {
            if (typeof console !== 'undefined') {
                console && console.error && console.error(msg);
            }
        };
        if (!echarts) {
            log('ECharts is not Loaded');
            return;
        }
        if (!echarts.registerMap) {
            log('ECharts Map is not loaded');
            return;
        }
        echarts.registerMap('jinan', {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "id": "370102",
                "properties": {
                    "name": "历下区",
                    "cp": [117.03862, 36.664169],
                    "childNum": 1,
                    "color":"#ff0"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": ["@@F@FBBBBA@A@@@@DG@@@@@CBA@@@@@@@A@E@@@@@A@@@A@A@@@C@AL@@@@@B@D@@@@@FAD@DCB@B@@@@BB@BBDBBBFBBBBD@DBBBBBBBD@B@DBBB@@BBDDH@BB@HBD@DB@BBB@D@DAH@B@BB@HBD@F@\\AD@F@XDB@BAB@BCFQ@@BAF@R@DADA@A@CBiBABA@@@@B@DAH@D@@A@E@CAAA@A@K@CBA@GFCBABE@IBCB@@@BABA@C@A@ADABA@A@A@AA@@@C@@BCBC@@@@DCBEBA@C@C@CAEAGCE@ABY@WAOAEB@@I@KAAGGCAC@CDCBC@GAABQJSLIBIAKB]^AB@B@B@BABA@CB@@C@EBC@AAECC@A@EDE@G@E@CBEFEDABEBGB@@A@@@@@@@@B@AA@@@@@AAM@AB@@@@@D@B@B@B@D@@@@@@@B@@@B@@@D@DBB@B@B@DAB@@B@@@B@@B@@@D@@@@@B@B@@A@@@A@@@@@@@@BB@@@@@BFBB@@@B@J@F@B@B@@@@@BDB@@FBB@D@B@@@B@@@@@@@L@B@@@A@@B@@@@@B@B@BF@@@@@FBB@@@BA@A@A@@B@@@@A@A@@@@@@@@B@@B@@@@@@@@@@@@DD@@B@@@@@@BBF@@@B"],
                    "encodeOffsets": [[119855, 37567]]
                }
            },
                {
                    "type": "Feature",
                    "id": "370104",
                    "properties": {
                        "name": "槐荫区",
                        "cp": [116.947921, 36.668205],
                        "childNum": 1
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": ["@@@@@A@A@@@@@@BC@AA@A@@A@A@@@@@ABC@@@C@A@A@@CCA@@A@@@A@@@I@@A@C@@@A@@@@ADK@C@AAAAAAA@A@CAA@@AAA@@@@@@@@BAB@@@@@B@BA@@@A@@@@@@@@@@B@@@B@@@@@BCBAD@@@BCDADA@@BA@AA@@@@@@@@AAAI@@A@@@@@@@@B@@@@AB@@A@@@AAAAA@E@ABA@@@AD@BA@@H@B@@IH@@@B@B@BA@@@@@@AAC@AA@@@C@@@A@@A@@@@@A@A@@A@I@@@AB@@@@@@@@@B@@@B@@K@@@@@AA@@@@@@A@IF@C@AA@@@@@@@AC@@@@M@@A@@@A@@@@B@@@@AB@AI@A@@B@@A@@B@B@@@B@@A@I@E@@@A@A@@A@AAA@AA@@@BA@@@A@C@AA@@AA@@CCEACAA@@@A@@@CBAB@@A@A@ABA@@@ABA@@BA@C@@B@B@H@BA@O@E@A@A@A@A@ABIAeEG@aCO@IB@BGDADADBDBDFDBD@DAFEJADDLPd@@FBDDADA@CDGDA@YdABBFDDNLTLVLNFJBPBN@JBDBFDNNFBJFLDN@L@XALAHALE@@@O@GAE@E@I@AL@@@AE@C@@@@@@XAB@@G@AA@CAAA@@B@@@DABA@@@C@A@@D@@@B@B@@@@@@@D@@K@@@@@CBABA@@@@@@@A@C@A@AD@@@AA@@@@@@@@@@@@@@@@@@@A@@@@@@@@@AFEBCB@@A@GF@F@@AHIH@D@D@@@@@@@B@BAD@@@B@LBDB"],
                        "encodeOffsets": [[119796, 37547]]
                    }
                },
                {
                    "type": "Feature",
                    "id": "370105",
                    "properties": {
                        "name": "天桥区",
                        "cp": [116.996086, 36.693374],
                        "childNum": 1
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": ["@@AB@DB@@@AJ@DCA@HA@@@E@@@GBGACBCHCRAF@B@DBPBRDLC@BDFP@@@@BDFALAB@DBBBFABDA@BFAFG@ABADBDA@DF@BBD@BDFBAHE\\EA@JAACFBPC@CB@@@ZFBLD@@F@DAB@JCB@DDDD@H@F@@ABADA@@BCD@D@B@NBHL@NAXHED@@@H@@BL@BGDBBABEBCHCB@@BHBL@NCF@LA@DH@@DB@FBH@FBBBLB@BLHJBJ@BAFA@DJADEDBBA@IDCAK@@A@AA@I@@@@@@C@AIDGBAB@B@@SEC@KAA@AEAAAACBCACC@AAEK@ABAB@D@BA@@@A@CJAACBAH@@AB@DIJ@B@FAL@D@AA@EAEACMGMGICIGGCCACAU@G@GACAC@AACCCCACACAC@CDEFKBA@@@@DCBC@AAAAC@A@AFEBABA@C@E@@@@@CB@@@D@@@@@@@@B@@@@@DB@FBBAB@@@DBB@@@B@B@B@@@@AB@@AFAD@D@B@@@BABC@@@@@A@@@@@@@@B@B@BBB@@BAB@B@@@BB@B@@@BABA@@B@@AA@CAAAAAA@AAAAAAA@@A@@@@@@AA@AAA@@@@@A@@CAA@AA@@@A@A@A@A@A@A@AAAAACC@@@A@@AE@A@@@@A@@@CC@@@@@@@@@@@@@AA@@@@@@@@@@B@B@@A@@@@B@BAB@@A@EA@@@@E@@A@A@A@@@@@AB@@@A@K@@@@@@@A@@@A@C@A@EA@@CA@A@@@@@A@A@E@I@A@@GA@@@BBBG@@@@@@B@BA@@@@@@@@@A@C@A@@@IBC@@@@@A@@@@@@@A@@@A@@@MCCAKAA@@@C@ABA@@@@@@@C@C@G@GJ@BE@E@@H@BA@ADEF@B@@@@@@@@@B@@@@@@@@@@@@@@@@@@BB@@C@@B@B@D@B@@@@@@ABAB@D@@@@@LC@@@@@@@A@A@@@C@@@@B@D@@ABCB@@A@@@BBDBB@@B@HA@WB@@@@@@@DBF@@K@@B@J@FBF@H@P@@KFGBKBWBK@M@"],
                        "encodeOffsets": [[119693, 37628]]
                    }
                },
                {
                    "type": "Feature",
                    "id": "370113",
                    "properties": {
                        "name": "长清区",
                        "cp": [116.74588, 36.561049],
                        "childNum": 1
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": ["@@BABCBGBAHCFCDEDGJKVSFCHCFEHEBADEBEDCF@DADA@@@AB@FAHAJADC@A@AE@QAGCCCCIEOAQAGCS@ADCH@@CAABCD@DABEBE@ABCDCJAH@FCHEHGFCHAHAHBB@JBHBJGBA@EXDHADE@EB@BAH@F@FAPMJGB]CCC@@CFGDCPAJ@D@F@FAFADCHG@APGFE@@D@FEAEBG@I@QDEHKD@@ACKCCAAFCBECEDE@CCEACR@B@N@XCPEPEFE@AAAGACE@CB@BADDFAFG@CDAFBRSBAB@CMACCO@EBCBCAG@CAECCEBG@CCE@EEEACAECCCAEICCBA@OEECAI@EAAOAGACAGA@BEAC@ABAADE@C@AA@@A@@B@AA@@A@BABABC@@EAADA@ECCAGAA@G@CAEAAECAIAABCDIFEBCHEFEFKEODED@@CBEACB@DADEH@B@BC@C@CA@CA@OECCGEECQCIAAAMD@FEDCBG@CBEDBFED@NEBCBB@DBB@EFIDGF@B@D@BCF@BBDBD@BMBA@ACEEKAE@ICMBMDAAOFSLWLOBK@GEMGOEkOIEQOQISBMEOAUBUPMLQJMBS@UCK@KHIJGLGHMLKFONWJcDMJ@LDD@@BB@BB@@BADFFDHB@@FBBD@@FDF@DA@iF@F@@AB@EABEDBBIDCBCDHBJDDDDHFJNRB@FDHBLB\\BJBHBDBVD^HNFNJDJBHCJELGNCJAB@F@@BHBLADCDSDIBADAD@DFJLJNBL@L@HBFDBF@HAFGB[LABAB@DNJNLBDFJDJDDF@F@PAHBDBHFLJDFDJ@DGX@BBBDDD@HBR@HBD@JDJHFJC\\@FDDH@HAN@F@B@THHD^LDBTJFBBDDFBJ@D@PBFDDBBJFJDFFDJDL@JALBRDDBBF@F@FAF@D@DDBBBB@B@FZcB@HCDCB@BCCCEA@@OcCKBCFIBE@CACECACACBCBCHC@A"],
                        "encodeOffsets": [[119617, 37504]]
                    }
                },
                {
                    "type": "Feature",
                    "id": "370112",
                    "properties": {
                        "name": "历城区",
                        "cp": [117.063744, 36.681744],
                        "childNum": 1
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": ["@@D@DBHHBB@L@JA@BFBP@XAZ@BDFBHBF@D@D@DABAFCD@@@@ADAD@@@D@@BBB@B@B@BABCB@D@B@BA@A@@DAJAF@BADAHEB@DAL@B@B@BB@D@F@BC@G@CBA@@@@@ABABAj@D@BCBCBQ@E@AB@@ERADA@ABA@WCE@C@[BE@C@GAA@@A@ABG@C@CAA@ACAC@GAA@@ACGAC@AA@AA@C@AACAAAAAA@CACAAEAAACAAAA@@A@@A@A@CDC@EB@@@@C@A@@@@@K@@B@D@@@B@B@@@B@@@@@F@B@@@@@@AB@D@@@@CH@@@@@BABAAEAE@@@DDBBBB@B@B@B@B@B@B@B@@BBB@DB@@@B@@@@BB@BBB@@@@@@@BB@BBBBBBB@BBBBDBB@@BA@@@ABAB@@A@A@@A@@@ABA@AA@AAA@A@@@@@@@@@@B@@@@ADAB@@A@C@C@EB@BA@@B@@A@A@A@@@A@CA@@A@ABEAA@@C@@@@@A@@@@@@C@@@A@@D@@@@@F@DABABEF@B@BBDBB@BADCD@@@@ABELCF@DBDBDBDDDDDBBD@DBHBH@V@DBDBHDJHJDNHNHBDBF@FBB@@DDLFHDHBL@J@FBBBBBDDDFFLBFFLHJDFDFHHFDNJBDCPALBLDDDDBBD@J@F@HBB@FDDDBBHXLXBD@@FGl@HIAMAM@ITGL@L@TBNDNDREHMB@BDFBB@DBNH^RHDDBLFDBBBRDBA@QP@@JB@DABGAKEE@I@AA@@CHADIF@BB@@D@AGE@BGDBBAB@B@HGDM@ABG@E@Q@@AOECC@GDC@CCCEKOIOBKTY@CDAB@@AB@@@@A@C@AB@B@B@B@@@@A@A@A@@@G@AB@@@BI@A@@@@B@@@BA@@D@B@@A@AA@C@E@@A@AFC@A@@A@AB@@DOLMNOHOBSBOBKFSLUFU@OAKIGKKEK@QDI@S@GAACAE@G@C@BGDEDCDM@CA@AAMGKC@ABIGCGCEAC@ADA@C@CACCLA@CHIOKKKECCACI@CB@F@CC@AD@B@DB@GAGBCRAHE@GAEKC@C@CCAIDEB@@@CDEIKCAAACBE@DAFAAIHCCKEECGC@CBC@A@EBABEBG@@ABCAICEGGCAEICGWCEGCEGAGGCAAEAIACAGGK@A@AACEECBCBE@KCGEECS@@GEECAAAAIACQWCAKGEACI@CBCB@DEGOSAO@WKEAEBC@MMDGEAC@EBCBCD[FECC@@@@@ABABA@A@@BCA@BA@CB@@A@@BA@AB@@@@CBA@@@A@A@ABAABICIEAACEEA@ABQTEACB@DEHEBCCABA@@DDFHBBB@BEFOFOFWDM@A@Q@BDDF@DCFDFAFEDBBDDDL@BC@GLCF@R@JAHBFEFC@@@EFOH@BGHCDEBEBE@C@I@OBCDEH@DD@DDA^IHONEBE@G@ABA@@FCFGBAHBPHDJ@DD@BAFBFJF@@BABB@DADB@JDFFJBZCF@@DBBF@BCB@AFEH@DHHRF@BDDJBB@JDHBJFNBBA@@FJDHCB@BGH@@BBD@BD@@@BB@@B@@BB@BLED@FLDFFDB@@C@ADAFBFGB@VDFD@BBBB@RADCBACG@AAI@AHDFE@CDGFABA@EPMBAZEHDJDBDHBDADCA@@CLALDLBD@J@LJDJAD@DEDDJALEDKC@AE@IDEP@B@BCDCA@@@FEFKDBJFB"],
                        "encodeOffsets": [[119942, 37471]]
                    }
                },
                {
                    "type": "Feature",
                    "id": "370103",
                    "properties": {
                        "name": "市中区",
                        "cp": [116.99898, 36.657354],
                        "childNum": 1
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": ["@@JAP@bDH@fFJBBAB@B@B@B@F@P@B@@A@G@A@AD@B@@AB@BA@@B@BAB@B@@@BADA@@B@@@B@DBFBDD@@BB@@BBD@B@@@B@@A@@BBB@BBB@@@@B@B@@@F@J@BA@@@A@A@@@@BA@@@@BBJA@@B@@A@@@@@@B@@@BN@@@@@BD@@@@@@B@@B@DJEB@@@@@@@BB@@@@L@@@@A@@@A@@@@@@@@BA@@J@B@@@@B@B@@@@@BB@@@D@@@B@@BBD@B@@@@B@@A@A@A@@JG@@@A@GB@@ABC@@B@BAF@B@BBBB@@B@@@BA@@@@@A@@@@@@B@@@BJBB@@@@@@@@BBB@@AB@BCDC@A@@BCDA@A@@@@@A@@@A@@@@@@@@B@@@B@@A@A@@@@BA@A@@@@@@B@BB@@BB@D@BBBBBBB@B@DCL@B@@B@@@D@B@@@@J@@@B@@@BB@DD@@@B@B@D@@AD@B@@@@@B@BB@B@@BAD@@@@@@@B@B@@ND@@B@@@B@@@@@@@B@@@@@D@JA@@B@D@B@@@@@@@@@B@@A@A@@@@H@AA@A@@HBAAAE@@@@A@@A@@@@@@B@@@B@@@@A@A@@@@@C@@@AA@@@A@@@BA@C@A@AAA@C@C@@@A@@@A@@@@@@@C@A@A@A@C@@@@BAN@BB@@@@B@@B@A@@@@@@B@@@HAFABAFCFEDAF@H@F@FCB@D@FDBBD@FAD@@@DAB@BA@A@A@ABA^]LAJBJATKRIBAHBD@DADCEAAILCFE@E@@DBDC@A@AFOJCF@@BLDFCBKCIFC@CBCCIKII@C@KAKCKB@DB@CDCBGAACICGCYFABON@FABEBCH@DEFGC@BBJ@BDHABCDQBA@AA@AECUCA@EHEACB@B@DA@ECCEEKC@KF@AAA@@@AA@@A@@ACC@AA@@HG@ADACGEI@@ABMAIEGAICA@IACC@AQEGG@CFGBEA@ADE@AA@CE@YDIAEEICA@BC@CAAAB@@IEAEBE@ACCI@GCAOBGWC@FABIHGAIAA@GAGBGBEDGHGFEDG@IBCDAD@BAFAFCBC@ADBB@DG@CD@BDTBHBRFPDJDDHDRBF@@B@BCDIBGBEBA@@B@@CBCBE@CDAFCFABGFEFGDEDUTILCHCFEDGDABAHADAB"],
                        "encodeOffsets": [[119617, 37504]]
                    }
                },
                {
                    "type": "Feature",
                    "id": "370125",
                    "properties": {
                        "name": "济阳县",
                        "cp": [117.176035, 36.976772],
                        "childNum": 1
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": ["@@BDDBDHHHFFFD@@@@BBFBHDVHdJLLILOFOLEV@PELELALBLNHDBFDXFTHVBTFbJNF@@@@BBNDN@ZC^DDC@EB@B@DD@A@AD@@CJ@@@BAD@B@BD@@@D@DLD@D^DX@VF^HVNRFN@\\MPEV@lFTJRPRLLJVNVFRBdBTFTFXJLDRJ@@@@B@PJ@@@@B@@@@@@@PNPFHOLCNFBLCF@@@@@BEH@B@B@@GPBP@@@@BDDB@@@@FD@@@@@@RLNFRHNDHC@@@G@GBKFMDEBCBC@@DCDELKDEBE@ALGLKNKHKFO@SDQDMDK@A@@@@FOBEBKBADE@EBAB@BGWWKIGASAeCIAKAOGSMQI@@MEE@G@KBaHiFEAEAEAOQEEGEEEMGiI[IICACAC@MAE@S@KDO@IDMBO@OAMGKGIKKMKIKIIIGKIIIKI@A@@@@GEGKCK@K@GACKWGWAACCECA@GAE@I@C@AACCCCAKBKDOACMIECGGCECEGIEKAEEKCECCAAAAEAI@K@GAGCKECC@@C@K@EBA@I@CJA@@BG@ABBDIB@D@B@@ABC@A@AB@BFLBBD@BDADBDBBFB@BBB@LFD@TA@A@ABCHBJD@@@@@@@@JBBB@@@BLCD@JABCACFIB@CEBABI@IAKG@AKAAAEAG@EAA@@CG@@CKBE@MDK@GA@AA@GDADAFABCAAHK@@AG@@@C@GFADDZ@D@@@@@XE\\ERKFABEBIDGBID@@@DKF@D@@@@@@IBA@HPB@DHD@B@B\\@BC@I@EBE@C@CAM@CB@DA@QA@T@BBHEBKJADC\\@DFBDB"],
                        "encodeOffsets": [[119698, 37891]]
                    }
                },
                {
                    "type": "Feature",
                    "id": "370124",
                    "properties": {
                        "name": "平阴县",
                        "cp": [116.455054, 36.286923],
                        "childNum": 1
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": ["@@IWSMIIQCCGAACE@ADCACAAA@CDA@E@@AA@@B@DBF@BA@K@KAGAAGCCA@@DA@CG@CBC@AAAA@C@MAEAE@AFGFC@GCCA@@@BABBBDB@@BDABGAE@E@ABA@A@ACAI@C@CIGBCEBCBECGAICK@@G@CBAB@BAAACCAEOE@CAA@@@@@@EC@ADEDED@@CA@A@BEB@B@@CFGB@@BB@@@BAJEZAJMFQJKNCHA@AGUA@CBACBAEIA@C@@A@@@AE@AAB@@ECBAGNADBH@@FLBF@ACB@@CAAACB@E@@A@CF@@@FALBBDFBFB@@LATGDKBMCIKQOMEUAE@AA@@CCC@@@@GEEIWIKAUGeAKBQ@OCIC@@AEK@@EAEAIE@@@ACA@C@ACGC@EG@BFBBBDADC@@D@DID@FBHF@@BCLABC@@@@BW@M@QLAJCLIJKBU@OCQGEMGMMKOIKEOE]CIK@QGMMBIF]RE@GTAP@\\FRFTBPCRGLMNGNKTIVILOPOTBBPNLNFJHFPPNLRJRPHJ@NFJLNPNNNDLDLHJPRRLRHVFZHVFNFRJTJNDT@\\ANBHFDLFLFHHBN@R@XED@FDBBBHDJDFHFBBDJDLHJLJJHLL@@DCDAJCAAFCBA@FBA@@@EjEB@@CCE@EC@AA@EA@CGEEBC@AA@@AAA@@CC@KNIdCXIPMLENKHGHKJILG"],
                        "encodeOffsets": [[119415, 37166]]
                    }
                },
                {
                    "type": "Feature",
                    "id": "370126",
                    "properties": {
                        "name": "商河县",
                        "cp": [117.156369, 37.310544],
                        "childNum": 1
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": ["@@@MIKMAMAOCEC@@@@ECCO\\ENCDC@@@@DCQGGIHGTCd@PDPBV@JEB@@@@@HGNO@A@@@@BGAMAIEIAC@@@@IMRSLC`OPIFCHGVWAM@G@@@@AG@MCKEM@ODOBKLWTOFE@CDK@KJ@@CF@@CC@AI@GBALC@AACD@@@@CAAAAGB@BIBCECADFAB@DE@BGAAE@CGBCDAFA@CM@EBCACCGBABC@ECCC@ABAAEAKCAENAL@H@H@@GDMCQGMEQK@@@@@@EC@@@@CAAC@@@@AOHO@@@A@AFG@A@@@@DEAKMEKDGPOEOM@@@@@@A@@@@@OIA@@@@@QIKCWISESEcAQAUEUMKIQKQOSIkEU@OF[NM@QEUM]GUEW@]C@CKC@C@C@@ACA@C@AB@@I@@DC@@B@BCC@HDB@@@B@RB@BBB@@DHDHB@A@@JB@B@DCBEBCLBB@HCL@@CD@DDBR@BB@F@TDLIB@FA@AJKFKDE@@@@@AAE@AA@ZA@CAC@@HM@ADBBABEBBFF@HHDBD@D@@BDNA@C@@DDJDBH@@HDB@BA@C@@FE@@HADA@E@BBCA@N@BC@AFDBLAB@@DCFMLKHKFQDMDAJ@B@@@DCN@@@@@DAB@BEVCNGLEP@NJJRHLHFJCPGJGHR`PNHNAJARHPJLFDB`DXDJLFTK\\DFRNPFNDNCHMdBVFNHLFLBd@HNLNPRHHHJFLDJPHPA`CXFFMHKHIFI\\CNAJCLK"],
                        "encodeOffsets": [[120134, 38400]]
                    }
                },
                {
                    "type": "Feature",
                    "id": "370181",
                    "properties": {
                        "name": "章丘市",
                        "cp": [117.54069, 36.71209],
                        "childNum": 1
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": ["@@ECACBABAHADC@AA@@OESGIMIKEIE@ONMJGNC\\ILCPGJIHUFSFSFOHGTAXFJJHFBBDBNCNIHEHDPDJ@NAD@DDDBDA@A\\F@B@DCH@@A@BCA@@BCFBBF@BCJB@@@A@CB@BBHBLB@DL@@AFAD@JABGBAB@BC@CHA@CBABB@B@HLDBB@DBBD@@@B@BD@FB@@DD@DB@DH@D@F@BDF@DCHEBCAABEA@@DE@EAACBEVGHCD@DC@ICKACGAOECM@@C@@DCBA@GBAB@DCBEECOF@JC@E^KNCJEPSHMFIDMGOEMASFWPONOJIRQNGlOVIn_PKPWDOFIJIf@DDH@H@\\ETIACECM_FK@CKGOOMG@@@@AA@E@G@@ACCIECKB@GMB@ADACG@@@@@@AEC@@EDEAE@@@@@@AAAAAA@ABODG@AB@H@LABIACBADABAGMDAD@@CC@@@@A@@A@F@DG@KAE@IHACC@@GBI@AEA@AB@@@@@ABEIAEBKA@AJGDAVDB@LA@GAAGAGAA@AAD@FGFIFIAAC@ADIDACA@EEKCCEACBAHAHCDAFBDADCHCHAF@@EBABABAAGBEBAB@JAJGDADA@C@AFQ@CI@CBI@WMQCQBQBEBAFEDK@A@CCEBOJCB@BABSDE@GDSREBEDADBDCDCAIGB@@AA@CBEA@AEEAAOBCCGBCCI@AACE@CCEA@CCAAACG@AAEEAECAG@EAAA@AAEAAC@CBO@EA@AOEIGM@E@E@AEE@@@EDQFIFA@AAEI@GDEACSOI@AGAEAA@ABAD@@AIE@@@@OKMAM@QBO@SAOAKGOSOQIOSCYDIHOPOPOPIDKBKAM@MBEBC@EAAB@JA@DHFFDLGDBJEBCBF@DABBDBJLCF@D@@FAJCDB@D@DLDBF@HGFQBADBH@HCAA@C@@BDDE@A@@DDJDBFDLLPLGJ@DKBDDDBD@B@BCD@FBHDHDAJ@BLDNHBBB@@DCNCDCFAHD@H@F@DBBB@H@TCJ@RFLLLJHBL@PEVKVETALAPATGPMPKNCP@@BAB@@@@BED@B@BF@D@B@@B@BA@C@@@AB@@A@@@@@@BAJ@@A@@B@H@@@B@B@B@@A@A@A@A@@B@D@B@@A@@BA@CB@DSZALJPLPDFDDD@HCD@FDBP@@@R@FAH@BCNGHA@A@ABCAAHF@BHC@@@AAE@CJGB@DB@@B@JFFBLAHCBA@@IO@@RABQCAACAKECAGC]QMGCAA@EAACA@GNQFMCMCSAK@K@SH@JBNBNGJk@EH@@@H@LDLHLHF@@@@@BLJJJLJJHJJJLNLLLHJHLBN@PAPCN@JCP@L@TBF@NBDBDJD\\JjJNHFFHFFFPRFBFBFBjE"],
                        "encodeOffsets": [[120153, 37964]]
                    }
                }],
            "UTF8Encoding": true
        });
    }));