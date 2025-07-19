import React from 'react';
import './RoadTrip.css';

const RoadTripScene = () => {
  return (
    <div className="mounting">
      <div className="frame">
        <div className="curtain"></div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" id="Mountains">
      <g>
        <path class="dark-mountains" d="M608.94,682,649.4,372.4c1.14-8.72,12.71-13.94,20-9L935.58,544.2c6.84,4.65,4.56,14.86-4.12,18.51L624.8,691.46C616.42,695,607.91,689.88,608.94,682Z"/>
        <path class="mountain" d="M724.88,615.75,981.31,204.63c7.22-11.57,26.93-11.49,34,.15l259.52,426.73c6.67,11-3.12,23.92-17.74,23.48L741.15,639.37C727.05,639,718.32,626.27,724.88,615.75Z"/>
        <path class="mountain" d="M1469,1001c0,265.1-185.9,439-451,439s-509-173.9-509-439S723.9,521,989,521,1469,735.9,1469,1001Z"/>
        <path class="dark-mountains" d="M517,947.55,420.75,796.31a93.8,93.8,0,0,1-14.23-40.9c-1.67-16.34-2.17-34.62,1.24-36.33l218-108.86C631.32,607.43,717.9,672,715,681L529.45,940.35C526.66,949,520,952.86,517,947.55Z"/>
        <path class="mountain" d="M1351.94,734,1605,980.68c7.12,6.94,7.84,26.64,1.24,34l-242.13,269.19c-6.22,6.92-14.26-2.56-14.57-17.18l-10.94-515.92C1338.31,736.65,1345.47,727.63,1351.94,734Z"/>
        <path class="dark-mountains" d="M1453.84,1086.48l76.65,326.61c2.16,9.19-7.83,21.46-17.23,21.17l-344.81-10.76c-8.85-.27-10.41-11.63-2.81-20.58l268.15-315.85C1441.12,1078.44,1451.88,1078.12,1453.84,1086.48Z"/>
        <path class="mountain" d="M1037.12,1392.11l-339.35,98.81c-9.55,2.78-27-6.29-30.19-15.65L543.52,1269a283.07,283.07,0,0,1-19.42-252.87C543.87,967.67,563.33,926,569,929l460.06,443.23C1041.47,1378.91,1045.8,1389.58,1037.12,1392.11Z"/>
      </g>
    </svg>
    <svg id="Hills" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
      <g>
        <path class="hills" d="M1475.67,995c0,181.39-96.21,384.37-244.67,466-68.51,37.67-151.62,14-235.33,14C730.57,1475,481,1252.1,481,987c0-148.85,102.66-260,209-348,83.06-68.76,189.42-124,305.67-124C1260.76,515,1475.67,729.9,1475.67,995Z"/>
        <polygon class="hills" points="502.3 933.97 441.42 890.5 516 879.33 502.3 933.97"/>
        <rect class="hills" x="492.63" y="855.14" width="9.93" height="31" transform="translate(-499.29 979.44) rotate(-66.48)"/>
        <polygon class="hills" points="483.51 887.97 442.23 849 499.45 848.31 483.51 887.97"/>
        <rect class="hills" x="506.53" y="838.75" width="7.92" height="23.72" transform="translate(-476.99 755.6) rotate(-53.53)"/>
        <polygon class="hills" points="496.61 861.68 472.88 825.05 516.11 833.73 496.61 861.68"/>
        <rect class="hills" x="1237.27" y="1450.14" width="9.93" height="31" transform="translate(2934.86 2374.63) rotate(158.52)"/>
        <polygon class="hills" points="1264.45 1463.35 1266.08 1520.1 1225.13 1480.12 1264.45 1463.35"/></g>
    </svg>
    <svg id="Electricity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
      <g>
        <path class="power-line" d="M975.5,1684.5S711,1489,451.5,1428.5"/>
        <path class="power-line" d="M974.5,1670.5s-250.55-202-517.74-254.15"/>
        <path class="power-line" d="M1551.5,1396.5s-318.56,113.28-536,277"/>
        <path class="power-line" d="M1561.5,1410.5s-321.69,125.35-540.25,277.73"/>
        <path class="power-line" d="M417.5,1393.5s56.32-406.47,20-807"/>
        <path class="power-line" d="M428.5,1384.5s66.16-376.7,19-786"/>
        <circle class="ground" cx="990.67" cy="995" r="480"/>
        <rect class="trunk" x="992.92" y="1442" width="12.08" height="263" rx="6.04" ry="6.04" transform="translate(1997.92 3147) rotate(180)"/>
        <rect class="trunk" x="971" y="1682.95" width="54" height="6.05" rx="2.57" ry="2.57" transform="translate(1996 3371.95) rotate(180)"/>
        <rect class="trunk" x="971" y="1669" width="54" height="6.05" rx="3.03" ry="3.03" transform="translate(1996 3344.05) rotate(180)"/>
        <rect class="trunk" x="1478.53" y="1190.22" width="12.08" height="263" rx="6.04" ry="6.04" transform="translate(3427.58 902.68) rotate(126.15)"/>
        <rect class="trunk" x="1547.82" y="1385.82" width="54" height="6.05" rx="2.57" ry="2.57" transform="translate(3625.27 936.52) rotate(126.15)"/>
        <rect class="trunk" x="1536.56" y="1377.6" width="54" height="6.05" rx="3.03" ry="3.03" transform="translate(3600.72 932.54) rotate(126.15)"/>
        <rect class="trunk" x="529.32" y="514.72" width="12.08" height="263" rx="6.04" ry="6.04" transform="translate(-303.22 614.67) rotate(-48.21)"/>
        <rect class="trunk" x="425.15" y="567.51" width="54" height="6.05" rx="2.57" ry="2.57" transform="translate(-274.55 527.39) rotate(-48.21)"/>
        <rect class="trunk" x="435.54" y="576.81" width="54" height="6.05" rx="3.03" ry="3.03" transform="translate(-278.01 538.24) rotate(-48.21)"/>
        <rect class="trunk" x="509.63" y="1201.69" width="12.08" height="263" rx="6.04" ry="6.04" transform="translate(-84.97 2630.32) rotate(-134.01)"/>
        <rect class="trunk" x="407.1" y="1407.62" width="54" height="6.05" rx="2.57" ry="2.57" transform="translate(-278.9 2702.92) rotate(-134.01)"/>
        <rect class="trunk" x="417.14" y="1397.93" width="54" height="6.05" rx="3.03" ry="3.03" transform="translate(-254.93 2693.71) rotate(-134.01)"/>
        <path class="power-line" d="M1004.5,332.5s199.5,118.5,463,158"/>
        <path class="power-line" d="M1002.5,346.5s188,127,458.51,157.5"/>
        <rect class="trunk" x="973" y="315" width="12.08" height="263" rx="6.04" ry="6.04"/>
        <rect class="trunk" x="953" y="331" width="54" height="6.05" rx="2.57" ry="2.57"/>
        <rect class="trunk" x="953" y="344.95" width="54" height="6.05" rx="3.03" ry="3.03"/>
        <rect class="trunk" x="1399.28" y="456.32" width="12.08" height="263" rx="6.04" ry="6.04" transform="translate(827.26 -821.54) rotate(45)"/>
        <rect class="trunk" x="1458.53" y="505.94" width="54" height="6.05" rx="2.57" ry="2.57" transform="translate(795 -901.36) rotate(45)"/>
        <rect class="trunk" x="1448.67" y="515.81" width="54" height="6.05" rx="3.03" ry="3.03" transform="translate(799.08 -891.49) rotate(45)"/>
        <path class="power-line" d="M465.89,553.33S727.23,476.19,953.5,335.5"/><path class="power-line" d="M473.44,565.29S732.73,502.59,958.5,350.5"/>
        <path class="power-line" d="M1492.5,533.5s-43.48,384.25,87,825"/><path class="power-line" d="M1505,525.62s-31.37,411.15,86.54,843.88"/>
      </g>
    </svg>

    <svg id="Road" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
      <g>
        <rect class="trunk" x="471.95" y="990.82" width="22.8" height="71.2" transform="translate(-549.35 1496.21) rotate(-89.25)"/>
        <polygon class="tree" points="468.92 1075.65 346.86 1029.81 467.43 977.49 468.92 1075.65"/>
        <rect class="trunk" x="855.02" y="503.97" width="18" height="62" transform="translate(-80.82 160.8) rotate(-10.16)"/>
        <polygon class="tree" points="823.51 530.04 832.48 382.14 899.18 513.15 823.51 530.04"/>
        <circle class="ground" cx="995.67" cy="995" r="480"/>
        <circle class="road" cx="999" cy="996" r="441.5"/>
        <circle class="road-lines" cx="995.67" cy="994" r="444"/>
        <rect class="trunk" x="1231.11" y="531.41" width="14.94" height="51.46" transform="translate(426.07 -531.12) rotate(29.04)"/>
        <polygon class="tree" points="1215.11 532.73 1298.46 442.28 1272.64 561.55 1215.11 532.73"/>
        <rect class="trunk" x="1495.04" y="984.33" width="22.8" height="78.55" transform="translate(2549.8 -469.23) rotate(90.75)"/>
        <polygon class="tree" points="1522.3 974.4 1657.01 1020.4 1524.08 1072.56 1522.3 974.4"/>
        <rect class="trunk" x="684.75" y="1373.72" width="22.8" height="71.2" transform="translate(320.54 2935.68) rotate(-139.89)"/>
        <polygon class="tree" points="725.06 1451.7 612.21 1517.01 648.22 1390.61 725.06 1451.7"/>
        <rect class="trunk" x="1311.81" y="1349.92" width="22.8" height="71.2" transform="translate(3238.34 1439.19) rotate(135.29)"/>
        <polygon class="tree" points="1368.02 1360.55 1422.89 1478.83 1300.25 1431.57 1368.02 1360.55"/>
      </g>
    </svg>

    <svg id="Car" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
      <defs>
        <linearGradient id="linear-gradient" x1="0" y1="0" x2="1" y2="1" ><stop offset="0.51" stop-color="#b7b6bb"/><stop offset="0.53" stop-color="#959296"/></linearGradient>
      </defs>
      <g>
        <path class="car" d="M1064.06,507.08h-11.32a10.61,10.61,0,0,1-10.61-10.61h0C1040,476,1019.38,471,1008.88,471l-79.24,2.12C919.13,473.12,907,486,907,496.47v36.08a19.16,19.16,0,0,0,19.1,19.1h107.54a8.3,8.3,0,0,0,2.3-.32,11.45,11.45,0,0,1,3.14-.38h25c10.51,0,10.61-8.6,10.61-19.11v-5.66C1074.67,515.68,1074.57,507.08,1064.06,507.08Z"/>
        <path class="wheels" d="M946.62,561.5a18.79,18.79,0,1,1,18.43-18.79A18.64,18.64,0,0,1,946.62,561.5Z"/>
        <path class="snow" d="M946.62,527.43a15.29,15.29,0,1,1-14.93,15.28,15.13,15.13,0,0,1,14.93-15.28m0-7a22.29,22.29,0,1,0,21.93,22.28,22.11,22.11,0,0,0-21.93-22.28Z"/>
        <path class="wheels" d="M1022,558a17,17,0,1,1,17.37-17A17.22,17.22,0,0,1,1022,558Z"/>
        <path class="snow" d="M1022,527.38a13.54,13.54,0,1,1-13.87,13.54A13.73,13.73,0,0,1,1022,527.38m0-7a20.54,20.54,0,1,0,20.87,20.54A20.7,20.7,0,0,0,1022,520.38Z"/>
        <path class="hills" d="M945,478h-6.29A25.71,25.71,0,0,0,913,503.71V512l32-.26Z"/>
        <path class="hills" d="M1002,511.28l35-.28-2-11c0-16.07-15-22-31.1-22H1002Z"/>
        <polygon class="hills" points="953 511.68 994 511.35 994 478 953 478 953 511.68"/>
      </g>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" id="Foreground">
        <g>
          <circle class="light-tree" cx="1399.05" cy="659.01" r="64.5"/>
          <rect class="trunk" x="1327.48" y="672.76" width="18.94" height="96.76" transform="translate(905.35 -735.29) rotate(45.15)"/>
          <circle class="light-tree" cx="997" cy="997" r="396"/><circle class="light-tree" cx="597.5" cy="1317.5" r="64.5"/>
          <rect class="trunk" x="650.14" y="1206.99" width="18.94" height="96.76" transform="translate(234.76 2608.34) rotate(-134.85)"/>
          <circle class="light-tree" cx="620.5" cy="664.5" r="64.5"/>
          <rect class="trunk" x="673.17" y="678.23" width="18.94" height="96.76" transform="translate(-313.76 692.88) rotate(-44.85)"/>
          <circle class="light-tree" cx="1111.8" cy="1497.89" r="64.5"/>
          <rect class="trunk" x="1080.45" y="1364.43" width="18.94" height="96.76" transform="translate(2494.33 2513.51) rotate(165.74)"/>
          <rect class="trunk" x="1381.66" y="810.86" width="35.03" height="120.67" transform="translate(1931.37 -688.76) rotate(76.93)"/>
          <polygon class="tree" points="1404.76 791.98 1622.6 811.15 1443.46 937.75 1404.76 791.98"/>
          <path class="light-tree" d="M719,715s78-96,97-114,165-56,243,16C1081.09,637.39,742,714,719,715Z"/>
          <path class="light-tree" d="M1363,1141.64s-43,103.12-53.44,127.12-167,100.51-204.63,93.74C1075.32,1357.18,1342.21,1151.57,1363,1141.64Z"/>
        </g>
    </svg>
      </div>

        <h1>- Road Trip to Uvurkhangai-</h1>
    </div>
  );
};

export default RoadTripScene;
