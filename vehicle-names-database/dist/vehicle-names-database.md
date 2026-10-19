# 多语言汽车车名资料库(Multilingual Vehicle Name Database)

- **版本**:1.2.0 | **更新日期**:2026-10-19
- **Schema 版本**:1.1.0
- **覆盖语言**:`en` 英文 / `zh-CN` 简体中文 / `zh-TW` 繁体中文 / `ja` 日语
- **条目统计**:品牌 164 · 车型 3032 · 跨市场异名 24 · 术语 72
- **状态标记**:`verified` = 已核实;`pending` = 待复核
- **数据源**:本文件由 `scripts/build.py` 从 `data/` 生成,请勿直接编辑。

---

# Part 1 汽车级别分类(vehicle_classes)

| id | en | zh-CN | zh-TW | ja | 标准/说明 |
|---|---|---|---|---|---|
| class:cn:a00 | Microcar / City Car | 微型车(A00级) | 微型車 | マイクロカー | 轴距约2.0-2.3m,车长<4m,排量≤1.0L |
| class:cn:a0 | Subcompact / Supermini | 小型车(A0级) | 小型車 | スーパーミニ/コンパクト | 轴距约2.3-2.5m,车长3.7-4.3m,排量1.0-1.5L |
| class:cn:a | Compact | 紧凑型车(A级) | 緊湊型車 | コンパクトカー | 轴距约2.5-2.7m,车长4.2-4.6m,排量1.3-2.0L |
| class:cn:b | Mid-size | 中型车(B级) | 中型車 | ミッドサイズ | 轴距约2.7-2.9m,车长4.5-4.9m,排量1.8-2.5L |
| class:cn:c | Upper-mid / Executive | 中大型车(C级) | 中大型車 | アッパーミッド | 轴距约2.8-3.1m,车长4.8-5.05m,排量2.0-3.0L |
| class:cn:d | Large / Full-size | 大型豪华车(D级) | 大型豪華車 | フルサイズ/ラグジュアリー | 轴距>3.0m,车长>5.0m,排量>3.0L |

| id | en | zh-CN | zh-TW | ja | 说明 |
|---|---|---|---|---|---|
| class:cn:saloon | Saloon | 普通乘用车 | 普通乘用車 | セダン | 三厢轿车:封闭车身、≥4门、≥4侧窗 |
| class:cn:convertible-saloon | Convertible Saloon | 活顶乘用车 | 活頂乘用車 | カブリオレ(セダン型) | 可开启顶盖、保留侧窗 |
| class:cn:pullman | Pullman Saloon | 高级乘用车 | 高級乘用車 | プルマンサルーン | 礼宾级,通常≥6侧窗 |
| class:cn:small-saloon | Small Saloon | 小型乘用车 | 小型乘用車 | スモールセダン | 车长≤4m |
| class:cn:convertible | Convertible | 敞篷车 | 敞篷車 | オープンカー/コンバーチブル | 可折叠/可拆卸顶篷 |
| class:cn:hatchback | Hatchback | 仓背乘用车 | 倉背乘用車 | ハッチバック | 两厢车,尾部整体上掀 |
| class:cn:wagon | Station Wagon | 旅行车 | 旅行車 | ステーションワゴン | 车顶向后延伸 |
| class:cn:mpv | Multi-purpose Vehicle | 多用途乘用车 | 多用途乘用車 | ミニバン/MPV | 即 MPV,7座以上混合用途 |
| class:cn:short-base | Short-base Saloon | 短头乘用车 | 短頭乘用車 | ショートノーズ | 发动机舱短于车室一半 |
| class:cn:offroad | Off-road Passenger Car | 越野乘用车 | 越野乘用車 | オフロード車 | 非公路设计、四驱(即SUV/越野车) |
| class:cn:special | Special Purpose Passenger Car | 专用乘用车 | 專用乘用車 | 特種乘用車 | 旅居车、救护车等 |
| class:cn:m1 | M1 (GB/T 15089) | M1类(≤9座乘用车) | M1類 | M1クラス | 对应UNECE体系,工信部准入实际使用的分类 |

| id | 段 | en | zh-CN | zh-TW | ja | 参考长度 | 代表车型 |
|---|---|---|---|---|---|---|---|
| class:eu:a | A | A-segment / Mini cars | 微型车/城市车 | 微型車/城市車 | Aセグメント(シティカー) | 约2.7-3.7m | Fiat 500、丰田Aygo、大众up! |
| class:eu:b | B | B-segment / Superminis | 小型车 | 小型車 | Bセグメント(スーパーミニ) | 约3.8-4.2m | 大众Polo、福特Fiesta、本田Jazz |
| class:eu:c | C | C-segment / Small family | 紧凑型/家用车 | 緊湊型/家庭用車 | Cセグメント(コンパクト) | 约4.2-4.6m | 大众Golf、丰田Corolla、福特Focus |
| class:eu:d | D | D-segment / Large family | 中型车 | 中型車 | Dセグメント(ミドル) | 约4.6-4.9m | 大众Passat、丰田Camry、宝马3系 |
| class:eu:e | E | E-segment / Executive | 行政级 | 行政級 | Eセグメント(エグゼクティブ) | 约4.8-5.0m | 宝马5系、奔驰E级、奥迪A6 |
| class:eu:f | F | F-segment / Luxury | 豪华车 | 豪華車 | Fセグメント(ラグジュアリー) | >5.0m | 奔驰S级、宝马7系、奥迪A8、宾利 |
| class:eu:j | J | J-segment / Sport utility | 运动型多用途车(SUV) | 運動型多用途車 | Jセグメント(SUV) |  | SUV与越野车 |
| class:eu:m | M | M-segment / Multi-purpose | 多用途车(MPV) | 多用途車 | Mセグメント(MPV) |  | 厢式多功能车 |
| class:eu:s | S | S-segment / Sports cars | 跑车 | 跑車 | Sセグメント(スポーツカー) |  | 轿跑/跑车 |

| id | en | zh-CN | zh-TW | ja | 判定标准 | 牌照 |
|---|---|---|---|---|---|---|
| class:jp:kei | Kei car / Light motor vehicle | 轻自动车(K-car) | 輕自動車 | 軽自動車 | 全长≤3,400mm;全宽≤1,480mm;全高≤2,000mm;排量≤660cc;定员≤4;载货≤350kg | 黄底黑字(家用) |
| class:jp:microcar | Microcar (≤49cc) | 超微型车 | 微型車 | ミニカー | 排量≤49cc | 淡蓝色 |
| class:jp:small | Small-size motor vehicle | 小型自动车 | 小型自動車 | 小型自動車 | 全长≤4,700mm;全宽≤1,700mm;全高≤2,000mm;排量≤2,000cc | 白底绿字(5ナンバー) |
| class:jp:normal | Normal-size motor vehicle | 普通自动车 | 普通自動車 | 普通自動車 | 超出小型自动车任一上限;乘用车私用另限全长≤6m、宽≤2m | 白底绿字(3ナンバー) |

| id | en | zh-CN | zh-TW | ja | 判定标准 |
|---|---|---|---|---|---|
| class:us:minicompact | Minicompact | 超小型 | 超小型 | ミニコンパクト | 内部容积<85 ft³(约2,405L) |
| class:us:subcompact | Subcompact | 小型 | 小型 | サブコンパクト | 85-99.9 ft³(2,405-2,830L) |
| class:us:compact | Compact | 紧凑型 | 緊湊型 | コンパクト | 100-109.9 ft³(2,830-3,110L) |
| class:us:midsize | Mid-size | 中型 | 中型 | ミッドサイズ | 110-119.9 ft³(3,115-3,395L) |
| class:us:large | Large / Full-size | 大型/全尺寸 | 大型/全尺寸 | ラージ(フルサイズ) | ≥120 ft³(3,400L) |
| class:us:two-seater | Two-seater | 双座车 | 雙座車 | ツーシーター | 仅设2座 |
| class:us:minivan | Minivan | 多功能休旅车 | 多功能休旅車 | ミニバン | GVWR<8,500 lb |
| class:us:small-suv | Small SUV | 小型SUV | 小型SUV | 小型SUV | GVWR<6,000 lb |
| class:us:standard-suv | Standard SUV | 标准/大型SUV | 標準/大型SUV | 標準SUV | GVWR 6,000-10,000 lb |
| class:us:pickup | Pickup truck | 皮卡 | 皮卡/貨卡 | ピックアップトラック | GVWR<6,000 lb(小型)/6,000-8,500 lb(标准) |

| id | en | zh-CN | zh-TW | ja | 注释 |
|---|---|---|---|---|---|
| body:sedan | Sedan / Saloon | 轿车(三厢) | 轎車/房車 | セダン | 独立后备厢 |
| body:hatchback | Hatchback | 掀背车/两厢车 | 掀背車/兩廂車 | ハッチバック | 尾门一体上掀 |
| body:wagon | Station Wagon / Estate | 旅行车 | 旅行車 | ステーションワゴン | 车顶延伸至尾 |
| body:suv | SUV (Sport Utility Vehicle) | 运动型多用途汽车 | 運動型多用途車/休旅車 | スポーツ用多目的車(SUV) | 多功能/越野 |
| body:crossover | Crossover | 跨界车 | 跨界休旅車 | クロスオーバー | 轿车底盘SUV化 |
| body:mpv | MPV | 多用途汽车/商务车 | 多用途車/廂式休旅車 | ミニバン/MPV | 大空间多功能 |
| body:minivan | Minivan | 家用MPV | 廂型休旅車 | ミニバン | 美式家用厢式车 |
| body:van | Van | 厢式货车/面包车 | 廂型車/廂式貨車 | バン/ワンボックスカー | 货运/多用途 |
| body:kei-truck | Kei Truck | 轻卡 | 輕型貨車 | 軽トラック | 日本K-car货车 |
| body:coupe | Coupe | 轿跑车 | 轎跑車 | クーペ | 双门低车顶 |
| body:convertible | Convertible / Cabriolet | 敞篷车 | 敞篷車 | オープンカー/コンバーチブル | 可折叠顶篷 |
| body:roadster | Roadster | 敞篷跑车(双座) | 敞篷跑車 | ロードスター | 双座软顶 |
| body:sports | Sports Car | 跑车 | 跑車 | スポーツカー | 运动化车型 |
| body:supercar | Supercar | 超级跑车 | 超級跑車 | スーパーカー | 顶级性能 |
| body:pickup | Pickup Truck | 皮卡 | 皮卡/貨卡 | ピックアップトラック | 货斗式 |
| body:limousine | Limousine | 加长豪华轿车 | 禮車/加長型轎車 | リムジン | 加长行政车 |
| body:rv | Motor Caravan / RV | 旅居车/房车 | 露營車/房車 | キャンピングカー/モーターホーム | 住宿型车辆 |
| body:city-car | City Car | 城市微型车 | 城市微型車 | シティカー | A段城市代步车 |
| body:quadricycle | Quadricycle | 四轮微型车 | 四輪微型車 | クワドリサイクル | 欧盟L6/L7类 |

| id | en | zh-CN | zh-TW | ja | 缩写 | 注释 |
|---|---|---|---|---|---|---|
| pt:hev | Hybrid Electric Vehicle | 混合动力汽车 | 油電混合車 | ハイブリッド車 | HEV | 内燃机+电机,不可外接充电 |
| pt:phev | Plug-in Hybrid Electric Vehicle | 插电式混合动力汽车 | 插電式油電混合車 | プラグイン・ハイブリッド車 | PHEV | 可外接充电 |
| pt:erev | Extended-Range Electric Vehicle | 增程式电动汽车 | 增程式電動車 | レンジエクステンダー車 | EREV | 发动机仅发电 |
| pt:bev | Battery Electric Vehicle | 纯电动汽车 | 純電動車 | 純電気自動車 | BEV | 纯电驱动 |
| pt:fcev | Fuel Cell Electric Vehicle | 燃料电池汽车 | 燃料電池電動車 | 燃料電池自動車 | FCEV/FCV | 氢燃料电池 |
| pt:ice | Internal Combustion Engine | 内燃机汽车 | 內燃機汽車 | 内燃機関自動車 | ICE | 燃油车统称 |

---

# Part 2 专业术语(glossary)

| id | en | zh-CN | zh-TW | ja | 缩写 | 注释 |
|---|---|---|---|---|---|---|
| glossary:powertrain:01 | Engine | 发动机(引擎) | 引擎 | エンジン |  | 将燃料化学能转化为机械能的动力装置 |
| glossary:powertrain:02 | Turbocharger | 涡轮增压器 | 渦輪增壓器 | ターボチャージャー | T/C | 废气驱动涡轮压缩进气 |
| glossary:powertrain:03 | Supercharger | 机械增压器 | 機械增壓器 | スーパーチャージャー | S/C | 曲轴皮带驱动压气机,无涡轮迟滞 |
| glossary:powertrain:04 | Four-wheel drive | 四轮驱动 | 四輪驅動 | 四輪駆動 | 4WD | 动力同时传递至四轮 |
| glossary:powertrain:05 | All-wheel drive | 全时四驱/全轮驱动 | 全時四輪驅動 | 全輪駆動 | AWD | 常时四轮输出动力 |
| glossary:powertrain:06 | Fuel injection | 燃油喷射 | 燃油噴射 | 燃料噴射装置 | FI/EFI | 燃油雾化喷入气缸 |
| glossary:powertrain:07 | Cylinder | 气缸 | 汽缸 | シリンダー |  | 活塞往复运动的燃烧室腔体 |
| glossary:powertrain:08 | Displacement | 排量(排气量) | 排氣量 | 排気量 |  | 活塞扫过的气缸容积总和 |
| glossary:powertrain:09 | Horsepower | 马力 | 馬力 | 馬力(パワー) | hp/PS | 功率单位 |
| glossary:powertrain:10 | Torque | 扭矩(转矩) | 扭力 | トルク |  | 使物体转动的力矩 |
| glossary:transmission:01 | Transmission / Gearbox | 变速箱(变速器) | 變速箱 | トランスミッション(変速機) | AT/MT | 改变传动比与扭矩的装置 |
| glossary:transmission:02 | Automatic transmission | 自动挡/自动变速箱 | 自排變速箱 | オートマチック・トランスミッション | AT | 台湾俗称「自排」 |
| glossary:transmission:03 | Manual transmission | 手动挡/手动变速箱 | 手排變速箱 | マニュアル・トランスミッション | MT | 手动换挡 |
| glossary:transmission:04 | Continuously variable transmission | 无级变速器 | 無段變速箱 | 無段変速機 | CVT | 锥轮+钢带无级变速 |
| glossary:transmission:05 | Dual-clutch transmission | 双离合变速器 | 雙離合器變速箱 | デュアルクラッチ・トランスミッション | DCT/DSG | 两组离合交替接合 |
| glossary:transmission:06 | Clutch | 离合器 | 離合器 | クラッチ |  | 连接/切断动力传递 |
| glossary:transmission:07 | Differential | 差速器 | 差速器 | ディファレンシャル(デフ) | Diff | 允许左右轮转速差 |
| glossary:transmission:08 | Gear | 齿轮/挡位 | 檔位 | ギア(変速ギヤ) |  | 啮合元件或行驶挡位 |
| glossary:chassis:01 | Chassis | 底盘 | 底盤 | シャシー(シャシ) |  | 承载车身并连接各系统的骨架 |
| glossary:chassis:02 | Suspension | 悬架(悬挂系统) | 懸吊系統 | サスペンション(懸架装置) |  | 吸收冲击、保持车轮贴地 |
| glossary:chassis:03 | Independent suspension | 独立悬架 | 獨立懸吊 | 独立懸架 |  | 各车轮独立运动 |
| glossary:chassis:04 | Shock absorber | 减震器 | 避震器 | ショックアブソーバー(ダンパー) |  | 消耗弹簧振动能量 |
| glossary:chassis:05 | Wheel alignment | 四轮定位 | 四輪定位 | ホイールアライメント |  | 调整车轮角度保证直线行驶 |
| glossary:chassis:06 | Steering system | 转向系统 | 轉向系統 | ステアリング(操舵装置) |  | 传递转向输入 |
| glossary:chassis:07 | Frame / Body frame | 车架 | 車架 | フレーム |  | 承重骨架(越野车/商用车常见) |
| glossary:braking:01 | Brake | 制动器(刹车) | 煞車 | ブレーキ |  | 减速/停车装置总称 |
| glossary:braking:02 | Anti-lock Braking System | 防抱死制动系统 | 防鎖死煞車系統 | アンチロック・ブレーキ・システム | ABS | 防止急刹车轮抱死,保持转向 |
| glossary:braking:03 | Electronic Stability Control | 车身电子稳定系统 | 車身動態穩定系統(丰田称VSC) | 横滑り防止装置 | ESP/ESC/VSC | 抑制侧滑甩尾;各厂命名不同(丰田VSC、本田VSA、宝马DSC) |
| glossary:braking:04 | Electronic Brake-force Distribution | 电子制动力分配 | 電子煞車力道分配系統 | 電子制動力配分システム | EBD | 按载荷分配前后制动力 |
| glossary:braking:05 | Electronic Parking Brake | 电子手刹(电子驻车) | 電子手煞車 | 電動パーキングブレーキ | EPB | 电机驻车替代机械手刹 |
| glossary:braking:06 | Drum brake | 鼓式制动器 | 鼓式煞車 | ドラムブレーキ |  | 制动蹄顶压旋转制动鼓 |
| glossary:braking:07 | Disc brake | 盘式制动器(碟刹) | 碟式煞車 | ディスクブレーキ |  | 卡钳夹紧制动盘 |
| glossary:safety:01 | Tire Pressure Monitoring System | 胎压监测系统 | 胎壓偵測系統 | タイヤ空気圧監視システム | TPMS | 实时监测胎压报警;日文别名タイヤ空気圧警報装置 |
| glossary:safety:02 | Airbag (Supplemental Restraint System) | 安全气囊 | 安全氣囊 | エアバッグ | SRS | 碰撞时快速充气缓冲 |
| glossary:safety:03 | Backup / Rearview camera | 倒车影像 | 倒車顯影(倒車攝影) | バックカメラ(後方モニター) |  | 车后画面摄像头 |
| glossary:safety:04 | Parking sensor | 倒车雷达 | 倒車雷達 | パーキングセンサー(バックソナー) | PDC | 超声波探测障碍物 |
| glossary:safety:05 | Autonomous Emergency Braking | 自动紧急制动 | 自動緊急煞車 | 衝突被害軽減ブレーキ | AEB | 碰撞风险时自动制动 |
| glossary:safety:06 | Blind Spot Monitoring | 盲点监测 | 盲點偵測系統(車側盲點警示) | ブラインドスポット・モニター | BSM/BSD | 变道盲区警示 |
| glossary:safety:07 | Head-Up Display | 抬头显示 | 抬頭顯示器 | ヘッドアップ・ディスプレイ | HUD | 信息投射至视线前方 |
| glossary:safety:08 | Around View Monitor | 360全景影像 | 環景影像(環景攝影) | 全方位モニター(マルチビューカメラ) | AVM | 俯视全景辅助泊车 |
| glossary:driver_assist:01 | Adaptive Cruise Control | 自适应巡航 | 主動式車距維持定速系統(全速域跟車) | アダプティブ・クルーズ・コントロール | ACC | 自动跟车保持车距 |
| glossary:driver_assist:02 | Lane Keeping Assist | 车道保持辅助 | 車道維持輔助系統 | レーンキープ・アシスト | LKA | 主动纠偏保持车道中央 |
| glossary:driver_assist:03 | Lane Departure Warning | 车道偏离预警 | 車道偏離警示 | 車線逸脱警報 | LDW | 偏离车道时警告 |
| glossary:driver_assist:04 | Lane Tracing Assist (Toyota) | 车道循迹辅助 | 車道循跡輔助系統 | レーントレーシング・アシスト | LTA | 结合ACC车道居中循迹 |
| glossary:driver_assist:05 | Pre-Collision System (Toyota) | 预碰撞安全系统 | 預警式防護系統 | プリクラッシュ・セーフティ | PCS | 预警并自动制动 |
| glossary:driver_assist:06 | Automatic Parking Assist | 自动泊车辅助 | 自動停車輔助 | 自動駐車(インテリジェントパーキングアシスト) | APA | 系统控制完成泊车 |
| glossary:new_energy:01 | Electric Vehicle | 电动车 | 電動車 | 電気自動車 | EV | 电机驱动车辆统称 |
| glossary:new_energy:02 | Hybrid Electric Vehicle | 混合动力汽车 | 油電混合車 | ハイブリッド車 | HEV | 不可外接充电 |
| glossary:new_energy:03 | Plug-in Hybrid Electric Vehicle | 插电式混合动力汽车 | 插電式油電混合車 | プラグイン・ハイブリッド車 | PHEV | 可外接充电 |
| glossary:new_energy:04 | Battery Electric Vehicle | 纯电动汽车 | 純電動車 | 純電気自動車 | BEV | 纯电零排放 |
| glossary:new_energy:05 | Fuel Cell Electric Vehicle | 燃料电池汽车 | 燃料電池電動車 | 燃料電池自動車 | FCEV/FCV | 氢燃料电池发电 |
| glossary:new_energy:06 | Charging station / pile | 充电桩(充电站) | 充電樁 | 充電スタンド(充電設備) |  | 为动力电池充电 |
| glossary:body:01 | Body | 车身 | 車身 | ボディ |  | 外壳与乘员舱结构总成 |
| glossary:body:02 | Roof | 车顶 | 車頂 | ルーフ |  | 车身顶部覆盖件 |
| glossary:body:03 | Sunroof / Moonroof | 天窗 | 天窗(電動天窗) | サンルーフ |  | 可开启玻璃窗 |
| glossary:body:04 | Door | 车门 | 車門 | ドア |  | 上下车侧开结构 |
| glossary:body:05 | SUV | 运动型多用途车 | 休旅車(運動型休旅車) | SUV(スポーツ用多目的車) | SUV | 高底盘大空间 |
| glossary:body:06 | Hatchback | 掀背车 | 掀背車 | ハッチバック |  | 尾部整体上掀 |
| glossary:body:07 | Sedan | 三厢轿车 | 房車(轎車) | セダン |  | 三厢结构轿车 |
| glossary:lighting_comfort:01 | LED headlight | LED大灯 | LED頭燈 | LEDヘッドライト | LED | 发光二极管前照灯 |
| glossary:lighting_comfort:02 | Daytime Running Light | 日间行车灯 | 晝行燈(日行燈) | デイタイム・ランニング・ランプ | DRL | 白天自动点亮提升被见度 |
| glossary:lighting_comfort:03 | Automatic High Beam | 自动远光灯 | 智慧型遠光燈自動切換系統 | オートハイビーム | AHB | 自动切换远近光 |
| glossary:lighting_comfort:04 | Air conditioning | 空调 | 冷氣空調(空調) | エアコン(クーラー) | A/C | 调节温湿度空气 |
| glossary:lighting_comfort:05 | Climate control | 自动恒温空调 | 恆溫空調 | オートエアコン |  | 自动维持设定温度 |
| glossary:tire_wheel:01 | Tire | 轮胎 | 輪胎 | タイヤ |  | 与路面接触的橡胶部件 |
| glossary:tire_wheel:02 | Wheel / Rim | 轮毂(轮圈) | 輪圈(鋁圈) | ホイール(アルミホイール) |  | 支撑轮胎的金属部件 |
| glossary:tire_wheel:03 | Spare tire | 备胎 | 備胎 | スペアタイヤ(応急用スペアユニット) |  | 应急备用轮胎 |
| glossary:tire_wheel:04 | Tire pressure | 胎压 | 胎壓 | タイヤ空気圧 |  | 轮胎内部充气压力 |
| glossary:tire_wheel:05 | Run-flat tire | 缺气保用轮胎(防爆胎) | 失壓續跑胎 | ランフラット・タイヤ | RFT | 泄气后低速续行 |
| glossary:tire_wheel:06 | Snow / Winter tire | 雪地胎(冬季轮胎) | 雪地輪胎 | スタッドレスタイヤ |  | 低温专用轮胎 |
| glossary:tire_wheel:07 | Wheel hub | 轮毂(轮辋中心) | 輪轂 | ハブ |  | 连接车轴与轮辐 |
| glossary:tire_wheel:08 | Tire valve | 气门嘴 | 氣嘴 | バルブ(タイヤバルブ) |  | 充气保压阀门 |

---

# Part 3 品牌(brands)

| id | 国家 | en | zh-CN | zh-TW | ja | 注释 |
|---|---|---|---|---|---|---|
| brand:jp:toyota | 日本 | Toyota | 丰田 | 豐田 | トヨタ | 源自创始人家族姓Toyoda,取八画吉利改为トヨタ |
| brand:jp:nissan | 日本 | Nissan | 日产 | 日產 | 日産 | 「日本产业」缩写,汉字「日産」为官方表记 |
| brand:jp:honda | 日本 | Honda | 本田 | 本田 | ホンダ | 创始人本田宗一郎之姓 |
| brand:jp:mazda | 日本 | Mazda | 马自达 | 馬自達 | マツダ | 一说拜火教主神Ahura Mazda,一说「松田」谐音;香港另译「万事得」 |
| brand:jp:subaru | 日本 | Subaru | 斯巴鲁 | 速霸陸 | スバル | 即「昴」(昴宿星团),车标六星;香港旧称「富士」 |
| brand:jp:mitsubishi | 日本 | Mitsubishi | 三菱 | 三菱 | 三菱 | 三个菱形,源自岩崎家纹 |
| brand:jp:suzuki | 日本 | Suzuki | 铃木 | 鈴木 | スズキ | 创始人铃木道雄之姓 |
| brand:jp:daihatsu | 日本 | Daihatsu | 大发 | 大發 | ダイハツ | 「大阪+发动机制造」缩合 |
| brand:jp:isuzu | 日本 | Isuzu | 五十铃 | 五十鈴 | いすゞ | 得名于五十铃川 |
| brand:jp:lexus | 日本 | Lexus | 雷克萨斯 | 凌志 | レクサス | 台港沿用旧名「凌志」 |
| brand:jp:infiniti | 日本 | Infiniti | 英菲尼迪 | 無限 | インフィニティ | 词义「无限」,港台直译「無限」 |
| brand:jp:acura | 日本 | Acura | 讴歌 | 阿庫拉(无官方名) | アキュラ | 源自拉丁语accuracy;台湾通行音译「阿庫拉」 |
| brand:de:volkswagen | 德国 | Volkswagen | 大众 | 福斯 | フォルクスワーゲン | 「人民的汽车」;台湾音译「福斯」、香港「福士」 |
| brand:de:audi | 德国 | Audi | 奥迪 | 奧迪 | アウディ | Horch德语「听」→拉丁语audi |
| brand:de:bmw | 德国 | BMW | 宝马 | 寶馬 | ビー・エム・ダブリュー | 巴伐利亚发动机制造厂缩写;1981年后日本用英语读法 |
| brand:de:mercedes-benz | 德国 | Mercedes-Benz | 奔驰 | 賓士 | メルセデス・ベンツ | 台湾「賓士」、香港「平治」 |
| brand:de:porsche | 德国 | Porsche | 保时捷 | 保時捷 | ポルシェ | 创始人保时捷之姓;粤语俗称「波子」 |
| brand:de:opel | 德国 | Opel | 欧宝 | 歐寶 | オペル | 创始人Adam Opel |
| brand:de:smart | 德国 | Smart | 斯玛特 | smart(斯麥特) | スマート | Swatch+Mercedes+ART合成;官方中文「斯玛特」/「smart精灵」 |
| brand:de:maybach | 德国 | Maybach | 迈巴赫 | 邁巴赫 | マイバッハ | 致敬创始人威廉·迈巴赫;2014年起以Mercedes-Maybach子品牌运营 |
| brand:de:alpina | 德国 | Alpina | 阿尔宾娜 | Alpina | アルピナ | 宝马深度合作改装/独立品牌,2022年宝马收购品牌权益 |
| brand:us:ford | 美国 | Ford | 福特 | 福特 | フォード | 创始人亨利·福特 |
| brand:us:chevrolet | 美国 | Chevrolet | 雪佛兰 | 雪佛蘭 | シボレー | 联合创始人Louis Chevrolet |
| brand:us:buick | 美国 | Buick | 别克 | 別克 | ビュイック | David Buick;香港旧译「标域」 |
| brand:us:cadillac | 美国 | Cadillac | 凯迪拉克 | 凱迪拉克 | キャデラック | 法国探险家卡迪拉克爵士 |
| brand:us:lincoln | 美国 | Lincoln | 林肯 | 林肯 | リンカーン | 以美国总统命名 |
| brand:us:tesla | 美国 | Tesla | 特斯拉 | 特斯拉 | テスラ | 致敬发明家尼古拉·特斯拉 |
| brand:us:gmc | 美国 | GMC | GMC | GMC(未導入) | GMC(ジーエムシー) | General Motors Truck Company缩写,通用汽车旗下;大陆2024年起经道朗格官方进口(Yukon「育空」/悍马EV等),台湾无官方代理 |
| brand:us:rivian | 美国 | Rivian | Rivian | Rivian | リビアン | 美国电动皮卡/SUV新势力 |
| brand:us:lucid | 美国 | Lucid | Lucid | Lucid | ルシード | 美国豪华纯电品牌(前身Atieva) |
| brand:us:hummer | 美国 | Hummer | 悍马 | 悍馬 | ハマー | 源自军用悍马;2010年停产,2021年以纯电Hummer EV归入GMC品牌 |
| brand:us:pontiac | 美国 | Pontiac | 庞蒂亚克 | 龐帝克 | ポンティアック | 通用旗下品牌,2010年随通用破产重组停用 |
| brand:us:oldsmobile | 美国 | Oldsmobile | 奥兹莫比尔 | Oldsmobile | オールズモビル | 通用旗下历史品牌(1897年创立),2004年停产 |
| brand:us:mercury | 美国 | Mercury | 水星 | 水星 | マーキュリー | 福特旗下品牌,2011年停产 |
| brand:us:plymouth | 美国 | Plymouth | 普利茅斯 | Plymouth | プリマス | 克莱斯勒旗下品牌,2001年停产 |
| brand:us:delorean | 美国 | DeLorean | 德罗宁 | DeLorean | デロリアン | 创始人约翰·德罗宁;DMC-12因电影《回到未来》闻名 |
| brand:us:jeep | 美国 | Jeep | 吉普 | 吉普 | ジープ | 源自军用GP(General Purpose) |
| brand:us:dodge | 美国 | Dodge | 道奇 | 道奇 | ダッジ | 道奇兄弟创立 |
| brand:us:chrysler | 美国 | Chrysler | 克莱斯勒 | 克萊斯勒 | クライスラー | 创始人沃尔特·克莱斯勒;香港旧译「佳士拿」 |
| brand:us:ram | 美国 | RAM | 公羊(口语) | RAM(无中文名) | ラム | 意为公羊,2010年自道奇独立 |
| brand:gb:land-rover | 英国 | Land Rover | 路虎 | 荒原路華(旧)/路華 | ランドローバー | rover=漫游者;香港「越野路华」;现属塔塔 |
| brand:gb:jaguar | 英国 | Jaguar | 捷豹 | 捷豹 | ジャガー | jaguar=美洲豹;香港「积架」;现属塔塔 |
| brand:gb:bentley | 英国 | Bentley | 宾利 | 賓利 | ベントレー | 创始人W.O. Bentley |
| brand:gb:rolls-royce | 英国 | Rolls-Royce | 劳斯莱斯 | 勞斯萊斯 | ロールス・ロイス | 两创始人姓氏合并;现属宝马集团 |
| brand:gb:aston-martin | 英国 | Aston Martin | 阿斯顿·马丁 | 奧斯頓馬丁 | アストンマーティン | 香港「雅士顿马田」 |
| brand:gb:mclaren | 英国 | McLaren | 迈凯伦 | 麥拉倫 | マクラーレン | 香港「麦拿仑」 |
| brand:gb:mini | 英国 | MINI | 迷你 | 迷你/MINI | ミニ | 全球基本统一;现属宝马集团 |
| brand:gb:lotus | 英国 | Lotus | 路特斯 | 蓮花 | ロータス | 创始人科林·查普曼;2011年起大陆官方名「路特斯」(旧译莲花),现属吉利 |
| brand:gb:mg | 英国 | MG | 名爵 | MG | エムジー | Morris Garages缩写;品牌源自英国(1924),现属上汽集团 |
| brand:gb:morgan | 英国 | Morgan | 摩根 | Morgan | モーガン | 手工打造经典敞篷跑车小厂(1909年创立) |
| brand:gb:caterham | 英国 | Caterham | 卡特汉姆 | Caterham | カターハム | 源自路特斯Seven的生产权,极致轻量化赛车 |
| brand:it:ferrari | 意大利 | Ferrari | 法拉利 | 法拉利 | フェラーリ | 创始人恩佐·法拉利 |
| brand:it:lamborghini | 意大利 | Lamborghini | 兰博基尼 | 藍寶堅尼 | ランボルギーニ | 香港「林宝坚尼」 |
| brand:it:maserati | 意大利 | Maserati | 玛莎拉蒂 | 瑪莎拉蒂 | マセラティ | 玛莎拉蒂兄弟创立 |
| brand:it:fiat | 意大利 | Fiat | 菲亚特 | 飛雅特 | フィアット | 都灵汽车制造厂缩写;香港「快意」 |
| brand:it:alfa-romeo | 意大利 | Alfa Romeo | 阿尔法·罗密欧 | 愛快羅密歐 | アルファロメオ | 台湾译「愛快」取喜爱速度之意 |
| brand:it:lancia | 意大利 | Lancia | 蓝旗亚 | 蘭吉雅 | ランシア | WRC传奇品牌(现属Stellantis,仅剩Ypsilon在售) |
| brand:it:abarth | 意大利 | Abarth | 阿巴斯 | Abarth | アバルト | 菲亚特旗下性能子品牌,创始人卡尔·阿巴斯 |
| brand:it:pagani | 意大利 | Pagani | 帕加尼 | Pagani | パガーニ | 创始人奥拉西奥·帕加尼,手工超跑 |
| brand:fr:peugeot | 法国 | Peugeot | 标致 | 寶獅 | プジョー | 台湾取车标狮子意象;香港旧译「别儒」 |
| brand:fr:citroen | 法国 | Citroën | 雪铁龙 | 雪鐵龍 | シトロエン | 创始人安德烈·雪铁龙之姓 |
| brand:fr:renault | 法国 | Renault | 雷诺 | 雷諾 | ルノー | 雷诺三兄弟创立 |
| brand:fr:ds | 法国 | DS | 谛艾仕 | DS(无中文名) | DS(ディーエス) | 法语Déesse(女神)谐音 |
| brand:fr:bugatti | 法国 | Bugatti | 布加迪 | 布加迪 | ブガッティ | 创始人埃托雷·布加迪(1909年,现属大众集团/Rimac) |
| brand:fr:alpine | 法国 | Alpine | 阿尔派 | 阿爾派 | アルピーヌ | 雷诺旗下运动品牌,2017年复兴 |
| brand:kr:hyundai | 韩国 | Hyundai | 现代 | 現代 | ヒュンダイ | 现代=modern;2009年退出日本市场 |
| brand:kr:kia | 韩国 | Kia | 起亚 | 起亞 | キア | 「起亞」=自亚洲崛起;集团汉字「起亜」 |
| brand:kr:genesis | 韩国 | Genesis | 捷尼赛思 | 捷恩斯 | ジェネシス | genesis=创始;大陆2021年更名「捷尼赛思」(待核实台湾官方名) |
| brand:kr:ssangyong | 韩国 | SsangYong | 双龙 | 雙龍 | サンヨン | 2023年更名KG Mobility(KGM),中文沿用「双龙」 |
| brand:se:volvo | 瑞典 | Volvo | 沃尔沃 | 富豪 | ボルボ | 拉丁语「我滚动」;台港译「富豪」;现属吉利控股 |
| brand:se:polestar | 瑞典 | Polestar | 极星 | 極星 | ポールスター | polestar=北极星;吉利控股 |
| brand:se:koenigsegg | 瑞典 | Koenigsegg | 柯尼塞格 | 柯尼賽格 | ケーニグセグ | 创始人科尼赛克之姓 |
| brand:se:saab | 瑞典 | Saab | 萨博 | 紳寶 | サーブ | Svenska Aeroplan AB;2011年破产,2016年由NEVS重组(未量产) |
| brand:cz:skoda | 捷克 | Škoda | 斯柯达 | Škoda | シュコダ | 大众集团旗下捷克品牌,得名于创始人埃米尔·斯柯达之姓;大陆官方名「斯柯达」,台湾沿用英文品牌名 |
| brand:ro:dacia | 罗马尼亚 | Dacia | 达契亚 | Dacia | ダチア | 罗马尼亚国民品牌,现属雷诺集团 |
| brand:es:seat | 西班牙 | SEAT | 西雅特 | 喜悅(旧)/SEAT | セアト | Sociedad Española de Automóviles de Turismo缩写,大众集团旗下 |
| brand:es:cupra | 西班牙 | Cupra | Cupra | Cupra | クプラ | 西雅特2018年独立的运动子品牌 |
| brand:ru:lada | 俄罗斯 | Lada | 拉达 | Lada | ラーダ | 俄罗斯最大车企AvtoVAZ旗下品牌;大陆早年有进口 |
| brand:in:tata | 印度 | Tata | 塔塔 | Tata | タタ | 塔塔汽车(拥有捷豹路虎),印度市场主力 |
| brand:in:mahindra | 印度 | Mahindra | 马恒达 | Mahindra | マヒンドラ | 印度SUV与拖拉机巨头 |
| brand:my:proton | 马来西亚 | Proton | 宝腾 | Proton | プロトン | 马来西亚国民品牌,2017年吉利入股(49.9%) |
| brand:my:perodua | 马来西亚 | Perodua | Perodua | Perodua | ペロドゥア | 马来西亚另一国民品牌(与大发/丰田合资) |
| brand:cn:byd | 中国 | BYD | 比亚迪 | 比亞迪 | BYD(ビーワイディー)/比亜迪 | Build Your Dreams;2023年进入日本 |
| brand:cn:geely | 中国 | Geely | 吉利 | 吉利 | 吉利(ジーリー) | 吉祥如意;持有沃尔沃/极氪 |
| brand:cn:great-wall | 中国 | Great Wall | 长城 | 長城 | 長城(グレートウォール) | 旗下哈弗品牌全球销售 |
| brand:cn:nio | 中国 | NIO | 蔚来 | 蔚來 | NIO(ニオ) | Blue Sky Coming |
| brand:cn:xpeng | 中国 | XPeng | 小鹏 | 小鵬 | 小鵬(シャオペン) | 创始人何小鹏之名;2024年进入日本 |
| brand:cn:li-auto | 中国 | Li Auto | 理想 | 理想 | 理想(リ・オート) | 公司名「理想汽车」 |
| brand:cn:chery | 中国 | Chery | 奇瑞 | 奇瑞 | 奇瑞(チェリー) | 「奇」特别、「瑞」祥瑞 |
| brand:cn:changan | 中国 | Changan | 长安 | 長安 | 長安(チャンアン) | 古都名,长治久安 |
| brand:cn:faw | 中国 | FAW | 一汽 | 一汽 | 第一汽車(だいいちきしゃ) | 中国第一汽车集团 |
| brand:cn:roewe | 中国 | Roewe | 荣威 | 榮威 | ロウィ | 荣耀威仪之意;上汽旗下 |
| brand:cn:wuling | 中国 | Wuling | 五菱 | 五菱 | 五菱(ウーリン) | 菱形标志;2025年以Mini EV进入日本 |
| brand:cn:hongqi | 中国 | Hongqi | 红旗 | 紅旗 | 紅旗(こうき) | 国宾级豪华品牌;2023年进入日本 |
| brand:cn:xiaomi | 中国 | Xiaomi | 小米 | 小米(未導入) | 小米(シャオミ) | 小米集团旗下智能电动汽车品牌(2021年成立),2024年首款车SU7上市;台湾未导入 |
| brand:cn:aion | 中国 | Aion | 埃安 | 埃安(未導入) | — | 广汽集团旗下新能源品牌;高端线称昊铂Hyper |
| brand:cn:leapmotor | 中国 | Leapmotor | 零跑 | 零跑(未導入) | — | 2025年获Stellantis注资并联合出海 |
| brand:cn:neta | 中国 | Neta | 哪吒 | 哪吒(未導入) | — | 合众新能源汽车旗下品牌 |
| brand:cn:voyah | 中国 | Voyah | 岚图 | 嵐圖(未導入) | — | 东风汽车旗下高端新能源品牌 |
| brand:cn:im | 中国 | IM | 智己 | 智己(未導入) | — | 上汽集团/张江高科/阿里巴巴合资品牌(IM Motors) |
| brand:cn:arcfox | 中国 | Arcfox | 极狐 | 極狐(未導入) | — | 北汽蓝谷旗下高端纯电品牌,与麦格纳合资生产 |
| brand:cn:aito | 中国 | AITO | 问界 | 問界(未導入) | — | 赛力斯与华为智选车合作品牌(鸿蒙智行) |
| brand:cn:gac | 中国 | GAC | 广汽传祺 | 廣汽傳祺(未導入) | — | 广汽集团旗下乘用车品牌;英文名GAC Motor/Trumpchi |
| brand:cn:venucia | 中国 | Venucia | 启辰 | 啟辰(未導入) | — | 东风日产旗下合资自主品牌(2010年成立),2020年起品牌独立运营 |
| brand:cn:jetta | 中国 | Jetta | 捷达 | Jetta(未導入) | — | 大众集团旗下子品牌;2019年由一汽-大众「捷达」车型升级为独立品牌 |
| brand:cn:baic | 中国 | BAIC | 北京汽车 | 北京汽車(未導入) | — | 北汽集团旗下乘用车品牌;官方英文名BEIJING,2020年绅宝并入「北京」品牌 |
| brand:cn:baic-offroad | 中国 | BAIC Offroad | 北京越野 | 北京越野(未導入) | — | 北汽集团旗下越野品牌,承袭BJ212传统,生产BJ系列越野车 |
| brand:cn:soueast | 中国 | Soueast | 东南 | 東南(未導入) | — | 东南(福建)汽车,曾与三菱合资(东南三菱)后独立运营 |
| brand:cn:maxus | 中国 | Maxus | 大通 | MAXUS(未導入) | — | 上汽集团旗下品牌(上汽大通/MAXUS),商乘并举,海外亦以LDV名销售 |
| brand:cn:jmc | 中国 | JMC | 江铃 | 江鈴(未導入) | — | 江铃汽车(与福特合资),商用车(轻客/皮卡)与乘用车(驭胜)并举 |
| brand:cn:jac | 中国 | JAC | 江淮 | 江淮(未導入) | — | 江淮汽车集团,乘用车(瑞风/嘉悦)与商用车并举;曾代工蔚来 |
| brand:cn:haima | 中国 | Haima | 海马 | 海馬(未導入) | — | 海马汽车(源自一汽海南马自达),2019年与一汽分手后独立运营 |
| brand:cn:qoros | 中国 | Qoros | 观致 | 觀致(未導入) | — | 奇瑞与以色列集团合资品牌(2007年成立),后由宝能集团收购 |
| brand:cn:lifan | 中国 | Lifan | 力帆 | 力帆(未導入) | — | 力帆集团旗下乘用车品牌(摩托车起家);2020年力帆破产重整,品牌停摆 |
| brand:cn:zotye | 中国 | Zotye | 众泰 | 眾泰(未導入) | — | 众泰汽车,曾以「皮尺部」模仿风闻名;2019年资金链断裂停产,2023年破产重整后尝试复活 |
| brand:cn:hawtai | 中国 | Hawtai | 华泰 | 華泰(未導入) | — | 华泰汽车,曾与韩国现代合作;2019年后陷入经营困境 |
| brand:cn:borgward | 中国 | Borgward | 宝沃 | 寶沃(未導入) | — | 源自德国Borgward(1929年创立,1961年停产);2015年由福田复活并国产,2022年宣告破产 |
| brand:cn:landwind | 中国 | Landwind | 陆风 | 陸風(未導入) | — | 陆风汽车(江铃控股旗下),以SUV著称,曾因外观与路虎相似引发商标纠纷 |
| brand:cn:luxgen | 中国 | Luxgen | 纳智捷 | 納智捷 | — | 台湾裕隆集团旗下品牌(2009年),曾与东风合资(东风裕隆),现台湾本土销售 |
| brand:cn:brilliance | 中国 | Brilliance | 中华 | 中華(未導入) | — | 华晨汽车旗下自主品牌,2020年华晨集团破产重整后停摆 |
| brand:cn:liebao | 中国 | Liebao | 猎豹 | 獵豹(未導入) | — | 猎豹汽车(长丰集团),军工背景,曾生产三菱帕杰罗越野车授权版 |
| brand:cn:hanteng | 中国 | Hanteng | 汉腾 | 漢騰(未導入) | — | 汉腾汽车(众泰系新品牌,2016年成立),2019年后停产 |
| brand:cn:fengshen | 中国 | Fengshen | 东风风神 | 東風風神(未導入) | — | 东风乘用车(东风汽车集团)旗下自主品牌 |
| brand:cn:forthing | 中国 | Forthing | 东风风行 | 東風風行(未導入) | — | 东风柳州汽车旗下乘用车品牌,含景逸/菱智/风行T系列 |
| brand:cn:fengon | 中国 | Fengon | 东风风光 | 東風風光(未導入) | — | 东风小康(小康股份/赛力斯前身)旗下乘用车品牌 |
| brand:cn:changhe | 中国 | Changhe | 昌河 | 昌河(未導入) | — | 昌河汽车,曾与铃木合资(昌河铃木,北斗星/利亚纳),2013年起属北汽集团 |
| brand:cn:weiwang | 中国 | Weiwang | 北汽威旺 | 北汽威旺(未導入) | — | 北汽集团旗下微面/MPV品牌(2013年推出) |
| brand:cn:husun | 中国 | Husun | 北汽幻速 | 北汽幻速(未導入) | — | 北汽银翔旗下品牌(2014年成立),2018年后停产 |
| brand:cn:fengdu | 中国 | Fengdu | 东风风度 | 東風風度(未導入) | — | 郑州日产旗下东风品牌(2013年推出),源自日产技术 |
| brand:cn:dfsk | 中国 | DFSK | 东风小康 | 東風小康(未導入) | — | 东风小康(小康股份/赛力斯前身)旗下商用车(微面/微卡)品牌 |
| brand:cn:kaicene | 中国 | Kaicene | 长安凯程 | 長安凱程(未導入) | — | 长安汽车旗下商用车品牌(2020年由长安轻型车更名) |
| brand:cn:oshan | 中国 | Oshan | 长安欧尚 | 長安歐尚(未導入) | — | 长安汽车旗下品牌(原长安商用/欧尚),2023年起并入长安主品牌 |
| brand:cn:foton | 中国 | Foton | 福田 | 福田(未導入) | — | 北汽福田(与戴姆勒合资),以商用车为主,含乘用车品牌(伽途/蒙派克) |
| brand:cn:jinbei | 中国 | Jinbei | 金杯 | 金杯(未導入) | — | 华晨汽车旗下品牌,商用车(海狮等)与乘用车(智尚S30)并举 |
| brand:cn:karoo | 中国 | Karoo | 开瑞 | 開瑞(未導入) | — | 奇瑞旗下商用车品牌(微面/MPV/SUV) |
| brand:cn:coway | 中国 | Coway | 凯翼 | 凱翼(未導入) | — | 汽车品牌(奇瑞曾控股,2018年转由宜宾五粮液控股) |
| brand:cn:oulang | 中国 | Oulang | 欧朗 | 歐朗(未導入) | — | 一汽旗下品牌(2012年推出),仅欧朗一款车 |
| brand:cn:siming | 中国 | Siming | 思铭 | 思銘(未導入) | — | 东风本田合资自主品牌(2012年推出),仅思铭一款车(源自第八代思域) |
| brand:cn:linian | 中国 | Linian | 理念 | 理念(未導入) | — | 广汽本田合资自主品牌(2011年推出),代表车型理念S1 |
| brand:cn:riich | 中国 | Riich | 瑞麒 | 瑞麒(未導入) | — | 奇瑞旗下高端品牌(2009年推出),2012年并入奇瑞主品牌 |
| brand:cn:rely | 中国 | Rely | 威麟 | 威麟(未導入) | — | 奇瑞旗下商用车品牌(2009年推出),2012年并入奇瑞主品牌 |
| brand:cn:chery-nev | 中国 | Chery NEV | 奇瑞新能源 | 奇瑞新能源(未導入) | — | 奇瑞旗下新能源品牌,含QQ冰淇淋/小蚂蚁等;「QQ」曾为奇瑞微型车系列名 |
| brand:cn:fulwin | 中国 | Fulwin | 奇瑞风云 | 奇瑞風雲(未導入) | — | 奇瑞旗下混动/新能源系列(风云)品牌化运营,2023年重启风云系列 |
| brand:cn:livan | 中国 | Livan | 睿蓝 | 睿藍(未導入) | — | 吉利与力帆合资的换电出行品牌(2022年成立) |
| brand:cn:baw | 中国 | BAW | 北京汽车制造厂 | 北京汽車製造廠(未導入) | — | 北京汽车制造厂(BAW),BJ212越野车鼻祖,现生产212系列 |
| brand:cn:yema | 中国 | Yema | 野马 | 野馬(未導入) | — | 野马汽车(四川汽车工业集团旗下),曾用名「川汽野马」 |
| brand:cn:zx | 中国 | ZX | 中兴 | 中興(未導入) | — | 河北中兴汽车,以皮卡为主 |
| brand:cn:huanghai | 中国 | Huanghai | 黄海 | 黃海(未導入) | — | 辽宁曙光汽车集团旗下品牌,以SUV/皮卡为主 |
| brand:cn:hafei | 中国 | Hafei | 哈飞 | 哈飛(未導入) | — | 哈飞汽车(哈航集团),曾生产路宝/赛马/赛豹,现属长安集团 |
| brand:cn:junma | 中国 | Junma | 君马 | 君馬(未導入) | — | 众泰集团旗下新品牌(2017年推出),2019年后停产 |
| brand:cn:bisu | 中国 | Bisu | 比速 | 比速(未導入) | — | 北汽银翔旗下品牌(2016年推出),与幻速同门,2019年后停产 |
| brand:cn:gonow | 中国 | Gonow | 广汽吉奥 | 廣汽吉奧(未導入) | — | 广汽集团与吉奥汽车合资品牌(2010-2016),以SUV/皮卡为主 |
| brand:cn:enze | 中国 | Enze | 潍柴英致 | 濰柴英致(未導入) | — | 潍柴动力旗下乘用车品牌(英致),2019年后停产 |
| brand:cn:swm | 中国 | SWM | SWM斯威 | SWM(未導入) | — | 源自意大利摩托车品牌SWM,2016年由华晨鑫源复活为汽车品牌 |
| brand:cn:sol | 中国 | Sol | 思皓 | 思皓(未導入) | — | 江淮大众合资品牌(2020年推出),后转由江淮汽车运营 |
| brand:cn:huasong | 中国 | Huasong | 华颂 | 華頌(未導入) | — | 华晨集团旗下品牌(2015年推出),仅华颂7一款商务MPV |
| brand:cn:iveco | 中国 | Iveco | 依维柯 | 依維柯(未導入) | — | 南京依维柯(依维柯与南汽合资),轻型商用车品牌 |
| brand:cn:tianjin-faw | 中国 | Tianjin FAW | 天津一汽 | 天津一汽(未導入) | — | 天津一汽(夏利汽车),曾生产夏利/威志/森雅/佳宝等;骏派归入一汽(品牌:cn:faw) |
| brand:cn:yutong | 中国 | Yutong | 宇通 | 宇通(未導入) | — | 宇通客车,全球最大客车制造商之一 |
| brand:cn:gac-group | 中国 | GAC Group | 广汽集团 | 廣汽集團(未導入) | — | 广汽集团旗下合资车企贴牌车型(如广汽三菱祺智PHEV) |
| brand:cn:kuayue | 中国 | Changan Kuayue | 长安跨越 | 長安跨越(未導入) | — | 长安跨越车辆(长安与重庆跨越合资),以微卡/微面为主 |
| brand:cn:yufeng | 中国 | Dongfeng Yufeng | 东风御风 | 東風御風(未導入) | — | 东风汽车旗下轻型客车品牌(御风轻客) |
| brand:cn:youngman-lotus | 中国 | Youngman Lotus | 莲花汽车 | 蓮花汽車(未導入) | — | 青年汽车与莲花工程(Lotus Engineering)合作的中国品牌(2006年推出),与路特斯Lotus不同;约2015年后停产 |
| brand:cn:dongfeng | 中国 | Dongfeng | 东风 | 東風(未導入) | — | 郑州日产生产「东风」品牌商用/乘用车型(帅客MPV、锐骐皮卡等),与东风风神/风行/风光等品牌区分 |

---

# Part 4 车型(models)

## Abarth

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:abarth:124-spider | Abarth 124 Spider | 阿巴斯124 Spider | Abarth 124 Spider | アバルト124スパイダー | class:eu:s | body:roadster | pt:ice | discontinued · 2016–2019 | 基于马自达MX-5的敞篷跑车,2019年停产 |
| model:abarth:500 | Abarth 500/595/695 | 阿巴斯500 | Abarth 500 | アバルト500 | class:eu:a | body:hatchback | pt:ice | current · 2008–present | 基于菲亚特500的性能版(含595/695/Esseesse等);2024年纯电版Abarth 500e推出 |
| model:abarth:punto | Abarth Punto Evo | 阿巴斯Punto Evo | Abarth Punto Evo | アバルト・プントエボ | class:eu:b | body:hatchback | pt:ice | discontinued · 2010–2018 | 基于菲亚特Punto的性能掀背,2018年停产 |

## Acura

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:acura:adx | ADX | ADX | ADX(阿庫拉) | アキュラADX | class:eu:j | body:crossover | pt:ice | current · 2025–present | 与 HR-V/ZR-V 同平台的全新入门豪华 SUV,2025 年推出 |
| model:acura:cdx | CDX | CDX | CDX(阿庫拉) | アキュラCDX | class:eu:j | body:suv | pt:ice | discontinued · 2016–2022 | 广汽讴歌国产紧凑SUV(基于本田缤智平台),讴歌在华首款国产车;2022年讴歌退出中国市场而停产 |
| model:acura:ilx | ILX | ILX | ILX(阿庫拉) | アキュラILX | class:cn:a | body:sedan | pt:ice | discontinued · 2013–2022 | 基于第九代思域的入门豪华轿车,被复兴版 Integra 取代 |
| model:acura:integra | Integra | Integra | Integra(阿庫拉) | アキュラ・インテグラ | class:cn:a | body:hatchback | pt:ice | current · 1986–2006, 2023–present | 1986–2006 为经典 Integra;2022 年基于第 11 代思域复兴为豪华掀背;2026 年起在日本发售 |
| model:acura:mdx | MDX | MDX | MDX(阿庫拉) | アキュラMDX | class:eu:j | body:suv | pt:ice | current · 2000–present | 与 Pilot 同平台的三排中大型豪华 SUV,讴歌北美主力车型 |
| model:acura:nsx | NSX | NSX | NSX(阿庫拉) | アキュラNSX | class:eu:s | body:supercar | pt:ice | discontinued · 1991–2022 | 本田 NSX 的北美版;二代(2016–2022)为 V6+三电机混动 |
| model:acura:rdx | RDX | RDX | RDX(阿庫拉) | アキュラRDX | class:eu:j | body:crossover | pt:ice | current · 2006–present | 与 CR-V 同平台的紧凑豪华 SUV;大陆广汽讴歌曾国产,2022 年退出中国市场 |
| model:acura:rl | RL | RL | RL(阿庫拉) | アキュラRL | class:cn:c | body:sedan | pt:ice | discontinued · 1996–2012 | 前身为 Acura Legend(1986–1995);日本市场以本田 Legend 销售;被 RLX 取代 |
| model:acura:rlx | RLX | RLX | RLX(阿庫拉) | アキュラRLX | class:cn:c | body:sedan | pt:ice | discontinued · 2014–2020 | 讴歌旗舰轿车;日本市场以本田 Legend 销售;有 SH-AWD 混动版 |
| model:acura:tl | TL | TL | TL(阿庫拉) | アキュラTL | class:cn:b | body:sedan | pt:ice | discontinued · 1996–2014 | 四代中型豪华轿车;1996–2003 年间在日本以本田 Saber/Inspire 姊妹车销售 |
| model:acura:tlx | TLX | TLX | TLX(阿庫拉) | アキュラTLX | class:cn:b | body:sedan | pt:ice | discontinued · 2014–2025 | TL/TSX 的继任者;第二代 2021 年推出,2025 款为末代、2025 年停产 |
| model:acura:tlxl | TLX-L | TLX-L | TLX-L(阿庫拉) | アキュラTLX-L | class:cn:b | body:sedan | pt:ice | discontinued · 2017–2020 | 广汽讴歌国产的中型轿车,TLX的中国加长版;2020年停产,讴歌2022年退出中国市场 |
| model:acura:tsx | TSX | TSX | TSX(阿庫拉) | アキュラTSX | class:cn:b | body:sedan | pt:ice | discontinued · 2004–2014 | 欧洲/日本版雅阁(及思铂睿)的北美贴牌版;2011–2014 另有 Sport Wagon 旅行版 |
| model:acura:zdx | ZDX | ZDX | ZDX(阿庫拉) | アキュラZDX | class:eu:j | body:crossover | pt:bev | discontinued · 2009–2013, 2024–2025 | 初代为 Crosstour 平台跨界;2024 年以纯电复活(与本田 Prologue 同源),2025 年停产 |

## Aion

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:aion:hyper-gt | Aion Hyper GT | 昊铂GT | Aion Hyper GT(未导入) | — | class:cn:c | body:sedan | pt:bev | current · 2023–present | 昊铂(Hyper)高端子品牌纯电轿跑(2023年上市,旋翼门) |
| model:aion:hyper-ssr | Aion Hyper SSR | 昊铂SSR | Aion Hyper SSR(未导入) | — | class:eu:s | body:supercar | pt:bev | current · 2023–present | 国产纯电超级跑车(2023年上市,电动蝴蝶门) |
| model:aion:lx | Aion LX | 埃安LX | Aion LX(未导入) | — | class:cn:b | body:suv | pt:bev | current · 2019–present | 品牌首款纯电中型SUV(2019年上市),含LX Plus |
| model:aion:s | Aion S | 埃安S | Aion S(未导入) | — | class:cn:b | body:sedan | pt:bev | current · 2019–present | 广汽埃安首款量产轿车(2019年上市),含S Max/纯电与Aion S Plus;台湾/日本未导入 |
| model:aion:v | Aion V | 埃安V | Aion V(未导入) | — | class:cn:a | body:suv | pt:bev | current · 2020–present | 紧凑型纯电SUV(2020年上市,2024年第二代,2025年出口欧洲) |
| model:aion:y | Aion Y | 埃安Y | Aion Y(未导入) | — | class:cn:a | body:suv | pt:bev | current · 2021–present | 紧凑型纯电SUV(2021年上市,含Y Plus),网约车市场常见 |

## AITO

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:aito:m5 | AITO M5 | 问界M5 | AITO M5(未导入) | — | class:cn:b | body:suv | pt:erev | current · 2022–present | 华为智选车与赛力斯合作首款车型(2022年上市,增程/纯电,鸿蒙座舱) |
| model:aito:m7 | AITO M7 | 问界M7 | AITO M7(未导入) | — | class:cn:c | body:suv | pt:erev | current · 2022–present | 中大型6座增程SUV(2022年上市,2023年改款热销) |
| model:aito:m9 | AITO M9 | 问界M9 | AITO M9(未导入) | — | class:cn:d | body:suv | pt:erev | current · 2023–present | 旗舰大型SUV(2023年上市,增程/纯电,华为全栈技术),2024年销量爆款 |

## Alfa Romeo

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:alfa-romeo:147 | Alfa Romeo 147 | 阿尔法·罗密欧147 | 愛快羅密歐147 | アルファロメオ147 | class:eu:c | body:hatchback | pt:ice | discontinued · 2000–2010 | 2001年欧洲年度车,2010年被Giulietta取代 |
| model:alfa-romeo:156 | Alfa Romeo 156 | 阿尔法·罗密欧156 | 愛快羅密歐156 | アルファロメオ156 | class:eu:d | body:sedan | pt:ice | discontinued · 1997–2005 | 1998年欧洲年度车,含旅行版Sportwagon与高性能GTA,2005年停产 |
| model:alfa-romeo:159 | Alfa Romeo 159 | 阿尔法·罗密欧159 | 愛快羅密歐159 | アルファロメオ159 | class:eu:d | body:sedan | pt:ice | discontinued · 2004–2011 | 156的继任者,含旅行版Sportwagon,2011年停产 |
| model:alfa-romeo:33 | Alfa Romeo 33 | 阿尔法·罗密欧33 | 愛快羅密歐33 | アルファロメオ33 | class:eu:c | body:hatchback | pt:ice | discontinued · 1983–1995 | 紧凑型家用车,1995年停产 |
| model:alfa-romeo:33-stradale | Alfa Romeo 33 Stradale | 阿尔法·罗密欧33 Stradale | 愛快羅密歐33 Stradale | アルファロメオ33ストラダーレ | class:eu:s | body:supercar | pt:ice | current · 2024–present | 2023年发布的限量超跑(33台),致敬1967年原版33 Stradale;另有纯电版选项 |
| model:alfa-romeo:4c | Alfa Romeo 4C | 阿尔法·罗密欧4C | 愛快羅密歐4C | アルファロメオ4C | class:eu:s | body:coupe | pt:ice | discontinued · 2013–2020 | 中置引擎碳纤维单体壳跑车,含4C Spider,2020年停产 |
| model:alfa-romeo:8c | Alfa Romeo 8C Competizione | 阿尔法·罗密欧8C | 愛快羅密歐8C | アルファロメオ8C | class:eu:s | body:supercar | pt:ice | discontinued · 2007–2010 | 限量超级跑车,含8C Competizione(2007–2009)与8C Spider(2008–2010);名称致敬1930年代8C赛车 |
| model:alfa-romeo:alfetta | Alfa Romeo Alfetta | 阿尔法·罗密欧Alfetta | 愛快羅密歐Alfetta | アルファロメオ アルフェッタ | class:eu:d | body:sedan | pt:ice | discontinued · 1972–1984 | 1970年代中型轿车,含Alfetta GT/GTV轿跑(1974–1987)与GTV6 |
| model:alfa-romeo:brera | Alfa Romeo Brera | 阿尔法·罗密欧Brera | 愛快羅密歐Brera | アルファロメオ ブレラ | class:eu:s | body:coupe | pt:ice | discontinued · 2005–2010 | 乔治亚罗设计的双门轿跑,2010年停产 |
| model:alfa-romeo:giulia | Alfa Romeo Giulia | 阿尔法·罗密欧Giulia | 愛快羅密歐Giulia | アルファロメオ ジュリア | class:eu:d | body:sedan | pt:ice | current · 2016–present | 现售运动型中型轿车,2015年亮相、2016年交付;含Quadrifoglio高性能版;名称另有1962–1977年经典Giulia;中国市场以「Giulia朱丽叶」名义进口(2017年起) |
| model:alfa-romeo:giulietta | Alfa Romeo Giulietta | 阿尔法·罗密欧Giulietta | 愛快羅密歐Giulietta | アルファロメオ ジュリエッタ | class:eu:c | body:hatchback | pt:ice | discontinued · 2010–2020 | 现代Giulietta(2010–2020)2020年停产;名称源自经典Giulietta(1954–1965)与1977–1985款 |
| model:alfa-romeo:gtv | Alfa Romeo GTV | 阿尔法·罗密欧GTV | 愛快羅密歐GTV | アルファロメオGTV | class:eu:s | body:coupe | pt:ice | discontinued · 1994–2004 | 与Spider(916平台)同系列的GT轿跑,2004年停产 |
| model:alfa-romeo:junior | Alfa Romeo Junior | 阿尔法·罗密欧Junior | 愛快羅密歐Junior | アルファロメオ ジュニア | class:eu:j | body:crossover | pt:bev | current · 2024–present | 小型SUV,2024年发布(最初命名为Milano),品牌首款纯电车型,另有48V轻混版 |
| model:alfa-romeo:mito | Alfa Romeo MiTo | 阿尔法·罗密欧MiTo | 愛快羅密歐MiTo | アルファロメオ ミト | class:eu:b | body:hatchback | pt:ice | discontinued · 2008–2018 | 小型车,名称取米兰(Milano)与都灵(Torino)之意,2018年停产 |
| model:alfa-romeo:spider | Alfa Romeo Spider | 阿尔法·罗密欧Spider | 愛快羅密歐Spider | アルファロメオ スパイダー | class:eu:s | body:roadster | pt:ice | discontinued · 2006–2010 | 基于Brera的敞篷跑车;经典Spider(1966–1993)为品牌最长寿车型之一 |
| model:alfa-romeo:stelvio | Alfa Romeo Stelvio | 阿尔法·罗密欧Stelvio | 愛快羅密歐Stelvio | アルファロメオ ステルヴィオ | class:eu:j | body:suv | pt:ice | current · 2017–present | 品牌首款SUV,2016年发布、2017年交付;含Quadrifoglio高性能版;中国市场以「Stelvio斯坦维」名义进口(2017年起) |
| model:alfa-romeo:tonale | Alfa Romeo Tonale | 阿尔法·罗密欧Tonale | 愛快羅密歐Tonale | アルファロメオ トナーレ | class:eu:j | body:crossover | pt:ice | current · 2022–present | 紧凑型SUV,2022年发布,Stellantis时代首款新车;含插电混动版Tonale Plug-in Hybrid |

## Alpina

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:alpina:b3 | Alpina B3 | 阿尔宾娜B3 | Alpina B3 | アルピナB3 | class:eu:d | body:sedan | pt:ice | current · 1985–present | 基于宝马3系的调校升级版(现售G20世代B3/B3 Touring) |
| model:alpina:b5 | Alpina B5 | 阿尔宾娜B5 | Alpina B5 | アルピナB5 | class:eu:e | body:sedan | pt:ice | current · 1991–present | 基于宝马5系的高性能行政轿车(含B5 GT) |
| model:alpina:b8 | Alpina B8 Gran Coupé | 阿尔宾娜B8 | Alpina B8 | アルピナB8 | class:eu:f | body:sedan | pt:ice | current · 2021–present | 基于宝马8系Gran Coupé的豪华GT |
| model:alpina:xb7 | Alpina XB7 | 阿尔宾娜XB7 | Alpina XB7 | アルピナXB7 | class:eu:j | body:suv | pt:ice | current · 2020–present | 基于宝马X7的旗舰性能SUV |

## Alpine

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:alpine:a110 | Alpine A110 | 阿尔派A110 | Alpine A110 | アルピーヌA110 | class:eu:s | body:coupe | pt:ice | current · 2017–present | 品牌2017年复兴后的中置后驱跑车(雷诺1.8T),含S/GT/R等版 |
| model:alpine:a290 | Alpine A290 | 阿尔派A290 | Alpine A290 | アルピーヌA290 | class:eu:b | body:hatchback | pt:bev | current · 2024–present | 品牌首款纯电车(基于雷诺5 E-Tech的钢炮版),2024年发布 |
| model:alpine:a310 | Alpine A310 | 阿尔派A310 | Alpine A310 | アルピーヌA310 | class:eu:s | body:coupe | pt:ice | discontinued · 1971–1984 | A110继任的中置后驱轿跑(V6版A310 V6),1984年停产 |

## Arcfox

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:arcfox:alpha-s | Arcfox αS | 极狐阿尔法S | Arcfox αS(未导入) | — | class:cn:c | body:sedan | pt:bev | current · 2021–present | 中大型纯电轿车(2021年上市,含华为HI版/Hi先行版) |
| model:arcfox:alpha-s5 | Arcfox αS5 | 极狐阿尔法S5 | Arcfox αS5(未导入) | — | class:cn:b | body:sedan | pt:bev | current · 2024–present | 中型纯电轿跑(2024年上市) |
| model:arcfox:alpha-t | Arcfox αT | 极狐阿尔法T | Arcfox αT(未导入) | — | class:cn:b | body:suv | pt:bev | current · 2020–present | 极狐首款量产车(2020年上市,北汽蓝谷与麦格纳合资),中大型纯电SUV |
| model:arcfox:arcfox-s | Kaola S | 极狐 考拉S | — | — | class:cn:mpv | body:mpv | pt:bev | current · 2024–present | 极狐考拉S(2024-),考拉系列新增车型,亲子定位纯电MPV |
| model:arcfox:arcfox-s3 | Beta S3 | 极狐贝塔S3 | — | — | class:cn:a | body:sedan | pt:bev | current · 2025–present | 极狐贝塔S3(2025-),贝塔系列紧凑型轿车 |
| model:arcfox:arcfox-t5 | Alpha T5 | 极狐 阿尔法T5 | — | — | class:cn:a | body:suv | pt:bev | current · 2024–present | 极狐阿尔法T5(2024-),紧凑型纯电SUV |
| model:arcfox:arcfox-t7 | Alpha T7 | 极狐 阿尔法T7 | — | — | class:cn:b | body:suv | pt:bev | current · 2026–present | 极狐阿尔法T7(2026-),大五座SUV,可选纯电或增程动力 |
| model:arcfox:arcfox-v9 | Wendao V9 | 极狐问道V9 | — | — | class:cn:mpv | body:mpv | pt:erev | current · 2026–present | 极狐问道V9(2026-),问道系列首款量产车,中大型增程MPV |
| model:arcfox:kaola | Arcfox Kaola | 极狐考拉 | Arcfox Kaola(未导入) | — | class:cn:mpv | body:mpv | pt:bev | current · 2023–present | 「亲子车」定位纯电MPV(2023年上市) |

## Aston Martin

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:aston-martin:070471a06a | Aston Martin Vulcan | 阿斯顿·马丁Vulcan | 奧斯頓馬丁Vulcan | アストンマーティン ヴァルカン | class:eu:s | body:supercar | pt:ice | discontinued · 2015–2016 | 阿斯顿·马丁Vulcan(2015-2016),赛道专用超跑,7.0L V12,限量24台 |
| model:aston-martin:db11 | Aston Martin DB11 | 阿斯顿·马丁DB11 | 奧斯頓馬丁DB11 | アストンマーティンDB11 | class:eu:s | body:coupe | pt:ice | discontinued · 2016–2023 | DB9的继任者,2016年推出,2023年被DB12取代 |
| model:aston-martin:db12 | Aston Martin DB12 | 阿斯顿·马丁DB12 | 奧斯頓馬丁DB12 | アストンマーティンDB12 | class:eu:s | body:coupe | pt:ice | current · 2023–present | 现售旗舰GT,2023年发布,取代DB11;另有敞篷版DB12 Volante |
| model:aston-martin:db4 | Aston Martin DB4 | 阿斯顿·马丁DB4 | 奧斯頓馬丁DB4 | アストンマーティンDB4 | class:eu:s | body:coupe | pt:ice | discontinued · 1958–1963 | 经典GT跑车,DB4系列含DB4 GT、DB4 Zagato等变体 |
| model:aston-martin:db5 | Aston Martin DB5 | 阿斯顿·马丁DB5 | 奧斯頓馬丁DB5 | アストンマーティンDB5 | class:eu:s | body:coupe | pt:ice | discontinued · 1963–1965 | 因007系列电影《金手指》闻名的经典GT跑车 |
| model:aston-martin:db6 | Aston Martin DB6 | 阿斯顿·马丁DB6 | 奧斯頓馬丁DB6 | アストンマーティンDB6 | class:eu:s | body:coupe | pt:ice | discontinued · 1965–1970 | DB5的继任者,改进空气动力学设计的GT跑车,含DB6 Volante敞篷版 |
| model:aston-martin:db7 | Aston Martin DB7 | 阿斯顿·马丁DB7 | 奧斯頓馬丁DB7 | アストンマーティンDB7 | class:eu:s | body:coupe | pt:ice | discontinued · 1993–2003 | 90年代拯救品牌的GT车型,含DB7 Vantage与敞篷版Volante |
| model:aston-martin:db9 | Aston Martin DB9 | 阿斯顿·马丁DB9 | 奧斯頓馬丁DB9 | アストンマーティンDB9 | class:eu:s | body:coupe | pt:ice | discontinued · 2004–2016 | DB7的继任者,经典GT轿跑,2016年被DB11取代 |
| model:aston-martin:dbs | Aston Martin DBS | 阿斯顿·马丁DBS | 奧斯頓馬丁DBS | アストンマーティンDBS | class:eu:s | body:coupe | pt:ice | discontinued · 2018–2024 | DBS Superleggera(2018–2024),V12旗舰GT;名称另有1967–1972年经典DBS与2007–2012年DBS V12 |
| model:aston-martin:dbx | Aston Martin DBX | 阿斯顿·马丁DBX | 奧斯頓馬丁DBX | アストンマーティンDBX | class:eu:j | body:suv | pt:ice | current · 2020–present | 品牌首款SUV,2020年上市;含高性能版DBX 707 |
| model:aston-martin:lagonda | Aston Martin Lagonda | 阿斯顿·马丁Lagonda | 奧斯頓馬丁Lagonda | アストンマーティン ラゴンダ | class:eu:f | body:sedan | pt:ice | discontinued · 1976–1989 | 楔形设计的四门豪华轿车;Lagonda亦为阿斯顿·马丁曾用的子品牌名(2015年Lagonda Taraf) |
| model:aston-martin:one-77 | Aston Martin One-77 | 阿斯顿·马丁One-77 | 奧斯頓馬丁One-77 | アストンマーティン ワン-77 | class:eu:s | body:coupe | pt:ice | discontinued · 2009–2012 | 限量77台的旗舰超跑,碳纤维车身+V12发动机 |
| model:aston-martin:rapide | Aston Martin Rapide | 阿斯顿·马丁Rapide | 奧斯頓馬丁Rapide | アストンマーティン ラピード | class:eu:s | body:sedan | pt:ice | discontinued · 2010–2020 | 品牌四门GT轿车,含Rapide S性能版,2020年停产 |
| model:aston-martin:taraf | Lagonda Taraf | 拉共达Taraf | 拉共達Taraf | ラゴンダ タラフ | class:eu:f | body:sedan | pt:ice | discontinued · 2015–2016 | 阿斯顿·马丁旗下Lagonda子品牌四门豪华轿车,6.0L V12,限量200台 |
| model:aston-martin:valhalla | Aston Martin Valhalla | 阿斯顿·马丁瓦尔哈拉 | 奧斯頓馬丁Valhalla | アストンマーティン ヴァルハラ | class:eu:s | body:supercar | pt:phev | current · 2025–present | 中置引擎插电混动超跑,2025年起交付 |
| model:aston-martin:valkyrie | Aston Martin Valkyrie | 阿斯顿·马丁女武神 | 奧斯頓馬丁Valkyrie | アストンマーティン ヴァルキリー | class:eu:s | body:supercar | pt:hev | discontinued · 2021–2024 | 与红牛F1合作开发的混动Hypercar,限量生产,2021年交付 |
| model:aston-martin:vanquish | Aston Martin Vanquish | 阿斯顿·马丁Vanquish | 奧斯頓馬丁Vanquish | アストンマーティン ヴァンキッシュ | class:eu:s | body:coupe | pt:ice | current · 2024–present | V12旗舰GT,2024年发布;名称先例:V12 Vanquish(2001–2007)与Vanquish(2012–2018) |
| model:aston-martin:vantage | Aston Martin Vantage | 阿斯顿·马丁Vantage | 奧斯頓馬丁Vantage | アストンマーティン ヴァンテージ | class:eu:s | body:coupe | pt:ice | current · 2005–present | 入门级跑车,2005年首代(V8/V12 Vantage),现款为第二代(2018–),2024年改款 |
| model:aston-martin:virage | Aston Martin Virage | 阿斯顿·马丁Virage | 奧斯頓馬丁Virage | アストンマーティン ヴィラージュ | class:eu:s | body:coupe | pt:ice | discontinued · 1989–2000 | 1989年推出的V8 GT,衍生V8 Vantage等变体;2011–2012年曾短暂复活同名车型 |

## Audi

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:audi:100 | 100 | 奥迪100 | Audi 100 | アウディ100 | class:eu:e | body:sedan | pt:ice | discontinued · 1968–1994 | A6的前身;1980年代曾引进中国一汽组装 |
| model:audi:80 | 80 | 奥迪80 | Audi 80 | アウディ80 | class:eu:d | body:sedan | pt:ice | discontinued · 1966–1996 | A4的前身;90为其高配型号 |
| model:audi:a1 | A1 | A1 | A1 | A1(エーワン) | class:eu:b | body:hatchback | pt:ice | discontinued · 2010–2026 | 奥迪入门小型车(含Sportback),2026年停产 |
| model:audi:a2 | A2 | A2 | A2 | A2(エーツー) | class:eu:b | body:hatchback | pt:ice | discontinued · 1999–2005 | 全铝车身城市车,2005年停产;2026年将以A2 e-tron纯电复活 |
| model:audi:a3 | A3 | A3 | A3 | A3(エースリー) | class:eu:c | body:hatchback | pt:ice | current · 1996–present | 紧凑型豪华两厢/三厢(2013年起出三厢版);中国版为A3L长轴;S3/RS3高性能版属本系列 |
| model:audi:a4 | A4 | 奥迪A4L | Audi A4 | A4(エーフォー) | class:eu:d | body:sedan | pt:ice | current · 1994–present | 前身为奥迪80;中国版为一汽-大众奥迪A4L(长轴);2025年起命名体系改版,A4后续由A5承接 |
| model:audi:a5 | A5 | A5 | Audi A5 | A5(エーファイブ) | class:eu:d | body:sedan | pt:ice | current · 2007–present | 原为A4轿跑版,2024年换代后承接A4轿车定位(含Avant旅行版) |
| model:audi:a5l | A5L | 奥迪A5L | A5L | A5L(エーファイブエル) | class:cn:b | body:sedan | pt:ice | current · 2025–present | 一汽奥迪国产长轴版A5(B10),2025年上市;另有A5L Sportback掀背版同属本系列 |
| model:audi:a6 | A6 | 奥迪A6L | Audi A6 | A6(エーロク) | class:eu:e | body:sedan | pt:ice | current · 1994–present | 前身为奥迪100;中国版为一汽-大众奥迪A6L(长轴);S6/RS6高性能版属本系列 |
| model:audi:a6-e-tron | A6 e-tron | A6 e-tron | A6 e-tron | A6 e-tron(エーロク・イートロン) | class:eu:e | body:sedan | pt:bev | current · 2024–present | PPE平台纯电行政轿车,另有Avant旅行版 |
| model:audi:a6l | A6L New Energy | A6L新能源 | — | — | class:cn:c | body:sedan | pt:phev | discontinued · 2019–2022 | A6L新能源(2019–2022),一汽-奥迪A6L插电混动版(55 TFSI e),2022年停产 |
| model:audi:a6l-e-tron | A6L e-tron | A6L e-tron | — | — | class:cn:c | body:sedan | pt:bev | current · 2025–present | A6L e-tron(2025–),一汽-奥迪中国特供长轴纯电轿车(PPE平台) |
| model:audi:a7 | A7 | A7 | Audi A7 | A7(エーセブン) | class:eu:e | body:sedan | pt:ice | current · 2010–present | 五门轿跑(liftback);中国另有上汽奥迪A7L长轴轿车(2021年起) |
| model:audi:a7l | A7L | 奥迪A7L | A7L | A7L(エーセブンエル) | class:cn:c | body:sedan | pt:ice | current · 2021–present | 上汽奥迪特供长轴三厢版A7 |
| model:audi:a8 | A8 | 奥迪A8L | Audi A8 | A8(エーハチ) | class:eu:f | body:sedan | pt:ice | current · 1994–present | 奥迪旗舰豪华轿车,前身为奥迪V8;中国版为A8L长轴 |
| model:audi:audi-s1 | Audi S1 | 奥迪S1 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2014–2018 | S1(2014–2018),A1的S性能版,2018年停产 |
| model:audi:audi-s3 | Audi S3 | 奥迪S3 | — | — | class:cn:a | body:sedan | pt:ice | current · 1999–present | S3(1999–),A3的S性能版 |
| model:audi:audi-s4 | Audi S4 | 奥迪S4 | — | — | class:cn:a | body:sedan | pt:ice | current · 1991–present | S4(1991–),A4的S性能版 |
| model:audi:audi-s5 | Audi S5 | 奥迪S5 | — | — | class:cn:a | body:coupe | pt:ice | current · 2007–present | S5(2007–),A5的S性能版 |
| model:audi:audi-s6 | Audi S6 | 奥迪S6 | — | — | class:cn:a | body:sedan | pt:ice | current · 1994–present | S6(1994–),A6的S性能版 |
| model:audi:audi-s7 | Audi S7 | 奥迪S7 | — | — | class:cn:a | body:hatchback | pt:ice | current · 2012–present | S7(2012–),A7的S性能版 |
| model:audi:audi-s8 | Audi S8 | 奥迪S8 | — | — | class:cn:a | body:sedan | pt:ice | current · 1996–present | S8(1996–),A8的S性能版 |
| model:audi:coupe | Audi Coupe | 奥迪Coupe | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 1980–1991 | Coupe(B2,1980–1991),奥迪双门轿跑,与初代Quattro同平台 |
| model:audi:e-tron | e-tron | e-tron | e-tron | e-tron(イートロン) | class:eu:j | body:suv | pt:bev | discontinued · 2018–2025 | 奥迪首款量产纯电SUV,2023年改名Q8 e-tron,2025年停产;国产版e-tron同属本系列 |
| model:audi:e-tron-gt | e-tron GT | e-tron GT | e-tron GT | e-tron GT(イートロンGT) | class:eu:s | body:sedan | pt:bev | current · 2020–present | 与保时捷Taycan同平台的纯电轿跑;RS e-tron GT高性能版属本系列 |
| model:audi:q2 | Q2 | Q2L | Audi Q2 | Q2(キュー・ツー) | class:eu:b | body:suv | pt:ice | discontinued · 2017–2026 | 奥迪小型SUV;中国版为一汽-大众Q2L(加长),2026年停产 |
| model:audi:q2l | Audi Q2L | 奥迪Q2L | — | — | class:cn:a | body:suv | pt:ice | current · 2018–present | Q2L(2018–),一汽-奥迪中国特供长轴小型SUV(Q2的长轴版) |
| model:audi:q2l-e-tron | Q2L e-tron | Q2L e-tron | — | — | class:cn:b | body:suv | pt:bev | discontinued · 2019–2022 | Q2L e-tron(2019–2022),一汽-奥迪Q2L纯电版,2022年停产 |
| model:audi:q3 | Q3 | Q3 | Audi Q3 | Q3(キュー・スリー) | class:eu:c | body:suv | pt:ice | current · 2011–present | 紧凑型SUV,另有Q3 Sportback轿跑版 |
| model:audi:q3-sportback | Q3 Sportback | Q3 Sportback | — | — | class:cn:a | body:coupe | pt:ice | current · 2020–present | Q3 Sportback(2020–),Q3的轿跑SUV版,中国由一汽-奥迪国产 |
| model:audi:q4-e-tron | Q4 e-tron | Q4 e-tron | Q4 e-tron | Q4 e-tron(キュー・フォー・イートロン) | class:eu:c | body:suv | pt:bev | current · 2021–present | MEB平台纯电紧凑型SUV,另有Sportback版 |
| model:audi:q5 | Q5 | 奥迪Q5L | Audi Q5 | Q5(キュー・ファイブ) | class:eu:d | body:suv | pt:ice | current · 2008–present | 中型豪华SUV;中国版为一汽-大众奥迪Q5L(长轴);SQ5高性能版属本系列 |
| model:audi:q5-e-tron | Q5 e-tron | Q5 e-tron | — | — | class:cn:b | body:suv | pt:bev | current · 2022–present | Q5 e-tron(2022–),上汽奥迪纯电SUV(MEB平台,中国特供) |
| model:audi:q5l-sportback | Audi Q5L Sportback | 奥迪Q5L Sportback | — | — | class:cn:b | body:coupe | pt:ice | current · 2020–present | Q5L Sportback(2020–),一汽-奥迪Q5L的轿跑版 |
| model:audi:q6 | Q6 | 奥迪Q6 | Audi Q6 | Q6(キュー・シックス) | class:cn:d | body:suv | pt:ice | current · 2022–present | 上汽奥迪特供大型SUV,仅中国市场销售 |
| model:audi:q6-e-tron | Q6 e-tron | Q6 e-tron | Q6 e-tron | Q6 e-tron(キュー・シックス・イートロン) | class:eu:d | body:suv | pt:bev | current · 2024–present | PPE平台纯电中型SUV,与中国特供Q6无关联 |
| model:audi:q6l-e-tron | Q6L e-tron | Q6L e-tron | — | — | class:cn:b | body:suv | pt:bev | current · 2025–present | Q6L e-tron(2025–),一汽-奥迪中国特供长轴纯电SUV(PPE平台) |
| model:audi:q6l-sportback-e-tron | Q6L Sportback e-tron | Q6L Sportback e-tron | — | — | class:cn:b | body:coupe | pt:bev | current · 2025–present | Q6L Sportback e-tron(2025–),一汽-奥迪Q6L e-tron的轿跑版(PPE平台) |
| model:audi:q7 | Q7 | 奥迪Q7 | Audi Q7 | Q7(キュー・セブン) | class:eu:j | body:suv | pt:ice | current · 2005–present | 奥迪首款SUV,与大众途锐/保时捷卡宴同平台;2026年换代 |
| model:audi:q8 | Q8 | 奥迪Q8 | Audi Q8 | Q8(キュー・エイト) | class:eu:j | body:suv | pt:ice | current · 2018–present | 奥迪旗舰轿跑SUV;Q8 e-tron(2018–2025)为纯电SUV,前身即e-tron |
| model:audi:quattro | Quattro | Quattro | Audi Quattro | クワトロ | class:eu:s | body:coupe | pt:ice | discontinued · 1980–1991 | 四驱系统的开山之作,1980年代WRC赛场传奇 |
| model:audi:r8 | R8 | R8 | Audi R8 | R8(アールエイト) | class:eu:s | body:sports | pt:ice | discontinued · 2006–2024 | 奥迪超级跑车(5.2 V10),2024年停产;R8 e-tron为限量电动版(2015) |
| model:audi:rs-3 | RS 3 | RS 3 | — | — | class:cn:a | body:hatchback | pt:ice | current · 2011–present | RS 3(2011–),A3的RS顶级性能版 |
| model:audi:rs-4 | Audi RS 4 | 奥迪RS 4 | — | — | class:cn:a | body:wagon | pt:ice | current · 1999–present | RS 4(1999–),A4的RS顶级性能版(旅行车为主) |
| model:audi:rs-5 | RS 5 | RS 5 | — | — | class:cn:a | body:coupe | pt:ice | current · 2010–present | RS 5(2010–),A5的RS顶级性能版 |
| model:audi:rs-6 | Audi RS 6 | 奥迪RS 6 | — | — | class:cn:a | body:wagon | pt:ice | current · 2002–present | RS 6(2002–),A6的RS顶级性能版(旅行车) |
| model:audi:rs-7 | RS 7 | RS 7 | — | — | class:cn:a | body:hatchback | pt:ice | current · 2013–present | RS 7(2013–),A7的RS顶级性能版 |
| model:audi:rs-q3 | RS Q3 | RS Q3 | — | — | class:cn:a | body:suv | pt:ice | current · 2013–present | RS Q3(2013–),Q3的RS顶级性能版 |
| model:audi:rs-q8 | RS Q8 | RS Q8 | — | — | class:cn:c | body:suv | pt:ice | current · 2019–present | RS Q8(2019–),Q8的RS顶级性能版 |
| model:audi:sq2 | Audi SQ2 | 奥迪SQ2 | — | — | class:cn:a | body:suv | pt:ice | current · 2019–present | SQ2(2019–),Q2的S性能版 |
| model:audi:sq5 | Audi SQ5 | 奥迪SQ5 | — | — | class:cn:b | body:suv | pt:ice | current · 2013–present | SQ5(2013–),Q5的S性能版 |
| model:audi:sq5-sportback | Audi SQ5 Sportback | 奥迪SQ5 Sportback | — | — | class:cn:b | body:coupe | pt:ice | current · 2021–present | SQ5 Sportback(2021–),Q5 Sportback的S性能版 |
| model:audi:sq6-e-tron | SQ6 e-tron | SQ6 e-tron | — | — | class:cn:b | body:suv | pt:bev | current · 2025–present | SQ6 e-tron(2025–),Q6 e-tron的S性能版(PPE平台) |
| model:audi:sq7 | Audi SQ7 | 奥迪SQ7 | — | — | class:cn:c | body:suv | pt:ice | current · 2016–present | SQ7(2016–),Q7的S性能版 |
| model:audi:sq8 | Audi SQ8 | 奥迪SQ8 | — | — | class:cn:c | body:suv | pt:ice | current · 2019–present | SQ8(2019–),Q8的S性能版 |
| model:audi:tt | TT | TT | Audi TT | TT(ティーティー) | class:eu:s | body:coupe | pt:ice | discontinued · 1998–2023 | 奥迪经典轿跑(含Roadster敞篷与TTS/TT RS性能版),2023年停产 |
| model:audi:tt-rs | TT RS | TT RS | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 2009–2023 | TT RS(2009–2023),TT的RS顶级性能版,2023年停产 |
| model:audi:tts | Audi TTS | 奥迪TTS | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 2008–2023 | TTS(2008–2023),TT的S性能版,2023年停产 |

## BAIC

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:baic:baic-cc | Senova CC | 绅宝CC | — | — | class:cn:b | body:sedan | pt:ice | discontinued · 2015–2018 | 绅宝CC(2015-2018),绅宝运动型轿车,基于D60平台,已停产 |
| model:baic:d20 | Senova D20 | 绅宝D20 | — | — | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2014–2018 | 北汽绅宝小型两厢/三厢车(2014年上市,源自北汽E系列平台) |
| model:baic:d50 | Senova D50 | 绅宝D50 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2014–2018 | 北汽绅宝紧凑型轿车(2014年上市,2019年由北京U5接替) |
| model:baic:d60 | Senova D60 | 绅宝D60 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2014–2016 | 绅宝D60(2014-2016),紧凑型轿车,已停产 |
| model:baic:d70 | Senova D70 | 绅宝D70 | — | — | class:cn:b | body:sedan | pt:ice | discontinued · 2013–2017 | 北汽绅宝品牌首款车型,中型轿车,源自萨博9-5技术平台(2013年上市) |
| model:baic:d80 | Senova D80 | 绅宝D80 | — | — | class:cn:c | body:sedan | pt:ice | discontinued · 2015–2017 | 绅宝D80(2015-2017),绅宝旗舰轿车,基于萨博9-5平台,已停产 |
| model:baic:e-series | E-Series | E系列 | — | — | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2012–2015 | 北京汽车小型两厢/三厢车(2012年上市,后由绅宝D20接替) |
| model:baic:eu5 | BEIJING-EU5 | 北京EU5 | — | — | class:cn:a | body:sedan | pt:bev | current · 2018–present | 北汽新能源紧凑型纯电轿车(2018年上市,网约车/出租车市场主力,品牌统一后称BEIJING-EU5) |
| model:baic:eu5-plus | BAIC EU5 PLUS | 北京EU5 PLUS | — | — | class:cn:a | body:sedan | pt:ice | current · 2021–present | 北京EU5 PLUS(2021-),EU5升级版,北汽新能源紧凑型纯电轿车 |
| model:baic:eu7 | BAIC EU7 | 北京EU7 | — | — | class:cn:b | body:sedan | pt:ice | current · 2019–present | 北京EU7(2019-),北汽新能源中型纯电轿车 |
| model:baic:eu8 | BAIC EU8 | 北京EU8 | — | — | class:cn:b | body:sedan | pt:ice | current · 2025–present | 北京EU8(2025-),B级纯电营运轿车,支持换电 |
| model:baic:ex3 | BAIC EX3 | 北京EX3 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2019–2022 | 北京EX3(2019-2022),北汽新能源纯电小型SUV,已停产 |
| model:baic:ex5 | BAIC EX5 | 北京EX5 | — | — | class:cn:c | body:suv | pt:ice | discontinued · 2019–2021 | 北京EX5(2019-2021),北汽新能源纯电紧凑型SUV,已停产 |
| model:baic:mofang | Magic Cube | 魔方 | — | — | class:cn:a | body:suv | pt:ice | current · 2022–present | 北京汽车紧凑型SUV(2022年上市,搭载华为鸿蒙智能座舱) |
| model:baic:u5 | BEIJING-U5 | 北京U5 | — | — | class:cn:a | body:sedan | pt:ice | current · 2019–present | 北京汽车紧凑型轿车(2019年上市,由绅宝D50更名而来,含U5 PLUS版) |
| model:baic:u5-plus | BAIC U5 PLUS | 北京U5 PLUS | — | — | class:cn:a | body:sedan | pt:ice | current · 2021–present | 北京U5 PLUS(2021-),U5改款升级版 |
| model:baic:u7 | BEIJING-U7 | 北京U7 | — | — | class:cn:b | body:sedan | pt:ice | current · 2018–present | 北京汽车中型轿车(2018年上市,前身绅宝智道,定位接替绅宝D70) |
| model:baic:x25 | Senova X25 | 绅宝X25 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2015–2018 | 北汽绅宝小型SUV(2015年上市) |
| model:baic:x3 | BEIJING-X3 | 北京X3 | — | — | class:cn:a0 | body:suv | pt:ice | current · 2020–present | 北京汽车小型SUV(2020年上市,由绅宝X35更名而来) |
| model:baic:x35 | Senova X35 | 绅宝X35 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2016–2019 | 北汽绅宝小型SUV(2016年上市,后由北京X3接替) |
| model:baic:x5 | BEIJING-X5 | 北京X5 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2019–2021 | 北京汽车紧凑型SUV(2019年上市,由绅宝X55/智行更名而来,2021年前后停产) |
| model:baic:x55 | Senova X55 | 绅宝X55 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2015–2017 | 北汽绅宝紧凑型SUV(2015年上市,后继车型为智行/北京X5) |
| model:baic:x65 | Senova X65 | 绅宝X65 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2015–2016 | 北汽绅宝品牌首款SUV,紧凑型(2015年上市,2016年停产) |
| model:baic:x7 | BEIJING-X7 | 北京X7 | — | — | class:cn:b | body:suv | pt:ice | current · 2020–present | 北京汽车中型SUV(2020年上市) |
| model:baic:zhixing | Zhixing | 智行 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2019 | 北京汽车紧凑型SUV(2018年上市,绅宝X55换代车型,后更名北京X5) |

## BAIC Offroad

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:baic-offroad:bj20 | BJ20 | 北京BJ20 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2016–2021 | 北京越野紧凑型SUV,城市风格硬派造型(2016年上市) |
| model:baic-offroad:bj30 | BJ30 | 北京BJ30 | — | — | class:cn:a | body:suv | pt:ice | current · 2021–present | 北京越野紧凑型SUV,轻越野定位(2021年上市,2024年换代,含混动版) |
| model:baic-offroad:bj40 | BJ40 | 北京BJ40 | — | — | class:cn:b | body:suv | pt:ice | current · 2013–present | 北京越野硬派越野SUV,非承载式车身(2013年上市,含城市猎人/刀锋英雄等版本) |
| model:baic-offroad:bj40-2 | BJ40 EREV | BJ40增程 | BJ40增程 | — | class:cn:b | body:suv | pt:erev | current · 2024–present | 北京BJ40增程(2024-),BJ40增程混动版 |
| model:baic-offroad:bj60 | BJ60 | 北京BJ60 | — | — | class:cn:c | body:suv | pt:ice | current · 2022–present | 北京越野中大型硬派SUV,非承载式车身(2022年上市,后续推出增程混动版) |
| model:baic-offroad:bj60-2 | BJ60 EREV | BJ60增程 | BJ60增程 | — | class:cn:c | body:suv | pt:erev | current · 2024–present | 北京BJ60增程(2024-),BJ60增程混动版 |
| model:baic-offroad:bj80 | BJ80 | 北京BJ80 | — | — | class:cn:c | body:suv | pt:ice | current · 2017–present | 北京越野中大型硬派SUV,非承载式车身,外观风格类奔驰G级(2017年上市) |
| model:baic-offroad:bj90 | BJ90 | 北京BJ90 | — | — | class:cn:c | body:suv | pt:ice | current · 2019–present | 北京越野大型SUV,基于奔驰GLS同源底盘(2019年上市,含3.0T/4.0T版本) |
| model:baic-offroad:f40 | BAIC Offroad F40 | 北京越野F40 | F40 | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2018–2020 | 北京越野F40(2018-2020),BJ40皮卡版,已停产 |

## BAW

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:baw:212 | BAW 212 | 212 | BAW 212 | — | class:cn:b | body:suv | pt:ice | current · 1966–present | 经典轻型越野车BJ212,1966年投产,中国汽车工业符号;2024年新一代212(T01)上市,现由BAW生产销售 |
| model:baw:2aed7f4f9b | Zhanqi Pickup | 战旗皮卡 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2005–2015 | 战旗皮卡,战旗系列皮卡版,已停产 |
| model:baw:82104fd1e0 | Yuanbao | 元宝 | — | — | class:cn:a00 | body:city-car | pt:bev | current · 2023–present | 元宝(2023-),北汽制造纯电微型车 |
| model:baw:bw007 | BAW BW007 | BW007 | BAW BW007 | — | class:cn:b | body:suv | pt:ice | discontinued · 2015–2020 | 中型硬派SUV(2015年上市),源自勇士平台;约2020年停产 |
| model:baw:cebb8550b6 | Calorie | 卡路里 | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2022–present | 卡路里(2022-),北汽制造小型皮卡 |
| model:baw:d6099cd5d6 | Luba | 陆霸 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2003–2010 | 陆霸(2003-2010),北汽SUV,基于丰田普拉多(90系)技术,已停产 |
| model:baw:d8394ba5f7 | Zhanqi | 战旗 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2005–2015 | 战旗(2005-2015),北汽制造经典越野SUV,已停产 |
| model:baw:f4da434a6a | Brave Warrior Pickup | 勇士皮卡 | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2014–present | 勇士皮卡,勇士系列皮卡版 |
| model:baw:s12 | Knight S12 | 骑士S12 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2011–2015 | 骑士S12(2011-2015),北汽SUV,已停产 |
| model:baw:t01 | 212 T01 | 212 T01 | 212 T01 | — | class:cn:c | body:suv | pt:ice | current · 2024–present | 新212换代款中大型硬派SUV(2024年8月上市,代号T01),非承载式车身,搭载2.0T发动机 |
| model:baw:warrior | BAW Warrior | 勇士 | BAW Warrior | — | class:cn:b | body:suv | pt:ice | discontinued · 2007–2020 | 中型硬派越野车,军用勇士民用化产品,2007年前后上市;2020年前后停产 |

## Bentley

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:bentley:arnage | Bentley Arnage | 宾利雅致 | 賓利雅緻 | ベントレーアルナージ | class:eu:f | body:sedan | pt:ice | discontinued · 1998–2009 | 大众收购宾利后的首款大型豪华轿车,被Mulsanne取代 |
| model:bentley:azure | Bentley Azure | 宾利雅骏(Azure) | 賓利Azure | ベントレーアズール | class:eu:f | body:convertible | pt:ice | discontinued · 1995–2009 | 豪华敞篷GT,分两代(1995–2003、2006–2009);大陆「雅骏」为媒体译名,非官方中文名 |
| model:bentley:bentayga | Bentley Bentayga | 宾利添越 | 賓利Bentayga | ベントレーベンテイガ | class:eu:j | body:suv | pt:ice | current · 2016–present | 品牌首款(超)豪华SUV,2015年发布、2016年交付;含插电混动版 |
| model:bentley:brooklands | Bentley Brooklands | 宾利Brooklands | 賓利Brooklands | ベントレーブルックランズ | class:eu:f | body:coupe | pt:ice | discontinued · 2008–2011 | 基于Arnage的双门豪华GT轿跑,限量约550辆;大陆无官方中文名,媒体音译「布鲁克兰」 |
| model:bentley:continental-gt | Bentley Continental GT | 宾利欧陆GT | 賓利Continental GT | ベントレーコンチネンタルGT | class:eu:f | body:coupe | pt:ice | current · 2003–present | 豪华GT轿跑,2003年发布,现款为第四代(2024–);含Supersports等性能版 |
| model:bentley:continental-gtc | Bentley Continental GTC | 宾利欧陆GTC | 賓利Continental GTC | ベントレーコンチネンタルGTC | class:eu:f | body:convertible | pt:ice | current · 2006–present | Continental GT的敞篷版,2005年亮相、2006年上市 |
| model:bentley:flying-spur | Bentley Flying Spur | 宾利飞驰 | 賓利飛馳 | ベントレーフライングスパー | class:eu:f | body:sedan | pt:ice | current · 2005–present | 四门豪华轿车,最初名为Continental Flying Spur,2013年起更名为Flying Spur;现款为第三代(2019–) |
| model:bentley:mulsanne | Bentley Mulsanne | 宾利慕尚 | 賓利Mulsanne | ベントレーミュルザンヌ | class:eu:f | body:sedan | pt:ice | discontinued · 2010–2020 | 旗舰豪华轿车;名称源自1980–1992年的初代Mulsanne,2020年停产 |
| model:bentley:turbo-r | Bentley Turbo R | 宾利Turbo R | 賓利Turbo R | ベントレーターボR | class:eu:f | body:sedan | pt:ice | discontinued · 1985–1999 | 基于Mulsanne的涡轮增压性能版,1980-90年代宾利运动形象的代表 |

## Bisu

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:bisu:m3 | Bisu M3 | 比速M3 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2016–2019 | 比速M3紧凑型MPV,2016年上市,比速品牌首批车型之一 |
| model:bisu:t3 | Bisu T3 | 比速T3 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2016–2019 | 比速T3小型SUV,2016年上市 |
| model:bisu:t5 | Bisu T5 | 比速T5 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2017–2019 | 比速T5中型7座SUV,2017年上市 |

## BMW

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:bmw:1-m | 1 Series M | 1系M | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 2011–2012 | 1系M(2011–2012),1系的M性能版(E82),限量生产 |
| model:bmw:1-series | 1 Series | 宝马1系 | BMW 1系列 | BMW 1シリーズ | class:eu:c | body:hatchback | pt:ice | current · 2004–present | 紧凑型豪华两厢,北美市场不售;中国另有1系三厢版(F52,2017–2023) |
| model:bmw:2-series | 2 Series | 宝马2系 | BMW 2系列 | BMW 2シリーズ | class:eu:c | body:coupe | pt:ice | current · 2014–present | 轿跑与敞篷版(G42);另有2系Gran Coupé四门轿跑(F74)同属本系列 |
| model:bmw:2-series-active-tourer | 2 Series Active Tourer | 宝马2系多功能旅行车 | BMW 2系列Active Tourer | BMW 2シリーズ アクティブツアラー | class:eu:m | body:mpv | pt:ice | current · 2014–present | 前驱平台紧凑型MPV |
| model:bmw:3-gt | 3 Series GT | 3系GT | — | — | class:cn:b | body:hatchback | pt:ice | discontinued · 2013–2020 | 3系GT(F34,2013–2020),3系的掀背GT版,2020年停产 |
| model:bmw:3-series | 3 Series | 宝马3系 | BMW 3系列 | BMW 3シリーズ | class:eu:d | body:sedan | pt:ice | current · 1975–present | 宝马销量支柱与运动标杆;中国版为华晨宝马3系(长轴G28);M3高性能版属本系列;欧洲另有旅行版 |
| model:bmw:328 | BMW 328 | 宝马328 | — | — | class:cn:a | body:roadster | pt:ice | discontinued · 1936–1940 | 328(1936–1940),宝马经典赛车,战前高性能跑车 |
| model:bmw:4-series | 4 Series | 宝马4系 | BMW 4系列 | BMW 4シリーズ | class:eu:d | body:coupe | pt:ice | current · 2014–present | 自3系独立出的轿跑/敞篷系列,另有Gran Coupé四门版;M4属本系列 |
| model:bmw:5-gt | 5 Series GT | 5系GT | — | — | class:cn:c | body:hatchback | pt:ice | discontinued · 2010–2017 | 5系GT(F07,2010–2017),5系的掀背GT版,2017年由6系GT接替 |
| model:bmw:5-series | 5 Series | 宝马5系 | BMW 5系列 | BMW 5シリーズ | class:eu:e | body:sedan | pt:ice | current · 1972–present | 中大型行政轿车;中国版为华晨宝马5系(长轴G68);M5高性能版属本系列;5系GT掀背版(2010–2018)已停产 |
| model:bmw:502 | BMW 502 | 宝马502 | — | — | class:cn:c | body:sedan | pt:ice | discontinued · 1952–1963 | 502(1952–1963),宝马战后V8豪华轿车 |
| model:bmw:6-gt | 6 Series GT | 6系GT | — | — | class:cn:c | body:hatchback | pt:ice | discontinued · 2017–2023 | 6系GT(G32,2017–2023),5系GT继任者,2023年停产 |
| model:bmw:6-series | 6 Series | 宝马6系 | BMW 6系列 | BMW 6シリーズ | class:eu:e | body:coupe | pt:ice | discontinued · 1976–2023 | 豪华轿跑系列(E24/E63/F06/G32),2023年停产;M6属本系列 |
| model:bmw:7-series | 7 Series | 宝马7系 | BMW 7系列 | BMW 7シリーズ | class:eu:f | body:sedan | pt:ice | current · 1977–present | 宝马旗舰豪华轿车;M760/M7高性能版属本系列;中国另有长轴与M760Le插混 |
| model:bmw:8-series | 8 Series | 宝马8系 | BMW 8系列 | BMW 8シリーズ | class:eu:s | body:coupe | pt:ice | discontinued · 1989–2026 | 第一代E31(1989–1999)为V12旗舰轿跑;第二代G15(2018–2026)含Cabrio/GC,2026年停产;M8属本系列 |
| model:bmw:bmw-m2 | BMW M2 | 宝马M2 | — | — | class:cn:a | body:coupe | pt:ice | current · 2016–present | M2(F87/G87,2016–),2系的M性能版 |
| model:bmw:bmw-m3 | BMW M3 | 宝马M3 | — | — | class:cn:b | body:sedan | pt:ice | current · 1986–present | M3(1986–),3系的M性能版,宝马性能标杆 |
| model:bmw:bmw-m4 | BMW M4 | 宝马M4 | — | — | class:cn:b | body:coupe | pt:ice | current · 2014–present | M4(F82/G82,2014–),4系的M性能版 |
| model:bmw:bmw-m5-2 | BMW M5 | 宝马M5 | — | — | class:cn:b | body:sedan | pt:ice | current · 1985–present | M5(1985–),5系的M性能版 |
| model:bmw:bmw-m6 | BMW M6 | 宝马M6 | — | — | class:cn:b | body:coupe | pt:ice | discontinued · 1983–2018 | M6(1983–2018),6系的M性能版(含M635CSi),2018年停产 |
| model:bmw:bmw-m8 | BMW M8 | 宝马M8 | — | — | class:cn:a | body:coupe | pt:ice | current · 2019–present | M8(F91/F92,2019–),8系的M性能版 |
| model:bmw:i3 | i3 | 宝马i3 | BMW i3 | BMW i3 | class:eu:b | body:hatchback | pt:bev | discontinued · 2013–2022 | 碳纤维车身城市纯电车,2022年停产;中国市场的「i3」另指3系纯电轿车(G28,2022起) |
| model:bmw:i4 | i4 | 宝马i4 | BMW i4 | BMW i4 | class:eu:d | body:sedan | pt:bev | current · 2021–present | 4系Gran Coupé的纯电版,中国已国产 |
| model:bmw:i4-m | i4 M | i4 M | — | — | class:cn:b | body:sedan | pt:bev | current · 2025–present | i4 M(2025–),i4的M性能纯电版 |
| model:bmw:i5 | i5 | 宝马i5 | BMW i5 | BMW i5 | class:eu:e | body:sedan | pt:bev | current · 2023–present | 5系纯电版;另有i5 Touring旅行版 |
| model:bmw:i5-m60 | i5 M60 | i5 M60 | — | — | class:cn:a | body:sedan | pt:bev | current · 2023–present | i5 M60(2023–),i5的M Performance纯电版 |
| model:bmw:i7 | i7 | 宝马i7 | BMW i7 | BMW i7 | class:eu:f | body:sedan | pt:bev | current · 2022–present | 7系纯电版 |
| model:bmw:i7-m70l | i7 M70L | i7 M70L | — | — | class:cn:a | body:sedan | pt:bev | current · 2023–present | i7 M70L(2023–),i7长轴的M Performance纯电版 |
| model:bmw:i8 | i8 | 宝马i8 | BMW i8 | BMW i8 | class:eu:s | body:sports | pt:phev | discontinued · 2014–2020 | 插混跑车,2020年停产 |
| model:bmw:ix | iX | 宝马iX | BMW iX | BMW iX | class:eu:e | body:suv | pt:bev | current · 2021–present | 全新纯电专属平台中型SUV |
| model:bmw:ix-m60 | iX M60 | iX M60 | — | — | class:cn:b | body:suv | pt:bev | current · 2022–present | iX M60(2022–),iX的M Performance纯电版 |
| model:bmw:ix1 | iX1 | 宝马iX1 | BMW iX1 | BMW iX1 | class:eu:c | body:suv | pt:bev | current · 2022–present | X1纯电版,中国已国产 |
| model:bmw:ix2 | iX2 | 宝马iX2 | BMW iX2 | BMW iX2 | class:eu:c | body:coupe | pt:bev | current · 2023–present | X2纯电版 |
| model:bmw:ix3 | iX3 | 宝马iX3 | BMW iX3 | BMW iX3 | class:eu:d | body:suv | pt:bev | current · 2020–present | X3纯电版,中国华晨宝马生产;2025年换代至Neue Klasse平台 |
| model:bmw:ix5 | BMW iX5 | 宝马iX5 | — | — | class:cn:c | body:suv | pt:fcev | current · 2022–present | iX5 Hydrogen(2022–),X5的氢燃料电池车,2022年小规模量产 |
| model:bmw:m1 | M1 | 宝马M1 | BMW M1 | BMW M1 | class:eu:s | body:sports | pt:ice | discontinued · 1978–1981 | M部门首款独立跑车,中置后驱 |
| model:bmw:m235l | BMW M235L | 宝马M235L | — | — | class:cn:a | body:sedan | pt:ice | current · 2024–present | M235L(2024–),中国特供长轴2系四门轿车的M Performance版 |
| model:bmw:m240i | BMW M240i | 宝马M240i | — | — | class:cn:a | body:coupe | pt:ice | current · 2016–present | M240i(2016–),2系的M Performance版 |
| model:bmw:m760le | BMW M760Le | 宝马M760Le | — | — | class:cn:a | body:sedan | pt:phev | current · 2022–present | M760Le(2022–),7系长轴的M Performance插混版 |
| model:bmw:x1 | X1 | 宝马X1 | BMW X1 | BMW X1 | class:eu:c | body:suv | pt:ice | current · 2009–present | 紧凑型SUV;中国版为华晨宝马X1(长轴) |
| model:bmw:x1-m35li | X1 M35Li | X1 M35Li | — | — | class:cn:a | body:suv | pt:ice | current · 2024–present | X1 M35Li(2024–),中国特供长轴X1的M性能版 |
| model:bmw:x2 | X2 | 宝马X2 | BMW X2 | BMW X2 | class:eu:c | body:coupe | pt:ice | current · 2018–present | X1的轿跑SUV版 |
| model:bmw:x2-m35i | X2 M35i | X2 M35i | — | — | class:cn:a | body:suv | pt:ice | current · 2024–present | X2 M35i(2024–),第二代X2的M性能版 |
| model:bmw:x3 | X3 | 宝马X3 | BMW X3 | BMW X3 | class:eu:d | body:suv | pt:ice | current · 2003–present | 中型豪华SUV;中国版为华晨宝马X3(长轴G48);X3 M与X3 M40i高性能版属本系列 |
| model:bmw:x3-m | X3 M | X3 M | — | — | class:cn:b | body:suv | pt:ice | current · 2019–present | X3 M(F97,2019–),X3的M性能版 |
| model:bmw:x3-m40i | X3 M40i | X3 M40i | — | — | class:cn:b | body:suv | pt:ice | current · 2018–present | X3 M40i(2018–),X3的M Performance版 |
| model:bmw:x3-m50 | X3 M50 | X3 M50 | — | — | class:cn:b | body:suv | pt:ice | current · 2025–present | X3 M50(2025–),第四代X3的M Performance版 |
| model:bmw:x4 | X4 | 宝马X4 | BMW X4 | BMW X4 | class:eu:d | body:coupe | pt:ice | current · 2014–present | X3的轿跑SUV版 |
| model:bmw:x4-m | BMW X4 M | 宝马X4 M | — | — | class:cn:b | body:coupe | pt:ice | current · 2019–present | X4 M(F98,2019–),X4轿跑SUV的M性能版 |
| model:bmw:x4-m40i | BMW X4 M40i | 宝马X4 M40i | — | — | class:cn:b | body:coupe | pt:ice | current · 2018–present | X4 M40i(2018–),X4轿跑SUV的M Performance版 |
| model:bmw:x5 | X5 | 宝马X5 | BMW X5 | BMW X5 | class:eu:e | body:suv | pt:ice | current · 1999–present | 开创豪华SUV先河;中国版为华晨宝马X5(国产长轴);X5 M属本系列 |
| model:bmw:x5-m | X5 M | X5 M | — | — | class:cn:c | body:suv | pt:ice | current · 2009–present | X5 M(F95,2019–),X5的M性能版,初代2009年上市 |
| model:bmw:x6 | X6 | 宝马X6 | BMW X6 | BMW X6 | class:eu:e | body:coupe | pt:ice | current · 2008–present | 轿跑SUV鼻祖;X6 M属本系列 |
| model:bmw:x6-m | X6 M | X6 M | — | — | class:cn:c | body:coupe | pt:ice | current · 2009–present | X6 M(F96,2019–),X6轿跑SUV的M性能版,初代2009年上市 |
| model:bmw:x7 | X7 | 宝马X7 | BMW X7 | BMW X7 | class:eu:f | body:suv | pt:ice | current · 2018–present | 宝马旗舰全尺寸SUV;另有超豪华Alpina XB7 |
| model:bmw:x7-m60i | X7 M60i | X7 M60i | — | — | class:cn:c | body:suv | pt:ice | current · 2023–present | X7 M60i(2023–),X7的M Performance版(改款后替代M50i) |
| model:bmw:xm | XM | 宝马XM | BMW XM | BMW XM | class:eu:f | body:suv | pt:phev | current · 2022–present | M部门独立研发的旗舰插混SUV |
| model:bmw:z3 | Z3 | 宝马Z3 | BMW Z3 | BMW Z3 | class:eu:s | body:roadster | pt:ice | discontinued · 1995–2002 | 首款量产Z系列跑车,007电影《黄金眼》同款 |
| model:bmw:z4 | Z4 | 宝马Z4 | BMW Z4 | BMW Z4 | class:eu:s | body:roadster | pt:ice | current · 2002–present | 双座敞篷跑车,与丰田Supra同平台(现款G29) |
| model:bmw:z4-m40i-2 | BMW Z4 M40i | 宝马Z4 M40i | — | — | class:cn:a | body:roadster | pt:ice | current · 2018–present | Z4 M40i(G29,2018–),Z4敞篷跑车的M Performance版 |
| model:bmw:z8 | Z8 | 宝马Z8 | BMW Z8 | BMW Z8 | class:eu:s | body:roadster | pt:ice | discontinued · 2000–2003 | 向507致敬的复古豪华敞篷跑车 |

## Borgward

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:borgward:bx3 | Borgward BX3 | BX3 | BX3 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2018–2020 | 小型SUV,宝沃品牌末期推出的入门SUV |
| model:borgward:bx5 | Borgward BX5 | BX5 | BX5 | — | class:cn:a | body:suv | pt:ice | discontinued · 2017–2020 | 紧凑型SUV,宝沃品牌主力车型 |
| model:borgward:bx7 | Borgward BX7 | BX7 | BX7 | — | class:cn:b | body:suv | pt:ice | discontinued · 2016–2020 | 中型SUV,宝沃品牌复活后的首款量产车型 |

## Brilliance

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:brilliance:3195a14684 | Zunchi | 尊驰 | — | — | class:cn:b | body:sedan | pt:ice | discontinued · 2004–2012 | 尊驰(2004-2012),中华中型轿车,已停产 |
| model:brilliance:3fc6138a87 | Junjie | 骏捷 | — | — | class:cn:b | body:sedan | pt:ice | discontinued · 2006–2011 | 骏捷(2006-2011),中华经典中型轿车,已停产 |
| model:brilliance:b7634eed47 | Brilliance Coupe | 中华酷宝 | — | — | class:cn:b | body:coupe | pt:ice | discontinued · 2007–2010 | 酷宝(2007-2010),中华双门轿跑,已停产 |
| model:brilliance:cross | Brilliance Junjie Cross | 中华骏捷Cross | — | — | class:cn:a | body:crossover | pt:ice | discontinued · 2009–2011 | 骏捷Cross(2009-2011),骏捷FRV跨界版,已停产 |
| model:brilliance:frv | Brilliance Junjie FRV | 中华骏捷FRV | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2008–2013 | 骏捷FRV(2008-2013),中华紧凑型两厢车,被H320接替,已停产 |
| model:brilliance:fsv | Brilliance Junjie FSV | 中华骏捷FSV | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2009–2013 | 骏捷FSV(2009-2013),骏捷FRV三厢版,已停产 |
| model:brilliance:h220 | Brilliance H220 | 中华H220 | Brilliance H220 | — | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2013–2015 | 小型两厢车,中华入门级车型 |
| model:brilliance:h230 | Brilliance H230 | 中华H230 | Brilliance H230 | — | class:cn:a0 | body:sedan | pt:ice | discontinued · 2012–2015 | 小型轿车 |
| model:brilliance:h230ev | Brilliance H230EV | 中华H230EV | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2016–2018 | 中华H230EV(2016-2018),H230纯电版,已停产 |
| model:brilliance:h3 | Brilliance H3 | 中华H3 | Brilliance H3 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2017–2019 | 紧凑型轿车,运动风格设计 |
| model:brilliance:h320 | Brilliance H320 | 中华H320 | Brilliance H320 | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2012–2015 | 紧凑型两厢车,骏捷FRV改款车型 |
| model:brilliance:h330 | Brilliance H330 | 中华H330 | Brilliance H330 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2013–2016 | 紧凑型轿车 |
| model:brilliance:h530 | Brilliance H530 | 中华H530 | Brilliance H530 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2011–2018 | 紧凑型轿车,中华主力轿车车型 |
| model:brilliance:v3 | Brilliance V3 | 中华V3 | Brilliance V3 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2015–2019 | 小型SUV,中华销量支柱车型 |
| model:brilliance:v5 | Brilliance V5 | 中华V5 | Brilliance V5 | — | class:cn:a | body:suv | pt:ice | discontinued · 2012–2018 | 紧凑型SUV,中华首款SUV车型 |
| model:brilliance:v6 | Brilliance V6 | 中华V6 | Brilliance V6 | — | class:cn:a | body:suv | pt:ice | discontinued · 2017–2019 | 紧凑型SUV |
| model:brilliance:v7 | Brilliance V7 | 中华V7 | Brilliance V7 | — | class:cn:b | body:suv | pt:ice | discontinued · 2018–2020 | 中型SUV,华晨中华末期旗舰车型 |

## Bugatti

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:bugatti:chiron | Bugatti Chiron | 布加迪Chiron | Bugatti Chiron | ブガッティ・シロン | class:eu:s | body:supercar | pt:ice | discontinued · 2016–2024 | Veyron继任者(W16四涡轮,1500PS),限量500辆,2024年停产 |
| model:bugatti:divo | Bugatti Divo | 布加迪Divo | Bugatti Divo | ブガッティ・ディーヴォ | class:eu:s | body:supercar | pt:ice | discontinued · 2018–2021 | Chiron赛道化限量版,限量40辆 |
| model:bugatti:mistral | Bugatti Mistral | 布加迪Mistral | Bugatti Mistral | ブガッティ・ミストラル | class:eu:s | body:roadster | pt:ice | discontinued · 2022–2023 | 品牌末代W16敞篷超跑(基于Chiron),限量99辆,2023年交付 |
| model:bugatti:tourbillon | Bugatti Tourbillon | 布加迪Tourbillon | Bugatti Tourbillon | ブガッティ・トゥールビヨン | class:eu:s | body:supercar | pt:phev | current · 2026–present | Chiron继任者(全新自然吸气V16+三电机插混,约1800PS),2026年起交付 |
| model:bugatti:veyron | Bugatti Veyron | 布加迪威航 | Bugatti Veyron | ブガッティ・ヴェイロン | class:eu:s | body:supercar | pt:ice | discontinued · 2005–2015 | 大众集团时代首款超跑(8.0L W16四涡轮,407km/h);大陆官方译名「威航」(台湾沿用英文) |

## Buick

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:buick:378b6c7926 | New Century | 新世纪 | — | — | class:cn:d | body:sedan | pt:ice | discontinued · 1999–2003 | 别克新世纪(1999-2003),上汽通用国产旗舰轿车,被君威接替 |
| model:buick:8130f93099 | Royale | 荣御 | — | — | class:cn:d | body:sedan | pt:ice | discontinued · 2005–2008 | 荣御(Royale,2005-2008),别克旗舰轿车,基于霍顿Statesman,已停产 |
| model:buick:buick-7 | Velite 7 | 微蓝7 | — | — | class:cn:a0 | body:suv | pt:bev | discontinued · 2020–2022 | 微蓝7(Velite 7,2020-2022),别克纯电小型SUV,已停产 |
| model:buick:buick-e4 | Buick E4 | 别克E4 | — | — | class:cn:b | body:suv | pt:bev | current · 2023–present | 别克E4(2023-),Electra系列纯电SUV(E4) |
| model:buick:buick-e5 | Buick E5 | 别克E5 | — | — | class:cn:b | body:suv | pt:bev | current · 2023–present | 别克E5(2023-),Electra系列纯电SUV(E5) |
| model:buick:buick-e7 | Buick Zhijing E7 | 别克至境E7 | — | — | class:cn:b | body:suv | pt:bev | current · 2025–present | 别克至境E7(2025-),至境系列纯电SUV |
| model:buick:buick-l7 | Buick Zhijing L7 | 别克至境L7 | — | — | class:cn:c | body:sedan | pt:erev | current · 2025–present | 别克至境L7(2025-),至境系列大型轿车,先期增程版 |
| model:buick:cascada | Buick Cascada | 别克Cascada | — | — | class:us:compact | body:convertible | pt:ice | discontinued · 2016–2019 | Cascada(2016-2019),别克敞篷车,基于欧宝Cascada,北美市场,2019年停产 |
| model:buick:century | Century | 世纪 | Century | センチュリー | class:us:midsize | body:sedan | pt:ice | discontinued · 1936–2005 | 历史车系,2005年停产;注意与别克GL8世纪(2022)区分 |
| model:buick:enclave | Enclave | 昂科旗 | Enclave | エンクレーブ | class:eu:j | body:suv | pt:ice | current · 2007–present | 中国版「昂科旗」(2019年起国产);早期进口版中文名「昂科雷」(2008–2019) |
| model:buick:encore | Encore | 昂科拉 | Encore | アンコール | class:us:small-suv | body:crossover | pt:ice | discontinued · 2012–2022 | 2022年停产,由Encore GX与Envista接替 |
| model:buick:encore-gx | Encore GX | 昂科拉GX | Encore GX | アンコールGX | class:us:small-suv | body:crossover | pt:ice | current · 2019–present | 韩国GM Korea制造,北美与中国销售 |
| model:buick:encore-plus | Encore Plus | 昂科拉PLUS | Encore Plus | — | class:cn:a0 | body:suv | pt:ice | current · 2023–present | 中国特供小型SUV,2023年上市;注意与昂科拉/昂科拉GX区分 |
| model:buick:envision | Envision | 昂科威 | Envision | エンビジョン | class:eu:j | body:crossover | pt:ice | current · 2014–present | 中国版昂科威S/昂科威Plus;北美亦有销售 |
| model:buick:envista | Envista | 昂扬 | Envista | エンビスタ | class:eu:j | body:crossover | pt:ice | current · 2023–present | 中国版「昂扬」(2022年上市) |
| model:buick:excelle | Excelle | 英朗 | Excelle | エクセル | class:cn:a | body:sedan | pt:ice | discontinued · 2003–2023 | 中国特供车型;2023年停产 |
| model:buick:excelle-gt | Excelle GT | 阅朗 | Excelle GT | — | class:cn:a | body:wagon | pt:ice | discontinued · 2017–2020 | 英朗旅行版,上汽通用国产,2020年停产 |
| model:buick:gl6 | GL6 | 别克GL6 | GL6 | — | class:cn:mpv | body:mpv | pt:ice | current · 2017–present | 上汽通用国产紧凑六座MPV,2017年上市 |
| model:buick:gl8 | GL8 | 别克GL8 | GL8 | GL8 | class:eu:m | body:mpv | pt:ice | current · 1999–present | 中国大陆专属商务MPV;2022年推出GL8世纪(Century) |
| model:buick:lacrosse | LaCrosse | 君越 | LaCrosse | ラクロス | class:cn:c | body:sedan | pt:ice | current · 2004–present | 北美2019年停产;中国第四代君越(2023款)继续生产 |
| model:buick:park-avenue | Park Avenue | 林荫大道 | Park Avenue | パークアベニュー | class:us:large | body:sedan | pt:ice | discontinued · 1990–2012 | 北美2005年停产;中国版「林荫大道」2007–2012 |
| model:buick:regal | Regal | 君威 | Regal | リーガル | class:cn:b | body:sedan | pt:ice | current · 1973–present | 北美2020年停产;中国上汽通用别克「君威」继续生产 |
| model:buick:skylark | Skylark | Skylark | Skylark | スカイラーク | class:us:compact | body:sedan | pt:ice | discontinued · 1953–1998 | 1998年停产 |
| model:buick:velite-5 | Velite 5 | VELITE 5 | Velite 5 | — | class:cn:a | body:sedan | pt:erev | discontinued · 2017–2019 | 别克首款新能源车型,增程式(EREV);上汽通用国产 |
| model:buick:velite-6 | Velite 6 | 微蓝6 | Velite 6 | — | class:cn:a | body:hatchback | pt:bev | current · 2019–present | 上汽通用国产「微蓝」新能源家族,以纯电为主,另有插混版 |
| model:buick:verano | Verano | 威朗 | Verano | ベラーノ | class:cn:a | body:sedan | pt:ice | current · 2010–present | 北美2016年停产;中国威朗Pro(2021款)继续生产 |

## BYD

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:byd:06-dm-i | Seal 06 DM-i Touring | 海豹06 DM-i旅行版 | — | — | class:cn:b | body:wagon | pt:phev | current · — | 海豹06 DM-i旅行版(2025-),海洋网插混旅行车 |
| model:byd:06gt | Seal 06 GT | 海豹06GT | — | — | class:cn:b | body:hatchback | pt:bev | current · — | 海豹06GT(2024-),海洋网纯电运动两厢车 |
| model:byd:07-dm-i | Seal 07 DM-i | 海豹07 DM-i | — | — | class:cn:b | body:sedan | pt:phev | current · — | 海豹07 DM-i(2024-),海洋网插混轿车 |
| model:byd:07-ev | Seal 07 EV | 海豹07 EV | — | — | class:cn:b | body:sedan | pt:bev | current · — | 海豹07 EV(2024-),海洋网纯电轿车 |
| model:byd:476da0fa0d | Flyer | 福莱尔 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · — | 福莱尔(2002-2008),比亚迪收购秦川后首款车型(源自秦川福莱尔),2008年停产 |
| model:byd:byd-08 | Seal 08 | 海豹08 | — | — | class:cn:b | body:suv | pt:phev | current · — | 海豹08(2026-),海洋网旗舰SUV |
| model:byd:byd-c6 | C6 | C6 | — | — | class:cn:mpv | body:van | pt:bev | current · — | C6(2015-),比亚迪纯电动中巴客车 |
| model:byd:byd-d1 | BYD D1 | 比亚迪D1 | — | — | class:cn:a | body:mpv | pt:bev | current · — | D1(2020-),比亚迪纯电MPV(滴滴定制网约车) |
| model:byd:byd-e1 | BYD e1 | 比亚迪e1 | — | — | class:cn:a | body:hatchback | pt:bev | discontinued · — | e1(2019-2021),比亚迪纯电微型车(基于F0),2021年停产 |
| model:byd:byd-e3 | BYD e3 | 比亚迪e3 | — | — | class:cn:a | body:sedan | pt:bev | discontinued · — | e3(2019-2022),比亚迪纯电紧凑型轿车(网约车),2022年停产 |
| model:byd:byd-e7 | BYD e7 | 比亚迪e7 | — | — | class:cn:a | body:sedan | pt:bev | current · — | e7(2025-),比亚迪纯电紧凑型轿车(网约车) |
| model:byd:byd-e9 | BYD e9 | 比亚迪e9 | — | — | class:cn:a | body:sedan | pt:bev | discontinued · — | e9(2021-2023),比亚迪纯电轿车(网约车),2023年停产 |
| model:byd:byd-f6 | BYD F6 | 比亚迪F6 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · — | F6(2008-2013),比亚迪B级轿车,2013年停产 |
| model:byd:byd-g3 | BYD G3 | 比亚迪G3 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · — | G3(2009-2014),比亚迪紧凑型轿车(网约车),2014年停产 |
| model:byd:byd-g6 | BYD G6 | 比亚迪G6 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · — | G6(2011-2016),比亚迪B级轿车,2016年停产 |
| model:byd:byd-l | Tang L | 唐L | — | — | class:cn:a | body:suv | pt:ice | current · — | 唐L(2025-),王朝系列中大型SUV,唐的旗舰版 |
| model:byd:byd-l-2 | Han L | 汉L | — | — | class:cn:a | body:sedan | pt:ice | current · — | 汉L(2025-),王朝系列旗舰轿车,汉的换代 |
| model:byd:byd-m9 | BYD M9 | 比亚迪M9 | — | — | class:cn:a | body:mpv | pt:phev | current · — | M9(2025-),比亚迪夏的出口版中大型插混MPV(先面向墨西哥) |
| model:byd:byd-s2 | BYD S2 | 比亚迪S2 | — | — | class:cn:a | body:suv | pt:bev | discontinued · — | S2(2019-2021),比亚迪纯电小型SUV,2021年停产 |
| model:byd:byd-s8 | BYD S8 | 比亚迪S8 | — | — | class:cn:a | body:convertible | pt:ice | discontinued · — | S8(2009-2013),比亚迪硬顶敞篷跑车,2013年停产 |
| model:byd:denza-d9 | Denza D9 | 腾势D9 | Denza D9 | — | class:cn:mpv | body:mpv | pt:phev | current · 2022–present | 腾势(Denza)子品牌(比亚迪控股)中大型MPV;DM-i插混/EV双动力 |
| model:byd:denza-n7 | Denza N7 | 腾势N7 | Denza N7 | — | class:cn:b | body:suv | pt:bev | current · 2023–present | 腾势(Denza)子品牌中型纯电SUV(2023年上市,猎跑造型) |
| model:byd:denza-n8 | Denza N8 | 腾势N8 | Denza N8 | — | class:cn:b | body:suv | pt:phev | current · 2023–present | 腾势(Denza)子品牌中大型SUV(2023年上市,插混/纯电) |
| model:byd:denza-x | Denza X | 腾势X | Denza X | — | class:cn:b | body:suv | pt:phev | discontinued · 2019–2022 | 腾势(Denza)子品牌中型SUV(基于比亚迪唐平台,2019年广州车展上市,含纯电与插混版);约2022年停产 |
| model:byd:denza-z9 | Denza Z9 | 腾势Z9 | Denza Z9 | — | class:cn:c | body:sedan | pt:phev | current · 2024–present | 腾势(Denza)子品牌旗舰轿车(2024年上市,插混/纯电,含Z9GT猎装版) |
| model:byd:destroyer-05 | Destroyer 05 | 驱逐舰05 | Destroyer 05 | — | class:cn:a | body:sedan | pt:phev | discontinued · 2022–2025 | 海洋系列紧凑型插混轿车;2025年中国市场更名为海豹05(Seal 05)并停用本名;海外称Chazor King/Seal 5 |
| model:byd:dolphin | Dolphin | 海豚 | Dolphin | ドルフィン(DOLPHIN) | class:cn:a0 | body:hatchback | pt:bev | current · 2021–present | 海洋系列小型纯电两厢车;日本2023年导入(ドルフィン);e-Platform 3.0首款车型 |
| model:byd:e2 | e2 | e2 | e2 | — | class:cn:a | body:hatchback | pt:bev | discontinued · 2019–2023 | e2(2019-2022),紧凑型纯电两厢,主供出租/网约车,2022年停产 |
| model:byd:e5 | e5 | e5 | e5 | — | class:cn:a | body:sedan | pt:bev | discontinued · 2016–2021 | 紧凑型纯电轿车,主供出租/网约车市场;2021年停产 |
| model:byd:e6 | e6 | e6 | e6 | — | class:cn:mpv | body:mpv | pt:bev | current · 2021–present | 第二代基于宋MAX的纯电紧凑MPV,主供出租/网约车;初代e6为2009–2021 |
| model:byd:f0 | F0 | F0 | F0 | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2008–2015 | A00级微型车,2015年停产 |
| model:byd:f3 | F3 | F3 | F3 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2005–2021 | 比亚迪成名之作,曾长期位居自主品牌轿车销量前列;2021年停产 |
| model:byd:f3r | BYD F3R | 比亚迪F3R | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · — | F3R(2008-2013),F3的两厢版,2013年停产 |
| model:byd:fangchengbao-bao-5 | Fangchengbao Bao 5 | 方程豹豹5 | Fangchengbao Bao 5 | — | class:cn:b | body:suv | pt:phev | current · 2023–present | 方程豹(Fangchengbao)子品牌首款车型(2023年上市,超级混动越野SUV,DMO平台) |
| model:byd:fangchengbao-bao-8 | Fangchengbao Bao 8 | 方程豹豹8 | Fangchengbao Bao 8 | — | class:cn:c | body:suv | pt:phev | current · 2024–present | 方程豹(Fangchengbao)子品牌中大型越野SUV(2024年上市,含华为智驾版) |
| model:byd:fangchengbao-tai-7 | Fangchengbao Tai 7 | 方程豹钛7 | Fangchengbao Tai 7 | — | class:cn:c | body:suv | pt:phev | current · 2025–present | 方程豹(Fangchengbao)子品牌钛系列中大型SUV(2025年9月上市,承载式车身,1.5T插混,车长4999mm) |
| model:byd:frigate-07 | Frigate 07 | 护卫舰07 | Frigate 07 | — | class:cn:b | body:suv | pt:phev | discontinued · 2022–2025 | 海洋系列中型SUV(DM-i/DM-p);2025年停产 |
| model:byd:g3r | BYD G3R | 比亚迪G3R | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · — | G3R(2011-2014),G3的两厢版,2014年停产 |
| model:byd:g5 | G5 | G5 | G5 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2014–2017 | 紧凑型轿车,2014年上市,2017年停产 |
| model:byd:han | Han | 汉 | Han(台湾导入状态待核实) | ハン | class:cn:c | body:sedan | pt:phev | current · 2020–present | 王朝系列旗舰中大型轿车,EV/DM-i/DM-p多动力;海外市场沿用Han;2025年推出汉L |
| model:byd:l-ev | Song L EV | 宋L EV | — | — | class:cn:b | body:suv | pt:bev | current · — | 宋L EV(2023-),王朝系列中大型纯电SUV(猎装风格) |
| model:byd:l3 | L3 | L3 | L3 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2012–2016 | 紧凑型轿车(源自F3平台),2012年上市,2016年停产 |
| model:byd:m6 | M6 | M6 | M6 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2010–2020 | MPV(7座),2010年上市,含多次改款;2020年前后停产 |
| model:byd:max-2 | Qin MAX | 秦MAX | — | — | class:cn:a | body:mpv | pt:phev | current · — | 秦MAX(2026-),王朝系列MPV |
| model:byd:pro-2 | Qin Pro | 秦Pro | — | — | class:cn:a | body:sedan | pt:ice | discontinued · — | 秦Pro(2018-2021),秦的换代,2021年由秦PLUS接替 |
| model:byd:qin | Qin | 秦 | Qin | — | class:cn:a | body:sedan | pt:phev | discontinued · 2013–2021 | 王朝系列初代紧凑型轿车,2013年上市,含燃油/插混(秦DM)/纯电(秦EV即秦新能源)历代;2021年由秦PLUS接替 |
| model:byd:qin-l | Qin L | 秦L | Qin L | — | class:cn:b | body:sedan | pt:phev | current · 2024–present | 中型轿车(A+级),DM-i/EV;海外称Seal 6 |
| model:byd:qin-plus | Qin Plus | 秦PLUS | Qin Plus | — | class:cn:a | body:sedan | pt:phev | current · 2021–present | 紧凑型轿车,DM-i/EV;早期秦EV(2019–2021)、秦Pro等并入本条 |
| model:byd:s6 | S6 | S6 | S6 | — | class:cn:b | body:suv | pt:ice | discontinued · 2011–2016 | 中型SUV(燃油),2016年停产 |
| model:byd:s7 | S7 | S7 | S7 | — | class:cn:b | body:suv | pt:ice | discontinued · 2014–2018 | 中型SUV(燃油),2018年停产 |
| model:byd:seagull | Seagull | 海鸥 | Seagull | シーガル(SEAGULL) | class:cn:a00 | body:hatchback | pt:bev | current · 2023–present | A00级纯电微型车;日本2025年导入(シーガル);海外亦以Dolphin Mini/Atto 1销售 |
| model:byd:seal | Seal | 海豹 | Seal | シール(SEAL) | class:cn:b | body:sedan | pt:bev | current · 2022–present | 海洋系列中型纯电轿车;日本2023年导入(シール);中国市场2025年停售,海外(Seal)续售 |
| model:byd:seal-05 | Seal 05 DM-i | 海豹05 DM-i | Seal 5 | — | class:cn:a | body:sedan | pt:phev | current · 2025–present | 海洋系列紧凑型插混轿车,2025年上市,由驱逐舰05更名而来 |
| model:byd:seal-06 | Seal 06 | 海豹06 | Seal 06 | — | class:cn:b | body:sedan | pt:phev | current · 2024–present | 海洋系列中型轿车(A+级),DM-i插混/EV双动力;海外称Seal 6 |
| model:byd:sealion-07 | Sealion 07 | 海狮07 | Sealion 7 | シーライオン7(Sealion 7) | class:cn:b | body:suv | pt:bev | current · 2024–present | 海洋系列中型纯电SUV;海外(含日本)称Sealion 7;中国市场2025年停售 |
| model:byd:sirui | Sirui | 思锐 | Sirui | — | class:cn:b | body:sedan | pt:ice | discontinued · 2013–2016 | 中型轿车,2013年上市,2016年停产 |
| model:byd:song | Song | 宋 | Song | — | class:cn:a | body:suv | pt:ice | discontinued · 2015–2021 | 王朝系列紧凑型SUV(燃油),2015年上市;插混/纯电版见宋新能源;2021年前后停产,由宋PLUS等接替 |
| model:byd:song-l | Song L | 宋L | Song L | — | class:cn:b | body:suv | pt:phev | current · 2023–present | 中型SUV,EV(2023)与DM-i(2024)双版本 |
| model:byd:song-l-dmi | Song L DM-i | 宋L DM-i | Song L DM-i | — | class:cn:b | body:suv | pt:phev | current · 2024–present | 王朝系列中型SUV,DM-i插混版(2024年上市);纯电版见宋L |
| model:byd:song-max | Song Max | 宋MAX | Song Max | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2017–2024 | 紧凑型MPV(6/7座),含DM-i插混与EV版本;2024年停产,海外e6/M6与其同源 |
| model:byd:song-nev | Song New Energy | 宋新能源 | Song | — | class:cn:a | body:suv | pt:phev | discontinued · 2017–2021 | 王朝系列紧凑型SUV新能源版(宋DM/宋EV),2017年上市,2021年前后停产,由宋PLUS DM-i等接替 |
| model:byd:song-plus | Song Plus | 宋PLUS | Song Plus | — | class:cn:a | body:suv | pt:phev | current · 2020–present | 紧凑型SUV,DM-i/EV;海外称Seal U或Sealion 6;中国市场2025年停售(转海外生产) |
| model:byd:song-pro | Song Pro | 宋Pro | Song Pro | — | class:cn:a | body:suv | pt:phev | current · 2019–present | 紧凑型SUV,DM-i为主;海外称Song Pro/Sealion 5 |
| model:byd:suru | Surui | 速锐 | Surui | — | class:cn:a | body:sedan | pt:ice | discontinued · 2012–2017 | 紧凑型轿车,2012年上市,2017年停产 |
| model:byd:tang | Tang | 唐 | Tang(台湾导入状态待核实) | タン | class:cn:b | body:suv | pt:phev | current · 2018–present | 王朝系列中型SUV,DM-i/DM-p/EV多动力;初代2015-2018;海外名Tang(部分市场Tan/Sealion 8) |
| model:byd:ultra | Song Ultra | 宋Ultra | — | — | class:cn:a | body:suv | pt:phev | current · — | 宋Ultra(2025-),王朝系列中大型SUV |
| model:byd:yangwang-u8 | Yangwang U8 | 仰望U8 | Yangwang U8 | — | class:cn:d | body:suv | pt:erev | current · 2023–present | 仰望(Yangwang)子品牌(比亚迪旗下)大型越野SUV,增程式,四电机原地掉头等 |
| model:byd:yangwang-u9 | Yangwang U9 | 仰望U9 | Yangwang U9 | — | class:eu:s | body:supercar | pt:bev | current · 2024–present | 仰望(Yangwang)子品牌纯电超级跑车(2024年上市,四电机,云辇-X) |
| model:byd:yuan | Yuan | 元 | Yuan | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2016–2022 | 王朝系列小型SUV(燃油),2016年上市;燃油版2022年前后停产,后以纯电(元新能源/元Pro)为主 |
| model:byd:yuan-plus | Yuan Plus (Atto 3) | 元PLUS | Atto 3 | アット3(ATTO 3) | class:cn:a | body:suv | pt:bev | current · 2022–present | 紧凑型纯电SUV;海外市场(含日本)统一称ATTO 3(アット3) |
| model:byd:yuan-pro | Yuan Pro | 元Pro | Yuan Pro | — | class:cn:a0 | body:suv | pt:bev | current · 2018–present | 元Pro(2021-),王朝系列小型纯电SUV;本条合并元新能源(元EV,2018年上市),2021年改款更名元Pro |
| model:byd:yuan-up | Yuan Up (Atto 2) | 元UP | Atto 2 | — | class:cn:a0 | body:suv | pt:bev | current · 2024–present | 元UP(2024-),小型纯电SUV;海外称Atto 2(2025年欧洲上市) |

## Cadillac

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:cadillac:ats | ATS | ATS(ATS-L) | ATS | ATS | class:cn:b | body:sedan | pt:ice | discontinued · 2012–2019 | 中国版加长ATS-L(2014–2019) |
| model:cadillac:bls | Cadillac BLS | 凯迪拉克BLS | 凱迪拉克BLS | キャデラックBLS | class:eu:d | body:sedan | pt:ice | discontinued · 2005–2009 | 基于萨博9-3平台打造的紧凑型豪华轿车,主攻欧洲市场;含 wagon 版 BLS SportWagon |
| model:cadillac:brougham | Brougham | Brougham | Brougham | ブロアム | class:us:large | body:sedan | pt:ice | discontinued · 1986–1992 | 全尺寸后驱豪华轿车 |
| model:cadillac:celestiq | Celestiq | Celestiq | Celestiq | セレスティーク | class:eu:f | body:sedan | pt:bev | current · 2023–present | 手工定制纯电旗舰轿车 |
| model:cadillac:ct4 | CT4 | CT4 | CT4 | CT4 | class:eu:d | body:sedan | pt:ice | current · 2019–present | 北美2026年停产,中国继续生产 |
| model:cadillac:ct5 | CT5 | CT5 | CT5 | CT5 | class:eu:e | body:sedan | pt:ice | current · 2019–present | 上汽通用国产CT5;有高性能版CT5-V |
| model:cadillac:ct6 | CT6 | CT6 | CT6 | CT6 | class:eu:f | body:sedan | pt:ice | current · 2016–present | 北美2020年停产;中国继续生产(2023款) |
| model:cadillac:ct6-plug-in | Cadillac CT6 Plug-in | 凯迪拉克CT6插电混动 | 凱迪拉克CT6插電混動 | キャデラックCT6プラグインハイブリッド | class:eu:f | body:sedan | pt:phev | discontinued · 2017–2020 | CT6插电混动版,2.0T+电机,纯电续航约80km(中国版) |
| model:cadillac:cts | CTS | CTS | CTS | CTS | class:cn:c | body:sedan | pt:ice | discontinued · 2005–2018 | 中型/中大型运动轿车,进口与上海通用国产并行;2018年停产 |
| model:cadillac:devill | DeVille | 帝威 | DeVille | デビル | class:us:large | body:sedan | pt:ice | discontinued · 1959–2005 | 大陆译名「帝威」 |
| model:cadillac:dts | DTS | DTS | DTS | DTS | class:us:large | body:sedan | pt:ice | discontinued · 2005–2011 | 全尺寸前驱豪华轿车 |
| model:cadillac:eldorado | Eldorado | 埃尔多拉多 | Eldorado | エルドラド | class:us:large | body:coupe | pt:ice | discontinued · 1952–2002 | 个人豪华双门轿跑,2002年停产 |
| model:cadillac:elr | Cadillac ELR | 凯迪拉克ELR | 凱迪拉克ELR | キャデラックELR | class:eu:d | body:coupe | pt:phev | discontinued · 2014–2016 | 插电混动豪华双门轿跑,基于雪佛兰Volt平台,1.4L+电机 |
| model:cadillac:escalade | Escalade | 凯雷德 | Escalade(凱雷德) | エスカレード | class:us:standard-suv | body:suv | pt:ice | current · 1998–present | 大陆官方译名「凯雷德」;与Tahoe/Suburban同平台,有纯电Escalade IQ |
| model:cadillac:fleetwood | Fleetwood | 弗雷特伍德 | Fleetwood | フリートウッド | class:us:large | body:sedan | pt:ice | discontinued · 1976–1996 | 大陆译名「弗雷特伍德」 |
| model:cadillac:gt4 | GT4 | GT4 | GT4 | GT4 | class:cn:a | body:crossover | pt:ice | current · 2023–present | 上汽通用国产紧凑型轿跑SUV(2023年上市),凯迪拉克最入门车型 |
| model:cadillac:lyriq | Lyriq | 锐歌 | Lyriq | リリック | class:eu:j | body:crossover | pt:bev | current · 2022–present | 中国版中文名「锐歌」 |
| model:cadillac:optiq | Optiq | 傲歌 | Optiq | オプティック | class:eu:j | body:crossover | pt:bev | current · 2023–present | 紧凑纯电SUV;中国版中文名「傲歌」(2024款) |
| model:cadillac:sls | SLS | SLS赛威 | SLS | SLS | class:cn:c | body:sedan | pt:ice | discontinued · 2010–2013 | 上海通用国产中大型轿车,赛威为STS/DeVille的中国特供加长版;2013年停产 |
| model:cadillac:srx | SRX | SRX | SRX | SRX | class:eu:j | body:crossover | pt:ice | discontinued · 2003–2016 | 中国进口版SRX(2007–2016) |
| model:cadillac:sts | STS | STS | STS | STS | class:us:midsize | body:sedan | pt:ice | discontinued · 2005–2011 | 接替Seville(1975–2004) |
| model:cadillac:vistiq | Vistiq | Vistiq | Vistiq | ビスティック | class:eu:j | body:crossover | pt:bev | current · 2025–present | 三排座纯电中大型SUV(2026款) |
| model:cadillac:xlr | Cadillac XLR | 凯迪拉克XLR | 凱迪拉克XLR | キャデラックXLR | class:eu:s | body:roadster | pt:ice | discontinued · 2003–2009 | 豪华硬顶敞篷跑车,与雪佛兰Corvette C6同平台,4.6L/4.4L V8北极星发动机 |
| model:cadillac:xt4 | XT4 | XT4 | XT4 | XT4 | class:eu:j | body:crossover | pt:ice | current · 2018–present | 北美2025年停产,中国继续生产 |
| model:cadillac:xt5 | XT5 | XT5 | XT5 | XT5 | class:eu:j | body:crossover | pt:ice | current · 2016–present | 上汽通用国产XT5(2024年换代) |
| model:cadillac:xt5-phev | Cadillac XT5 PHEV | 凯迪拉克XT5插电混动 | 凱迪拉克XT5插電混動 | キャデラックXT5プラグインハイブリッド | class:eu:j | body:crossover | pt:phev | discontinued · 2019–2022 | XT5插电混动版,中国特供,2.0T+电机 |
| model:cadillac:xt6 | XT6 | XT6 | XT6 | XT6 | class:eu:j | body:crossover | pt:ice | current · 2019–present | 三排座中大型SUV;北美2025年停产,中国继续 |
| model:cadillac:xts | XTS | XTS | XTS | XTS | class:cn:c | body:sedan | pt:ice | discontinued · 2013–2019 | 中国版生产至2020年 |

## Caterham

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:caterham:seven | Caterham Seven | 卡特汉姆Seven | Caterham Seven | カターハム・セブン | class:eu:s | body:roadster | pt:ice | current · 1973–present | 源自路特斯Seven的极致轻量化开放赛车,含620R/360R等版本,持续生产至今 |

## Changan

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:changan:1663f678b8 | Changan Hunter Explorer | 长安览拓者 | — | — | class:cn:a | body:pickup | pt:ice | current · 2022–present | 长安览拓者(2022–),长安燃油皮卡,与猎手为同平台 |
| model:changan:3f5fbf837a | Changan Hunter | 长安猎手 | — | — | class:cn:a | body:pickup | pt:erev | current · 2024–present | 长安猎手(2024–),长安增程式皮卡 |
| model:changan:8aaf4d8dad | Jiexun | 杰勋 | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2007–2010 | 杰勋(2007–2010),长安紧凑型MPV,2010年停产 |
| model:changan:a05 | A05 Classic | A05经典 | — | — | class:cn:a | body:sedan | pt:ice | current · 2025–present | 启源A05经典版(2025–),启源A05的老款同堂销售 |
| model:changan:a05-2 | Changan Qiyuan A05 Classic | 长安启源A05经典 | — | — | class:cn:a | body:sedan | pt:phev | current · 2023–present | 启源A05(2023–),启源子品牌插混紧凑型轿车 |
| model:changan:a05l | Changan Qiyuan A05L | 长安启源A05L | — | — | class:cn:a | body:sedan | pt:phev | current · 2025–present | 启源A05L(2025–),启源A05的改款插混轿车 |
| model:changan:a06 | Changan Qiyuan A06 | 长安启源A06 | — | — | class:cn:a | body:sedan | pt:phev | current · 2025–present | 启源A06(2025–),启源子品牌插混紧凑型轿车 |
| model:changan:aeb80b000e | Zhixiang | 志翔 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2008–2010 | 志翔(2008–2010),长安紧凑型轿车,2010年停产 |
| model:changan:avatr-11 | Avatr 11 | 阿维塔11 | Avatr 11 | — | class:cn:b | body:suv | pt:bev | current · 2022–present | 阿维塔(AVATR)子品牌(长安-华为-宁德时代)中型纯电SUV,2024年新增增程版 |
| model:changan:avatr-12 | Avatr 12 | 阿维塔12 | Avatr 12 | — | class:cn:b | body:sedan | pt:bev | current · 2023–present | 阿维塔(AVATR)子品牌中大型纯电轿车,2024年新增增程版 |
| model:changan:benben | Changan Benben | 长安奔奔 | Changan Benben | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2006–2015 | A00级微型两厢车(燃油版);已停产 |
| model:changan:benben-ev | Benben EV | 长安奔奔EV | Changan Benben EV | — | class:cn:a00 | body:hatchback | pt:bev | discontinued · 2016–2020 | A00级纯电微型车(含奔奔E-Star衍生),2020年停产 |
| model:changan:benben-mini | Changan Benben Mini | 长安奔奔MINI | Changan Benben Mini | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2010–2015 | A00级微型两厢车(奔奔衍生);已停产 |
| model:changan:changan-et | Eado ET | 逸动ET | — | — | class:cn:a | body:hatchback | pt:bev | discontinued · 2019–2020 | 逸动ET(2019–2020),逸动两厢纯电版,2020年停产 |
| model:changan:changan-i | Benben i | 奔奔i | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2006–2010 | 奔奔i(2006–2010),奔奔初代,2010年停产 |
| model:changan:cs15 | Changan CS15 | 长安CS15 | Changan CS15 | — | class:cn:a0 | body:suv | pt:ice | current · 2016–present | 小型SUV(2016年上市) |
| model:changan:cs15ev | Changan CS15EV | 长安CS15EV | — | — | class:cn:a0 | body:suv | pt:bev | current · 2018–present | CS15EV(2018–),CS15的纯电动版 |
| model:changan:cs35 | CS35 | 长安CS35 | Changan CS35 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2012–2018 | 小型SUV,2018年停产,继任为CS35 PLUS(现售) |
| model:changan:cs35plus | Changan CS35PLUS | 长安CS35PLUS | — | — | class:cn:a | body:suv | pt:ice | current · 2018–present | CS35 PLUS(2018–),CS35的换代,现售 |
| model:changan:cs55 | CS55 | 长安CS55 | Changan CS55 | — | class:cn:a | body:suv | pt:ice | current · 2017–present | 紧凑型SUV,现售为CS55 PLUS |
| model:changan:cs55-2 | CS55 EV | CS55纯电版 | — | — | class:cn:a | body:suv | pt:bev | current · 2020–present | CS55纯电版(2020–),CS55的纯电动版 |
| model:changan:cs55plus | Changan CS55PLUS | 长安CS55PLUS | — | — | class:cn:a | body:suv | pt:ice | current · 2019–present | CS55 PLUS(2019–),CS55的换代,现售 |
| model:changan:cs55plus-phev | Changan CS55PLUS PHEV | 长安CS55PLUS PHEV | — | — | class:cn:a | body:suv | pt:phev | current · 2025–present | CS55 PLUS PHEV(2025–),CS55 PLUS插电混动版,2025年3月上市 |
| model:changan:cs75 | CS75 | 长安CS75 | Changan CS75 | — | class:cn:a | body:suv | pt:ice | current · 2014–present | 紧凑型SUV(燃油),CS75 PLUS为现售主力 |
| model:changan:cs75-plus | CS75 Plus | 长安CS75 PLUS | Changan CS75 Plus | — | class:cn:a | body:suv | pt:ice | current · 2019–present | 紧凑型SUV主力车型,2024年第四代;另有智电iDD插混 |
| model:changan:cs75-plus-idd | CS75 PLUS iDD | CS75 PLUS 智电iDD | — | — | class:cn:a | body:suv | pt:phev | current · 2022–present | CS75 PLUS智电iDD(2022–),CS75 PLUS插电混动版 |
| model:changan:cs85-coupe | Changan CS85 Coupe | 长安CS85 COUPE | Changan CS85 Coupe | — | class:cn:b | body:crossover | pt:ice | current · 2019–present | 中型轿跑SUV(2019年上市) |
| model:changan:cs95 | CS95 | 长安CS95 | Changan CS95 | — | class:cn:c | body:suv | pt:ice | current · 2017–present | 中大型SUV(7座),2017年上市,2019年中期改款 |
| model:changan:cx20 | Changan CX20 | 长安CX20 | Changan CX20 | — | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2010–2016 | 小型两厢跨界车;已停产 |
| model:changan:cx30 | Changan CX30 | 长安CX30 | Changan CX30 | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2010–2013 | 紧凑型两厢车(2010年上市);已停产 |
| model:changan:deepal-s07 | Deepal S07 | 深蓝S07 | Deepal S07 | — | class:cn:b | body:suv | pt:erev | current · 2023–present | 深蓝(Deepal)子品牌中型SUV,增程/纯电 |
| model:changan:deepal-sl03 | Deepal SL03 | 深蓝SL03 | Deepal SL03 | — | class:cn:b | body:sedan | pt:erev | current · 2022–present | 深蓝(Deepal)子品牌中型轿车,增程/纯电(另有氢电版) |
| model:changan:e-pro | Changan New Energy E-Pro | 新能源E-Pro | — | — | class:cn:a | body:suv | pt:bev | discontinued · 2019–2021 | 长安E-Pro(2019–2021),长安新能源纯电小型SUV,2021年停产 |
| model:changan:e-star | Benben E-Star | 奔奔E-Star | — | — | class:cn:a | body:hatchback | pt:bev | current · 2020–present | 奔奔E-Star(2020–),奔奔EV的改款纯电微型车 |
| model:changan:e07 | Changan Qiyuan E07 | 长安启源E07 | — | — | class:cn:a | body:crossover | pt:bev | current · 2024–present | 启源E07(2024–),启源子品牌中大型纯电跨界SUV(皮卡式尾箱) |
| model:changan:e30 | Changan E30 | 长安E30 | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2011–2014 | 长安E30(2011–2014),长安纯电动轿车(出租车),2014年停产 |
| model:changan:eado | Eado | 长安逸动 | Changan Eado | — | class:cn:a | body:sedan | pt:ice | current · 2012–present | 紧凑型轿车,多代演进;逸动PLUS为现售主力 |
| model:changan:eado-dt | Changan Eado DT | 长安逸动DT | Changan Eado DT | — | class:cn:a | body:sedan | pt:ice | current · 2018–present | 紧凑型轿车(基于悦翔V7打造,2018年上市) |
| model:changan:eado-ev | Changan Eado EV | 长安逸动新能源 | Changan Eado EV | — | class:cn:a | body:sedan | pt:bev | current · 2015–present | 纯电动紧凑型轿车(逸动纯电版,含EV460等) |
| model:changan:eado-plus | Eado Plus | 长安逸动PLUS | Changan Eado Plus | — | class:cn:a | body:sedan | pt:ice | current · 2020–present | 紧凑型轿车(逸动PLUS,2020年上市) |
| model:changan:eado-xt | Changan Eado XT | 长安逸动XT | Changan Eado XT | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2013–2020 | 紧凑型两厢车(逸动两厢版);已停产 |
| model:changan:f70 | Changan F70 Blue Whale | F70蓝鲸 | — | — | class:cn:a | body:pickup | pt:ice | current · 2019–present | 凯程F70(2019–),长安凯程皮卡,与PSA合作开发(雪铁龙标致同源) |
| model:changan:k50 | Changan Hunter K50 | 长安猎手 K50 | — | — | class:cn:a | body:pickup | pt:erev | current · 2024–present | 长安猎手K50(2024–),猎手皮卡的增程版 |
| model:changan:lingxuan | Changan Lingxuan | 长安凌轩 | Changan Lingxuan | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2017–2020 | 紧凑型MPV(2017年上市);已停产 |
| model:changan:love | Benben LOVE | 奔奔LOVE | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2009–2012 | 奔奔LOVE(2009–2012),奔奔的改款,2012年停产 |
| model:changan:lumin | Changan Lumin | 长安Lumin | — | — | class:cn:a00 | body:hatchback | pt:bev | current · 2022–present | 长安Lumin(2022–),A00级纯电微型车 |
| model:changan:phev | Eado PHEV | 逸动PHEV | — | — | class:cn:a | body:sedan | pt:phev | current · 2025–present | 逸动PHEV(2025–),第三代逸动的插电混动版,2025年3月上市 |
| model:changan:q05 | Q05 Classic | Q05经典 | — | — | class:cn:a | body:suv | pt:ice | current · 2025–present | 启源Q05经典版(2025–),启源Q05的老款同堂销售 |
| model:changan:q05-2 | Changan Qiyuan Q05 Classic | 长安启源Q05经典 | — | — | class:cn:a | body:suv | pt:phev | current · 2023–present | 启源Q05(2023–),启源子品牌插混紧凑型SUV |
| model:changan:q06 | Changan Qiyuan Q06 | 长安启源Q06 | — | — | class:cn:a | body:suv | pt:phev | current · 2025–present | 启源Q06(2025–),启源子品牌插混紧凑型SUV |
| model:changan:q07 | Changan Qiyuan Q07 | 长安启源Q07 | — | — | class:cn:a | body:suv | pt:phev | current · 2025–present | 启源Q07(2025–),启源子品牌中大型插混SUV |
| model:changan:qiyuan-a05 | Qiyuan A05 | 长安启源A05 | Changan Qiyuan A05 | — | class:cn:a | body:sedan | pt:phev | current · 2023–present | 启源(Qiyuan)子品牌紧凑型插混/纯电轿车 |
| model:changan:qiyuan-a07 | Qiyuan A07 | 长安启源A07 | Changan Qiyuan A07 | — | class:cn:b | body:sedan | pt:erev | current · 2023–present | 启源(Qiyuan)子品牌中大型轿车,增程/纯电双动力 |
| model:changan:qiyuan-q05 | Qiyuan Q05 | 长安启源Q05 | Changan Qiyuan Q05 | — | class:cn:a | body:suv | pt:phev | current · 2023–present | 启源(Qiyuan)子品牌紧凑型插混SUV |
| model:changan:raeton | Changan Raeton | 长安睿骋 | Changan Raeton | — | class:cn:b | body:sedan | pt:ice | discontinued · 2013–2017 | 中型轿车,后由睿骋CC继任;已停产 |
| model:changan:raeton-cc | Raeton CC | 长安锐程CC | Changan Raeton CC | — | class:cn:b | body:sedan | pt:ice | discontinued · 2019–2022 | 中型轿车;前身睿骋CC(2017–2019);约2022年停产 |
| model:changan:raeton-plus | Changan Raeton Plus | 长安锐程PLUS | Changan Raeton Plus | — | class:cn:a | body:sedan | pt:ice | current · 2022–present | 紧凑型轿车(锐程CC改款升级) |
| model:changan:uni-k | UNI-K | 长安UNI-K | Changan UNI-K | — | class:cn:b | body:suv | pt:ice | current · 2021–present | UNI系列中型SUV,含智电iDD插混 |
| model:changan:uni-k-idd | Changan UNI-K iDD | UNI-K 智电iDD | — | — | class:cn:b | body:suv | pt:phev | current · 2022–present | UNI-K智电iDD(2022–),UNI-K插电混动版 |
| model:changan:uni-t | UNI-T | 长安UNI-T | Changan UNI-T | — | class:cn:a | body:suv | pt:ice | current · 2020–present | UNI系列紧凑型轿跑SUV |
| model:changan:uni-v | UNI-V | 长安UNI-V | Changan UNI-V | — | class:cn:a | body:sedan | pt:ice | current · 2022–present | UNI系列紧凑型运动轿车,含智电iDD插混 |
| model:changan:uni-v-idd | Changan UNI-V iDD | UNI-V 智电iDD | — | — | class:cn:b | body:sedan | pt:phev | current · 2022–present | UNI-V智电iDD(2022–),UNI-V插电混动版 |
| model:changan:uni-z | Changan UNI-Z | 长安UNI-Z | Changan UNI-Z | — | class:cn:a | body:suv | pt:phev | current · 2024–present | UNI系列紧凑型SUV(2024年上市,插混,另有纯电版) |
| model:changan:x5-plus | X5 PLUS | X5 PLUS | — | — | class:cn:c | body:suv | pt:ice | current · 2022–present | 欧尚X5 PLUS(2022–),长安欧尚紧凑型SUV |
| model:changan:x7-plus | X7 PLUS | X7 PLUS | — | — | class:cn:c | body:suv | pt:ice | current · 2021–present | 欧尚X7 PLUS(2021–),长安欧尚紧凑型SUV |
| model:changan:yida | Changan Yida | 长安逸达 | Changan Yida | — | class:cn:a | body:sedan | pt:ice | current · 2023–present | 紧凑型轿车(2023年上市,方舟架构) |
| model:changan:yuexiang | Yuexiang | 长安悦翔 | Changan Yuexiang | — | class:cn:a0 | body:sedan | pt:ice | discontinued · 2009–2019 | 入门级小型/紧凑型轿车;约2019年停产 |
| model:changan:yuexiang-v3 | Changan Yuexiang V3 | 长安悦翔V3 | Changan Yuexiang V3 | — | class:cn:a0 | body:sedan | pt:ice | discontinued · 2012–2016 | 小型轿车(悦翔系列);已停产 |
| model:changan:yuexiang-v5 | Changan Yuexiang V5 | 长安悦翔V5 | Changan Yuexiang V5 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2012–2015 | 紧凑型轿车(悦翔系列);已停产 |
| model:changan:yuexiang-v7 | Changan Yuexiang V7 | 长安悦翔V7 | Changan Yuexiang V7 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2014–2018 | 紧凑型轿车(悦翔系列,后衍生逸动DT);已停产 |

## Changan Kuayue

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:changan-kuayue:kuayue-wang | Changan Kuayue Wang | 跨越王 | 跨越王 | — | class:cn:mpv | body:pickup | pt:ice | current · 2015–present | 长安跨越王微卡系列(含X3/X5等衍生) |
| model:changan-kuayue:v3 | Changan Kuayue V3 | 长安V3 | 長安V3 | — | class:cn:mpv | body:van | pt:ice | discontinued · 2015–2020 | 长安跨越V3微面 |
| model:changan-kuayue:v5 | Changan Kuayue V5 | 长安V5 | 長安V5 | — | class:cn:mpv | body:van | pt:ice | discontinued · 2015–2020 | 长安跨越V5微面 |
| model:changan-kuayue:xinbao-mini | Changan Kuayue Xinbao Mini | 新豹MINI | 新豹MINI | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2015–2021 | 长安跨越新豹MINI微卡(单排) |
| model:changan-kuayue:xinbao-t3 | Changan Kuayue Xinbao T3 | 新豹T3 | 新豹T3 | — | class:cn:mpv | body:pickup | pt:ice | current · 2020–present | 长安跨越新豹T3微卡(单排/双排) |

## Changhe

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:changhe:beidouxing | Changhe Beidouxing | 北斗星 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2001–2013 | 昌河铃木微型MPV/面包车,源自初代铃木Wagon R(昌河铃木合资产品) |
| model:changhe:beidouxing-x5 | Changhe Beidouxing X5 | 北斗星X5 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2013–2019 | 北斗星改款车型,微型MPV/面包车,造型与配置升级 |
| model:changhe:furida | Changhe Furida | 福瑞达 | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2009–2015 | 昌河自研微面/面包车,主打城乡客货两用市场 |
| model:changhe:m50s | Changhe M50S | M50S | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2015–2020 | 北汽昌河微面/面包车,福瑞达系列后继车型 |
| model:changhe:m70 | Changhe M70 | M70 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2016–2020 | 北汽昌河紧凑型MPV,七座布局 |
| model:changhe:q25 | Changhe Q25 | Q25 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2016–2019 | 北汽昌河小型SUV,与北汽绅宝X25同平台 |
| model:changhe:q35 | Changhe Q35 | Q35 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2016–2020 | 北汽昌河小型SUV,与北汽绅宝X35同平台 |
| model:changhe:q7 | Changhe Q7 | Q7 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2021 | 北汽昌河紧凑型SUV,与北汽绅宝X55同平台 |

## Chery

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:chery:06-c-dm | Explore 06 C-DM | 探索06 C-DM | — | — | class:cn:a | body:suv | pt:phev | current · 2024-present | 探索06 C-DM(2024-),探索06插电混动版 |
| model:chery:0623cc3e6b | Chery eQ1 (Ant) | 小蚂蚁 | — | — | class:cn:a00 | body:hatchback | pt:bev | current · 2017-present | 奇瑞小蚂蚁(eQ1,2017-),奇瑞新能源纯电微型车 |
| model:chery:0a443f55f9 | Chery Oriental Son | 东方之子 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2003-2012 | 东方之子(2003-2012),奇瑞首款B级轿车,2012年停产 |
| model:chery:1ab63dcf56 | Fengyun | 风云 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2001-2010 | 风云(2001-2010),奇瑞首款轿车系列,2010年停产 |
| model:chery:1f33a2d9d5 | Qiyun | 旗云 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2001-2010 | 旗云(2001-2010),奇瑞紧凑型轿车,2010年停产 |
| model:chery:5-plus | Arrizo 5 Plus | 艾瑞泽5 PLUS | — | — | class:cn:a | body:sedan | pt:ice | current · 2020-present | 艾瑞泽5 PLUS(2020-),艾瑞泽5的升级版 |
| model:chery:7-c-dm | Tiggo 7 C-DM | 瑞虎7 C-DM | — | — | class:cn:a | body:suv | pt:phev | current · 2024-present | 瑞虎7 C-DM(2024-),瑞虎7插电混动版 |
| model:chery:8-plus-c-dm | Tiggo 8 Plus C-DM | 瑞虎8 PLUS C-DM | — | — | class:cn:a | body:suv | pt:phev | current · 2024-present | 瑞虎8 PLUS C-DM(2024-),瑞虎8 PLUS插电混动版 |
| model:chery:9-c-dm | Tiggo 9 C-DM | 瑞虎9 C-DM | — | — | class:cn:a | body:suv | pt:phev | current · 2024-present | 瑞虎9 C-DM(2024-),瑞虎9插电混动版 |
| model:chery:ant | @ANT | @ANT | — | — | class:cn:a | body:hatchback | pt:bev | current · 2025-present | 奇瑞@ANT(2025-),奇瑞小型纯电车 |
| model:chery:arrizo-3 | Arrizo 3 | 艾瑞泽3 | Arrizo 3 | — | class:cn:a0 | body:sedan | pt:ice | discontinued · 2014–2017 | 小型轿车,2014年上市,2017年停产 |
| model:chery:arrizo-5 | Arrizo 5 | 艾瑞泽5 | Arrizo 5 | — | class:cn:a | body:sedan | pt:ice | current · 2016–present | 紧凑型轿车(含5 PLUS/GT);海外称Arrizo 5/6/Omoda S5等 |
| model:chery:arrizo-5-gt | Arrizo 5 GT | 艾瑞泽5 GT | Arrizo 5 GT | — | class:cn:a | body:sedan | pt:ice | current · 2022–present | 紧凑型轿车(艾瑞泽5的运动版),2022年上市 |
| model:chery:arrizo-7 | Arrizo 7 | 艾瑞泽7 | Arrizo 7 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2013–2019 | 紧凑型轿车,2013年上市,2019年停产 |
| model:chery:arrizo-7e | Arrizo 7e | 艾瑞泽7e | Arrizo 7e | — | class:cn:a | body:sedan | pt:phev | discontinued · 2016–2018 | 紧凑型插混轿车(艾瑞泽7的插电混动版),2016年上市,2018年前后停产 |
| model:chery:arrizo-8 | Arrizo 8 | 艾瑞泽8 | Arrizo 8 | — | class:cn:b | body:sedan | pt:ice | current · 2022–present | 中型轿车(A+级),燃油为主,风云A8为其插混版 |
| model:chery:arrizo-8-pro | Arrizo 8 Pro | 艾瑞泽8 PRO | Arrizo 8 Pro | — | class:cn:a | body:sedan | pt:ice | current · 2024–present | 紧凑型轿车(A+级,艾瑞泽8的PRO版本),2024年上市 |
| model:chery:arrizo-gx | Arrizo GX | 艾瑞泽GX | Arrizo GX | — | class:cn:a | body:sedan | pt:ice | discontinued · 2018–2021 | 紧凑型轿车,2021年停产,更名为艾瑞泽5 PLUS(海外Arrizo 6) |
| model:chery:arrizo-m7 | Arrizo M7 | 艾瑞泽M7 | Arrizo M7 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2015–2018 | 紧凑型MPV(7座),2015年上市,2018年前后停产 |
| model:chery:b2046a4c8e | Duomi | 多米 | — | — | class:cn:a | body:suv | pt:bev | current · 2025-present | 奇瑞多米(2025-),奇瑞纯电MINI SUV,QQ小车家族新成员 |
| model:chery:chery-3 | Qiyun 3 | 旗云3 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2010-2013 | 旗云3(2010-2013),旗云系列改款,2013年停产 |
| model:chery:chery-6 | Chery Oriental Son 6 | 东方之子6 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2010-2012 | 东方之子6(2010-2012),东方之子换代车型,2012年停产 |
| model:chery:chery-7l | Tiggo 7L | 瑞虎7L | — | — | class:cn:a | body:suv | pt:ice | current · 2025-present | 瑞虎7L(2025-),瑞虎7的长轴版 |
| model:chery:chery-a1 | A1 | A1 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2007-2015 | 奇瑞A1(2007-2015),奇瑞微型两厢车,2015年停产 |
| model:chery:chery-a3 | A3 | A3 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2008-2015 | 奇瑞A3(2008-2015),奇瑞紧凑型轿车,2015年停产 |
| model:chery:chery-a5 | A5 | A5 | — | — | class:cn:b | body:sedan | pt:ice | discontinued · 2006-2010 | 奇瑞A5(2006-2010),奇瑞紧凑型轿车,2010年停产 |
| model:chery:chery-e2 | Chery E2 | 奇瑞E2 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2015-2018 | 奇瑞E2(2015-2018),奇瑞紧凑型轿车(开瑞E2),2018年停产 |
| model:chery:chery-e3 | Chery E3 | 奇瑞E3 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2013-2018 | 奇瑞E3(2013-2018),奇瑞紧凑型轿车,2018年停产 |
| model:chery:chery-qq | Chery QQ Ice Cream | QQ冰淇淋 | — | — | class:cn:a | body:hatchback | pt:bev | current · 2021-present | QQ冰淇淋(2021-),奇瑞新能源纯电微型车 |
| model:chery:chery-tx | Chery TX | 奇瑞TX | — | — | class:cn:a | body:suv | pt:phev | current · 2025-present | 奇瑞TX(2025-),奇瑞中大型SUV(风云T系列) |
| model:chery:chery-x1 | X1 | X1 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2009-2014 | 奇瑞X1(2009-2014),奇瑞微型跨界车,2014年停产 |
| model:chery:cross | Chery Oriental Son Cross | 东方之子Cross | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2007-2012 | 东方之子Cross(2007-2012),奇瑞MPV,2012年停产 |
| model:chery:d9982a84e3 | Aika | 爱卡 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2013-2018 | 奇瑞爱卡(2013-2018),奇瑞皮卡,2018年停产 |
| model:chery:e5 | E5 | E5 | E5 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2011–2016 | 紧凑型轿车(源自旗云/风云平台),2011年上市,2016年停产 |
| model:chery:exeed-lanyue | Exeed Lanyue | 星途揽月 | Exeed Lanyue | — | class:cn:c | body:suv | pt:ice | current · 2020–present | 星途(Exeed)子品牌中大型SUV(6/7座),含插混;海外名Exeed VX |
| model:chery:exeed-lingyun | Exeed Lingyun | 星途凌云 | Exeed Lingyun | — | class:cn:b | body:suv | pt:ice | current · 2020–present | 星途(Exeed)子品牌中型SUV(燃油),2020年上市(原星途TXL改名凌云);海外名Exeed TXL |
| model:chery:exeed-yaoguang | Exeed Yaoguang | 星途瑶光 | Exeed Yaoguang | — | class:cn:b | body:suv | pt:ice | current · 2023–present | 星途(Exeed)子品牌中型SUV,含C-DM插混(瑶光C-DM);海外称Exeed RX |
| model:chery:exeed-zhufeng | Exeed Zhufeng | 星途追风 | Exeed Zhufeng | — | class:cn:a | body:suv | pt:ice | current · 2021–present | 星途(Exeed)子品牌紧凑型SUV(燃油),2021年上市(原星途LX改名追风) |
| model:chery:explore-06 | Explore 06 | 探索06 | Explore 06 | — | class:cn:a | body:suv | pt:ice | current · 2023–present | 紧凑型SUV(方盒子造型),2023年上市,含插混版(探索06 C-DM);海外称Jaecoo J7 |
| model:chery:fulwin-2 | Fulwin 2 | 风云2 | Fulwin 2 | — | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2010–2016 | 小型两厢/三厢轿车,2010年上市,2016年停产 |
| model:chery:fulwin-a8 | Fulwin A8 | 风云A8 | Fulwin A8 | — | class:cn:b | body:sedan | pt:phev | current · 2024–present | 风云(Fulwin)系列紧凑型/中型插混轿车(C-DM),艾瑞泽8插混版 |
| model:chery:icar-03 | iCar 03 | iCAR 03 | iCar 03 | — | class:cn:a | body:suv | pt:bev | current · 2024–present | iCAR为奇瑞旗下子品牌,紧凑型纯电SUV(方盒子造型);海外亦以Jaecoo J6/Chery iCar 03名销售 |
| model:chery:jetour-dasheng | Jetour Dasheng | 捷途大圣 | Jetour Dasheng | — | class:cn:a | body:suv | pt:ice | current · 2022–present | 捷途(Jetour)子品牌紧凑型SUV(燃油),2022年上市;另有插混版大圣i-DM |
| model:chery:jetour-traveller | Jetour Traveller | 捷途旅行者 | Jetour Traveller | — | class:cn:b | body:suv | pt:ice | current · 2023–present | 捷途(Jetour)子品牌中型方盒子SUV,含C-DM插混;捷途山海系列(T1/L6/L9等)同属该子品牌 |
| model:chery:jetour-x70 | Jetour X70 | 捷途X70 | Jetour X70 | — | class:cn:b | body:suv | pt:ice | current · 2018–present | 捷途(Jetour)子品牌首款车型,中型SUV(燃油),2018年上市;含X70S(2018–)/X70M(2020–)/X70 PLUS(2020–)及轿跑风格X70 Coupe(2020–)等衍生款 |
| model:chery:jetour-x90 | Jetour X90 | 捷途X90 | Jetour X90 | — | class:cn:b | body:suv | pt:ice | current · 2019–present | 捷途(Jetour)子品牌中型SUV(燃油),2019年上市;含X90 PLUS(2021–)与旗舰X95(2019–)等衍生款 |
| model:chery:jetour-ziyouzhe | Jetour Ziyouzhe | 捷途自由者 | Jetour Ziyouzhe | — | class:cn:a | body:suv | pt:ice | current · 2025–present | 捷途(Jetour)子品牌紧凑型方盒子SUV(1.5T/2.0T燃油),2025年3月上市 |
| model:chery:omoda-5 | Omoda 5 | 欧萌达 | Omoda 5 | — | class:cn:a | body:suv | pt:ice | current · 2022–present | 紧凑型SUV,2022年上市;OMODA子品牌首款车,海外市场直接以Omoda 5销售 |
| model:chery:qiyun-1 | Qiyun 1 | 旗云1 | Qiyun 1 | — | class:cn:a00 | body:sedan | pt:ice | discontinued · 2010–2014 | 微型轿车,2010年上市,2014年停产 |
| model:chery:qiyun-2 | Qiyun 2 | 旗云2 | Qiyun 2 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2010–2015 | 紧凑型轿车(源自风云系列),2010年上市,2015年停产 |
| model:chery:qq | Chery QQ | 奇瑞QQ | Chery QQ | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2003–2017 | 国民神车微型车(A00),累计销量超百万;后继电动车型为QQ冰淇淋/eQ等 |
| model:chery:qq3 | Chery QQ3 | 奇瑞QQ3 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2003-2013 | 奇瑞QQ3(2003-2013),奇瑞经典微型车,2013年停产 |
| model:chery:qq6 | Chery QQ6 | 奇瑞QQ6 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2006-2012 | 奇瑞QQ6(2006-2012),QQ系列三厢变体,2012年停产 |
| model:chery:qqme | Chery QQme | 奇瑞QQme | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2009-2013 | 奇瑞QQme(2009-2013),QQ系列时尚微型车,2013年停产 |
| model:chery:tiggo | Tiggo | 瑞虎 | Tiggo | — | class:cn:a | body:suv | pt:ice | discontinued · 2005–2015 | 奇瑞首款SUV,初代瑞虎2005年上市,2015年前后由瑞虎3/瑞虎5接替(瑞虎3即初代瑞虎后续车型) |
| model:chery:tiggo-3 | Tiggo 3 | 瑞虎3 | Tiggo 3 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2005–2023 | 小型SUV,源自初代瑞虎(2005);2023年停产 |
| model:chery:tiggo-3x | Tiggo 3x | 瑞虎3x | Tiggo 3x | — | class:cn:a0 | body:suv | pt:ice | current · 2016–present | 小型SUV,2016年上市,燃油/轻混;海外称Tiggo 2/Tiggo 3x |
| model:chery:tiggo-5 | Tiggo 5 | 瑞虎5 | Tiggo 5 | — | class:cn:a | body:suv | pt:ice | discontinued · 2013–2019 | 紧凑型SUV;中国市场约2019年停产,海外部分市场继续以Tiggo 5销售 |
| model:chery:tiggo-5x | Tiggo 5x | 瑞虎5x | Tiggo 5x | — | class:cn:a0 | body:suv | pt:ice | current · 2017–present | 小型SUV,燃油/轻混;海外称Tiggo 4/Tiggo 3等 |
| model:chery:tiggo-7 | Tiggo 7 | 瑞虎7 | Tiggo 7 | — | class:cn:a | body:suv | pt:ice | current · 2016–present | 紧凑型SUV,含PLUS/高能版及C-DM插混;海外称Tiggo 7 Pro等 |
| model:chery:tiggo-7-plus | Tiggo 7 Plus | 瑞虎7 PLUS | Tiggo 7 Pro | — | class:cn:a | body:suv | pt:ice | current · 2021–present | 紧凑型SUV(瑞虎7的PLUS版本),2021年上市,含C-DM插混;海外称Tiggo 7 Pro |
| model:chery:tiggo-8 | Tiggo 8 | 瑞虎8 | Tiggo 8 | — | class:cn:b | body:suv | pt:ice | current · 2018–present | 中型SUV(含PLUS/PRO),燃油为主,风云T8为插混版;海外称Tiggo 8 Pro |
| model:chery:tiggo-8-plus | Tiggo 8 Plus | 瑞虎8 PLUS | Tiggo 8 Pro | — | class:cn:b | body:suv | pt:ice | current · 2020–present | 中型SUV(瑞虎8的PLUS版本),2020年上市,燃油/轻混;插混版见瑞虎8 PLUS鲲鹏e+ |
| model:chery:tiggo-8-plus-eplus | Tiggo 8 Plus Kunpeng e+ | 瑞虎8 PLUS鲲鹏e+ | Tiggo 8 Pro e+ | — | class:cn:b | body:suv | pt:phev | current · 2022–present | 中型SUV插混版(鲲鹏DHT混动系统),2022年上市 |
| model:chery:tiggo-8-pro | Tiggo 8 Pro | 瑞虎8 PRO | Tiggo 8 Pro | — | class:cn:b | body:suv | pt:ice | current · 2022–present | 中型SUV,2022年上市,含插混版;海外市场亦以Tiggo 8 Pro命名 |
| model:chery:tiggo-8l | Tiggo 8L | 瑞虎8L | Tiggo 8L | — | class:cn:b | body:suv | pt:ice | current · 2024–present | 中型SUV,2024年上市,含插混版 |
| model:chery:tiggo-9 | Tiggo 9 | 瑞虎9 | Tiggo 9 | — | class:cn:b | body:suv | pt:ice | current · 2023–present | 中型SUV(奇瑞旗舰),含C-DM插混;海外称Tiggo 9/Jaecoo J8 |

## Chery NEV

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:chery-nev:3xe | Chery Tiggo 3xe | 瑞虎3xe | 瑞虎3xe | — | class:cn:a0 | body:suv | pt:bev | discontinued · 2018–2020 | 瑞虎3x纯电动版,2018年上市,奇瑞新能源纯电小型SUV |
| model:chery-nev:756f291532 | Chery Comfort Family | 奇瑞舒享家 | 奇瑞舒享家 | — | class:cn:a | body:suv | pt:bev | current · 2023–present | 奇瑞新能源纯电SUV,2023年上市,英文名eQ7/Comfort Family |
| model:chery-nev:ant | Chery eQ1 (Ant) | 小蚂蚁 | Chery eQ1 | — | class:cn:a00 | body:hatchback | pt:bev | current · 2017–present | 奇瑞新能源A00级纯电微型车(2017年上市),官方名eQ1(小蚂蚁),品牌代表作 |
| model:chery-nev:c3e | Chery C3e | 奇瑞C3e | 奇瑞C3e | — | class:cn:a00 | body:hatchback | pt:bev | discontinued · 2018–2021 | 奇瑞新能源A00级纯电微型车,基于奇瑞eQ平台 |
| model:chery-nev:chery-nev-5e | Chery Arrizo 5e | 艾瑞泽5e | 艾瑞澤5e | — | class:cn:a | body:sedan | pt:bev | discontinued · 2017–2020 | 艾瑞泽5纯电动版,2017年上市,续航约400km |
| model:chery-nev:chery-nev-e | Chery Tiggo e | 瑞虎e | 瑞虎e | — | class:cn:a0 | body:suv | pt:bev | discontinued · 2019–2022 | 瑞虎5x纯电动版,2019年上市,名瑞虎e |
| model:chery-nev:chery-nev-e-2 | Chery Arrizo e | 艾瑞泽e | 艾瑞澤e | — | class:cn:a | body:sedan | pt:bev | current · 2019–present | 艾瑞泽5e改款车型,2019年上市,名艾瑞泽e |
| model:chery-nev:eq | Chery eQ | 奇瑞eQ | Chery eQ | — | class:cn:a00 | body:hatchback | pt:bev | discontinued · 2014–2020 | 奇瑞新能源首款纯电动微型车(2014年上市),基于奇瑞QQ改装,官方名奇瑞eQ;约2020年停售,由小蚂蚁接棒 |
| model:chery-nev:eq5 | Chery eQ5 | 大蚂蚁 | Chery eQ5 | — | class:cn:b | body:suv | pt:bev | discontinued · 2020–2023 | 中型纯电SUV(2020年上市),官方名eQ5(大蚂蚁),基于@LIFE全铝纯电平台;约2023年停售 |
| model:chery-nev:pro | Chery Wujie Pro | 奇瑞无界Pro | 奇瑞無界Pro | — | class:cn:a00 | body:hatchback | pt:bev | current · 2022–present | 奇瑞新能源A00级纯电微型车,2022年上市,官方英文名Wujie Pro |
| model:chery-nev:qq-ice-cream | Chery QQ Ice Cream | QQ冰淇淋 | QQ Ice Cream | — | class:cn:a00 | body:hatchback | pt:bev | current · 2021–present | A00级纯电微型车(2021年上市),对标五菱宏光MINIEV,官方英文名QQ Ice Cream,海外部分市场称iCar |
| model:chery-nev:qq3ev | Chery QQ3EV | 奇瑞QQ3EV | 奇瑞QQ3EV | — | class:cn:a00 | body:hatchback | pt:bev | discontinued · 2010–2014 | 奇瑞QQ3纯电动版,奇瑞新能源早期车型,后被eQ取代 |

## Chevrolet

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:chevrolet:1dca30ad12 | Menlo | 畅巡 | — | — | class:cn:a | body:wagon | pt:bev | discontinued · 2020–2023 | 畅巡(Menlo,2020-2023),上汽通用纯电休旅车,已停产 |
| model:chevrolet:34a16a42b3 | Lova | 乐风 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2006–2011 | 乐风(Lova,2006-2011),上汽通用雪佛兰小型轿车,已停产 |
| model:chevrolet:aveo | Aveo | 爱唯欧 | Aveo | アベオ | class:us:subcompact | body:sedan | pt:ice | discontinued · 2002–2020 | 北美2011年停产,拉丁美洲续产至2020年;中国版「爱唯欧」 |
| model:chevrolet:bel-air | Bel Air | Bel Air | Bel Air | ベルエア | class:us:large | body:sedan | pt:ice | discontinued · 1950–1981 | 1950年代经典美式轿车代表 |
| model:chevrolet:blazer | Blazer | 开拓者 | Blazer | ブレイザー | class:eu:j | body:crossover | pt:ice | current · 2018–present | 中国上汽通用国产「开拓者」;历史K5 Blazer(1969–1994)为越野SUV |
| model:chevrolet:bolt-ev | Bolt EV | Bolt EV | Bolt EV | ボルトEV | class:us:subcompact | body:hatchback | pt:bev | current · 2016–present | 2023年停产后于2025年复产(全新平台);注意与Volt区分 |
| model:chevrolet:camaro | Camaro | 科迈罗 | Camaro | カマロ | class:eu:s | body:coupe | pt:ice | discontinued · 1966–2023 | 2023年停产;电影《变形金刚》「大黄蜂」座驾 |
| model:chevrolet:caprice | Caprice | Caprice | Caprice | カプリス | class:us:large | body:sedan | pt:ice | discontinued · 1965–1996 | 90年代北美警车主力;中东/中国曾有后续车型 |
| model:chevrolet:captiva | Captiva | 科帕奇 | Captiva | — | class:cn:b | body:suv | pt:ice | discontinued · 2007–2017 | 上汽通用国产中型SUV「科帕奇」(Captiva),2017年停产 |
| model:chevrolet:cavalier | Cavalier | 科沃兹 | Cavalier | — | class:cn:a | body:sedan | pt:ice | current · 2016–present | 科沃兹(Cavalier,2016-),上汽通用雪佛兰紧凑轿车(北美历史名号1982-2005年曾用) |
| model:chevrolet:chevelle | Chevelle | Chevelle | Chevelle | シェベル | class:us:midsize | body:sedan | pt:ice | discontinued · 1964–1977 | 经典肌肉车,含SS454等性能版 |
| model:chevrolet:chevrolet-ss | Chevrolet SS | 雪佛兰SS | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2013–2017 | Chevrolet SS(2013-2017),基于霍顿Commodore的V8性能轿车,北美市场 |
| model:chevrolet:cobalt | Cobalt | Cobalt | Cobalt | コバルト | class:us:compact | body:sedan | pt:ice | discontinued · 2005–2010 | 北美,取代Cavalier;乌兹别克斯坦以许可证形式续产 |
| model:chevrolet:colorado | Colorado | Colorado | Colorado | コロラド | class:us:pickup | body:pickup | pt:ice | current · 2003–present | 中型皮卡,取代S-10 |
| model:chevrolet:corvette | Corvette | 科尔维特 | Corvette | コルベット | class:eu:s | body:sports | pt:ice | current · 1953–present | C8(2020款起)改中置引擎;美国国宝级跑车 |
| model:chevrolet:cruze | Cruze | 科鲁兹 | Cruze | クルーズ | class:us:compact | body:sedan | pt:ice | discontinued · 2008–2023 | 上汽通用国产「科鲁兹」(2009–2023);北美2019年停售 |
| model:chevrolet:epica | Epica | 景程 | Epica | — | class:cn:b | body:sedan | pt:ice | discontinued · 2005–2015 | 上汽通用雪佛兰「景程」(Epica),2015年停产 |
| model:chevrolet:equinox | Equinox | 探界者 | Equinox | エクイノックス | class:us:small-suv | body:crossover | pt:ice | current · 2004–present | 中国上汽通用国产「探界者」;另有纯电Equinox EV |
| model:chevrolet:express | Express | Express | Express | エクスプレス | class:us:large | body:van | pt:ice | current · 1995–present | 全尺寸厢式货车 |
| model:chevrolet:impala | Impala | 英帕拉 | Impala | インパラ | class:us:large | body:sedan | pt:ice | discontinued · 1958–2020 | 2020年停产;含经典SS肌肉车版本 |
| model:chevrolet:lova-rv | Lova RV | 乐风RV | Lova RV | — | class:cn:a0 | body:wagon | pt:ice | discontinued · 2015–2018 | 上汽通用雪佛兰小型休旅车,2015年上市,2018年停产 |
| model:chevrolet:malibu | Malibu | 迈锐宝 | Malibu | マリブ | class:us:midsize | body:sedan | pt:ice | discontinued · 1978–2025 | 2025年停产,北美最后的雪佛兰轿车;中国版迈锐宝XL(2016–2023) |
| model:chevrolet:monza | Monza | 科鲁泽 | Monza | — | class:cn:a | body:sedan | pt:ice | current · 2019–present | 上汽通用雪佛兰紧凑轿车「科鲁泽」(Monza),注意与科鲁兹(Cruze)区分 |
| model:chevrolet:niva | Chevrolet Niva | 雪佛兰Niva | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2002–2019 | Chevrolet Niva(2002-2019),通用-伏尔加合资生产,俄罗斯市场,后改挂Lada标 |
| model:chevrolet:nova | Nova | Nova | Nova | ノバ | class:us:compact | body:sedan | pt:ice | discontinued · 1962–1988 | 即Chevy II/Nova;1962–1979后驱,1985–1988为前驱 |
| model:chevrolet:orlando | Orlando | 沃兰多 | Orlando | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2018–2022 | 沃兰多(Orlando,2018-2022),上汽通用紧凑MPV,已停产 |
| model:chevrolet:plus | Equinox Plus | 探界者Plus | — | — | class:cn:a | body:suv | pt:phev | current · 2024–present | 探界者Plus(2024-),Equinox插混版,中国市场 |
| model:chevrolet:sail | Sail | 赛欧 | Sail | — | class:cn:a0 | body:sedan | pt:ice | discontinued · 2001–2018 | 原为别克品牌(2001),2005年起改挂雪佛兰标;2018年停产 |
| model:chevrolet:seeker | Seeker | 星迈罗 | Seeker | — | class:cn:a | body:suv | pt:ice | current · 2022–present | 上汽通用国产紧凑SUV「星迈罗」(Seeker),2022年上市 |
| model:chevrolet:silverado | Silverado | 索罗德 | Silverado | シルバラード | class:us:pickup | body:pickup | pt:ice | current · 1998–present | 大陆官方中文名「索罗德」;含Silverado HD与纯电Silverado EV |
| model:chevrolet:sonic | Sonic | Sonic | Sonic | ソニック | class:us:subcompact | body:hatchback | pt:ice | discontinued · 2011–2020 | 北美2020年停产 |
| model:chevrolet:spark | Spark | 斯帕可(乐驰) | Spark | スパーク | class:us:subcompact | body:hatchback | pt:ice | discontinued · 1998–2022 | 中国前身为上汽通用五菱「乐驰」;北美2022年停产 |
| model:chevrolet:suburban | Suburban | Suburban | Suburban | サバーバン | class:us:standard-suv | body:suv | pt:ice | current · 1935–present | 全球连续生产最久的车名(1935年起) |
| model:chevrolet:tahoe | Tahoe | Tahoe(太浩) | Tahoe | タホ | class:us:standard-suv | body:suv | pt:ice | current · 1995–present | 全尺寸非承载SUV;大陆常音译「太浩」 |
| model:chevrolet:trailblazer | Trailblazer | 创界 | Trailblazer | トレイルブレイザー | class:us:small-suv | body:crossover | pt:ice | current · 2019–present | 中国版「创界」(2019–2022);历史名号亦为2001–2009非承载SUV |
| model:chevrolet:traverse | Traverse | Traverse | Traverse | トラバース | class:us:standard-suv | body:suv | pt:ice | current · 2008–present | 三排座全尺寸SUV;媒体曾译「巡领者」 |
| model:chevrolet:trax | Trax | 创酷 | Trax | トラックス | class:us:small-suv | body:crossover | pt:ice | current · 2013–present | 一代中国版「创酷」(2014–2021);2022年换代(北美) |
| model:chevrolet:volt | Volt | 沃蓝达 | Volt | ボルト | class:us:compact | body:hatchback | pt:erev | discontinued · 2010–2019 | 增程式先驱;中国版(上汽通用)2016–2019;注意与Bolt EV区分 |

## Chrysler

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:chrysler:0587f3e66e | Prowler | 猎兽 | — | — | class:eu:s | body:roadster | pt:ice | discontinued · 1997–2002 | 猎兽(Prowler,1997-2002),克莱斯勒复古跑车,已停产 |
| model:chrysler:200 | 200 | 200 | 200 | 200 | class:us:midsize | body:sedan | pt:ice | discontinued · 2011–2017 | 2017年停产 |
| model:chrysler:300 | 300 | 300C | 300 | 300C | class:us:large | body:sedan | pt:ice | discontinued · 2005–2023 | 2023年停产;中国进口版称「300C」 |
| model:chrysler:aspen | Aspen | Aspen | Aspen | アスペン | class:us:standard-suv | body:suv | pt:ice | discontinued · 2007–2009 | 与道奇Durango同平台 |
| model:chrysler:delta | Chrysler Delta | 克莱斯勒Delta | — | — | class:eu:c | body:hatchback | pt:hev | discontinued · 2011–2014 | Delta(2011-2014),欧洲市场,蓝旗亚Delta换标 |
| model:chrysler:f740c48357 | Crossfire | 交叉火力 | — | — | class:cn:a | body:roadster | pt:ice | discontinued · 2004–2008 | 交叉火力(Crossfire,2004-2008),基于奔驰SLK平台,含硬顶与敞篷版 |
| model:chrysler:pacifica | Pacifica | 大捷龙 | Pacifica | パシフィカ | class:us:minivan | body:minivan | pt:ice | current · 2017–present | 中国进口版沿用「大捷龙」名称;有插混版 |
| model:chrysler:pt-cruiser | PT Cruiser | PT漫步者 | PT Cruiser | PTクルーザー | class:us:compact | body:hatchback | pt:ice | discontinued · 2001–2010 | 复古造型;大陆译名「PT漫步者」 |
| model:chrysler:sebring | Sebring | Sebring | Sebring | セブリング | class:us:midsize | body:sedan | pt:ice | discontinued · 1995–2010 | 含敞篷版 |
| model:chrysler:town-and-country | Town & Country | Town & Country | Town & Country | タウン＆カントリー | class:us:minivan | body:minivan | pt:ice | discontinued · 1990–2016 | 2016年停产,由Pacifica接替 |
| model:chrysler:voyager | Voyager | Voyager | Voyager | ボイジャー | class:us:minivan | body:minivan | pt:ice | discontinued · 1988–2007; 2020–2024 | 2020年以Pacifica低配版复产,2024年停产 |
| model:chrysler:ypsilon | Chrysler Ypsilon | 克莱斯勒Ypsilon | — | — | class:eu:b | body:hatchback | pt:ice | discontinued · 2011–2017 | Ypsilon(2011-2017),欧洲市场,蓝旗亚Ypsilon换标 |

## Citroën

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:citroen:2cv | 2CV | 2CV | 2CV | 2CV | class:eu:b | body:hatchback | pt:ice | discontinued · 1948–1990 | 雪铁龙传奇国民车「两马力」(Deux Chevaux),生产40余年 |
| model:citroen:ami | Ami | Ami | Ami | アミ | class:eu:a | body:quadricycle | pt:bev | current · 2020–present | 欧盟L6类四轮微型电动车,2021年引入日本;另有历史名Ami(1961-1978)为另一车型 |
| model:citroen:b810516d3a | Fukang | 富康 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 1992–2008 | 富康(1992-2008),神龙汽车首款车型,基于雪铁龙ZX,中国经典国民车 |
| model:citroen:berlingo | Berlingo | Berlingo | Berlingo | ベルランゴ | class:eu:m | body:mpv | pt:ice | current · 1996–present | 紧凑MPV/厢式车,含纯电e-Berlingo;乘用版与Peugeot Rifter同源 |
| model:citroen:c-crosser | C-Crosser | C-Crosser | — | — | class:eu:d | body:suv | pt:ice | discontinued · 2007–2012 | 中型SUV,与三菱欧蓝德同平台(PSA/三菱合作),未在中国销售 |
| model:citroen:c-quatre | C-Quatre | 世嘉 | C-Quatre | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2008–2016 | 东风雪铁龙C4中国版,含两厢/三厢版,被C4世嘉取代 |
| model:citroen:c-zero | C-Zero | C-Zero | — | — | class:eu:a | body:city-car | pt:bev | discontinued · 2010–2019 | 纯电城市微型车,与三菱i-MiEV/标致iOn同源 |
| model:citroen:c2 | C2 | C2 | C2 | C2 | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2006–2014 | 东风雪铁龙小型两厢车,与标致206同平台,2014年停产 |
| model:citroen:c3 | C3 | C3 | C3 | C3 | class:eu:b | body:hatchback | pt:ice | current · 2002–present | 含纯电版e-C3(2024);2021年起另有面向印度/拉美的C3(CC21) |
| model:citroen:c3-aircross | C3 Aircross | C3 Aircross | C3 Aircross | C3 エアクロス | class:eu:b | body:suv | pt:ice | current · 2010–present | 小型SUV;中国曾以C4 Aircross(云逸)销售,2024年换代 |
| model:citroen:c3-picasso | C3 Picasso | C3 Picasso | C3 Picasso | C3 ピカソ | class:eu:m | body:mpv | pt:ice | discontinued · 2009–2017 | 紧凑MPV,被C3 Aircross取代 |
| model:citroen:c3-xr | C3-XR | C3-XR | C3-XR | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2014–2022 | 东风雪铁龙中国特供小型SUV,2022年前后停产 |
| model:citroen:c3l | Citroën C3L | 雪铁龙C3L | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2020–2022 | C3L(2020-),东风雪铁龙中国特供紧凑轿车(三厢跨界造型),基于C3-XR平台 |
| model:citroen:c4 | C4 | C4 | C4 | C4 | class:eu:c | body:hatchback | pt:ice | current · 2004–present | 现款为2020年第三代跨界风格(C41);含纯电e-C4;中国曾国产世嘉/C4L等 |
| model:citroen:c4-aircross-2 | C4 Aircross | 云逸 C4 AIRCROSS | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2018–2021 | 云逸C4 AIRCROSS(2018-2021),东风雪铁龙小型SUV,基于C3 Aircross,2021年前后停产 |
| model:citroen:c4-cactus-2 | Citroën C4 Cactus | 雪铁龙C4 Cactus | — | — | class:eu:c | body:crossover | pt:ice | discontinued · 2014–2020 | C4 Cactus(2014-2020),紧凑跨界车,Airbump防擦设计,2020年被C4取代 |
| model:citroen:c4-l | C4L | C4L | C4L | C4L | class:cn:a | body:sedan | pt:ice | discontinued · 2012–2020 | 东风雪铁龙紧凑轿车,加长版C4,2020年停产 |
| model:citroen:c4-picasso | C4 Picasso | C4 Picasso(大C4毕加索) | C4 Picasso | C4 ピカソ | class:eu:m | body:mpv | pt:ice | discontinued · 2007–2020 | 紧凑MPV,2018年更名C4 SpaceTourer;被C5 Aircross等SUV取代 |
| model:citroen:c4-quatre | C4 C-Quatre | C4世嘉 | C4 C-Quatre | — | class:cn:a | body:sedan | pt:ice | discontinued · 2015–2020 | 东风雪铁龙紧凑轿车(C4世嘉),世嘉换代车型,2020年前后停产 |
| model:citroen:c4-x | C4 X | C4 X | C4 X | C4 X | class:eu:c | body:sedan | pt:ice | current · 2022–present | C4的溜背轿车版,含纯电e-C4 X |
| model:citroen:c5 | C5 | C5 | C5 | C5 | class:eu:d | body:sedan | pt:ice | discontinued · 2000–2017 | 中型轿车,含旅行版C5 Tourer;被C5 X接替 |
| model:citroen:c5-aircross | C5 Aircross | 天逸C5 AIRCROSS | C5 Aircross | C5 エアクロス | class:eu:c | body:suv | pt:ice | current · 2017–present | 紧凑型SUV,中国官方名「天逸C5 AIRCROSS」;2025年换代 |
| model:citroen:c5-x | C5 X | 凡尔赛C5 X | C5 X | C5 X | class:eu:d | body:wagon | pt:ice | current · 2021–present | 跨界旅行车,中国官方名「凡尔赛C5 X」;接替C5 |
| model:citroen:c6 | C6 | C6 | C6 | C6 | class:eu:e | body:sedan | pt:ice | discontinued · 2005–2012 | 行政级轿车(欧版);另有东风雪铁龙中国特供C6(2016-2023) |
| model:citroen:c8 | C8 | C8 | C8 | C8 | class:eu:m | body:minivan | pt:ice | discontinued · 2002–2014 | 大型MPV,与标致807、菲亚特Ulysse等同平台(Eurovans) |
| model:citroen:citroen-bx | Citroën BX | 雪铁龙BX | — | — | class:eu:c | body:hatchback | pt:ice | discontinued · 1982–1994 | BX(1982-1994),雪铁龙经典中型车,液压气动悬挂 |
| model:citroen:citroen-c1 | Citroën C1 | 雪铁龙C1 | — | — | class:eu:a | body:city-car | pt:ice | discontinued · 2005–2022 | C1(2005-2022),城市微型车,与标致108/丰田Aygo同平台 |
| model:citroen:citroen-cx | Citroën CX | 雪铁龙CX | — | — | class:eu:e | body:sedan | pt:ice | discontinued · 1974–1991 | CX(1974-1991),雪铁龙行政级轿车,DS的继任者,液压气动悬挂 |
| model:citroen:d38fbabf1f | C-Triomphe | 凯旋 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2006–2013 | 凯旋(C-Triomphe,2006-2013),东风雪铁龙紧凑轿车,基于C4平台,后被C4L取代 |
| model:citroen:ds | DS | DS(女神) | DS | DS(デーエス) | class:eu:e | body:sedan | pt:ice | discontinued · 1955–1975 | 雪铁龙经典旗舰「女神」(Déesse),液压气动悬挂闻名;DS品牌名即源自此车 |
| model:citroen:e-mehari | E-MEHARI | E-MEHARI | — | — | class:eu:a | body:convertible | pt:bev | discontinued · 2016–2019 | E-MEHARI(2016-2019),敞篷纯电休闲车,复活经典Méhari |
| model:citroen:elysee | Elysée | 爱丽舍 | Elysée | — | class:cn:a | body:sedan | pt:ice | discontinued · 2002–2019 | 东风雪铁龙入门紧凑轿车,曾为国内出租车常见车型,2019年停产 |
| model:citroen:jumpy | Jumpy | Jumpy | Jumpy | ジャンピー | class:eu:m | body:van | pt:ice | current · 1994–present | 中型厢式车,与Peugeot Expert同平台;含纯电e-Jumpy |
| model:citroen:spacetourer | SpaceTourer | SpaceTourer | SpaceTourer | スペースツアラー | class:eu:m | body:mpv | pt:ice | current · 2015–present | Jumpy的乘用版,含纯电e-SpaceTourer;接替C8 |
| model:citroen:xsara | Xsara | 赛纳 | Xsara | クサラ | class:eu:c | body:hatchback | pt:ice | discontinued · 1997–2006 | 紧凑型车,中国三厢版称「赛纳」(东风雪铁龙);被C4取代 |
| model:citroen:xsara-picasso | Xsara Picasso | 萨拉·毕加索 | Xsara Picasso | クサラ ピカソ | class:eu:m | body:mpv | pt:ice | discontinued · 1999–2013 | 紧凑MPV,中国曾国产(萨拉·毕加索) |

## Coway

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:coway:23cb5652e3 | Shiyue | 拾月 | — | — | class:cn:a00 | body:city-car | pt:bev | current · 2023–present | 凯翼拾月(2023-),纯电微型车,对标五菱宏光MINI EV |
| model:coway:c3 | Coway C3 | C3 | C3 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2014–2017 | 凯翼C3紧凑型轿车 |
| model:coway:c3r | Coway C3R | C3R | C3R | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2014–2017 | 凯翼C3R紧凑型两厢轿车,C3两厢版 |
| model:coway:c3r-ev | Coway C3R EV | 凯翼C3R EV | — | — | class:cn:a | body:hatchback | pt:bev | discontinued · 2016–2018 | 凯翼C3R EV(2016-2018),C3R纯电版,已停产 |
| model:coway:coway-e5 | Coway Finless Porpoise E5 | 凯翼江豚E5 | — | — | class:cn:mpv | body:van | pt:bev | current · 2024–present | 凯翼江豚E5(2024-),纯电微面,开瑞江豚E5换标车型 |
| model:coway:coway-e7 | Coway Finless Porpoise E7 | 凯翼江豚E7 | — | — | class:cn:mpv | body:van | pt:bev | current · 2024–present | 凯翼江豚E7(2024-),纯电微面,开瑞江豚E7换标车型 |
| model:coway:coway-ev | Xuandu EV | 轩度EV | — | — | class:cn:a | body:sedan | pt:bev | current · 2025–present | 轩度EV(2025-),纯电紧凑型轿车,续航约500公里 |
| model:coway:coway-l8 | Coway Kunlun L8 | 凯翼昆仑L8 | — | — | class:cn:b | body:suv | pt:phev | current · 2025–present | 凯翼昆仑L8(2025-),中型插混SUV |
| model:coway:coway-v7 | Coway V7 | 凯翼V7 | — | — | class:cn:mpv | body:mpv | pt:ice | current · 2022–present | 凯翼V7(2022-),中大型MPV |
| model:coway:cx3 | Coway CX3 | 凯翼CX3 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2018–2020 | 凯翼CX3(2018-),小型SUV,基于瑞虎3平台,已停产 |
| model:coway:e3 | Coway E3 | E3 | E3 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2016–2019 | 凯翼E3紧凑型轿车,C3系列改款车型 |
| model:coway:kunlun | Coway Kunlun | 昆仑 | 崑崙 | — | class:cn:b | body:suv | pt:ice | current · 2023–present | 凯翼昆仑中型SUV(2023年上市) |
| model:coway:pro | Xuanjie Pro | 炫界Pro | — | — | class:cn:a | body:suv | pt:ice | current · 2021–present | 炫界Pro(2021-),炫界升级版 |
| model:coway:pro-ev | Xuanjie Pro EV | 炫界Pro EV | — | — | class:cn:a | body:suv | pt:bev | current · 2022–present | 炫界Pro EV(2022-),纯电紧凑型SUV,续航约401公里 |
| model:coway:v3 | Coway V3 | V3 | V3 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2017–2020 | 凯翼V3紧凑型MPV(7座) |
| model:coway:x3 | Coway X3 | X3 | X3 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2016–2020 | 凯翼X3小型SUV |
| model:coway:x5 | Coway X5 | X5 | X5 | — | class:cn:a | body:suv | pt:ice | discontinued · 2017–2020 | 凯翼X5紧凑型SUV |
| model:coway:xuandu | Coway Xuandu | 轩度 | 軒度 | — | class:cn:a | body:sedan | pt:ice | current · 2021–present | 凯翼轩度紧凑型轿车(2021年上市) |
| model:coway:xuanjie | Coway Xuanjie | 炫界 | 炫界 | — | class:cn:a | body:suv | pt:ice | current · 2020–present | 凯翼炫界紧凑型SUV(2020年上市) |

## Cupra

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:cupra:ateca | Cupra Ateca | Cupra Ateca | Cupra Ateca | クプラ・アテカ | class:eu:j | body:suv | pt:ice | discontinued · 2018–2024 | 品牌独立前的首款Cupra车型(西雅特Ateca性能版),2024年停产 |
| model:cupra:born | Cupra Born | Cupra Born | Cupra Born | クプラ・ボーン | class:eu:c | body:hatchback | pt:bev | current · 2021–present | 品牌首款纯电车(大众MEB平台,大众ID.3姊妹车) |
| model:cupra:formentor | Cupra Formentor | Cupra Formentor | Cupra Formentor | クプラ・フォーメンター | class:eu:j | body:crossover | pt:ice | current · 2020–present | Cupra独立品牌后首款专属车型(溜背SUV),含VZ5(奥迪五缸)性能版 |
| model:cupra:tavascan | Cupra Tavascan | Cupra Tavascan | Cupra Tavascan | クプラ・タバスカン | class:eu:j | body:crossover | pt:bev | current · 2023–present | 纯电轿跑SUV(大众MEB平台),2023年发布 |
| model:cupra:terramar | Cupra Terramar | Cupra Terramar | Cupra Terramar | クプラ・テラマー | class:eu:j | body:suv | pt:phev | current · 2024–present | 品牌末代燃油平台SUV(轻混/插混),2024年发布 |

## Dacia

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:dacia:duster | Dacia Duster | 达契亚Duster | Dacia Duster | ダチア・ダスター | class:eu:j | body:suv | pt:ice | current · 2010–present | 高性价比紧凑型SUV(第三代2024);大陆未引进 |
| model:dacia:jogger | Dacia Jogger | 达契亚Jogger | Dacia Jogger | ダチア・ジョガー | class:eu:m | body:mpv | pt:ice | current · 2021–present | 7座多功能车(2021年推出,含混动版) |
| model:dacia:logan | Dacia Logan | 达契亚Logan | Dacia Logan | ダチア・ローガン | class:eu:b | body:sedan | pt:ice | current · 2004–present | 入门轿车(现售主要为东欧/新兴市场版),雷诺集团平价车系代表 |
| model:dacia:sandero | Dacia Sandero | 达契亚Sandero | Dacia Sandero | ダチア・サンデロ | class:eu:b | body:hatchback | pt:ice | current · 2008–present | 欧洲畅销入门小型车(第三代2020,含Stepway跨界版与纯电Sandero?);大陆未引进 |
| model:dacia:spring | Dacia Spring | 达契亚Spring | Dacia Spring | ダチア・スプリング | class:eu:a | body:hatchback | pt:bev | current · 2021–present | 入门纯电微型车(欧洲最便宜电动车之一,2024年改款) |

## Daihatsu

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:daihatsu:atrai | Atrai | — | — | アトレー | class:jp:kei | body:van | pt:ice | current · 1981-present | K-car厢式商用车(4ナンバー);现行S700(2021起) |
| model:daihatsu:ayla | Ayla | 大发Ayla | — | — | class:cn:a00 | body:hatchback | pt:ice | current · 2013–present | 大发印尼市场微型掀背车,2013年上市,与丰田Agya同源;马来西亚Perodua Axia同平台 |
| model:daihatsu:boon | Boon | — | — | ブーン | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2004-2023 | 紧凑掀背车;丰田Passo(2004-2023)同源,海外称Sirion;2023年停产 |
| model:daihatsu:cast | Cast | — | — | キャスト | class:jp:kei | body:hatchback | pt:ice | discontinued · 2015-2023 | K-car掀背;丰田Pixis Joy同源;2023年停产 |
| model:daihatsu:charade | Charade | 夏利(技术引进) | Charade | シャレード | class:cn:a0 | body:hatchback | pt:ice | discontinued · 1977–2000 | 重要小型车(3代);大陆夏利轿车基于Charade技术国产化(1986起);官方历史资料库收录 |
| model:daihatsu:copen | Copen | — | — | コペン | class:jp:kei | body:roadster | pt:ice | current · 2002-present | K-car敞篷小跑车;第一代2002-2012,第二代LA400(2014起);丰田Copen GR Sport同源 |
| model:daihatsu:cuore | Cuore | — | Cuore | クオーレ | class:jp:kei | body:hatchback | pt:ice | discontinued · 1980–2013 | 重要K-car小型车,海外名Mira/Domino;官方历史资料库收录 |
| model:daihatsu:esse | Esse | — | — | エッセ | class:jp:kei | body:hatchback | pt:ice | discontinued · 2005-2011 | 轻型K-car掀背;2011年停产 |
| model:daihatsu:fellow | Fellow | — | Fellow | フェロー | class:jp:kei | body:hatchback | pt:ice | discontinued · 1966–1988 | 大发K-car主力车系,Max前身;官方历史资料库收录 |
| model:daihatsu:gran-max | Gran Max | 大发Gran Max | — | — | class:cn:mpv | body:van | pt:ice | current · 2007–present | 大发印尼市场厢式货车/微卡,2007年上市,与丰田LiteAce同源;含货车(Gran Max Truck)与厢式(Gran Max Van)版 |
| model:daihatsu:hijet | Hijet | — | — | ハイゼット | class:jp:kei | body:kei-truck | pt:ice | current · 1960-present | K-car货车Hijet Truck/厢式Hijet Cargo;丰田Pixis Truck/Van同源 |
| model:daihatsu:luxio | Luxio | 大发Luxio | — | — | class:cn:mpv | body:mpv | pt:ice | current · 2009–present | 大发印尼市场厢式MPV,2009年上市,基于Gran Max平台 |
| model:daihatsu:materia | Materia | — | — | マテリア | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2006-2012 | 盒式紧凑车(风格类似丰田bB);2012年停产 |
| model:daihatsu:max | Max | — | Max | マックス | class:jp:kei | body:van | pt:ice | discontinued · 1981–1995 | K-car厢式车,Fellow Max后续;官方历史资料库收录 |
| model:daihatsu:mira | Mira | — | — | ミラ | class:jp:kei | body:hatchback | pt:ice | discontinued · 1980-2018 | 老牌K-car车系;后继车型为Mira e:S |
| model:daihatsu:mira-es | Mira e:S | — | — | ミライース | class:jp:kei | body:hatchback | pt:ice | current · 2011-present | Mira后继K-car;丰田Pixis Epoch同源 |
| model:daihatsu:move | Move | — | — | ムーヴ | class:jp:kei | body:hatchback | pt:ice | current · 1995-present | 大发主力K-car掀背车;现行LA150系(2023起);大陆未引进 |
| model:daihatsu:move-canbus | Move Canbus | — | — | ムーヴキャンバス | class:jp:kei | body:hatchback | pt:ice | current · 2016-present | Move车系复古方盒风格派生K-car |
| model:daihatsu:opti | Opti | — | Opti | オプティ | class:jp:kei | body:hatchback | pt:ice | discontinued · 1992–2002 | K-car小型车;官方历史资料库收录 |
| model:daihatsu:rocky | Rocky | — | — | ロッキー | class:us:small-suv | body:crossover | pt:ice | current · 2019-present | 小型跨界SUV(A200/DNGA平台);丰田Raize同源;另有过往非承载式Rocky(1990-1998) |
| model:daihatsu:sigra | Sigra | 大发Sigra | — | — | class:cn:mpv | body:mpv | pt:ice | current · 2016–present | 大发印尼市场紧凑MPV,2016年上市,与丰田Calya同源 |
| model:daihatsu:sirion | Sirion | 大发Sirion | — | — | class:cn:a0 | body:hatchback | pt:ice | current · 2004–present | 大发东南亚市场小型掀背车(日本名Boon,另行收录),2004年上市,印尼生产,2017年改款 |
| model:daihatsu:taft | Taft | — | — | タフト | class:jp:kei | body:crossover | pt:ice | current · 2020-present | K-car跨界风格(LA900系);初代Taft(F10,1974-1984)为迷你越野车 |
| model:daihatsu:tanto | Tanto | — | — | タント | class:jp:kei | body:mpv | pt:ice | current · 2003-present | 高顶K-car MPV;现行LA650系(2022起) |
| model:daihatsu:terios | Terios | 特锐 | Terios | テリオス | class:us:small-suv | body:suv | pt:ice | current · 1997-present | 小型SUV;大陆曾由天津华利组装「特锐」(2003-2006);现行J200与丰田Rush同源 |
| model:daihatsu:xenia | Xenia | 大发Xenia | — | — | class:cn:mpv | body:mpv | pt:ice | current · 2003–present | 大发印尼市场三排座MPV,2003年上市,与丰田Avanza同源;马来西亚Perodua Alza亦同平台 |
| model:daihatsu:yrv | YRV | — | YRV | YRV(ワイアールブイ) | class:eu:b | body:hatchback | pt:ice | discontinued · 2000–2005 | 小型MPV风格车;官方历史资料库收录 |

## DeLorean

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:delorean:dmc-12 | DeLorean DMC-12 | 德罗宁DMC-12 | DeLorean DMC-12 | デロリアンDMC-12 | class:eu:s | body:sports | pt:ice | discontinued · 1981–1983 | 不锈钢鸥翼门跑车(电影《回到未来》座驾),约9000辆;品牌2024年推纯电概念车DeLorean Alpha5 |

## DFSK

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:dfsk:c31 | DFSK C31 | C31 | C31 | — | class:cn:mpv | body:pickup | pt:ice | current · 2015–present | 东风小康C31微卡(单排) |
| model:dfsk:c32 | DFSK C32 | C32 | C32 | — | class:cn:mpv | body:pickup | pt:ice | current · 2015–present | 东风小康C32微卡(双排) |
| model:dfsk:c35 | DFSK C35 | C35 | C35 | — | class:cn:mpv | body:van | pt:ice | current · 2015–present | 东风小康C35微面 |
| model:dfsk:c37 | DFSK C37 | C37 | C37 | — | class:cn:mpv | body:van | pt:ice | current · 2015–present | 东风小康C37微面 |
| model:dfsk:c56 | DFSK C56 | C56 | C56 | — | class:cn:mpv | body:van | pt:ice | current · 2021–present | 东风小康C56微面/面包车(2021年上市) |
| model:dfsk:k01 | DFSK K01 | K01 | K01 | — | class:cn:mpv | body:pickup | pt:ice | current · 2011–present | 东风小康K01微型货车(单排) |
| model:dfsk:k05s | DFSK K05S | K05S | K05S | — | class:cn:mpv | body:pickup | pt:ice | current · 2018–present | 东风小康K05S微型货车 |
| model:dfsk:k07 | DFSK K07 | K07 | K07 | — | class:cn:mpv | body:van | pt:ice | discontinued · 2005–2015 | 东风小康K07微面(面包车),经典车型,约2015年停产 |
| model:dfsk:k07ii | DFSK K07 II | K07II | K07II | — | class:cn:mpv | body:van | pt:ice | discontinued · 2015–2019 | 东风小康K07II微面(K07二代),约2019年停产 |
| model:dfsk:k07s | DFSK K07S | K07S | K07S | — | class:cn:mpv | body:van | pt:ice | current · 2017–present | 东风小康K07S微面 |
| model:dfsk:v29 | DFSK V29 | V29 | V29 | — | class:cn:mpv | body:van | pt:ice | discontinued · 2012–2015 | 东风小康V29微面,约2015年停产 |

## Dodge

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:dodge:avenger | Avenger | Avenger | Avenger | アベンジャー | class:us:midsize | body:sedan | pt:ice | discontinued · 2008–2014 | 2014年停产 |
| model:dodge:challenger | Challenger | Challenger(挑战者) | Challenger | チャレンジャー | class:eu:s | body:coupe | pt:ice | discontinued · 1970–1974; 2008–2023 | 2023年停产;大陆常音译「挑战者」 |
| model:dodge:charger | Charger | Charger | Charger | チャージャー | class:us:large | body:sedan | pt:ice | current · 1966–present | 2023年停产一年,2024年发布全新一代(2025款,含纯电版) |
| model:dodge:dart | Dart | Dart | Dart | ダート | class:us:compact | body:sedan | pt:ice | discontinued · 1960–1976; 2013–2016 | 2016年停产 |
| model:dodge:durango | Durango | Durango | Durango | デュランゴ | class:us:standard-suv | body:suv | pt:ice | current · 1998–present | 三排座SUV |
| model:dodge:grand-caravan | Grand Caravan | Grand Caravan | Grand Caravan | グランドキャラバン | class:us:minivan | body:minivan | pt:ice | discontinued · 1984–2020 | 2020年停产;加拿大续产至2021年 |
| model:dodge:hornet | Hornet | Hornet | Hornet | ホーネット | class:eu:j | body:crossover | pt:ice | current · 2023–present | 与阿尔法·罗密欧Tonale同平台;历史名号1970–1975 |
| model:dodge:journey | Journey | 酷威/Journey | Journey | ジャーニー | class:eu:j | body:crossover | pt:ice | discontinued · 2009–2020 | 2020年停产;中国市场进口名「酷威」(2009-2016) |
| model:dodge:magnum | Magnum | Magnum | Magnum | マグナム | class:us:midsize | body:wagon | pt:ice | discontinued · 2005–2008 | 大型旅行车,与Charger同平台 |
| model:dodge:neon | Neon | Neon | Neon | ネオン | class:us:compact | body:sedan | pt:ice | discontinued · 1994–2005 | 1990年代道奇入门轿车 |
| model:dodge:viper | Viper | Viper(蝰蛇) | Viper | バイパー | class:eu:s | body:sports | pt:ice | discontinued · 1992–2017 | V10自然吸气跑车,2017年停产;大陆常译「蝰蛇」 |

## Dongfeng

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:dongfeng:0a8dddc9a9 | Hushi | 虎视 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2007–2016 | 虎视(2007–2016),东风皮卡,2016年停产 |
| model:dongfeng:3f2a679276 | Dongfeng Pickup | 东风皮卡 | — | — | class:cn:a | body:pickup | pt:ice | current · 2005–present | 东风皮卡(2005–),东风轻型车皮卡系列(含虎视/信天游等) |
| model:dongfeng:500113dad3 | Fuxiaorui | 福小瑞 | — | — | class:cn:a | body:pickup | pt:ice | current · 2025–present | 福小瑞(2025–),东风微卡(2025款在售) |
| model:dongfeng:54e0ceede5 | Ruichi Multi-purpose | 锐骐多功能车 | — | — | class:cn:a | body:pickup | pt:ice | current · 2021–present | 锐骐多功能车(2021–),郑州日产皮卡衍生 |
| model:dongfeng:6-pro | Ruichi 6 pro | 锐骐6 pro | — | — | class:cn:a | body:pickup | pt:ice | current · 2024–present | 锐骐6 Pro(2024–),郑州日产锐骐6改款 |
| model:dongfeng:767d133101 | Palaso | 帕拉索 | — | — | class:cn:a | body:suv | pt:ice | current · 2020–present | 帕拉索(2020–),郑州日产多用途SUV(锐骐6平台) |
| model:dongfeng:7b1659c0ba | Dongfeng | 猛士 | — | — | class:cn:a | body:suv | pt:ice | current · 2008–present | 猛士(2008–),东风军用/民用硬派越野车;2023年起猛士独立为豪华电动越野品牌 |
| model:dongfeng:box | Dongfeng BOX | 纳米BOX | — | — | class:cn:a | body:suv | pt:bev | current · 2022–present | 纳米BOX(2022–),东风纳米子品牌纯电小型SUV |
| model:dongfeng:ce9f115eb0 | Yuxuan | 御轩 | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2007–2013 | 御轩(2007–2013),郑州日产MPV(源自日产Serena平台),2013年停产 |
| model:dongfeng:dongfeng-01 | Dongfeng 01 | 纳米01 | — | — | class:cn:a | body:hatchback | pt:bev | current · 2024–present | 纳米01(2024–),东风纳米子品牌纯电小型车 |
| model:dongfeng:dongfeng-06 | Dongfeng 06 | 纳米06 | — | — | class:cn:a | body:suv | pt:bev | current · 2025–present | 纳米06(2025–),东风纳米子品牌纯电小型SUV |
| model:dongfeng:dongfeng-6 | Ruichi 6 New Energy | 锐骐6新能源 | — | — | class:cn:a | body:pickup | pt:bev | current · 2023–present | 锐骐6新能源(2023–),郑州日产锐骐6纯电版 |
| model:dongfeng:dongfeng-7 | Ruichi 7 | 锐骐7 | — | — | class:cn:a | body:pickup | pt:ice | current · 2022–present | 锐骐7(2022–),郑州日产皮卡 |
| model:dongfeng:dongfeng-e | e Elysee | e爱丽舍 | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2020–2022 | e爱丽舍(2020–2022),东风雪铁龙爱丽舍纯电版,2022年停产 |
| model:dongfeng:dongfeng-k6 | Qiankun K6 | 乾坤K6 | — | — | class:cn:a | body:pickup | pt:ice | current · 2023–present | 乾坤K6(2023–),东风轻型车纯电皮卡 |
| model:dongfeng:dongfeng-m8 | Yipai M8 | 奕派M8 | — | — | class:cn:a | body:mpv | pt:ice | current · 2025–present | 奕派M8(2025–),东风奕派(eπ)子品牌MPV |
| model:dongfeng:dongfeng-v5 | Ruidalida V5 | 睿立达V5 | — | — | class:cn:a | body:van | pt:ice | current · 2022–present | 睿立达V5(2022–),东风轻型车微面 |
| model:dongfeng:dongfeng-v7 | Ruidalida V7 | 睿立达V7 | — | — | class:cn:a | body:van | pt:ice | current · 2022–present | 睿立达V7(2022–),东风轻型车微面 |
| model:dongfeng:dongfeng-z9 | Dongfeng Yufeng Z9 | 郑州日产Z9 | — | — | class:cn:a | body:pickup | pt:ice | current · 2025–present | Z9(2025–),郑州日产全新皮卡 |
| model:dongfeng:e-007 | eπ007 | eπ007 | — | — | class:cn:a | body:sedan | pt:ice | current · 2024–present | eπ007(2024–),东风奕派(eπ)子品牌纯电轿车 |
| model:dongfeng:e-008 | eπ008 | eπ008 | — | — | class:cn:a | body:suv | pt:ice | current · 2024–present | eπ008(2024–),东风奕派(eπ)子品牌中大型SUV |
| model:dongfeng:em10 | Ruitait EM10 | 东风·瑞泰特EM10 | — | — | class:cn:a | body:van | pt:bev | current · 2019–present | 瑞泰特EM10(2019–),东风纯电物流车 |
| model:dongfeng:em27 | Yufeng EM27 | 御风EM27 | — | — | class:cn:a | body:van | pt:bev | current · 2023–present | 御风EM27(2023–),东风轻型车纯电物流车 |
| model:dongfeng:em30 | Ruitait EM30 | 东风·瑞泰特EM30 | — | — | class:cn:a | body:van | pt:bev | current · 2019–present | 瑞泰特EM30(2019–),东风纯电物流车 |
| model:dongfeng:ep7 | Yipai EP7 | 奕派EP7 | — | — | class:cn:b | body:sedan | pt:ice | current · 2025–present | 奕派EP7(2025–),东风奕派(eπ)子品牌轿车 |
| model:dongfeng:es500 | Fukang ES500 | 富康ES500 | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2018–2020 | 富康ES500(2018–2020),东风富康纯电轿车,2020年停产 |
| model:dongfeng:es600 | Fukang ES600 | 富康ES600 | — | — | class:cn:a | body:sedan | pt:bev | current · 2022–present | 富康ES600(2022–),东风富康纯电轿车(换电版) |
| model:dongfeng:ev90 | Ruidalida EV90 | 睿立达EV90 | — | — | class:cn:a | body:van | pt:bev | current · 2023–present | 睿立达EV90(2023–),东风轻型车纯电物流车 |
| model:dongfeng:ex1 | Dongfeng EX1 | 纳米EX1 | — | — | class:cn:a | body:suv | pt:bev | current · 2021–present | 纳米EX1(2021–),东风纳米子品牌纯电小型SUV |
| model:dongfeng:f086779e87 | Odins | 奥丁 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2007–2016 | 奥丁(2007–2016),郑州日产SUV(日产帕拉丁平台衍生),2016年停产 |
| model:dongfeng:m50 | Dongfeng M50 | 猛士M50 | — | — | class:cn:a | body:pickup | pt:ice | current · 2021–present | 猛士M50(2021–),东风猛士皮卡版(军转民) |
| model:dongfeng:p16 | Yufeng P16 | 御风P16 | — | — | class:cn:a | body:pickup | pt:ice | current · 2018–present | 御风P16(2018–),东风轻型车皮卡 |
| model:dongfeng:ruiqi | Dongfeng Ruiqi | 锐骐 | 銳騏 | — | class:cn:mpv | body:pickup | pt:ice | current · 2005–present | 郑州日产「东风」品牌皮卡,与日产D22技术同源 |
| model:dongfeng:ruiqi-6 | Dongfeng Ruiqi 6 | 锐骐6 | 銳騏6 | — | class:cn:mpv | body:pickup | pt:ice | current · 2018–present | 郑州日产「东风」品牌皮卡(锐骐换代车型) |
| model:dongfeng:s16 | Yufeng S16 | 御风S16 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2021 | 御风S16(2018–2021),东风轻型车SUV,2021年停产 |
| model:dongfeng:shuaike | Dongfeng Shuaike | 帅客 | 帥客 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2010–2020 | 郑州日产「东风」品牌紧凑型MPV(7座) |
| model:dongfeng:v6e | Ruidalida V6E | 睿立达V6E | — | — | class:cn:a | body:van | pt:bev | current · 2022–present | 睿立达V6E(2022–),东风轻型车纯电微面 |
| model:dongfeng:v8e | Ruidalida V8E | 睿立达V8E | — | — | class:cn:a | body:van | pt:bev | current · 2022–present | 睿立达V8E(2022–),东风轻型车纯电微面 |
| model:dongfeng:z9-ge-phev | Dongfeng Yufeng Z9 GE PHEV | 郑州日产Z9 GE PHEV | — | — | class:cn:a | body:pickup | pt:phev | current · 2025–present | Z9 GE PHEV(2025–),郑州日产Z9皮卡插电混动版 |
| model:dongfeng:zna-rich | Ruichi EV Pickup ZNA RICH | 锐骐纯电皮卡ZNA RICH | — | — | class:cn:a | body:pickup | pt:bev | current · 2022–present | 锐骐纯电皮卡ZNA RICH(2022–),郑州日产纯电皮卡 |

## Dongfeng Yufeng

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:dongfeng-yufeng:yufeng | Dongfeng Yufeng | 御风 | 禦風 | — | class:cn:mpv | body:van | pt:ice | current · 2014–present | 东风御风轻型客车(厢式/商旅),东风汽车旗下 |

## DS

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:ds:ds-3 | DS 3 | DS 3 | DS 3 | DS 3(ディーエス・トロワ) | class:eu:b | body:crossover | pt:ice | current · 2019–present | 现款即原DS 3 Crossback(2019),2023年更名DS 3,含纯电e-DS 3;初代DS 3(2009-2015)曾挂雪铁龙标 |
| model:ds:ds-4 | DS 4 | DS 4 | DS 4 | DS 4 | class:eu:c | body:hatchback | pt:ice | current · 2021–present | 紧凑型车;初代DS 4(2010-2015)曾挂雪铁龙标 |
| model:ds:ds-4s | DS 4S | DS 4S | DS 4S | DS 4S | class:eu:c | body:hatchback | pt:ice | discontinued · 2016–2019 | 中国特供紧凑型两厢轿车(长安谛艾仕,2016年上市),2019年后随品牌重组停售 |
| model:ds:ds-5 | DS 5 | DS 5 | DS 5 | DS 5 | class:eu:d | body:hatchback | pt:ice | discontinued · 2011–2018 | 跨界风格掀背车;2011-2015曾挂雪铁龙标,2015年后归DS品牌 |
| model:ds:ds-5ls | DS 5LS | DS 5LS | DS 5LS | DS 5LS | class:eu:c | body:sedan | pt:ice | discontinued · 2014–2019 | 中国特供紧凑型三厢轿车(长安谛艾仕) |
| model:ds:ds-6 | DS 6 | DS 6 | DS 6 | DS 6 | class:eu:j | body:suv | pt:ice | discontinued · 2014–2019 | 中国特供紧凑型SUV(长安谛艾仕) |
| model:ds:ds-7 | DS 7 | DS 7 | DS 7 | DS 7 | class:eu:j | body:suv | pt:ice | current · 2017–present | 紧凑型SUV(2022款起含轻混/PHEV);中国由长安谛艾仕国产 |
| model:ds:ds-9 | DS 9 | DS 9 | DS 9 | DS 9 | class:eu:e | body:sedan | pt:ice | current · 2020–present | 旗舰行政级轿车,面向中国市场开发;含PHEV版 |

## Enze

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:enze:737 | Enze 737 | 英致737 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2015–2019 | 潍柴英致737紧凑型MPV,2015年上市,英致品牌首款车型 |
| model:enze:g3 | Enze G3 | 英致G3 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2014–2019 | 潍柴英致G3小型SUV,2014年上市,英致品牌首款SUV |
| model:enze:g5 | Enze G5 | 英致G5 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2015–2019 | 潍柴英致G5紧凑型SUV,2015年上市 |

## FAW

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:faw:4a8ee259f4 | Vizi | 威姿 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2002–2010 | 威姿(2002–2010),天津一汽两厢轿车(丰田Vitz贴牌),2010年停产 |
| model:faw:6fe9e22560 | Weile | 威乐 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2004–2010 | 威乐(2004–2010),天津一汽三厢轿车(源自丰田Vitz平台),2010年停产 |
| model:faw:9fd331d736 | Senya Hongyan | 森雅鸿雁 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2020 | 森雅鸿雁(2018–2020),一汽吉林小型SUV,2020年停产 |
| model:faw:a70e | Junpai A70E | 骏派A70E | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2017–2019 | 骏派A70E(2017–2019),骏派A70纯电版,2019年停产 |
| model:faw:besturn-b50 | Besturn B50 | 奔腾B50 | Besturn B50 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2009–2019 | 奔腾(Besturn)子品牌紧凑型轿车(一汽马自达6底盘);约2019年停产 |
| model:faw:besturn-b70 | Besturn B70 | 奔腾B70 | Besturn B70 | — | class:cn:b | body:sedan | pt:ice | current · 2006–present | 奔腾(Besturn)子品牌中型轿车,2020年第三代换代 |
| model:faw:besturn-t77 | Besturn T77 | 奔腾T77 | Besturn T77 | — | class:cn:a | body:suv | pt:ice | current · 2018–present | 奔腾(Besturn)子品牌紧凑型SUV |
| model:faw:besturn-t90 | Besturn T90 | 奔腾T90 | Besturn T90 | — | class:cn:a | body:suv | pt:ice | current · 2023–present | 奔腾(Besturn)子品牌紧凑型SUV(2023年上市) |
| model:faw:besturn-t99 | Besturn T99 | 奔腾T99 | Besturn T99 | — | class:cn:b | body:suv | pt:ice | current · 2019–present | 奔腾(Besturn)子品牌中型SUV |
| model:faw:besturn-x40 | Besturn X40 | 奔腾X40 | Besturn X40 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2016–2019 | 奔腾X40(2016–2019),奔腾(Besturn)子品牌小型SUV,2019年停产 |
| model:faw:c9de719000 | FAW | 夏利 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 1986–2015 | 夏利(1986–2015),天津一汽经典微型车(源自大发Charade),2015年停产 |
| model:faw:cfd87f58bc | Weizhi | 威志 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2006–2013 | 威志(2006–2013),天津一汽自主小型车,2013年停产 |
| model:faw:cx65 | Junpai CX65 | 骏派CX65 | — | — | class:cn:a | body:wagon | pt:ice | discontinued · 2018–2020 | 骏派CX65(2018–2020),骏派子品牌旅行车,2020年停产 |
| model:faw:d80 | Junpai D80 | 骏派D80 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2020 | 骏派D80(2018–2020),骏派子品牌紧凑型SUV,2020年停产 |
| model:faw:faw-h6 | Lanjian H6 | 一汽蓝舰H6 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2017–2020 | 一汽蓝舰H6(2017–2020),一汽吉林皮卡,2020年停产 |
| model:faw:faw-n5 | FAW N5 | 夏利N5 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2009–2015 | 夏利N5(2009–2015),夏利系列改款,2015年停产 |
| model:faw:faw-n7 | FAW N7 | 夏利N7 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2012–2015 | 夏利N7(2012–2015),夏利系列跨界两厢,2015年停产 |
| model:faw:faw-r7 | FAW Senya R7 | 森雅R7 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2016–2020 | 森雅R7(2016–2020),一汽吉林小型SUV,2020年停产 |
| model:faw:faw-r8 | FAW Senya R8 | 森雅R8 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2020 | 森雅R8(2018–2020),一汽吉林小型SUV,2020年停产 |
| model:faw:faw-r9 | FAW Senya R9 | 森雅R9 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2020 | 森雅R9(2018–2020),一汽吉林紧凑型SUV,2020年停产 |
| model:faw:faw-v2 | Weizhi V2 | 威志V2 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2010–2013 | 威志V2(2010–2013),威志两厢版,2013年停产 |
| model:faw:faw-v5 | Weizhi V5 | 威志V5 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2012–2016 | 威志V5(2012–2016),威志改款,2016年停产 |
| model:faw:fec9e3e278 | Kuncheng | 坤程 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2011–2015 | 坤程(2011–2015),一汽轻型皮卡,2015年停产 |
| model:faw:junpai-a50 | Junpai A50 | 骏派A50 | Junpai A50 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2018–2020 | 骏派A50(2018–2020),骏派子品牌紧凑型轿车,2020年停产 |
| model:faw:junpai-a70 | Junpai A70 | 骏派A70 | Junpai A70 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2016–2019 | 骏派A70(2016–2019),骏派子品牌紧凑型轿车,2019年停产 |
| model:faw:junpai-d60 | Junpai D60 | 骏派D60 | Junpai D60 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2014–2019 | 骏派D60(2014–2019),骏派(Junpai)子品牌(一汽天津)小型SUV,2019年停产 |
| model:faw:m80 | FAW Senya M80 | 森雅M80 | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2009–2013 | 森雅M80(2009–2013),一汽吉林紧凑MPV(源自大发Xenia),2013年停产 |
| model:faw:s80 | FAW Senya S80 | 森雅S80 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2011–2015 | 森雅S80(2011–2015),一汽吉林小型SUV(源自大发),2015年停产 |
| model:faw:t50 | Jiabao T50 | 佳宝T50 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2013–2018 | 佳宝T50(2013–2018),一汽吉林微型皮卡,2018年停产 |
| model:faw:t51 | Jiabao T51 | 佳宝T51 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2013–2018 | 佳宝T51(2013–2018),一汽吉林微型皮卡,2018年停产 |
| model:faw:t57 | Jiabao T57 | 佳宝T57 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2013–2018 | 佳宝T57(2013–2018),一汽吉林微型皮卡,2018年停产 |
| model:faw:t80 | Jiefang T80 | 解放T80 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2015–2020 | 解放T80(2015–2020),一汽解放微型皮卡,2020年停产 |
| model:faw:t90 | Jiefang T90 | 解放T90 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2015–2020 | 解放T90(2015–2020),一汽解放微型皮卡,2020年停产 |
| model:faw:v52 | Jiabao V52 | 佳宝V52 | — | — | class:cn:a | body:van | pt:ice | discontinued · 2009–2016 | 佳宝V52(2009–2016),一汽吉林微型面包车,2016年停产 |
| model:faw:v55 | Jiabao V55 | 佳宝V55 | — | — | class:cn:a | body:van | pt:ice | discontinued · 2012–2018 | 佳宝V55(2012–2018),一汽吉林微型面包车,2018年停产 |
| model:faw:v70 | Jiabao V70 | 佳宝V70 | — | — | class:cn:a | body:van | pt:ice | discontinued · 2010–2018 | 佳宝V70(2010–2018),一汽吉林微型面包车,2018年停产 |
| model:faw:v70-ii | Jiabao V70 II Gen | 佳宝V70 II代 | — | — | class:cn:a | body:van | pt:ice | discontinued · 2014–2018 | 佳宝V70二代(2014–2018),一汽吉林微型面包车,2018年停产 |
| model:faw:v75 | Jiabao V75 | 佳宝V75 | — | — | class:cn:a | body:van | pt:ice | discontinued · 2012–2018 | 佳宝V75(2012–2018),一汽吉林微型面包车,2018年停产 |
| model:faw:v77 | Jiabao V77 | 佳宝V77 | — | — | class:cn:a | body:van | pt:ice | discontinued · 2014–2018 | 佳宝V77(2014–2018),一汽吉林微型面包车,2018年停产 |
| model:faw:v80 | Jiabao V80 | 佳宝V80 | — | — | class:cn:a | body:van | pt:ice | discontinued · 2014–2018 | 佳宝V80(2014–2018),一汽吉林微型面包车,2018年停产 |

## Fengdu

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:fengdu:mx5 | Fengdu MX5 | MX5 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2016–2019 | 东风风度紧凑型SUV,与东风风神AX7同平台 |
| model:fengdu:mx6 | Fengdu MX6 | MX6 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2015–2019 | 东风风度紧凑型SUV,基于日产奇骏T31技术平台打造 |

## Fengon

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:fengon:330 | Fengon 330 | 330 | 330 | — | class:cn:mpv | body:mpv | pt:ice | current · 2013–present | 东风风光330(2013-),紧凑型MPV,低价微面升级车型,已停产 |
| model:fengon:350 | Fengon 350 | 350 | 350 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2015–2018 | 东风风光350紧凑型MPV(2015年上市) |
| model:fengon:360 | Fengon 360 | 360 | 360 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2014–2017 | 东风风光360紧凑型MPV(2014年上市) |
| model:fengon:370 | Fengon 370 | 370 | 370 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2015–2019 | 东风风光370紧凑型MPV(2015年上市) |
| model:fengon:380 | Fengon 380 | 风光380 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2021–2023 | 风光380(2021-2023),紧凑型MPV,已停产 |
| model:fengon:500 | Fengon 500 | 500 | 500 | — | class:cn:a0 | body:suv | pt:ice | current · 2020–present | 东风风光500(2020-),小型SUV,已停产 |
| model:fengon:580 | Fengon 580 | 580 | 580 | — | class:cn:b | body:suv | pt:ice | current · 2016–present | 东风风光580中型SUV(2016年上市),风光品牌销量支柱 |
| model:fengon:580-pro | Fengon 580 Pro | 580Pro | 580 Pro | — | class:cn:b | body:suv | pt:ice | discontinued · 2019–2021 | 东风风光580Pro中型SUV(2019年上市),为580的改款升级版 |
| model:fengon:e380 | Fengon E380 | 风光E380 | — | — | class:cn:mpv | body:mpv | pt:bev | discontinued · 2022–2023 | 风光E380(2022-2023),纯电MPV,已停产 |
| model:fengon:fengon-e1 | Fengon E1 | 风光E1 | — | — | class:cn:a00 | body:suv | pt:bev | discontinued · 2020–2021 | 风光E1(2020-2021),纯电小型SUV,与雷诺e诺同源,已停产 |
| model:fengon:fengon-e3 | Fengon E3 | 风光E3 | — | — | class:cn:a | body:suv | pt:bev | discontinued · 2019–2021 | 风光E3(2019-2021),纯电SUV,已停产 |
| model:fengon:ix5 | Fengon ix5 | ix5 | ix5 | — | class:cn:a | body:crossover | pt:ice | discontinued · 2018–2021 | 东风风光ix5紧凑型轿跑SUV(2018年上市),溜背跨界造型 |
| model:fengon:ix7 | Fengon ix7 | ix7 | ix7 | — | class:cn:c | body:suv | pt:ice | discontinued · 2019–2021 | 东风风光ix7中大型SUV(2019年上市),风光旗舰SUV |
| model:fengon:miniev | Fengon MINIEV | 风光MINIEV | — | — | class:cn:a00 | body:city-car | pt:bev | discontinued · 2022–2023 | 风光MINIEV(2022-2023),纯电微型车,已停产 |
| model:fengon:s560 | Fengon S560 | S560 | S560 | — | class:cn:a | body:suv | pt:ice | current · 2017–present | 东风风光S560(2017-),紧凑型SUV,已停产 |
| model:fengon:s580 | Fengon S580 | 风光S580 | — | — | class:cn:b | body:suv | pt:ice | current · 2022–present | 风光S580(2022-),中型SUV,10.98万起 |

## Fengshen

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:fengshen:7d4ccc87d8 | Fengnuo | 风诺 | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2016–2019 | 风诺(2016-2019),东风风神纯电轿车(E300),基于雷诺风朗平台,已停产 |
| model:fengshen:a30 | Fengshen A30 | A30 | A30 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2014–2017 | 东风风神A30紧凑型轿车(2014年上市) |
| model:fengshen:a60 | Fengshen A60 | A60 | A60 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2011–2018 | 东风风神A60紧凑型轿车(2011年上市),源自日产轩逸技术,改款A60已停产 |
| model:fengshen:a9 | Fengshen A9 | A9 | A9 | — | class:cn:c | body:sedan | pt:ice | discontinued · 2016–2020 | 东风A9中大型轿车(2016年上市),与东风雪铁龙C6同平台,风神旗舰轿车 |
| model:fengshen:ax3 | Fengshen AX3 | AX3 | AX3 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2015–2020 | 东风风神AX3小型SUV(2015年上市) |
| model:fengshen:ax4 | Fengshen AX4 | AX4 | AX4 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2017–2020 | 东风风神AX4小型SUV(2017年上市) |
| model:fengshen:ax5 | Fengshen AX5 | AX5 | AX5 | — | class:cn:a | body:suv | pt:ice | discontinued · 2016–2019 | 东风风神AX5紧凑型SUV(2016年上市) |
| model:fengshen:ax7 | Fengshen AX7 | AX7 | AX7 | — | class:cn:a | body:suv | pt:ice | current · 2014–present | 东风风神AX7紧凑型SUV(2014年上市),风神销量支柱,现款含马赫动力燃油版 |
| model:fengshen:e30 | Fengshen E30 | 东风风神E30 | — | — | class:cn:a00 | body:city-car | pt:bev | discontinued · 2014–2016 | 东风风神E30(2014-2016),纯电微型车,已停产 |
| model:fengshen:e70 | Fengshen E70 | 东风风神E70 | — | — | class:cn:a | body:sedan | pt:bev | current · 2017–present | 东风风神E70(2017-),纯电紧凑型轿车,出行/网约车市场主力 |
| model:fengshen:ex1 | Fengshen EX1 | 东风风神EX1 | — | — | class:cn:a00 | body:hatchback | pt:bev | discontinued · 2020–2022 | 东风风神EX1(2020-2022),纯电小型车,与雷诺e诺同源,已停产 |
| model:fengshen:fengshen-ev | Yixuan EV | 奕炫EV | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2020–2022 | 奕炫EV(2020-2022),奕炫纯电版,已停产 |
| model:fengshen:fengshen-l7 | Fengshen L7 | 东风风神L7 | — | — | class:cn:a | body:suv | pt:phev | current · 2024–present | 东风风神L7(2024-),插混紧凑型SUV |
| model:fengshen:fengshen-l8 | Fengshen L8 | 东风风神L8 | — | — | class:cn:a | body:sedan | pt:phev | current · 2025–present | 东风风神L8(2025-),插混紧凑型SUV,12.99万起 |
| model:fengshen:h30 | Fengshen H30 | H30 | H30 | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2009–2014 | 东风风神H30紧凑型两厢车(2009年上市),为S30的两厢版 |
| model:fengshen:haohan | Fengshen Haohan | 皓瀚 | Haohan | — | class:cn:a | body:suv | pt:ice | current · 2023–present | 东风风神皓瀚紧凑型SUV(2023年上市),主销燃油版,另有DH-i混动/插混版本 |
| model:fengshen:haoji | Fengshen Haoji | 皓极 | Haoji | — | class:cn:a | body:suv | pt:ice | current · 2022–present | 东风风神皓极紧凑型SUV(2022年上市),轴距2825mm尺寸接近中型SUV,含马赫混动版 |
| model:fengshen:l60 | Fengshen L60 | L60 | L60 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2015–2017 | 东风风神L60紧凑型轿车(2015年上市),基于标致408平台 |
| model:fengshen:s30 | Fengshen S30 | S30 | S30 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2009–2014 | 东风风神S30紧凑型轿车(2009年上市),风神品牌首款车型 |
| model:fengshen:yixuan | Fengshen Yixuan | 奕炫 | Yixuan | — | class:cn:a | body:sedan | pt:ice | current · 2019–present | 东风风神奕炫紧凑型轿车(2019年上市),现风神主力轿车 |
| model:fengshen:yixuan-gs | Fengshen Yixuan GS | 奕炫GS | Yixuan GS | — | class:cn:a | body:suv | pt:ice | current · 2020–present | 东风风神奕炫GS紧凑型跨界SUV(2020年上市) |
| model:fengshen:yixuan-max | Fengshen Yixuan Max | 奕炫MAX | Yixuan Max | — | class:cn:b | body:sedan | pt:ice | current · 2021–present | 东风风神奕炫MAX中型轿车(2021年上市) |

## Ferrari

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:ferrari:12cilindri | Ferrari 12Cilindri | 法拉利12Cilindri | 法拉利12Cilindri | フェラーリ12チリンドリ | class:eu:s | body:coupe | pt:ice | current · 2024–present | 前置V12自然吸气GT,2024年发布,接替812 Superfast;含敞篷版12Cilindri Spider |
| model:ferrari:212 | Ferrari 212 | 法拉利212 | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 1951-1953 | 212(1951-1953),法拉利早期V12跑车 |
| model:ferrari:275 | Ferrari 275 | 法拉利275 | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 1964-1968 | 275(1964-1968),法拉利经典V12跑车(275 GTB/GTS/GTB/4) |
| model:ferrari:288-gto | Ferrari 288 GTO | 法拉利288 GTO | 法拉利288 GTO | フェラーリ288GTO | class:eu:s | body:supercar | pt:ice | discontinued · 1984–1987 | 首款涡轮增压超级跑车,为B组赛车认证打造,限量272台 |
| model:ferrari:296 | Ferrari 296 | 法拉利296 | — | — | class:cn:a | body:coupe | pt:ice | current · 2021-present | 296 GTB(2021-),法拉利中置V6插混跑车,含296 GTS敞篷版 |
| model:ferrari:296-gtb | Ferrari 296 GTB | 法拉利296 GTB | 法拉利296 GTB | フェラーリ296GTB | class:eu:s | body:coupe | pt:phev | current · 2021–present | V6插电混动中置跑车,2021年发布;含敞篷版296 GTS |
| model:ferrari:308 | Ferrari 308 | 法拉利308 | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 1975-1985 | 308(1975-1985),法拉利中置V8跑车(308 GTB/GTS) |
| model:ferrari:328 | Ferrari 328 | 法拉利328 | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 1985-1989 | 328(1985-1989),308的后继中置V8跑车 |
| model:ferrari:348 | Ferrari 348 | 法拉利348 | 法拉利348 | フェラーリ348 | class:eu:s | body:coupe | pt:ice | discontinued · 1989–1995 | 中置V8跑车,含348 TB/TS与348 Spider,1995年被F355取代 |
| model:ferrari:360 | Ferrari 360 | 法拉利360 | 法拉利360 | フェラーリ360 | class:eu:s | body:coupe | pt:ice | discontinued · 1999–2005 | 中置V8跑车,含360 Modena、360 Spider与Challenge Stradale |
| model:ferrari:375 | Ferrari 375 | 法拉利375 | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 1953-1955 | 375(1953-1955),法拉利早期V12跑车 |
| model:ferrari:400 | Ferrari 400 | 法拉利400 | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 1976-1989 | 400(1976-1989),法拉利前置V12 GT(400/412) |
| model:ferrari:410 | Ferrari 410 | 法拉利410 | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 1955-1959 | 410(1955-1959),法拉利早期V12跑车 |
| model:ferrari:456 | Ferrari 456 | 法拉利456 | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 1992-2003 | 456(1992-2003),法拉利前置V12 GT(456 GT/GTA) |
| model:ferrari:458 | Ferrari 458 | 法拉利458 | 法拉利458 | フェラーリ458 | class:eu:s | body:coupe | pt:ice | discontinued · 2009–2015 | 中置V8自然吸气跑车,含458 Spider与458 Speciale |
| model:ferrari:488 | Ferrari 488 | 法拉利488 | 法拉利488 | フェラーリ488 | class:eu:s | body:coupe | pt:ice | discontinued · 2015–2019 | 中置V8涡轮跑车,含488 Spider与488 Pista(2018–2021)性能版 |
| model:ferrari:500 | Ferrari 500 | 法拉利500 | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 1952-1955 | 500(1952-1955),法拉利F2赛车衍生车型 |
| model:ferrari:550 | Ferrari 550 | 法拉利550 | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 1996-2002 | 550(1996-2002),法拉利前置V12跑车(550 Maranello) |
| model:ferrari:575m | Ferrari 575M | 法拉利575M | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 2002-2006 | 575M(2002-2006),550 Maranello的改进版 |
| model:ferrari:599 | Ferrari 599 | 法拉利599 | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 2006-2012 | 599(2006-2012),法拉利前置V12跑车(599 GTB Fiorano) |
| model:ferrari:612 | Ferrari 612 | 法拉利612 | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 2004-2011 | 612(2004-2011),法拉利前置V12 2+2跑车(612 Scaglietti) |
| model:ferrari:812 | Ferrari 812 | 法拉利812 | — | — | class:cn:a | body:coupe | pt:ice | current · 2017-present | 812(2017-),法拉利前置V12跑车(812 Superfast/GTS/Competizione) |
| model:ferrari:812-superfast | Ferrari 812 Superfast | 法拉利812 Superfast | 法拉利812 Superfast | フェラーリ812スーパーファスト | class:eu:s | body:coupe | pt:ice | discontinued · 2017–2024 | 前置V12旗舰GT,含GTS敞篷版,2024年被12Cilindri取代 |
| model:ferrari:849 | Ferrari 849 | 法拉利849 | — | — | class:cn:a | body:coupe | pt:phev | current · 2026-present | 849 Testarossa(2026-),SF90的继任者,4.0T V8+三电机插混,2025年9月发布 |
| model:ferrari:california | Ferrari California | 法拉利California | 法拉利California | フェラーリ カリフォルニア | class:eu:s | body:convertible | pt:ice | discontinued · 2008–2017 | 前置V8硬顶敞篷GT,含California T(2014–2017) |
| model:ferrari:daytona-sp3 | Ferrari Daytona SP3 | 法拉利Daytona SP3 | 法拉利Daytona SP3 | フェラーリ デイトナSP3 | class:eu:s | body:supercar | pt:ice | discontinued · 2021–2024 | Icona系列限量车型,V12自然吸气,致敬1960年代赛车,限量599台(2021年发布,2022年起交付) |
| model:ferrari:enzo | Ferrari Enzo | 法拉利Enzo | 法拉利Enzo | フェラーリ エンツォ | class:eu:s | body:supercar | pt:ice | discontinued · 2002–2004 | 以创始人命名的旗舰超跑,V12自然吸气,限量399台 |
| model:ferrari:f12 | Ferrari F12 | 法拉利F12 | 法拉利F12 | フェラーリF12 | class:eu:s | body:coupe | pt:ice | discontinued · 2012–2017 | 前置V12旗舰GT,含F12berlinetta、F12tdf等版本 |
| model:ferrari:f355 | Ferrari F355 | 法拉利F355 | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 1994-1999 | F355(1994-1999),法拉利中置V8跑车 |
| model:ferrari:f40 | Ferrari F40 | 法拉利F40 | 法拉利F40 | フェラーリF40 | class:eu:s | body:supercar | pt:ice | discontinued · 1987–1992 | 恩佐·法拉利生前批准的最后车型,1987–1992年间世界最快量产车,致敬40周年 |
| model:ferrari:f430 | Ferrari F430 | 法拉利F430 | 法拉利F430 | フェラーリF430 | class:eu:s | body:coupe | pt:ice | discontinued · 2004–2009 | 中置V8跑车,含Spider敞篷版与Scuderia性能版 |
| model:ferrari:f50 | Ferrari F50 | 法拉利F50 | 法拉利F50 | フェラーリF50 | class:eu:s | body:supercar | pt:ice | discontinued · 1995–1997 | 致敬50周年的V12超跑,限量349台 |
| model:ferrari:f8-tributo | Ferrari F8 Tributo | 法拉利F8 Tributo | 法拉利F8 Tributo | フェラーリF8トリブート | class:eu:s | body:coupe | pt:ice | discontinued · 2019–2024 | 中置V8跑车,致敬经典V8引擎;含Spider版,2024年停产 |
| model:ferrari:f80 | Ferrari F80 | 法拉利F80 | — | — | class:cn:a | body:coupe | pt:hev | current · 2024-present | F80(2024-),法拉利旗舰超级跑车(LaFerrari继任,混动) |
| model:ferrari:ferrari-f8 | Ferrari F8 | 法拉利F8 | — | — | class:cn:a | body:coupe | pt:ice | current · 2019-present | F8(2019-),法拉利中置V8跑车(F8 Tributo/Spider) |
| model:ferrari:ff | Ferrari FF | 法拉利FF | 法拉利FF | フェラーリFF | class:eu:s | body:wagon | pt:ice | discontinued · 2011–2016 | 品牌首款四驱猎装车(Shooting Brake),2016年被GTC4Lusso取代 |
| model:ferrari:gtc4lusso | Ferrari GTC4Lusso | 法拉利GTC4Lusso | 法拉利GTC4Lusso | フェラーリGTC4ルッソ | class:eu:s | body:wagon | pt:ice | discontinued · 2016–2020 | FF的进化版四座猎装车,2020年停产 |
| model:ferrari:gto | Ferrari GTO | 法拉利GTO | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 1962-1984 | GTO(1962-1984),法拉利经典赛车(250 GTO/288 GTO) |
| model:ferrari:j50 | Ferrari J50 | 法拉利J50 | — | — | class:cn:a | body:coupe | pt:ice | current · 2016-present | J50(2016-),法拉利One-off定制车型(50周年纪念) |
| model:ferrari:laferrari | Ferrari LaFerrari | 法拉利LaFerrari | 法拉利LaFerrari | フェラーリ ラフェラーリ | class:eu:s | body:supercar | pt:hev | discontinued · 2013–2018 | 品牌首款混动超跑(V12+电机),限量499台,另有敞篷版LaFerrari Aperta |
| model:ferrari:luce | Ferrari Luce | 法拉利Luce | — | — | class:cn:a | body:hatchback | pt:bev | current · 2025-present | Luce(2025-),法拉利首款纯电量产车,首款5座车型 |
| model:ferrari:monza-sp1 | Ferrari Monza SP1 | 法拉利Monza SP1 | 法拉利Monza SP1 | フェラーリ モンツァSP1 | class:eu:s | body:roadster | pt:ice | discontinued · 2018–2022 | Icona系列无挡风玻璃单座speedster,SP1为单座、SP2为双座,合计限量499台 |
| model:ferrari:p80-c | P80/C | P80/C | — | — | class:cn:a | body:coupe | pt:ice | current · 2019-present | P80/C(2019-),法拉利One-off定制车型(基于488 GT3) |
| model:ferrari:portofino | Ferrari Portofino | 法拉利Portofino | 法拉利Portofino | フェラーリ ポルトフィーノ | class:eu:s | body:convertible | pt:ice | discontinued · 2017–2023 | 前置V8 GT敞篷,2017年发布,2023年被Roma Spider等接替 |
| model:ferrari:purosangue | Ferrari Purosangue | 法拉利Purosangue | 法拉利Purosangue | フェラーリ プロサングエ | class:eu:j | body:suv | pt:ice | current · 2022–present | 品牌首款四门四座SUV(官方称FUV),2022年发布、2023年交付 |
| model:ferrari:roma | Ferrari Roma | 法拉利Roma | 法拉利Roma | フェラーリ ローマ | class:eu:s | body:coupe | pt:ice | current · 2020–present | 前置V8 GT轿跑,2019年发布、2020年交付;含敞篷版Roma Spider(2023–) |
| model:ferrari:sf90 | Ferrari SF90 Stradale | 法拉利SF90 | 法拉利SF90 Stradale | フェラーリSF90ストラダーレ | class:eu:s | body:coupe | pt:phev | current · 2019–present | 首款插电混动量产法拉利(V8+三电机),2019年发布;含敞篷版SF90 Spider与硬核版XX |
| model:ferrari:sp38 | Ferrari SP38 | 法拉利SP38 | — | — | class:cn:a | body:coupe | pt:ice | current · 2018-present | SP38(2018-),法拉利One-off定制车型 |
| model:ferrari:sp3jc | Ferrari SP3JC | 法拉利SP3JC | — | — | class:cn:a | body:coupe | pt:ice | current · 2018-present | SP3JC(2018-),法拉利One-off定制车型 |
| model:ferrari:testarossa | Ferrari Testarossa | 法拉利Testarossa | 法拉利Testarossa | フェラーリ テスタロッサ | class:eu:s | body:supercar | pt:ice | discontinued · 1984–1996 | 中置V12超级跑车,含Testarossa/512 TR/F512 M三阶段 |

## Fiat

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:fiat:091013f157 | Fiat Perla | 菲亚特派朗 | 飛雅特派朗 | フィアット ペルラ | class:eu:b | body:sedan | pt:ice | discontinued · 2006–2008 | 南京菲亚特三厢轿车,2006年上市,中国市场特供 |
| model:fiat:124 | Fiat 124 | 菲亚特124 | 飛雅特124 | フィアット124 | class:eu:c | body:sedan | pt:ice | discontinued · 1966–1974 | 经典中型轿车,1966年欧洲年度车;苏联拉达基于此车设计,全球销量超1500万辆 |
| model:fiat:124-spider | Fiat 124 Spider | 菲亚特124 Spider | 飛雅特124 Spider | フィアット124スパイダー | class:eu:s | body:roadster | pt:ice | discontinued · 1966–1985 | 经典双座敞篷跑车;2016–2020年曾基于马自达MX-5平台复活同名车型 |
| model:fiat:126 | Fiat 126 | 菲亚特126 | 飛雅特126 | フィアット126 | class:eu:a | body:city-car | pt:ice | discontinued · 1972–2000 | 后置引擎微型车,500的继任者,在波兰长期生产至2000年 |
| model:fiat:500 | Fiat 500 | 菲亚特500 | 飛雅特500 | フィアット500 | class:eu:a | body:hatchback | pt:ice | current · 2007–present | 现代版500(2007–)为现售城市车;经典款500(1957–1975)与纯电500e(2020–)见注释 |
| model:fiat:500l | Fiat 500L | 菲亚特500L | 飛雅特500L | フィアット500L | class:eu:m | body:mpv | pt:ice | discontinued · 2012–2022 | 500的加长MPV版,2022年停产 |
| model:fiat:500x | Fiat 500X | 菲亚特500X | 飛雅特500X | フィアット500X | class:eu:j | body:crossover | pt:ice | discontinued · 2014–2024 | 小型跨界SUV,2014年推出,2024年停产 |
| model:fiat:5e41c4ca7b | Fiat Siena | 菲亚特西耶那 | 飛雅特西耶那 | フィアット シエナ | class:eu:b | body:sedan | pt:ice | discontinued · 2001–2008 | Palio的三厢轿车版,南京菲亚特国产,全球市场名Siena |
| model:fiat:7e37c7e188 | Fiat Linea | 菲亚特领雅 | 飛雅特領雅 | フィアット リネア | class:eu:c | body:sedan | pt:ice | discontinued · 2007–2015 | 基于Punto平台的三厢轿车,面向新兴市场;南京菲亚特进口引入 |
| model:fiat:brava | Fiat Brava | 菲亚特Brava | 飛雅特Brava | フィアット ブラーバ | class:eu:c | body:hatchback | pt:ice | discontinued · 1995–2001 | Bravo的五门姊妹车型,2001年停产 |
| model:fiat:bravo | Fiat Bravo | 菲亚特Bravo | 飛雅特Bravo | フィアット ブラボー | class:eu:c | body:hatchback | pt:ice | discontinued · 2007–2014 | 第二代Bravo(2007–2014);初代Bravo/Brava为1995–2001年车型 |
| model:fiat:croma | Fiat Croma | 菲亚特Croma | 飛雅特Croma | フィアット クロマ | class:eu:d | body:hatchback | pt:ice | discontinued · 1985–2010 | 分两代:第一代(1985–1996)大型掀背,第二代(2005–2010)旅行风;2010年停产 |
| model:fiat:doblo | Fiat Doblò | 菲亚特Doblò | 飛雅特Doblò | フィアット ドブロ | class:eu:m | body:van | pt:ice | current · 2000–present | 小型厢式车/MPV,第三代(2022–)基于标致/雪铁龙平台,含纯电E-Doblò |
| model:fiat:ducato | Fiat Ducato | 菲亚特Ducato | 飛雅特Ducato | フィアット ドゥカート | class:eu:m | body:van | pt:ice | current · 1981–present | 轻型商用车/厢式货车,现款为第三代;北美市场以Ram ProMaster销售 |
| model:fiat:f14d4ae730 | Fiat Palio Weekend | 菲亚特周末风 | 飛雅特周末風 | フィアット パリオ ウィークエンド | class:eu:b | body:wagon | pt:ice | discontinued · 2003–2008 | 南京菲亚特Palio旅行版,名周末风(Palio Weekend),2003年上市 |
| model:fiat:fiat-8v | Fiat 8V | 菲亚特8V | 飛雅特8V | フィアット8V | class:eu:s | body:coupe | pt:ice | discontinued · 1952–1954 | 搭载2.0L V8发动机的双门GT跑车,仅生产约114辆 |
| model:fiat:fiorino | Fiat Fiorino | 菲亚特Fiorino | 飛雅特Fiorino | フィアット フィオリーノ | class:eu:m | body:van | pt:ice | current · 1977–present | 微型厢式车,名称沿用数代;欧洲版(2007–2024)已停,南美版(2013–)在产 |
| model:fiat:freemont | Fiat Freemont | 菲跃 | 飛雅特Freemont | — | class:cn:b | body:suv | pt:ice | discontinued · 2012–2017 | 中型7座SUV,以进口形式引入(欧洲名Freemont,基于道奇酷威);2017年前后停售 |
| model:fiat:multipla | Fiat Multipla | 菲亚特Multipla | 飛雅特Multipla | フィアット ムルティプラ | class:eu:m | body:mpv | pt:ice | discontinued · 1998–2010 | 六座MPV,造型独特,2010年停产 |
| model:fiat:ottimo | Fiat Ottimo | 致悦 | 飛雅特Ottimo | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2014–2018 | 菲翔的两厢版,广汽菲亚特国产;2018年前后停产 |
| model:fiat:palio | Fiat Palio | 菲亚特Palio | 飛雅特Palio | フィアット パリオ | class:eu:b | body:hatchback | pt:ice | discontinued · 1996–2016 | 面向新兴市场的小型车,在巴西等地长期生产,2016年停产 |
| model:fiat:panda | Fiat Panda | 菲亚特熊猫 | 飛雅特Panda | フィアット パンダ | class:eu:a | body:hatchback | pt:ice | current · 1980–present | 历经四代,现款为第三代(2011/2012–);2024年推出全新Grande Panda |
| model:fiat:punto | Fiat Punto | 菲亚特Punto | 飛雅特Punto | フィアット プント | class:eu:b | body:hatchback | pt:ice | discontinued · 1993–2018 | 欧版小型车常青树,1993年起历经三代,2018年停产;南美款Grande Punto生产至2018年 |
| model:fiat:stilo | Fiat Stilo | 菲亚特Stilo | 飛雅特Stilo | フィアット スティーロ | class:eu:c | body:hatchback | pt:ice | discontinued · 2001–2007 | Bravo的继任者,2007年被第二代Bravo取代 |
| model:fiat:tipo | Fiat Tipo | 菲亚特Tipo | 飛雅特Tipo | フィアット ティーポ | class:eu:c | body:hatchback | pt:ice | current · 2015–present | 紧凑型轿车,2015年复活该名称(初代Tipo为1988–1995年欧洲年度车);提供掀背/轿车/旅行版 |
| model:fiat:uno | Fiat Uno | 菲亚特Uno | 飛雅特Uno | フィアット ウーノ | class:eu:b | body:hatchback | pt:ice | discontinued · 1983–1995 | 1983年欧洲年度车,欧洲版生产至1995年,南美版(Uno/Mille)生产至2014年 |
| model:fiat:viaggio | Fiat Viaggio | 菲翔 | 飛雅特Viaggio | — | class:cn:a | body:sedan | pt:ice | discontinued · 2012–2018 | 广汽菲亚特首款国产车型,紧凑型轿车,基于Dodge Dart平台;2018年随广汽菲亚特经营收缩停产 |

## Ford

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:ford:33379c9433 | Ford Riley | 福特莱利 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 1938-1969 | 福特莱利(Riley,1938-1969),英国Riley品牌车型(福特收购后) |
| model:ford:754b965eb8 | Transit Classic | 经典全顺 | — | — | class:cn:a | body:van | pt:ice | discontinued · 1997-2015 | 经典全顺(1997-2015),江铃福特全顺老款,2015年停产 |
| model:ford:7817e85697 | Kuga | 翼虎 | — | — | class:cn:a | body:suv | pt:ice | current · 2008-present | 翼虎(Kuga,2008-),福特紧凑型SUV(中国版为长安福特翼虎,2023年停产后欧洲停产) |
| model:ford:9b8e0fa21c | Transit New Generation | 新世代全顺 | — | — | class:cn:a | body:van | pt:ice | current · 2008-present | 新世代全顺(2008-),江铃福特全顺(Transit Custom中国版) |
| model:ford:active | Focus Active | 福克斯Active | — | — | class:cn:a | body:hatchback | pt:ice | current · 2018-present | 福克斯Active(2018-),福克斯跨界版 |
| model:ford:atlas | Atlas | Atlas | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2013-2019 | Atlas(2013-2019),福特印度市场MPV |
| model:ford:bronco | Bronco | 烈马 | Bronco | ブロンコ | class:us:standard-suv | body:suv | pt:ice | current · 1966–1996; 2021–present | 2021年复活;2024年江铃福特国产,中文名「烈马」 |
| model:ford:bronco-sport | Bronco Sport | Bronco Sport | Bronco Sport | ブロンコ スポーツ | class:us:small-suv | body:crossover | pt:ice | current · 2020–present | 与Bronco同名的城市型紧凑跨界SUV |
| model:ford:c-max | C-Max | C-Max | C-Max | C-MAX(シーマックス) | class:eu:m | body:mpv | pt:ice | discontinued · 2010–2019 | 北美版2013–2018,含混动/插混版 |
| model:ford:crown-victoria | Crown Victoria | Crown Victoria | Crown Victoria | クラウンビクトリア | class:us:large | body:sedan | pt:ice | discontinued · 1992–2011 | 北美警用与出租车主力车型 |
| model:ford:e-series | E-Series | E系列 | E-Series | Eシリーズ | class:us:large | body:van | pt:ice | discontinued · 1961–2014 | 即Econoline;E-350/E-450底盘改装(cutaway)版至今继续生产 |
| model:ford:e350 | Ford E350 | 福特E350 | — | — | class:cn:a | body:van | pt:ice | discontinued · 1992-2014 | E350(1992-2014),福特E系列大型厢式车,2014年停产 |
| model:ford:ecosport | EcoSport | 翼搏 | EcoSport | エコスポーツ | class:eu:j | body:crossover | pt:ice | discontinued · 2012–2022 | 北美2021年停产,巴西2022年停产;中国长安福特「翼搏」 |
| model:ford:edge | Edge | 锐界 | Edge | エッジ | class:eu:j | body:crossover | pt:ice | current · 2006–present | 北美2023年停产;中国长安福特锐界L继续生产 |
| model:ford:equator | Equator | 领裕 | Equator | — | class:cn:c | body:suv | pt:ice | current · 2021–present | 江铃福特国产中大型SUV「领裕」(Equator) |
| model:ford:equator-sport | Equator Sport | 领睿 | Equator Sport | — | class:cn:b | body:suv | pt:ice | current · 2022–present | 江铃福特国产中型SUV「领睿」(Equator Sport) |
| model:ford:escape | Escape | 翼虎→锐际 | Escape | エスケープ | class:eu:j | body:crossover | pt:ice | current · 2000–present | 欧洲对应Kuga;中国2019年换代后称「锐际」 |
| model:ford:escort | Escort | Escort(福睿斯) | Escort | エスコート | class:eu:c | body:hatchback | pt:ice | discontinued · 1968–2000; 1981–2003 | 欧洲版1968–2000,北美版1981–2003;中国大陆后以「福睿斯」名义生产(2015–2022) |
| model:ford:everest | Everest | 撼路者 | Everest | — | class:cn:b | body:suv | pt:ice | current · 2015–present | 江铃福特国产中型硬派SUV(非承载式车身) |
| model:ford:evos | EVOS | EVOS | EVOS | — | class:cn:b | body:crossover | pt:ice | current · 2021–present | 长安福特国产中型跨界SUV,2021年上市 |
| model:ford:expedition | Expedition | 征服者 | Expedition | エクスペディション | class:us:standard-suv | body:suv | pt:ice | current · 1996–present | 全尺寸SUV,有长轴Expedition Max版 |
| model:ford:explorer | Explorer | 探险者 | Explorer | エクスプローラー | class:us:standard-suv | body:suv | pt:ice | current · 1990–present | 中国长安福特国产「探险者」 |
| model:ford:f-150 | F-150 | F-150 | F-150 | F-150 | class:us:pickup | body:pickup | pt:ice | current · 1975–present | 属F系列(1948年起);美国销量冠军,F-250以上为Super Duty;2017年起以「F-150猛禽(Raptor)」名义进口中国 |
| model:ford:f-150-2 | F-150 Raptor | F-150猛禽 | — | — | class:cn:a | body:pickup | pt:ice | current · 2010-present | F-150猛禽(Raptor,2010-),F-150高性能越野版,中国官方进口 |
| model:ford:f-250 | Ford F-250 | 福特F-250 | — | — | class:cn:a | body:pickup | pt:ice | current · 1948-present | F-250(1948-),F系列重型皮卡(Super Duty) |
| model:ford:f-350 | Ford F-350 | 福特F-350 | — | — | class:cn:a | body:pickup | pt:ice | current · 1953-present | F-350(1953-),F系列重型皮卡(Super Duty) |
| model:ford:f-450 | Ford F-450 | 福特F-450 | — | — | class:cn:a | body:pickup | pt:ice | current · 1980-present | F-450(1980-),F系列超重型皮卡(Super Duty) |
| model:ford:f-650 | Ford F-650 | 福特F-650 | — | — | class:cn:a | body:pickup | pt:ice | current · 2000-present | F-650(2000-),F系列中重型卡车(Super Duty) |
| model:ford:fiesta | Fiesta | 嘉年华 | Fiesta | フィエスタ | class:eu:b | body:hatchback | pt:ice | discontinued · 1976–2023 | 欧洲2023年7月停产 |
| model:ford:flex | Flex | Flex | Flex | フレックス | class:us:midsize | body:wagon | pt:ice | discontinued · 2008–2019 | 北美大型跨界旅行车 |
| model:ford:focus | Focus | 福克斯 | Focus | フォーカス | class:eu:c | body:hatchback | pt:ice | discontinued · 1998–2025 | 北美2018年停售,欧洲2025年停产;中国长安福特版生产至2025年;另有跨界版「福克斯Active」(2020年上市) |
| model:ford:ford-e | E Transit | E全顺 | — | — | class:cn:a | body:van | pt:bev | current · 2022-present | E全顺(E-Transit,2022-),全顺纯电版 |
| model:ford:ford-ev | Territory EV | 领界EV | — | — | class:cn:a | body:suv | pt:bev | discontinued · 2019-2022 | 领界EV(2019-2022),江铃福特领界纯电版,2022年停产 |
| model:ford:ford-ka | Ford Ka | 福特Ka | — | — | class:cn:a | body:city-car | pt:ice | discontinued · 1996-2020 | Ka(1996-2020),福特欧洲微型车,2020年停产 |
| model:ford:ford-t8 | Transit T8 | 全顺T8 | — | — | class:cn:a | body:van | pt:ice | current · 2023-present | 全顺T8(2023-),江铃福特新一代全顺 |
| model:ford:fusion | Fusion | Fusion | Fusion | フュージョン | class:us:midsize | body:sedan | pt:ice | discontinued · 2006–2020 | 北美版Mondeo;2020年停产 |
| model:ford:galaxie | Galaxie | Galaxie | Galaxie | ギャラクシー | class:us:large | body:sedan | pt:ice | discontinued · 1959–1974 | 全尺寸车系,注意与Galaxy MPV区分 |
| model:ford:gpw | Ford GPW | 福特GPW | — | — | class:cn:a | body:suv | pt:ice | discontinued · 1941-1945 | GPW(1941-1945),二战吉普(Willys MB的福特版) |
| model:ford:granada | Granada | Granada | Granada | グラナダ | class:eu:d | body:sedan | pt:ice | discontinued · 1972–1994; 1975–1982 | 欧洲版1972–1994,北美版1975–1982 |
| model:ford:grand-c-max | Grand C-MAX | Grand C-MAX | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2010-2019 | Grand C-MAX(2010-2019),C-MAX七座版,欧洲市场,2019年停产 |
| model:ford:gt | Ford GT | 福特GT | GT | GT | class:eu:s | body:supercar | pt:ice | discontinued · 2005–2006; 2017–2022 | 血统源自GT40(1964–1969) |
| model:ford:maverick | Maverick | Maverick | Maverick | マーベリック | class:us:pickup | body:pickup | pt:ice | current · 2021–present | 紧凑型皮卡;「Maverick」亦曾为1970–1979年紧凑轿车名 |
| model:ford:model-a | Model A | Model A | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 1927-1931 | Model A(1927-1931),福特T型车继任者,经典车型 |
| model:ford:mondeo | Mondeo | 蒙迪欧 | Mondeo | モンデオ | class:eu:d | body:sedan | pt:ice | current · 1992–present | 欧洲2022年停产,北美对应Fusion(2006–2020);中国长安福特2022年换代后继续生产 |
| model:ford:mondeo-zhisheng | Mondeo Zhisheng | 致胜 | Mondeo Zhisheng | — | class:cn:b | body:sedan | pt:ice | discontinued · 2007–2014 | 即国产第二代蒙迪欧,官方名「蒙迪欧-致胜」,简称致胜;2013年换代后回归「蒙迪欧」 |
| model:ford:mustang | Mustang | 福特Mustang(野马) | Mustang(俗稱野馬) | マスタング | class:eu:s | body:sports | pt:ice | current · 1964–present | Pony car鼻祖;大陆官方名「福特Mustang」,俗称「野马」 |
| model:ford:mustang-mach-e | Mustang Mach-E | 福特电马 | Mustang Mach-E | マスタング マッハE | class:eu:j | body:crossover | pt:bev | current · 2020–present | 大陆官方名「福特电马」 |
| model:ford:puma | PUMA New Energy | PUMA新能源 | — | — | class:cn:a | body:suv | pt:phev | current · 2021-present | PUMA新能源(2021-),福特PUMA新能源版(中国市场) |
| model:ford:ranger | Ranger | 游骑侠 | Ranger | レンジャー | class:us:pickup | body:pickup | pt:ice | current · 1981–present | 2023年江铃福特国产,中文名「游骑侠」 |
| model:ford:s-max | S-MAX | S-MAX | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2006-2022 | S-MAX(2006-2022),福特欧洲市场MPV,2022年停产 |
| model:ford:taurus | Taurus | 金牛座 | Taurus | トーラス | class:cn:c | body:sedan | pt:ice | discontinued · 1985–2019 | 北美2019年停产;中国版金牛座2015–2019年国产 |
| model:ford:territory | Territory | 领界 | Territory | — | class:cn:a | body:suv | pt:ice | current · 2018–present | 江铃福特国产紧凑SUV「领界」(Territory) |
| model:ford:thunderbird | Thunderbird | 雷鸟 | Thunderbird | サンダーバード | class:eu:s | body:coupe | pt:ice | discontinued · 1955–1997; 2002–2005 | 个人豪华车;大陆常译「雷鸟」 |
| model:ford:tourneo | Tourneo | 途睿欧 | Tourneo | — | class:cn:mpv | body:mpv | pt:ice | current · 2016–present | 江铃福特国产「途睿欧」(Tourneo),商用兼家用MPV |
| model:ford:transit | Transit | 全顺 | Transit | トランジット | class:eu:m | body:van | pt:ice | current · 1965–present | 江铃福特国产「全顺」;2010年起衍生「新世代全顺」,2023年推出换代「全顺T8」;另有Transit Connect/Custom等衍生 |

## Forthing

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:forthing:82a02fee7a | Jingyi | 景逸 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2007–2016 | 景逸(2007-2016),东风风行首款自主家用车,紧凑型两厢,景逸系列鼻祖 |
| model:forthing:cm7 | Forthing CM7 | CM7 | CM7 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2014–2019 | 东风风行CM7中大型MPV(2014年上市),风行商务MPV |
| model:forthing:e0182b4d76 | Forthing Thunder | 风行雷霆 | — | — | class:cn:a | body:suv | pt:bev | current · 2022–present | 风行雷霆(2022-),东风风行首款纯电SUV |
| model:forthing:f600 | Forthing F600 | 风行F600 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2016–2019 | 风行F600(2016-2019),中大型商务MPV,与CM7同源,已停产 |
| model:forthing:forthing-m6 | Forthing M6 | 风行M6 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2018–2020 | 风行M6(2018-2020),紧凑型商务MPV,已停产 |
| model:forthing:forthing-m7 | Forthing M7 | 风行M7 | — | — | class:cn:mpv | body:mpv | pt:ice | current · 2018–present | 风行M7(2018-),中大型商务MPV |
| model:forthing:forthing-s7 | Xinghai S7 | 星海S7 | — | — | class:cn:b | body:sedan | pt:bev | current · 2024–present | 星海S7(2024-),东风风行星海系列纯电轿车 |
| model:forthing:forthing-t5 | Xinghai T5 | 星海T5 | — | — | class:cn:a | body:suv | pt:bev | current · 2025–present | 星海T5(2025-),星海系列纯电紧凑型SUV |
| model:forthing:forthing-v9 | Xinghai V9 | 星海V9 | — | — | class:cn:mpv | body:mpv | pt:phev | current · 2024–present | 星海V9(2024-),星海系列首款插混MPV |
| model:forthing:forthing-x5 | Xinghai X5 | 星海X5 | — | — | class:cn:b | body:suv | pt:phev | current · 2025–present | 星海X5(2025-),星海系列插混SUV |
| model:forthing:forthing-x7 | Jingyi X7 | 景逸X7 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2018–2020 | 景逸X7(2018-),7座中型SUV,与景逸X5同平台,已停产 |
| model:forthing:jingyi-s50 | Forthing Jingyi S50 | 景逸S50 | Jingyi S50 | — | class:cn:a | body:sedan | pt:ice | current · 2014–present | 东风风行景逸S50紧凑型轿车(2014年上市),主打家用与网约车市场 |
| model:forthing:jingyi-x3 | Forthing Jingyi X3 | 景逸X3 | Jingyi X3 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2014–2018 | 东风风行景逸X3小型SUV(2014年上市),景逸家族入门SUV,尺寸略小于主流紧凑SUV |
| model:forthing:jingyi-x5 | Forthing Jingyi X5 | 景逸X5 | Jingyi X5 | — | class:cn:a | body:suv | pt:ice | discontinued · 2013–2018 | 东风风行景逸X5紧凑型SUV(2013年上市),景逸系列主力SUV |
| model:forthing:jingyi-x6 | Forthing Jingyi X6 | 景逸X6 | Jingyi X6 | — | class:cn:a | body:suv | pt:ice | discontinued · 2017–2018 | 东风风行景逸X6紧凑型7座SUV(2017年上市) |
| model:forthing:lingzhi | Forthing Lingzhi | 菱智 | Lingzhi | — | class:cn:mpv | body:mpv | pt:ice | current · 2001–present | 东风风行菱智中型MPV(2001年上市),源自三菱Space Gear技术,风行经典商务MPV |
| model:forthing:lingzhi-plus | Forthing Lingzhi Plus | 菱智PLUS | Lingzhi Plus | — | class:cn:mpv | body:mpv | pt:ice | current · 2021–present | 东风风行菱智PLUS中型MPV(2021年上市),菱智的升级版本 |
| model:forthing:s500 | Forthing S500 | S500 | S500 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2015–2018 | 东风风行S500紧凑型家用MPV(2015年上市) |
| model:forthing:s50ev | Forthing S50EV | 风行S50EV | — | — | class:cn:a | body:sedan | pt:bev | current · 2018–present | 风行S50EV(2018-),纯电紧凑型轿车,常见于出行/网约车市场 |
| model:forthing:suv | Jingyi SUV | 景逸SUV | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2012–2014 | 景逸SUV(2012-2014),景逸跨界SUV版,已停产 |
| model:forthing:sx6 | Forthing SX6 | SX6 | SX6 | — | class:cn:a | body:suv | pt:ice | current · 2016–present | 东风风行SX6紧凑型7座SUV(2016年上市),车身接近MPV风格,兼具大空间属性 |
| model:forthing:t1ev | Forthing T1EV | 风行T1EV | — | — | class:cn:a00 | body:hatchback | pt:bev | discontinued · 2019–2021 | 风行T1EV(2019-2021),纯电微型车,与雷诺e诺/启辰e30同源 |
| model:forthing:t5 | Forthing T5 | T5 | T5 | — | class:cn:a | body:suv | pt:ice | current · 2018–present | 东风风行T5紧凑型SUV(2018年上市),风行T系列主力车型 |
| model:forthing:t5-evo | Forthing T5 EVO | T5 EVO | T5 EVO | — | class:cn:a | body:suv | pt:ice | current · 2020–present | 东风风行T5 EVO紧凑型SUV(2020年上市),主打运动造型 |
| model:forthing:t5l | Forthing T5L | T5L | T5L | — | class:cn:b | body:suv | pt:ice | discontinued · 2019–2022 | 东风风行T5L(2019-2022),中型7座SUV,T5加长版,已停产 |
| model:forthing:youting | Forthing Youting | 风行游艇 | Youting | — | class:cn:mpv | body:mpv | pt:ice | current · 2022–present | 东风风行游艇紧凑型家用MPV(2022年上市) |

## Foton

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:foton:33ec5a64ed | Foton | 拓陆者 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2014–2020 | 拓陆者(Tunland,2014-2020),福田皮卡,含E5/S等系列,已停产 |
| model:foton:7008502ca1 | Foton Mars | 福田火星 | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2023–present | 福田火星(2023-),福田新一代皮卡,含火星7/火星9 |
| model:foton:7b68693848 | Tunland Shengtu | 拓陆者胜途 | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2020–present | 拓陆者胜途(2020-),福田皮卡 |
| model:foton:e1ad78f9f4 | Tunland Yutu | 拓陆者驭途 | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2020–present | 拓陆者驭途(2020-),福田皮卡 |
| model:foton:f70107fdf7 | Sapu | 萨普 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2007–2020 | 萨普(Sapu,2007-2020),福田经典皮卡,已停产 |
| model:foton:fengjing | Foton Fengjing | 风景 | 風景 | — | class:cn:mpv | body:van | pt:ice | current · 2009–present | 福田风景系列轻客,经典车型,多次改款延续生产 |
| model:foton:fengjing-g7 | Foton Fengjing G7 | 风景G7 | 風景G7 | — | class:cn:mpv | body:van | pt:ice | current · 2017–present | 福田风景G7轻客,风景系列新车型 |
| model:foton:foton-3-2 | Conqueror 3 | 福田征服者3 | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2021–present | 征服者3(2021-),福田皮卡 |
| model:foton:foton-5-2 | Conqueror 5 | 福田征服者5 | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2021–present | 征服者5(2021-),福田皮卡 |
| model:foton:foton-7-2 | Conqueror 7 | 福田征服者7 | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2021–present | 征服者7(2021-),福田皮卡 |
| model:foton:foton-ev | General EV | 大将军EV | — | — | class:cn:mpv | body:pickup | pt:bev | current · 2021–present | 大将军EV(2021-),福田大将军皮卡纯电版 |
| model:foton:foton-f9 | General F9 | 大将军F9 | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2021–present | 大将军F9(2021-),福田大将军皮卡系列 |
| model:foton:foton-g7 | General G7 | 大将军G7 | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2020–present | 大将军G7(2020-),福田大将军皮卡系列 |
| model:foton:foton-g9 | General G9 | 大将军G9 | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2021–present | 大将军G9(2021-),福田大将军皮卡系列 |
| model:foton:g9suv | General G9SUV | 大将军G9SUV | — | — | class:cn:b | body:suv | pt:ice | current · 2021–present | 大将军G9 SUV(2021-),大将军G9皮卡衍生SUV版 |
| model:foton:jiatu-ix5 | Foton Gratour ix5 | 伽途ix5 | 伽途ix5 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2016–2020 | 福田伽途ix5紧凑型MPV(2016年上市),伽途乘用车系列,5座 |
| model:foton:jiatu-ix7 | Foton Gratour ix7 | 伽途ix7 | 伽途ix7 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2016–2020 | 福田伽途ix7紧凑型MPV(2016年上市),伽途乘用车系列,7座 |
| model:foton:mengpaike-e | Foton MP-X E | 蒙派克E | 蒙派克E | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2014–2020 | 福田蒙派克E商务MPV(轻客),MP-X系列,源自丰田海狮技术平台 |
| model:foton:phev | Mars PHEV | 福田火星 PHEV | — | — | class:cn:mpv | body:pickup | pt:phev | current · 2024–present | 火星PHEV(2024-),火星皮卡插混版 |
| model:foton:plus-2 | Conqueror PLUS | 福田征服者PLUS | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2021–present | 征服者PLUS(2021-),福田皮卡 |
| model:foton:tuyano | Foton Tunland V | 图雅诺 | 圖雅諾 | — | class:cn:mpv | body:van | pt:ice | current · 2015–present | 福田图雅诺轻客(厢式/商旅) |
| model:foton:xiangling-m | Foton Xiangling M | 祥菱M | 祥菱M | — | class:cn:mpv | body:pickup | pt:ice | current · 2018–present | 福田祥菱M微卡(微面式货车) |
| model:foton:xiangling-s | Foton Xiangling S | 祥菱S | 祥菱S | — | class:cn:mpv | body:pickup | pt:ice | current · 2018–present | 福田祥菱S微卡(微面式货车) |
| model:foton:xiangling-v | Foton Xiangling V | 祥菱V | 祥菱V | — | class:cn:mpv | body:pickup | pt:ice | current · 2018–present | 福田祥菱V微卡(微面式货车) |

## Fulwin

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:fulwin:a8 | Fulwin A8 | 风云A8 | Fulwin A8 | — | class:cn:b | body:sedan | pt:phev | current · 2024–present | 风云(Fulwin)系列插混轿车(2024年上市,A+级),艾瑞泽8插混版;奇瑞主品牌下另有同车型条目 |
| model:fulwin:a8l | Fengyun A8L | 风云A8L | — | — | class:cn:a | body:sedan | pt:phev | current · 2024–present | 风云A8L(2024-),A8加长版插混轿车 |
| model:fulwin:a9l | Fengyun A9L | 风云A9L | — | — | class:cn:b | body:sedan | pt:phev | current · 2025–present | 风云A9L(2025-),插混轿车,含2027款 |
| model:fulwin:fulwin-a9 | Fengyun A9 | 风云A9 | — | — | class:cn:c | body:sedan | pt:bev | current · 2026–present | 风云A9(2026-),风云品牌首款纯电轿车 |
| model:fulwin:fulwin-t7 | Fengyun T7 | 风云T7 | — | — | class:cn:a | body:suv | pt:phev | current · 2026–present | 风云T7(2026-),紧凑型插混SUV |
| model:fulwin:fulwin-x3 | Fengyun X3 | 风云X3 | — | — | class:cn:a | body:suv | pt:bev | current · 2025–present | 风云X3(2025-),纯电紧凑型SUV |
| model:fulwin:t10 | Fulwin T10 | 风云T10 | Fulwin T10 | — | class:cn:c | body:suv | pt:phev | current · 2024–present | 中大型插混SUV(2024年上市),提供6/7座布局 |
| model:fulwin:t11 | Fengyun T11 | 风云T11 | — | — | class:cn:c | body:suv | pt:phev | current · 2025–present | 风云T11(2025-),风云系列中大型插混SUV |
| model:fulwin:t6 | Fulwin T6 | 风云T6 | Fulwin T6 | — | class:cn:a | body:suv | pt:phev | current · 2024–present | 紧凑型插混SUV(2024年上市),基于探索06平台开发 |
| model:fulwin:t8 | Fulwin T8 | 风云T8 | Fulwin T8 | — | class:cn:b | body:suv | pt:phev | current · 2025–present | 中型插混SUV(2025年2月上市),基于瑞虎8平台,提供5/7座 |
| model:fulwin:t9 | Fulwin T9 | 风云T9 | Fulwin T9 | — | class:cn:b | body:suv | pt:phev | current · 2024–present | 风云(Fulwin)系列2023年重启后首款车型,中型插混SUV(2024年上市),搭载鲲鹏超能混动C-DM |
| model:fulwin:t9l | Fengyun T9L | 风云T9L | — | — | class:cn:b | body:suv | pt:phev | current · 2026–present | 风云T9L(2026-),中型插混SUV('智美大五座') |
| model:fulwin:x3-plus | Fengyun X3 PLUS | 风云X3 PLUS | — | — | class:cn:a | body:suv | pt:bev | current · 2025–present | 风云X3 PLUS(2025-),纯电紧凑型SUV,iCAR 03系列更名 |
| model:fulwin:x3l | Fengyun X3L | 风云X3L | — | — | class:cn:a | body:suv | pt:erev | current · 2025–present | 风云X3L(2025-),增程紧凑型SUV('方盒子'造型),含四驱版 |

## GAC

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:gac:e8 | GAC E8 | 传祺E8 | GAC E8 | — | class:cn:mpv | body:mpv | pt:phev | current · 2023–present | 中型MPV(2023年上市,插电混动,另有纯电版) |
| model:gac:emkoo | GAC Emkoo | 传祺影酷 | GAC Emkoo | — | class:cn:a | body:suv | pt:ice | current · 2022–present | 紧凑型SUV(2022年上市,含混动版),海外称GAC Emkoo |
| model:gac:empow | GAC Empow | 传祺影豹 | GAC Empow(未导入) | — | class:cn:a | body:sedan | pt:ice | current · 2021–present | 紧凑型运动轿车(2021年上市,含混动版),海外称GAC Empow |
| model:gac:es9 | GAC ES9 | 传祺ES9 | — | — | class:cn:b | body:suv | pt:phev | current · 2023–present | 传祺ES9(2023-),插混中大型SUV,基于GS8平台 |
| model:gac:ga3 | GAC GA3 | 传祺GA3 | GAC GA3 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2013–2018 | 紧凑型轿车(2013年上市);已停产 |
| model:gac:ga3s | GAC GA3S | 传祺GA3S视界 | GAC GA3S | — | class:cn:a | body:sedan | pt:ice | discontinued · 2014–2018 | 紧凑型轿车,GA3改款(视界版);已停产 |
| model:gac:ga3s-phev | GAC GA3S PHEV | 传祺GA3S PHEV | — | — | class:cn:a | body:sedan | pt:phev | discontinued · 2016–2018 | 传祺GA3S PHEV(2016-2018),GA3S插电混动版,已停产 |
| model:gac:ga4 | GAC GA4 | 传祺GA4 | GAC GA4 | — | class:cn:a | body:sedan | pt:ice | current · 2018–present | 紧凑型轿车(2018年上市,2021年改款GA4 PLUS) |
| model:gac:ga5 | GAC GA5 | 传祺GA5 | GAC GA5 | — | class:cn:b | body:sedan | pt:ice | discontinued · 2011–2018 | 传祺品牌首款量产轿车(中型);已停产 |
| model:gac:ga5-new-energy | GAC GA5 New Energy | 传祺GA5新能源 | GAC GA5 New Energy | — | class:cn:b | body:sedan | pt:erev | discontinued · 2015–2018 | 中型轿车,增程/纯电动力(GA5新能源版);已停产 |
| model:gac:ga6 | GAC GA6 | 传祺GA6 | GAC GA6 | — | class:cn:b | body:sedan | pt:ice | discontinued · 2014–2023 | 传祺GA6(2014-2023),中型轿车,2019年第二代,已停产 |
| model:gac:ga8 | GAC GA8 | 传祺GA8 | GAC GA8 | — | class:cn:c | body:sedan | pt:ice | discontinued · 2016–2022 | 传祺GA8(2016-2022),中大型旗舰轿车,2020年第二代,已停产 |
| model:gac:gac-e9 | GAC E9 | 传祺E9 | — | — | class:cn:mpv | body:mpv | pt:phev | current · 2023–present | 传祺E9(2023-),中大型插混MPV,含宗师版/乾昆版 |
| model:gac:gac-m8 | Trumpchi Xiangwang M8 | 传祺向往M8 | — | — | class:cn:mpv | body:mpv | pt:phev | current · 2025–present | 传祺向往M8(2025-),向往系列中大型插混MPV |
| model:gac:gac-s7 | Trumpchi Xiangwang S7 | 传祺向往S7 | — | — | class:cn:b | body:suv | pt:phev | current · 2025–present | 传祺向往S7(2025-),向往系列插混SUV |
| model:gac:gac-s9 | Trumpchi Xiangwang S9 | 传祺向往S9 | — | — | class:cn:c | body:suv | pt:phev | current · 2025–present | 传祺向往S9(2025-),向往系列旗舰插混SUV |
| model:gac:ge3 | GAC GE3 | 传祺GE3 | GAC GE3 | — | class:cn:a0 | body:suv | pt:bev | discontinued · 2017–2021 | 传祺GE3(2017-2021),纯电动小型SUV,含GE3 530,广汽新能源时期车型,埃安品牌转型后停产 |
| model:gac:gs3 | GAC GS3 | 传祺影速GS3 | GAC GS3(未导入) | — | class:cn:a0 | body:suv | pt:ice | current · 2017–present | 小型SUV(2023年第三代更名「影速GS3」) |
| model:gac:gs4 | GAC GS4 | 传祺GS4 | GAC GS4(未导入) | — | class:cn:a | body:suv | pt:ice | current · 2015–present | 广汽传祺销量支柱紧凑型SUV(2015年上市,含PLUS/混动版);海外称GAC GS4/Trumpchi GS4 |
| model:gac:gs4-coupe | GAC GS4 COUPE | 传祺GS4 COUPE | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2020–2022 | 传祺GS4 COUPE(2020-),GS4轿跑版,已停产 |
| model:gac:gs5 | GAC GS5 | 传祺GS5 | GAC GS5 | — | class:cn:a | body:suv | pt:ice | discontinued · 2012–2021 | 传祺品牌首款SUV(紧凑型,2018年第二代);已停产 |
| model:gac:gs5-super | GAC GS5 Super | 传祺GS5 Super | GAC GS5 Super | — | class:cn:a | body:suv | pt:ice | discontinued · 2015–2019 | 紧凑型SUV,GS5改款(速博/Super);已停产 |
| model:gac:gs7 | GAC GS7 | 传祺GS7 | GAC GS7 | — | class:cn:b | body:suv | pt:ice | discontinued · 2017–2020 | 中型SUV(GS8短轴5座版);已停产 |
| model:gac:gs8 | GAC GS8 | 传祺GS8 | GAC GS8(未导入) | — | class:cn:b | body:suv | pt:ice | current · 2016–present | 中大型SUV(2021年第二代,含混动版),海外称GAC GS8 |
| model:gac:m6 | GAC M6 | 传祺M6 | GAC M6 | — | class:cn:mpv | body:mpv | pt:ice | current · 2019–present | 紧凑型MPV(2019年上市,2021年改款M6 PRO) |
| model:gac:m8 | GAC M8 | 传祺M8 | GAC M8(未导入) | — | class:cn:mpv | body:mpv | pt:ice | current · 2020–present | 中大型MPV(2020年上市,含宗师版/混动) |

## GAC Group

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:gac-group:qizhi-phev | GAC Mitsubishi Qizhi PHEV | 祺智PHEV | Qizhi PHEV | — | class:cn:a | body:suv | pt:phev | discontinued · 2018–2021 | 广汽三菱祺智PHEV插电混动紧凑型SUV(2018-2021),基于传祺GS4 PHEV换标,广汽三菱渠道销售 |

## Geely

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:geely:5da07f1d6e | Geely Radar Horizon | 吉利雷达地平线 | — | — | class:cn:d | body:pickup | pt:bev | current · 2024–present | 雷达地平线(2024–),吉利雷达品牌四驱纯电皮卡,2024年4月上市 |
| model:geely:6ccadc12c1 | Xingyuan | 星愿 | — | — | class:cn:a0 | body:sedan | pt:bev | current · 2024–present | 星愿(2024–),吉利小型纯电轿车,2024年上市 |
| model:geely:8115b559a5 | China Dragon | 中国龙 | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 2006–2009 | 中国龙(2006–2009),吉利双门跑车,1.5L/1.8L发动机 |
| model:geely:9780e424e8 | Beauty Leopard | 美人豹 | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 2003–2006 | 美人豹(2003–2006),吉利首款跑车,1.3L/1.5L发动机,中国品牌首款跑车 |
| model:geely:a7-ev | Galaxy A7 EV | 银河A7 EV | — | — | class:cn:a | body:sedan | pt:bev | current · 2025–present | 银河A7 EV(2025–),银河子品牌纯电轿车,与A7 EM(插混)为同系不同动力 |
| model:geely:b00079c898 | Youliou | 优利欧 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2002–2008 | 优利欧(2002–2008),吉利入门三厢轿车,与豪情/美日并称吉利老三样 |
| model:geely:binrui | Binrui | 缤瑞 | Binrui | — | class:cn:a | body:sedan | pt:ice | current · 2018–present | 紧凑型轿车(燃油);海外称Binray |
| model:geely:binyue | Binyue | 缤越 | Binyue | — | class:cn:a0 | body:suv | pt:ice | current · 2018–present | 小型SUV(BMA平台),燃油/插混;海外称Coolray/Proton X50 |
| model:geely:borui | Borui | 博瑞 | Borui | — | class:cn:b | body:sedan | pt:ice | discontinued · 2015–2022 | 吉利首款B级轿车(曾名博瑞GE,含插混);2022年停产 |
| model:geely:boyue | Boyue | 博越 | Boyue | — | class:cn:a | body:suv | pt:ice | current · 2016–present | 紧凑型SUV,含博越L/博越COOL等衍生款;海外称Atlas/Cityray/Proton X70 |
| model:geely:cowboy | Cowboy | 牛仔 | Cowboy | — | class:cn:a0 | body:suv | pt:ice | current · 2024–present | 吉利牛仔(2024–),小型硬派风格SUV(方盒子造型),燃油动力 |
| model:geely:e28247827f | Haoqing | 豪情 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 1998–2008 | 豪情(1998–2008),吉利早期经济型轿车,与豪情SUV为不同车型,2008年停产 |
| model:geely:ead4930f97 | Emgrand Methanol | 帝豪甲醇 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2015–2018 | 帝豪甲醇版(2015–2018),吉利甲醇燃料汽车,面向出租车市场 |
| model:geely:ec8 | Emgrand EC8 | 帝豪EC8 | Emgrand EC8 | — | class:cn:b | body:sedan | pt:ice | discontinued · 2011–2015 | 帝豪EC8(2011–2015),帝豪系列旗舰B级轿车,2015年停产 |
| model:geely:emgrand | Emgrand | 帝豪 | Emgrand | — | class:cn:a | body:sedan | pt:ice | current · 2009–present | 紧凑型轿车,原帝豪EC7(2009–2021),现第五代(SS21);海外称Proton S70/BelGee S50 |
| model:geely:emgrand-gl | Emgrand GL | 帝豪GL | Emgrand GL | — | class:cn:a | body:sedan | pt:ice | discontinued · 2016–2020 | 紧凑型轿车,2020年停产,继任为帝豪L(含帝豪EV Pro)等 |
| model:geely:emgrand-gs | Emgrand GS | 帝豪GS | Emgrand GS | — | class:cn:a | body:crossover | pt:ice | discontinued · 2016–2020 | 帝豪GS(2016–2020),紧凑型跨界SUV,2020年停产,继任为帝豪S |
| model:geely:emgrand-l | Emgrand L | 帝豪L | Emgrand L | — | class:cn:a | body:sedan | pt:ice | current · 2021–present | 帝豪L(2021–),紧凑型轿车,帝豪GL继任,含Hi·P插混版 |
| model:geely:emgrand-l-hip | Emgrand L HiP | 帝豪L HiP | Emgrand L HiP | — | class:cn:a | body:sedan | pt:phev | current · 2022–present | 帝豪L Hi·P(2022–),帝豪L插电混动版(雷神Hi·P),紧凑型轿车 |
| model:geely:emgrand-s | Emgrand S | 帝豪S | Emgrand S | — | class:cn:a | body:suv | pt:ice | current · 2021–present | 帝豪S(2021–),紧凑型SUV,帝豪GS继任者 |
| model:geely:englon-c5 | Englon C5 | 英伦C5 | Englon C5 | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2015–2018 | 英伦C5(2015–2018),英伦(Englon)子品牌A0级轿车,2015年4月上市,基于美日改款,两厢/三厢,2018年停产 |
| model:geely:ex3 | EX3 Kongfu Niu | EX3 功夫牛 | — | — | class:cn:a0 | body:suv | pt:bev | discontinued · 2021–2022 | 几何EX3功夫牛(2021–2022),几何品牌纯电小型SUV,2022年停产 |
| model:geely:galaxy-a7 | Galaxy A7 EM | 银河A7 | Galaxy A7 | — | class:cn:a | body:sedan | pt:phev | current · 2024–present | 银河(Galaxy)子品牌紧凑型轿车(EM-i插混),2024年上市 |
| model:geely:galaxy-e5 | Galaxy E5 | 银河E5 | Galaxy E5 | — | class:cn:a | body:suv | pt:bev | current · 2024–present | 银河(Galaxy)子品牌紧凑型纯电SUV;海外称E5/EX5/Proton eMas 7 |
| model:geely:galaxy-e8 | Galaxy E8 | 银河E8 | Galaxy E8 | — | class:cn:b | body:sedan | pt:bev | current · 2024–present | 银河(Galaxy)子品牌中大型纯电轿车(SEA架构) |
| model:geely:galaxy-l6 | Galaxy L6 | 银河L6 | Galaxy L6 | — | class:cn:a | body:sedan | pt:phev | current · 2023–present | 银河(Galaxy)子品牌紧凑型插混轿车,2023年上市 |
| model:geely:galaxy-l7 | Galaxy L7 | 银河L7 | Galaxy L7 | — | class:cn:a | body:suv | pt:phev | discontinued · 2023–2026 | 银河(Galaxy)子品牌紧凑型插混SUV;2026年停产,由银河星舰7(Starship 7)接替 |
| model:geely:galaxy-m9 | Galaxy M9 | 银河M9 | Galaxy M9 | — | class:cn:c | body:suv | pt:phev | current · 2025–present | 银河(Galaxy)子品牌大型插混SUV(雷神EM-P,6座),2025年上市 |
| model:geely:galaxy-starship-7 | Galaxy Starship 7 | 银河星舰7 | Galaxy Starship 7 | — | class:cn:a | body:suv | pt:phev | current · 2024–present | 银河(Galaxy)子品牌紧凑型插混SUV(EM-i),2024年上市,接替银河L7 |
| model:geely:gc7 | GC7 | GC7 | GC7 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2012–2016 | 吉利GC7(2012–2016),紧凑型轿车,初为全球鹰GC7,2016年停产 |
| model:geely:geely-c | Geometry C | 吉利几何C | — | — | class:cn:a | body:suv | pt:bev | discontinued · 2020–2023 | 几何C(2020–2023),几何品牌纯电紧凑型SUV,2023年停产 |
| model:geely:geely-e-2 | Geometry E Firefly | 吉利几何E萤火虫 | — | — | class:cn:a0 | body:suv | pt:bev | discontinued · 2022–2024 | 几何E萤火虫(2022–2024),几何品牌纯电小型SUV |
| model:geely:geely-g6 | Geometry G6 | 吉利几何G6 | — | — | class:cn:a | body:sedan | pt:bev | current · 2022–present | 几何G6(2022–),几何品牌纯电紧凑型轿车 |
| model:geely:geely-l | Boyue L | 博越L | — | — | class:cn:a | body:suv | pt:ice | current · 2022–present | 博越L(2022–),紧凑型SUV,博越家族换代车型(CMA架构),燃油/雷神混动 |
| model:geely:geely-m6 | Geometry M6 | 吉利几何M6 | — | — | class:cn:a | body:suv | pt:bev | current · 2022–present | 几何M6(2022–),几何品牌纯电紧凑型SUV |
| model:geely:geely-m7 | Galaxy M7 | 银河M7 | — | — | class:cn:b | body:suv | pt:phev | current · 2026–present | 银河M7(2026–),银河子品牌中大型SUV(EM-i插混),2026年上市 |
| model:geely:geely-tt | Galaxy TT | 银河TT | — | — | class:cn:c | body:sedan | pt:bev | current · 2026–present | 银河TT(2026–),银河子品牌中大型纯电轿跑(C级,四座),2026年上市 |
| model:geely:geely-x3 | Vision X3 | 远景X3 | — | — | class:cn:a0 | body:suv | pt:ice | current · 2017–present | 远景X3(2017–),小型SUV,远景系列衍生车型 |
| model:geely:geometry-a | Geometry A | 几何A | 幾何A | — | class:cn:a | body:sedan | pt:bev | discontinued · 2019–2022 | 几何(Geometry)子品牌首款车型,紧凑型纯电轿车;2022年几何品牌并入吉利主品牌后停产,后续为几何A Pro/G6等 |
| model:geely:gse | Emgrand GSe | 帝豪GSe | — | — | class:cn:a | body:suv | pt:bev | discontinued · 2018–2021 | 帝豪GSe(2018–2021),帝豪系列纯电紧凑型SUV,2021年停产 |
| model:geely:gx2 | GX2 | GX2 | GX2 | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2010–2014 | 全球鹰GX2(2010–2014),微型跨界两厢车,基于熊猫平台,2014年停产 |
| model:geely:gx7 | GX7 | GX7 | GX7 | — | class:cn:a | body:suv | pt:ice | discontinued · 2012–2016 | 吉利GX7(2012–2016),紧凑型SUV,吉利首款SUV,与英伦SX7为姊妹车型,2016年停产 |
| model:geely:haijing | Haijing | 海景 | Haijing | — | class:cn:a | body:sedan | pt:ice | discontinued · 2009–2015 | 海景(2009–2015),紧凑型轿车,远景姊妹车型(曾名英伦海景/海景SC7),2015年停产 |
| model:geely:haoqing-suv | Haoqing SUV | 豪情SUV | Haoqing SUV | — | class:cn:b | body:suv | pt:ice | discontinued · 2014–2016 | 豪情SUV(2014–2016),吉利首款中型SUV(曾名帝豪EX8/全球鹰GX9),2016年停产 |
| model:geely:haoyue | Haoyue | 豪越 | Haoyue | — | class:cn:b | body:suv | pt:ice | current · 2020–present | 豪越(2020–),中型SUV,主打大空间,衍生豪越L/豪越PRO |
| model:geely:haoyue-l | Haoyue L | 豪越L | Haoyue L | — | class:cn:b | body:suv | pt:ice | current · 2022–present | 豪越L(2022–),中型SUV,豪越的加大改款,七座布局 |
| model:geely:haoyue-pro | Haoyue Pro | 豪越PRO | Haoyue Pro | — | class:cn:a | body:suv | pt:ice | current · 2024–present | 豪越PRO(2024–),紧凑型SUV,与豪越/豪越L同堂销售 |
| model:geely:icon | ICON | ICON | ICON | — | class:cn:a0 | body:suv | pt:ice | current · 2020–present | 吉利ICON(2020–),小型/紧凑型SUV(BMA平台),设计前卫,含ICON巧克力改款 |
| model:geely:jiaji | Jiaji | 嘉际 | Jiaji | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2019–2025 | 吉利首款家用MPV(6/7座),含插混版;2025年停产 |
| model:geely:jingang | King Kong | 金刚 | King Kong | — | class:cn:a | body:sedan | pt:ice | discontinued · 2006–2016 | 金刚(2006–2016),紧凑型轿车,吉利早期主力车型,2016年停产 |
| model:geely:jingang-caifu | Jingang Caifu | 金刚财富 | Jingang Caifu | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2014–2016 | 金刚财富(2014–2016),金刚两厢版,2014年11月上市,2016年停产 |
| model:geely:l380 | Yizhen L380 | 翼真L380 | — | — | class:cn:mpv | body:mpv | pt:bev | current · 2024–present | 翼真L380(2024–),LEVC翼真品牌(吉利旗下)大型纯电MPV,2025年并入吉利银河序列 |
| model:geely:lynk-01 | Lynk & Co 01 | 领克01 | Lynk & Co 01 | — | class:cn:a | body:suv | pt:ice | current · 2017–present | 领克(Lynk & Co)子品牌(吉利-沃尔沃合资)紧凑型SUV,CMA平台,燃油/插混(2022年起推出01 EM-P插混版) |
| model:geely:lynk-02 | Lynk & Co 02 | 领克02 | Lynk & Co 02 | — | class:cn:a | body:hatchback | pt:ice | current · 2018–present | 领克(Lynk & Co)子品牌紧凑型跨界两厢车(CMA平台),燃油/插混;2021年衍生02 Hatchback两厢性能版 |
| model:geely:lynk-03 | Lynk & Co 03 | 领克03 | Lynk & Co 03 | — | class:cn:a | body:sedan | pt:ice | current · 2018–present | 领克(Lynk & Co)子品牌紧凑型轿车,燃油/插混,含03+性能版 |
| model:geely:lynk-05 | Lynk & Co 05 | 领克05 | Lynk & Co 05 | — | class:cn:a | body:suv | pt:ice | current · 2019–present | 领克(Lynk & Co)子品牌紧凑型轿跑SUV,燃油/插混(2021年起推出05 EM-P插混版) |
| model:geely:lynk-06 | Lynk & Co 06 | 领克06 | Lynk & Co 06 | — | class:cn:a0 | body:suv | pt:ice | current · 2020–present | 领克(Lynk & Co)子品牌小型SUV(BMA平台),燃油/插混(2023年起推出06 EM-P插混版) |
| model:geely:lynk-07 | Lynk & Co 07 | 领克07 | Lynk & Co 07 | — | class:cn:b | body:sedan | pt:phev | current · 2024–present | 领克(Lynk & Co)子品牌中型轿车(EM-P插混),2024年上市 |
| model:geely:lynk-08 | Lynk & Co 08 | 领克08 | Lynk & Co 08 | — | class:cn:b | body:suv | pt:phev | current · 2023–present | 领克(Lynk & Co)子品牌中型SUV,EM-P插混 |
| model:geely:lynk-09 | Lynk & Co 09 | 领克09 | Lynk & Co 09 | — | class:cn:c | body:suv | pt:ice | current · 2021–present | 领克(Lynk & Co)子品牌中大型SUV(沃尔沃SPA平台),燃油/插混/轻混(2021年起推出09 EM-P插混版) |
| model:geely:lynk-900 | Lynk & Co 900 | 领克900 | Lynk & Co 900 | — | class:cn:c | body:suv | pt:phev | current · 2025–present | 领克(Lynk & Co)子品牌中大型/大型SUV旗舰(SPA Evo架构,EM-P插混,6座),2025年上市 |
| model:geely:panda | Panda | 熊猫经典 | Panda | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2008–2015 | 燃油版吉利熊猫(2008–2015),A00级微型两厢车,与纯电熊猫mini区分,2015年停产 |
| model:geely:panda-mini | Panda Mini EV | 熊猫mini | Panda Mini EV | — | class:cn:a00 | body:hatchback | pt:bev | current · 2022–present | A00级纯电微型车;老款燃油吉利熊猫(2008–2016)为其前身 |
| model:geely:rev | Boyue REV | 博越REV | — | — | class:cn:a | body:suv | pt:erev | current · 2026–present | 博越REV(2026–),博越的增程式SUV,2026年3月上市,纯电续航375km,综合续航1525km |
| model:geely:sc3 | SC3 | SC3 | SC3 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2012–2014 | 英伦SC3(2012–2014),紧凑型轿车,英伦(Englon)子品牌,2014年停产 |
| model:geely:sc5-rv | Geely SC5-RV | 吉利SC5-RV | — | — | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2010–2014 | 英伦SC5-RV(2010–2014),英伦(Englon)子品牌A0级两厢家轿,2010年11月上市 |
| model:geely:sx7 | SX7 | SX7 | SX7 | — | class:cn:a | body:suv | pt:ice | discontinued · 2013–2016 | 英伦SX7(2013–2016),紧凑型SUV,与GX7同平台姊妹车型,2016年停产 |
| model:geely:tx4 | British TX4 | 英伦TX4 | — | — | class:cn:c | body:mpv | pt:ice | discontinued · 2006–2013 | 英伦TX4(2006–2013),吉利上海英伦投产的伦敦出租车,2.5L柴油/汽油,2013年停产 |
| model:geely:v900 | Galaxy V900 | 银河V900 | — | — | class:cn:mpv | body:mpv | pt:erev | current · 2025–present | 银河V900(2025–),银河子品牌大型增程MPV,翼真L380的增程姊妹车,6/7/8座 |
| model:geely:xingrui | Xingrui | 星瑞 | Xingrui | — | class:cn:b | body:sedan | pt:ice | current · 2020–present | 紧凑级/准中型轿车(A+级,CMA平台),燃油为主,新增智擎混动;海外称Preface |
| model:geely:xingyue | Xingyue | 星越 | Xingyue | — | class:cn:a | body:crossover | pt:ice | discontinued · 2019–2023 | 星越(2019–2023),紧凑型轿跑SUV(CMA平台),与星越L为不同车型,2023年停产 |
| model:geely:xingyue-l | Xingyue L | 星越L | Xingyue L | — | class:cn:b | body:suv | pt:ice | current · 2021–present | 吉利旗舰紧凑型/中型SUV(CMA平台),燃油与智擎混动,另有增程电动版(Hi·P,2022–);海外称Monjaro |
| model:geely:xingyue-s | Xingyue S | 星越S | Xingyue S | — | class:cn:a | body:suv | pt:ice | discontinued · 2021–2023 | 星越S(2021–2023),星越的运动版,紧凑型SUV,约2023年停产 |
| model:geely:yuanjing | Yuanjing | 远景 | Yuanjing | — | class:cn:a | body:sedan | pt:ice | discontinued · 2006–2021 | 入门紧凑型轿车(含远景X1/X3等衍生);2021年停产 |
| model:geely:yuanjing-s1 | Yuanjing S1 | 远景S1 | Yuanjing S1 | — | class:cn:a | body:crossover | pt:ice | discontinued · 2017–2019 | 远景S1(2017–2019),紧凑型跨界SUV,2019年停产 |
| model:geely:yuanjing-x1 | Yuanjing X1 | 远景X1 | Yuanjing X1 | — | class:cn:a00 | body:suv | pt:ice | discontinued · 2017–2019 | 远景X1(2017–2019),微型SUV,2019年停产 |
| model:geely:yuanjing-x6 | Yuanjing X6 | 远景X6 | Yuanjing X6 | — | class:cn:a | body:suv | pt:ice | current · 2016–present | 远景X6(2016–),紧凑型SUV,原为远景SUV,2019年改款更名远景X6 |
| model:geely:zeekr-001 | Zeekr 001 | 极氪001 | Zeekr 001 | — | class:cn:c | body:wagon | pt:bev | current · 2021–present | 极氪(Zeekr)子品牌(吉利旗下)纯电猎装车(SEA架构),首款车型 |
| model:geely:zeekr-007 | Zeekr 007 | 极氪007 | Zeekr 007 | — | class:cn:b | body:sedan | pt:bev | current · 2023–present | 极氪(Zeekr)子品牌中型纯电轿车 |
| model:geely:zeekr-007-gt | Zeekr 007 GT | 极氪007 GT | 極氪007 GT(未导入) | — | class:cn:b | body:wagon | pt:bev | current · 2025–present | 极氪(Zeekr)子品牌007的猎装/旅行版,2025年4月上市 |
| model:geely:zeekr-009 | Zeekr 009 | 极氪009 | Zeekr 009 | — | class:cn:mpv | body:mpv | pt:bev | current · 2023–present | 极氪(Zeekr)子品牌大型纯电MPV(6座) |
| model:geely:zeekr-7x | Zeekr 7X | 极氪7X | 極氪7X(未导入) | — | class:cn:b | body:suv | pt:bev | current · 2024–present | 极氪(Zeekr)子品牌中型纯电SUV(800V架构,家用走量主力),2024年上市 |
| model:geely:zeekr-mix | Zeekr MIX | 极氪MIX | 極氪MIX(未导入) | — | class:cn:mpv | body:mpv | pt:bev | current · 2024–present | 极氪(Zeekr)子品牌「宝宝巴士」风格纯电MPV,前对开式侧滑门,2024年10月上市 |
| model:geely:zeekr-x | Zeekr X | 极氪X | Zeekr X | — | class:cn:a0 | body:suv | pt:bev | current · 2023–present | 极氪(Zeekr)子品牌紧凑型纯电SUV |
| model:geely:ziyoujian | Ziyoujian | 自由舰 | Ziyoujian | — | class:cn:a | body:sedan | pt:ice | discontinued · 2005–2015 | 自由舰(2005–2015),入门紧凑型轿车,吉利早期主力车型,2015年停产 |

## Genesis

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:genesis:g70 | G70 | G70 | G70 | G70 | class:eu:d | body:sedan | pt:ice | current · 2017–present | 紧凑型运动豪华轿车;2025年起中国市场停售,韩国生产至2027年(无第二代计划);相关概念车Essentia(2018)未量产 |
| model:genesis:g80 | G80 | G80 | G80 | G80 | class:eu:e | body:sedan | pt:ice | current · 2016–present | 中大型行政轿车,前身为现代捷恩斯(2007-2016);含纯电Electrified G80(2021-) |
| model:genesis:g90 | G90 | G90 | G90 | G90 | class:eu:f | body:sedan | pt:ice | current · 2015–present | 旗舰豪华轿车,前身为现代雅科仕(Equus);中国市场有加长版G90L |
| model:genesis:gv60 | GV60 | GV60 | GV60 | GV60 | class:eu:c | body:crossover | pt:bev | current · 2021–present | 纯电紧凑型跨界车,基于E-GMP平台;2025年进口引入中国 |
| model:genesis:gv70 | GV70 | GV70 | GV70 | GV70 | class:eu:j | body:suv | pt:ice | current · 2020–present | 紧凑型豪华SUV;含纯电Electrified GV70(2022-) |
| model:genesis:gv80 | GV80 | GV80 | GV80 | GV80 | class:eu:j | body:suv | pt:ice | current · 2020–present | 中大型豪华SUV;2024年推出轿跑版GV80 Coupe |
| model:genesis:gv80-coupe | GV80 Coupe | GV80 Coupe | GV80 Coupe | GV80 Coupe | class:eu:j | body:suv | pt:ice | current · 2024–present | GV80轿跑SUV版(溜背造型),2024年随GV80中期改款发布上市;2.5T/3.5T双涡轮汽油动力 |

## GMC

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:gmc:acadia | Acadia | Acadia | Acadia(未導入) | アカディア | class:us:standard-suv | body:suv | pt:ice | current · 2006–present | 中型三排座SUV,2024年第三代换代(与雪佛兰Traverse同平台);大陆未官方导入 |
| model:gmc:canyon | Canyon | Canyon | Canyon(未導入) | キャニオン | class:us:pickup | body:pickup | pt:ice | current · 2004–present | 中型皮卡,与雪佛兰Colorado同平台(2023年第三代);大陆未官方导入 |
| model:gmc:hummer-ev | Hummer EV | 悍马EV | Hummer EV(未導入) | ハマーEV | class:us:pickup | body:pickup | pt:bev | current · 2021–present | 悍马以纯电形态复活(2021),皮卡与SUV双形态,基于通用奥特能平台;2024年由道朗格以「悍马EV」引入中国 |
| model:gmc:sierra | Sierra | Sierra | Sierra(未導入) | シエラ | class:us:pickup | body:pickup | pt:ice | current · 1988–present | 全尺寸皮卡(1500/2500/3500),与雪佛兰Silverado同平台;2024年起另售纯电Sierra EV;大陆未官方导入(平行进口为主) |
| model:gmc:terrain | Terrain | Terrain | Terrain(未導入) | テレイン | class:us:small-suv | body:crossover | pt:ice | current · 2010–present | 紧凑型SUV,与雪佛兰Equinox同平台;大陆未官方导入 |
| model:gmc:yukon | Yukon | 育空 | Yukon(未導入) | ユーコン | class:us:standard-suv | body:suv | pt:ice | current · 1992–present | 全尺寸SUV,与雪佛兰Tahoe同平台;2024年由通用道朗格以官方中文名「育空」引入中国,含Denali豪华版 |

## Gonow

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:gonow:100 | Caiyun 100 | 财运100 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2006–2014 | 财运100,吉奥财运系列皮卡 |
| model:gonow:300 | Caiyun 300 | 财运300 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2006–2014 | 财运300,吉奥财运系列皮卡 |
| model:gonow:500 | Caiyun 500 | 财运500 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2006–2014 | 财运500,吉奥财运系列皮卡 |
| model:gonow:819098c1fd | Xingwang | 星旺 | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2010–2016 | 星旺(2010-2016),吉奥微面,载人载货两用 |
| model:gonow:aoxuan-g5 | Gonow Aoxuan G5 | 吉奥奥轩G5 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2011–2015 | 吉奥奥轩G5中型SUV,2011年上市 |
| model:gonow:aoxuan-gx5 | Gonow Aoxuan GX5 | 吉奥奥轩GX5 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2012–2015 | 吉奥奥轩GX5中型SUV,2012年上市,奥轩G5的改款车型 |
| model:gonow:b2e8848af8 | Kairui | 凯睿 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2006–2011 | 凯睿(2006-),吉奥紧凑型SUV,2009款在售 |
| model:gonow:bcf9bb52a2 | Gonow Kaixuan | 吉奥凯旋 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2005–2010 | 凯旋,吉奥早期SUV车型 |
| model:gonow:c5f311c425 | Shuaiwei | 帅威 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2004–2008 | 帅威(2004-),吉奥早期SUV,2004年12月上市 |
| model:gonow:gonow-cl | Xingwang CL | 星旺CL | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2012–2016 | 星旺CL,星旺微面改款版 |
| model:gonow:gonow-e | E-Mei | E美 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2014–2016 | E美(2014-2016),广汽吉奥首款轿车,与传祺GA3同平台,厂家线上直销 |
| model:gonow:gonow-l | Xingwang L | 星旺L | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2013–2016 | 星旺L,星旺微面加长版 |
| model:gonow:gonow-m1 | Xingwang M1 | 星旺M1 | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2012–2016 | 星旺M1(2012-),星旺微面系列 |
| model:gonow:gonow-m2 | Xingwang M2 | 星旺M2 | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2013–2016 | 星旺M2,星旺微面系列 |
| model:gonow:gp150 | Gonow GP150 | 广汽吉奥GP150 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2014–2016 | GP150(2014-2016),广汽吉奥皮卡,2014年11月上市 |
| model:gonow:gx6 | Gonow GX6 | 广汽吉奥GX6 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2014–2016 | GX6(2014-2016),广汽吉奥中型SUV,2014年10月上市 |
| model:gonow:shuaibao | Gonow Shuaibao | 吉奥帅豹 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2010–2014 | 吉奥帅豹中型SUV,2010年上市 |
| model:gonow:xinglang | Gonow Xinglang | 吉奥星朗 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2013–2016 | 广汽吉奥星朗紧凑型MPV,2013年上市,广汽吉奥首款乘用车 |

## Great Wall

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:great-wall:0641182406 | Safe | 赛弗 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2002-2008 | 赛弗(2002-2008),长城首款SUV,2008年停产 |
| model:great-wall:1481672c12 | Great Wall Peri | 长城精灵 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2008-2012 | 长城精灵(2008-2012),长城微型车,2012年停产 |
| model:great-wall:153fd6e439 | Xuanli | 炫丽 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2008-2013 | 炫丽(2008-2013),长城小型两厢车,2013年停产 |
| model:great-wall:230dc8b97c | Jiayu | 嘉誉 | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2007-2014 | 嘉誉(2007-2014),长城MPV,2014年停产 |
| model:great-wall:52a41040b4 | Lingao | 凌傲 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2009-2014 | 凌傲(2009-2014),长城小型两厢车,2014年停产 |
| model:great-wall:54c5d79d7d | Pao | 炮 | — | — | class:cn:a | body:pickup | pt:ice | current · 2019-present | 长城炮(2019-),长城皮卡系列(乘用炮/商用炮/越野炮) |
| model:great-wall:576b14ad41 | Deer | 金迪尔 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 1996-2010 | 金迪尔(1996-2010),长城皮卡(源自丰田Hilux),2010年停产 |
| model:great-wall:5db9fc986d | Shanhai Pao | 山海炮 | — | — | class:cn:a | body:pickup | pt:ice | current · 2022-present | 山海炮(2022-),长城炮系列高端皮卡 |
| model:great-wall:8ca13fd7ab | Saijun | 赛骏 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2004-2008 | 赛骏(2004-2008),长城皮卡,2008年停产 |
| model:great-wall:99f7f05ed6 | Jingang Pao | 金刚炮 | — | — | class:cn:a | body:pickup | pt:ice | current · 2022-present | 金刚炮(2022-),长城炮系列商用皮卡 |
| model:great-wall:bf1c30da59 | Saiying | 赛影 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2003-2008 | 赛影(2003-2008),长城SUV,2008年停产 |
| model:great-wall:big-dog | Haval Big Dog | 哈弗大狗 | Haval Big Dog | — | class:cn:a | body:suv | pt:ice | current · 2020–present | 哈弗(Haval)子品牌紧凑型硬派风格SUV,含插混;海外称Haval Dargo/Haval H7 |
| model:great-wall:black-cat | Ora Black Cat | 欧拉黑猫 | Ora Black Cat | — | class:cn:a00 | body:hatchback | pt:bev | discontinued · 2019–2022 | 欧拉(Ora)子品牌A00级纯电微型车(原R1);2022年停产 |
| model:great-wall:c20r | Great Wall C20R | 长城C20R | Great Wall C20R | — | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2011–2015 | 长城汽车小型两厢车;2015年停产 |
| model:great-wall:c20rev | Great Wall C20REV | 长城C20REV | — | — | class:cn:a | body:hatchback | pt:bev | discontinued · 2012-2015 | 长城C20R EV(2012-2015),长城纯电小型车,2015年停产 |
| model:great-wall:c30-2 | Great Wall C30 | 长城C30 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2010-2017 | 长城C30(2010-2017),长城紧凑型轿车(含纯电版C30 EV),2017年停产 |
| model:great-wall:c50 | Great Wall C50 | 长城C50 | Great Wall C50 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2011–2016 | 长城汽车紧凑型轿车,长城品牌为数不多的轿车之一;2016年停产 |
| model:great-wall:c70 | Great Wall C70 | 长城C70 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2011-2015 | 长城C70(2011-2015),长城中型轿车(腾翼C70),2015年停产 |
| model:great-wall:chitu | Haval Chitu | 哈弗赤兔 | Haval Chitu | — | class:cn:a | body:suv | pt:ice | current · 2021–present | 哈弗(Haval)子品牌紧凑型SUV(柠檬平台,定位年轻运动) |
| model:great-wall:cool-dog | Haval Cool Dog | 哈弗酷狗 | Haval Cool Dog | — | class:cn:a | body:suv | pt:ice | current · 2022–present | 哈弗(Haval)子品牌紧凑型SUV(狗系家族,硬派造型) |
| model:great-wall:d072907e9a | Coolbear | 酷熊 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2009-2013 | 酷熊(2009-2013),长城方盒子造型小型车,2013年停产 |
| model:great-wall:f5 | Haval F5 | 哈弗F5 | Haval F5 | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2021 | 哈弗(Haval)子品牌紧凑型SUV(F系列入门款);2021年停产 |
| model:great-wall:f7 | Haval F7 | 哈弗F7 | Haval F7 | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2024 | 哈弗(Haval)子品牌紧凑型SUV(含F7X轿跑版);2024年停产,海外市场F7之名沿用至后续车型 |
| model:great-wall:gaoshan | Wey Gaoshan | 魏牌高山 | Wey Gaoshan | — | class:cn:mpv | body:mpv | pt:phev | current · 2023–present | 魏牌(Wey)子品牌中大型插混MPV(2023年上市) |
| model:great-wall:good-cat | Ora Good Cat | 欧拉好猫 | Ora Good Cat | — | class:cn:a0 | body:hatchback | pt:bev | current · 2020–present | 欧拉(Ora)子品牌(长城旗下)小型纯电轿车(复古造型);海外称Funky Cat/Ora 03 |
| model:great-wall:great-wall-3 | Wingle 3 | 风骏3 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2008-2013 | 风骏3(2008-2013),长城皮卡,2013年停产 |
| model:great-wall:great-wall-5 | Wingle 5 | 风骏5 | — | — | class:cn:a | body:pickup | pt:ice | current · 2010-present | 风骏5(2010-),长城皮卡主力车型 |
| model:great-wall:great-wall-6 | Wingle 6 | 风骏6 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2014-2020 | 风骏6(2014-2020),长城皮卡,2020年停产 |
| model:great-wall:great-wall-7 | Wingle 7 | 风骏7 | — | — | class:cn:a | body:pickup | pt:ice | current · 2018-present | 风骏7(2018-),长城皮卡 |
| model:great-wall:great-wall-m1 | Great Wall M1 | 长城M1 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2009-2013 | 长城M1(2009-2013),长城微型车(迷你SUV),2013年停产 |
| model:great-wall:h1 | Haval H1 | 哈弗H1 | Haval H1 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2014–2018 | 哈弗(Haval)子品牌小型SUV;2018年停产 |
| model:great-wall:h2s | Haval H2s | 哈弗H2s | Haval H2s | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2016–2019 | 哈弗(Haval)子品牌小型SUV(红标/蓝标双版本);2019年停产 |
| model:great-wall:h4 | Haval H4 | 哈弗H4 | Haval H4 | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2021 | 哈弗(Haval)子品牌紧凑型SUV;2021年停产 |
| model:great-wall:h5 | Haval H5 | 哈弗H5 | Haval H5 | — | class:cn:c | body:suv | pt:ice | current · 2010–present | 哈弗(Haval)子品牌非承载式越野SUV;初代2010–2020,2023年换代回归(大型越野) |
| model:great-wall:h6 | Haval H6 | 哈弗H6 | Haval H6 | — | class:cn:a | body:suv | pt:ice | current · 2011–present | 哈弗(Haval)子品牌紧凑型SUV,长期为国内SUV销量冠军,第三代起含混动/插混;海外称Haval Jolion之外销主力 |
| model:great-wall:h8 | Haval H8 | 哈弗H8 | Haval H8 | — | class:cn:c | body:suv | pt:ice | discontinued · 2013–2018 | 哈弗(Haval)子品牌中大型SUV,哈弗冲击高端市场的早期尝试;2018年停产 |
| model:great-wall:h9 | Haval H9 | 哈弗H9 | Haval H9 | — | class:cn:c | body:suv | pt:ice | current · 2014–present | 哈弗(Haval)子品牌中大型非承载式越野SUV;2024年第二代换代 |
| model:great-wall:hi4-t | Shanhai Pao Hi4-T | 山海炮 Hi4-T | — | — | class:cn:b | body:pickup | pt:phev | current · 2024-present | 山海炮Hi4-T(2024-),山海炮插电混动版 |
| model:great-wall:jolion | Haval Jolion | 哈弗初恋 | Haval Jolion | — | class:cn:a | body:suv | pt:ice | current · 2020–present | 哈弗(Haval)子品牌紧凑型SUV;2021年起中国停售,海外市场以Jolion继续销售 |
| model:great-wall:lanshan | Wey Lanshan | 魏牌蓝山 | Wey Lanshan | — | class:cn:c | body:suv | pt:phev | current · 2023–present | 魏牌(Wey)子品牌中大型插混SUV(6座) |
| model:great-wall:latte | Wey Latte | 魏牌拿铁 | Wey Latte | — | class:cn:a | body:suv | pt:phev | current · 2021–present | 魏牌(Wey)子品牌紧凑型SUV(DHT插混);2025年中国停售,海外(GWM Wey 03)续售 |
| model:great-wall:lightning-cat | Ora Lightning Cat | 欧拉闪电猫 | Ora Lightning Cat | — | class:cn:a | body:hatchback | pt:bev | current · 2022–present | 欧拉(Ora)子品牌(长城旗下)紧凑型纯电轿车(复古溜背造型);海外称Ora 07 |
| model:great-wall:m2 | Great Wall M2 | 长城M2 | Great Wall M2 | — | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2010–2013 | 长城汽车小型跨界两厢车(方盒子造型);2013年停产 |
| model:great-wall:m4 | Great Wall M4 | 长城M4 | Great Wall M4 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2012–2017 | 长城汽车小型SUV;2017年停产 |
| model:great-wall:macchiato | Wey Macchiato | 魏牌玛奇朵 | Wey Macchiato | — | class:cn:a | body:suv | pt:hev | discontinued · 2021–2023 | 魏牌(Wey)子品牌紧凑型SUV(柠檬混动DHT油电混动为主,含DHT-PHEV插混版);2023年停产 |
| model:great-wall:mocha | Wey Mocha | 魏牌摩卡 | Wey Mocha | — | class:cn:b | body:suv | pt:phev | current · 2021–present | 魏牌(Wey)子品牌中型SUV(DHT插混);海外称Wey Coffee 01 |
| model:great-wall:p8 | Wey P8 | 魏牌P8 | Wey P8 | — | class:cn:b | body:suv | pt:phev | discontinued · 2018–2020 | 魏牌(Wey)子品牌中型插混SUV,魏牌首款新能源车型;2020年停产 |
| model:great-wall:pao | GWM Pao (Cannon) | 长城炮 | GWM Pao | — | class:cn:mpv | body:pickup | pt:ice | current · 2019–present | 长城皮卡中型皮卡(含商用/乘用/越野版);海外称GWM Cannon/Poer;GB/T无皮卡级别,近似取多用途口径 |
| model:great-wall:raptor | Haval Raptor | 哈弗猛龙 | Haval Raptor | — | class:cn:b | body:suv | pt:phev | current · 2023–present | 哈弗(Haval)子品牌紧凑型/中型插混SUV(Hi4);海外称Haval V7 |
| model:great-wall:shenshou | Haval Shenshou | 哈弗神兽 | Haval Shenshou | — | class:cn:a | body:suv | pt:ice | current · 2021–present | 哈弗(Haval)子品牌紧凑型SUV(柠檬平台,设计前卫) |
| model:great-wall:tank-300 | Tank 300 | 坦克300 | Tank 300 | — | class:cn:a | body:suv | pt:ice | current · 2020–present | 坦克(Tank)子品牌(原属魏牌)紧凑型非承载式越野SUV,燃油/插混 |
| model:great-wall:tank-400 | Tank 400 | 坦克400 | Tank 400 | — | class:cn:b | body:suv | pt:phev | current · 2023–present | 坦克(Tank)子品牌中型非承载式越野SUV(Hi4-T插混/燃油) |
| model:great-wall:tank-500 | Tank 500 | 坦克500 | Tank 500 | — | class:cn:c | body:suv | pt:ice | current · 2022–present | 坦克(Tank)子品牌中大型非承载式越野SUV,燃油/轻混/插混 |
| model:great-wall:tank-700 | Tank 700 | 坦克700 | Tank 700 | — | class:cn:c | body:suv | pt:phev | current · 2024–present | 坦克(Tank)子品牌中大型非承载式越野SUV(3.0T V6 Hi4-T插混) |
| model:great-wall:v80 | Great Wall V80 | 长城V80 | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2012-2016 | 长城V80(2012-2016),长城MPV,2016年停产 |
| model:great-wall:vv5 | Wey VV5 | 魏牌VV5 | Wey VV5 | — | class:cn:a | body:suv | pt:ice | discontinued · 2017–2021 | 魏牌(Wey)子品牌紧凑型SUV(WEY品牌首代产品);2021年停产 |
| model:great-wall:vv6 | Wey VV6 | 魏牌VV6 | Wey VV6 | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2021 | 魏牌(Wey)子品牌紧凑型SUV(WEY品牌首代产品);2021年停产 |
| model:great-wall:vv7 | Wey VV7 | 魏牌VV7 | Wey VV7 | — | class:cn:b | body:suv | pt:ice | discontinued · 2017–2021 | 魏牌(Wey)子品牌中型SUV(WEY品牌首代产品,含VV7 GT轿跑版及新能源版);2021年停产 |
| model:great-wall:wingle | Great Wall Wingle | 长城风骏 | Great Wall Wingle | — | class:cn:mpv | body:pickup | pt:ice | current · 2010–present | 长城皮卡系列(风骏5/7现售,出口为主;风骏6已于2021年停产);GB/T无皮卡级别,近似取多用途口径 |
| model:great-wall:xiaolong | Haval Xiaolong | 哈弗枭龙 | Haval Xiaolong | — | class:cn:a | body:suv | pt:phev | current · 2023–present | 哈弗(Haval)子品牌紧凑型插混SUV;枭龙2025年中国停售(出口为主),枭龙MAX国内现售;海外称Jolion Max |

## Hafei

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:hafei:lubao | Hafei Lubao | 路宝 | — | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2003–2012 | 微型两厢车 |
| model:hafei:minyi | Hafei Minyi | 民意 | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2003–2015 | 微面,哈飞主力车型 |
| model:hafei:saibao | Hafei Saibao | 赛豹 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2005–2012 | 紧凑型轿车 |
| model:hafei:saima | Hafei Saima | 赛马 | — | — | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2002–2012 | 小型两厢车,源自三菱Dingo技术 |
| model:hafei:zhongyi-v5 | Hafei Zhongyi V5 | 中意V5 | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2014–2019 | 微面,中意系列改款车型 |

## Haima

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:haima:00a8fcfc9d | Prince | 王子 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2010-2013 | 海马王子(2010-2013),海马郑州A00级微型车,2013年停产 |
| model:haima:13a9382f64 | Fushida Hongda | 福仕达鸿达 | — | — | class:cn:a | body:van | pt:ice | discontinued · 2012-2015 | 福仕达鸿达(2012-2015),海马郑州微面,2015年停产 |
| model:haima:28896bc134 | Fushida Fukka | 福仕达福卡 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2011-2015 | 福仕达福卡(2011-2015),海马郑州微卡,2015年停产 |
| model:haima:2b3c169ea1 | Frog Prince | 青蛙王子 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2010-2013 | 青蛙王子M1-Q(2010-2013),海马王子同平台车型,2013年停产 |
| model:haima:5ea38480fa | Fushida Tengda | 福仕达腾达 | — | — | class:cn:a | body:van | pt:ice | discontinued · 2010-2015 | 福仕达腾达(2010-2015),海马郑州微面,2015年停产 |
| model:haima:675cca5bc3 | White Horse Prince | 白马王子 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2010-2013 | 白马王子M1-T(2010-2013),海马王子同平台车型,2013年停产 |
| model:haima:777bd240aa | Knight | 骑士 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2010-2013 | 海马骑士(2010-2013),海马首款SUV,2013年由S7接替 |
| model:haima:7x | Haima 7X | 海马7X | 海馬7X | — | class:cn:mpv | body:mpv | pt:ice | current · 2020-present | 海马7X(2020-),海马7座紧凑型MPV,含7X-E纯电版 |
| model:haima:8s | Haima 8S | 海马8S | 海馬8S | — | class:cn:a | body:suv | pt:ice | current · 2019-present | 海马8S(2019-),海马紧凑型SUV,后期主力 |
| model:haima:aishang | Haima Aishang | 海马爱尚 | 海馬愛尚 | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2012–2015 | 微型两厢车 |
| model:haima:c03a5dcb74 | Fushida Rongda | 福仕达荣达 | — | — | class:cn:a | body:van | pt:ice | discontinued · 2010-2015 | 福仕达荣达(2010-2015),海马郑州微面,2015年停产 |
| model:haima:ef5c030e7d | Huandong | 欢动 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2009-2011 | 欢动(2009-2011),海马紧凑型两厢车,2011年停产 |
| model:haima:family | Haima Family | 福美来 | 福美來 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2002–2017 | 紧凑型轿车,源自马自达323/Familia平台,海马基石车型,历经四代 |
| model:haima:family-f5 | Haima Family F5 | 福美来F5 | 福美來F5 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2018-2020 | 福美来F5(2018-2020),海马紧凑型轿车,福美来系列后续车型,2020年停产 |
| model:haima:family-f7 | Haima Family F7 | 福美来F7 | 福美來F7 | — | class:cn:mpv | body:mpv | pt:ice | current · 2017-present | 福美来F7(2017-),海马7座紧凑型MPV,2019年换代 |
| model:haima:haifuxing | Haima Haifuxing | 海福星 | 海福星 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2007–2012 | 紧凑型轿车,福美来的简化入门版本 |
| model:haima:haima-3 | 3 | 3 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2007-2010 | 海马3(2007-2010),海马紧凑型轿车(源自马自达323平台),2010年停产 |
| model:haima:haima-6p | Haima 6P | 海马6P | — | — | class:cn:a | body:suv | pt:phev | current · 2020-present | 海马6P(2020-),海马首款插混SUV |
| model:haima:haima-c2 | Haima C2 | 海马C2 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2013-2016 | 海马C2(2013-2016),海马小型SUV,2016年停产 |
| model:haima:haima-c3 | C3 | C3 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2013-2016 | 海马C3(2013-2016),海马微型车,2016年停产 |
| model:haima:haima-e1 | Haima E1 | 海马E1 | — | — | class:cn:a | body:hatchback | pt:bev | current · 2018-present | 海马E1(2018-),海马A00级纯电微型车 |
| model:haima:haima-e3 | Haima E3 | 海马E3 | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2019-2021 | 海马E3(2019-2021),海马纯电轿车,2021年停产 |
| model:haima:haima-e5 | Haima E5 | 海马E5 | — | — | class:cn:a | body:suv | pt:bev | discontinued · 2018-2021 | 海马E5(2018-2021),海马纯电SUV,2021年停产 |
| model:haima:haima-e7 | Family E7 | 福美来E7 | — | — | class:cn:a | body:mpv | pt:bev | discontinued · 2018-2021 | 福美来E7(2018-2021),海马纯电MPV,2021年停产 |
| model:haima:haima-ev | Prelude EV | 普力马EV | — | — | class:cn:a | body:mpv | pt:bev | discontinued · 2015-2018 | 普力马EV(2015-2018),普力马纯电动版,2018年停产 |
| model:haima:haima-ev-2 | Aishang EV | 海马爱尚EV | — | — | class:cn:a | body:hatchback | pt:bev | discontinued · 2017-2021 | 海马爱尚EV(2017-2021),海马纯电微型车,2021年停产 |
| model:haima:haima-s5-2 | S5 Youth | 海马S5青春版 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2017-2019 | 海马S5青春版(2017-2019),S5的年轻化版,2019年停产 |
| model:haima:injoy | Haima INJOY | 海马INJOY | — | — | class:cn:a | body:mpv | pt:bev | current · 2024-present | 海马INJOY(2024-),海马与智行盒子合作的纯电MPV(含INJOY L/U) |
| model:haima:m3 | Haima M3 | 海马M3 | 海馬M3 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2013-2019 | 海马M3(2013-2019),海马紧凑型轿车,2019年停产 |
| model:haima:m6 | Haima M6 | 海马M6 | 海馬M6 | — | class:cn:b | body:sedan | pt:ice | discontinued · 2015-2019 | 海马M6(2015-2019),海马中型轿车,2019年停产 |
| model:haima:m8 | Haima M8 | 海马M8 | 海馬M8 | — | class:cn:b | body:sedan | pt:ice | discontinued · 2014–2017 | 中型轿车,海马旗舰轿车 |
| model:haima:mpv | Family MPV | 福美来MPV | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2016-2019 | 福美来MPV(2016-2019),海马7座MPV,2019年停产 |
| model:haima:pulima | Haima Pulima | 普力马 | 普力馬 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2001–2015 | 紧凑型MPV,源自马自达Premacy平台,海马早期主力 |
| model:haima:qishi | Haima Qishi | 海马骑士 | 海馬騎士 | — | class:cn:a | body:suv | pt:ice | discontinued · 2010–2014 | 紧凑型SUV,海马首款SUV |
| model:haima:qiubeite | Haima Qiubeite | 丘比特 | 丘比特 | — | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2010–2015 | 小型两厢车 |
| model:haima:s5 | Haima S5 | 海马S5 | 海馬S5 | — | class:cn:a | body:suv | pt:ice | discontinued · 2014-2019 | 海马S5(2014-2019),海马紧凑型SUV,含S5青春版,2019年停产 |
| model:haima:s7 | Haima S7 | 海马S7 | 海馬S7 | — | class:cn:a | body:suv | pt:ice | discontinued · 2013-2019 | 海马S7(2013-2019),海马紧凑型SUV,骑士的继任车型,2019年停产 |
| model:haima:v70 | Haima V70 | 海马V70 | 海馬V70 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2016–2017 | 紧凑型MPV |

## Hanteng

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:hanteng:x5 | Hanteng X5 | X5 | X5 | — | class:cn:a | body:suv | pt:ice | discontinued · 2017–2019 | 汉腾X5紧凑型SUV(2017年上市);随品牌陷入停产约2019年退市 |
| model:hanteng:x7 | Hanteng X7 | X7 | X7 | — | class:cn:a | body:suv | pt:ice | discontinued · 2016–2019 | 汉腾X7紧凑型SUV(2016年上市),汉腾汽车首款车型;随品牌陷入停产约2019年退市 |

## Hawtai

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:hawtai:b11 | Hawtai B11 | 华泰B11 | — | — | class:cn:c | body:sedan | pt:ice | discontinued · 2010–2014 | 华泰B11(2010-2014),华泰首款轿车,已停产 |
| model:hawtai:boliger | Hawtai Boliger | 宝利格 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2011–2017 | 中型SUV,外观借鉴保时捷卡宴风格,华泰高端SUV |
| model:hawtai:dd5b1a39f4 | Terracan | 特拉卡 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2005–2012 | 特拉卡(Terracan,2005-2012),基于现代Terracan平台,华泰早期SUV,已停产 |
| model:hawtai:e80 | Lusheng E80 | 路盛E80 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2016–2019 | 路盛E80(2016-2019),紧凑型轿车,已停产 |
| model:hawtai:ev160b | Hawtai EV160B | 华泰EV160B | — | — | class:cn:a00 | body:city-car | pt:bev | discontinued · 2017–2019 | 华泰EV160B(2017-2019),纯电微型车,已停产 |
| model:hawtai:ev160r | Hawtai EV160R | 华泰EV160R | — | — | class:cn:a00 | body:city-car | pt:bev | discontinued · 2017–2019 | 华泰EV160R(2017-2019),纯电微型车,已停产 |
| model:hawtai:hawtai-2 | Santa Fe 2 | 圣达菲2 | — | — | class:cn:a0 | body:suv | pt:bev | discontinued · 2017–2019 | 圣达菲2(2017-2019),小型新能源SUV(XEV360),已停产 |
| model:hawtai:hawtai-5-2 | Santa Fe 5 | 圣达菲5 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2017–2019 | 圣达菲5(2017-2019),紧凑型SUV,已停产 |
| model:hawtai:hawtai-7-2 | Santa Fe 7 | 圣达菲7 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2018–2020 | 圣达菲7(2018-2020),紧凑型SUV,已停产 |
| model:hawtai:hawtai-s1 | Lusheng S1 | 路盛S1 | — | — | class:cn:a0 | body:suv | pt:bev | discontinued · 2017–2019 | 路盛S1(2017-2019),小型新能源SUV(iEV360),已停产 |
| model:hawtai:hawtai-s5 | Lusheng S5 | 路盛S5 | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2017–2019 | 路盛S5(2017-),紧凑型纯电轿车(iEV230/EV330),已停产 |
| model:hawtai:iev230 | Hawtai iEV230 | 华泰iEV230 | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2016–2018 | 华泰iEV230(2016-2018),路盛E70纯电版,已停产 |
| model:hawtai:lusheng-e70 | Hawtai Lusheng E70 | 路盛E70 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2013–2017 | 紧凑型轿车,华泰主力轿车 |
| model:hawtai:santa-fe | Hawtai Santa Fe | 圣达菲 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2006–2015 | 紧凑型SUV,基于现代Santa Fe一代平台技术,华泰主力车型 |
| model:hawtai:santa-fe-classic | Hawtai Santa Fe Classic | 圣达菲经典 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2015–2019 | 紧凑型SUV,圣达菲改款后更名销售 |
| model:hawtai:xev260 | Hawtai XEV260 | 华泰XEV260 | — | — | class:cn:a | body:suv | pt:bev | discontinued · 2016–2018 | 华泰XEV260(2016-2018),圣达菲纯电版SUV,已停产 |

## Honda

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:honda:1300 | Honda 1300 | 1300 | 1300 | 1300 | class:cn:a0 | body:sedan | pt:ice | discontinued · 1969–1973 | 本田首款直列四缸四门轿车;空冷发动机、前置后驱,代号ワンサーティ |
| model:honda:accord | Accord | 雅阁 | Accord | アコード | class:cn:b | body:sedan | pt:ice | current · 1976–present | 全球主力中型车;大陆广汽本田国产,另有混动/e:PHEV 版本 |
| model:honda:amaze | Amaze | Amaze | Amaze(未上市) | — | class:cn:a0 | body:sedan | pt:ice | current · 2013–present | 印度特供入门三厢车,与 Brio 同平台;日本/台湾无此车型 |
| model:honda:ascot | Ascot | Ascot | Ascot | アスコット | class:cn:b | body:sedan | pt:ice | discontinued · 1989–1997 | Accord 平台的日本专供三厢车;二代与 Rafaga 为姊妹车 |
| model:honda:avancier | Avancier | 冠道 | Avancier | — | class:cn:b | body:suv | pt:ice | current · 2016–present | 广汽本田中型SUV,与东风本田UR-V为姊妹车 |
| model:honda:ballade | Ballade | Ballade | Ballade | バラード | class:cn:a | body:sedan | pt:ice | discontinued · 1980–1986 | Civic 平台的日本市场三厢轿车;与英国 Rover 200 同源;南非市场名沿用至 2011–2025 |
| model:honda:beat | Beat | Beat | Beat | ビート | class:jp:kei | body:roadster | pt:ice | discontinued · 1991–1996 | 中置后驱 K-car 敞篷跑车,本田 K-car 运动化经典;与 NSX、S2000 同列官方 heritage 名车 |
| model:honda:br-v | BR-V | BR-V | — | — | class:eu:j | body:suv | pt:ice | current · 2016–present | BR-V(2016-),东南亚市场7座紧凑SUV,与Mobilio同平台 |
| model:honda:breeze | Breeze | 皓影 | Breeze(未上市) | — | class:eu:j | body:suv | pt:ice | current · 2019–present | 广汽本田 CR-V 姊妹车,中国特供;日本/台湾无此车型 |
| model:honda:city | City | 锋范(大陆已停) | City | シティ | class:cn:a0 | body:sedan | pt:ice | current · 1981–present | 东南亚/新兴市场主力小型车;另有 City Hatchback 两厢版;大陆曾国产称「锋范」 |
| model:honda:civic | Civic | 思域 | Civic(俗稱喜美) | シビック | class:cn:a | body:sedan | pt:ice | current · 1972–present | 本田最悠久车系;Type R 为其性能版;台湾俗称「喜美」 |
| model:honda:clarity | Clarity | Clarity | Clarity | クラリティ | class:cn:b | body:sedan | pt:fcev | discontinued · 2008–2014, 2016–2021 | 前身为 FCX Clarity(2007–2014)燃料电池车;2016 年换代提供 FCEV/PHEV/BEV 三种动力,北美/日本销售 |
| model:honda:concerto | Concerto | Concerto | Concerto | コンサート | class:cn:a | body:sedan | pt:ice | discontinued · 1988–1994 | 与英国 Rover 合作开发的紧凑车(Civic/Ballade 平台);英国 Longbridge 生产至 1994 年 |
| model:honda:cr-v | CR-V | CR-V | CR-V | CR-V(シーアールブイ) | class:eu:j | body:suv | pt:ice | current · 1995–present | 紧凑型 SUV 销量常青树;大陆姊妹车为广汽本田皓影 Breeze |
| model:honda:cr-x | CR-X | CR-X | CR-X | CR-X(シーアールエックス) | class:eu:s | body:coupe | pt:ice | discontinued · 1983–1991 | 经典轻量小跑;后继为 CR-X del Sol(1992–1997) |
| model:honda:cr-z | CR-Z | CR-Z | CR-Z | CR-Z(シーアールゼット) | class:eu:s | body:coupe | pt:hev | discontinued · 2010–2016 | CR-X 精神继承者,IMA 混动轿跑 |
| model:honda:crider | Crider | 凌派 | Crider(未上市) | — | class:cn:a | body:sedan | pt:ice | discontinued · 2013–2025 | 广汽本田中国特供紧凑轿车;2025 年停产 |
| model:honda:crosstour | Crosstour | 歌诗图 | Crosstour | クロスツアー | class:eu:j | body:crossover | pt:ice | discontinued · 2010–2015 | Accord 跨界掀背版;大陆广汽本田曾国产称「歌诗图」 |
| model:honda:e-np1-1 | e:NP1 e:NP 1 | e:NP1 极湃1 | — | — | class:cn:a | body:suv | pt:bev | current · 2022–present | e:NP1极湃1(2022-),广汽本田纯电SUV,与e:NS1为姊妹车 |
| model:honda:e-np2-2 | e:NP2 e:NP 2 | e:NP2 极湃2 | — | — | class:cn:a | body:suv | pt:bev | current · 2024–present | e:NP2极湃2(2024-),广汽本田纯电SUV |
| model:honda:e-ns1 | e:NS1 | e:NS1 | — | — | class:cn:a | body:suv | pt:bev | current · 2022–present | e:NS1(2022-),东风本田纯电SUV |
| model:honda:e-ns2 | Lieguang e:NS2 | 猎光e:NS2 | — | — | class:cn:a | body:suv | pt:bev | current · 2024–present | 猎光e:NS2(2024-),东风本田纯电SUV |
| model:honda:element | Element | Element | Element | エレメント | class:eu:j | body:suv | pt:ice | discontinued · 2002–2011 | 北美市场对开式车门紧凑 SUV |
| model:honda:elysion | Elysion | 艾力绅 | Elysion(未上市) | エリシオン | class:eu:m | body:minivan | pt:ice | current · 2004–present | 东风本田奥德赛姊妹车,现为中国特供;日本原版 2004–2013 |
| model:honda:envix | Envix | 享域 | Envix(未上市) | — | class:cn:a | body:sedan | pt:ice | discontinued · 2018–2025 | 东风本田凌派姊妹车,中国特供;2025 年停产 |
| model:honda:fit | Fit / Jazz | 飞度 | Fit | フィット | class:cn:a0 | body:hatchback | pt:ice | current · 2001–present | 欧洲/港澳称 Jazz;大陆广汽本田国产,有 e:HEV 混动版 |
| model:honda:freed | Freed | Freed | Freed(未上市) | フリード | class:eu:m | body:mpv | pt:ice | current · 2008–present | 日本市场小型 MPV,有 e:HEV 混动版 |
| model:honda:gienia | Gienia | 竞瑞 | Gienia | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2016–2022 | 竞瑞(2016-2022),哥瑞两厢版,中国特供,已停产 |
| model:honda:greiz | Greiz | 哥瑞 | Greiz | — | class:cn:a | body:sedan | pt:ice | discontinued · 2015–2022 | 哥瑞(2015-2022),东风本田中国特供紧凑轿车,锋范(City)姊妹车,已停产 |
| model:honda:honda-e | Honda e | 本田e | — | — | class:eu:a | body:hatchback | pt:bev | discontinued · 2020–2024 | Honda e(2020-2024),本田纯电城市车,日本/欧洲市场,2024年停产 |
| model:honda:honda-p7 | GAC Honda P7 | 广汽本田P7 | — | — | class:cn:b | body:suv | pt:bev | current · 2025–present | 广汽本田P7(2025-),本田烨平台纯电SUV |
| model:honda:honda-s7 | S7 | 东风本田S7 | — | — | class:cn:b | body:suv | pt:bev | current · 2025–present | 东风本田S7(2025-),本田烨平台纯电SUV |
| model:honda:hr-v | HR-V / Vezel | 缤智(广汽)/XR-V(东风) | HR-V | ヴェゼル | class:eu:j | body:crossover | pt:ice | current · 1998–2005, 2013–present | 日本名 Vezel;大陆姊妹名:广汽缤智、东风 XR-V;有 e:HEV |
| model:honda:insight | Insight | Insight(音赛特) | Insight | インサイト | class:cn:a0 | body:hatchback | pt:hev | discontinued · 1999–2006, 2009–2014 | 初代 IMA 混动先驱;2026 年起日本以纯电跨界身份复活(e:N2 贴牌) |
| model:honda:inspire | Inspire | 英仕派 | Inspire(未上市) | インスパイア | class:cn:b | body:sedan | pt:ice | current · 1989–2012, 2018–present | 东风本田雅阁姊妹车;日本初代 1989–2012,2018 年起在中国复兴 |
| model:honda:integra | Integra | Integra(型格为中国姊妹车) | Integra | インテグラ | class:cn:a | body:hatchback | pt:ice | discontinued · 1985–2006 | 经典运动车系,Integra Type R 闻名;2022 年以 Acura Integra 复兴;中国「型格」为思域姊妹车 |
| model:honda:jade | Jade | 杰德 | Jade(未上市) | ジェイド | class:eu:m | body:mpv | pt:ice | discontinued · 2013–2020 | 思域平台紧凑 MPV,主打中国/日本市场 |
| model:honda:legend | Legend | 里程(大陆进口) | Legend | レジェンド | class:cn:c | body:sedan | pt:ice | discontinued · 1985–2021 | 本田旗舰;北美以 Acura Legend/RL/RLX 销售;大陆曾进口称「里程」 |
| model:honda:life | Life | Life | Life | ライフ | class:jp:kei | body:hatchback | pt:ice | discontinued · 1971–1974, 1997–2014 | 初代(1971–1974)为 360cc 轻自动车;1997 年以 K-car 身份复活至 2014;中国版 LIFE(2020–2025)为 Fit 贴牌 |
| model:honda:logo | Logo | Logo | Logo | ロゴ | class:cn:a0 | body:hatchback | pt:ice | discontinued · 1996–2001 | City 后继的小型车,Fit 的直系前身 |
| model:honda:mobilio | Mobilio | Mobilio | Mobilio | モビリオ | class:eu:m | body:mpv | pt:ice | discontinued · 2001–2008, 2014–2024 | Fit 平台小型 MPV;日本 2001–2008,2014–2024 年在东南亚以三排 MPV 身份复兴 |
| model:honda:n-box | N-Box | N-BOX | N-BOX(未上市) | N-BOX(エヌボックス) | class:jp:kei | body:city-car | pt:ice | current · 2011–present | 日本轻自动车(K-car),日本最畅销车型,有 e:HEV 版 |
| model:honda:n-one | N-One | N-ONE | N-ONE(未上市) | N-ONE(エヌワン) | class:jp:kei | body:hatchback | pt:ice | current · 2012–present | 复古风格 K-car;2025 年新增纯电 N-One e: |
| model:honda:n-series | N-series (N360 / N600) | N360 / N600 | N360 / N600 | N360・N600 | class:jp:kei | body:hatchback | pt:ice | discontinued · 1967–1972 | 本田首款前置前驱小型车;N360 为 360cc 轻自动车,N600 为出口版;另有同平台 L700/L800 小型货车 |
| model:honda:n-wgn | N-WGN | N-WGN | N-WGN(未上市) | N-WGN(エヌダブリュージーエヌ) | class:jp:kei | body:hatchback | pt:ice | current · 2013–present | N 系列轻自动车的半高箱型版(与 N-BOX/N-ONE 同族),主打日本市场 |
| model:honda:nsx | NSX | NSX | NSX | NSX(エヌエスエックス) | class:eu:s | body:supercar | pt:ice | discontinued · 1990–2005, 2016–2022 | 本田旗舰超跑;二代为 V6+三电机混动;北美以 Acura NSX 销售 |
| model:honda:odyssey | Odyssey | 奥德赛 | Odyssey | オデッセイ | class:eu:m | body:minivan | pt:ice | current · 1994–present | 亚洲版为家用 MPV,北美版为大型宽体 MPV,两者不同 |
| model:honda:passport | Passport | Passport | Passport(未上市) | パスポート | class:eu:j | body:suv | pt:ice | current · 1993–2002, 2019–present | 初代为五十铃 Rodeo 贴牌;2019 年复活为 Pilot 短轴两排版 |
| model:honda:pilot | Pilot | Pilot | Pilot | パイロット | class:eu:j | body:suv | pt:ice | current · 2002–present | 北美市场三排中型 SUV |
| model:honda:prelude | Prelude | Prelude | Prelude | プレリュード | class:eu:s | body:coupe | pt:hev | current · 1978–2001, 2025–present | 经典轿跑 1978–2001 停产;2025 年第六代以 e:HEV 混动复活 |
| model:honda:rafaga | Rafaga | Rafaga | Rafaga | ラファーガ | class:cn:b | body:sedan | pt:ice | discontinued · 1993–1997 | Ascot 的运动化姊妹车,基于 Accord,搭载直列五缸发动机 |
| model:honda:ridgeline | Ridgeline | Ridgeline | Ridgeline(未上市) | リッジライン | class:us:pickup | body:pickup | pt:ice | current · 2004–present | 北美市场承载式车身皮卡,基于 Pilot/Passport |
| model:honda:s-mx | S-MX | S-MX | S-MX | S-MX(エスエムエックス) | class:eu:m | body:mpv | pt:ice | discontinued · 1996–2002 | 面向年轻家庭的紧凑 MPV,与初代 Stepwgn 同平台 |
| model:honda:s-series | S-series (S500 / S600 / S800) | S500 / S600 / S800 | S500 / S600 / S800 | S500・S600・S800 | class:eu:s | body:roadster | pt:ice | discontinued · 1963–1970 | 本田首款量产汽车系列(1963 年 S500 起,继以 S600、S800);双座前置后驱敞篷跑车,本田官方 heritage 收录 |
| model:honda:s2000 | S2000 | S2000 | S2000 | S2000 | class:eu:s | body:roadster | pt:ice | discontinued · 1999–2009 | 经典前置后驱敞篷跑车,红线转速高达 9000rpm |
| model:honda:s660 | S660 | S660 | S660(未上市) | S660 | class:jp:kei | body:roadster | pt:ice | discontinued · 2015–2022 | 日本 K-car 中置后驱敞篷跑车 |
| model:honda:spirior | Spirior | 思铂睿 | Spirior(未上市) | — | class:cn:b | body:sedan | pt:ice | discontinued · 2009–2018 | 东风本田雅阁运动版,中国特供;日本/台湾无此车型 |
| model:honda:stepwgn | Stepwgn | STEP WGN | STEP WGN | ステップワゴン | class:eu:m | body:mpv | pt:ice | current · 1996–present | 日规高顶家用 MPV;现款提供 e:HEV 混动 |
| model:honda:stream | Stream | 时韵(大陆进口) | Stream | ストリーム | class:eu:m | body:mpv | pt:ice | discontinued · 2000–2014 | Civic 平台紧凑型 MPV,主打日本/欧洲市场;大陆曾进口称「时韵」 |
| model:honda:today | Today | Today | Today | トゥデイ | class:jp:kei | body:hatchback | pt:ice | discontinued · 1985–1998 | 1980–1990 年代本田 K-car 主力,后续由 Life(二代)接替 |
| model:honda:ur-v | UR-V | UR-V | UR-V | — | class:cn:b | body:suv | pt:ice | current · 2017–present | 东风本田中型SUV,与广汽本田冠道为姊妹车 |
| model:honda:vamos | Vamos | Vamos | Vamos | バモス | class:jp:kei | body:van | pt:ice | discontinued · 1970–1973, 1999–2018 | 初代(1970–1973)为 360cc 双座越野车;二代(1999–2018)为 K-car 厢式车(与 Acty 同平台) |
| model:honda:vigor | Vigor | Vigor | Vigor | ビガー | class:cn:b | body:sedan | pt:ice | discontinued · 1981–1995 | Accord 平台的中级轿车,以直列五缸发动机为特色;后继为 Rafaga/Inspire |
| model:honda:wr-v | WR-V | WR-V | — | — | class:eu:j | body:suv | pt:ice | current · 2017–present | WR-V(2017-),东南亚/南美市场小型SUV,基于Jazz平台 |
| model:honda:zhixing | Integra | 型格 | Integra | — | class:cn:a | body:sedan | pt:ice | current · 2021–present | 广汽本田Integra,思域姊妹车,中国特供 |
| model:honda:zr-v | ZR-V | ZR-V | ZR-V | ZR-V(ジーアールブイ) | class:eu:j | body:crossover | pt:ice | current · 2022–present | 定位低于 CR-V 的紧凑跨界;北美/中国(东风本田)称 HR-V |

## Hongqi

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:hongqi:19857c6da5 | Flagship | 旗舰 | — | — | class:cn:c | body:sedan | pt:ice | discontinued · 1998-2006 | 红旗旗舰(1998-2006),红旗顶级轿车(基于林肯Town Car平台),2006年停产 |
| model:hongqi:1d8921f9c1 | Golden Sunflower Guoya | 金葵花国雅 | — | — | class:cn:a | body:sedan | pt:ice | current · 2024-present | 红旗金葵花国雅(2024-),金葵花品牌大型轿车 |
| model:hongqi:31159e2e32 | Century Star | 世纪星 | — | — | class:cn:d | body:sedan | pt:ice | discontinued · 2000-2008 | 红旗世纪星(2000-2008),红旗早期中高级轿车,2008年停产 |
| model:hongqi:4bf910ef6f | Golden Sunflower Guoyue | 金葵花国悦 | — | — | class:cn:a | body:mpv | pt:ice | current · 2024-present | 红旗金葵花国悦(2024-),金葵花品牌MPV |
| model:hongqi:71aac80b32 | Hongqi Golden Sunflower Guoli | 红旗金葵花国礼 | — | — | class:cn:a | body:sedan | pt:ice | current · 2024-present | 红旗金葵花国礼(2024-),红旗L5换代车型,金葵花品牌旗舰 |
| model:hongqi:938cfd29c9 | Hongqi Golden Sunflower Guoyao | 红旗金葵花国耀 | — | — | class:cn:a | body:suv | pt:ice | current · 2024-present | 红旗金葵花国耀(2024-),金葵花品牌大型SUV |
| model:hongqi:aae882d121 | New MingShi | 新明仕 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2006-2010 | 红旗新明仕(2006-2010),红旗明仕改款,2010年停产 |
| model:hongqi:b3582589f3 | Shengshi | 盛世 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2006-2008 | 红旗盛世(2006-2008),基于丰田皇冠Majesta平台,2008年停产 |
| model:hongqi:ca770 | Hongqi CA770 | 红旗CA770 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 1966-1998 | 红旗CA770(1966-1998),红旗经典礼宾车,中国汽车工业标志 |
| model:hongqi:e-hs3 | E-HS3 | 红旗E-HS3 | Hongqi E-HS3 | — | class:cn:a | body:suv | pt:bev | discontinued · 2019–2021 | 红旗首款纯电车型(紧凑型SUV);约2021年停产 |
| model:hongqi:e-hs9 | E-HS9 | 红旗E-HS9 | Hongqi E-HS9 | E-HS9 | class:cn:d | body:suv | pt:bev | current · 2020–present | 大型纯电SUV(6/7座);日本市场亦有导入 |
| model:hongqi:e-qm5 | E-QM5 | E-QM5 | — | — | class:cn:b | body:sedan | pt:bev | current · 2021-present | E-QM5(2021-),红旗纯电中型轿车(网约车/家用) |
| model:hongqi:eh7 | EH7 | 红旗EH7 | Hongqi EH7(未导入) | EH7 | class:cn:c | body:sedan | pt:bev | current · 2024–present | 红旗「天工」纯电平台首款轿车,2024年3月上市,中大型五座纯电轿车 |
| model:hongqi:ehs7 | EHS7 | 红旗EHS7 | Hongqi EHS7(未导入) | EHS7 | class:cn:c | body:suv | pt:bev | current · 2024–present | 红旗「天工」纯电平台中大型SUV,2024年上市,与EH7同代姊妹车 |
| model:hongqi:guoli | Guoli | 国礼 | Hongqi Guoli | — | class:cn:d | body:sedan | pt:ice | current · 2024–present | 金葵花系列礼宾级超豪华旗舰轿车(2024年发布);前身红旗L系列礼宾车 |
| model:hongqi:h5 | H5 | 红旗H5 | Hongqi H5 | H5 | class:cn:b | body:sedan | pt:ice | current · 2018–present | 中型轿车,2023年第二代换代;日本市场以H5等字母型号销售 |
| model:hongqi:h5-phev | Hongqi H5 PHEV | 红旗H5 PHEV | — | — | class:cn:a | body:sedan | pt:phev | current · 2024-present | 红旗H5 PHEV(2024-),红旗H5插电混动版 |
| model:hongqi:h6 | H6 | 红旗H6 | Hongqi H6 | H6 | class:cn:b | body:sedan | pt:ice | current · 2023–present | B+级运动轿车(轿跑造型) |
| model:hongqi:h7 | H7 | 红旗H7 | Hongqi H7 | H7 | class:cn:c | body:sedan | pt:ice | current · 2013-present | 红旗H7(2013-),红旗品牌复兴首款战略车型;2024年换代 |
| model:hongqi:h7-phev | Hongqi H7 PHEV | 红旗H7 PHEV | — | — | class:cn:a | body:sedan | pt:phev | current · 2024-present | 红旗H7 PHEV(2024-),红旗H7插电混动版 |
| model:hongqi:h9 | H9 | 红旗H9 | Hongqi H9 | H9 | class:cn:c | body:sedan | pt:ice | current · 2020–present | 中大型豪华轿车(双色车身),含H9+礼宾版;2023年起进入日本市场 |
| model:hongqi:h9-phev | Hongqi H9 PHEV | 红旗H9 PHEV | — | — | class:cn:c | body:sedan | pt:phev | current · 2024-present | 红旗H9 PHEV(2024-),红旗H9插电混动版 |
| model:hongqi:hongqi-05 | Tiangong 05 | 天工05 | — | — | class:cn:a | body:sedan | pt:ice | current · 2025-present | 天工05(2025-),红旗天工系列轿车 |
| model:hongqi:hongqi-06 | Tiangong 06 | 天工06 | — | — | class:cn:a | body:suv | pt:ice | current · 2025-present | 天工06(2025-),红旗天工系列SUV |
| model:hongqi:hongqi-07 | Tiangong 07 | 天工07 | — | — | class:cn:a | body:suv | pt:ice | current · 2025-present | 天工07(2025-),红旗天工系列SUV |
| model:hongqi:hongqi-08 | Tiangong 08 | 天工08 | — | — | class:cn:a | body:suv | pt:ice | current · 2025-present | 天工08(2025-),红旗天工系列SUV |
| model:hongqi:hongqi-l7 | Hongqi L7 | 红旗L7 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2014-2024 | 红旗L7(2014-2024),红旗L系列礼宾轿车,2024年由金葵花国礼接替 |
| model:hongqi:hongqi-l9 | Hongqi L9 | 红旗L9 | — | — | class:cn:d | body:sedan | pt:ice | discontinued · 2013-2024 | 红旗L9(2013-2024),红旗L系列顶级礼宾轿车,2024年由金葵花国礼接替 |
| model:hongqi:hq9 | HQ9 | 红旗HQ9 | Hongqi HQ9 | HQ9 | class:cn:mpv | body:mpv | pt:ice | current · 2022–present | 中大型MPV(7座,2.0T) |
| model:hongqi:hq9-phev | Hongqi HQ9 PHEV | 红旗HQ9 PHEV | — | — | class:cn:a | body:mpv | pt:phev | current · 2023-present | 红旗HQ9 PHEV(2023-),红旗HQ9 MPV插电混动版 |
| model:hongqi:hs3 | HS3 | 红旗HS3 | Hongqi HS3 | HS3 | class:cn:a | body:suv | pt:ice | current · 2023–present | 紧凑型SUV(红旗入门SUV) |
| model:hongqi:hs3-phev | Hongqi HS3 PHEV | 红旗HS3 PHEV | — | — | class:cn:a | body:suv | pt:phev | current · 2024-present | 红旗HS3 PHEV(2024-),红旗HS3插电混动版 |
| model:hongqi:hs5 | HS5 | 红旗HS5 | Hongqi HS5 | HS5 | class:cn:b | body:suv | pt:ice | current · 2019–present | 中型SUV,2023年第二代换代;2023年随红旗进入日本市场 |
| model:hongqi:hs6-phev | Hongqi HS6 PHEV | 红旗HS6 PHEV | — | — | class:cn:a | body:suv | pt:phev | current · 2024-present | 红旗HS6 PHEV(2024-),红旗HS6插电混动版 |
| model:hongqi:hs7 | HS7 | 红旗HS7 | Hongqi HS7 | HS7 | class:cn:c | body:suv | pt:ice | current · 2019–present | 中大型SUV,2023年换代 |
| model:hongqi:hs7-phev | Hongqi HS7 PHEV | 红旗HS7 PHEV | — | — | class:cn:c | body:suv | pt:phev | current · 2024-present | 红旗HS7 PHEV(2024-),红旗HS7插电混动版 |
| model:hongqi:l5 | L5 | 红旗L5 | Hongqi L5 | — | class:cn:d | body:sedan | pt:ice | discontinued · 2014–2021 | 礼宾级旗舰(限量,V12/V8),约2021年停产,由国礼等金葵花车型接替 |

## Huanghai

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:huanghai:05476672bd | Huanghai Big Bull | 黄海·大牛 | — | — | class:cn:b | body:sedan | pt:ice | discontinued · 2018–2021 | 黄海大牛(2018-2021),黄海SUV,已停产 |
| model:huanghai:1db6cbb4c7 | Aojun | 傲骏 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2005–2012 | 傲骏(2005-2012),黄海皮卡,已停产 |
| model:huanghai:2b9fc35ae2 | Daichaishen | 大柴神 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2011–2018 | 大柴神(2011-2018),黄海皮卡,已停产 |
| model:huanghai:37d47dafd3 | Huanghai Wild Bull | 黄海·野牛 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2020–2022 | 黄海野牛(2020-2022),黄海SUV,已停产 |
| model:huanghai:68b5840e21 | Huanghai Little Bull | 黄海·小牛 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2018–2021 | 黄海小牛(2018-2021),黄海SUV,已停产 |
| model:huanghai:cca12ee4b9 | Xiaochaishen | 小柴神 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2009–2014 | 小柴神(2009-2014),黄海皮卡,已停产 |
| model:huanghai:cuv | Aolong CUV | 翱龙CUV | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2008–2012 | 翱龙CUV(2008-2012),黄海早期SUV,已停产 |
| model:huanghai:huanghai-v3 | Qisheng V3 | 旗胜V3 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2011–2017 | 旗胜V3(2011-2017),黄海SUV,已停产 |
| model:huanghai:jiaolong | Huanghai Jiaolong | 蛟龙 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2010–2015 | 中型皮卡 |
| model:huanghai:n2 | Huanghai N2 | N2 | N2 | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2014–2019 | 中型皮卡 |
| model:huanghai:n3 | Huanghai N3 | N3 | N3 | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2017–2020 | 中型皮卡,黄海大尺寸皮卡 |
| model:huanghai:qisheng-f1 | Huanghai Qisheng F1 | 旗胜F1 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2008–2015 | 中型SUV,黄海首款SUV |
| model:huanghai:suv | Challenger SUV | 挑战者SUV | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2010–2016 | 挑战者SUV(2010-2016),黄海SUV,已停产 |

## Huasong

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:huasong:7 | Huasong 7 | 华颂7 | Huasong 7 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2015–2020 | 华晨集团中大型商务MPV,搭载宝马技术2.0T发动机,销量惨淡后停产 |

## Hummer

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:hummer:h1 | Hummer H1 | 悍马H1 | Hummer H1 | ハマーH1 | class:us:standard-suv | body:suv | pt:ice | discontinued · 1992–2006 | 军用悍马(HMMWV)民用版,2006年停产 |
| model:hummer:h2 | Hummer H2 | 悍马H2 | Hummer H2 | ハマーH2 | class:us:standard-suv | body:suv | pt:ice | discontinued · 2002–2009 | 基于雪佛兰Tahoe平台的民用全尺寸SUV,含皮卡版H2 SUT |
| model:hummer:h3 | Hummer H3 | 悍马H3 | Hummer H3 | ハマーH3 | class:us:standard-suv | body:suv | pt:ice | discontinued · 2005–2010 | 入门级中型SUV(与雪佛兰Colorado同平台),品牌2010年停产时的末代车型;纯电Hummer EV现归GMC品牌 |

## Husun

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:husun:c21 | Husun C21 | 北汽幻速C21 | 北汽幻速C21 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2018–2019 | 北汽幻速紧凑型轿车,2018年上市 |
| model:husun:c60 | Husun C60 | 北汽幻速C60 | 北汽幻速C60 | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2019 | 北汽幻速紧凑型SUV,2018年亮相但未大规模量产 |
| model:husun:h2 | Husun H2 | H2 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2015–2019 | 北汽幻速紧凑型MPV |
| model:husun:h2v | Husun H2V | H2V | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2016–2019 | 北汽幻速微面/面包车,H2的商用/货运版 |
| model:husun:h3 | Husun H3 | H3 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2015–2020 | 北汽幻速紧凑型MPV,七座布局 |
| model:husun:h6-ev | Husun H6-EV | 北汽幻速H6-EV | 北汽幻速H6-EV | — | class:cn:mpv | body:van | pt:bev | discontinued · 2018–2020 | 北汽幻速H6纯电动版 |
| model:husun:husun-h5 | Husun H5 | 北汽幻速H5 | 北汽幻速H5 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2018–2019 | 北汽幻速紧凑型MPV,2018年上市 |
| model:husun:husun-h6 | Husun H6 | 北汽幻速H6 | 北汽幻速H6 | — | class:cn:mpv | body:van | pt:ice | discontinued · 2017–2019 | 北汽幻速轻型客车/厢式货车,2017年上市 |
| model:husun:husun-s4 | Husun S4 | 北汽幻速S4 | 北汽幻速S4 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2018–2019 | 北汽幻速小型SUV,2018年上市 |
| model:husun:s2 | Husun S2 | S2 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2014–2019 | 北汽幻速小型SUV |
| model:husun:s3 | Husun S3 | S3 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2014–2020 | 北汽幻速小型SUV,七座布局,幻速品牌销量支柱车型 |
| model:husun:s5 | Husun S5 | S5 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2017–2019 | 北汽幻速紧凑型SUV |
| model:husun:s5-ev | Husun S5-EV | 北汽幻速S5-EV | 北汽幻速S5-EV | — | class:cn:a | body:suv | pt:bev | discontinued · 2018–2020 | 北汽幻速S5纯电动版 |
| model:husun:s6 | Husun S6 | S6 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2015–2019 | 北汽幻速紧凑型SUV |
| model:husun:s7 | Husun S7 | S7 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2017–2019 | 北汽幻速中型SUV,七座布局,幻速品牌旗舰车型 |

## Hyundai

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:hyundai:0c74ba5b5d | Matrix | 美佳 | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2001–2010 | 美佳(Matrix,2001–2010),现代紧凑型MPV,中国由北京现代生产,2010年停产 |
| model:hyundai:3d8bff1781 | Sonata NFC | 御翔 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2005–2009 | 御翔(NF,2005–2009),北京现代索纳塔(第五代NF),2009年停产 |
| model:hyundai:76de9823c7 | Veracruz | 维拉克斯 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2006–2012 | 维拉克斯(Veracruz,2006–2012),现代大型SUV,2012年停产 |
| model:hyundai:9be83f54d6 | Sonata Plug-in Hybrid | 索纳塔插电混动 | — | — | class:cn:a | body:sedan | pt:phev | discontinued · 2016–2019 | 索纳塔插电混动(2016–2019),北京现代索纳塔九PHEV,2019年停产 |
| model:hyundai:9c6e7db9ee | Elantra Plug-in Hybrid | 领动插电混动 | — | — | class:cn:a | body:sedan | pt:phev | discontinued · 2019–2021 | 领动插电混动(2019–2021),领动(Elantra)插混版,2021年停产 |
| model:hyundai:a9ebaaaf3e | Sonata Mingyu | 名驭 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2009–2013 | 名驭(2009–2013),北京现代索纳塔(EF)改款,2013年停产 |
| model:hyundai:accent | Accent | 瑞纳/悦纳 | Accent | アクセント | class:eu:b | body:sedan | pt:ice | current · 1994–present | 小型轿车,印度称Verna;中国曾为瑞纳(2010-2020)/悦纳;部分市场Solaris |
| model:hyundai:b0b63678e1 | Lafesta EV | 菲斯塔纯电动 | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2020–2022 | 菲斯塔纯电动(2020–2022),菲斯塔纯电版,2022年停产 |
| model:hyundai:b5086ce78e | County | 康恩迪 | — | — | class:cn:a | body:van | pt:ice | current · 1998–present | 康恩迪(County,1998–),现代中巴客车,中国由四川现代生产 |
| model:hyundai:b8a04d4344 | Sonata Lingxiang | 领翔 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2008–2011 | 领翔(NFC,2008–2011),北京现代索纳塔(NFC)改款,2011年停产 |
| model:hyundai:creta | Creta | ix25 | Creta | クレタ | class:eu:b | body:crossover | pt:ice | current · 2015–present | 小型SUV,全球名Creta,中国名ix25(北京现代,2014-2021) |
| model:hyundai:custo | Custo | 库斯途 | Custo | クスト | class:cn:mpv | body:mpv | pt:ice | current · 2021–present | 北京现代中大型MPV,2021年上市,主打家用七座 |
| model:hyundai:e062062012 | Kona EV | 昂希诺纯电动 | — | — | class:cn:a0 | body:suv | pt:bev | discontinued · 2019–2021 | 昂希诺纯电动(2019–2021),昂希诺(Kona)纯电版,2021年停产 |
| model:hyundai:e5df07cd04 | Santa Fe Classic | 胜达经典 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2013–2019 | 胜达经典(2013–2019),北京现代胜达老款同堂销售,2019年停产 |
| model:hyundai:ec22124d97 | Verna | 瑞纳 | — | — | class:cn:a0 | body:sedan | pt:ice | current · 2010–present | 瑞纳(Verna,2010–),北京现代小型轿车(Accent中国版),2020年换代 |
| model:hyundai:elantra | Elantra | 伊兰特 | Elantra | エラントラ | class:eu:c | body:sedan | pt:ice | current · 1990–present | 韩国名Avante;澳大利亚称i30 Sedan;中国历代国产名伊兰特/悦动/朗动/领动 |
| model:hyundai:elantra-n | Elantra N | 伊兰特N | Elantra N | エラントラ N | class:cn:a | body:sedan | pt:ice | current · 2022–present | 伊兰特高性能版,2022年起在中国市场销售,与普通伊兰特同车系 |
| model:hyundai:encino | ENCINO Kona | ENCINO 昂希诺 | — | — | class:cn:a0 | body:suv | pt:ice | current · 2018–present | 昂希诺(ENCINO,2018–),北京现代小型SUV(Kona中国版),含昂希诺纯电动版 |
| model:hyundai:equus | Equus | 雅科仕 | Equus(雅科仕) | エクウス | class:eu:f | body:sedan | pt:ice | discontinued · 1999–2016 | 现代旗舰豪华轿车,中国名「雅科仕」;后继为Genesis G90 |
| model:hyundai:festa | Lafesta | 菲斯塔 | Lafesta | ラフェスタ | class:cn:a | body:sedan | pt:ice | current · 2018–present | 北京现代紧凑运动轿车,2018年上市,英文名LA FESTA |
| model:hyundai:genesis-coupe | Genesis Coupe | 劳恩斯-酷派 | Genesis Coupe | ジェネシスクーペ | class:cn:b | body:coupe | pt:ice | discontinued · 2009–2015 | Genesis双门跑车中国进口名,基于劳恩斯平台,与劳恩斯轿车同代销售 |
| model:hyundai:genesis-sedan | Genesis | 捷恩斯 | Genesis(捷恩斯) | ジェネシス | class:eu:e | body:sedan | pt:ice | discontinued · 2007–2016 | 现代品牌旗下豪华轿车(捷恩斯);2016年起转型为独立品牌Genesis的G80;另有双门跑车Genesis Coupe(2008-2016) |
| model:hyundai:grand-santa-fe | Grand Santa Fe | 格越 | Grand Santa Fe | グランドサンタフェ | class:cn:c | body:suv | pt:ice | discontinued · 2013–2016 | Grand Santa Fe长轴版中国进口名,三排中大型SUV,与胜达(见model:hyundai:santa-fe)区分 |
| model:hyundai:grandeur | Grandeur | 雅尊 | Grandeur | グランジェ | class:eu:e | body:sedan | pt:ice | current · 1986–present | 现代旗舰轿车,现款GN7(2022);北美/中国曾以Azera(雅尊)销售 |
| model:hyundai:h-1 | H-1 | H-1辉翼 | — | — | class:cn:a | body:van | pt:ice | current · 2007–present | H-1辉翼(2007–),现代MPV(Starex/Grand Starex中国版),2021年换代 |
| model:hyundai:hb20 | Hyundai HB20 | 现代HB20 | — | — | class:cn:a | body:hatchback | pt:ice | current · 2012–present | HB20(2012–),现代巴西市场小型车,2022年第三代 |
| model:hyundai:hyundai-eo | EO Yiou | EO 羿欧 | — | — | class:cn:a | body:suv | pt:bev | current · 2025–present | EO羿欧(2025–),北京现代首款纯电SUV(E-GMP平台),2025年10月上市 |
| model:hyundai:hyundai-ev | Elantra EV | 伊兰特EV | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2017–2019 | 伊兰特EV(2017–2019),北京现代纯电版伊兰特,2019年停产 |
| model:hyundai:hyundai-rv | Accent RV | 悦纳RV | — | — | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2016–2019 | 悦纳RV(2016–2019),北京现代悦纳两厢版,2019年停产 |
| model:hyundai:i10 | i10 | i10 | i10 | i10(アイ・テン) | class:eu:a | body:hatchback | pt:ice | current · 2007–present | A级城市车,含长轴距Grand i10;欧洲2026年1月起停产,印度市场继续 |
| model:hyundai:i20 | i20 | i20 | i20 | i20(アイ・トゥエンティ) | class:eu:b | body:hatchback | pt:ice | current · 2008–present | B级掀背车,主打欧洲/印度市场;现款BC4(2026) |
| model:hyundai:i30 | i30 | i30 | i30 | i30(アイ・サーティ) | class:eu:c | body:hatchback | pt:ice | current · 2007–present | C级掀背车,主打欧洲市场,含旅行版i30 Wagon与Fastback |
| model:hyundai:i40 | Hyundai i40 | 现代i40 | — | — | class:cn:b | body:sedan | pt:ice | discontinued · 2011–2019 | i40(2011–2019),现代欧洲市场中型车(旅行/三厢),2019年停产 |
| model:hyundai:ioniq | IONIQ | IONIQ(艾尼氪) | — | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2016–2022 | IONIQ(2016–2022),现代油电混动/插混/纯电三合一车型,2022年停产 |
| model:hyundai:ioniq-5 | IONIQ 5 | IONIQ 5 | IONIQ 5 | アイオニック5 | class:eu:c | body:crossover | pt:bev | current · 2021–present | 纯电跨界SUV,基于E-GMP平台;2022年世界风云车 |
| model:hyundai:ioniq-5-n-5n | IONIQ 5 N( Ioniq 5N) | IONIQ 5 N(艾尼氪5N) | — | — | class:cn:a00 | body:suv | pt:bev | current · 2023–present | IONIQ 5 N(2023–),IONIQ 5的高性能N版 |
| model:hyundai:ioniq-6 | IONIQ 6 | IONIQ 6 | IONIQ 6 | アイオニック6 | class:eu:d | body:sedan | pt:bev | current · 2022–present | 纯电中型轿跑,基于E-GMP平台 |
| model:hyundai:ioniq-9 | IONIQ 9 | IONIQ 9 | IONIQ 9 | アイオニック9 | class:eu:j | body:suv | pt:bev | current · 2025–present | 三排纯电大型SUV,原规划名Ioniq 7,2025年上市时更名Ioniq 9 |
| model:hyundai:ioniq-v | IONIQ( Ioniq )V | IONIQ(艾尼氪)V | — | — | class:cn:a00 | body:sedan | pt:bev | current · 2026–present | IONIQ V(2026–),现代IONIQ品牌中国特供纯电轿车,2026年上市 |
| model:hyundai:ix20 | Hyundai ix20 | 现代ix20 | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2010–2019 | ix20(2010–2019),现代欧洲市场小型MPV,2019年停产 |
| model:hyundai:ix25 | ix25 | 北京现代ix25 | — | — | class:cn:a0 | body:suv | pt:ice | current · 2014–present | ix25(2014–),北京现代小型SUV(海外名Creta),2020年换代 |
| model:hyundai:ix35 | ix35 | 北京现代ix35 | — | — | class:cn:b | body:suv | pt:ice | current · 2010–present | ix35(2010–),北京现代紧凑型SUV(Tucson中国版),2018年改款 |
| model:hyundai:kona | Kona | Kona(昂希诺) | Kona | コナ | class:eu:b | body:crossover | pt:ice | current · 2017–present | 小型跨界SUV,现款SX2(2023);Kona Electric纯电版并入;中国版曾名昂希诺(已停) |
| model:hyundai:langdong | Elantra | 朗动 | Elantra | エラントラ | class:cn:a | body:sedan | pt:ice | discontinued · 2012–2017 | 伊兰特三代中国国产名,与悦动/领动同堂销售 |
| model:hyundai:lingdong | Elantra | 领动 | Elantra | エラントラ | class:cn:a | body:sedan | pt:ice | current · 2016–present | 伊兰特四代中国国产名,领动插电混动版(2019-)并入本条 |
| model:hyundai:mistra | Mistra | 名图 | Mistra | ミストラ | class:cn:b | body:sedan | pt:ice | current · 2013–present | 北京现代中型轿车,2013年上市,定位介于伊兰特与索纳塔之间 |
| model:hyundai:nexo | Nexo | Nexo | Nexo | ネッソ | class:eu:c | body:crossover | pt:fcev | current · 2018–present | 氢燃料电池SUV,替代ix35 FCEV |
| model:hyundai:palisade | Palisade | 帕里斯帝 | Palisade | パリセード | class:us:standard-suv | body:suv | pt:ice | current · 2018–present | 三排大型SUV,面向北美;中国以进口「帕里斯帝」销售 |
| model:hyundai:pony | Pony | 小马 | Pony | ポニー | class:eu:b | body:hatchback | pt:ice | discontinued · 1975–1990 | 现代首款自主开发车型,由乔治亚罗设计;出口市场名Excel(Excel于1985-2000) |
| model:hyundai:rohens | Genesis | 劳恩斯 | Genesis | ジェネシス | class:cn:c | body:sedan | pt:ice | discontinued · 2008–2015 | Genesis初代(BH)中国进口名,后更名捷恩斯(见model:hyundai:genesis-sedan) |
| model:hyundai:ruiyi | Accent | 瑞奕 | Accent | アクセント | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2014–2016 | 瑞纳两厢版,北京现代小型车,2014-2016年销售 |
| model:hyundai:santa-cruz | Santa Cruz | Santa Cruz | Santa Cruz | サンタクルーズ | class:us:pickup | body:pickup | pt:ice | current · 2021–present | 紧凑型皮卡,基于Tucson平台,北美市场 |
| model:hyundai:santa-fe | Santa Fe | 胜达 | Santa Fe | サンタフェ | class:eu:j | body:suv | pt:ice | current · 2000–present | 中型SUV,现款MX5(2023);中国称「胜达」 |
| model:hyundai:sonata | Sonata | 索纳塔 | Sonata | ソナタ | class:eu:d | body:sedan | pt:ice | current · 1985–present | 中型轿车,现款DN8;中国历代国产名索纳塔/御翔/领翔;另有索纳塔插电混动版(2018-,phev)并入本条 |
| model:hyundai:starex | Starex | 辉翼 | Starex | スタレックス | class:eu:m | body:minivan | pt:ice | discontinued · 1997–2021 | 全尺寸MPV,又称H-1/Grand Starex/iLoad;中国进口名「辉翼」;被Staria取代 |
| model:hyundai:staria | Staria | 星际 | Staria | スターリア | class:eu:m | body:minivan | pt:ice | current · 2021–present | 全尺寸MPV,取代Starex;中国官方名「星际」;含纯电版 |
| model:hyundai:tiburon | Tiburon | 酷派 | Coupe | ティブロン | class:eu:s | body:coupe | pt:ice | discontinued · 1996–2008 | 双门轿跑,中国称「酷派」;欧洲名Coupe,韩国名Tuscani;被Veloster接续 |
| model:hyundai:tucson | Tucson | 途胜 | Tucson | ツーソン | class:eu:j | body:suv | pt:ice | current · 2004–present | 紧凑型SUV,现款NX4;中国Tucson L(途胜L)并入;中国曾以ix35(2010-2023)销售 |
| model:hyundai:veloster | Veloster | 飞思 | Veloster | ベロスター | class:eu:c | body:hatchback | pt:ice | discontinued · 2011–2022 | 三门不对称掀背车(驾驶侧1门),中国名「飞思」 |
| model:hyundai:venue | Venue | Venue | Venue | ヴェニュー | class:eu:b | body:crossover | pt:ice | current · 2019–present | 小型跨界SUV,定位低于Kona,主要面向新兴市场 |
| model:hyundai:yixing | Elantra | 逸行 | Elantra | エラントラ | class:cn:a | body:wagon | pt:ice | discontinued · 2018–2020 | 逸行(2018–2020),北京现代紧凑旅行车,基于悦动平台,2020年停产 |
| model:hyundai:yuedong | Elantra | 悦动 | Elantra | エラントラ | class:cn:a | body:sedan | pt:ice | discontinued · 2008–2020 | 伊兰特二代(HD)中国国产名,曾与伊兰特/朗动同堂销售 |

## IM

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:im:l6 | IM L6 | 智己L6 | IM L6(未导入) | — | class:cn:b | body:sedan | pt:bev | current · 2024–present | 中型纯电轿车(2024年上市,2025年新一代) |
| model:im:l7 | IM L7 | 智己L7 | IM L7(未导入) | — | class:cn:c | body:sedan | pt:bev | current · 2022–present | 智己首款车型(2022年上市,上汽/阿里/张江高科合资),中大型纯电轿车 |
| model:im:ls6 | IM LS6 | 智己LS6 | IM LS6(未导入) | — | class:cn:b | body:suv | pt:bev | current · 2023–present | 中型纯电SUV(2023年上市,2025款在售) |
| model:im:ls7 | IM LS7 | 智己LS7 | IM LS7(未导入) | — | class:cn:c | body:suv | pt:bev | current · 2023–present | 中大型纯电SUV(2023年上市) |

## Infiniti

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:infiniti:esq | ESQ | ESQ | ESQ | インフィニティESQ | class:eu:b | body:suv | pt:ice | discontinued · 2014–2019 | 进口小型SUV,基于日产Juke打造,中国市场专属命名;2019年停产 |
| model:infiniti:ex | EX | EX | EX | インフィニティEX | class:eu:j | body:crossover | pt:ice | discontinued · 2007–2013 | 紧凑豪华跨界;与日产 Skyline Crossover 同源;后继 QX50 |
| model:infiniti:fx | FX | FX | FX | インフィニティFX | class:eu:j | body:crossover | pt:ice | discontinued · 2002–2013 | 轿跑风格豪华跨界 SUV 的开创者;后继 QX70 |
| model:infiniti:g-series | G-Series | G系列 | G系列 | インフィニティG | class:cn:b | body:sedan | pt:ice | discontinued · 1990–2013 | 含 G20/G25/G35/G37 及轿跑/敞篷版;日本市场为日产 Skyline;后继 Q50/Q60 |
| model:infiniti:jx | JX | JX | JX | インフィニティJX | class:eu:j | body:suv | pt:ice | discontinued · 2012–2013 | 英菲尼迪首款三排中大型SUV(即JX35),现QX60的前身;2013年改名QX60 |
| model:infiniti:m-series | M-Series | M系列 | M系列 | インフィニティM | class:cn:c | body:sedan | pt:ice | discontinued · 1989–2013 | 含 M30/M35/M37/M45/M56;旗舰 Q45(1989–2006)同源;后继 Q70 |
| model:infiniti:q30 | Infiniti Q30 | 英菲尼迪Q30 | — | — | class:eu:c | body:hatchback | pt:ice | discontinued · 2015–2019 | Q30(2015-2019),基于奔驰A级平台,与QX30同源,已停产 |
| model:infiniti:q50 | Q50 | Q50 | Q50 | インフィニティQ50 | class:cn:b | body:sedan | pt:ice | discontinued · 2013–2024 | 运动中型轿车;日本市场以日产 Skyline(V37)销售;大陆东风英菲尼迪曾国产加长版 Q50L |
| model:infiniti:q60 | Q60 | Q60 | Q60 | インフィニティQ60 | class:cn:b | body:coupe | pt:ice | discontinued · 2013–2022 | 双门轿跑;G 系列轿跑的继任者 |
| model:infiniti:q70 | Q70 | Q70 | Q70 | インフィニティQ70 | class:cn:c | body:sedan | pt:ice | discontinued · 2013–2019 | 中大型豪华轿车;前身为 M 系列;日本市场为日产 Fuga/Cima |
| model:infiniti:qx30 | QX30 | QX30 | QX30 | インフィニティQX30 | class:eu:j | body:suv | pt:ice | discontinued · 2017–2019 | 基于奔驰GLA平台(与Q30同源)的紧凑SUV,大陆曾以进口方式销售;已停产 |
| model:infiniti:qx4 | QX4 | QX4 | QX4 | インフィニティQX4 | class:eu:j | body:suv | pt:ice | discontinued · 1996–2002 | 英菲尼迪首款 SUV,基于日产 Pathfinder/Terrano |
| model:infiniti:qx50 | QX50 | QX50 | QX50 | インフィニティQX50 | class:eu:j | body:suv | pt:ice | discontinued · 2013–2025 | 紧凑豪华 SUV;前身为 EX(2007–2013);轿跑版为 QX55;2025 款为末代,2025 年停产 |
| model:infiniti:qx55 | QX55 | QX55 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2021–2025 | QX55(2021-2025),QX50轿跑版,2025年停产 |
| model:infiniti:qx60 | QX60 | QX60 | QX60 | インフィニティQX60 | class:eu:j | body:suv | pt:ice | current · 2014–present | 三排中大型豪华 SUV;前身为 JX(2012–2013);大陆东风英菲尼迪国产 QX60 |
| model:infiniti:qx65 | QX65 | QX65 | QX65 | インフィニティQX65 | class:eu:j | body:crossover | pt:ice | current · 2026–present | QX65(2026-),QX60的轿跑SUV版本 |
| model:infiniti:qx70 | QX70 | QX70 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2013–2017 | QX70(2013-2017),FX更名后的轿跑风格SUV,已停产 |
| model:infiniti:qx80 | QX80 | QX80 | QX80 | インフィニティQX80 | class:us:standard-suv | body:suv | pt:ice | current · 2014–present | 全尺寸豪华 SUV;前身为 QX56(2004–2013);与日产 Patrol/Armada 同平台 |

## Isuzu

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:isuzu:117-coupe | 117 Coupe | — | — | 117クーペ | class:eu:s | body:coupe | pt:ice | discontinued · 1968-1981 | 经典GT轿跑(Giorgetto Giugiaro设计);1981年由Piazza接替 |
| model:isuzu:203c3b61be | Isuzu Rodeo | 五十铃竞技者 | 五十鈴競技者 | いすゞ ロデオ | class:us:standard-suv | body:suv | pt:ice | discontinued · 1999–2005 | 庆铃五十铃国产SUV,原型为Isuzu Rodeo(北美)/MU(日本);非承载式,含柴油版 |
| model:isuzu:805d752b28 | Isuzu Yifang | 五十铃翼放 | 五十鈴翼放 | いすゞ イーファン | class:jp:normal | body:pickup | pt:ice | current · 2020–present | 江西五十铃生产的轻卡,基于Isuzu ELF平台,2020年上市 |
| model:isuzu:aska | Aska | — | — | アスカ | class:eu:d | body:sedan | pt:ice | discontinued · 1983-2002 | 中型轿车;先后基于GM J-car/斯巴鲁Legacy/本田Accord平台;2002年停产 |
| model:isuzu:d-max | D-MAX | D-MAX | D-MAX | D-MAX(ディーマックス) | class:us:pickup | body:pickup | pt:ice | current · 2002-present | 中型皮卡,全球销售;大陆由江西五十铃生产 |
| model:isuzu:elf | Elf | — | — | エルフ | class:jp:normal | body:van | pt:ice | current · 1959-present | 轻型卡车(平头轻卡);现行款为马自达Titan贴牌(2017起) |
| model:isuzu:gemini | Gemini | — | — | ジェミニ | class:eu:c | body:sedan | pt:ice | discontinued · 1974-2000 | 紧凑轿车;澳洲称Holden Gemini;日本Piazza/北美Impulse二代与其同平台 |
| model:isuzu:impulse | Impulse | — | — | ピアッツァ | class:eu:s | body:coupe | pt:ice | discontinued · 1981-1993 | 运动轿跑(liftback);日本名Piazza(ピアッツァ),北美称Impulse |
| model:isuzu:isuzu-ev | Isuzu Ruimai EV | 瑞迈EV | 瑞邁EV | リーマックスEV | class:us:pickup | body:pickup | pt:bev | current · 2020–present | 江西五十铃瑞迈纯电动版,纯电皮卡 |
| model:isuzu:isuzu-ev-2 | Isuzu Yifang EV | 五十铃翼放EV | 五十鈴翼放EV | いすゞ イーファンEV | class:jp:normal | body:pickup | pt:bev | current · 2021–present | 江西五十铃翼放纯电动轻卡 |
| model:isuzu:mu-x | MU-X | 牧游侠(MU-X) | MU-X | MU-X(エムユーエックス) | class:us:standard-suv | body:suv | pt:ice | current · 2013-present | 基于D-MAX的非承载式SUV;大陆江西五十铃名「牧游侠」 |
| model:isuzu:re-max | Isuzu RE-MAX | 五十铃瑞迈 | 五十鈴瑞邁 | いすゞ リーマックス | class:us:pickup | body:pickup | pt:ice | current · 2015–present | 江西五十铃生产的皮卡,基于D-MAX平台,定位低于D-MAX;含加长版瑞迈S |
| model:isuzu:t17 | T17 | 庆铃T17 | T17 | T17 | class:us:pickup | body:pickup | pt:ice | current · 2017–present | 庆铃五十铃生产的皮卡(基于五十铃TF系列技术),2017年上市,2023年仍推出新款 |
| model:isuzu:t28 | Qingling Isuzu T28 | 庆铃T28 | 慶鈴T28 | ケイレイ T28 | class:us:pickup | body:pickup | pt:ice | current · 2020–present | 庆铃五十铃生产的皮卡,2020年上市,搭载五十铃4K系列柴油发动机 |
| model:isuzu:t30 | Qingling Isuzu T30 | 庆铃五十铃T30 | 慶鈴五十鈴T30 | ケイレイ T30 | class:us:pickup | body:pickup | pt:ice | current · 2023–present | 庆铃五十铃生产的全新皮卡,2023年上市,搭载五十铃3.0T柴油发动机 |
| model:isuzu:taga | TAGA | 达咖(TAGA) | TAGA | TAGA | class:us:pickup | body:pickup | pt:ice | current · 2017–present | 江西五十铃生产的皮卡,2017年上市,与D-MAX同平台;2021年推出改款TAGA H |
| model:isuzu:trooper | Trooper | 竞技者(庆铃) | Trooper | ビッグホーン | class:us:standard-suv | body:suv | pt:ice | discontinued · 1981-2002 | 非承载式大型SUV;日本名Bighorn(ビッグホーン);大陆重庆庆铃曾组装「竞技者」 |

## Iveco

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:iveco:baodi | Iveco Power Daily (Baodi) | 褒迪 | Baodi | — | class:cn:mpv | body:van | pt:ice | discontinued · 2012–2020 | 南京依维柯褒迪轻客,得意平台衍生车型,2012年上市后约2020年停产 |
| model:iveco:deyi | Iveco Daily (Deyi) | 得意 | Deyi | — | class:cn:mpv | body:van | pt:ice | current · 2000–present | 南京依维柯得意轻客(厢式/客车),经典Daily系列国产版,2000年上市 |
| model:iveco:ousheng | Iveco Daily (Ousheng) | 欧胜 | Ousheng | — | class:cn:mpv | body:van | pt:ice | current · 2017–present | 南京依维柯欧胜轻客(厢式/客车),新一代Daily系列国产版,2017年上市 |

## JAC

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:jac:a5-plus | JAC A5 PLUS | 江淮A5 PLUS | — | — | class:cn:b | body:sedan | pt:ice | current · 2023-present | 江淮A5 PLUS(2023-),江淮紧凑型轿车 |
| model:jac:d2f3702a23 | Aipao | 爱跑 | — | — | class:cn:a | body:sedan | pt:bev | current · 2022-present | 思皓爱跑(2022-),江汽集团纯电轿车(思皓品牌) |
| model:jac:ed7250e7b2 | Yiwei Flower Fairy | 钇为花仙子 | — | — | class:cn:a | body:hatchback | pt:bev | current · 2024-present | 钇为花仙子(2024-),江淮钇为子品牌纯电微型车(原思皓E10X更名) |
| model:jac:heyue | JAC Heyue | 和悦 | 和悅 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2009–2015 | 紧凑型轿车,含和悦A30;与和悦RS(后更名瑞风M2)同系列 |
| model:jac:iev6e | JAC iEV6E | iEV6E | iEV6E | — | class:cn:a00 | body:hatchback | pt:bev | discontinued · 2017-2021 | iEV6E(2017-2021),江淮纯电微型车,iEV系列主力车型,2021年停产 |
| model:jac:iev7s | JAC iEV7S | iEV7S | iEV7S | — | class:cn:a0 | body:suv | pt:bev | discontinued · 2017-2020 | iEV7S(2017-2020),江淮纯电小型SUV,取代iEV6S,2020年停产 |
| model:jac:jac-3 | Yiwei 3 | 钇为3 | — | — | class:cn:a | body:hatchback | pt:bev | current · 2023-present | 钇为3(2023-),江淮钇为子品牌纯电小型车 |
| model:jac:jac-e3 | Refine E3 | 瑞风E3 | — | — | class:cn:a | body:van | pt:bev | current · 2022-present | 瑞风E3(2022-),瑞风M3的纯电版 |
| model:jac:jac-e4 | Refine E4 | 瑞风E4 | — | — | class:cn:a | body:mpv | pt:bev | current · 2023-present | 瑞风E4(2023-),瑞风M4的纯电版 |
| model:jac:jac-l5 | Refine L5 | 瑞风L5 | — | — | class:cn:a | body:mpv | pt:ice | current · 2022-present | 瑞风L5(2022-),瑞风M5的更名车型 |
| model:jac:jiayue-a5 | JAC Jiayue A5 | 嘉悦A5 | 嘉悅A5 | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2019–2022 | 紧凑型掀背轿车,嘉悦系列首款轿车,后过渡至思皓A5品牌 |
| model:jac:jiayue-x4 | JAC Jiayue X4 | 嘉悦X4 | 嘉悅X4 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2020-2022 | 嘉悦X4(2020-2022),江淮乘用车3.0时代小型SUV,2022年停产 |
| model:jac:jiayue-x7 | JAC Jiayue X7 | 嘉悦X7 | 嘉悅X7 | — | class:cn:b | body:suv | pt:ice | discontinued · 2019-2021 | 嘉悦X7(2019-2021),江淮中型SUV,与思皓X7同源,2021年停产 |
| model:jac:l6-max | Refine L6 MAX | 瑞风L6 MAX | — | — | class:cn:a | body:mpv | pt:ice | current · 2021-present | 瑞风L6 MAX(2021-),江淮大型商务MPV |
| model:jac:m3-phev | Refine M3 PHEV | 瑞风M3 PHEV | — | — | class:cn:b | body:mpv | pt:phev | current · 2023-present | 瑞风M3 PHEV(2023-),瑞风M3插电混动版 |
| model:jac:qx-phev | JAC QX PHEV | 江淮QX PHEV | — | — | class:cn:a | body:suv | pt:phev | current · 2024-present | 江淮QX PHEV(2024-),江淮X8系列的插电混动版 |
| model:jac:refine-a60 | JAC Refine A60 | 瑞风A60 | 瑞風A60 | — | class:cn:c | body:sedan | pt:ice | discontinued · 2015-2019 | 瑞风A60(2015-2019),江淮旗舰轿车,销量低迷提前停产 |
| model:jac:refine-m2 | JAC Refine M2 | 瑞风M2 | 瑞風M2 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2014-2019 | 瑞风M2(2014-2019),紧凑型MPV,原为江淮和悦RS(2009年发布),2014年更名瑞风M2,2019年停产 |
| model:jac:refine-m3 | JAC Refine M3 | 瑞风M3 | 瑞風M3 | — | class:cn:mpv | body:mpv | pt:ice | current · 2015-present | 瑞风M3(2015-),江淮紧凑型商务MPV,瑞风品牌主力车型 |
| model:jac:refine-m4 | JAC Refine M4 | 瑞风M4 | 瑞風M4 | — | class:cn:mpv | body:mpv | pt:ice | current · 2016-present | 瑞风M4(2016-),江淮中型商务MPV |
| model:jac:refine-m5 | JAC Refine M5 | 瑞风M5 | 瑞風M5 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2012-2022 | 瑞风M5(2012-2022),中大型MPV,承继初代瑞风(2002),2022年更名瑞风L5 |
| model:jac:refine-r3 | JAC Refine R3 | 瑞风R3 | 瑞風R3 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2018-2019 | 瑞风R3(2018-2019),7座家用MPV,2018年上市后不久即停产 |
| model:jac:refine-s2 | JAC Refine S2 | 瑞风S2 | 瑞風S2 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2015-2019 | 瑞风S2(2015-2019),小型SUV,含瑞风S2mini版(2017年起),2019年停产 |
| model:jac:refine-s3 | JAC Refine S3 | 瑞风S3 | 瑞風S3 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2014–2020 | 江淮瑞风S3小型SUV,曾长期位居自主SUV销量前列 |
| model:jac:refine-s4 | JAC Refine S4 | 瑞风S4 | 瑞風S4 | — | class:cn:a | body:suv | pt:ice | discontinued · 2018-2021 | 瑞风S4(2018-2021),江淮紧凑型SUV,2021年停产 |
| model:jac:refine-s5 | JAC Refine S5 | 瑞风S5 | 瑞風S5 | — | class:cn:a | body:suv | pt:ice | discontinued · 2013-2018 | 瑞风S5(2013-2018),江淮紧凑型SUV,2018年停产 |
| model:jac:refine-s7 | JAC Refine S7 | 瑞风S7 | 瑞風S7 | — | class:cn:b | body:suv | pt:ice | discontinued · 2017-2020 | 瑞风S7(2017-2020),江淮中型SUV,2020年停产 |
| model:jac:rf8 | Refine RF8 | 瑞风RF8 | — | — | class:cn:a | body:mpv | pt:ice | current · 2024-present | 瑞风RF8(2024-),江淮高端MPV |
| model:jac:rf8-phev | Refine RF8 PHEV | 瑞风RF8 PHEV | — | — | class:cn:a | body:mpv | pt:phev | current · 2024-present | 瑞风RF8 PHEV(2024-),瑞风RF8插电混动版 |
| model:jac:ruiying | JAC Rein | 瑞鹰 | 瑞鷹 | — | class:cn:a | body:suv | pt:ice | discontinued · 2007–2016 | 紧凑型SUV,江淮首款SUV |
| model:jac:sunray | JAC Sunray | 星锐 | 星銳 | — | class:cn:mpv | body:van | pt:ice | current · 2010-present | 星锐(Sunray,2010-),江淮轻客(欧系Van),商用车主力 |
| model:jac:t6 | JAC T6 | T6 | T6 | — | class:cn:mpv | body:pickup | pt:ice | current · 2015–present | 中型皮卡,2023款在售;商用皮卡4R3/K5并入本条 |
| model:jac:tongyue | JAC Tongyue | 同悦 | 同悅 | — | class:cn:a0 | body:sedan | pt:ice | discontinued · 2008–2015 | 小型轿车,江淮乘用车早期主力,含同悦RS两厢版 |
| model:jac:x8-e | JAC X8 E-Family | 江淮X8 E家 | — | — | class:cn:a | body:suv | pt:phev | current · 2024-present | 江淮X8 E家(2024-),江淮X8系列的插混SUV |
| model:jac:x8-plus | JAC X8 PLUS | 江淮X8 PLUS | — | — | class:cn:a | body:suv | pt:ice | current · 2024-present | 江淮X8 PLUS(2024-),江淮X8系列换代SUV |
| model:jac:yueyue | JAC Yueyue | 悦悦 | 悅悅 | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2011–2014 | 微型两厢车,江淮A00级小车 |

## Jaguar

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:jaguar:e-pace | Jaguar E-Pace | 捷豹E-PACE | 捷豹E-Pace | ジャガーEペース | class:eu:j | body:suv | pt:ice | discontinued · 2017–2024 | 紧凑型SUV,由麦格纳斯太尔代工,2024年12月停产 |
| model:jaguar:e-type | Jaguar E-Type | 捷豹E型 | 捷豹E-Type | ジャガーEタイプ | class:eu:s | body:roadster | pt:ice | discontinued · 1961–1974 | 传奇跑车,被誉为史上最美汽车之一,含硬顶与敞篷版(注:部分资料记为1961–1975) |
| model:jaguar:f-pace | Jaguar F-Pace | 捷豹F-PACE | 捷豹F-Pace | ジャガーFペース | class:eu:j | body:suv | pt:ice | discontinued · 2016–2025 | 品牌首款SUV,2025年12月停产,是捷豹最后一款燃油车 |
| model:jaguar:f-type | Jaguar F-Type | 捷豹F型 | 捷豹F-Type | ジャガーFタイプ | class:eu:s | body:sports | pt:ice | discontinued · 2013–2024 | 双座跑车,被视为E-Type的精神续作,含硬顶与敞篷版,2024年停产 |
| model:jaguar:i-pace | Jaguar I-Pace | 捷豹I-PACE | 捷豹I-Pace | ジャガーIペース | class:eu:j | body:suv | pt:bev | discontinued · 2018–2024 | 品牌首款纯电动SUV,2024年12月停产 |
| model:jaguar:mark-2 | Jaguar Mark 2 | 捷豹Mark 2 | 捷豹Mark 2 | ジャガー・マーク2 | class:eu:d | body:sedan | pt:ice | discontinued · 1959–1967 | 经典中型轿车,1960年代英国警车与影视常客 |
| model:jaguar:s-type | Jaguar S-Type | 捷豹S型 | 捷豹S-Type | ジャガーSタイプ | class:eu:e | body:sedan | pt:ice | discontinued · 1999–2008 | 中大型行政轿车,被XF取代;名称源自1963–1968年的经典S-Type(另作词条见历史款) |
| model:jaguar:x-type | Jaguar X-Type | 捷豹X型 | 捷豹X-Type | ジャガーXタイプ | class:eu:d | body:sedan | pt:ice | discontinued · 2001–2009 | 福特时代基于蒙迪欧平台的紧凑型轿车,2009年停产 |
| model:jaguar:xe | Jaguar XE | 捷豹XE | 捷豹XE | ジャガーXE | class:eu:d | body:sedan | pt:ice | discontinued · 2015–2024 | 紧凑型行政轿车,采用全铝车身架构,2024年年中停产 |
| model:jaguar:xel | Jaguar XEL | 捷豹XEL | 捷豹XEL | ジャガーXEL | class:eu:d | body:sedan | pt:ice | current · 2017–present | 奇瑞捷豹路虎国产中型轿车(2017年12月上市),XE加长轴距版,中国市场专属 |
| model:jaguar:xf | Jaguar XF | 捷豹XF | 捷豹XF | ジャガーXF | class:eu:e | body:sedan | pt:ice | discontinued · 2008–2024 | 中大型行政轿车,2008年取代S-Type;两代(X250 2007–2015、X260 2015–2024),2024年停产 |
| model:jaguar:xfl | Jaguar XFL | 捷豹XFL | 捷豹XFL | ジャガーXFL | class:eu:e | body:sedan | pt:ice | current · 2016–present | 奇瑞捷豹路虎国产中大型轿车(2016年8月上市),XF加长轴距版,中国市场专属 |
| model:jaguar:xj | Jaguar XJ | 捷豹XJ | 捷豹XJ | ジャガーXJ | class:eu:f | body:sedan | pt:ice | discontinued · 1968–2019 | 旗舰豪华轿车,1968年起历经多代(Series 1-3、XJ40、X300/X308、X350、X351),2019年停产 |
| model:jaguar:xj220 | Jaguar XJ220 | 捷豹XJ220 | 捷豹XJ220 | ジャガーXJ220 | class:eu:s | body:supercar | pt:ice | discontinued · 1992–1994 | 中置引擎超级跑车,1992年时世界最快量产车,限量约281台 |
| model:jaguar:xjs | Jaguar XJ-S | 捷豹XJ-S | 捷豹XJS | ジャガーXJS | class:eu:s | body:coupe | pt:ice | discontinued · 1975–1996 | XJ系列衍生的大型GT轿跑,1996年停产 |
| model:jaguar:xk | Jaguar XK | 捷豹XK | 捷豹XK | ジャガーXK | class:eu:s | body:coupe | pt:ice | discontinued · 2006–2014 | 豪华GT跑车(X150),取代XK8,2014年停产 |
| model:jaguar:xk8 | Jaguar XK8 | 捷豹XK8 | 捷豹XK8 | ジャガーXK8 | class:eu:s | body:coupe | pt:ice | discontinued · 1997–2006 | XK8/XKR(X100),取代XJS,后被XK取代 |

## Jeep

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:jeep:avenger | Avenger | Avenger | Avenger | アベンジャー | class:eu:j | body:crossover | pt:bev | current · 2023–present | 欧洲市场纯电小型SUV |
| model:jeep:cherokee | Cherokee | 切诺基/自由光 | Cherokee | チェロキー | class:eu:j | body:suv | pt:ice | discontinued · 1974–2023 | 2014年换代,中国版称「自由光」(广汽菲克);2023年停产 |
| model:jeep:commander | Commander | Commander | Commander | コマンダー | class:us:standard-suv | body:suv | pt:ice | discontinued · 2006–2010 | 三排座SUV,基于Grand Cherokee |
| model:jeep:compass | Compass | 指南者 | Compass | コンパス | class:eu:j | body:crossover | pt:ice | current · 2007–present | 中国版「指南者」(广汽菲克,2022年停产进口续售) |
| model:jeep:gladiator | Gladiator | 角斗士 | Gladiator | グラディエーター | class:us:pickup | body:pickup | pt:ice | current · 2020–present | 基于Wrangler的皮卡;历史名号1963–1971 |
| model:jeep:grand-cherokee | Grand Cherokee | 大切诺基 | Grand Cherokee | グランドチェロキー | class:us:standard-suv | body:suv | pt:ice | current · 1992–present | 中国进口「大切诺基」;有长轴Grand Cherokee L |
| model:jeep:grand-commander | Grand Commander | 大指挥官 | Grand Commander | — | class:cn:c | body:suv | pt:ice | current · 2018–present | 广汽菲克Jeep国产中大型SUV(2018年上市,官方英文名Commander,区别于2006-2010款Commander),三排七座;五座版「指挥官」(2018-2020)并入本词条 |
| model:jeep:grand-wagoneer | Grand Wagoneer | Grand Wagoneer | Grand Wagoneer | グランドワゴニア | class:us:standard-suv | body:suv | pt:ice | current · 2022–present | 历史名号1963–1991;2021年复活为旗舰豪华SUV |
| model:jeep:liberty | Liberty | Liberty | Liberty | リバティ | class:eu:j | body:suv | pt:ice | discontinued · 2002–2012 | 欧洲版称Cherokee(KJ/KK) |
| model:jeep:patriot | Patriot | 自由客/Patriot | Patriot | パトリオット | class:eu:j | body:crossover | pt:ice | discontinued · 2007–2017 | 与Compass同平台的入门SUV;中国市场进口名「自由客」(2011-2016) |
| model:jeep:recon | Recon | Recon(媒体译名侦察兵) | Recon | レコン | class:cn:b | body:suv | pt:bev | current · 2025–present | 纯电硬派越野SUV(STLA Large平台,可拆卸车门),2025年起量产交付;大陆无官方中文名 |
| model:jeep:renegade | Renegade | 自由侠 | Renegade | レネゲード | class:us:small-suv | body:crossover | pt:ice | discontinued · 2014–2024 | 中国版「自由侠」(广汽菲克);欧洲2024年停产 |
| model:jeep:wagoneer | Wagoneer | Wagoneer | Wagoneer | ワゴニア | class:us:standard-suv | body:suv | pt:ice | current · 2022–present | 与Grand Wagoneer同代复活(2021款) |
| model:jeep:wagoneer-s | Wagoneer S | Wagoneer S | Wagoneer S | ワゴニアS | class:cn:c | body:suv | pt:bev | current · 2024–present | Jeep首款全球纯电车型,豪华纯电SUV(STLA Large平台,双电机约600马力),2024年5月发布、2025年起交付 |
| model:jeep:wrangler | Wrangler | 牧马人 | Wrangler | ラングラー | class:us:standard-suv | body:suv | pt:ice | current · 1986–present | 传承自CJ/威利斯MB(1941);中国进口「牧马人」 |

## Jetta

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:jetta:va3 | Jetta VA3 | 捷达VA3 | Jetta VA3 | — | class:cn:a | body:sedan | pt:ice | current · 2019–present | 一汽-大众捷达品牌紧凑型轿车,源自大众PQ25平台,原捷达车型的正统延续;2019年上市 |
| model:jetta:vs5 | Jetta VS5 | 捷达VS5 | Jetta VS5 | — | class:cn:a | body:suv | pt:ice | current · 2019–present | 一汽-大众捷达品牌首款SUV,紧凑型,基于大众MQB平台;2019年上市 |
| model:jetta:vs7 | Jetta VS7 | 捷达VS7 | Jetta VS7 | — | class:cn:b | body:suv | pt:ice | current · 2020–present | 一汽-大众捷达品牌中型SUV,基于大众MQB平台;2020年上市 |
| model:jetta:vs8 | Jetta VS8 | 捷达VS8 | Jetta VS8 | — | class:cn:b | body:suv | pt:ice | current · 2025–present | 一汽-大众捷达品牌中型SUV,基于大众MQB平台;2025年发布/上市 |

## Jinbei

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:jinbei:58b719efd8 | Guanjing | 观境 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2019–2020 | 观境(2019-2020),金杯紧凑型SUV,已停产 |
| model:jinbei:750 | Jinbei 750 | 750 | 750 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2015–2020 | 华晨金杯750紧凑型MPV(7座家用) |
| model:jinbei:8be17a16aa | Leilong | 雷龙 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2014–2017 | 雷龙(2014-),华晨华瑞皮卡,已停售 |
| model:jinbei:f50 | Jinbei F50 | F50 | F50 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2017–2020 | 金杯F50紧凑型MPV(7座家用) |
| model:jinbei:grace | Jinbei Grace | 阁瑞斯 | 閣瑞斯 | — | class:cn:mpv | body:mpv | pt:ice | current · 2004–present | 金杯阁瑞斯商务MPV(轻客),源自丰田Granvia技术,英文名Grace |
| model:jinbei:haishi | Jinbei Haishi | 海狮 | 海獅 | — | class:cn:mpv | body:van | pt:ice | current · 1989–present | 金杯海狮轻客,金杯经典车型,源自丰田Hiace技术,多次改款 |
| model:jinbei:haixing-t20 | Jinbei T20 | 海星T20 | 海星T20 | — | class:cn:mpv | body:pickup | pt:ice | current · 2016–present | 金杯海星T20微卡,海星系列 |
| model:jinbei:kuaijin | Jinbei Kuaijin | 快运 | 快運 | — | class:cn:mpv | body:van | pt:ice | current · 2013–present | 金杯快运系列轻客,工具车定位(新海狮快运/阁瑞斯快运) |
| model:jinbei:s35 | Zhishang S35 | 智尚S35 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2016–2018 | 智尚S35(2016-2018),金杯小型SUV,已停产 |
| model:jinbei:s70 | Jinbei S70 | 金杯S70 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2017–2019 | 金杯S70(2017-2019),7座SUV,基于蒂阿兹平台,已停产 |
| model:jinbei:t20s | T20S | 鑫源T20S | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2016–present | 鑫源T20S,华晨鑫源微卡(金杯渠道) |
| model:jinbei:t22s | T22S | 鑫源T22S | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2016–present | 鑫源T22S,华晨鑫源微卡(金杯渠道) |
| model:jinbei:t3 | Jinbei T3 | T3 | T3 | — | class:cn:mpv | body:pickup | pt:ice | current · 2018–present | 金杯T3微卡 |
| model:jinbei:t30s | T30S | 鑫源T30S | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2016–present | 鑫源T30S,华晨鑫源微卡(金杯渠道) |
| model:jinbei:t32s | T32S | 鑫源T32S | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2016–present | 鑫源T32S,华晨鑫源微卡(金杯渠道) |
| model:jinbei:t5 | Jinbei T5 | T5 | T5 | — | class:cn:mpv | body:pickup | pt:ice | current · 2018–present | 金杯T5微卡 |
| model:jinbei:t50s | T50S | 鑫源T50S | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2016–present | 鑫源T50S,华晨鑫源微卡(金杯渠道) |
| model:jinbei:t52s | T52S | 鑫源T52S | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2016–present | 鑫源T52S,华晨鑫源微卡(金杯渠道) |
| model:jinbei:xiaohaishi-x30 | Jinbei X30 | 小海狮X30 | 小海獅X30 | — | class:cn:mpv | body:van | pt:ice | current · 2014–present | 金杯小海狮X30微面/轻客 |
| model:jinbei:xinhaishi-s | Jinbei Xinhaishi S | 新海狮S | 新海獅S | — | class:cn:mpv | body:van | pt:ice | current · 2018–present | 金杯新海狮S微面/轻客 |
| model:jinbei:xinhaishi-x30l | Jinbei X30L | 新海狮X30L | 新海獅X30L | — | class:cn:mpv | body:van | pt:ice | current · 2018–present | 金杯新海狮X30L微面/轻客,长轴加长版 |
| model:jinbei:zhishang-s30 | Jinbei S30 | 智尚S30 | 智尚S30 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2013–2018 | 金杯智尚S30小型SUV,金杯乘用车系列 |

## JMC

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:jmc:05s | Yichi 05S | 羿驰05S | — | — | class:cn:a | body:suv | pt:bev | current · 2024–present | 羿驰05S(2024-),纯电紧凑型SUV |
| model:jmc:322ebcf2ae | Dadao | 大道 | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2023–present | 江铃大道(2023-),全新皮卡序列,含越野版 |
| model:jmc:baodian | JMC Baodian | 宝典 | 寶典 | — | class:cn:mpv | body:pickup | pt:ice | current · 2005–present | 中型皮卡,江铃经典皮卡,多次改款延续生产 |
| model:jmc:def093fa3c | Yi | 羿 | — | — | class:cn:a | body:sedan | pt:bev | current · 2021–present | 羿(2021-),江铃新能源纯电紧凑型轿车 |
| model:jmc:e100b | JMC E100B | E100B | E100B | — | class:cn:a00 | body:hatchback | pt:bev | discontinued · 2016–2019 | 纯电微型车,江铃新能源早期车型 |
| model:jmc:e160 | JMC E160 | 江铃E160 | — | — | class:cn:a | body:sedan | pt:bev | discontinued · — | 江铃E160,纯电小型轿车,江铃新能源早期车型 |
| model:jmc:e200l | JMC E200L | 江铃E200L | — | — | class:cn:a | body:sedan | pt:bev | discontinued · — | 江铃E200L,纯电小型轿车,江铃新能源早期车型 |
| model:jmc:e200n | JMC E200N | 江铃E200N | — | — | class:cn:a | body:sedan | pt:bev | discontinued · — | 江铃E200N,纯电小型轿车(E200改款),已停产 |
| model:jmc:ev2 | Yi Zhi EV2 | 易至EV2 | — | — | class:cn:a00 | body:hatchback | pt:bev | current · — | 易至EV2,江铃新能源(江铃集团)微型纯电车 |
| model:jmc:ev3 | Yi Zhi EV3 | 易至EV3 | — | — | class:cn:a | body:hatchback | pt:bev | current · — | 易至EV3,江铃新能源小型纯电车,含青春版 |
| model:jmc:ex5 | Yi Zhi EX5 | 易至EX5 | — | — | class:cn:a | body:suv | pt:bev | discontinued · — | 易至EX5,纯电紧凑型SUV,已停产停售 |
| model:jmc:fushun | JMC Fushun | 福顺 | 福順 | — | class:cn:mpv | body:van | pt:ice | current · 2022–present | 轻客,江铃新一代轻客产品 |
| model:jmc:jmc-01 | Yichi 01 | 羿驰01 | — | — | class:cn:a | body:coupe | pt:bev | current · 2025–present | 羿驰01(2025-),纯电两门两座硬顶跑车,双电机四驱 |
| model:jmc:jmc-05 | Yichi 05 | 羿驰05 | — | — | class:cn:a | body:sedan | pt:bev | current · 2024–present | 羿驰05(2024-),江铃新能源纯电紧凑型轿车,含换电版 |
| model:jmc:jmc-06 | Yichi 06 | 颐驰06 | — | — | class:cn:b | body:mpv | pt:bev | current · 2024–present | 颐驰06(2024-),江铃新能源与百度Apollo联合开发,专供无人驾驶出行服务的中型纯电MPV |
| model:jmc:jmc-9 | Yuhu 9 | 域虎9 | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2019–present | 全尺寸皮卡,域虎系列旗舰,2022款在售 |
| model:jmc:jmc-9-2 | Yuhu 9 Multi-purpose Vehicle | 域虎9多功能车 | — | — | class:cn:mpv | body:pickup | pt:ice | current · — | 域虎9多功能车版,商用变体 |
| model:jmc:jmc-e | E Lufu | E路福 | — | — | class:cn:mpv | body:van | pt:bev | current · 2024–present | 江铃晶马E路福(2024-),纯电动封闭货车 |
| model:jmc:jmc-ev | Yuhu EV | 域虎EV | — | — | class:cn:mpv | body:pickup | pt:bev | current · — | 域虎EV,纯电皮卡 |
| model:jmc:teshun | JMC Teshun | 特顺 | 特順 | — | class:cn:mpv | body:van | pt:ice | current · 2016–present | 轻客,基于福特全顺技术平台 |
| model:jmc:yuhu-5 | JMC Yuhu 5 | 域虎5 | 域虎5 | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2017–2021 | 中型皮卡,域虎系列;域虎3(2018–2020)并入本条 |
| model:jmc:yuhu-7 | JMC Yuhu 7 | 域虎7 | 域虎7 | — | class:cn:mpv | body:pickup | pt:ice | current · 2017–present | 中型皮卡,2022款在售,域虎系列主力 |
| model:jmc:yusheng-s330 | JMC Yusheng S330 | 驭胜S330 | 馭勝S330 | — | class:cn:a | body:suv | pt:ice | discontinued · 2016–2019 | 紧凑型SUV,销量低迷,2019年停产 |
| model:jmc:yusheng-s350 | JMC Yusheng S350 | 驭胜S350 | 馭勝S350 | — | class:cn:b | body:suv | pt:ice | discontinued · 2010–2021 | 中型硬派SUV,驭胜系列首款车型,非承载式车身 |

## Junma

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:junma:s70 | Junma S70 | 君马S70 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2017–2019 | 君马S70中型SUV,2017年上市,君马首款车型 |
| model:junma:seek5 | Junma SEEK 5 | 君马SEEK 5 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2018–2019 | 君马SEEK 5(赛克5)中型7座SUV,2018年上市,君马第二款车型 |

## Kaicene

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:kaicene:f30 | Kaicene F30 | 长安神骐F30 | F30 | — | class:cn:mpv | body:pickup | pt:ice | current · 2016–present | 长安神骐F30微卡(2016年上市),双排座 |
| model:kaicene:jinniuxing | Kaicene Jinniuxing | 长安金牛星 | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2010–2015 | 长安金牛星微面(2010年上市),长安之星系列的高配版本,约2015年停产 |
| model:kaicene:m60 | Kaicene M60 | 长安睿行M60 | M60 | — | class:cn:mpv | body:van | pt:ice | current · 2018–present | 长安睿行M60轻客/厢式车(2018年上市) |
| model:kaicene:m70 | Kaicene M70 | 长安睿行M70 | M70 | — | class:cn:mpv | body:van | pt:ice | discontinued · 2015–2020 | 长安睿行M70轻客(2015年上市),约2020年停产 |
| model:kaicene:m80 | Kaicene M80 | 长安睿行M80 | M80 | — | class:cn:mpv | body:van | pt:ice | current · 2013–present | 长安睿行M80轻客(2013年上市),长轴载货版 |
| model:kaicene:m90 | Kaicene M90 | 长安睿行M90 | M90 | — | class:cn:mpv | body:van | pt:ice | current · 2015–present | 长安睿行M90轻客(2015年上市) |
| model:kaicene:s50 | Kaicene S50 | 长安睿行S50 | S50 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2015–2019 | 长安睿行S50紧凑型MPV(2015年上市),约2019年停产 |
| model:kaicene:star | Kaicene Star | 长安之星 | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 1998–2015 | 长安之星经典微面(1998年上市),国民微面销量极高,为之星系列开山之作,约2015年停产 |
| model:kaicene:star-2 | Kaicene Star 2 | 长安之星2 | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2009–2015 | 长安之星2微面(2009年上市),之星系列第二代车型 |
| model:kaicene:star-3 | Kaicene Star 3 | 长安之星3 | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2012–2018 | 长安之星3微面(2012年上市),约2018年停产 |
| model:kaicene:star-5 | Kaicene Star 5 | 长安之星5 | — | — | class:cn:mpv | body:van | pt:ice | current · 2013–present | 长安之星5微面/厢式运输车(2013年上市) |
| model:kaicene:star-7 | Kaicene Star 7 | 长安之星7 | — | — | class:cn:mpv | body:van | pt:ice | current · 2014–present | 长安之星7微面(2014年上市) |
| model:kaicene:star-9 | Kaicene Star 9 | 长安之星9 | — | — | class:cn:mpv | body:van | pt:ice | current · 2013–present | 长安之星9微面/厢式运输车(2013年上市),常用于城配物流 |
| model:kaicene:t20 | Kaicene T20 | 长安神骐T20 | T20 | — | class:cn:mpv | body:pickup | pt:ice | current · 2015–present | 长安神骐T20微卡(2015年上市) |
| model:kaicene:t30 | Kaicene T30 | 长安神骐T30 | T30 | — | class:cn:mpv | body:pickup | pt:ice | current · 2021–present | 长安神骐T30微卡(2021年上市) |
| model:kaicene:xingguang-4500 | Kaicene Xingguang 4500 | 长安星光4500 | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2012–2018 | 长安星光4500微面/轻客(2012年上市),加长载货版,约2018年停产 |
| model:kaicene:xingka | Kaicene Xingka | 长安星卡 | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2011–present | 长安星卡微型货车(2011年上市),单排/双排可选 |
| model:kaicene:xingka-plus | Kaicene Xingka Plus | 长安星卡PLUS | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2021–present | 长安星卡PLUS微型货车(2021年上市),星卡升级款 |

## Karoo

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:karoo:13ec2d777c | Youyi | 优翼 | — | — | class:cn:a | body:van | pt:ice | discontinued · 2010-2015 | 优翼(2010-2015),开瑞微面,2015年停产 |
| model:karoo:32d0b228d4 | Yousheng | 优胜 | — | — | class:cn:a | body:van | pt:ice | discontinued · 2010-2015 | 优胜(2010-2015),开瑞微面,2015年停产 |
| model:karoo:37950c1f12 | Jiehu | 杰虎 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2013-2018 | 杰虎(2013-2018),开瑞皮卡,2018年停产 |
| model:karoo:48796f165c | Youpai | 优派 | — | — | class:cn:a | body:van | pt:ice | discontinued · 2011-2015 | 优派(2011-2015),开瑞微面,2015年停产 |
| model:karoo:edad7c4850 | Finless Porpoise | 江豚 | — | — | class:cn:a | body:van | pt:bev | current · 2023-present | 江豚(2023-),开瑞纯电物流车 |
| model:karoo:ek1 | Karoo EK1 | 开瑞EK1 | — | — | class:cn:a | body:hatchback | pt:bev | current · 2022-present | 开瑞EK1(2022-),开瑞纯电微型车 |
| model:karoo:k50 | Karoo K50 | K50 | K50 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2015-2020 | 开瑞K50(2015-2020),开瑞紧凑型MPV(7座家用),2020年停产 |
| model:karoo:k50ev | Karoo K50EV | 开瑞K50EV | — | — | class:cn:a | body:mpv | pt:bev | discontinued · 2019-2021 | 开瑞K50EV(2019-2021),K50纯电版,2021年停产 |
| model:karoo:k60 | Karoo K60 | K60 | K60 | — | class:cn:a | body:suv | pt:ice | current · 2016–present | 开瑞K60紧凑型SUV/MPV跨界(7座) |
| model:karoo:k60ev | Karoo K60EV | 开瑞K60EV | — | — | class:cn:a | body:suv | pt:bev | current · 2019-present | 开瑞K60EV(2019-),K60纯电版 |
| model:karoo:karoo-2 | Yousheng 2 Gen | 优胜2代 | — | — | class:cn:a | body:van | pt:ice | discontinued · 2012-2016 | 优胜2代(2012-2016),开瑞微面,2016年停产 |
| model:karoo:karoo-e5 | Finless Porpoise E5 | 江豚E5 | — | — | class:cn:a | body:van | pt:bev | current · 2023-present | 江豚E5(2023-),开瑞纯电物流车 |
| model:karoo:karoo-e6 | Finless Porpoise E6 | 江豚E6 | — | — | class:cn:a | body:van | pt:bev | current · 2023-present | 江豚E6(2023-),开瑞纯电物流车 |
| model:karoo:karoo-e7 | Finless Porpoise E7 | 江豚E7 | — | — | class:cn:a | body:van | pt:bev | current · 2023-present | 江豚E7(2023-),开瑞纯电物流车 |
| model:karoo:karoo-ev | Youyou EV | 优优EV | — | — | class:cn:a | body:van | pt:bev | current · 2019-present | 优优EV(2019-),开瑞纯电微面 |
| model:karoo:karoo-ev-2 | Youjin EV | 优劲EV | — | — | class:cn:a | body:pickup | pt:bev | current · 2019-present | 优劲EV(2019-),开瑞纯电微卡 |
| model:karoo:karoo-t5 | Youjin T5 | 优劲T5 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2015-2020 | 优劲T5(2015-2020),开瑞微卡,2020年停产 |
| model:karoo:karoo-x3 | Elephant X3 | 小象X3 | — | — | class:cn:b | body:pickup | pt:ice | current · 2022-present | 小象X3(2022-),开瑞微卡 |
| model:karoo:karoo-x5 | Elephant X5 | 小象X5 | — | — | class:cn:c | body:pickup | pt:ice | current · 2022-present | 小象X5(2022-),开瑞微卡 |
| model:karoo:karoo-x6 | X6 | X6 | — | — | class:cn:c | body:suv | pt:ice | discontinued · 2016-2020 | 开瑞X6(2016-2020),开瑞紧凑型SUV,2020年停产 |
| model:karoo:karoo-x7 | Elephant X7 | 小象X7 | — | — | class:cn:c | body:pickup | pt:ice | current · 2022-present | 小象X7(2022-),开瑞微卡 |
| model:karoo:s-ev | Elephant S Card EV | 小象S卡EV | — | — | class:cn:a | body:pickup | pt:bev | current · 2022-present | 小象S卡EV(2022-),开瑞纯电微卡 |
| model:karoo:x70 | Karoo X70 | 开瑞X70 | — | — | class:cn:a | body:van | pt:ice | current · 2023-present | 开瑞X70(2023-),开瑞轻客 |
| model:karoo:youjin | Karoo Youjin | 优劲 | 優勁 | — | class:cn:mpv | body:pickup | pt:ice | current · 2011–present | 开瑞优劲微卡 |
| model:karoo:youya | Karoo Youya | 优雅 | 優雅 | — | class:cn:mpv | body:van | pt:ice | discontinued · 2009–2015 | 开瑞优雅微面/MPV,开瑞品牌早期车型 |
| model:karoo:youya-2 | Karoo Youya 2 | 优雅2代 | 優雅2代 | — | class:cn:mpv | body:van | pt:ice | discontinued · 2014–2018 | 开瑞优雅2代微面,优雅换代车型 |
| model:karoo:youyou | Karoo Youyou | 优优 | 優優 | — | class:cn:mpv | body:van | pt:ice | discontinued · 2009–2015 | 开瑞优优微面,开瑞品牌早期车型 |
| model:karoo:youyou-2 | Karoo Youyou 2 | 优优2代 | 優優2代 | — | class:cn:mpv | body:van | pt:ice | discontinued · 2014–2018 | 开瑞优优2代微面,优优换代车型 |

## Kia

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:kia:21821b6fca | Qianlima | 千里马 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2002-2008 | 千里马(2002-2008),东风悦达起亚首款车型(Accent中国版),2008年停产 |
| model:kia:a337bcf525 | Borrego | 霸锐 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2008-2020 | 霸锐(Borrego,2008-2020),起亚中大型SUV,中国以进口销售,2020年停产 |
| model:kia:b71f5ce6b5 | Optima | 远舰 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2003-2010 | 远舰(Optima,2003-2010),东风悦达起亚中型轿车(Optima MG中国版),2010年停产 |
| model:kia:cadenza | Cadenza | 凯尊 | Cadenza | カデンツァ | class:cn:c | body:sedan | pt:ice | discontinued · 2011–2015 | Cadenza中国进口名,中大型轿车,接替欧菲莱斯,2011-2015年销售 |
| model:kia:carens | Carens | 佳乐 | Carens | カレンス | class:eu:m | body:mpv | pt:ice | current · 1999–present | 紧凑MPV,2022年在印度以跨界MPV复活;韩国市场2006-2022年称Rondo;中国进口名「佳乐」 |
| model:kia:carnival | Carnival | 嘉华 | Carnival | カーニバル | class:eu:m | body:minivan | pt:ice | current · 1998–present | 中大型MPV,现款KA4(2020,含混动);中国名「嘉华」;北美2022年起称Carnival(原Sedona) |
| model:kia:ceed | Kia Ceed | 起亚Ceed | — | — | class:cn:a | body:hatchback | pt:ice | current · 2006-present | Ceed(2006-),起亚欧洲市场紧凑型车,2021年第三代 |
| model:kia:cerato | Cerato | 赛拉图 | Cerato | セラト | class:cn:a | body:sedan | pt:ice | discontinued · 2005–2015 | Cerato初代中国国产名,2005-2015年销售,后被K3接替 |
| model:kia:e44f02c285 | Sonet | 索奈 | — | — | class:cn:a | body:suv | pt:ice | current · 2024-present | 索奈(Sonet,2024-),悦达起亚小型SUV |
| model:kia:ev3 | EV3 | EV3 | EV3 | EV3 | class:eu:c | body:suv | pt:bev | current · 2024–present | 纯电紧凑型SUV,基于E-GMP平台 |
| model:kia:ev5 | EV5 | EV5 | EV5 | EV5 | class:eu:c | body:suv | pt:bev | current · 2023–present | 纯电紧凑型SUV,中国首发,基于N3 eK平台 |
| model:kia:ev6 | EV6 | EV6 | EV6 | EV6 | class:eu:c | body:crossover | pt:bev | current · 2021–present | 纯电跨界SUV,基于E-GMP平台;2022年欧洲年度车 |
| model:kia:ev9 | EV9 | EV9 | EV9 | EV9 | class:eu:j | body:suv | pt:bev | current · 2023–present | 三排纯电中大型SUV,基于E-GMP平台 |
| model:kia:forte | Forte | 福瑞迪 | Forte/Cerato | フォルテ | class:eu:c | body:sedan | pt:ice | discontinued · 2008–2024 | 紧凑型轿车,部分市场名Cerato/K3;中国国产名「福瑞迪」;被K4取代 |
| model:kia:k2 | K2 | K2 | K2 | K2 | class:cn:a0 | body:sedan | pt:ice | current · 2011–present | 东风悦达起亚小型轿车,2011年上市,基于Rio平台的中国专属车型 |
| model:kia:k3 | K3 | K3 | K3 | K3 | class:cn:a | body:sedan | pt:ice | current · 2012–present | 东风悦达起亚紧凑轿车,2012年上市,对应Cerato三代;K3S两厢版(2014-2016)并入本条 |
| model:kia:k3s | Kia K3S | 起亚K3S | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2014-2017 | K3S(2014-2017),K3两厢版,2017年停产 |
| model:kia:k4 | K4 | K4(凯绅) | K4 | K4 | class:cn:b | body:sedan | pt:ice | current · 2014–present | 东风悦达起亚中型轿车,2014年上市,2017年改款后中国名凯绅,凯绅并入本条 |
| model:kia:k5 | K5 | K5(凯酷) | K5 | K5 | class:eu:d | body:sedan | pt:ice | current · 2000–present | 中型轿车,2010年前称Optima(远舰/欧迪玛);中国国产名K5凯酷 |
| model:kia:k900 | K900 | K9 | K9 | K9 | class:eu:f | body:sedan | pt:ice | discontinued · 2012–2020 | 旗舰豪华轿车,北美名K900(2012-2020);韩国本土名K9继续销售(2018年改款) |
| model:kia:kia-k9 | Kia K9 | 起亚K9 | — | — | class:cn:a | body:sedan | pt:ice | current · 2012-present | K9(2012-),起亚旗舰轿车(北美名K900) |
| model:kia:kx-cross | KX Cross | KX CROSS | KX Cross | KXクロス | class:cn:a0 | body:hatchback | pt:ice | current · 2017–present | 东风悦达起亚小型跨界两厢车,2017年上市,基于K2平台 |
| model:kia:kx1 | KX1 | 奕跑 | KX1 | KX1 | class:cn:a0 | body:suv | pt:ice | current · 2018-present | 奕跑(KX1,2018-),东风悦达起亚小型SUV,基于K2平台 |
| model:kia:kx3 | KX3 Seltos | KX3傲跑 | — | — | class:cn:b | body:suv | pt:ice | current · 2019-present | KX3傲跑(2019-),东风悦达起亚小型SUV(Seltos中国版) |
| model:kia:kx3-2 | KX3 New Energy | KX3新能源 | — | — | class:cn:b | body:suv | pt:bev | discontinued · 2016-2019 | KX3新能源(2016-2019),老款KX3纯电版,2019年停产 |
| model:kia:kx5 | KX5 | KX5 | KX5 | KX5 | class:cn:a | body:suv | pt:ice | current · 2016–present | 起亚紧凑SUV,2016年上市,即Sportage四代中国名 |
| model:kia:kx7 | KX7 | KX7 | KX7 | KX7 | class:cn:b | body:suv | pt:ice | current · 2017–present | 东风悦达起亚中型SUV,2017年上市,三排七座布局 |
| model:kia:mohave | Mohave | Mohave | Mohave | モハベ | class:eu:j | body:suv | pt:ice | discontinued · 2009–2024 | 韩国市场大型SUV(博瑞/霸锐曾为中国名,「霸锐」),据维基2024年停产 |
| model:kia:niro | Niro | 极睿 | Niro | ニーロ | class:eu:c | body:crossover | pt:hev | current · 2016–present | 紧凑型跨界车,主打混动/插混/纯电;中国曾以「极睿」进口 |
| model:kia:opirus | Opirus | 欧菲莱斯 | Opirus | オピルス | class:eu:e | body:sedan | pt:ice | discontinued · 2002–2011 | 起亚早期豪华轿车,北美名Amanti;中国进口名「欧菲莱斯」;被Cadenza/K7接替 |
| model:kia:pegas | Pegas | 焕驰 | Pegas | ペガス | class:cn:a0 | body:sedan | pt:ice | current · 2017–present | 东风悦达起亚小型轿车,2017年上市,与全球Kia Pegas同源 |
| model:kia:picanto | Picanto | Picanto | Picanto | ピカント | class:eu:a | body:hatchback | pt:ice | current · 2004–present | A级城市车,韩国名Morning;北美未销售 |
| model:kia:pride | Pride | 普莱特 | Pride | プライド | class:eu:b | body:hatchback | pt:ice | discontinued · 1986–2000 | 马自达121(福特Festiva)换标生产;中国曾国产「普莱特」;部分市场生产至2011年 |
| model:kia:ray-ev | Kia Ray EV | 起亚Ray EV | — | — | class:cn:a | body:hatchback | pt:bev | current · 2011-present | Ray EV(2011-),Ray纯电版,韩国市场 |
| model:kia:rio | Rio | 锐欧 | Rio | リオ | class:eu:b | body:hatchback | pt:ice | discontinued · 1999–2023 | 小型车,含三厢轿车版;中国曾国产「锐欧」;被K3(BL7)取代 |
| model:kia:seltos | Seltos | 赛图斯(曾名傲跑) | Seltos | セルトス | class:eu:b | body:suv | pt:ice | current · 2019–present | 小型跨界SUV;中国国产名「赛图斯」(初代曾称傲跑) |
| model:kia:sephia | Sephia | Sephia | Sephia | セフィア | class:eu:c | body:sedan | pt:ice | discontinued · 1992–2003 | 紧凑型轿车,起亚早期全球车型;被Cerato/Forte接续 |
| model:kia:sorento | Sorento | 索兰托 | Sorento | ソレント | class:eu:j | body:suv | pt:ice | current · 2002–present | 中型SUV,现款MQ4(2020);中国曾进口「索兰托」 |
| model:kia:soul | Soul | 秀尔 | Soul | ソウル | class:eu:c | body:hatchback | pt:ice | discontinued · 2008–2025 | 盒式设计掀背车,中国曾国产「秀尔」;含纯电Soul EV(2014-2024) |
| model:kia:sportage | Sportage | 狮跑/智跑/狮铂拓界 | Sportage | スポーテージ | class:eu:c | body:suv | pt:ice | current · 1993–present | 起亚全球最畅销车型;中国历代名:狮跑(1代)→智跑(2-3代)→狮铂拓界(5代) |
| model:kia:stinger | Stinger | 斯汀格 | Stinger | スティンガー | class:eu:d | body:hatchback | pt:ice | discontinued · 2017–2023 | 高性能后驱轿跑,中国曾以「斯汀格」进口;无直接后继 |
| model:kia:stonic | Stonic | Stonic | Stonic | ストニック | class:eu:b | body:crossover | pt:ice | current · 2017–present | 小型跨界SUV,基于Rio平台,主打欧洲市场 |
| model:kia:telluride | Telluride | Telluride | Telluride | テルライド | class:us:standard-suv | body:suv | pt:ice | current · 2018–present | 三排中大型SUV,北美市场;2020年世界风云车 |
| model:kia:vq | VQ | VQ | VQ | VQ | class:cn:mpv | body:mpv | pt:ice | discontinued · 2007-2014 | VQ(2007-2014),第三代Sedona/Carnival的开发代号,中国以进口形式销售 |
| model:kia:xceed-2 | Kia XCeed | 起亚XCeed | — | — | class:cn:a | body:crossover | pt:ice | current · 2019-present | XCeed(2019-),Ceed的跨界版,欧洲市场 |

## Koenigsegg

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:koenigsegg:agera | Agera | Agera | Agera | アゲーラ | class:eu:s | body:supercar | pt:ice | discontinued · 2010–2018 | Agera R/RS/Final等版本并入;Agera RS曾创447km/h量产车极速纪录 |
| model:koenigsegg:cc850 | CC850 | CC850 | CC850 | CC850 | class:eu:s | body:supercar | pt:ice | current · 2022–present | 2022年发布的致敬车型(品牌20周年+创始人驾照号850),5.0L双涡轮V8,850hp(E85约1060hp),限量约70台;9速LST自动变速箱可选手动模式 |
| model:koenigsegg:cc8s | CC8S | CC8S | CC8S | CC8S | class:eu:s | body:supercar | pt:ice | discontinued · 2002–2003 | 品牌首款量产街车,仅6辆 |
| model:koenigsegg:ccr | CCR | CCR | CCR | CCR | class:eu:s | body:supercar | pt:ice | discontinued · 2004–2006 | CC8S高性能版,2005年曾创量产车极速纪录,仅14辆 |
| model:koenigsegg:ccx | CCX | CCX | CCX | CCX | class:eu:s | body:supercar | pt:ice | discontinued · 2006–2010 | 面向全球(含美国)合规打造的车型,含乙醇燃料版CCXR |
| model:koenigsegg:gemera | Gemera | Gemera | Gemera | ジェメラ | class:eu:s | body:supercar | pt:phev | current · 2024–present | 品牌首款四座Mega-GT,插混动力(2.0L三缸+电机),限量300辆 |
| model:koenigsegg:jesko | Jesko | Jesko | Jesko | イェスコ | class:eu:s | body:supercar | pt:ice | current · 2021–present | 限量约125辆,含Jesko Attack与Jesko Absolut版本;5.0L双涡轮V8 |
| model:koenigsegg:one-1 | One:1 | One:1 | One:1 | One:1(ワン・ワン) | class:eu:s | body:supercar | pt:ice | discontinued · 2014–2015 | 重量功率比1:1得名,基于Agera平台,含原型车共7辆 |
| model:koenigsegg:regera | Regera | Regera | Regera | レゲーラ | class:eu:s | body:supercar | pt:phev | discontinued · 2016–2022 | 插混超级跑车,采用KDD直驱系统(无变速箱),约80辆 |

## Lada

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:lada:granta | Lada Granta | 拉达Granta | Lada Granta | ラーダ・グランタ | class:cn:a | body:sedan | pt:ice | current · 2011–present | 入门平价轿车(俄市场销量冠军级),含掀背/旅行版 |
| model:lada:largus | Lada Largus | 拉达Largus | Lada Largus | ラーダ・ラルグス | class:eu:m | body:mpv | pt:ice | current · 2012–present | 基于雷诺Dacia Logan MCV的7座MPV/货车,2024年出纯电版e-Largus |
| model:lada:niva | Lada Niva Legend | 拉达Niva | Lada Niva | ラーダ・ニーバ | class:eu:j | body:suv | pt:ice | current · 1977–present | 经典非承载式越野车(1977年投产至今,2024年更名Niva Legend);大陆早年有进口 |
| model:lada:vesta | Lada Vesta | 拉达Vesta | Lada Vesta | ラーダ・ヴェスタ | class:cn:a | body:sedan | pt:ice | current · 2015–present | 俄罗斯市场主力紧凑型轿车,2024年大改款 |

## Lamborghini

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:lamborghini:aventador | Lamborghini Aventador | 兰博基尼Aventador | 藍寶堅尼Aventador | ランボルギーニ アヴェンタドール | class:eu:s | body:supercar | pt:ice | discontinued · 2011–2022 | V12自然吸气旗舰,含SVJ、Ultimae等版本,2022年停产,由Revuelto接替 |
| model:lamborghini:countach | Lamborghini Countach | 兰博基尼Countach | 藍寶堅尼Countach | ランボルギーニ カウンタック | class:eu:s | body:supercar | pt:ice | discontinued · 1974–1990 | 楔形设计开创者的V12超级跑车;2021–2022年曾限量复活Countach LPI 800-4 |
| model:lamborghini:diablo | Lamborghini Diablo | 兰博基尼Diablo | 藍寶堅尼Diablo | ランボルギーニ ディアブロ | class:eu:s | body:supercar | pt:ice | discontinued · 1990–2001 | Countach的继任者,V12超级跑车,2001年停产 |
| model:lamborghini:gallardo | Lamborghini Gallardo | 兰博基尼Gallardo | 藍寶堅尼Gallardo | ランボルギーニ ガヤルド | class:eu:s | body:supercar | pt:ice | discontinued · 2003–2013 | V10入门超跑,品牌最畅销车型之一,2013年停产 |
| model:lamborghini:huracan | Lamborghini Huracán | 兰博基尼Huracán | 藍寶堅尼Huracán | ランボルギーニ ウラカン | class:eu:s | body:supercar | pt:ice | discontinued · 2014–2024 | V10自然吸气跑车,2014年推出,含EVO、STO等版本,2024年停产,由Temerario接替 |
| model:lamborghini:jalpa | Lamborghini Jalpa | 兰博基尼Jalpa | 藍寶堅尼Jalpa | ランボルギーニ ヤルパ | class:eu:s | body:coupe | pt:ice | discontinued · 1981–1988 | V8中置入门超跑,1988年停产 |
| model:lamborghini:miura | Lamborghini Miura | 兰博基尼Miura | 藍寶堅尼Miura | ランボルギーニ ミウラ | class:eu:s | body:supercar | pt:ice | discontinued · 1966–1973 | 公认的首款中置引擎量产超级跑车,1966年发布 |
| model:lamborghini:murcielago | Lamborghini Murciélago | 兰博基尼Murciélago | 藍寶堅尼Murciélago | ランボルギーニ ムルシエラゴ | class:eu:s | body:supercar | pt:ice | discontinued · 2001–2010 | 大众/奥迪入主后首款V12旗舰,2010年停产 |
| model:lamborghini:revuelto | Lamborghini Revuelto | 兰博基尼Revuelto | 藍寶堅尼Revuelto | ランボルギーニ レヴエルト | class:eu:s | body:supercar | pt:phev | current · 2023–present | V12+三电机插电混动旗舰,2023年发布,接替Aventador |
| model:lamborghini:silhouette | Lamborghini Silhouette | 兰博基尼Silhouette | 藍寶堅尼Silhouette | ランボルギーニ シルエット | class:eu:s | body:roadster | pt:ice | discontinued · 1976–1979 | V8中置敞篷跑车,产量极少(约52台) |
| model:lamborghini:temerario | Lamborghini Temerario | 兰博基尼Temerario | 藍寶堅尼Temerario | ランボルギーニ テメラリオ | class:eu:s | body:supercar | pt:phev | current · 2024–present | V8双涡轮插电混动,2024年发布,接替Huracán,2025年交付 |
| model:lamborghini:urraco | Lamborghini Urraco | 兰博基尼Urraco | 藍寶堅尼Urraco | ランボルギーニ ウラッコ | class:eu:s | body:coupe | pt:ice | discontinued · 1970–1979 | V8中置入门车型,含P250/P300/P200等版本,1979年停产 |
| model:lamborghini:urus | Lamborghini Urus | 兰博基尼Urus | 藍寶堅尼Urus | ランボルギーニ ウルス | class:eu:j | body:suv | pt:ice | current · 2018–present | 品牌首款现代SUV,2017年发布、2018年交付;含插混版Urus SE(2024–) |

## Lancia

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:lancia:delta | Lancia Delta | 蓝旗亚Delta | 蘭吉雅Delta | ランシア・デルタ | class:cn:a | body:hatchback | pt:ice | discontinued · 1979–1999 | 传奇WRC冠军车(六次厂商冠军);第三代为HF Integrale(1986–1994) |
| model:lancia:fulvia | Lancia Fulvia | 蓝旗亚Fulvia | 蘭吉雅Fulvia | ランシア・フルビア | class:eu:c | body:sedan | pt:ice | discontinued · 1963–1976 | 前驱V4轿车/轿跑,1972年WRC首冠车型之一 |
| model:lancia:stratos | Lancia Stratos | 蓝旗亚Stratos | 蘭吉雅Stratos | ランシア・ストラトス | class:eu:s | body:coupe | pt:ice | discontinued · 1973–1974 | 楔形中置V6赛车(1974/1975/1976连续三届WRC冠军),量产约492辆 |
| model:lancia:thema | Lancia Thema | 蓝旗亚Thema | 蘭吉雅Thema | ランシア・テーマ | class:eu:e | body:sedan | pt:ice | discontinued · 1984–1994 | 菲亚特集团Type Four平台旗舰轿车(1984),含法拉利V8版Thema 8.32 |
| model:lancia:ypsilon | Lancia Ypsilon | 蓝旗亚Ypsilon | 蘭吉雅Ypsilon | ランシア・イプシロン | class:eu:b | body:hatchback | pt:ice | current · 1996–present | 小型车(现售第四代2024,纯电/混动),蓝旗亚目前唯一在售车型;大陆未引进 |

## Land Rover

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:land-rover:defender | Defender | 卫士 | 衛士 | ディフェンダー | class:eu:j | body:suv | pt:ice | current · 1990–present | 前身为路虎Series系列(1948–1985);经典款1990–2016,2020年以全新承载式车身(L663)复活,提供90/110/130轴距版 |
| model:land-rover:discovery | Discovery | 发现 | 發現 | ディスカバリー | class:eu:j | body:suv | pt:ice | current · 1989–present | 中大型家用SUV,2025年第五代(L462)燃油版停产后将转型电动车型 |
| model:land-rover:discovery-sport | Discovery Sport | 发现运动版 | 發現運動版 | ディスカバリースポーツ | class:eu:j | body:suv | pt:ice | current · 2014–present | 紧凑型SUV,2014年取代Freelander 2的位置 |
| model:land-rover:freelander | Freelander | 神行者 | 神行者 | フリーランダー | class:eu:j | body:suv | pt:ice | discontinued · 1997–2015 | 品牌首款紧凑型SUV,含Freelander 2(2006–2014),后被Discovery Sport取代 |
| model:land-rover:range-rover | Range Rover | 揽胜 | 攬勝 | レンジローバー | class:eu:j | body:suv | pt:ice | current · 1970–present | 品牌旗舰豪华SUV;1970年首发,现款为第五代(L460,2022–);1970–1996年间款式常称 Range Rover Classic |
| model:land-rover:range-rover-evoque | Range Rover Evoque | 揽胜极光 | 攬勝極光 | レンジローバーイヴォーク | class:eu:j | body:suv | pt:ice | current · 2011–present | 品牌首款紧凑型豪华SUV,第二代(L551)2019年起 |
| model:land-rover:range-rover-sport | Range Rover Sport | 揽胜运动版 | 攬勝運動版 | レンジローバースポーツ | class:eu:j | body:suv | pt:ice | current · 2005–present | 揽胜的运动化衍生车型,第三代(L461)2023年发布 |
| model:land-rover:range-rover-velar | Range Rover Velar | 揽胜星脉 | 攬勝星脈 | レンジローバーヴェラール | class:eu:j | body:suv | pt:ice | current · 2017–present | 定位介于Evoque与Sport之间的中大型SUV,2017年发布 |
| model:land-rover:series | Land Rover Series I/II/III | 路虎系列I/II/III | Land Rover Series I/II/III | ランドローバーシリーズ | class:eu:j | body:suv | pt:ice | discontinued · 1948–1985 | Defender的前身:1948年首发的初代路虎,历经Series I/II/III,1990年更名Defender |

## Landwind

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:landwind:x2 | Landwind X2 | 陆风X2 | Landwind X2 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2017–2019 | 小型SUV,陆风汽车入门级车型 |
| model:landwind:x5 | Landwind X5 | 陆风X5 | Landwind X5 | — | class:cn:a | body:suv | pt:ice | discontinued · 2013–2019 | 紧凑型SUV,陆风主力车型 |
| model:landwind:x7 | Landwind X7 | 陆风X7 | Landwind X7 | — | class:cn:a | body:suv | pt:ice | discontinued · 2015–2019 | 紧凑型SUV,外观与路虎极光高度相似,曾引发商标纠纷 |
| model:landwind:x8 | Landwind X8 | 陆风X8 | Landwind X8 | — | class:cn:b | body:suv | pt:ice | discontinued · 2011–2019 | 中型硬派SUV,非承载式车身,主打越野 |

## Leapmotor

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:leapmotor:a05 | Leapmotor A05 | 零跑A05 | 零跑A05 | — | class:cn:a | body:sedan | pt:bev | current · 2025–present | 零跑A系列紧凑型纯电轿车,2025年上市 |
| model:leapmotor:a10 | Leapmotor A10 | 零跑A10 | 零跑A10 | — | class:cn:a | body:suv | pt:bev | current · 2025–present | 零跑A系列紧凑型纯电SUV,2025年上市 |
| model:leapmotor:b01 | Leapmotor B01 | 零跑B01 | 零跑B01 | — | class:cn:a | body:sedan | pt:bev | current · 2025–present | 零跑B系列纯电轿车,2025年上市 |
| model:leapmotor:b10 | Leapmotor B10 | 零跑B10 | Leapmotor B10(未导入) | — | class:cn:a | body:suv | pt:bev | current · 2025–present | B系列首款全球车型(2025年上市,纯电紧凑SUV) |
| model:leapmotor:c01 | Leapmotor C01 | 零跑C01 | Leapmotor C01(未导入) | — | class:cn:c | body:sedan | pt:bev | current · 2022–present | 中大型纯电轿车(2022年上市,纯电/增程) |
| model:leapmotor:c10 | Leapmotor C10 | 零跑C10 | Leapmotor C10(未导入) | — | class:cn:b | body:suv | pt:bev | current · 2024–present | 全球化车型(2024年上市,纯电/增程,出口欧洲) |
| model:leapmotor:c11 | Leapmotor C11 | 零跑C11 | Leapmotor C11(未导入) | — | class:cn:b | body:suv | pt:bev | current · 2021–present | 品牌首款SUV(2021年上市,纯电/增程双动力),2026款在售 |
| model:leapmotor:c16 | Leapmotor C16 | 零跑C16 | Leapmotor C16(未导入) | — | class:cn:c | body:suv | pt:bev | current · 2024–present | 中大型6座纯电/增程SUV(2024年上市) |
| model:leapmotor:s01 | Leapmotor S01 | 零跑S01 | 零跑S01 | — | class:cn:a | body:coupe | pt:bev | discontinued · 2019–2022 | 零跑品牌首款车型,纯电双门轿跑,2019年上市 |
| model:leapmotor:t03 | Leapmotor T03 | 零跑T03 | Leapmotor T03(未导入) | — | class:cn:a0 | body:hatchback | pt:bev | current · 2020–present | A0级纯电微型车(2020年上市),出口欧洲(2023年Stellantis渠道) |

## Lexus

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:lexus:ct | CT | CT | CT | CT | class:eu:c | body:hatchback | pt:hev | discontinued · 2010-2022 | 紧凑型混动两厢车(CT 200h),曾以进口身份在中国销售;2022年停产 |
| model:lexus:es | ES | ES | ES | ES | class:eu:e | body:sedan | pt:hev | current · 1989-present | 大陆「雷克萨斯ES」,台湾「凌志ES」;基于Camry/Avalon平台;现行XZ20(2025起) |
| model:lexus:gs | GS | GS | GS | GS | class:eu:e | body:sedan | pt:ice | discontinued · 1993-2020 | 中大型行政轿车;日本市场称Aristo(アリスト);2020年停产 |
| model:lexus:gs-f | GS F | GS F | — | — | class:eu:e | body:sedan | pt:ice | discontinued · 2015–2020 | GS F(2015-2020),GS高性能版,5.0L V8(467马力),2020年随GS停产 |
| model:lexus:gx | GX | GX | GX | GX | class:us:standard-suv | body:suv | pt:ice | current · 2002-present | 非承载式中大型SUV;基于Land Cruiser Prado平台;现行J250(2023起,GX 550) |
| model:lexus:hs | HS | HS | HS | HS | class:eu:c | body:sedan | pt:hev | discontinued · 2009-2018 | 日本市场专属混动轿车(HS 250h);2018年停产 |
| model:lexus:is | IS | IS | IS | IS | class:eu:d | body:sedan | pt:ice | current · 1998-present | 紧凑行政轿车;初代日本名Altezza(アルテッツァ);现行XE30(2013起) |
| model:lexus:is-f | IS F | IS F | — | — | class:eu:d | body:sedan | pt:ice | discontinued · 2008–2014 | IS F(2008-2014),IS高性能版,5.0L V8(416马力) |
| model:lexus:lbx | LBX | LBX | LBX | LBX | class:us:small-suv | body:crossover | pt:hev | current · 2023-present | 入门小型豪华跨界SUV;与Yaris Cross同平台;主销欧洲/日本 |
| model:lexus:lc | LC | LC | LC | LC | class:eu:s | body:coupe | pt:hev | current · 2017-present | 旗舰GT轿跑;LC500(5.0L V8)/LC500h混动,另有敞篷版LC500 Convertible |
| model:lexus:lexus-sc | Lexus SC | 雷克萨斯SC | — | — | class:eu:s | body:coupe | pt:ice | discontinued · 1991–2010 | SC(1991-2010),雷克萨斯豪华轿跑(SC 300/400/430),含敞篷版 |
| model:lexus:lfa | Lexus LFA | 雷克萨斯LFA | — | — | class:eu:s | body:coupe | pt:ice | discontinued · 2010–2012 | LFA(2010-2012),雷克萨斯旗舰超级跑车,V10自吸(560马力),限量500台 |
| model:lexus:lm | LM | LM | LM | LM | class:eu:m | body:minivan | pt:hev | current · 2020-present | 豪华MPV;基于丰田Alphard;大陆称「雷克萨斯LM」;现行AW10(2023起) |
| model:lexus:ls | LS | LS | LS | LS(エルエス) | class:eu:f | body:sedan | pt:hev | current · 1989-present | 旗舰轿车;日本市场2006年前称Celsior(セルシオ);现行XF50(2017起),欧美已停售,主销日/中 |
| model:lexus:lx | LX | LX | LX | LX | class:us:standard-suv | body:suv | pt:ice | current · 1995-present | 全尺寸豪华SUV;基于Land Cruiser;现行J310(2021起,LX 600) |
| model:lexus:nx | NX | NX | NX | NX | class:us:compact | body:crossover | pt:hev | current · 2014-present | 紧凑豪华SUV;与RAV4同平台;现行AZ20(2021起)含插混NX 450h+ |
| model:lexus:rc | RC | RC | RC | RC | class:eu:s | body:coupe | pt:ice | discontinued · 2014-2025 | 中型豪华轿跑(RC 200t/300/350/300h/RC F);2025年停产 |
| model:lexus:rx | RX | RX | RX | RX | class:us:midsize | body:crossover | pt:hev | current · 1998-present | 中型豪华SUV(城市SUV开创者之一);初代日本名Harrier(ハリアー);现行ALA10/ALH10(2022起) |
| model:lexus:rz | RZ | RZ | RZ | RZ | class:us:midsize | body:crossover | pt:bev | current · 2022-present | 雷克萨斯首款全球纯电SUV(e-TNGA平台);与丰田bZ4X同源 |
| model:lexus:tx | TX | TX | TX | TX | class:us:standard-suv | body:suv | pt:ice | current · 2023-present | 三排全尺寸豪华跨界SUV;北美专属;与丰田Grand Highlander同平台 |
| model:lexus:ux | UX | UX | UX | UX | class:us:small-suv | body:crossover | pt:hev | current · 2018-present | 入门紧凑跨界SUV;与C-HR/Corolla Cross同平台;另有纯电UX 300e |

## Li Auto

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:li-auto:i6 | i6 | 理想i6 | i6(未导入) | — | class:cn:c | body:suv | pt:bev | current · 2025–present | 理想纯电「i系列」中大型5座SUV(800V/5C超充),2025年9月上市 |
| model:li-auto:i8 | i8 | 理想i8 | i8(未导入) | — | class:cn:c | body:suv | pt:bev | current · 2025–present | 理想纯电「i系列」首款中大型6座SUV(800V/5C超充),2025年7月发布上市 |
| model:li-auto:l6 | L6 | 理想L6 | L6(未导入) | — | class:cn:b | body:suv | pt:erev | current · 2024–present | 理想中型增程SUV(家庭五座);台湾/日本市场未导入 |
| model:li-auto:l7 | L7 | 理想L7 | L7(未导入) | — | class:cn:c | body:suv | pt:erev | current · 2023–present | 理想中大型增程SUV(家庭五座) |
| model:li-auto:l8 | L8 | 理想L8 | L8(未导入) | — | class:cn:c | body:suv | pt:erev | current · 2022–present | 理想中大型增程SUV(家庭六座) |
| model:li-auto:l9 | L9 | 理想L9 | L9(未导入) | — | class:cn:d | body:suv | pt:erev | current · 2022–present | 理想旗舰大型增程SUV(5.2米级,家庭六座) |
| model:li-auto:mega | MEGA | 理想MEGA | MEGA(未导入) | — | class:cn:mpv | body:mpv | pt:bev | current · 2024–present | 理想首款纯电车型,大型纯电MPV(5C超充) |
| model:li-auto:one | ONE | 理想ONE | ONE(未导入) | — | class:cn:c | body:suv | pt:erev | discontinued · 2019–2023 | 理想首款车型,中大型增程SUV(6座);2023年停产,由L系列接替 |

## Liebao

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:liebao:36cd802ed4 | Qiling | 骐菱 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2008–2011 | 骐菱(2008-2011),猎豹紧凑MPV,已停产 |
| model:liebao:4acf6ebede | Oukuman | 欧酷曼 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2013–2016 | 欧酷曼(2013-2016),猎豹品牌紧凑型轿车,已停产 |
| model:liebao:55f6173968 | Feiling | 飞铃 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2004–2008 | 飞铃(2004-2008),猎豹早期皮卡,已停产 |
| model:liebao:6481 | Liebao 6481 | 猎豹6481 | Liebao 6481 | — | class:cn:b | body:suv | pt:ice | discontinued · 2005–2015 | 中型越野车,CJY6481系列,与黑金刚同源 |
| model:liebao:742db81150 | Binge | 缤歌 | — | — | class:cn:a | body:suv | pt:bev | discontinued · 2020–2021 | 缤歌(2020-2021),猎豹纯电小型SUV,已停产 |
| model:liebao:c5ev | Liebao C5EV | 猎豹C5EV | — | — | class:cn:a | body:suv | pt:bev | discontinued · 2016–2018 | C5-EV(2016-2018),纯电SUV,基于飞腾C5,续航320公里,已停产 |
| model:liebao:cs10 | Liebao CS10 | 猎豹CS10 | Liebao CS10 | — | class:cn:a | body:suv | pt:ice | discontinued · 2015–2020 | 紧凑型SUV,猎豹向城市SUV转型之作 |
| model:liebao:cs6 | Liebao CS6 | 猎豹CS6 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2008–2011 | CS6(2008-2011),中型SUV,基于三菱帕杰罗技术平台,已停产 |
| model:liebao:cs7 | Liebao CS7 | 猎豹CS7 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2009–2012 | CS7(2009-2012),小型SUV,飞腾平台衍生,已停产 |
| model:liebao:cs9 | Liebao CS9 | 猎豹CS9 | Liebao CS9 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2017–2019 | 小型SUV |
| model:liebao:ct5 | Liebao CT5 | 猎豹CT5 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2016–2020 | CT5(2016-),猎豹皮卡,已停产 |
| model:liebao:ct7 | Liebao CT7 | 猎豹CT7 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2016–2019 | CT7(2016-2019),猎豹皮卡,已停产 |
| model:liebao:feiteng | Liebao Feiteng | 猎豹飞腾 | Liebao Feiteng | — | class:cn:a | body:suv | pt:ice | discontinued · 2004–2014 | 紧凑型越野SUV,源自三菱帕杰罗iO平台 |
| model:liebao:heijingang | Liebao Heijingang | 猎豹黑金刚 | Liebao Heijingang | — | class:cn:b | body:suv | pt:ice | discontinued · 2003–2015 | 中型越野车,源自三菱帕杰罗V31/V33技术授权,长丰猎豹经典车型 |
| model:liebao:liebao-c5 | Feiteng C5 | 飞腾C5 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2015–2018 | 飞腾C5(2015-2018),飞腾系列紧凑SUV,已停产 |
| model:liebao:mattu | Liebao Mattu | 猎豹Mattu | Liebao Mattu | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2020 | 紧凑型SUV,猎豹品牌高端化尝试 |
| model:liebao:q6 | Liebao Q6 | 猎豹Q6 | Liebao Q6 | — | class:cn:b | body:suv | pt:ice | discontinued · 2014–2019 | 中型越野SUV,非承载式车身,硬派风格 |

## Lifan

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:lifan:320 | Lifan 320 | 320 | 320 | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2009–2015 | 微型两厢车,外观模仿MINI造型,力帆早期入门车型 |
| model:lifan:330 | Lifan 330 | 330 | 330 | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2015–2017 | 微型两厢车,力帆320的改款换代车型 |
| model:lifan:330ev | Lifan 330EV | 力帆330EV | — | — | class:cn:b | body:hatchback | pt:bev | discontinued · 2017–2019 | 力帆330EV(2017-2019),330纯电版,已停产 |
| model:lifan:520 | Lifan 520 | 520 | 520 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2005–2015 | 紧凑型轿车,力帆首款轿车 |
| model:lifan:530 | Lifan 530 | 力帆530 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2015–2018 | 力帆530(2015-2018),紧凑型轿车,已停产 |
| model:lifan:620 | Lifan 620 | 620 | 620 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2008–2017 | 紧凑型轿车,力帆主力车型,销量最大的轿车之一 |
| model:lifan:620ev | Lifan 620EV | 力帆620EV | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2016–2018 | 力帆620EV(2016-2018),620纯电版,已停产 |
| model:lifan:630 | Lifan 630 | 力帆630 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2014–2018 | 力帆630(2014-2018),620改款轿车,已停产 |
| model:lifan:650 | Lifan 650 | 力帆650 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2015–2019 | 力帆650(2015-2019),紧凑型轿车,已停产 |
| model:lifan:650ev | Lifan 650EV | 力帆650EV | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2018–2019 | 力帆650EV(2018-2019),650纯电版,已停产 |
| model:lifan:720 | Lifan 720 | 720 | 720 | — | class:cn:b | body:sedan | pt:ice | discontinued · 2012–2017 | 中型轿车,力帆首款B级轿车 |
| model:lifan:80v | Maple 80v | 力帆枫叶80v | — | — | class:cn:mpv | body:mpv | pt:bev | discontinued · 2020–2022 | 枫叶80v(2020-2022),力帆/枫叶品牌纯电MPV,支持换电,已停产 |
| model:lifan:820 | Lifan 820 | 820 | 820 | — | class:cn:c | body:sedan | pt:ice | discontinued · 2015–2018 | 中大型轿车,力帆旗舰轿车 |
| model:lifan:820ev | Lifan 820EV | 力帆820EV | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2016–2018 | 力帆820EV(2016-2018),820纯电版,续航约400公里,已停产 |
| model:lifan:letu | Lifan Letu | 乐途 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2015–2017 | 紧凑型MPV/微面,主打多功能车市场 |
| model:lifan:maiwei | Lifan Maiwei | 迈威 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2016–2019 | 小型7座SUV,主打三四线市场 |
| model:lifan:x50 | Lifan X50 | X50 | X50 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2014–2017 | 小型SUV,力帆SUV产品线入门车型 |
| model:lifan:x60 | Lifan X60 | X60 | X60 | — | class:cn:a | body:suv | pt:ice | discontinued · 2011–2019 | 紧凑型SUV,力帆首款SUV,曾出口海外市场 |
| model:lifan:x80 | Lifan X80 | X80 | X80 | — | class:cn:b | body:suv | pt:ice | discontinued · 2017–2019 | 中型SUV,力帆旗舰SUV |
| model:lifan:xuanlang | Lifan Xuanlang | 轩朗 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2017–2019 | 紧凑型7座MPV,力帆MPV产品线主力 |

## Lincoln

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:lincoln:aviator | Aviator | 飞行家 | Aviator | アビエーター | class:eu:j | body:suv | pt:ice | current · 2020–present | 中国版「飞行家」(长安林肯国产);历史名号2003–2005 |
| model:lincoln:continental | Continental | 大陆 | Continental | コンチネンタル | class:us:large | body:sedan | pt:ice | discontinued · 1939–2002; 2017–2020 | 2016年复活至2020年停产;曾为肯尼迪座驾 |
| model:lincoln:corsair | Corsair | 冒险家 | Corsair | コルセア | class:eu:j | body:crossover | pt:ice | current · 2020–present | 中国长安林肯国产「冒险家」 |
| model:lincoln:mkc | MKC | MKC | MKC | MKC | class:eu:j | body:suv | pt:ice | discontinued · 2015–2019 | 紧凑型豪华SUV,中国以进口形式销售(2015-2019);2020年被Corsair「冒险家」取代 |
| model:lincoln:mks | MKS | MKS | MKS | MKS | class:us:large | body:sedan | pt:ice | discontinued · 2008–2016 | 全尺寸轿车 |
| model:lincoln:mkt | MKT | MKT | MKT | MKT | class:us:standard-suv | body:suv | pt:ice | discontinued · 2010–2019 | 三排座全尺寸CUV,常作礼宾车 |
| model:lincoln:mkx | MKX | MKX | MKX | MKX | class:eu:j | body:crossover | pt:ice | discontinued · 2007–2018 | 2019年更名Nautilus |
| model:lincoln:mkz | MKZ | MKZ | MKZ | MKZ | class:us:midsize | body:sedan | pt:ice | discontinued · 2006–2020 | 前身为Zephyr(2006–2012);2020年停产 |
| model:lincoln:nautilus | Nautilus | 航海家 | Nautilus | ノーチラス | class:eu:j | body:crossover | pt:ice | current · 2019–present | 中国版「航海家」;前身为MKX |
| model:lincoln:navigator | Navigator | 领航员 | Navigator | ナビゲーター | class:us:standard-suv | body:suv | pt:ice | current · 1998–present | 全尺寸豪华SUV;大陆官方名「领航员」;日本市场2017年起停售 |
| model:lincoln:town-car | Town Car | 城市 | Town Car | タウンカー | class:us:large | body:sedan | pt:ice | discontinued · 1981–2011 | 北美礼宾/出租车经典 |
| model:lincoln:z | Lincoln Z | 林肯Z | 林肯Z(未导入) | — | class:cn:b | body:sedan | pt:ice | current · 2022–present | 中国市场专属中型轿车,2022年3月上市;量产英文名Lincoln Z(概念阶段称Zephyr),2024年起增混动版;台湾未导入 |
| model:lincoln:zephyr | Zephyr | Zephyr | Zephyr | ゼファー | class:us:midsize | body:sedan | pt:ice | discontinued · 2006–2012 | MKZ前身;初代Zephyr为1936–1942 |

## Linian

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:linian:s1 | Linian S1 | 理念S1 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2011–2016 | 广汽本田理念S1紧凑型轿车,合资自主品牌首款车型,基于本田City(2008款) |

## Livan

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:livan:7 | Livan 7 | 睿蓝7 | Livan 7 | — | class:cn:a | body:suv | pt:bev | current · 2023–present | 紧凑型纯电SUV(2023年上市),基于GBRC水晶架构,支持换电 |
| model:livan:8 | Livan 8 | 睿蓝8 | Livan 8 | — | class:cn:mpv | body:mpv | pt:bev | current · 2024–present | 纯电MPV(2024年11月上市),提供5/7座,支持换电 |
| model:livan:9 | Livan 9 | 睿蓝9 | Livan 9 | — | class:cn:b | body:suv | pt:bev | current · 2022–present | 中型纯电SUV(2022年上市),提供6/7座,支持换电 |
| model:livan:x3-pro | Livan X3 PRO | 睿蓝X3 PRO | Livan X3 PRO | — | class:cn:a0 | body:suv | pt:ice | current · 2022–present | 小型燃油SUV,原吉利远景X3 PRO换标;睿蓝品牌2022年成立后上市,2024款在售 |

## Lotus

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:lotus:eletre | Lotus Eletre | 路特斯Eletre | 蓮花Eletre | ロータス・エレトレ | class:eu:j | body:suv | pt:bev | current · 2022–present | 吉利入股后的首款纯电SUV(SEA架构,中国武汉工厂生产),2022年发布 |
| model:lotus:elise | Lotus Elise | 路特斯Elise | 蓮花Elise | ロータス・エリーゼ | class:eu:s | body:roadster | pt:ice | discontinued · 1996–2021 | 中置后驱轻量化跑车,初代S1(1996),2021年停产;大陆译名随品牌2011年更名「路特斯」 |
| model:lotus:emeya | Lotus Emeya | 路特斯Emeya | 蓮花Emeya | ロータス・エメヤ | class:eu:e | body:sedan | pt:bev | current · 2024–present | 纯电大型GT轿车(SEA架构),2024年起交付 |
| model:lotus:emira | Lotus Emira | 路特斯Emira | 蓮花Emira | ロータス・エミーラ | class:eu:s | body:coupe | pt:ice | current · 2021–present | 品牌末代燃油跑车(丰田3.5机械增压/AMG 2.0T),2021年发布 |
| model:lotus:esprit | Lotus Esprit | 路特斯Esprit | 蓮花Esprit | ロータス・エスプリ | class:eu:s | body:sports | pt:ice | discontinued · 1976–2004 | 经典楔形中置跑车(詹姆斯·邦德《海底城》座驾),2004年停产 |
| model:lotus:evora | Lotus Evora | 路特斯Evora | 蓮花Evora | ロータス・エヴォーラ | class:eu:s | body:coupe | pt:ice | discontinued · 2009–2021 | 2+2中置跑车(丰田3.5L V6),2021年停产,由Emira接替 |
| model:lotus:exige | Lotus Exige | 路特斯Exige | 蓮花Exige | ロータス・エキシージ | class:eu:s | body:coupe | pt:ice | discontinued · 2000–2021 | 基于Elise的硬顶强化版,2021年停产 |

## Lucid

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:lucid:air | Lucid Air | Lucid Air | Lucid Air | ルシード・エア | class:eu:f | body:sedan | pt:bev | current · 2021–present | 品牌首款纯电豪华轿车(2021年交付,Grand Touring/Sapphire性能版) |
| model:lucid:gravity | Lucid Gravity | Lucid Gravity | Lucid Gravity | ルシード・グラビティ | class:eu:j | body:suv | pt:bev | current · 2024–present | 品牌首款纯电SUV(2024年发布,2025年交付) |

## Luxgen

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:luxgen:7-mpv | Luxgen 7 MPV | 纳智捷大7 MPV | Luxgen 7 MPV | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2013–2018 | 中大型MPV |
| model:luxgen:7-suv | Luxgen 7 SUV | 纳智捷大7 SUV | Luxgen 7 SUV | — | class:cn:c | body:suv | pt:ice | discontinued · 2011–2018 | 中大型SUV,东风裕隆首款车型 |
| model:luxgen:s3 | Luxgen S3 | 纳智捷锐3 | Luxgen S3 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2016–2018 | 紧凑型轿车,纳智捷入门级车型 |
| model:luxgen:s5 | Luxgen S5 | 纳智捷纳5 | Luxgen S5 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2013–2017 | 紧凑型轿车,纳智捷首款轿车 |
| model:luxgen:u5-suv | Luxgen U5 SUV | 纳智捷U5 SUV | Luxgen U5 SUV | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2017–2019 | 小型SUV,面向年轻消费者 |
| model:luxgen:u6-suv | Luxgen U6 SUV | 纳智捷优6 SUV | Luxgen U6 SUV | — | class:cn:a | body:suv | pt:ice | discontinued · 2014–2018 | 紧凑型SUV,纳智捷在华销量主力 |

## Mahindra

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:mahindra:be-6 | Mahindra BE 6 | 马恒达BE 6 | Mahindra BE 6 | マヒンドラBE 6 | class:eu:j | body:crossover | pt:bev | current · 2024–present | 全新INGLO平台首款纯电轿跑SUV(2024年发布,2025年交付) |
| model:mahindra:scorpio | Mahindra Scorpio | 马恒达Scorpio | Mahindra Scorpio | マヒンドラ・スコーピオ | class:eu:j | body:suv | pt:ice | current · 2002–present | 非承载式中型SUV(2022年第三代Scorpio-N) |
| model:mahindra:thar | Mahindra Thar | 马恒达Thar | Mahindra Thar | マヒンドラ・ター | class:eu:j | body:suv | pt:ice | current · 2010–present | 经典硬派越野SUV(致敬威利斯Jeep,2020年第二代,含纯电Thar.e) |
| model:mahindra:xuv300 | Mahindra XUV300 | 马恒达XUV300 | Mahindra XUV300 | マヒンドラXUV300 | class:eu:j | body:suv | pt:ice | discontinued · 2019–2025 | 紧凑型SUV(2025年由XUV 3XO接替) |
| model:mahindra:xuv700 | Mahindra XUV700 | 马恒达XUV700 | Mahindra XUV700 | マヒンドラXUV700 | class:eu:j | body:suv | pt:ice | current · 2021–present | 旗舰中型SUV(2021年上市),含纯电XUV.e8 |

## Maserati

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:maserati:3200-gt | Maserati 3200 GT | 玛莎拉蒂3200 GT | 瑪莎拉蒂3200 GT | マセラティ3200GT | class:eu:s | body:coupe | pt:ice | discontinued · 1998–2002 | 1998年推出的双门GT,2002年被Coupé取代 |
| model:maserati:biturbo | Maserati Biturbo | 玛莎拉蒂Biturbo | 瑪莎拉蒂Biturbo | マセラティ ビトゥルボ | class:eu:s | body:coupe | pt:ice | discontinued · 1981–1994 | 1980年代主力车型,首款量产双涡轮增压车;衍生222/422、Spyder、Shamal等变体 |
| model:maserati:coupe | Maserati Coupé | 玛莎拉蒂Coupé | 瑪莎拉蒂Coupé | マセラティ クーペ | class:eu:s | body:coupe | pt:ice | discontinued · 2002–2007 | 3200 GT的继任者,2007年被GranTurismo取代 |
| model:maserati:ghibli | Maserati Ghibli | 玛莎拉蒂Ghibli | 瑪莎拉蒂Ghibli | マセラティ ギブリ | class:eu:e | body:sedan | pt:ice | discontinued · 2013–2023 | 现代Ghibli(2013–2023)2023年停产;名称源自1967–1973年经典Ghibli与1992–1998年Ghibli II |
| model:maserati:grancabrio | Maserati GranCabrio | 玛莎拉蒂GranCabrio | 瑪莎拉蒂GranCabrio | マセラティ グランカブリオ | class:eu:s | body:convertible | pt:ice | current · 2010–present | GranTurismo的敞篷版,第一代2010–2019,第二代2024年起 |
| model:maserati:granturismo | Maserati GranTurismo | 玛莎拉蒂GranTurismo | 瑪莎拉蒂GranTurismo | マセラティ グラントゥーリズモ | class:eu:s | body:coupe | pt:ice | current · 2007–present | GT轿跑,第一代2007–2019,第二代(M189)2023年起,含纯电版GranTurismo Folgore |
| model:maserati:grecale | Maserati Grecale | 玛莎拉蒂Grecale | 瑪莎拉蒂Grecale | マセラティ グレカーレ | class:eu:j | body:suv | pt:ice | current · 2022–present | 中型SUV,2022年发布,与阿尔法·罗密欧Stelvio共享Giorgio平台;含纯电版Grecale Folgore |
| model:maserati:khamsin | Maserati Khamsin | 玛莎拉蒂Khamsin | 瑪莎拉蒂Khamsin | マセラティ カムシン | class:eu:s | body:coupe | pt:ice | discontinued · 1974–1982 | Bertone设计的V8 GT轿跑,1974–1982年间生产(约435辆) |
| model:maserati:levante | Maserati Levante | 玛莎拉蒂Levante | 瑪莎拉蒂Levante | マセラティ レヴァンテ | class:eu:j | body:suv | pt:ice | discontinued · 2016–2024 | 品牌首款SUV,2016年交付,2024年停产 |
| model:maserati:mc12 | Maserati MC12 | 玛莎拉蒂MC12 | 瑪莎拉蒂MC12 | マセラティMC12 | class:eu:s | body:supercar | pt:ice | discontinued · 2004–2005 | 基于法拉利Enzo的超级跑车,量产50台,2005年起称霸FIA GT锦标赛 |
| model:maserati:mc20 | Maserati MC20 | 玛莎拉蒂MC20 | 瑪莎拉蒂MC20 | マセラティMC20 | class:eu:s | body:supercar | pt:ice | current · 2020–present | 中置引擎超级跑车,搭载Nettuno V6,2020年发布;含敞篷版MC20 Cielo;后继车型MCPura计划2026年投产 |
| model:maserati:quattroporte | Maserati Quattroporte | 玛莎拉蒂总裁 | 瑪莎拉蒂Quattroporte | マセラティ クアトロポルテ | class:eu:e | body:sedan | pt:ice | discontinued · 1963–2023 | 品牌旗舰豪华轿车,1963年首发,历经六代(第六代2013–2023),2023年停产 |
| model:maserati:spyder | Maserati Spyder | 玛莎拉蒂Spyder | 瑪莎拉蒂Spyder | マセラティ スパイダー | class:eu:s | body:roadster | pt:ice | discontinued · 2001–2007 | 2001年推出的敞篷跑车,与Coupé同平台,2007年停产 |

## Maxus

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:maxus:6dc71abc43 | Staria Bull King | 星际牛魔王 | — | — | class:cn:a | body:pickup | pt:ice | current · 2023-present | 星际牛魔王(2023-),上汽大通星际皮卡越野版 |
| model:maxus:a778e68e73 | Staria | 星际 | — | — | class:cn:a | body:pickup | pt:ice | current · 2023-present | 星际(Staria,2023-),上汽大通皮卡系列 |
| model:maxus:d60 | Maxus D60 | D60 | D60 | — | class:cn:b | body:suv | pt:ice | current · 2019–present | 上汽大通MAXUS D60中型SUV(2019年上市) |
| model:maxus:d90 | Maxus D90 | D90 | D90 | — | class:cn:c | body:suv | pt:ice | current · 2017–present | 上汽大通MAXUS D90中大型SUV(2017年上市),硬派风格 |
| model:maxus:d90-pro | Maxus D90 Pro | D90 Pro | D90 Pro | — | class:cn:c | body:suv | pt:ice | current · 2019–present | 上汽大通MAXUS D90 Pro中大型SUV,D90的高性能/柴油版 |
| model:maxus:ev70 | New Path EV70 | 新途EV70 | — | — | class:cn:a | body:van | pt:bev | current · 2023-present | 新途EV70(2023-),上汽大通纯电轻客 |
| model:maxus:ev80 | New Path EV80 | 新途EV80 | — | — | class:cn:a | body:van | pt:bev | current · 2023-present | 新途EV80(2023-),上汽大通纯电轻客 |
| model:maxus:f98b217db7 | New Path Far Horizon | 新途远界 | — | — | class:cn:a | body:van | pt:ice | current · 2024-present | 新途远界(2024-),上汽大通轻客 |
| model:maxus:g10 | Maxus G10 | G10 | G10 | — | class:cn:mpv | body:mpv | pt:ice | current · 2014–present | 上汽大通MAXUS G10中大型MPV(2014年上市),G20前身 |
| model:maxus:g20 | Maxus G20 | G20 | G20 | — | class:cn:mpv | body:mpv | pt:ice | current · 2019–present | 上汽大通MAXUS G20中大型MPV(2019年上市),G10的升级换代车型 |
| model:maxus:g50 | Maxus G50 | G50 | G50 | — | class:cn:mpv | body:mpv | pt:ice | current · 2018–present | 上汽大通MAXUS G50紧凑型MPV(2018年上市),家用多用途 |
| model:maxus:g50-2 | G50 Plug-in Hybrid | G50插电混动 | — | — | class:cn:a | body:mpv | pt:phev | current · 2019-present | G50插电混动(2019-),上汽大通G50 MPV的插混版 |
| model:maxus:g70 | Maxus G70 | G70 | G70 | — | class:cn:mpv | body:mpv | pt:ice | current · 2023–present | 上汽大通MAXUS G70中型MPV(2023年上市) |
| model:maxus:g90 | Maxus G90 | G90 | G90 | — | class:cn:mpv | body:mpv | pt:ice | current · 2022–present | 上汽大通MAXUS G90大型MPV(2022年上市),旗舰MPV |
| model:maxus:istana | Istana | 伊思坦纳 | Istana | — | class:cn:mpv | body:van | pt:ice | discontinued · 2004–2010 | 伊思坦纳轻型客车/厢式车,基于奔驰MB100技术国产化(原上海汇众),与MAXUS同属上汽商用车体系;约2010年停产 |
| model:maxus:maxus-5 | MIFA 5 | 大家5 | — | — | class:cn:a | body:mpv | pt:bev | current · 2022-present | 大家5(MIFA 5,2022-),上汽大通纯电MPV |
| model:maxus:maxus-6 | MIFA 6 | 大家6 | — | — | class:cn:a | body:suv | pt:bev | current · 2022-present | 大家6(MIFA 6,2022-),上汽大通纯电SUV |
| model:maxus:maxus-7 | MIFA 7 | 大家7 | — | — | class:cn:a | body:mpv | pt:bev | current · 2023-present | 大家7(MIFA 7,2023-),上汽大通中型纯电MPV |
| model:maxus:maxus-eg10 | Maxus EG10 | 上汽大通MAXUS EG10 | — | — | class:cn:a | body:mpv | pt:bev | discontinued · 2016-2020 | EG10(2016-2020),上汽大通G10纯电版,2020年停产 |
| model:maxus:maxus-euniq-5 | Maxus EUNIQ 5 | 上汽大通MAXUS EUNIQ 5 | — | — | class:cn:a00 | body:mpv | pt:bev | current · 2020-present | EUNIQ 5(2020-),上汽大通MPV纯电/插混版 |
| model:maxus:maxus-euniq-6 | Maxus EUNIQ 6 | 上汽大通MAXUS EUNIQ 6 | — | — | class:cn:a00 | body:suv | pt:bev | current · 2020-present | EUNIQ 6(2020-),上汽大通纯电SUV |
| model:maxus:maxus-euniq-7 | Maxus EUNIQ 7 | 上汽大通MAXUS EUNIQ 7 | — | — | class:cn:a00 | body:mpv | pt:fcev | current · 2020-present | EUNIQ 7(2020-),上汽大通氢燃料电池MPV |
| model:maxus:maxus-ev | Staria EV | 星际EV | — | — | class:cn:a | body:pickup | pt:bev | current · 2023-present | 星际EV(2023-),上汽大通纯电皮卡 |
| model:maxus:maxus-g20 | MAXUS G20 RV | 上汽大通MAXUS G20房车 | — | — | class:cn:a | body:van | pt:ice | current · 2020-present | G20房车(2020-),基于G20的房车版 |
| model:maxus:maxus-mifa | MAXUS MIFA MIFA Hydrogen | 上汽大通MAXUS 大家MIFA氢 | — | — | class:cn:a | body:mpv | pt:fcev | current · 2022-present | 大家MIFA氢(2022-),上汽大通氢燃料电池MPV |
| model:maxus:maxus-rg10 | Maxus RG10 | 上汽大通MAXUS RG10 | — | — | class:cn:a | body:van | pt:ice | current · 2019-present | RG10(2019-),上汽大通房车(基于G10) |
| model:maxus:maxus-x | Staria X | 星际X | — | — | class:cn:a | body:pickup | pt:ice | current · 2024-present | 星际X(2024-),上汽大通皮卡 |
| model:maxus:mifa-9 | Maxus MIFA 9 | 大家9 | MIFA 9 | — | class:cn:mpv | body:mpv | pt:bev | current · 2021–present | 上汽大通MAXUS MIFA 9大型纯电MPV(2021年上市),2023年起中文名改为「大家9」 |
| model:maxus:t60 | Maxus T60 | T60 | T60 | — | class:cn:mpv | body:pickup | pt:ice | current · 2017–present | 上汽大通MAXUS T60皮卡(2017年上市) |
| model:maxus:t70 | Maxus T70 | 大通T70 | — | — | class:cn:a | body:pickup | pt:ice | current · 2019-present | 大通T70(2019-),上汽大通皮卡 |
| model:maxus:t90 | Maxus T90 | T90 | T90 | — | class:cn:mpv | body:pickup | pt:ice | current · 2021–present | 上汽大通MAXUS T90皮卡(2021年上市) |
| model:maxus:t90ev | Maxus T90EV | 大通T90EV | — | — | class:cn:a | body:pickup | pt:bev | current · 2021-present | 大通T90 EV(2021-),上汽大通纯电皮卡 |
| model:maxus:territory | Maxus Territory | 领地 | Territory | — | class:cn:c | body:suv | pt:ice | current · 2022–present | 上汽大通MAXUS领地中大型硬派越野SUV(2022年上市),提供柴油动力 |
| model:maxus:v70 | New Path V70 | 新途V70 | — | — | class:cn:a | body:van | pt:ice | current · 2023-present | 新途V70(2023-),上汽大通轻客 |
| model:maxus:v80 | Maxus V80 | V80 | V80 | — | class:cn:mpv | body:van | pt:ice | current · 2012–present | 上汽大通MAXUS V80轻客/厢式车(2012年上市);现款称「新途V80」;另有V80房车/旅居车改装版(约2015年起) |
| model:maxus:v80-2 | New Path V80 | 新途V80 | — | — | class:cn:a | body:van | pt:ice | current · 2023-present | 新途V80(2023-),上汽大通轻客(经典V80的延续) |
| model:maxus:v90 | Maxus V90 | V90 | V90 | — | class:cn:mpv | body:van | pt:ice | current · 2019–present | 上汽大通MAXUS V90轻客(2019年上市);现款称「新途V90」 |
| model:maxus:v90-2 | New Path V90 | 新途V90 | — | — | class:cn:a | body:van | pt:ice | current · 2023-present | 新途V90(2023-),上汽大通轻客(经典V90的延续) |
| model:maxus:x-suv | Staria X SUV | 星际X SUV | — | — | class:cn:a | body:suv | pt:ice | current · 2024-present | 星际X SUV(2024-),上汽大通SUV(星际X皮卡的SUV版) |
| model:maxus:x30 | Explorer X30 | 探索家X30 | — | — | class:cn:b | body:van | pt:ice | current · 2021-present | 探索家X30(2021-),上汽大通房车 |
| model:maxus:x50 | Explorer X50 | 探索家X50 | — | — | class:cn:a | body:van | pt:ice | current · 2021-present | 探索家X50(2021-),上汽大通房车 |

## Maybach

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:maybach:57-62 | Maybach 57/62 | 迈巴赫57/62 | Maybach 57/62 | マイバッハ57/62 | class:eu:f | body:limousine | pt:ice | discontinued · 2002–2013 | 梅赛德斯-奔驰复兴迈巴赫品牌后的超豪华轿车(57/62/S Landaulet等),2013年停产 |
| model:maybach:gls | Mercedes-Maybach GLS | 迈巴赫GLS | Maybach GLS | メルセデス・マイバッハGLS | class:eu:j | body:suv | pt:ice | current · 2020–present | 基于奔驰GLS的超豪华SUV(2020年上市) |
| model:maybach:s-class | Mercedes-Maybach S-Class | 迈巴赫S级 | Maybach S-Class | メルセデス・マイバッハSクラス | class:eu:f | body:sedan | pt:ice | current · 2015–present | 2014年起以「Mercedes-Maybach」子品牌运营,基于S级的超豪华版(S580/S680),含纯电EQS SUV迈巴赫版 |

## Mazda

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:mazda:az-1 | AZ-1 | AZ-1 | AZ-1 | AZ-1(エーゼットワン) | class:jp:kei | body:coupe | pt:ice | discontinued · 1992–1995 | 中置K-car鸥翼门跑车,与铃木Cara同源;官方历史资料库收录 |
| model:mazda:bongo | Bongo | — | Bongo | ボンゴ | class:eu:m | body:van | pt:ice | current · 1966–present | 厢式货车;2019年起为丰田Hiace贴牌;官方历史资料库收录 |
| model:mazda:bt-50 | Mazda BT-50 | 马自达BT-50 | Mazda BT-50 | BT-50 | class:us:pickup | body:pickup | pt:ice | current · 2006–present | 紧凑型皮卡;第三代起基于五十铃D-Max,东南亚/澳洲/中东市场 |
| model:mazda:capella | Capella | 马自达626 | Capella | カペラ | class:eu:d | body:sedan | pt:ice | discontinued · 1970–2002 | 中级车系,海外名626;Mazda6前身;官方历史资料库收录 |
| model:mazda:carol | Mazda Carol | 马自达Carol | Mazda Carol | キャロル | class:jp:kei | body:hatchback | pt:ice | current · 1962–present | 日本K-car;第二代起为铃木Alto贴牌车,1990-1994年曾以Autozam Carol销售 |
| model:mazda:chantez | Chantez | — | Chantez | シャンテ | class:jp:kei | body:hatchback | pt:ice | discontinued · 1972–1976 | 马自达首款K-car,自研两冲程;官方历史资料库收录 |
| model:mazda:cosmo-sports | Cosmo Sport | Cosmo(转子鼻祖) | Cosmo | コスモスポーツ | class:eu:s | body:sports | pt:ice | discontinued · 1967–1972 | 世界首款量产转子发动机跑车;官方历史资料库收录 |
| model:mazda:cx-3 | Mazda CX-3 | 马自达CX-3 | Mazda CX-3 | CX-3 | class:eu:j | body:crossover | pt:ice | current · 2015–present | 基于Mazda2的小型跨界SUV;日本2021年停售,北美2021年停产,仍在部分市场销售 |
| model:mazda:cx-30 | Mazda CX-30 | 马自达CX-30 | Mazda CX-30 | CX-30 | class:eu:j | body:crossover | pt:ice | current · 2019–present | 介于CX-3与CX-5之间的小型跨界SUV |
| model:mazda:cx-30-ev | CX-30 EV | CX-30 EV | — | — | class:cn:a | body:suv | pt:bev | current · 2021–present | CX-30 EV(2021-),长安马自达纯电SUV,中国市场特供 |
| model:mazda:cx-4 | Mazda CX-4 | 马自达CX-4 | Mazda CX-4 | CX-4 | class:eu:j | body:crossover | pt:ice | discontinued · 2016–2023 | 中国特供(一汽马自达),2023年前后停产 |
| model:mazda:cx-5 | Mazda CX-5 | 马自达CX-5 | Mazda CX-5 | CX-5 | class:eu:j | body:suv | pt:ice | current · 2012–present | 全球主力紧凑型SUV,大陆由长安马自达生产 |
| model:mazda:cx-50 | Mazda CX-50 | 马自达CX-50 | Mazda CX-50 | CX-50 | class:eu:j | body:suv | pt:ice | current · 2022–present | 北美/中国市场紧凑型SUV,与CX-5并存 |
| model:mazda:cx-60 | Mazda CX-60 | 马自达CX-60 | Mazda CX-60 | CX-60 | class:eu:j | body:suv | pt:phev | current · 2022–present | 基于纵置后驱平台的中型SUV,欧洲/亚太市场,提供PHEV与直六燃油 |
| model:mazda:cx-7 | CX-7 | CX-7 | CX-7 | CX-7 | class:eu:j | body:suv | pt:ice | discontinued · 2006–2012 | 马自达CX系列首款SUV;官方历史资料库收录 |
| model:mazda:cx-70 | Mazda CX-70 | 马自达CX-70 | Mazda CX-70 | CX-70 | class:eu:j | body:suv | pt:ice | current · 2024–present | CX-90的两排版,北美/澳洲市场 |
| model:mazda:cx-8 | Mazda CX-8 | 马自达CX-8 | Mazda CX-8 | CX-8 | class:eu:j | body:suv | pt:ice | current · 2017–present | 三排座中型SUV,亚太市场(日本/中国/澳洲) |
| model:mazda:cx-80 | Mazda CX-80 | 马自达CX-80 | Mazda CX-80 | CX-80 | class:eu:j | body:suv | pt:ice | current · 2024–present | CX-90的三排版,欧洲/亚太市场 |
| model:mazda:cx-9 | Mazda CX-9 | 马自达CX-9 | Mazda CX-9 | CX-9 | class:us:standard-suv | body:suv | pt:ice | discontinued · 2006–2023 | 三排座大型SUV,北美/中东市场;北美2023年款后停产(部分地区2024年清库),由CX-90接替 |
| model:mazda:cx-90 | Mazda CX-90 | 马自达CX-90 | Mazda CX-90 | CX-90 | class:us:standard-suv | body:suv | pt:ice | current · 2023–present | 旗舰三排SUV,基于纵置后驱平台,北美/中东/澳洲市场 |
| model:mazda:ez-6 | Mazda EZ-6 | 马自达EZ-6 | — | — | class:cn:b | body:sedan | pt:bev | current · 2024–present | EZ-6(2024-),长安马自达首款新能源轿车,基于深蓝SL03平台,含纯电与增程版 |
| model:mazda:ez-60 | Mazda EZ-60 | 马自达EZ-60 | — | — | class:cn:b | body:suv | pt:bev | current · 2025–present | EZ-60(2025-),长安马自达纯电SUV,基于深蓝S05平台 |
| model:mazda:familia | Familia | 马自达323/福美来 | Familia | ファミリア | class:eu:c | body:hatchback | pt:ice | discontinued · 1963–2003 | 重要家用车系,海外名323/Protégé;大陆海南马自达福美来为第八代;Mazda3前身;官方历史资料库收录 |
| model:mazda:flair | Mazda Flair | 马自达Flair | Mazda Flair | フレア | class:jp:kei | body:hatchback | pt:ice | current · 2012–present | 日本K-car;铃木Wagon R贴牌车,另有Flair Wagon(铃木Spacia贴牌)与Flair Crossover(铃木Hustler贴牌) |
| model:mazda:lantis | Mazda Lantis | 马自达Lantis | Mazda Lantis | ランティス | class:eu:c | body:hatchback | pt:ice | discontinued · 1991–1994 | Familia姊妹车;欧洲市场称323F,日本另有Cronos三厢版 |
| model:mazda:luce | Luce | — | Luce | ルーチェ | class:eu:e | body:sedan | pt:ice | discontinued · 1966–1991 | 豪华轿车,后期搭载转子发动机;海外名929;官方历史资料库收录 |
| model:mazda:mazda-2-2 | 2 Jinxiang | 2劲翔 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2008–2013 | 马自达2劲翔(2008-2013),Mazda2三厢版,长安马自达,2013年停产 |
| model:mazda:mazda2 | Mazda2 | 马自达2 | Mazda2 | MAZDA2 | class:eu:b | body:hatchback | pt:ice | current · 2002–present | 日本市场1996-2019年称Demio(デミオ),2019年全球统一MAZDA2;欧洲另有基于丰田Yaris的Mazda2 Hybrid |
| model:mazda:mazda3 | Mazda3 | 马自达3(昂克赛拉) | Mazda3 | MAZDA3 | class:eu:c | body:hatchback | pt:ice | current · 2003–present | 日本市场旧称Axela(アクセラ),2019年改名;大陆旧译昂克赛拉,另有三厢版 |
| model:mazda:mazda6 | Mazda6 | 马自达6(阿特兹) | Mazda6 | MAZDA6 | class:eu:d | body:sedan | pt:ice | discontinued · 2002–2025 | 日本市场旧称Atenza(アテンザ),大陆现款名阿特兹;2025年3月全球停产 |
| model:mazda:mazda8 | Mazda8 | 马自达8 | Mazda8 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2010–2016 | 中大型MPV,一汽马自达国产(海外对应Mazda MPV第三代),2016年前后停产 |
| model:mazda:millenia | Mazda Millenia | 马自达Millenia | Mazda Millenia | ミレーニア | class:eu:e | body:sedan | pt:ice | discontinued · 1993–2002 | 近豪华轿车;欧洲称Xedos 9,日本初期以Eunos 800销售 |
| model:mazda:mx-3 | Mazda MX-3 | 马自达MX-3 | Mazda MX-3 | MX-3 | class:eu:s | body:coupe | pt:ice | discontinued · 1990–1998 | 小型轿跑;日本市场以Autozam AZ-3/Eunos Presso销售 |
| model:mazda:mx-30 | Mazda MX-30 | 马自达MX-30 | Mazda MX-30 | MX-30 | class:eu:j | body:crossover | pt:bev | current · 2020–present | 马自达首款量产纯电动(另有转子增程版),基于CX-30,对开式车门 |
| model:mazda:mx-6 | Mazda MX-6 | 马自达MX-6 | Mazda MX-6 | MX-6 | class:eu:d | body:coupe | pt:ice | discontinued · 1988–1997 | Capella/626的轿跑版;日本市场称Capella C2 |
| model:mazda:premacy | Premacy | 马自达5 | Premacy | プレマシー | class:eu:m | body:mpv | pt:ice | discontinued · 1999–2015 | 紧凑MPV,海外名Mazda5;官方历史资料库收录 |
| model:mazda:roadster | MX-5 / Roadster | 马自达MX-5 | MX-5 | ロードスター | class:eu:s | body:roadster | pt:ice | current · 1989–present | 日本名Roadster;北美称MX-5 Miata,欧洲MX-5;全球最畅销双座敞篷跑车 |
| model:mazda:ruyi | Mazda6 | 马自达6(睿翼) | Mazda6 | — | class:cn:b | body:sedan | pt:ice | discontinued · 2009–2014 | 马自达6第二代在大陆的名称(一汽马自达),2009年上市,2014年由阿特兹(第三代)接替 |
| model:mazda:rx-7 | Mazda RX-7 | 马自达RX-7 | Mazda RX-7 | RX-7 | class:eu:s | body:sports | pt:ice | discontinued · 1978–2002 | 转子引擎跑车;日本市场初代/二代称Savanna RX-7 |
| model:mazda:rx-8 | Mazda RX-8 | 马自达RX-8 | Mazda RX-8 | RX-8 | class:eu:s | body:sports | pt:ice | discontinued · 2003–2012 | 转子引擎跑车,后门对开式四门设计 |
| model:mazda:savanna | Savanna | — | Savanna | サバンナ | class:eu:s | body:coupe | pt:ice | discontinued · 1971–1978 | 转子跑车,海外名RX-3;官方历史资料库收录 |
| model:mazda:sentia | Mazda Sentia | 马自达Sentia | Mazda Sentia | センティア | class:eu:e | body:sedan | pt:ice | discontinued · 1990–1998 | 旗舰轿车;海外市场称Mazda 929 |
| model:mazda:xingcheng | Mazda3 | 马自达3(星骋) | Mazda3 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2011–2014 | 马自达3第二代在大陆的名称(长安马自达),2011年上市,两厢/三厢均有;2014年由昂克赛拉(第三代)接替 |

## McLaren

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:mclaren:570s | McLaren 570S | 迈凯伦570S | 麥拉倫570S | マクラーレン570S | class:eu:s | body:supercar | pt:ice | discontinued · 2015–2021 | Sports Series入门系列,含570GT(2017–2021)与Spider版,2021年停产 |
| model:mclaren:600lt | McLaren 600LT | 迈凯伦600LT | 麥拉倫600LT | マクラーレン600LT | class:eu:s | body:supercar | pt:ice | discontinued · 2018–2021 | 570S的Longtail轻量化性能版,含Spider版(2019–2021) |
| model:mclaren:720s | McLaren 720S | 迈凯伦720S | 麥拉倫720S | マクラーレン720S | class:eu:s | body:supercar | pt:ice | discontinued · 2017–2023 | 第二代Super Series,2017年推出,2023年被750S取代 |
| model:mclaren:750s | McLaren 750S | 迈凯伦750S | 麥拉倫750S | マクラーレン750S | class:eu:s | body:supercar | pt:ice | current · 2023–present | Super Series旗舰,2023年发布,取代720S;含敞篷Spider版 |
| model:mclaren:765lt | McLaren 765LT | 迈凯伦765LT | 麥拉倫765LT | マクラーレン765LT | class:eu:s | body:supercar | pt:ice | discontinued · 2020–2023 | 720S的Longtail轻量化限量版,含Spider敞篷版(2021–2023) |
| model:mclaren:artura | McLaren Artura | 迈凯伦Artura | 麥拉倫Artura | マクラーレン アルトゥーラ | class:eu:s | body:supercar | pt:hev | current · 2022–present | 品牌首款量产混动超跑(V6双涡轮+电机),2021年发布、2022年交付;含敞篷Spider版 |
| model:mclaren:f1 | McLaren F1 | 迈凯伦F1 | 麥拉倫F1 | マクラーレンF1 | class:eu:s | body:supercar | pt:ice | discontinued · 1992–1998 | 三座中置V12传奇超跑,1990年代世界最快量产车,共生产106台 |
| model:mclaren:gt | McLaren GT | 迈凯伦GT | 麥拉倫GT | マクラーレンGT | class:eu:s | body:coupe | pt:ice | discontinued · 2019–2023 | 品牌首款GT系列车型,侧重长途舒适性,2023年停产,后续由GTS(2024–)接棒 |
| model:mclaren:mp4-12c | McLaren MP4-12C | 迈凯伦MP4-12C | 麥拉倫MP4-12C | マクラーレンMP4-12C | class:eu:s | body:supercar | pt:ice | discontinued · 2011–2014 | 2010年重启民用车的首款车型(后简称为12C),2014年被650S取代 |
| model:mclaren:p1 | McLaren P1 | 迈凯伦P1 | 麥拉倫P1 | マクラーレンP1 | class:eu:s | body:supercar | pt:hev | discontinued · 2013–2015 | Ultimate Series开山之作,混动Hypercar,限量375台,2015年结束生产 |
| model:mclaren:senna | McLaren Senna | 迈凯伦塞纳 | 麥拉倫Senna | マクラーレン セナ | class:eu:s | body:supercar | pt:ice | discontinued · 2018–2020 | Ultimate Series限量车型,致敬车神塞纳,限量500台;另有赛道版Senna GTR |
| model:mclaren:speedtail | McLaren Speedtail | 迈凯伦Speedtail | 麥拉倫Speedtail | マクラーレン スピードテール | class:eu:s | body:supercar | pt:hev | discontinued · 2019–2020 | 三座Hyper-GT,限量106台,最高时速403 km/h,致敬McLaren F1 |
| model:mclaren:w1 | McLaren W1 | 迈凯伦W1 | 麥拉倫W1 | マクラーレンW1 | class:eu:s | body:supercar | pt:hev | current · 2025–present | P1的继任者,混动Hypercar,2024年发布,限量399台,2025年起交付 |

## Mercedes-Benz

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:mercedes-benz:300-sl | 300 SL | 奔驰300SL | 賓士300SL | メルセデス・ベンツ 300SL | class:eu:s | body:coupe | pt:ice | discontinued · 1954–1963 | 鸥翼门经典传奇跑车;Roadster敞篷版(1957–1963)同属本系列 |
| model:mercedes-benz:a-class | A-Class | 奔驰A级 | 賓士A-Class | メルセデス・ベンツ Aクラス | class:eu:c | body:hatchback | pt:ice | current · 1997–present | 紧凑型两厢/三厢;中国版为北京奔驰A级(长轴三厢);AMG A35/A45属本系列 |
| model:mercedes-benz:amg-gt | AMG GT | 奔驰AMG GT | 賓士AMG GT | メルセデスAMG GT | class:eu:s | body:coupe | pt:ice | current · 2014–present | AMG独立开发的跑车(现款2023年换代);2026年推纯电版AMG GT |
| model:mercedes-benz:amg-gt-4-door | AMG GT 4-Door Coupé | 奔驰AMG GT四门轿跑 | 賓士AMG GT 4-Door Coupé | メルセデスAMG GT 4ドアクーペ | class:eu:e | body:sedan | pt:ice | current · 2018–present | AMG四门性能轿跑,2026年换代纯电 |
| model:mercedes-benz:b-class | B-Class | 奔驰B级 | 賓士B-Class | メルセデス・ベンツ Bクラス | class:eu:m | body:mpv | pt:ice | discontinued · 2005–2026 | 紧凑型MPV,2026年停产;纯电版EQB为其接替 |
| model:mercedes-benz:c-class | C-Class | 奔驰C级 | 賓士C-Class | メルセデス・ベンツ Cクラス | class:eu:d | body:sedan | pt:ice | current · 1993–present | 奔驰销量主力;中国版为北京奔驰C级(长轴);AMG C43/C63属本系列 |
| model:mercedes-benz:citan | Citan | 奔驰Citan | Citan | メルセデス・ベンツ シタン | class:eu:m | body:van | pt:ice | current · 2012–present | 紧凑型厢式车,与雷诺Kangoo同平台 |
| model:mercedes-benz:cla | CLA | 奔驰CLA | 賓士CLA | メルセデス・ベンツ CLA | class:eu:c | body:sedan | pt:ice | current · 2013–present | 紧凑型四门轿跑(含Shooting Brake猎装版);AMG CLA 45属本系列;2025年换代含纯电版 |
| model:mercedes-benz:cle | CLE | 奔驰CLE | 賓士CLE | メルセデス・ベンツ CLE | class:eu:s | body:coupe | pt:ice | current · 2023–present | C级轿跑与E级轿跑整合后的新车型,含Cabriolet敞篷版 |
| model:mercedes-benz:clk | CLK | 奔驰CLK | 賓士CLK | メルセデス・ベンツ CLK | class:eu:d | body:coupe | pt:ice | discontinued · 1997–2010 | E级平台的双门轿跑/敞篷,2010年停产 |
| model:mercedes-benz:cls | CLS | 奔驰CLS | 賓士CLS | メルセデス・ベンツ CLS | class:eu:e | body:sedan | pt:ice | discontinued · 2004–2023 | 四门轿跑开创者,2023年停产;AMG CLS 53属本系列 |
| model:mercedes-benz:e-class | E-Class | 奔驰E级 | 賓士E-Class | メルセデス・ベンツ Eクラス | class:eu:e | body:sedan | pt:ice | current · 1953–present | 中大型行政轿车,前身为奔驰180/W120等「Ponton」系列;中国版为北京奔驰E级(长轴);AMG E53/E63属本系列 |
| model:mercedes-benz:eqa | EQA | 奔驰EQA | 賓士EQA | メルセデス・ベンツ EQA | class:eu:c | body:suv | pt:bev | current · 2021–present | GLA的纯电版,中国已国产 |
| model:mercedes-benz:eqb | EQB | 奔驰EQB | 賓士EQB | メルセデス・ベンツ EQB | class:eu:c | body:suv | pt:bev | current · 2021–present | GLB的纯电版,中国已国产 |
| model:mercedes-benz:eqc | EQC | 奔驰EQC | 賓士EQC | メルセデス・ベンツ EQC | class:eu:c | body:suv | pt:bev | discontinued · 2019–2023 | 奔驰首款量产纯电SUV(北京奔驰国产),2023年停产 |
| model:mercedes-benz:eqe | EQE | 奔驰EQE | 賓士EQE | メルセデス・ベンツ EQE | class:eu:e | body:sedan | pt:bev | current · 2022–present | E级尺寸纯电轿车,中国已国产(EQE);AMG EQE属本系列 |
| model:mercedes-benz:eqe-suv | EQE SUV | 奔驰EQE SUV | 賓士EQE SUV | メルセデス・ベンツ EQE SUV | class:eu:e | body:suv | pt:bev | current · 2022–present | EQE的SUV版,中国已国产 |
| model:mercedes-benz:eqs | EQS | 奔驰EQS | 賓士EQS | メルセデス・ベンツ EQS | class:eu:f | body:sedan | pt:bev | current · 2021–present | S级尺寸纯电旗舰(掀背造型),中国已国产;迈巴赫EQS属本系列 |
| model:mercedes-benz:eqs-suv | EQS SUV | 奔驰EQS SUV | 賓士EQS SUV | メルセデス・ベンツ EQS SUV | class:eu:f | body:suv | pt:bev | current · 2022–present | EQS的SUV版;迈巴赫EQS SUV为其超豪华版本 |
| model:mercedes-benz:eqv | EQV | 奔驰EQV | 賓士EQV | メルセデス・ベンツ EQV | class:eu:m | body:mpv | pt:bev | current · 2020–present | V级/Vito的纯电版 |
| model:mercedes-benz:g-class | G-Class | 奔驰G级 | 賓士G-Class | メルセデス・ベンツ Gクラス | class:eu:j | body:suv | pt:ice | current · 1979–present | 硬派越野传奇「大G」;AMG G 63与纯电版EQG(2024起)属本系列 |
| model:mercedes-benz:gl-class | GL-Class | 奔驰GL级 | 賓士GL-Class | メルセデス・ベンツ GLクラス | class:eu:f | body:suv | pt:ice | discontinued · 2006–2015 | 全尺寸SUV,2015年改名GLS |
| model:mercedes-benz:gla | GLA | 奔驰GLA | 賓士GLA | メルセデス・ベンツ GLA | class:eu:c | body:suv | pt:ice | current · 2013–present | A级平台的紧凑型SUV,中国已国产;AMG GLA 35/45属本系列 |
| model:mercedes-benz:glb | GLB | 奔驰GLB | 賓士GLB | メルセデス・ベンツ GLB | class:eu:c | body:suv | pt:ice | current · 2019–present | 紧凑型7座SUV,中国已国产;AMG GLB 35属本系列 |
| model:mercedes-benz:glc | GLC | 奔驰GLC | 賓士GLC | メルセデス・ベンツ GLC | class:eu:d | body:suv | pt:ice | current · 2015–present | 中型豪华SUV;中国版为北京奔驰GLC(长轴);AMG GLC 43/63属本系列;另有GLC Coupe |
| model:mercedes-benz:gle | GLE | 奔驰GLE | 賓士GLE | メルセデス・ベンツ GLE | class:eu:j | body:suv | pt:ice | current · 1997–present | 中大型SUV,前身为M-Class(1997–2015);中国已国产;AMG GLE 53/63属本系列;另有GLE Coupe |
| model:mercedes-benz:glk | GLK | 奔驰GLK | 賓士GLK | メルセデス・ベンツ GLK | class:eu:c | body:suv | pt:ice | discontinued · 2008–2015 | 紧凑型SUV,中国北京奔驰曾国产,2015年由GLC接替 |
| model:mercedes-benz:gls | GLS | 奔驰GLS | 賓士GLS | メルセデス・ベンツ GLS | class:eu:f | body:suv | pt:ice | current · 2006–present | 全尺寸旗舰SUV,前身为GL-Class(2006–2015);迈巴赫GLS为其超豪华版本 |
| model:mercedes-benz:m-class | M-Class | 奔驰M级 | 賓士M-Class | メルセデス・ベンツ Mクラス | class:eu:j | body:suv | pt:ice | discontinued · 1997–2015 | 奔驰首款豪华SUV,2015年改名GLE |
| model:mercedes-benz:maybach-s-class | Maybach S-Class | 迈巴赫S级 | Maybach S-Class | マイバッハSクラス | class:eu:f | body:sedan | pt:ice | current · 2015–present | 梅赛德斯-迈巴赫子品牌旗舰轿车,基于S级(2014年迈巴赫品牌重启) |
| model:mercedes-benz:r-class | R-Class | 奔驰R级 | 賓士R-Class | メルセデス・ベンツ Rクラス | class:eu:m | body:mpv | pt:ice | discontinued · 2005–2017 | 大型豪华MPV,2017年停产 |
| model:mercedes-benz:s-class | S-Class | 奔驰S级 | 賓士S-Class | メルセデス・ベンツ Sクラス | class:eu:f | body:sedan | pt:ice | current · 1954–present | 奔驰旗舰豪华轿车(现款W223);迈巴赫S级(Maybach S-Class)为其超豪华版本 |
| model:mercedes-benz:sl | SL | 奔驰SL | 賓士SL | メルセデス・ベンツ SL | class:eu:s | body:roadster | pt:ice | current · 1954–present | 经典豪华敞篷跑车(现款由AMG主导);迈巴赫SL 680为其超豪华版本 |
| model:mercedes-benz:slc | SLC | 奔驰SLC | 賓士SLC | メルセデス・ベンツ SLC | class:eu:s | body:roadster | pt:ice | discontinued · 2011–2020 | 紧凑型硬顶敞篷跑车;原名SLK(1996–2010),2016年改名SLC,2020年停产 |
| model:mercedes-benz:sprinter | Sprinter | 斯宾特 | Sprinter | メルセデス・ベンツ スプリンター | class:eu:m | body:van | pt:ice | current · 1995–present | 大型厢式货车,北美亦由Freightliner/Dodge贴牌销售 |
| model:mercedes-benz:v-class | V-Class | 奔驰V级 | 賓士V-Class | メルセデス・ベンツ Vクラス | class:eu:m | body:mpv | pt:ice | current · 1996–present | 大型豪华MPV,为Vito的乘用版;前身为Viano(2003–2014) |
| model:mercedes-benz:viano | Viano | 唯雅诺 | Viano | メルセデス・ベンツ ビアノ | class:eu:m | body:mpv | pt:ice | discontinued · 2007–2016 | 中大型豪华MPV,福建奔驰生产销售,2016年停产;为V级的前代乘用版车型 |
| model:mercedes-benz:vito | Vito | 威霆 | Vito | メルセデス・ベンツ ビト | class:eu:m | body:van | pt:ice | current · 1996–present | 轻型商用车/厢式车,中国福建奔驰生产(威霆) |
| model:mercedes-benz:x-class | X-Class | 奔驰X级 | 賓士X-Class | メルセデス・ベンツ Xクラス | class:eu:j | body:pickup | pt:ice | discontinued · 2017–2020 | 奔驰唯一皮卡,基于日产纳瓦拉平台,2020年停产 |

## Mercury

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:mercury:cougar | Mercury Cougar | 水星Cougar | 水星Cougar | マーキュリー・クーガー | class:eu:s | body:coupe | pt:ice | discontinued · 1967–2002 | 经典Pony Car/轿跑(1967年上市),2002年停产 |
| model:mercury:grand-marquis | Mercury Grand Marquis | 水星Grand Marquis | 水星Grand Marquis | マーキュリー・グランドマーキス | class:us:large | body:sedan | pt:ice | discontinued · 1983–2011 | 品牌末代车型(北美出租车/礼宾车经典),2011年随品牌停产 |
| model:mercury:mountaineer | Mercury Mountaineer | 水星Mountaineer | 水星Mountaineer | マーキュリー・マウンテニア | class:us:standard-suv | body:suv | pt:ice | discontinued · 1997–2010 | 福特探险者姊妹车(豪华版SUV),2010年停产 |

## MG

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:mg:cyberster | MG Cyberster | 名爵Cyberster | MG Cyberster | — | class:eu:s | body:roadster | pt:bev | current · 2023–present | 纯电双座敞篷跑车(剪刀门),2023年上市,出口欧洲 |
| model:mg:gs | MG GS | 名爵锐腾 | MG GS | — | class:cn:a | body:suv | pt:ice | discontinued · 2015–2019 | 紧凑型SUV,2015年上市,海外名MG GS;2019年由名爵HS接替 |
| model:mg:gt | MG GT | 名爵锐行 | MG GT | — | class:cn:a | body:sedan | pt:ice | discontinued · 2014–2018 | 紧凑型轿车,基于MG5,海外名MG GT;2018年前后停产 |
| model:mg:hs | MG HS | 名爵HS | MG HS | エムジーHS | class:cn:a | body:suv | pt:ice | current · 2018–present | 紧凑型SUV,含插混版;2024年第二代(海外EHS) |
| model:mg:mg-tf | MG TF | 名爵TF | MG TF | エムジーTF | class:eu:s | body:roadster | pt:ice | discontinued · 2002–2005 | 中置后驱双座敞篷跑车,原MG Rover出品;南汽/上汽曾于2008年复产(名爵TF),最终2011年停产 |
| model:mg:mg3 | MG 3 | 名爵3 | MG 3 | エムジー3 | class:cn:a0 | body:hatchback | pt:ice | current · 2013–present | 小型两厢车;大陆名爵3已停售,海外MG3 Hybrid(2024)在欧洲销售 |
| model:mg:mg3sw | MG 3SW | 名爵3SW | MG 3SW | — | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2008–2014 | 小型跨界风格两厢车(上汽名爵),2014年前后停产 |
| model:mg:mg4 | MG4 EV | 名爵MG4 EV(海外名Mulan) | MG4 EV | エムジー4 | class:cn:a | body:hatchback | pt:bev | current · 2022–present | 纯电紧凑型两厢车(星云平台);大陆内销名「MG MULAN」,海外统一MG4 EV,2023年欧洲销冠级 |
| model:mg:mg5 | MG 5 | 名爵5 | MG 5 | エムジー5 | class:cn:a | body:sedan | pt:ice | current · 2020–present | 紧凑型轿车(第三代2020),含MG5天蝎座衍生(2022)与MG5 EV纯电旅行版(欧洲) |
| model:mg:mg6 | MG 6 | 名爵6 | MG 6 | エムジー6 | class:cn:a | body:sedan | pt:ice | current · 2010–present | 紧凑型轿车(大掀背造型),2010年首代上市,现款为第三代;含名爵6新能源插混版 |
| model:mg:mg7 | MG 7 | 名爵7 | MG 7 | — | class:cn:b | body:sedan | pt:ice | current · 2022–present | 中国特供中型轿跑轿车(2022年发布,2.0T),历史名号2007–2010 |
| model:mg:one | MG ONE | MG ONE | MG ONE | — | class:cn:a | body:suv | pt:ice | current · 2021–present | 全新紧凑型SUV,2021年12月上市,基于上汽SIGMA架构,燃油版1.5T |
| model:mg:pilot | MG Pilot | 名爵领航 | MG Pilot | — | class:cn:a | body:suv | pt:ice | current · 2020–present | 紧凑型SUV,2020年上市,海外名MG Pilot;含名爵领航新能源插混版 |
| model:mg:zs | MG ZS | 名爵ZS | MG ZS | エムジーZS | class:cn:a0 | body:suv | pt:ice | current · 2017–present | 小型SUV,2019年增纯电版MG ZS EV(欧洲热销) |

## MINI

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:mini:aceman | MINI Aceman | MINI Aceman | MINI Aceman | ミニ エースマン | class:eu:j | body:crossover | pt:bev | current · 2024–present | 纯电小型跨界车,定位介于Cooper与Countryman之间,2024年发布 |
| model:mini:clubman | MINI Clubman | MINI Clubman | MINI Clubman | ミニ クラブマン | class:eu:b | body:wagon | pt:ice | discontinued · 2007–2024 | 加长旅行版,双开尾门,两代(R55 2007–2014、F54 2015–2024),2024年停产 |
| model:mini:cooper | MINI Cooper | MINI | MINI | ミニ | class:eu:b | body:hatchback | pt:ice | current · 1959–present | 品牌核心车型:经典Mini 1959–2000,宝马时代2001年起;含One/Cooper S/JCW性能版、Convertible敞篷(2005–)与Cooper Electric纯电(2020–)等变体 |
| model:mini:countryman | MINI Countryman | MINI Countryman | MINI Countryman | ミニ カントリーマン | class:eu:j | body:crossover | pt:ice | current · 2010–present | 品牌首款跨界SUV,2010年推出;现款为第三代(U25,2023–),含纯电版Countryman Electric |
| model:mini:coupe | MINI Coupé | MINI Coupé | MINI Coupé | ミニ クーペ | class:eu:b | body:coupe | pt:ice | discontinued · 2012–2015 | 品牌首款双座三厢轿跑,2015年停产 |
| model:mini:jcw | MINI John Cooper Works | MINI JCW | MINI JCW | ミニ ジョン・クーパー・ワークス | class:eu:b | body:hatchback | pt:ice | current · 2015–present | John Cooper Works高性能系列(Cooper的JCW版本),中国市场2015年起随F56代引入,含JCW三门/五门及GP限量版等 |
| model:mini:paceman | MINI Paceman | MINI Paceman | MINI Paceman | ミニ ペースマン | class:eu:j | body:crossover | pt:ice | discontinued · 2013–2016 | Countryman的三门轿跑跨界版,2016年停产 |
| model:mini:roadster | MINI Roadster | MINI Roadster | MINI Roadster | ミニ ロードスター | class:eu:b | body:roadster | pt:ice | discontinued · 2012–2015 | Coupé的敞篷版,双座,2015年停产 |

## Mitsubishi

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:mitsubishi:1d562bab97 | Outlander Classic | 欧蓝德经典 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2004-2016 | 欧蓝德经典(2004-2016),老款欧蓝德同堂销售,2016年停产 |
| model:mitsubishi:2dee24d07f | Grandis | 格蓝迪 | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2003-2011 | 格蓝迪(Grandis,2003-2011),三菱中型MPV,中国曾进口,2011年停产 |
| model:mitsubishi:3000gt | 3000GT | 3000GT | 3000GT | GTO | class:eu:s | body:coupe | pt:ice | discontinued · 1991–1999 | 旗舰跑车;日本市场名GTO,北美3000GT,与道奇Stealth为姊妹车 |
| model:mitsubishi:355c76a706 | Zinger | 君阁 | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2008-2016 | 君阁(Zinger,2008-2016),东南三菱MPV(台湾中华三菱开发),2016年停产 |
| model:mitsubishi:360 | 360 | — | 360 | 三菱360 | class:jp:kei | body:sedan | pt:ice | discontinued · 1962–1970 | 三菱首款轿车,轻自动车规格;官方历史资料库收录 |
| model:mitsubishi:61c8c0ecac | Lingshen | 菱绅 | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2004-2008 | 菱绅(2004-2008),东南三菱MPV(源自三菱Space Wagon/Chariot),2008年停产 |
| model:mitsubishi:airtrek | Airtrek | 阿图柯AIRTREK | — | — | class:cn:a | body:suv | pt:bev | current · 2022-present | 阿图柯AIRTREK(2022-),广汽三菱纯电紧凑型SUV;与日产Ariya同平台 |
| model:mitsubishi:asx | ASX / RVR / Outlander Sport | 劲炫ASX | ASX | RVR | class:eu:j | body:crossover | pt:ice | current · 2010–present | 小型跨界SUV;日本名RVR,北美称Outlander Sport,欧洲/亚洲称ASX(大陆名劲炫);欧洲2022年款改为雷诺Captur贴牌 |
| model:mitsubishi:asx-2 | ASX (imported) | ASX劲炫(进口) | — | — | class:cn:a | body:suv | pt:ice | current · 2010-present | ASX劲炫(2010-),三菱紧凑型SUV;中国版由广汽三菱国产,本条含进口版 |
| model:mitsubishi:attrage | Attrage | Attrage | — | — | class:cn:a | body:sedan | pt:ice | current · 2012-present | Attrage(2012-),三菱东南亚市场入门三厢轿车(东南亚名Mirage G4同源) |
| model:mitsubishi:colt | Colt | Colt | Colt | コルト | class:eu:b | body:hatchback | pt:ice | discontinued · 1978–2014 | 小型车(1978-2002为Mirage/Lancer贴牌,2002-2014独立车型);2023-2025年欧洲短暂复活(雷诺Clio贴牌),2025年再度停产 |
| model:mitsubishi:debonair | Debonair | 迪宝尼(未引入) | Debonair | デボネア | class:eu:f | body:sedan | pt:ice | discontinued · 1964–1999 | 三菱旗舰豪华轿车(3代);官方历史资料库收录 |
| model:mitsubishi:delica-d5 | Delica D:5 | 得利卡D:5 | Delica | デリカD:5 | class:eu:m | body:minivan | pt:ice | current · 2007–present | 四驱MPV,日本市场;Delica车系自1968年起,大陆早期译名得利卡 |
| model:mitsubishi:delica-mini | Delica Mini | Delica Mini | Delica Mini | デリカミニ | class:jp:kei | body:minivan | pt:ice | current · 2023–present | K-car MPV,滑门,eK X Space的后继 |
| model:mitsubishi:diamante | Diamante | Diamante | Diamante | ディアマンテ | class:eu:e | body:sedan | pt:ice | discontinued · 1990–2005 | 旗舰轿车;澳洲版称Magna/Verada |
| model:mitsubishi:dignity | Dignity | Dignity | Dignity | ディグニティ | class:eu:f | body:sedan | pt:ice | discontinued · 1999–2016 | 超豪华轿车;第一代(1999-2001)基于现代Grandeur,第二代(2012-2016)为日产Cima贴牌 |
| model:mitsubishi:dingo | Dingo | — | Dingo | ディンゴ | class:eu:b | body:minivan | pt:ice | discontinued · 1999–2003 | 小型滑门MPV;官方历史资料库收录 |
| model:mitsubishi:eclipse | Eclipse | Eclipse | Eclipse | エクリプス | class:eu:s | body:coupe | pt:ice | discontinued · 1989–2011 | 北美市场轿跑,四代车型;车名2017年用于跨界SUV Eclipse Cross |
| model:mitsubishi:eclipse-cross | Eclipse Cross | 奕歌 | Eclipse Cross | エクリプスクロス | class:eu:j | body:crossover | pt:phev | current · 2017–present | 紧凑型跨界SUV;大陆官方名奕歌(广汽三菱),提供PHEV版 |
| model:mitsubishi:ek-space | eK Space | eK Space | eK Space | eKスペース | class:jp:kei | body:minivan | pt:ice | current · 2014–present | K-car MPV,滑门,与日产经NMKV共同开发 |
| model:mitsubishi:ek-wagon | eK Wagon | eK Wagon | eK Wagon | eKワゴン | class:jp:kei | body:hatchback | pt:ice | current · 2001–present | K-car,与日产经NMKV共同开发;跨界版称eK X,纯电版eK X EV(2022-) |
| model:mitsubishi:fadis | Fadis | 风迪思 | Fadis | — | class:cn:a | body:sedan | pt:ice | discontinued · 2013–2016 | 东南三菱国产紧凑轿车,与翼神为姊妹车(共用Lancer EX平台);2016年停产 |
| model:mitsubishi:fto | FTO | FTO | FTO | FTO(エフティーオー) | class:eu:s | body:coupe | pt:ice | discontinued · 1993–1998 | 前驱轿跑,日本市场,1994年日本年度车 |
| model:mitsubishi:galant | Galant | 戈蓝 | Galant | ギャラン | class:cn:b | body:sedan | pt:ice | discontinued · 1969–2012 | 中型轿车;大陆由东南汽车生产戈蓝;澳洲版称380(2005-2008) |
| model:mitsubishi:grand-lancer | GRAND LANCER | GRAND LANCER | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2016-2021 | Grand Lancer(2016-2021),台湾中华三菱国产的Lancer改款,2021年停产 |
| model:mitsubishi:i | i | 三菱i | i | 三菱i(アイ) | class:jp:kei | body:hatchback | pt:ice | discontinued · 2006–2013 | 后中置引擎K-car,i-MiEV前身;官方历史资料库收录 |
| model:mitsubishi:i-miev | i-MiEV | i-MiEV | i-MiEV | i-MiEV(アイ・ミーブ) | class:jp:kei | body:hatchback | pt:bev | discontinued · 2009–2021 | 世界首款量产纯电动车之一,基于轻自动车i;海外称Mitsubishi i-MiEV |
| model:mitsubishi:jeep | Mitsubishi Jeep | 三菱Jeep | — | — | class:cn:a | body:suv | pt:ice | discontinued · 1953-1998 | 三菱Jeep(1953-1998),三菱与Willys合作生产的越野车,1998年停产 |
| model:mitsubishi:l200 | Mitsubishi L200 | 三菱L200 | — | — | class:cn:a | body:pickup | pt:ice | current · 1978-present | L200(1978-),三菱中型皮卡;北美/欧洲部分地区名Triton |
| model:mitsubishi:lancer | Lancer | 蓝瑟 | Lancer | ランサー | class:cn:a | body:sedan | pt:ice | discontinued · 1973–2019 | 紧凑型轿车;大陆由东南汽车合资生产菱帅/蓝瑟,台湾名Lancer Fortis/Grand Lancer;2017年后停产 |
| model:mitsubishi:lancer-evolution | Lancer Evolution | EVO(蓝瑟EVO) | Lancer Evolution | ランサーエボリューション | class:eu:s | body:sedan | pt:ice | discontinued · 1992–2016 | WRC冠军血统的高性能四驱轿车,共十代,俗称EVO;2016年停产 |
| model:mitsubishi:lancer-ex | Lancer EX | 翼神 | Lancer EX | ランサーEX | class:cn:a | body:sedan | pt:ice | discontinued · 2009–2016 | 东南三菱国产紧凑轿车(官方名Lancer EX,与蓝瑟同属Lancer车系);2016年随东南三菱业务收缩停产 |
| model:mitsubishi:minica | Minica | Minica | Minica | ミニカ | class:jp:kei | body:hatchback | pt:ice | discontinued · 1962–2011 | 三菱最长寿K-car车系之一(6代);官方历史资料库收录 |
| model:mitsubishi:minicab | Minicab | Minicab | Minicab | ミニキャブ | class:jp:kei | body:kei-truck | pt:ice | current · 1966–present | K-car轻卡/厢式车;现为铃木Carry/Every贴牌,另有纯电版Minicab EV(印尼称L100) |
| model:mitsubishi:mirage | Mirage / Space Star | Mirage | Mirage | ミラージュ | class:eu:b | body:hatchback | pt:ice | current · 2012–present | 小型车;1978年Mirage名首发,现款为2012年复活的第六代;欧洲称Space Star,另有三厢版Mirage G4/Attrage |
| model:mitsubishi:mirage-g4 | Mirage G4 | Mirage G4 | — | — | class:cn:a | body:sedan | pt:ice | current · 2013-present | Mirage G4(2013-),Mirage的三厢版,东南亚市场 |
| model:mitsubishi:mitsubishi-ek-2 | Mitsubishi eK | 三菱eK | — | — | class:cn:a | body:hatchback | pt:ice | current · 2001-present | 三菱eK(2001-),三菱K-car系列;日产OEM名eK X/eK Space |
| model:mitsubishi:mitsubishi-g4 | Mitsubishi G4 | 三菱G4 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2012-2019 | 三菱G4(2012-2019),Mirage G4的菲律宾市场名,2019年停产 |
| model:mitsubishi:outlander | Outlander | 欧蓝德 | Outlander | アウトランダー | class:eu:j | body:suv | pt:phev | current · 2001–present | 紧凑型SUV;日本初代称Airtrek(エアトレック),2003年起用Outlander名;现款提供PHEV,大陆广汽三菱生产 |
| model:mitsubishi:pajero | Pajero | 帕杰罗 | Pajero | パジェロ | class:eu:j | body:suv | pt:ice | discontinued · 1982–2021 | 经典越野车(1981年首发,1982年量产);北美/西语市场称Montero,俗称山猫;2021年停产,官方宣布将基于新一代Triton复活 |
| model:mitsubishi:pajero-io | Pajero iO | 帕杰罗IO | Pajero iO | パジェロイオ | class:eu:j | body:suv | pt:ice | discontinued · 1998–2008 | 小型越野SUV,海外名Montero iO;官方历史资料库收录 |
| model:mitsubishi:pajero-mini | Pajero Mini | 帕杰罗迷你 | Pajero Mini | パジェロミニ | class:jp:kei | body:suv | pt:ice | discontinued · 1994–2012 | K-car越野车,源自Minica平台;官方历史资料库收录 |
| model:mitsubishi:pajero-sport | Pajero Sport | 帕杰罗·劲畅 | Pajero Sport | パジェロスポーツ | class:eu:j | body:suv | pt:ice | current · 1996–present | 基于Triton皮卡的越野SUV;北美/西语市场称Montero Sport,英国称Shogun Sport |
| model:mitsubishi:proudia | Proudia | Proudia | Proudia | プロウディア | class:eu:f | body:sedan | pt:ice | discontinued · 1999–2016 | 豪华轿车;第一代(1999-2001)基于现代Equus,第二代(2012-2016)为日产Fuga贴牌 |
| model:mitsubishi:rvr | RVR | — | RVR | RVR(アールブイアール) | class:eu:j | body:suv | pt:ice | discontinued · 1991–2002 | 小型SUV,1991年首发;2010年起海外RVR指ASX;官方历史资料库收录 |
| model:mitsubishi:sigma | Sigma | — | Sigma | シグマ | class:eu:e | body:sedan | pt:ice | discontinued · 1976–1996 | 中大型轿车,Galant平台高级版;官方历史资料库收录 |
| model:mitsubishi:starion | Starion | Starion | Starion | スタリオン | class:eu:s | body:coupe | pt:ice | discontinued · 1982–1989 | 1980年代涡轮增压轿跑;北美称Starion/Conquest(克莱斯勒贴牌) |
| model:mitsubishi:super-height-k-wagon | SUPER HEIGHT K-WAGON | SUPER HEIGHT K-WAGON | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2002-2014 | Super Height K-Wagon(2002-2014),三菱高顶K-car,2014年停产 |
| model:mitsubishi:toppo | Toppo | — | Toppo | トッポ | class:jp:kei | body:van | pt:ice | discontinued · 1990–2004 | 高顶K-car厢式车;官方历史资料库收录 |
| model:mitsubishi:triton | Triton / L200 | Triton | Triton | トライトン | class:us:pickup | body:pickup | pt:ice | current · 1978–present | 中型皮卡;1978年L200名首发,东南亚/欧洲称L200,南美称Strada |
| model:mitsubishi:xpander | Xpander | Xpander | Xpander | エクスパンダー | class:eu:m | body:mpv | pt:ice | current · 2017–present | 三排座MPV,印尼/东南亚及新兴市场;跨界版Xpander Cross(2019-) |

## Morgan

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:morgan:3-wheeler | Morgan 3 Wheeler | 摩根3 Wheeler | Morgan 3 Wheeler | モーガン・スリーウィーラー | class:eu:s | body:roadster | pt:ice | discontinued · 2011–2021 | 三轮复古敞篷跑车(2011年复兴,2021年停产) |
| model:morgan:plus-four | Morgan Plus Four | 摩根Plus Four | Morgan Plus Four | モーガン・プラスフォー | class:eu:s | body:roadster | pt:ice | current · 2020–present | 经典手工打造敞篷跑车(宝马2.0T),2020年换代 |
| model:morgan:plus-six | Morgan Plus Six | 摩根Plus Six | Morgan Plus Six | モーガン・プラスシックス | class:eu:s | body:roadster | pt:ice | current · 2019–present | 基于全新CX铝平台(宝马3.0T直六),品牌最快量产车 |

## Neta

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:neta:aya | Neta AYA | 哪吒AYA | Neta AYA(未导入) | — | class:cn:a0 | body:hatchback | pt:bev | current · 2023–present | 哪吒V改款车型(2023年上市) |
| model:neta:gt | Neta GT | 哪吒GT | Neta GT(未导入) | — | class:eu:s | body:sports | pt:bev | current · 2023–present | 国产纯电双门跑车(2023年上市) |
| model:neta:l | Neta L | 哪吒L | Neta L(未导入) | — | class:cn:b | body:suv | pt:erev | current · 2024–present | 中大型家用SUV(2024年上市,增程/纯电) |
| model:neta:s | Neta S | 哪吒S | Neta S(未导入) | — | class:cn:c | body:sedan | pt:bev | current · 2022–present | 中大型纯电轿跑(2022年上市,纯电/增程) |
| model:neta:v | Neta V | 哪吒V | Neta V(未导入) | — | class:cn:a0 | body:suv | pt:bev | current · 2020–present | 入门纯电小型SUV(2020年上市,海外亦销售) |
| model:neta:x | Neta X | 哪吒X | Neta X(未导入) | — | class:cn:a | body:suv | pt:bev | current · 2023–present | 「云河平台」首款车型,紧凑型纯电SUV(2023年上市,哪吒U继任) |

## NIO

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:nio:ec6 | EC6 | EC6 | EC6(未导入) | — | class:cn:b | body:suv | pt:bev | current · 2020–present | 蔚来中型纯电轿跑SUV;初代2020,2023年第二代换代 |
| model:nio:ec7 | EC7 | EC7 | EC7(未导入) | — | class:cn:c | body:suv | pt:bev | current · 2023–present | 蔚来中大型纯电轿跑SUV(旗舰轿跑) |
| model:nio:es6 | ES6 | ES6 | ES6(未导入) | — | class:cn:b | body:suv | pt:bev | current · 2019–present | 蔚来中型纯电SUV;初代2019,2023年第二代换代;2023年起欧洲市场更名EL6 |
| model:nio:es7 | ES7 | ES7 | ES7(未导入) | — | class:cn:c | body:suv | pt:bev | current · 2022–present | 蔚来中大型纯电SUV;2023年起欧洲市场更名EL7 |
| model:nio:es8 | ES8 | ES8 | ES8(未导入) | — | class:cn:c | body:suv | pt:bev | current · 2018–present | 蔚来首款量产车,中大型纯电SUV(6/7座);初代2018,2022年第二代;2023年起欧洲市场更名EL8 |
| model:nio:et5 | ET5 | ET5 | ET5(未导入) | — | class:cn:b | body:sedan | pt:bev | current · 2022–present | 蔚来中型纯电轿车(NT2.0平台),中文名直接用ET5;日本市场未导入 |
| model:nio:et5t | ET5 Touring | ET5T(旅行版) | ET5 Touring(未导入) | — | class:cn:b | body:wagon | pt:bev | current · 2023–present | 蔚来ET5旅行版(猎装车),中国市场称ET5T |
| model:nio:et7 | ET7 | ET7 | ET7(未导入) | — | class:cn:c | body:sedan | pt:bev | current · 2022–present | 蔚来旗舰中大型纯电轿车(5.1米级) |
| model:nio:firefly | Firefly | 萤火虫 | Firefly(未导入) | — | class:cn:a0 | body:crossover | pt:bev | current · 2025–present | 蔚来第三品牌「firefly 萤火虫」首款车型,2024年12月NIO Day发布、2025年4月上市;约4米级小型纯电跨界车,欧洲市场同名Firefly |

## Nissan

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:nissan:350z | Nissan 350Z | 日产350Z | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 2002-2008 | 350Z(Z33,2002-2008),日产Z系列跑车,2008年由370Z接替 |
| model:nissan:370z | Nissan 370Z | 日产370Z | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 2008-2020 | 370Z(Z34,2008-2020),日产Z系列跑车,2020年停产,后继Z(400Z) |
| model:nissan:46ea844fcf | Bluebird Sylphy | 蓝鸟·印象 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2015-2020 | 蓝鸟·印象(2015-2020),东风日产紧凑型轿车(LANNA),2020年停产 |
| model:nissan:4a857eaca8 | March | 玛驰 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 1982-2022 | 玛驰(March,1982-2022),日产微型车(欧洲名Micra),中国曾国产(2010-2015),2022年停产 |
| model:nissan:982b7a329a | Civilian | 碧莲 | — | — | class:cn:a | body:van | pt:ice | current · 1971-present | 碧莲(Civilian,1971-),日产中巴客车,中国以进口形式销售 |
| model:nissan:altima | Altima | Altima | Altima | アルティマ | class:cn:b | body:sedan | pt:ice | current · 1992–present | 北美/中东主力中型轿车;2013 年起与 Teana 合并为全球同一车型 |
| model:nissan:ariya | Ariya | 艾睿雅 | Ariya | アリア | class:eu:j | body:crossover | pt:bev | current · 2020–present | 纯电紧凑跨界 SUV;大陆东风日产国产 |
| model:nissan:armada | Armada | Armada | Armada | アルマーダ | class:us:standard-suv | body:suv | pt:ice | current · 2003–present | 北美全尺寸 SUV,与 Patrol 同平台 |
| model:nissan:b19701155d | Bluebird Classic | 蓝鸟经典 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2000-2004 | 蓝鸟经典(2000-2004),日产蓝鸟(U13)中国国产版,2004年停产 |
| model:nissan:be-1 | Be-1 | Be-1 | Be-1 | ビー1 | class:eu:b | body:hatchback | pt:ice | discontinued · 1987–1988 | 「Pike Cars」复古个性车系列第一作,限量生产(参考维基) |
| model:nissan:bluebird | Bluebird | 蓝鸟 | Bluebird(青鳥) | ブルーバード | class:cn:a | body:sedan | pt:ice | discontinued · 1957–2001 | 日产经典家轿,精神后继为 Sylphy;大陆「蓝鸟」现用于 LANNIA 车系 |
| model:nissan:c811ab570a | Sylphy EV | 轩逸·纯电 | — | — | class:cn:a | body:sedan | pt:bev | current · 2018-present | 轩逸·纯电(2018-),东风日产轩逸纯电版 |
| model:nissan:caravan | Caravan / Urvan | Caravan | Caravan | キャラバン | class:eu:m | body:van | pt:ice | current · 1973–present | 日产最长寿商用车系之一,现售;欧洲/亚洲称 Urvan;姊妹车 Homy(1973–1997 前后)(参考维基) |
| model:nissan:cedric | Cedric | 公爵 | Cedric | セドリック | class:cn:c | body:sedan | pt:ice | discontinued · 1960–2004 | 日产行政级轿车,与姊妹车 Gloria 同系;大陆进口曾称「公爵」 |
| model:nissan:cefiro | Cefiro | 风度 | Cefiro(風度) | セフィーロ | class:cn:b | body:sedan | pt:ice | discontinued · 1988–2003 | 台湾裕隆国产经典中型车;后继 Teana;北美以英菲尼迪 I30/I35 销售 |
| model:nissan:cherry | Cherry | Cherry | Cherry | チェリー | class:eu:b | body:hatchback | pt:ice | discontinued · 1970–1986 | 70 年代小型车,后继 Pulsar;北美以 Datsun 100A/F-10 销售(参考维基) |
| model:nissan:cima | Cima | Cima | Cima | シーマ | class:cn:d | body:sedan | pt:ice | discontinued · 1988-2010 | Cima(1988-2010),日产豪华旗舰轿车,北美以英菲尼迪Q45销售,2010年停产后2012年以Skyline高级版复产 |
| model:nissan:cube | Cube | Cube | Cube | キューブ | class:eu:b | body:hatchback | pt:ice | discontinued · 1998–2019 | 不对称造型的日本小型箱式车,设计经典 |
| model:nissan:d22 | Nissan D22 | 日产D22 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 1997-2015 | 日产D22(1997-2015),郑州日产Navara前身皮卡,2015年停产 |
| model:nissan:datsun-go | Datsun Go | Datsun Go | Datsun Go | ダットサン・ゴー | class:eu:a | body:hatchback | pt:ice | discontinued · 2014–2022 | Datsun 品牌 2013 年复活后的新兴市场入门车,印度/印尼生产;另有 Go+ 与 redi-Go(参考维基) |
| model:nissan:datsun-truck | Datsun Truck | Datsun 皮卡 | Datsun Truck | ダットサントラック | class:us:pickup | body:pickup | pt:ice | discontinued · 1955–1997 | Datsun 时代皮卡系列;1955–1986 以 Datsun 品牌销售,1986.5–1997 以 Hardbody(D21)名号延续;后继 Frontier/Navara(参考维基) |
| model:nissan:dayz | Dayz | Dayz | Dayz | デイズ | class:jp:kei | body:hatchback | pt:ice | current · 2013–present | 日产与三菱 NMKV 合资开发的轻自动车(K-car),姊妹车三菱 eK;现售(参考维基) |
| model:nissan:e97300071d | Grand Livina | 骏逸 | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2006-2013 | 骏逸(Grand Livina,2006-2013),日产紧凑型MPV,郑州日产生产,2013年停产 |
| model:nissan:elgrand | Elgrand | Elgrand | Elgrand | エルグランド | class:eu:m | body:minivan | pt:ice | current · 1997–present | 日产旗舰 MPV,主要面向日本及亚洲市场;2026 年换代 |
| model:nissan:figaro | Figaro | Figaro | Figaro | フィガロ | class:eu:b | body:convertible | pt:ice | discontinued · 1991 | Pike Cars 复古车,1991 年仅生产约 2 万台,发售时抽签抢购(参考维基) |
| model:nissan:frontier | Frontier | Frontier | Frontier | フロンティア | class:us:pickup | body:pickup | pt:ice | current · 1997–present | 北美中型皮卡;原为 Navara 北美版,D41 起为独立车型 |
| model:nissan:frontier-pro | Frontier Pro | 锋坦Frontier Pro | — | — | class:cn:a | body:pickup | pt:ice | current · 2025-present | 锋坦Frontier Pro(2025-),郑州日产中型皮卡(汽油/柴油) |
| model:nissan:frontier-pro-phev | Frontier Pro Frontier Pro PHEV | 锋坦Frontier Pro PHEV | — | — | class:cn:a | body:pickup | pt:phev | current · 2026-present | 锋坦Frontier Pro PHEV(2026-),郑州日产皮卡插混版 |
| model:nissan:fuga | Fuga | 风雅 | Fuga(風雅) | フーガ | class:cn:c | body:sedan | pt:ice | discontinued · 2004–2022 | 日产行政级 FR 轿车,北美以英菲尼迪 M/Q70 销售(参考维基) |
| model:nissan:gloria | Gloria | Gloria(大陆无通行译名) | Gloria | グロリア | class:cn:c | body:sedan | pt:ice | discontinued · 1959-2004 | Gloria(1959-2004),日产行政级轿车(承Prince血脉),与Cedric为姊妹车,2004年停产,后继Fuga |
| model:nissan:gt-r | GT-R | GT-R(战神) | GT-R | GT-R(ジーティーアール) | class:eu:s | body:sports | pt:ice | discontinued · 2007–2025 | 独立车系的现代 GT-R(R35);历史源自 Skyline GT-R(1968–2002);2025 年停产 |
| model:nissan:juke | Juke | Juke | Juke | ジューク | class:eu:b | body:crossover | pt:ice | current · 2010–present | 个性化小型跨界;欧洲/澳洲在售;中国曾进口无中文名 |
| model:nissan:kicks | Kicks | 劲客 | Kicks | キックス | class:eu:b | body:crossover | pt:ice | current · 2016–present | 小型跨界 SUV;大陆东风日产曾国产劲客;部分市场有 e-POWER |
| model:nissan:laurel | Laurel | Laurel | Laurel | ローレル | class:cn:b | body:sedan | pt:ice | discontinued · 1968–2002 | 日系运动取向行政轿车,前置后驱 |
| model:nissan:leaf | Leaf | 聆风 | Leaf | リーフ | class:eu:c | body:hatchback | pt:bev | current · 2010–present | 全球最畅销纯电车之一;2025 年换代(ZE2)由掀背改为紧凑跨界 SUV |
| model:nissan:leopard | Leopard | Leopard | Leopard | レパード | class:cn:c | body:coupe | pt:ice | discontinued · 1980–1999 | 日产豪华轿跑,北美以英菲尼迪 J30 销售(参考维基) |
| model:nissan:livina | Livina | 骊威 | Livina | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2007–2020 | 东风日产紧凑两厢/MPV,2020年停产 |
| model:nissan:magnite | Nissan MAGNITE | 日产MAGNITE | — | — | class:cn:a | body:suv | pt:ice | current · 2020-present | MAGNITE(2020-),日产印度市场小型SUV |
| model:nissan:march | March / Micra | 玛驰(大陆已停) | March | マーチ | class:eu:b | body:hatchback | pt:ice | current · 1982–present | 欧洲称 Micra;大陆东风日产曾国产「玛驰」已停;拉美继续生产旧款;2025 年 Micra 换代纯电 |
| model:nissan:maxima | Maxima | 西玛 | Maxima | マキシマ | class:us:large | body:sedan | pt:ice | discontinued · 1980–2023 | 北美前驱大型轿车;大陆东风日产 2016 年国产「西玛」;2023 年全球停产 |
| model:nissan:murano | Murano | 楼兰 | Murano | ムラーノ | class:eu:j | body:crossover | pt:ice | current · 2002–present | 中型跨界 SUV;大陆东风日产曾国产称「楼兰」 |
| model:nissan:navara | Navara | 纳瓦拉 | Navara | ナバラ | class:us:pickup | body:pickup | pt:ice | current · 1985–present | 全球市场中型皮卡;郑州日产国产称「纳瓦拉」;北美对应 Frontier |
| model:nissan:nissan-n6 | Nissan N6 | 日产N6 | — | — | class:cn:a | body:sedan | pt:bev | current · 2025-present | 日产N6(2025-),东风日产中国特供纯电轿车 |
| model:nissan:nissan-n7 | Nissan N7 | 日产N7 | — | — | class:cn:a | body:sedan | pt:bev | current · 2025-present | 日产N7(2025-),东风日产中国特供纯电轿车 |
| model:nissan:nissan-zn | ZN Van | ZN厢式车 | — | — | class:cn:b | body:van | pt:ice | discontinued · 2005-2015 | ZN厢式车(2005-2015),郑州日产轻型厢式车 |
| model:nissan:note | Note | Note | Note | ノート | class:eu:b | body:hatchback | pt:ice | current · 2004–present | 日本市场小型两厢车;现款主打 e-POWER 混动,仅右舵生产 |
| model:nissan:nv200 | NV200 / e-NV200 | NV200 | NV200 | NV200バネット | class:eu:m | body:van | pt:ice | discontinued · 2009–2021 | 全球小型厢式车,日本 2011–2021 销售;含纯电版 e-NV200(参考维基) |
| model:nissan:nv200-2 | Nissan NV200 | 日产NV200 | — | — | class:cn:a | body:van | pt:ice | current · 2009-present | NV200(2009-),日产紧凑型厢式车,郑州日产生产;2020年停产Evalia版 |
| model:nissan:nv300 | Nissan NV300 | 日产NV300 | — | — | class:cn:a | body:van | pt:ice | discontinued · 2016-2022 | NV300(2016-2022),雷诺Trafic贴牌,欧洲市场,2022年停产 |
| model:nissan:nv3500 | Nissan NV3500 | 日产NV3500 | — | — | class:cn:d | body:van | pt:ice | discontinued · 2011-2021 | NV3500(2011-2021),日产北美大型厢式车(与NV2500/NV1500同系),2021年停产 |
| model:nissan:nx8 | Nissan NX8 | 日产NX8 | — | — | class:cn:a | body:suv | pt:erev | current · 2026-present | 日产NX8(2026-),东风日产中国特供中大型SUV(增程/纯电) |
| model:nissan:paladin | Paladin | 帕拉丁 | Paladin | — | class:cn:b | body:suv | pt:ice | discontinued · 2003–2014 | 郑州日产国产硬派SUV,基于Terrano/Pathfinder平台,2014年前后停产 |
| model:nissan:pao | Pao | Pao | Pao | パオ | class:eu:b | body:hatchback | pt:ice | discontinued · 1989–1991 | Pike Cars 复古车第二作,限量约 5.2 万台(参考维基) |
| model:nissan:pathfinder | Pathfinder | 探路者 | Pathfinder | パスファインダー | class:eu:j | body:suv | pt:ice | current · 1985–present | 三排中型 SUV;初代为硬派越野,现为城市家用;大陆东风日产 2023 年起国产「探路者」 |
| model:nissan:patrol | Patrol | 途乐 | Patrol | パトロール | class:eu:j | body:suv | pt:ice | current · 1951–present | 日产最悠久车系,非承载式全尺寸越野 SUV;大陆进口称「途乐」;2027 年起在日本销售 |
| model:nissan:president | President | President | President | プレジデント | class:cn:d | body:sedan | pt:ice | discontinued · 1965–2010 | 日产旗舰豪华轿车;北美以英菲尼迪 Q45 销售 |
| model:nissan:primera | Primera | Primera | Primera | プリメーラ | class:cn:b | body:sedan | pt:ice | discontinued · 1990–2008 | 日产欧洲战略车型,英国桑德兰工厂生产;北美以英菲尼迪 G20 销售(参考维基) |
| model:nissan:pulsar | Pulsar | Pulsar | Pulsar | パルサー | class:cn:a | body:hatchback | pt:ice | discontinued · 1978–2005 | 日产前驱紧凑车;日本至 2000、欧洲至 2005;含高性能版 Pulsar GTI-R;后继 Tiida(参考维基) |
| model:nissan:qashqai | Qashqai | 逍客 | Qashqai | キャシュカイ | class:eu:j | body:crossover | pt:ice | current · 2007–present | 欧洲市场紧凑跨界主力;大陆东风日产国产称「逍客」;欧洲有 e-POWER |
| model:nissan:quest | Quest | 贵士 | Quest | クエスト | class:cn:mpv | body:mpv | pt:ice | discontinued · 1992-2017 | 贵士(Quest,1992-2017),日产进口中大型MPV,大陆曾以贵士销售,2017年停产 |
| model:nissan:rasheen | Rasheen | Rasheen | Rasheen | ラシーン | class:eu:j | body:suv | pt:ice | discontinued · 1994–2000 | 90 年代个性小型 SUV(参考维基) |
| model:nissan:rogue | Rogue | Rogue | Rogue | — | class:us:compact | body:suv | pt:ice | current · 2007–present | 北美版 X-Trail,2014 年起与 X-Trail 合并为同一车型 |
| model:nissan:s-cargo | S-Cargo | S-Cargo | S-Cargo | エスカルゴ | class:eu:b | body:van | pt:ice | discontinued · 1989–1992 | Pike Cars 系列小型送货车,蜗牛造型(参考维基) |
| model:nissan:sentra | Sentra | Sentra | — | — | class:cn:a | body:sedan | pt:ice | current · 1982-present | Sentra(1982-),日产紧凑型轿车(北美市场);中国版名轩逸(Sylphy) |
| model:nissan:serena | Serena | Serena | Serena | セレナ | class:eu:m | body:minivan | pt:ice | current · 1991–present | 日规家用 MPV,现款有 e-POWER 混动;香港/东南亚有售 |
| model:nissan:silvia | Silvia | Silvia | Silvia | シルビア | class:eu:s | body:coupe | pt:ice | discontinued · 1965–2002 | 经典后驱轿跑;北美以 200SX/240SX 销售;后继为 350Z |
| model:nissan:skyline | Skyline | Skyline | Skyline | スカイライン | class:cn:b | body:sedan | pt:ice | current · 1957–present | 日产第二悠久的车系;现售 V37 为英菲尼迪 Q50 的日本贴牌版;历史上有 Skyline GT-R 高性能版 |
| model:nissan:stanza | Stanza | Stanza | Stanza | スタンザ | class:cn:a | body:sedan | pt:ice | discontinued · 1977–1992 | 日产前驱轿车;北美 1982 年起销售;后继 Altima(参考维基) |
| model:nissan:sunny | Sunny | 阳光 | Sunny(太陽) | サニー | class:cn:a0 | body:sedan | pt:ice | discontinued · 1965–2006 | 日产入门家轿;大陆东风日产曾国产「阳光」;后继为 Note/March |
| model:nissan:sylphy | Sylphy / Sentra | 轩逸 | Super Sentra(俗稱仙草) | シルフィ | class:cn:a | body:sedan | pt:ice | current · 2000–present | 北美称 Sentra(2012 年与 Sylphy 合并为同一车系);大陆东风日产轩逸销量常青;中国有 e-POWER 版 |
| model:nissan:teana | Teana | 天籁 | Teana(天籟) | ティアナ | class:cn:b | body:sedan | pt:ice | current · 2003–present | 大陆东风日产主力中型车;前身为 Cefiro(风度);北美对应 Altima |
| model:nissan:terra | Terra | 途达 | Terra | — | class:cn:b | body:suv | pt:ice | current · 2018-present | 途达(Terra,2018-),郑州日产生产、东风日产销售的中型硬派SUV,与Navara(D23)同平台 |
| model:nissan:terrano | Terrano | Terrano | Terrano | テラノ | class:eu:j | body:suv | pt:ice | discontinued · 1986-2022 | Terrano(1986-2022),日产紧凑/中型SUV(与Pathfinder同平台);日本1986-2002,欧洲Terrano II至2006;2012-2022俄/印市场以Dacia Duster贴牌续用此名 |
| model:nissan:tiida | Tiida | 骐达(两厢)/颐达(三厢) | Tiida | ティーダ | class:cn:a | body:hatchback | pt:ice | discontinued · 2004–2026 | 北美称 Versa,欧洲称 Pulsar;大陆东风日产国产骐达;2026 年正式停产 |
| model:nissan:titan | Titan | Titan | Titan | タイタン | class:us:pickup | body:pickup | pt:ice | discontinued · 2003–2024 | 北美全尺寸皮卡;2024 年停产 |
| model:nissan:x-trail | X-Trail | 奇骏 | X-Trail | エクストレイル | class:eu:j | body:suv | pt:ice | current · 2001–present | 日产全球主力紧凑 SUV;北美称 Rogue;大陆东风日产国产;现款有 e-POWER/e-4ORCE |
| model:nissan:z | Z | Z | Z | フェアレディZ | class:eu:s | body:sports | pt:ice | current · 1969–present | 日本名 Fairlady Z;现款 400Z(RZ34);历代含 240Z/280ZX/300ZX/350Z/370Z |

## Oldsmobile

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:oldsmobile:88 | Oldsmobile 88 | 奥兹莫比尔88 | Oldsmobile 88 | オールズモビル88 | class:us:large | body:sedan | pt:ice | discontinued · 1949–1999 | 经典全尺寸轿车(与98对应定位),1999年停产 |
| model:oldsmobile:aurora | Oldsmobile Aurora | 奥兹莫比尔Aurora | Oldsmobile Aurora | オールズモビル・オーロラ | class:us:large | body:sedan | pt:ice | discontinued · 1995–2003 | 品牌复兴旗舰轿车(1995年上市),2003年停产 |
| model:oldsmobile:cutlass | Oldsmobile Cutlass | 奥兹莫比尔Cutlass | Oldsmobile Cutlass | オールズモビル・カトラス | class:us:midsize | body:sedan | pt:ice | discontinued · 1961–1999 | 品牌销量主力(含Cutlass Supreme/442性能版),1999年停产 |
| model:oldsmobile:toronado | Oldsmobile Toronado | 奥兹莫比尔Toronado | Oldsmobile Toronado | オールズモビル・トロネード | class:us:large | body:coupe | pt:ice | discontinued · 1966–1992 | 前驱大型轿跑(1966年开创前驱V8豪华车),1992年停产 |

## Opel

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:opel:adam | Adam | Adam | Adam | オペル・アダム | class:eu:a | body:city-car | pt:ice | discontinued · 2012–2019 | 以品牌创始人Adam Opel命名的个性化城市车,2019年停产 |
| model:opel:ampera | Ampera | Ampera | Ampera | オペル・アンペラ | class:eu:c | body:hatchback | pt:erev | discontinued · 2011–2015 | 雪佛兰沃蓝达(Volt)的欧宝版增程式电动车,2015年停产;纯电Ampera-e(2017–2019)同属本系列 |
| model:opel:ascona | Ascona | Ascona | Ascona | オペル・アスコナ | class:eu:d | body:sedan | pt:ice | discontinued · 1970–1988 | 中型轿车,1988年由Vectra接替 |
| model:opel:astra | Astra | 雅特 | Astra | オペル・アストラ | class:eu:c | body:hatchback | pt:ice | current · 1991–present | 欧宝紧凑型主力;英国姊妹车为Vauxhall Astra;通用时代别克英朗/威朗等与其同源;中国曾进口/国产雅特 |
| model:opel:calibra | Calibra | Calibra | Calibra | オペル・カリブラ | class:eu:s | body:coupe | pt:ice | discontinued · 1989–1997 | 双门轿跑,风阻系数0.26创当年纪录 |
| model:opel:combo | Combo | Combo | Combo | オペル・コンボ | class:eu:m | body:van | pt:ice | current · 1986–present | 紧凑型厢式车;乘用版为Combo Life;与标致Partner/雪铁龙Berlingo同平台 |
| model:opel:corsa | Corsa | 可赛 | Corsa | オペル・コルサ | class:eu:b | body:hatchback | pt:ice | current · 1982–present | 欧宝小型车支柱;英国姊妹车为Vauxhall Corsa;纯电版Corsa-e同属本系列;通用时代的别克凯越HRV与其同平台 |
| model:opel:crossland | Crossland | Crossland | Crossland | オペル・クロスランド | class:eu:b | body:suv | pt:ice | discontinued · 2017–2024 | 小型跨界SUV(原称Crossland X),2024年停产 |
| model:opel:frontera | Frontera | Frontera | Frontera | オペル・フロンテラ | class:eu:b | body:suv | pt:ice | current · 2024–present | 2024年复活的小型SUV,与标致/雪铁龙同平台;旧款Frontera(1991–2004)为硬派越野车 |
| model:opel:grandland | Grandland | Grandland | Grandland | オペル・グランドランド | class:eu:c | body:suv | pt:ice | current · 2017–present | 紧凑型SUV(原称Grandland X),与标致3008同平台 |
| model:opel:gt | GT | GT | GT | オペル・GT | class:eu:s | body:sports | pt:ice | discontinued · 1968–2009 | 第一代(1968–1973)为双门小跑车;第二代(2006–2009)为土星Sky/庞蒂亚克Solstice姊妹车 |
| model:opel:insignia | Insignia | Insignia | Insignia | オペル・インシグニア | class:eu:d | body:sedan | pt:ice | discontinued · 2008–2022 | 中型行政轿车,2022年停产;中国2013–2016年曾以「英速亚」之名进口;通用时代别克君威/君越与其同平台 |
| model:opel:kadett | Kadett | 卡德特 | Kadett | オペル・カデット | class:eu:c | body:sedan | pt:ice | discontinued · 1937–1991 | 欧宝紧凑型车经典名,1991年由Astra接替 |
| model:opel:karl | Karl | Karl | Karl | オペル・カール | class:eu:a | body:city-car | pt:ice | discontinued · 2014–2019 | 入门微型车,2019年停产 |
| model:opel:manta | Manta | Manta | Manta | オペル・マンタ | class:eu:s | body:coupe | pt:ice | discontinued · 1970–1988 | 经典双门轿跑;2021年Manta GSe ElektroMOD电动复刻概念车致敬 |
| model:opel:meriva | Meriva | Meriva | Meriva | オペル・メリーバ | class:eu:m | body:mpv | pt:ice | discontinued · 2003–2017 | 紧凑型MPV,2017年停产 |
| model:opel:mokka | Mokka | Mokka | Mokka | オペル・モッカ | class:eu:b | body:suv | pt:ice | current · 2012–present | 小型跨界SUV,2020年换代后与标致2008同平台;通用时代别克昂科拉与其同平台 |
| model:opel:omega | Omega | 欧米茄 | Omega | オペル・オメガ | class:eu:e | body:sedan | pt:ice | discontinued · 1986–2003 | 欧宝旗舰行政轿车,2003年停产;中国别克荣御与其同源 |
| model:opel:vectra | Vectra | 威达 | Vectra | オペル・ベクトラ | class:eu:d | body:sedan | pt:ice | discontinued · 1988–2008 | 中型轿车,中国曾引进称威达,2008年由Insignia接替 |
| model:opel:vivaro | Vivaro | Vivaro | Vivaro | オペル・ヴィヴァーロ | class:eu:m | body:van | pt:ice | current · 2001–present | 中型厢式车,现与标致Expert/雪铁龙Jumpy同平台;乘用版为Zafira Life |
| model:opel:zafira | Zafira | 赛飞利 | Zafira | オペル・ザフィーラ | class:eu:m | body:mpv | pt:ice | discontinued · 1999–2019 | 紧凑型7座MPV,中国曾引进称赛飞利,2019年停产;后继为Zafira Life |
| model:opel:zafira-life | Zafira Life | Zafira Life | Zafira Life | オペル・ザフィーラ・ライフ | class:eu:m | body:mpv | pt:ice | current · 2019–present | Vivaro的乘用MPV版 |

## Oshan

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:oshan:520 | Oshan 520 | 长安欧尚520 | — | — | class:cn:a | body:sedan | pt:bev | current · 2024–present | 长安欧尚520(2024-),纯电紧凑型轿车,基于长安逸动平台,含换电版 |
| model:oshan:530 | Oshan 530 | 长安欧尚530 | — | — | class:cn:a | body:sedan | pt:ice | current · 2025–present | 长安欧尚530(2025-),紧凑型轿车,含网约版 |
| model:oshan:a600 | Oshan A600 | 长安欧尚A600 | A600 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2018–2021 | 长安欧尚A600紧凑型MPV(2018年上市),前身为2015年的长安欧尚MPV,约2021年停产 |
| model:oshan:a800 | Oshan A800 | 长安欧尚A800 | A800 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2017–2020 | 长安欧尚A800紧凑型MPV(2017年上市),约2020年停产 |
| model:oshan:cx70 | Oshan CX70 | 长安欧尚CX70 | CX70 | — | class:cn:b | body:suv | pt:ice | discontinued · 2016–2020 | 长安欧尚CX70中型SUV(2016年上市,7座),约2020年停产 |
| model:oshan:kesai | Oshan Kesai | 长安欧尚科赛 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2018–2020 | 长安欧尚科赛中型SUV(2018年上市),约2020年停产 |
| model:oshan:kesai-5 | Oshan Kesai 5 | 长安欧尚科赛5 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2018–2021 | 长安欧尚科赛5小型SUV(2018年上市),约2021年停产 |
| model:oshan:kesai-pro | Oshan Kesai Pro | 长安欧尚科赛Pro | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2020–2021 | 长安欧尚科赛Pro中型SUV(2020年上市),约2021年停产 |
| model:oshan:keshan | Oshan Keshan | 长安欧尚科尚 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2018–2020 | 长安欧尚科尚紧凑型MPV(2018年上市),约2020年停产 |
| model:oshan:oshan-3-2 | Kesai 3 | 长安欧尚科赛3 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2019–2021 | 科赛3(2019-),小型SUV,2019年上市,已停产 |
| model:oshan:oshan-ev | Eulove EV | 欧力威EV | — | — | class:cn:mpv | body:mpv | pt:bev | discontinued · 2015–2017 | 欧力威EV(2015-),欧力威纯电版,已停产 |
| model:oshan:oshan-ev-2 | Keshang EV | 科尚EV | — | — | class:cn:mpv | body:mpv | pt:bev | discontinued · 2019–2020 | 科尚EV(2019-2020),科尚纯电版,已停产 |
| model:oshan:oshan-ii | Nio II | 尼欧II | — | — | class:cn:a00 | body:city-car | pt:bev | discontinued · 2018–2020 | 尼欧II(2018-2020),长安欧尚纯电微型车,已停产 |
| model:oshan:ouliwei | Oshan Ouliwei | 欧力威 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2013–2017 | 长安欧力威紧凑型MPV(2013年上市),造型介于面包车与MPV之间,约2017年停产 |
| model:oshan:ounuo | Oshan Ounuo | 欧诺 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2012–2020 | 长安欧诺紧凑型MPV(2012年上市),商乘两用,约2020年停产 |
| model:oshan:x5 | Oshan X5 | 长安欧尚X5 | X5 | — | class:cn:a | body:suv | pt:ice | discontinued · 2020–2023 | 长安欧尚X5紧凑型SUV(2020年上市),欧尚品牌销量主力;品牌整合进长安后停产,继任为长安X5 PLUS |
| model:oshan:x5-plus | Oshan X5 Plus | 长安欧尚X5 PLUS | X5 Plus | — | class:cn:a | body:suv | pt:ice | discontinued · 2022–2024 | 长安欧尚X5 PLUS紧凑型SUV(2022年上市),2024年欧尚品牌并入长安后以长安X5 PLUS之名继续销售 |
| model:oshan:x7 | Oshan X7 | 长安欧尚X7 | X7 | — | class:cn:a | body:suv | pt:ice | discontinued · 2019–2023 | 长安欧尚X7紧凑型SUV(2019年上市),品牌整合后停产,继任为长安X7 PLUS |
| model:oshan:x7-ev | X7 EV | X7 EV | — | — | class:cn:c | body:suv | pt:bev | discontinued · 2020–2022 | 长安欧尚X7 EV(2020-),X7纯电版,续航405公里,已停产 |
| model:oshan:x7-plus | Oshan X7 Plus | 长安欧尚X7 PLUS | X7 Plus | — | class:cn:a | body:suv | pt:ice | discontinued · 2021–2024 | 长安欧尚X7 PLUS紧凑型SUV(2021年上市),2024年以长安X7 PLUS之名继续销售 |
| model:oshan:x70a | Oshan X70A | 长安欧尚X70A | X70A | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2021 | 长安欧尚X70A紧凑型SUV(2018年上市),方盒造型偏商用,约2021年停产 |
| model:oshan:z6 | Oshan Z6 | 长安欧尚Z6 | Z6 | — | class:cn:a | body:suv | pt:ice | discontinued · 2022–2024 | 长安欧尚Z6紧凑型SUV(2022年上市,燃油版),品牌整合后并入长安Z6系列 |
| model:oshan:z6-idd | Oshan Z6 iDD | 长安欧尚Z6新能源 | Z6 iDD | — | class:cn:a | body:suv | pt:phev | discontinued · 2022–2024 | 长安欧尚Z6新能源(2022年上市),智电iDD插电混动版 |

## Oulang

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:oulang:oulang | Oulang | 欧朗 | 歐朗 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2012–2015 | 一汽欧朗紧凑型轿车,基于大众PQ32平台改款,一汽自主尝试,销量惨淡 |

## Pagani

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:pagani:huayra | Pagani Huayra | 帕加尼Huayra | Pagani Huayra | パガーニ・ウアイラ | class:eu:s | body:supercar | pt:ice | discontinued · 2012–2023 | Zonda继任者(主动空气动力学,AMG V12双涡轮),含BC/Codalunga等版 |
| model:pagani:utopia | Pagani Utopia | 帕加尼Utopia | Pagani Utopia | パガーニ・ユートピア | class:eu:s | body:supercar | pt:ice | current · 2023–present | 第三代旗舰超跑(6.0L AMG V12双涡轮+手动/自动),限量99辆 |
| model:pagani:zonda | Pagani Zonda | 帕加尼Zonda | Pagani Zonda | パガーニ・ゾンダ | class:eu:s | body:supercar | pt:ice | discontinued · 1999–2011 | 品牌首款超跑(梅赛德斯AMG V12),含Zonda F/R/Cinque等,后续有复刻定制版 |

## Perodua

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:perodua:ativa | Perodua Ativa | Perodua Ativa | Perodua Ativa | ペロドゥア・アティバ | class:eu:j | body:crossover | pt:ice | current · 2020–present | 品牌首款小型SUV(基于大发Rocky/丰田Raize) |
| model:perodua:axia | Perodua Axia | Perodua Axia | Perodua Axia | ペロドゥア・アクシア | class:eu:a | body:hatchback | pt:ice | current · 2014–present | 入门微型车(基于大发Ayla),含Axia E EV纯电试制 |
| model:perodua:bezza | Perodua Bezza | Perodua Bezza | Perodua Bezza | ペロドゥア・ベザ | class:eu:a | body:sedan | pt:ice | current · 2016–present | 入门三厢轿车 |
| model:perodua:myvi | Perodua Myvi | Perodua Myvi | Perodua Myvi | ペロドゥア・マイヴィ | class:eu:a | body:hatchback | pt:ice | current · 2005–present | 马来西亚国民神车(常年销量第一,第三代2021);大陆未引进 |

## Peugeot

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:peugeot:107 | 107 | 107 | 107 | 107 | class:eu:a | body:hatchback | pt:ice | discontinued · 2005–2014 | 与丰田Aygo、雪铁龙C1同平台的微型车 |
| model:peugeot:108 | 108 | 108 | 108 | 108 | class:eu:a | body:hatchback | pt:ice | discontinued · 2014–2021 | 107的继任,与丰田Aygo、雪铁龙C1同平台,停产后无后继 |
| model:peugeot:2008 | 2008 | 2008 | 2008 | 2008 | class:eu:b | body:crossover | pt:ice | current · 2013–present | 小型跨界SUV;含纯电版e-2008;中国大陆由神龙汽车国产 |
| model:peugeot:205 | 205 | 205 | 205 | 205 | class:eu:b | body:hatchback | pt:ice | discontinued · 1983–1998 | 经典家用车,205 GTI为车坛传奇 |
| model:peugeot:206 | 206 | 206 | 206 | 206 | class:eu:b | body:hatchback | pt:ice | discontinued · 1998–2016 | 205的继任,含敞篷版206 CC;部分市场以206+延续生产 |
| model:peugeot:207 | 207 | 207 | 207 | 207 | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2008–2014 | 东风标致国产207,含三厢/两厢版,2014年停产;欧洲版2006年先行上市 |
| model:peugeot:208 | 208 | 208 | 208 | 208 | class:eu:b | body:hatchback | pt:ice | current · 2012–present | 含纯电版e-208;前身为207 |
| model:peugeot:3008 | 3008 | 3008 | 3008 | 3008 | class:eu:j | body:suv | pt:ice | current · 2008–present | 初代为跨界MPV,2016年换代后转为紧凑型SUV;中国版为4008(加长) |
| model:peugeot:301 | 301 | 301 | 301 | 301 | class:cn:a | body:sedan | pt:ice | discontinued · 2012-2020 | 标致301(2012-2020),东风标致紧凑三厢轿车,面向中国市场,2020年停产 |
| model:peugeot:307-2 | Peugeot 307 | 标致307 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2001-2014 | 标致307(2001-2014),东风标致紧凑型车,2014年停产 |
| model:peugeot:308 | 308 | 308 | 308 | 308 | class:eu:c | body:hatchback | pt:ice | current · 2007–present | 含旅行版308 SW与纯电版e-308;前身为307 |
| model:peugeot:308s | Peugeot 308S | 标致308S | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2015-2019 | 308S(2015-2019),东风标致308两厢版,2019年停产 |
| model:peugeot:4007 | Peugeot 4007 | 标致4007 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2007-2012 | 4007(2007-2012),三菱Outlander贴牌,2012年停产 |
| model:peugeot:4008 | 4008 (imported) | 4008(进口) | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 2008-2013 | 4008(2008-2013),三菱ASX贴牌的进口版;中国另有东风标致4008(国产,另行收录) |
| model:peugeot:406 | 406 | 406 | 406 | 406 | class:eu:d | body:sedan | pt:ice | discontinued · 1995–2008 | 中型轿车,含旅行版与406 Coupe(宾尼法利纳设计) |
| model:peugeot:407 | 407 | 407 | 407 | 407 | class:eu:d | body:sedan | pt:ice | discontinued · 2004–2011 | 406的继任,被508取代 |
| model:peugeot:408 | 408 | 408 | 408 | 408 | class:eu:c | body:crossover | pt:ice | current · 2010–present | 初代为中国市场三厢轿车(2010),现款为2022年推出的跨界轿跑408(含e-408纯电) |
| model:peugeot:408x | Peugeot 408X | 标致408X | — | — | class:cn:a | body:hatchback | pt:ice | current · 2023-present | 408X(2023-),东风标致跨界轿车(欧版为全球车型) |
| model:peugeot:5008 | 5008 | 5008 | 5008 | 5008 | class:eu:j | body:suv | pt:ice | current · 2009–present | 初代为三排紧凑MPV,2024年换代后为三排中型SUV |
| model:peugeot:5008-2 | 5008 Classic | 5008经典 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2017-2021 | 5008经典(2017-2021),东风标致5008老款,2021年停产 |
| model:peugeot:508 | 508 | 508 | 508 | 508 | class:eu:d | body:sedan | pt:ice | current · 2010–present | 欧洲市场2025年停产,中国508L(加长版)仍在售;替代407/607 |
| model:peugeot:508l | 508L New Energy | 508L新能源 | — | — | class:cn:a | body:sedan | pt:phev | current · 2020-present | 508L新能源(2020-),东风标致508L插电混动版 |
| model:peugeot:6008 | Peugeot 6008 | 标致6008 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2012-2016 | 6008(2012-2016),标致大型SUV(中国特供),2016年停产 |
| model:peugeot:607 | 607 | 607 | 607 | 607 | class:eu:e | body:sedan | pt:ice | discontinued · 1999–2010 | 旗舰行政级轿车,法国总统座驾之一;后继由508顶替 |
| model:peugeot:608 | Peugeot 608 | 标致608 | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 2009-2013 | 608(2009-2013),标致旗舰轿跑(未量产,计划车型) |
| model:peugeot:807 | Peugeot 807 | 标致807 | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2002-2014 | 807(2002-2014),标致大型MPV,2014年停产 |
| model:peugeot:e-208 | E-208 | E-208 | — | — | class:cn:a | body:hatchback | pt:bev | current · 2019-present | e-208(2019-),标致208的纯电版,欧洲市场 |
| model:peugeot:e-expert | e-Expert | e-Expert | — | — | class:cn:a | body:van | pt:bev | current · 2020-present | e-Expert(2020-),Expert的纯电版 |
| model:peugeot:e-partner | e-Partner | e-Partner | — | — | class:cn:a | body:van | pt:bev | current · 2020-present | e-Partner(2020-),Partner的纯电版 |
| model:peugeot:e-traveller | e-Traveller | e-Traveller | — | — | class:cn:a | body:van | pt:bev | current · 2020-present | e-Traveller(2020-),Traveller的纯电版 |
| model:peugeot:e2008 | Peugeot e2008 | 标致e2008 | — | — | class:cn:a | body:suv | pt:bev | current · 2020-present | e-2008(2020-),标致2008纯电版 |
| model:peugeot:expert | Expert | Expert | Expert | エキスパート | class:eu:m | body:van | pt:ice | current · 1994–present | 中型厢式车;乘用版为Traveller;含纯电e-Expert |
| model:peugeot:ion | Peugeot iOn | 标致iOn | — | — | class:cn:a | body:hatchback | pt:bev | discontinued · 2010-2018 | iOn(2010-2018),三菱i-MiEV贴牌的纯电微型车,2018年停产 |
| model:peugeot:landtrek | Landtrek | Landtrek | Landtrek | ランドトレック | class:eu:j | body:pickup | pt:ice | current · 2020–present | 皮卡,与长安凯程F70同平台,面向拉美/非洲等市场 |
| model:peugeot:partner | Partner | Partner | Partner | パートナー | class:eu:m | body:van | pt:ice | current · 1996–present | 紧凑型厢式车,含乘用版Rifter与纯电e-Partner |
| model:peugeot:rcz | RCZ | RCZ | RCZ | RCZ | class:eu:s | body:coupe | pt:ice | discontinued · 2009–2015 | 双门轿跑,308平台衍生 |
| model:peugeot:rifter | Rifter | Rifter | Rifter | リフター | class:eu:m | body:mpv | pt:ice | current · 2018–present | Partner的乘用版;与雪铁龙Berlingo、欧宝Combo同平台 |
| model:peugeot:traveller | Traveller | Traveller | Traveller | トラベラー | class:eu:m | body:mpv | pt:ice | current · 2015–present | Expert的乘用版;与雪铁龙SpaceTourer、欧宝Zafira Life同平台 |

## Plymouth

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:plymouth:barracuda | Plymouth Barracuda | 普利茅斯Barracuda | Plymouth Barracuda | プリマス・バラクーダ | class:eu:s | body:coupe | pt:ice | discontinued · 1964–1974 | 经典Pony Car(先于野马数月问世),1974年停产 |
| model:plymouth:prowler | Plymouth Prowler | 普利茅斯Prowler | Plymouth Prowler | プリマス・プロウラー | class:eu:s | body:roadster | pt:ice | discontinued · 1997–2002 | 复古热rod造型敞篷车(1997年投产,后挂克莱斯勒标),2002年停产 |
| model:plymouth:road-runner | Plymouth Road Runner | 普利茅斯Road Runner | Plymouth Road Runner | プリマス・ロードランナー | class:eu:s | body:coupe | pt:ice | discontinued · 1968–1980 | 平价肌肉车(名称致敬《哔哔鸟》动画,含Superbird),1980年停产 |
| model:plymouth:voyager | Plymouth Voyager | 普利茅斯Voyager | Plymouth Voyager | プリマス・ボイジャー | class:us:minivan | body:minivan | pt:ice | discontinued · 1974–2000 | 与道奇Caravan同平台的初代MPV(1984年起为厢式休旅形态),2000年停产 |

## Polestar

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:polestar:polestar-1 | Polestar 1 | 极星1 | Polestar 1 | ポールスター1 | class:eu:s | body:coupe | pt:phev | discontinued · 2019–2021 | 极星首款车型,插混GT跑车,限产约1,500辆 |
| model:polestar:polestar-2 | Polestar 2 | 极星2 | Polestar 2 | ポールスター2 | class:eu:d | body:hatchback | pt:bev | current · 2020–present | 纯电五门掀背轿车,基于CMA平台;2024年改款 |
| model:polestar:polestar-3 | Polestar 3 | 极星3 | Polestar 3 | ポールスター3 | class:eu:j | body:suv | pt:bev | current · 2024–present | 纯电中大型SUV,与沃尔沃EX90同平台(SPA2) |
| model:polestar:polestar-4 | Polestar 4 | 极星4 | Polestar 4 | ポールスター4 | class:eu:c | body:crossover | pt:bev | current · 2024–present | 纯电轿跑SUV,无后窗设计,基于SEA架构 |
| model:polestar:polestar-5 | Polestar 5 | 极星5 | Polestar 5 | ポールスター5 | class:eu:e | body:sedan | pt:bev | current · 2025–present | 纯电大型GT轿车,2025年发布;量产交付进度待核实 |

## Pontiac

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:pontiac:aztek | Pontiac Aztek | 庞蒂亚克Aztek | 龐帝克Aztek | ポンティアック・アズテック | class:us:small-suv | body:crossover | pt:ice | discontinued · 2001–2005 | 造型争议的跨界车(常被列「史上最丑车」,后因《绝命毒师》翻红) |
| model:pontiac:bonneville | Pontiac Bonneville | 庞蒂亚克Bonneville | 龐帝克Bonneville | ポンティアック・ボンネビル | class:us:large | body:sedan | pt:ice | discontinued · 1957–2005 | 旗舰全尺寸轿车(1957年上市),2005年停产 |
| model:pontiac:firebird | Pontiac Firebird | 庞蒂亚克火鸟 | 龐帝克Firebird | ポンティアック・ファイアーバード | class:eu:s | body:coupe | pt:ice | discontinued · 1967–2002 | 经典美式Pony Car(含Trans Am性能版),2002年停产;大陆常音译「火鸟」 |
| model:pontiac:grand-prix | Pontiac Grand Prix | 庞蒂亚克Grand Prix | 龐帝克Grand Prix | ポンティアック・グランプリ | class:us:large | body:sedan | pt:ice | discontinued · 1962–2008 | 长期在售的中大型轿车/轿跑,2008年停产 |
| model:pontiac:gto | Pontiac GTO | 庞蒂亚克GTO | 龐帝克GTO | ポンティアックGTO | class:eu:s | body:coupe | pt:ice | discontinued · 1964–1974; 2004–2006 | 公认的「肌肉车鼻祖」(1964年开创Muscle Car概念),2004–2006基于霍顿Monaro复活 |

## Porsche

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:porsche:356 | 356 | 保时捷356 | 保時捷356 | ポルシェ356 | class:eu:s | body:sports | pt:ice | discontinued · 1948–1965 | 保时捷首款量产车,911的前身 |
| model:porsche:718 | 718 | 保时捷718 | 保時捷718 | ポルシェ718 | class:eu:s | body:roadster | pt:ice | current · 1996–present | 中置引擎系列:Boxster敞篷(1996年起)与Cayman硬顶(2005年起),2016年统一冠名718;2025年起新增纯电版 |
| model:porsche:911 | 911 | 保时捷911 | 保時捷911 | ポルシェ911 | class:eu:s | body:sports | pt:ice | current · 1963–present | 保时捷灵魂车型,后置引擎跑车;历代代号901/930/964/993/996/997/991/992;Turbo/GT3/GT2等高性能版属本系列 |
| model:porsche:914 | 914 | 保时捷914 | 保時捷914 | ポルシェ914 | class:eu:s | body:sports | pt:ice | discontinued · 1969–1976 | 与大众合作开发的中置引擎跑车 |
| model:porsche:918-spyder | 918 Spyder | 保时捷918 Spyder | 保時捷918 Spyder | ポルシェ918スパイダー | class:eu:s | body:supercar | pt:phev | discontinued · 2013–2015 | 插混超级跑车,纽北赛道纪录保持者,限量918台 |
| model:porsche:924 | 924 | 保时捷924 | 保時捷924 | ポルシェ924 | class:eu:s | body:sports | pt:ice | discontinued · 1976–1988 | 前中置引擎入门跑车,1980年代救品牌于危局 |
| model:porsche:928 | 928 | 保时捷928 | 保時捷928 | ポルシェ928 | class:eu:s | body:coupe | pt:ice | discontinued · 1977–1995 | 前中置V8豪华GT跑车,曾计划取代911 |
| model:porsche:944 | 944 | 保时捷944 | 保時捷944 | ポルシェ944 | class:eu:s | body:sports | pt:ice | discontinued · 1981–1991 | 924的进化版,保时捷销量最高的前置引擎车型 |
| model:porsche:959 | 959 | 保时捷959 | 保時捷959 | ポルシェ959 | class:eu:s | body:sports | pt:ice | discontinued · 1986–1993 | 1980年代技术巅峰超级跑车,四驱双涡轮 |
| model:porsche:968 | 968 | 保时捷968 | 保時捷968 | ポルシェ968 | class:eu:s | body:sports | pt:ice | discontinued · 1991–1995 | 924/944/968前置引擎系列的最终版 |
| model:porsche:carrera-gt | Carrera GT | 保时捷Carrera GT | 保時捷Carrera GT | ポルシェ・カレラGT | class:eu:s | body:supercar | pt:ice | discontinued · 2003–2007 | V10自然吸气超级跑车,限量约1270台 |
| model:porsche:cayenne | Cayenne | 卡宴 | Cayenne | カイエン | class:eu:j | body:suv | pt:ice | current · 2002–present | 保时捷首款SUV,拯救品牌销量的关键车型;含Coupé版;2026年推纯电版 |
| model:porsche:macan | Macan | Macan | Macan | マカン | class:eu:j | body:suv | pt:ice | current · 2014–present | 紧凑型豪华SUV,2024年换代后仅售纯电版 |
| model:porsche:panamera | Panamera | 帕拉梅拉 | Panamera | パナメーラ | class:eu:f | body:sedan | pt:ice | current · 2009–present | 保时捷四门大型轿跑,含Sport Turismo旅行版;Turbo S E-Hybrid等插混版属本系列 |
| model:porsche:taycan | Taycan | Taycan | Taycan | タイカン | class:eu:f | body:sedan | pt:bev | current · 2019–present | 保时捷首款纯电量产车;另有Cross Turismo跨界旅行版 |

## Proton

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:proton:persona | Proton Persona | 宝腾Persona | Proton Persona | プロトン・ペルソナ | class:eu:b | body:sedan | pt:ice | current · 2016–present | 紧凑型轿车(2016年第三代) |
| model:proton:s70 | Proton S70 | 宝腾S70 | Proton S70 | プロトンS70 | class:eu:c | body:sedan | pt:ice | current · 2023–present | 紧凑型轿车(吉利帝豪贴牌),2023年上市 |
| model:proton:saga | Proton Saga | 宝腾Saga | Proton Saga | プロトン・サガ | class:eu:b | body:sedan | pt:ice | current · 1985–present | 马来西亚国民第一车(1985年上市,现售第四代2019);大陆未引进 |
| model:proton:x50 | Proton X50 | 宝腾X50 | Proton X50 | プロトンX50 | class:eu:j | body:suv | pt:ice | current · 2020–present | 紧凑型SUV(吉利缤越贴牌) |
| model:proton:x70 | Proton X70 | 宝腾X70 | Proton X70 | プロトンX70 | class:eu:j | body:suv | pt:ice | current · 2018–present | 吉利入股后首款车型(吉利博越贴牌),马来西亚市场热销 |

## Qoros

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:qoros:model-young | Qoros Model Young | 观致Model Young | 觀致Model Young | — | class:cn:a | body:suv | pt:ice | discontinued · 2017–2019 | 观致品牌紧凑型SUV,基于奇瑞瑞虎7平台,2017年上市 |
| model:qoros:qoros-3 | Qoros 3 | 观致3 | 觀致3 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2013–2021 | 紧凑型轿车,观致品牌首款车型,含五门掀背版与3 GT跨界版 |
| model:qoros:qoros-5 | Qoros 5 | 观致5 | 觀致5 | — | class:cn:a | body:suv | pt:ice | discontinued · 2016–2021 | 紧凑型SUV,观致主力车型 |
| model:qoros:qoros-7 | Qoros 7 | 观致7 | 觀致7 | — | class:cn:a | body:suv | pt:ice | discontinued · 2020–2021 | 紧凑型SUV,宝能入主后推出,品牌停摆后停产 |

## RAM

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:ram:1500 | 1500 | RAM 1500 | 1500 | ラム1500 | class:us:pickup | body:pickup | pt:ice | current · 1981–present | 前身为Dodge Ram(1981–2009),2010年RAM独立为品牌 |
| model:ram:2500 | 2500 | RAM 2500 | 2500 | ラム2500 | class:us:pickup | body:pickup | pt:ice | current · 1981–present | Heavy Duty级重型皮卡,含Power Wagon版 |
| model:ram:3500 | 3500 | RAM 3500 | 3500 | ラム3500 | class:us:pickup | body:pickup | pt:ice | current · 1981–present | 一吨级重型皮卡 |
| model:ram:4500-5500-chassis-cab | 4500/5500 Chassis Cab | RAM 4500/5500 | 4500/5500 Chassis Cab | ラム4500/5500 | class:us:pickup | body:pickup | pt:ice | current · 2008–present | 商用底盘驾驶室(Chassis Cab)车型 |
| model:ram:dakota | Dakota | Dakota | Dakota | ダコタ | class:us:pickup | body:pickup | pt:ice | discontinued · 1987–2011 | 中型皮卡,2011年停产 |
| model:ram:promaster | ProMaster | ProMaster | ProMaster | プロマスター | class:eu:m | body:van | pt:ice | current · 2014–present | 基于菲亚特Ducato平台的厢式货车 |
| model:ram:ram-van | Ram Van | Ram Van | Ram Van | ラムバン | class:us:large | body:van | pt:ice | discontinued · 1971–2003 | 原名Dodge Ram Van(B系列厢式车) |
| model:ram:rampage | Rampage | Rampage | Rampage | ラム・ランページ | class:us:pickup | body:pickup | pt:ice | current · 2023–present | 承载式紧凑型皮卡(与Jeep Compass同平台系),2023年巴西首发,2025年起进入北美 |

## Rely

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:rely:h3 | Rely H3 | 威麟H3 | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2010–2012 | 威麟H3轻型客车,2010年上市 |
| model:rely:h5 | Rely H5 | 威麟H5 | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2010–2012 | 威麟H5轻型客车,2010年上市 |
| model:rely:v5 | Rely V5 | 威麟V5 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2009–2014 | 威麟V5紧凑型MPV(7座),源自奇瑞东方之子Cross,2009年上市 |
| model:rely:x5 | Rely X5 | 威麟X5 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2010–2013 | 威麟X5中型硬派SUV,2010年上市 |

## Renault

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:renault:4-e-tech | 4 E-Tech | 4 E-Tech(雷诺4) | 4 E-Tech | 4 E-Tech | class:eu:b | body:suv | pt:bev | current · 2025–present | 致敬经典雷诺4(1961-1992)的纯电小型SUV,2025年复活 |
| model:renault:5-e-tech | 5 E-Tech | 5 E-Tech(雷诺5) | 5 E-Tech | 5 E-Tech | class:eu:b | body:hatchback | pt:bev | current · 2024–present | 致敬1972年雷诺5(经典「小五」)的复古纯电小车 |
| model:renault:6acaee71fe | Latitude | 纬度 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2010–2017 | 纬度(Latitude,2010-2017),雷诺中型轿车,基于雷诺三星SM5,中国曾进口销售 |
| model:renault:arkana | Arkana | Arkana | Arkana | アルカナ | class:eu:c | body:crossover | pt:ice | discontinued · 2019–2025 | 轿跑风格跨界SUV,欧洲市场2025年停产;土耳其等市场仍生产 |
| model:renault:austral | Austral | Austral | Austral | オーストラル | class:eu:c | body:suv | pt:ice | current · 2022–present | 紧凑型SUV,接替Kadjar |
| model:renault:captur | Captur | 科雷缤 | Captur | キャプチャー | class:eu:b | body:crossover | pt:ice | current · 2013–present | 小型跨界SUV,基于Clio平台;中国2015年起曾以进口「卡缤」销售,后由东风雷诺国产为「科雷缤」(2019起) |
| model:renault:ce421b26ee | Vel Satis | 威赛帝 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2001–2009 | 威赛帝(Vel Satis,2001-2009),雷诺旗舰轿车,造型独特,已停产 |
| model:renault:clio | Clio | Clio | Clio | クリオ | class:eu:b | body:hatchback | pt:ice | current · 1990–present | 雷诺最畅销车型;日本市场称Lutecia(ルーテシア);Clio V6(2000-2005)为引擎中置性能版 |
| model:renault:duster | Duster | Duster | — | — | class:eu:j | body:suv | pt:ice | current · 2010–present | Duster(2010-),雷诺-日产联盟低成本紧凑SUV,南美/东欧/印度市场,中国未销售 |
| model:renault:duster-oroch | Duster Oroch | Duster Oroch | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2015–2021 | Duster Oroch(2015-2021),基于Duster的皮卡,南美市场 |
| model:renault:espace | Espace | Espace(太空) | Espace | エスパース | class:eu:d | body:suv | pt:ice | current · 1984–present | 第六代(2023)起由大型MPV改为中型SUV,基于Austral |
| model:renault:fluence | Fluence | 风朗 | Fluence | — | class:cn:a | body:sedan | pt:ice | discontinued · 2011–2018 | 紧凑型轿车,以进口形式引入中国,名「风朗」;2018年前后停售 |
| model:renault:kadjar | Kadjar | 科雷嘉 | Kadjar | キャジャー | class:eu:c | body:suv | pt:ice | discontinued · 2015–2022 | 紧凑型SUV,与日产逍客同平台;中国曾国产「科雷嘉」;被Austral取代 |
| model:renault:kangoo | Kangoo | Kangoo | Kangoo | カングー | class:eu:m | body:van | pt:ice | current · 1997–present | 紧凑厢式车/休闲车,含乘用版与纯电Kangoo E-Tech;日本市场颇受欢迎 |
| model:renault:koleos | Koleos | 科雷傲 | Koleos | コレオス | class:eu:d | body:suv | pt:ice | current · 2006–present | 中型SUV,中国曾国产「科雷傲」;2024年推出Grand Koleos(基于吉利星越L) |
| model:renault:laguna | Laguna | 拉古那 | Laguna | ラグナ | class:eu:d | body:hatchback | pt:ice | discontinued · 1994–2015 | 中型车(掀背/旅行),被Talisman取代 |
| model:renault:master | Master | Master | Master | マスター | class:eu:m | body:van | pt:ice | current · 1980–present | 大型厢式车,含纯电Master E-Tech;与欧宝Movano、日产Interstar同平台 |
| model:renault:megane | Mégane | 梅甘娜 | Megane | メガーヌ | class:eu:c | body:hatchback | pt:bev | current · 1995–present | 现款为纯电Mégane E-Tech(2021-);燃油版(1995-2025)已停,Mégane RS性能版并入本条目 |
| model:renault:qm6 | Renault QM6 | 雷诺QM6 | — | — | class:eu:j | body:suv | pt:ice | current · 2016–present | QM6(2016-),雷诺韩国(原雷诺三星)中型SUV,韩国市场 |
| model:renault:rafale | Rafale | Rafale | Rafale | ラファール | class:eu:d | body:crossover | pt:ice | current · 2023–present | 中型轿跑SUV,基于Austral,旗舰定位 |
| model:renault:renault-e | e-Nuo | e诺 | — | — | class:cn:a0 | body:hatchback | pt:bev | discontinued · 2019–2022 | e诺(City K-ZE,2019-2022),雷诺中国纯电小型车,与启辰e30/风行T1EV同源,已停产 |
| model:renault:scenic | Scénic | 风景 | Scenic | セニック | class:eu:c | body:suv | pt:bev | current · 1996–present | 现款为纯电Scenic E-Tech(2024-);前代为紧凑MPV(1996-2022) |
| model:renault:sm6 | Samsung SM6 | 雷诺三星SM6 | — | — | class:cn:b | body:sedan | pt:ice | current · 2016–present | 雷诺三星SM6(2016-),韩国市场中型轿车,雷诺Talisman的韩国版 |
| model:renault:symbioz | Symbioz | Symbioz | Symbioz | サンビオズ | class:eu:c | body:suv | pt:ice | current · 2024–present | 紧凑型SUV,定位介于Captur与Austral之间 |
| model:renault:talisman | Talisman | 塔利斯曼 | Talisman | タリスマン | class:eu:d | body:sedan | pt:ice | discontinued · 2015–2022 | 中型轿车,接替Laguna;另有中国特供版塔利斯曼(2012-2020) |
| model:renault:trafic | Trafic | Trafic | Trafic | トラフィック | class:eu:m | body:van | pt:ice | current · 1980–present | 中型厢式车,含乘用版Trafic Combi |
| model:renault:twingo | Twingo | Twingo | Twingo | トゥインゴ | class:eu:a | body:hatchback | pt:ice | discontinued · 1992–2024 | A级城市小车,2025年以纯电Twingo E-Tech复活(2025-2026) |
| model:renault:twizy | Twizy | Twizy | Twizy | トゥイジー | class:eu:a | body:quadricycle | pt:bev | discontinued · 2012–2023 | 欧盟L6/L7类四轮微型电动车,被Mobilize Duo取代 |
| model:renault:zoe | Zoe | Zoe | Zoe | ゾエ | class:eu:b | body:hatchback | pt:bev | discontinued · 2012–2024 | 欧洲畅销纯电小车,被5 E-Tech取代 |

## Riich

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:riich:g3 | Riich G3 | 瑞麒G3 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2011–2014 | 瑞麒G3紧凑型轿车,基于奇瑞A3平台,2011年上市 |
| model:riich:g5 | Riich G5 | 瑞麒G5 | — | — | class:cn:b | body:sedan | pt:ice | discontinued · 2009–2013 | 瑞麒G5中型轿车,瑞麒品牌旗舰车型之一,2009年上市 |
| model:riich:g6 | Riich G6 | 瑞麒G6 | — | — | class:cn:c | body:sedan | pt:ice | discontinued · 2010–2014 | 瑞麒G6中大型轿车,瑞麒品牌旗舰车型,2010年首发亮相,2011年上市 |
| model:riich:m1 | Riich M1 | 瑞麒M1 | — | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2009–2011 | 瑞麒M1微型两厢车,2009年上市 |
| model:riich:x1 | Riich X1 | 瑞麒X1 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2009–2012 | 瑞麒X1小型SUV/跨界车,基于奇瑞A1平台,2009年上市 |

## Rivian

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:rivian:r1s | Rivian R1S | Rivian R1S | Rivian R1S | リビアンR1S | class:us:standard-suv | body:suv | pt:bev | current · 2022–present | 纯电三排座SUV(2022年交付,与R1T同平台,2024年第二代) |
| model:rivian:r1t | Rivian R1T | Rivian R1T | Rivian R1T | リビアンR1T | class:us:pickup | body:pickup | pt:bev | current · 2021–present | 品牌首款量产车,纯电中型皮卡(2021年交付,2024年第二代) |
| model:rivian:r2 | Rivian R2 | Rivian R2 | Rivian R2 | リビアンR2 | class:us:standard-suv | body:suv | pt:bev | current · 2026–present | 入门级中型纯电SUV(2024年发布,2026年交付),另规划紧凑型R3 |

## Roewe

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:roewe:360 | Roewe 360 | 荣威360 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2015-2019 | 荣威360(2015-2019),上汽荣威紧凑型轿车,2019年停产 |
| model:roewe:750 | Roewe 750 | 荣威750 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2006-2013 | 荣威750(2006-2013),荣威首款车型(源自罗孚75),2013年停产 |
| model:roewe:clever | Roewe Clever | 科莱威 | Roewe Clever | — | class:cn:a00 | body:hatchback | pt:bev | current · 2020-present | 科莱威(2020-),上汽荣威微型纯电两厢车 |
| model:roewe:d5x | Roewe D5X | 荣威D5X | Roewe D5X | — | class:cn:a | body:suv | pt:phev | current · 2024–present | 紧凑型插混SUV(DMH超级混动) |
| model:roewe:d5x-dmh | Roewe D5X DMH | 荣威D5X DMH | — | — | class:cn:a | body:suv | pt:phev | current · 2024-present | 荣威D5X DMH(2024-),荣威紧凑型插混SUV |
| model:roewe:d7 | Roewe D7 | 荣威D7 | Roewe D7 | — | class:cn:b | body:sedan | pt:bev | current · 2023–present | 中型轿车,纯电(D7 EV)与插混(D7 DMH)双动力 |
| model:roewe:e50 | Roewe e50 | 荣威e50 | — | — | class:cn:a | body:hatchback | pt:bev | discontinued · 2012-2016 | 荣威e50(2012-2016),荣威首款纯电微型车,2016年停产 |
| model:roewe:e550 | Roewe e550 | 荣威e550 | — | — | class:cn:a | body:sedan | pt:phev | discontinued · 2015-2019 | 荣威e550(2015-2019),550的插电混动版,2019年停产 |
| model:roewe:e950 | Roewe e950 | 荣威e950 | Roewe e950 | — | class:cn:c | body:sedan | pt:phev | discontinued · 2016–2019 | 荣威950插电混动版(中大型轿车,2016年上市);约2019年停产 |
| model:roewe:e9c356cbeb | Longmao | 龙猫 | — | — | class:cn:a | body:suv | pt:hev | current · 2022-present | 荣威龙猫(2022-),荣威首款HEV SUV |
| model:roewe:ei5 | Roewe Ei5 | 荣威Ei5 | Roewe Ei5 | — | class:cn:a | body:wagon | pt:bev | current · 2018-present | 荣威Ei5(2018-),紧凑型纯电旅行车(出租/网约车常见) |
| model:roewe:er6 | Rising Auto ER6 | 飞凡ER6 | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2020-2022 | 飞凡ER6(2020-2022),飞凡品牌纯电轿车(原荣威R ER6),2022年停产 |
| model:roewe:fd7be99643 | Whale | 鲸 | — | — | class:cn:a | body:coupe | pt:ice | current · 2022-present | 荣威鲸(2022-),荣威首款轿跑SUV |
| model:roewe:i5 | Roewe i5 | 荣威i5 | Roewe i5 | — | class:cn:a | body:sedan | pt:ice | current · 2018–present | 上汽荣威紧凑型轿车(走量车型) |
| model:roewe:i6 | Roewe i6 | 荣威i6 | Roewe i6 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2017–2021 | 紧凑型轿车,含i6 MAX/Ei6衍生;约2021年停产 |
| model:roewe:i6-max-2 | Roewe i6 MAX | 荣威i6 MAX | — | — | class:cn:a | body:sedan | pt:ice | current · 2020-present | 荣威i6 MAX(2020-),i6的升级版 |
| model:roewe:imax8 | Roewe iMAX8 | 荣威iMAX8 | Roewe iMAX8 | — | class:cn:mpv | body:mpv | pt:ice | current · 2020–present | 中大型MPV(7座),燃油与EV版 |
| model:roewe:m7-dmh | Roewe M7 DMH | 荣威M7 DMH | — | — | class:cn:a | body:mpv | pt:phev | current · 2024-present | 荣威M7 DMH(2024-),荣威插混MPV |
| model:roewe:marvel-r | Roewe MARVEL R | 荣威MARVEL R | Roewe MARVEL R | — | class:cn:b | body:suv | pt:bev | discontinued · 2020–2022 | 纯电中型SUV(上汽R品牌时期车型);约2022年停产 |
| model:roewe:marvel-r-2 | Rising Auto MARVEL R | 飞凡MARVEL R | — | — | class:cn:a | body:suv | pt:bev | discontinued · 2020-2023 | 飞凡MARVEL R(2020-2023),飞凡品牌纯电SUV,2023年停产 |
| model:roewe:marvel-x | Roewe MARVEL X | 荣威MARVEL X | — | — | class:cn:a | body:suv | pt:bev | discontinued · 2018-2021 | 荣威MARVEL X(2018-2021),荣威纯电中型SUV,2021年停产 |
| model:roewe:roewe-07 | Jiayue 07 | 家越07 | — | — | class:cn:a | body:suv | pt:ice | current · 2025-present | 家越07(2025-),荣威插混SUV |
| model:roewe:roewe-350 | Roewe 350 | 荣威350 | Roewe 350 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2010–2018 | 紧凑型轿车;约2018年停产 |
| model:roewe:roewe-550 | Roewe 550 | 荣威550 | Roewe 550 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2008–2015 | 上汽荣威首款战略轿车(源自罗孚75平台);约2015年停产 |
| model:roewe:roewe-950 | Roewe 950 | 荣威950 | Roewe 950 | — | class:cn:c | body:sedan | pt:ice | discontinued · 2012–2020 | 上汽荣威中大型轿车(与别克君越同平台,2012年上市);约2020年停产 |
| model:roewe:roewe-d6 | Roewe D6 | 荣威D6 | — | — | class:cn:a | body:sedan | pt:bev | current · 2025-present | 荣威D6(2025-),荣威纯电轿车 |
| model:roewe:roewe-e6 | Roewe E6 | 荣威E6 | — | — | class:cn:a | body:sedan | pt:bev | current · 2025-present | 荣威E6(2025-),荣威纯电轿车 |
| model:roewe:roewe-f7 | Rising Auto F7 | 飞凡F7 | — | — | class:cn:a | body:sedan | pt:bev | current · 2023-present | 飞凡F7(2023-),飞凡品牌纯电轿车 |
| model:roewe:roewe-i6-2 | i6 Classic | i6经典 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2019-2022 | 荣威i6经典(2019-2022),i6老款同堂销售,2022年停产 |
| model:roewe:roewe-r7 | Rising Auto R7 | 飞凡R7 | — | — | class:cn:a | body:suv | pt:bev | current · 2022-present | 飞凡R7(2022-),飞凡品牌纯电SUV |
| model:roewe:rx3 | Roewe RX3 | 荣威RX3 | Roewe RX3 | — | class:cn:a | body:suv | pt:ice | current · 2017-present | 荣威RX3(2017-),上汽荣威紧凑型SUV,2021年改款RX3 PRO |
| model:roewe:rx5 | Roewe RX5 | 荣威RX5 | Roewe RX5 | — | class:cn:a | body:suv | pt:ice | current · 2016–present | 紧凑型SUV,2022年第三代;含eRX5/RX5 eMAX插混与RX5 MAX衍生(并入本条) |
| model:roewe:rx5-emax | Roewe RX5 eMAX | 荣威RX5 eMAX | — | — | class:cn:c | body:suv | pt:phev | current · 2019-present | 荣威RX5 eMAX(2019-),RX5 MAX插电混动版 |
| model:roewe:rx5-max | Roewe RX5 MAX | 荣威RX5 MAX | — | — | class:cn:c | body:suv | pt:ice | current · 2019-present | 荣威RX5 MAX(2019-),荣威紧凑型SUV |
| model:roewe:rx8 | Roewe RX8 | 荣威RX8 | Roewe RX8 | — | class:cn:c | body:suv | pt:ice | discontinued · 2018–2022 | 中大型非承载式SUV(7座);约2022年停产 |
| model:roewe:rx9 | Roewe RX9 | 荣威RX9 | Roewe RX9 | — | class:cn:c | body:suv | pt:ice | current · 2023–present | 中大型SUV(6/7座) |
| model:roewe:w5 | Roewe W5 | 荣威W5 | Roewe W5 | — | class:cn:b | body:suv | pt:ice | discontinued · 2011–2017 | 上汽荣威中型硬派SUV(非承载式车身,2011年上市);约2017年停产 |

## Rolls-Royce

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:rolls-royce:corniche | Rolls-Royce Corniche | 劳斯莱斯险路 | 勞斯萊斯Corniche | ロールス・ロイス コーニッシュ | class:eu:f | body:convertible | pt:ice | discontinued · 1971–1996 | 豪华敞篷车,基于Silver Shadow/Corniche系列;2000–2002年曾以Silver Seraph平台复产 |
| model:rolls-royce:cullinan | Rolls-Royce Cullinan | 劳斯莱斯库里南 | 勞斯萊斯庫里南 | ロールス・ロイス カリナン | class:eu:j | body:suv | pt:ice | current · 2018–present | 品牌首款SUV,与幻影共享「Architecture of Luxury」平台,2024年中期改款 |
| model:rolls-royce:dawn | Rolls-Royce Dawn | 劳斯莱斯曜影 | 勞斯萊斯曜影 | ロールス・ロイス ドーン | class:eu:f | body:convertible | pt:ice | discontinued · 2015–2023 | 四座敞篷车,2023年停产,为Spectre的上市让路 |
| model:rolls-royce:ghost | Rolls-Royce Ghost | 劳斯莱斯古思特 | 勞斯萊斯幽靈 | ロールス・ロイス ゴースト | class:eu:f | body:sedan | pt:ice | current · 2010–present | 定位低于幻影的大型豪华轿车,第二代(2020–)为现款 |
| model:rolls-royce:park-ward | Rolls-Royce Park Ward | 劳斯莱斯Park Ward | 勞斯萊斯Park Ward | ロールス・ロイス パークウォード | class:eu:f | body:limousine | pt:ice | discontinued · 1998–2002 | Silver Seraph的长轴加长版,名称致敬经典车身制造商Park Ward |
| model:rolls-royce:phantom | Rolls-Royce Phantom | 劳斯莱斯幻影 | 勞斯萊斯幻影 | ロールス・ロイス ファントム | class:eu:f | body:sedan | pt:ice | current · 2003–present | 旗舰豪华轿车,宝马时代首款车型(Phantom VII 2003–2017),现款为Phantom VIII(2017–),提供标准轴与长轴版 |
| model:rolls-royce:silver-cloud | Rolls-Royce Silver Cloud | 劳斯莱斯银云 | 勞斯萊斯銀雲 | ロールス・ロイス シルバークラウド | class:eu:f | body:sedan | pt:ice | discontinued · 1955–1966 | 银影之前的大型豪华轿车,分Silver Cloud I/II/III三代(1955/1958/1962换代);中文译名「银云」 |
| model:rolls-royce:silver-seraph | Rolls-Royce Silver Seraph | 劳斯莱斯银天使 | 勞斯萊斯銀天使 | ロールス・ロイス シルバーセラフ | class:eu:f | body:sedan | pt:ice | discontinued · 1998–2002 | 大众短暂持有劳斯莱斯品牌时期的车型,宝马提供V12发动机,2002年停产 |
| model:rolls-royce:silver-shadow | Rolls-Royce Silver Shadow | 劳斯莱斯银影 | 勞斯萊斯銀影 | ロールス・ロイス シルバーシャドウ | class:eu:f | body:sedan | pt:ice | discontinued · 1965–1980 | 采用承载式车身的现代劳斯莱斯奠基之作,含长轴Silver Shadow LWB版 |
| model:rolls-royce:silver-spur | Rolls-Royce Silver Spur | 劳斯莱斯银刺 | 勞斯萊斯銀刺 | ロールス・ロイス シルバースパー | class:eu:f | body:sedan | pt:ice | discontinued · 1980–1999 | Silver Spirit系列的长轴版本,取代Silver Shadow的长轴款 |
| model:rolls-royce:spectre | Rolls-Royce Spectre | 劳斯莱斯闪灵 | 勞斯萊斯閃靈 | ロールス・ロイス スペクター | class:eu:f | body:coupe | pt:bev | current · 2023–present | 品牌首款纯电动车型,双门轿跑,2022年发布、2023年交付 |
| model:rolls-royce:wraith | Rolls-Royce Wraith | 劳斯莱斯魅影 | 勞斯萊斯魅影 | ロールス・ロイス レイス | class:eu:f | body:coupe | pt:ice | discontinued · 2013–2022 | 基于Ghost的双门轿跑,品牌当时最快车型,2022年停产 |

## Saab

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:saab:9-3 | Saab 9-3 | 萨博9-3 | 紳寶9-3 | サーブ9-3 | class:eu:d | body:sedan | pt:ice | discontinued · 1998–2014 | 品牌主力中型车,含SportCombi旅行版;2014年随品牌停产 |
| model:saab:9-5 | Saab 9-5 | 萨博9-5 | 紳寶9-5 | サーブ9-5 | class:eu:e | body:sedan | pt:ice | discontinued · 1997–2012 | 旗舰行政轿车,2012年停产 |
| model:saab:900 | Saab 900 | 萨博900 | 紳寶900 | サーブ900 | class:eu:d | body:sedan | pt:ice | discontinued · 1978–1998 | 经典掀背轿车(1980-90年代),含900 Turbo/9000 Aero,1998年由9-3接替 |
| model:saab:9000 | Saab 9000 | 萨博9000 | 紳寶9000 | サーブ9000 | class:eu:e | body:sedan | pt:ice | discontinued · 1984–1998 | Type Four平台旗舰轿车(与菲亚特Croma同源),1998年停产 |
| model:saab:96 | Saab 96 | 萨博96 | 紳寶96 | サーブ96 | class:eu:c | body:sedan | pt:ice | discontinued · 1960–1980 | 前驱双冲程/四冲程V4经典车型,拉力赛场常胜军 |

## SEAT

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:seat:arona | SEAT Arona | 西雅特Arona | SEAT Arona | セアト・アロナ | class:eu:j | body:crossover | pt:ice | current · 2017–present | 基于Ibiza的小型SUV |
| model:seat:ateca | SEAT Ateca | 西雅特Ateca | SEAT Ateca | セアト・アテカ | class:eu:j | body:suv | pt:ice | current · 2016–present | 品牌首款SUV(与大众途观同平台) |
| model:seat:ibiza | SEAT Ibiza | 西雅特Ibiza | SEAT Ibiza | セアト・イビサ | class:eu:b | body:hatchback | pt:ice | current · 1984–present | 品牌主力小型车(第五代2017,大众MQB平台);大陆未引进 |
| model:seat:leon | SEAT León | 西雅特León | SEAT León | セアト・レオン | class:eu:c | body:hatchback | pt:ice | current · 1999–present | 高尔夫姊妹车(第四代2020),含Cupra性能版 |
| model:seat:tarraco | SEAT Tarraco | 西雅特Tarraco | SEAT Tarraco | セアト・タラコ | class:eu:j | body:suv | pt:ice | discontinued · 2018–2024 | 品牌旗舰中大型SUV(7座),2024年前后停产(西雅特品牌转型) |

## Siming

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:siming:ciimo | Siming (CIIMO) | 思铭 | 思銘 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2012–2018 | 东风本田思铭紧凑型轿车,基于第八代思域(2006款)改进,2012年上市 |

## Smart

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:smart:crossblade | Crossblade | Crossblade | Crossblade | スマート・クロスブレード | class:eu:a | body:roadster | pt:ice | discontinued · 2002–2002 | 基于fortwo的无风挡/无车门限量版,全球仅2000台 |
| model:smart:forfour | forfour | smart forfour | smart forfour | スマート・フォーフォー | class:eu:a | body:hatchback | pt:ice | discontinued · 2004–2021 | 四门四座版;第一代2004–2006,第二代2014–2021(与雷诺Twingo同平台),EQ纯电版2019–2021 |
| model:smart:fortwo | fortwo | smart fortwo | smart fortwo | スマート・フォーツー | class:eu:a | body:city-car | pt:ice | discontinued · 1998–2024 | Smart品牌标志性双座微型车;初代称City-Coupé;日本市场另有K-car规格版smart K;2018年起仅售纯电版(smart EQ fortwo),2024年停产 |
| model:smart:hashtag-1 | #1 | smart精灵#1 | smart #1 | スマート#1 | class:eu:c | body:suv | pt:bev | current · 2022–present | 与吉利合资后的首款纯电紧凑型SUV,中国浙江生产并出口全球;官方中文名「smart精灵#1」 |
| model:smart:hashtag-3 | #3 | smart精灵#3 | smart #3 | スマート#3 | class:eu:c | body:coupe | pt:bev | current · 2023–present | #1的轿跑SUV版,官方中文名「smart精灵#3」 |
| model:smart:hashtag-5 | #5 | smart精灵#5 | smart #5 | スマート#5 | class:cn:b | body:suv | pt:bev | current · 2024–present | smart精灵系列第三款(继#1/#3),中型纯电SUV(车长4.7米级,800V平台),2024年10月中国上市;含BRABUS性能版,2025年海外上市 |
| model:smart:roadster | Roadster | smart Roadster | smart Roadster | スマート・ロードスター | class:eu:s | body:roadster | pt:ice | discontinued · 2003–2007 | 中置后驱双座小跑车,销量不佳未出第二代 |

## Sol

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:sol:3d9d67c8c0 | Sol Aipao | 思皓爱跑 | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2022–2024 | 思皓爱跑(2022-2024),纯电轿车,已停产 |
| model:sol:a3c939ff6d | Flower Fairy | 花仙子 | — | — | class:cn:a00 | body:city-car | pt:bev | discontinued · 2021–2023 | 思皓花仙子(2021-2023),纯电微型车,已停产 |
| model:sol:a5 | Sol A5 | 思皓A5 | Sol A5 | — | class:cn:a | body:hatchback | pt:ice | current · 2020–present | 思皓品牌紧凑型掀背轿车,由江淮嘉悦A5换标而来 |
| model:sol:e10x | Sol E10X | 思皓E10X | Sol E10X | — | class:cn:a00 | body:hatchback | pt:bev | current · 2021–present | 思皓品牌纯电动微型车 |
| model:sol:e20x | Sol E20X | 思皓E20X | — | — | class:cn:a0 | body:suv | pt:bev | discontinued · 2019–2022 | 思皓E20X(2019-2022),思皓首款纯电SUV,基于江淮iEV7S,已停产 |
| model:sol:e40x | Sol E40X | 思皓E40X | — | — | class:cn:a0 | body:suv | pt:bev | discontinued · 2021–2023 | 思皓E40X(2021-2023),纯电小型SUV,已停产 |
| model:sol:e50a | Sol E50A | 思皓E50A | Sol E50A | — | class:cn:a | body:hatchback | pt:bev | current · 2021–present | 思皓品牌纯电紧凑型轿车(思皓A5的纯电版) |
| model:sol:qx | Sol QX | 思皓QX | Sol QX | — | class:cn:a | body:suv | pt:ice | current · 2021–present | 思皓品牌紧凑型SUV |
| model:sol:sol-x4 | Sol X4 | 思皓X4 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2021–2023 | 思皓X4(2021-2023),紧凑型SUV,由嘉悦X4换标,已停产 |
| model:sol:x8 | Sol X8 | 思皓X8 | Sol X8 | — | class:cn:b | body:suv | pt:ice | current · 2020–present | 思皓品牌中型SUV(7座) |
| model:sol:x8-plus | Sol X8 PLUS | 思皓X8 PLUS | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2022–2024 | 思皓X8 PLUS(2022-2024),X8升级版7座SUV,已停产 |

## Soueast

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:soueast:2053bc1dee | Soueast Galant | 东南戈蓝 | — | — | class:cn:b | body:sedan | pt:ice | discontinued · 2006–2011 | 戈蓝(2006-2011),东南三菱中型轿车,基于三菱Galant,已停产 |
| model:soueast:689b1c8ac9 | Xiwang | 希旺 | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2011–2015 | 希旺(2011-2015),东南微面/厢式车,已停产 |
| model:soueast:a5-yiwu | Soueast A5 Yiwu | A5翼舞 | A5 Yiwu | — | class:cn:a | body:sedan | pt:ice | discontinued · 2018–2021 | 东南A5翼舞(2018-2021),紧凑型轿车,东南汽车末期车型,已停产 |
| model:soueast:c6a31c13aa | Lingshuai | 菱帅 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2003–2008 | 菱帅(2003-2008),东南轿车,基于三菱Lancer平台,已停产 |
| model:soueast:delica | Soueast Delica | 得利卡 | Delica | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 1996–2015 | 东南得利卡MPV/厢式车(1996年投产),源自三菱Delica技术;约2015年停产 |
| model:soueast:dx3 | Soueast DX3 | DX3 | DX3 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2016–2021 | 东南DX3小型SUV(2016年上市),曾为东南销量支柱 |
| model:soueast:dx5 | Soueast DX5 | DX5 | DX5 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2019–2021 | 东南DX5(2019-2021),小型SUV,已停产 |
| model:soueast:dx7 | Soueast DX7 | DX7 | DX7 | — | class:cn:a | body:suv | pt:ice | discontinued · 2015–2021 | 东南DX7(2015-2021),紧凑型SUV,东南首款SUV,已停产 |
| model:soueast:dx8 | Soueast DX8 | 东南DX8 | — | — | class:cn:b | body:suv | pt:ice | current · 2022–present | 东南DX8(2022-),中型SUV,捷途X70换标车型 |
| model:soueast:dx8s | Soueast DX8S | 东南DX8S | — | — | class:cn:b | body:suv | pt:ice | current · 2022–present | 东南DX8S(2022-),中型SUV,捷途X70换标车型 |
| model:soueast:v3-lingyue | Soueast V3 Lingyue | V3菱悦 | V3 Lingyue | — | class:cn:a | body:sedan | pt:ice | discontinued · 2008–2015 | 东南V3菱悦紧凑型轿车(2008年上市),源自三菱Lancer平台技术;约2015年停产 |
| model:soueast:v5-lingzhi | Soueast V5 Lingzhi | V5菱致 | V5 Lingzhi | — | class:cn:a | body:sedan | pt:ice | discontinued · 2012–2017 | 东南V5菱致紧凑型轿车(2012年上市);约2017年停产 |
| model:soueast:v6-lingshi | Soueast V6 Lingshi | V6菱仕 | V6 Lingshi | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2013–2016 | 东南V6菱仕紧凑型两厢车(2013年上市),为V5菱致的两厢版;约2016年停产 |

## SsangYong

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:ssangyong:123084448d | XLV | 途凌 | — | — | class:eu:j | body:crossover | pt:ice | discontinued · 2016–2020 | 途凌(XLV,2016-2020),Tivoli加长版跨界SUV,双龙进口中国市场 |
| model:ssangyong:5664c8706f | Kyron | 享御 | — | — | class:eu:j | body:suv | pt:ice | discontinued · 2005–2011 | 享御(Kyron,2005-2011),双龙中型SUV,中国以进口销售 |
| model:ssangyong:actyon | SsangYong Actyon | 双龙爱腾 | 雙龍Actyon | サンヨン・アクティオン | class:eu:j | body:suv | pt:ice | discontinued · 2005–2016 | 进口紧凑SUV(英文名Actyon),中国市场名爱腾;另有皮卡版Actyon Sports,2016年停产 |
| model:ssangyong:chairman | SsangYong Chairman | 双龙主席 | 雙龍Chairman | サンヨン・チェアマン | class:cn:d | body:limousine | pt:ice | discontinued · 1997–2017 | 旗舰豪华轿车(基于奔驰E级技术,含加长版),2017年停产 |
| model:ssangyong:korando | SsangYong Korando | 双龙柯兰多 | 雙龍Korando | サンヨン・コランド | class:eu:j | body:suv | pt:ice | current · 2010–present | 紧凑型SUV(2023年电动化改款Korando e-Motion),现以KGM品牌销售 |
| model:ssangyong:rexton | SsangYong Rexton | 双龙雷斯特 | 雙龍Rexton | サンヨン・レックスターン | class:eu:j | body:suv | pt:ice | current · 2001–present | 品牌旗舰非承载式中大型SUV(2024年第四代,现以KGM品牌销售) |
| model:ssangyong:rexton-w | SsangYong Rexton W | 双龙雷斯特W | 雙龍Rexton W | サンヨン・レックスターンW | class:eu:j | body:suv | pt:ice | discontinued · 2013–2018 | 进口中大型SUV,第二代Rexton的改款版,中国市场名雷斯特W;2018年停产 |
| model:ssangyong:rodius | SsangYong Rodius | 双龙路帝 | 雙龍Rodius | サンヨン・ロディウス | class:eu:m | body:mpv | pt:ice | discontinued · 2007–2016 | 进口MPV(英文名Rodius),最多9座布局;2016年停产 |
| model:ssangyong:tivoli | SsangYong Tivoli | 双龙蒂维拉 | 雙龍Tivoli | サンヨン・ティボリ | class:eu:j | body:crossover | pt:ice | current · 2015–present | 品牌首款小型跨界SUV,含加长版XLV |
| model:ssangyong:torres | SsangYong Torres | 双龙Torres | 雙龍Torres | サンヨン・トレス | class:eu:j | body:suv | pt:ice | current · 2022–present | 硬派风格中型SUV(2022年上市),含纯电Torres EVX |

## Subaru

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:subaru:alcyone-svx | Alcyone SVX | SVX | SVX | アルシオーネSVX | class:eu:s | body:coupe | pt:ice | discontinued · 1991–1996 | 豪华GT轿跑,特色为窗下沿上升的窗内式设计,水平对置六缸 |
| model:subaru:ascent | Ascent | Ascent | Ascent | アセント | class:us:standard-suv | body:suv | pt:ice | current · 2019–present | 三排座中大型SUV,北美市场,斯巴鲁最大SUV,Tribeca后继 |
| model:subaru:baja | Baja | Baja | Baja | バハ | class:us:pickup | body:pickup | pt:ice | discontinued · 2002–2006 | 皮卡/旅行混种车,北美市场,基于Outback |
| model:subaru:brz | BRZ | BRZ | BRZ | BRZ | class:eu:s | body:coupe | pt:ice | current · 2012–present | 后驱双门跑车,与丰田86/GR86为姊妹车(斯巴鲁生产) |
| model:subaru:crosstrek | Crosstrek (XV) | 旭豹/XV | Crosstrek | クロストレック | class:eu:j | body:crossover | pt:ice | current · 2012–present | 基于Impreza的小型跨界SUV;2012-2022年国际市场称XV(日本称Impreza XV),2023年全球改称Crosstrek,大陆官方名旭豹 |
| model:subaru:exiga | Exiga | Exiga | Exiga | エクシーガ | class:eu:m | body:mpv | pt:ice | discontinued · 2008–2018 | 7座MPV/旅行混种车,日本及部分亚洲市场 |
| model:subaru:forester | Forester | 森林人 | Forester | フォレスター | class:eu:j | body:suv | pt:ice | current · 1997–present | 紧凑型SUV,斯巴鲁全球主力车型之一 |
| model:subaru:impreza | Impreza | 翼豹(旧译)/Impreza | Impreza | インプレッサ | class:cn:a | body:hatchback | pt:ice | current · 1992–present | 紧凑型轿车;大陆早期译名翼豹,现款为两厢掀背 |
| model:subaru:justy | Justy | Justy | Justy | ジャスティ | class:jp:small | body:minivan | pt:hev | current · 1984–present | 1984-1994年为小型车;2016年起为日本专用滑门小型MPV(大发Thor贴牌) |
| model:subaru:legacy | Legacy | 力狮 | Legacy | レガシィ | class:cn:b | body:sedan | pt:ice | discontinued · 1989–2025 | 中型轿车/旅行车;北美2020年款后停售,2025年全面停产 |
| model:subaru:leone | Leone | Leone | Leone | レオーネ | class:eu:c | body:sedan | pt:ice | discontinued · 1971–1994 | 斯巴鲁首款前驱轿车,四驱版先驱;海外称GL/DL系列,出口澳洲称Sherpa |
| model:subaru:levorg | Levorg / WRX Wagon | Levorg | Levorg | レヴォーグ | class:eu:d | body:wagon | pt:ice | current · 2014–present | 基于Impreza/WRX的中型旅行车;澳洲称WRX Sportswagon,另有跨界版Levorg Layback(2023-) |
| model:subaru:outback | Outback | 傲虎 | Outback | アウトバック | class:eu:j | body:suv | pt:ice | current · 1994–present | 由力狮旅行车升高底盘而来;2025年第六代转为跨界SUV定位 |
| model:subaru:sambar | Sambar | Sambar | Sambar | サンバー | class:jp:kei | body:kei-truck | pt:ice | current · 1961–present | 日本K-car轻卡/厢式车;2012年起为大发Hijet贴牌,乘用版称Sambar Dias |
| model:subaru:solterra | Solterra | SOLTERRA | Solterra | ソルテラ | class:eu:j | body:crossover | pt:bev | current · 2022–present | 斯巴鲁首款量产纯电动车,与丰田bZ4X共同开发 |
| model:subaru:tribeca | Tribeca | 驰鹏 | Tribeca | トライベッカ | class:us:standard-suv | body:suv | pt:ice | discontinued · 2005–2014 | 三排座SUV;大陆官方译名驰鹏,北美市场为主 |
| model:subaru:vivio | Vivio | Vivio | Vivio | ヴィヴィオ | class:jp:kei | body:hatchback | pt:ice | discontinued · 1992–1998 | K-car,斯巴鲁最后一款自主研发的轻自动车 |
| model:subaru:wrx | WRX | WRX | WRX | WRX | class:cn:a | body:sedan | pt:ice | current · 1992–present | 1992-2014年为Impreza高性能版(Impreza WRX),2014年起独立车系;WRX STI版本2021年后不再推出新车 |

## Suzuki

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:suzuki:across | Across | ACROSS(未引入) | — | — | class:eu:j | body:suv | pt:phev | current · 2020–present | 欧洲市场车型,丰田RAV4 Prime换标插混SUV,2020年上市;未引入中国/日本 |
| model:suzuki:aerio | Aerio | 利亚纳(昌河铃木) | Aerio | エリオ | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2001–2007 | 紧凑两厢车/三厢,全球战略车,SX4前身;大陆昌河铃木利亚纳为Aerio Sedan贴牌(2013年改款名利亚纳A6);官方历史资料库收录 |
| model:suzuki:alto | Alto | 奥拓 | Alto | アルト | class:jp:kei | body:hatchback | pt:ice | current · 1979–present | K-car代表车型;大陆长安奥拓(1992-2018);马自达Carol同源;另有印度版Alto K10 |
| model:suzuki:alto-800 | Alto 800 | 铃木Alto 800 | — | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2012–2021 | Maruti Suzuki印度市场奥拓800,2012年上市(替代Maruti 800),2021年停产,由新一代Alto K10接替 |
| model:suzuki:alto-lapin | Alto Lapin | 奥拓兔子 | Alto Lapin | アルトラパン | class:jp:kei | body:hatchback | pt:ice | current · 2002–present | 复古风格K-car,日本市场;马自达Spiano同源 |
| model:suzuki:apv | APV | 铃木APV | — | — | class:cn:mpv | body:van | pt:ice | current · 2004–present | 铃木印尼市场商用厢式车(可载7-8人),2004年上市,主要销往东南亚/大洋洲 |
| model:suzuki:baleno | Baleno | Baleno | Baleno | バレーノ | class:eu:b | body:hatchback | pt:ice | current · 2015–present | 全球版小型车,印度Maruti生产(2022年二代);1995-2007年旧名Cultus Crescent/Esteem(同源不同代) |
| model:suzuki:beidouxing-x5 | Beidouxing X5 | 北斗星X5 | — | — | class:cn:a00 | body:crossover | pt:ice | discontinued · 2012–2018 | 昌河铃木北斗星X5,2012年上市,基于Wagon R平台的跨界风格微型车,2018年停产 |
| model:suzuki:cappuccino | Cappuccino | 卡布奇诺 | Cappuccino | カプチーノ | class:jp:kei | body:roadster | pt:ice | discontinued · 1991–1998 | K-car双座敞篷跑车,中置后驱 |
| model:suzuki:cara | Cara | Cara | Cara | キャラ | class:jp:kei | body:coupe | pt:ice | discontinued · 1993–1996 | K-car中置后驱跑车,与马自达AZ-1同源(鸥翼门);官方历史资料库收录 |
| model:suzuki:carry | Carry | Carry | Carry | キャリイ | class:jp:kei | body:kei-truck | pt:ice | current · 1961–present | K-car轻卡,铃木最悠久车系之一;马自达Scrum、三菱Minicab Truck、日产NT100 Clipper同源;印尼另有1.5L版Carry |
| model:suzuki:celerio | Celerio | Celerio | Celerio | セレリオ | class:eu:a | body:hatchback | pt:ice | current · 2008–present | 城市微型车,印度/新兴市场;巴基斯坦称Cultus;2014/2021年换代 |
| model:suzuki:cervo | Cervo | Cervo | Cervo | セルボ | class:jp:kei | body:hatchback | pt:ice | discontinued · 1977–2011 | K-car轿跑/小型车(5代),1983年衍生单排皮卡Mighty Boy;初代Cervo为时尚双门跑车风格;官方历史资料库收录 |
| model:suzuki:ciaz | Ciaz | 铃木Ciaz(启悦海外版) | — | — | class:cn:a | body:sedan | pt:ice | current · 2014–present | Maruti Suzuki印度市场紧凑型轿车,2014年上市,2018年改款;中国长安铃木启悦即同款(另行收录) |
| model:suzuki:cultus | Cultus | 羚羊 | 福星 | カルタス | class:cn:a0 | body:hatchback | pt:ice | discontinued · 1983–2003 | 日本名Cultus,海外即初代/二代Swift(1983-2000);含Turbo/GT-i/Convertible与三厢Esteem/Crescent系列;官方历史资料库收录 |
| model:suzuki:dzire | Dzire | 铃木Dzire(Swift三厢版) | — | — | class:cn:a0 | body:sedan | pt:ice | current · 2012–present | Maruti Suzuki印度市场Swift三厢版轿车,2012年上市,2022年换代;印度紧凑型轿车销量冠军 |
| model:suzuki:eeco | Eeco | 铃木Eeco | — | — | class:cn:mpv | body:van | pt:ice | current · 2010–present | Maruti Suzuki印度市场微型面包车,2010年上市(Omni后继),含5/7座客运与货运版 |
| model:suzuki:ertiga | Ertiga | Ertiga | Ertiga | エルティガ | class:eu:m | body:mpv | pt:ice | current · 2012–present | 三排座紧凑MPV,印度/印尼生产;马自达VX-1同源;丰田Rumion姊妹车 |
| model:suzuki:every | Every | 浪迪（昌河铃木） | Every | エブリイ | class:jp:kei | body:van | pt:ice | current · 1982–present | K-car厢式货车,乘用版Every Wagon(1999-);马自达Scrum Van、三菱Minicab Van、日产NV100 Clipper同源 |
| model:suzuki:fengyu | SX4 S-Cross (China-market Fengyu) | 锋驭 | SX4 CROSSOVER | エスクロス | class:eu:j | body:crossover | pt:ice | discontinued · 2013–2018 | 此条指长安铃木中国市场的锋驭,2013年底上市、2017年中改后更名骁途,2018年停产;不代表海外SX4 S-Cross车系停产,后者另有在售记录 |
| model:suzuki:fronte | Fronte | Fronte | Fronte | フロンテ | class:jp:kei | body:hatchback | pt:ice | discontinued · 1962–1989 | 铃木主力K-car系列(TLA→FEA→Fronte 360→7-S→7代),含Coupe/Hatch等衍生;官方历史资料库收录 |
| model:suzuki:fronte-800 | Fronte 800 | Fronte 800 | Fronte 800 | フロンテ800 | class:eu:a | body:sedan | pt:ice | discontinued · 1965–1971 | 铃木首款普通尺寸轿车(非K-car),800cc;官方历史资料库收录 |
| model:suzuki:fronx | Fronx | 铃木Fronx | — | — | class:cn:a0 | body:crossover | pt:ice | current · 2023–present | Maruti Suzuki印度市场小型跨界SUV,2023年上市,基于Baleno平台;2024年起出口日本等市场 |
| model:suzuki:grand-vitara | Grand Vitara (1998–2019) | 超级维特拉（1998–2019） | Grand Vitara（1998–2019） | エスクード(2-3代) | class:eu:j | body:suv | pt:ice | discontinued · 1998–2019 | 1998–2019年的旧款Grand Vitara/Vitara二、三代海外名(日本称Escudo);印度2022年以Grand Vitara之名推出的是全新城市SUV,已另列为独立在售车型 |
| model:suzuki:grand-vitara-india | Grand Vitara (India) | Grand Vitara（印度） | Grand Vitara（印度） | — | class:eu:j | body:suv | pt:hev | current · 2022–present | Maruti Suzuki印度市场的全新中型SUV,与旧款Grand Vitara不是同一代际;与Toyota Urban Cruiser Hyryder为姊妹车型,2025年推出配置更新 |
| model:suzuki:hustler | Hustler | 哈斯拉 | Hustler | ハスラー | class:jp:kei | body:hatchback | pt:hev | current · 2014–present | SUV风格K-car;马自达Flair Crossover同源 |
| model:suzuki:ignis | Ignis | 英格尼斯 | Ignis | イグニス | class:cn:a0 | body:hatchback | pt:ice | current · 2000–present | 小型跨界风格车;2000-2008年初代,2016年二代复活;大陆以进口名英格尼斯销售 |
| model:suzuki:jimny | Jimny | 吉姆尼 | Jimny | ジムニー | class:eu:j | body:suv | pt:ice | current · 1970–present | 硬派越野车;日本含K-car版Jimny、1.5L版Jimny Sierra与五门Jimny Nomade;海外1985-1995年称Samurai(另行收录) |
| model:suzuki:kei | Kei | Kei | Kei | Kei(ケイ) | class:jp:kei | body:hatchback | pt:ice | discontinued · 1998–2009 | 高顶K-car;马自达Laputa同源 |
| model:suzuki:kizashi | Kizashi | 凯泽西 | Kizashi | キザシ | class:cn:b | body:sedan | pt:ice | discontinued · 2009–2016 | 铃木旗舰轿车;大陆以进口名凯泽西销售;2016年停产,铃木此后退出轿车市场 |
| model:suzuki:landy | Landy | Landy | Landy | ランディ | class:eu:m | body:mpv | pt:hev | current · 2007–present | 日本市场MPV：前三代为日产Serena OEM（2007–2022），第四代起改由丰田OEM。2026年2月因达到计划销售数暂停接单，6月改款后重新上市 |
| model:suzuki:liana-a6 | Liana A6 | 利亚纳A6 | — | — | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2013–2018 | 昌河铃木利亚纳A6,2013年改款,基于Aerio/Liana平台的两厢车,2018年停产 |
| model:suzuki:lingyang | Lingyang | 羚羊 | 羚羊 | リンヤン | class:cn:a0 | body:sedan | pt:ice | discontinued · 2000–2011 | 长安铃木羚羊,基于第三代Suzuki Swift(Cultus)平台的中国特供三厢轿车,1.3L发动机,2000年上市,2004年改款,2011年停产 |
| model:suzuki:maruti-800 | Maruti 800 | 玛鲁蒂800 | — | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 1983–2014 | Maruti Suzuki印度市场首款车型,基于铃木Fronte/Alto平台,1983年上市,2014年停产;累计产销超290万辆,印度国民车 |
| model:suzuki:mighty-boy | Mighty Boy | Mighty Boy | Mighty Boy | マイティボーイ | class:jp:kei | body:pickup | pt:ice | discontinued · 1983–1988 | K-car单排双座小皮卡,源自Cervo底盘;官方历史资料库收录 |
| model:suzuki:mr-wagon | MR Wagon | MR Wagon | MR Wagon | MRワゴン | class:jp:kei | body:hatchback | pt:ice | discontinued · 2001–2016 | 高顶K-car(3代),中置发动机布局得名MR;马自达Flair同源;官方历史资料库收录 |
| model:suzuki:omni | Omni | 铃木Omni | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 1984–2019 | Maruti Suzuki印度市场微型面包车(源自Carry/Van),1984年上市,2019年停产;印度国民神车 |
| model:suzuki:palette | Palette | Palette | Palette | パレット | class:jp:kei | body:hatchback | pt:ice | discontinued · 2008–2013 | 高顶滑门K-car(含SW版),Spacia初代前身;日产OEM名Roox;官方历史资料库收录 |
| model:suzuki:qiyue | Alivio | 启悦 | Alivio | アリーヴィオ | class:cn:a | body:sedan | pt:ice | discontinued · 2014–2018 | 长安铃木启悦,基于Suzuki Alivio全球平台的中国特供三厢轿车(海外同款名Ciaz),1.6L发动机;2014年上市,2018年随长安铃木合资结束停产 |
| model:suzuki:ritz | Ritz | 铃木Ritz | — | — | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2009–2016 | Maruti Suzuki印度市场小型掀背车,2009年上市,即Splash印度版;2016年停产,由新Baleno接替 |
| model:suzuki:s-cross | S-Cross (India, 2015–2022) | S-Cross（印度，2015–2022） | S-Cross（印度，2015–2022） | — | class:eu:j | body:crossover | pt:ice | discontinued · 2015–2022 | Maruti Suzuki印度市场跨界车,2015年上市,2022年停产;与全球版SX4 S-Cross同源 |
| model:suzuki:s-cross-global | S-Cross / SX4 S-Cross (Global) | S-Cross / SX4 S-Cross（国际版） | S-Cross / SX4 S-Cross（國際版） | — | class:eu:j | body:crossover | pt:hev | current · 2013–present | 铃木国际市场紧凑型跨界SUV,部分市场曾称SX4 S-Cross;第三代于2021年发布,2026年英国市场仍销售。与印度已于2022年停产的Maruti S-Cross、以及中国市场锋驭分开记录 |
| model:suzuki:s-presso | S-Presso | 铃木S-Presso | — | — | class:cn:a00 | body:crossover | pt:ice | current · 2019–present | Maruti Suzuki印度市场微型跨界SUV,2019年上市;印尼/南非等市场亦有售 |
| model:suzuki:samurai | Samurai | 吉姆尼武士 | Samurai | ジムニー(SJ) | class:eu:j | body:suv | pt:ice | discontinued · 1985–1995 | Jimny一代/二代的海外版(北美/欧洲等),日本本土称Jimny;美国曾因翻车争议遭媒体批评 |
| model:suzuki:solio | Solio | Solio | Solio | ソリオ | class:jp:small | body:minivan | pt:hev | current · 2000–present | 滑门紧凑MPV,日本及港澳市场;三菱Delica D:2同源 |
| model:suzuki:spacia | Spacia | Spacia | Spacia | スペーシア | class:jp:kei | body:minivan | pt:ice | current · 2013–present | 高顶K-car厢式车,滑门;马自达Flair Wagon同源,另有商用版Spacia Base |
| model:suzuki:splash | Splash | 派喜 | Splash | スプラッシュ | class:eu:a | body:hatchback | pt:ice | discontinued · 2008–2014 | 欧洲市场城市小车,欧宝Agila姊妹车;官方历史资料库收录 |
| model:suzuki:suzulight | Suzulight | 铃木Light(未引入) | Suzulight | スズライト | class:jp:kei | body:sedan | pt:ice | discontinued · 1955–1968 | 铃木首款量产汽车(SS/SP/SL/SD),360cc两冲程;官方历史资料库起始车型;另有TL/FE厢式版 |
| model:suzuki:swift | Swift | 雨燕/速翼特 | Swift | スイフト | class:cn:a0 | body:hatchback | pt:ice | current · 2004–present | 全球战略小型车(1984年名首发);大陆长安铃木雨燕(2005-2018),进口版官方名速翼特(Swift Sport) |
| model:suzuki:sx4 | SX4 | 天语SX4 | SX4 | SX4 | class:eu:j | body:crossover | pt:ice | current · 2006–present | 跨界车;大陆长安铃木天语SX4(2007-2013) |
| model:suzuki:sx4-shangyue | SX4 Shangyue | 天语尚悦 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2011–2016 | 长安铃木天语尚悦,2011年上市的三厢版SX4,2016年停产 |
| model:suzuki:twin | Twin | Twin | Twin | ツイン | class:jp:kei | body:hatchback | pt:hev | discontinued · 2003–2005 | 双座超紧凑K-car,提供电动与轻混动力,铃木早期EV尝试;官方历史资料库收录 |
| model:suzuki:vitara | Vitara / Escudo | 维特拉 | Vitara | エスクード | class:eu:j | body:suv | pt:ice | current · 1988–present | SUV;日本名Escudo;第二代起海外长期称Grand Vitara(另行收录),2015年四代起全球统一Vitara;大陆长安铃木维特拉(2015-2018) |
| model:suzuki:vitara-brezza | Vitara Brezza | 铃木Vitara Brezza | — | — | class:cn:a0 | body:suv | pt:ice | current · 2016–present | Maruti Suzuki印度市场小型SUV,2016年首发(印度本土开发),2022年换代;印度畅销SUV |
| model:suzuki:wagon-r | Wagon R | 北斗星(昌河铃木) | Wagon R | ワゴンR | class:jp:kei | body:hatchback | pt:ice | current · 1993–present | 高顶K-car开创者;大陆昌河铃木北斗星为初代贴牌;马自达Flair同源;印度另有Wagon R |
| model:suzuki:x-90 | X-90 | X90(未引入) | X-90 | X-90(エックス90) | class:eu:j | body:crossover | pt:ice | discontinued · 1995–1998 | 双门Targa顶小型SUV,源自Escudo底盘,主销北美;官方历史资料库收录 |
| model:suzuki:xbee | XBee | XBee | XBee | クロスビー | class:eu:b | body:crossover | pt:hev | current · 2017–present | 日本市场1.2L紧凑型跨界车,并非K-car;铃木于2025年10月发布全面改款的新型XBee并继续销售 |
| model:suzuki:xl6 | XL6 | 铃木XL6 | — | — | class:eu:m | body:mpv | pt:ice | current · 2019–present | Maruti Suzuki印度市场三排座跨界MPV,2019年上市(Ertiga的运动化衍生),6座布局 |
| model:suzuki:xl7 | XL-7 | XL7 | XL7 | XL7(エックスエルセブン) | class:eu:j | body:suv | pt:ice | discontinued · 1998–2009 | Grand Vitara的三排座加长版,北美市场;2020年印尼以Ertiga XL7之名复活(跨界MPV,与初代无血缘) |

## SWM

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:swm:g01 | SWM G01 | G01 | G01 | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2021 | SWM斯威G01紧凑型SUV(2018年上市) |
| model:swm:swm | SWM Big Tiger | SWM斯威大虎 | SWM斯威大虎 | — | class:cn:a | body:suv | pt:ice | current · 2022–present | SWM斯威大虎中型SUV,2022年上市 |
| model:swm:swm-2 | SWM Iron Man | SWM钢铁侠 | SWM鋼鐵俠 | — | class:cn:a | body:suv | pt:ice | current · 2021–present | SWM斯威钢铁侠紧凑型SUV,2021年上市 |
| model:swm:swm-edi | SWM Big Tiger EDi | SWM斯威大虎EDi | SWM斯威大虎EDi | — | class:cn:a | body:suv | pt:phev | current · 2023–present | SWM斯威大虎插电混动版,2023年上市 |
| model:swm:swm-g05 | SWM G05 | SWM斯威G05 | SWM斯威G05 | — | class:cn:a | body:suv | pt:ice | discontinued · 2019–2021 | SWM斯威G05紧凑型SUV,2019年上市,7座布局 |
| model:swm:x2 | SWM X2 | 斯威X2 | 斯威X2 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2020–2021 | SWM斯威X2小型SUV |
| model:swm:x3 | SWM X3 | X3 | X3 | — | class:cn:a | body:suv | pt:ice | discontinued · 2019–2021 | SWM斯威X3紧凑型SUV(2019年上市) |
| model:swm:x7 | SWM X7 | X7 | X7 | — | class:cn:b | body:suv | pt:ice | discontinued · 2016–2021 | SWM斯威X7中型SUV(2016年上市),SWM品牌入华首款车型,7座布局 |

## Tata

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:tata:altroz | Tata Altroz | 塔塔Altroz | Tata Altroz | タタ・アルトロズ | class:eu:b | body:hatchback | pt:ice | current · 2020–present | 高端紧凑型两厢车(2020年上市),含纯电Altroz EV |
| model:tata:harrier | Tata Harrier | 塔塔Harrier | Tata Harrier | タタ・ハリアー | class:eu:j | body:suv | pt:ice | current · 2019–present | 中型SUV(与路虎共享架构),含纯电Harrier EV(2025) |
| model:tata:nexon | Tata Nexon | 塔塔Nexon | Tata Nexon | タタ・ネクソン | class:eu:b | body:suv | pt:ice | current · 2017–present | 印度畅销紧凑型SUV,含纯电Nexon EV;2023年换代 |
| model:tata:punch | Tata Punch | 塔塔Punch | Tata Punch | タタ・パンチ | class:eu:b | body:suv | pt:ice | current · 2021–present | 入门微型SUV(印度市场热销),含纯电Punch EV |
| model:tata:tiago | Tata Tiago | 塔塔Tiago | Tata Tiago | タタ・ティアゴ | class:eu:a | body:hatchback | pt:ice | current · 2016–present | 入门小型车,含纯电Tiago EV(印度最便宜电动车之一) |

## Tesla

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:tesla:cybertruck | Cybertruck | Cybertruck(赛博皮卡) | Cybertruck | サイバートラック | class:us:pickup | body:pickup | pt:bev | current · 2023–present | 大陆俗称「赛博皮卡」;另有商用车Semi(2022年量产,Class 8牵引车)与Roadster二代(2026年后) |
| model:tesla:model-3 | Model 3 | Model 3 | Model 3 | モデル3 | class:eu:d | body:sedan | pt:bev | current · 2017–present | 2023年上海工厂出产「焕新版」 |
| model:tesla:model-s | Model S | Model S | Model S | モデルS | class:eu:f | body:sedan | pt:bev | current · 2012–present | 2012年交付,掀背式豪华纯电轿车 |
| model:tesla:model-x | Model X | Model X | Model X | モデルX | class:eu:j | body:suv | pt:bev | current · 2015–present | 鹰翼门设计 |
| model:tesla:model-y | Model Y | Model Y | Model Y | モデルY | class:eu:j | body:crossover | pt:bev | current · 2020–present | 与Model 3同平台 |
| model:tesla:roadster | Roadster | Roadster | Roadster | ロードスター | class:eu:s | body:roadster | pt:bev | discontinued · 2008–2012 | 一代跑车(2008–2012,基于路特斯Elise);二代Roadster尚未量产 |
| model:tesla:semi | Semi | Tesla Semi | Tesla Semi | テスラ セミ | class:us:pickup | body:pickup | pt:bev | current · 2022–present | Class 8纯电重型半挂牵引车(商用车),2022年12月首批交付百事;大陆称「特斯拉Semi」 |

## Tianjin FAW

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:tianjin-faw:jiabao-v70-ii | Jiabao V70 II | 佳宝V70 II代 | Jiabao V70 II | — | class:cn:mpv | body:van | pt:ice | discontinued · 2012–2017 | 微面(微型面包车),佳宝系列微客 |
| model:tianjin-faw:senya-m80 | Senya M80 | 森雅M80 | Senya M80 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2009–2016 | 紧凑型MPV,技术源自大发Xenia(森雅系列首款车型) |
| model:tianjin-faw:senya-r7 | Senya R7 | 森雅R7 | Senya R7 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2016–2021 | 小型SUV(森雅系列首款SUV车型) |
| model:tianjin-faw:senya-r9 | Senya R9 | 森雅R9 | Senya R9 | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2020 | 紧凑型SUV(森雅品牌旗舰SUV) |
| model:tianjin-faw:senya-s80 | Senya S80 | 森雅S80 | Senya S80 | — | class:cn:mpv | body:crossover | pt:ice | discontinued · 2011–2016 | 紧凑型MPV/SUV跨界(森雅M80的SUV化版本) |
| model:tianjin-faw:weizhi-v2 | Weizhi V2 | 威志V2 | Weizhi V2 | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2010–2015 | 微型两厢车(天津一汽威志系列) |
| model:tianjin-faw:weizhi-v5 | Weizhi V5 | 威志V5 | Weizhi V5 | — | class:cn:a0 | body:sedan | pt:ice | discontinued · 2011–2016 | 小型轿车(威志系列换代车型) |
| model:tianjin-faw:xiali | Xiali | 夏利 | Xiali | — | class:cn:a00 | body:sedan | pt:ice | discontinued · 1986–2014 | 中国汽车史传奇微型轿车,1986年首车下线,含夏利N5/N7等系列车型 |
| model:tianjin-faw:xiali-n7 | Xiali N7 | 夏利N7 | Xiali N7 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2013–2018 | 夏利系列小型SUV(2013年上市,天津一汽夏利家族);停产年份待核实 |

## Toyota

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:toyota:447a90143f | Wildlander | 威兰达 | — | — | class:cn:a | body:suv | pt:ice | current · 2020-present | 威兰达(Wildlander,2020-),广汽丰田紧凑型SUV(RAV4姊妹车) |
| model:toyota:490e18a955 | Zelas | 杰路驰 | — | — | class:cn:a | body:coupe | pt:ice | discontinued · 2010-2016 | 杰路驰(Zelas,2010-2016),丰田进口双门轿跑(Scion tC北美版),2016年停产 |
| model:toyota:4runner | 4Runner | 超霸(俗称) | 4Runner | フォーランナー | class:us:standard-suv | body:suv | pt:ice | current · 1984-present | 北美专属非承载式SUV;日本对应车型为Hilux Surf(1983-2009);大陆仅平行进口(俗称「超霸」) |
| model:toyota:69ec5f6267 | Frontlander | 锋兰达 | — | — | class:cn:a | body:suv | pt:ice | current · 2022-present | 锋兰达(Frontlander,2022-),广汽丰田紧凑型SUV(Corolla Cross中国版) |
| model:toyota:6bebd83ff6 | Reiz | 锐志 | — | — | class:cn:b | body:sedan | pt:ice | discontinued · 2005-2017 | 锐志(Reiz,2005-2017),一汽丰田后驱中型轿车(Mark X中国版),2017年停产 |
| model:toyota:9749e2c529 | Yuejia | 悦佳 | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2019-2022 | 悦佳(2019-2022),广汽丰田紧凑型MPV,2022年停产 |
| model:toyota:allion | Allion | 亚洲狮 | — | — | class:cn:a | body:sedan | pt:ice | current · 2021-present | 一汽丰田中国特供A+级轿车,基于TNGA平台,定位介于卡罗拉与亚洲龙之间;仅2.0L自然吸气 |
| model:toyota:alphard | Alphard | 埃尔法 | Alphard | アルファード | class:eu:m | body:mpv | pt:hev | current · 2002-present | 豪华MPV;大陆官方名「埃尔法」;现行AH40(2023起) |
| model:toyota:aqua | Aqua | — | Prius c | アクア | class:cn:a0 | body:hatchback | pt:hev | current · 2011-present | 日本专属混动小车;海外初代称Prius c(2011-2021);大陆未官方引进 |
| model:toyota:aristo | Aristo | — | Aristo | アリスト | class:cn:c | body:sedan | pt:ice | discontinued · 1991-2004 | 雷克萨斯GS的日本版(北美1993起以GS销售),1991-2004;后期搭载2JZ-GTE |
| model:toyota:avalon | Avalon | 亚洲龙 | Avalon | アバロン | class:cn:c | body:sedan | pt:hev | current · 1994-present | 北美/中东2022年停售,现仅中国(一汽丰田亚洲龙)生产;日本曾以Pronard(プロナード)销售 |
| model:toyota:ba35c1b4bd | Terios | 特锐(一汽丰田,原大发车型) | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2003-2006 | 特锐(Terios,2003-2006),一汽丰田小型SUV(大发Terios贴牌),2006年停产 |
| model:toyota:bz3 | Toyota bZ3 | 丰田bZ3 | — | — | class:cn:a | body:sedan | pt:bev | current · 2023-present | 丰田bZ3(2023-),一汽丰田纯电轿车(与比亚迪合作) |
| model:toyota:bz4x | bZ4X | bZ4X(铂智4X) | bZ4X | bZ4X | class:us:compact | body:crossover | pt:bev | current · 2022-present | 丰田首款全球纯电SUV(e-TNGA平台);大陆广汽丰田名「铂智4X」 |
| model:toyota:bz5 | Toyota bZ5 | 丰田bZ5 | — | — | class:cn:a | body:suv | pt:bev | current · 2025-present | 丰田bZ5(2025-),一汽丰田纯电轿跑中型SUV(由bZ3C更名) |
| model:toyota:c-hr | C-HR | C-HR(奕泽IZOA) | C-HR | C-HR(シーエイチアール) | class:us:small-suv | body:crossover | pt:ice | current · 2016-present | 大陆一汽丰田姊妹车「奕泽IZOA」;现售第二代AX20(2023起,欧/日);另有纯电C-HR+(2025起) |
| model:toyota:c-hr-ev | C-HR EV | C-HR EV | — | — | class:cn:a0 | body:suv | pt:bev | discontinued · 2020-2023 | C-HR EV(2020-2023),丰田C-HR纯电版(中国市场),2023年停产 |
| model:toyota:camry | Camry | 凯美瑞 | 凱美瑞 | カムリ | class:cn:b | body:sedan | pt:hev | current · 1982-present | 香港旧称「佳美」;现行XV80(2023起)以混动为主 |
| model:toyota:carina | Carina | — | Carina | カリーナ | class:cn:b | body:sedan | pt:ice | discontinued · 1970-2001 | Corona姊妹车,1970年上市;欧洲版称Carina E;2001年停产 |
| model:toyota:celica | Celica | 赛利卡 | Celica | セリカ | class:eu:s | body:coupe | pt:ice | discontinued · 1970-2006 | 经典运动轿跑;2006年停产 |
| model:toyota:celsior | Celsior | — | Celsior | セルシオ | class:cn:d | body:sedan | pt:ice | discontinued · 1989-2017 | 雷克萨斯LS的日本版(初代即LS400),1989-2017;第四代后日本市场亦统一为Lexus LS |
| model:toyota:century | Century | 世纪 | Century | センチュリー | class:cn:d | body:sedan | pt:hev | current · 1967-present | 日本国宾级旗舰;现行G60(2018起)混动;另有Century SUV(2023起,插混) |
| model:toyota:chaser | Chaser | — | Chaser | チェイサー | class:cn:b | body:sedan | pt:ice | discontinued · 1977-2001 | Mark II的运动派生(警用巡逻车经典形象),1977-2001 |
| model:toyota:coaster | Coaster | 柯斯达 | Coaster | コースター | class:jp:normal | body:van | pt:ice | current · 2000-present | 中型客车,车系1969年起;大陆由四川一汽丰田自2000年起生产,多用于公务/商务接待 |
| model:toyota:corolla | Corolla | 卡罗拉 | Corolla Altis(卡羅拉) | カローラ | class:cn:a | body:sedan | pt:ice | current · 1966-present | 全球最畅销车型;大陆另有姊妹车雷凌Levin(广汽丰田),台湾称Corolla Altis;现售E210(2018起) |
| model:toyota:corolla-cross | Corolla Cross | 卡罗拉锐放(一汽)/锋兰达(广汽) | Corolla Cross | カローラクロス | class:us:compact | body:crossover | pt:hev | current · 2020-present | 基于Corolla平台;大陆一汽「卡罗拉锐放」、广汽「锋兰达Frontlander」 |
| model:toyota:corolla-huaguan | Corolla EX | 花冠 | Corolla Altis | — | class:cn:a | body:sedan | pt:ice | discontinued · 2004-2016 | 第九代卡罗拉的中国名(一汽丰田),2007年后称「花冠EX」,与新一代卡罗拉同堂销售至2016年停产 |
| model:toyota:corona | Corona | 日冕(旧译) | Corona | コロナ | class:cn:b | body:sedan | pt:ice | discontinued · 1957-2001 | 1957年上市的重要历史车系;1989-1998另有轿跑分支Corona EXiV;2001年由Avensis接替;大陆早年旧译「日冕」 |
| model:toyota:cressida | Cressida | — | Cressida | クレシダ | class:cn:b | body:sedan | pt:ice | discontinued · 1973-1992 | Mark II的海外出口版中型轿车;1992年由Avalon等接替 |
| model:toyota:cresta | Cresta | — | Cresta | クレスタ | class:cn:b | body:sedan | pt:ice | discontinued · 1980-2001 | Mark II三兄弟中的豪华取向派生(与Chaser同平台),1980-2001 |
| model:toyota:crown | Crown | 皇冠 | Crown | クラウン | class:cn:c | body:sedan | pt:hev | current · 1955-present | 车系始于1955;现行S230系列含Sedan/Crossover/Sport/Estate四型 |
| model:toyota:crown-kluger | Crown Kluger | 皇冠陆放 | — | クラウンクルーガー | class:us:midsize | body:suv | pt:hev | current · 2021-present | 一汽丰田汉兰达姊妹车,挂「皇冠」子品牌标识,与皇冠轿车为不同车系;以2.5L双擎为主,2023年加推2.0T版 |
| model:toyota:crown-sport | Crown Sport | Crown Sport | Crown Sport | クラウンスポーツ | class:us:midsize | body:crossover | pt:phev | current · 2023-present | 皇冠家族SUV成员,仅日本市场;提供混动与插电混动 |
| model:toyota:dff618b150 | Granvia | 格瑞维亚 | — | — | class:cn:a | body:mpv | pt:ice | current · 2022-present | 格瑞维亚(Granvia,2022-),一汽丰田中大型MPV(赛那姊妹车) |
| model:toyota:eeb271a4b3 | Venza | 威飒 | — | — | class:cn:a | body:suv | pt:ice | current · 2021-present | 威飒(Venza,2021-),一汽丰田中型SUV(Harrier姊妹车) |
| model:toyota:estima | Estima | — | Previa | エスティマ | class:eu:m | body:mpv | pt:hev | discontinued · 1990-2019 | 北美/欧洲称Previa,澳洲称Tarago;2019年停产 |
| model:toyota:ez | E'Z | 逸致 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2011-2016 | 广汽丰田紧凑型MPV(英文E'Z),基于卡罗拉平台,提供5/7座;2016年停产 |
| model:toyota:fj-cruiser | FJ Cruiser | FJ酷路泽 | FJ Cruiser | FJクルーザー | class:us:small-suv | body:suv | pt:ice | discontinued · 2006-2022 | 致敬FJ40的复古越野SUV,基于Prado/4Runner平台;主销北美;大陆平行进口称「FJ酷路泽」;2022年停产 |
| model:toyota:fortuner | Fortuner | 奔跑者(平行进口) | Fortuner | フォーチュナー | class:us:midsize | body:suv | pt:ice | current · 2005-present | 基于Hilux的非承载式SUV,主销新兴市场;大陆未官方引进,俗称「奔跑者」 |
| model:toyota:gr-yaris | GR YARIS | GR YARIS | — | — | class:cn:a0 | body:hatchback | pt:ice | current · 2020-present | GR Yaris(2020-),丰田Gazoo Racing高性能小钢炮 |
| model:toyota:gr86 | GR86 | GR86 | GR86 | GR86 | class:eu:s | body:sports | pt:ice | current · 2021-present | 前置后驱双门跑车;2012-2021前身称GT86;与斯巴鲁BRZ姊妹车(现售第二代ZN8) |
| model:toyota:harrier | Harrier | 凌放(一汽)/威飒(广汽) | Harrier | ハリアー | class:us:midsize | body:crossover | pt:hev | current · 1997-present | 初代北美即雷克萨斯RX;二代北美称Venza;大陆一汽「凌放」、广汽「威飒」 |
| model:toyota:hiace | HiAce | 海狮 | HiAce | ハイエース | class:jp:normal | body:van | pt:ice | current · 1967-present | 轻型客货两用车;大陆「海狮」(金杯曾以Hiace为原型);现售H200/H300系 |
| model:toyota:highlander | Highlander | 汉兰达 | Highlander | ハイランダー | class:us:midsize | body:suv | pt:hev | current · 2000-present | 澳洲/日本称Kluger(クルーガー),日本2021起称Crown Kluger;三排座;大陆名「汉兰达」 |
| model:toyota:hilux | Hilux | 海拉克斯 | Hilux | ハイラックス | class:us:pickup | body:pickup | pt:ice | current · 1968-present | 中型皮卡,北美以外全球销售;2025年推出第八代AN220 |
| model:toyota:izoa | IZOA | 奕泽IZOA | — | — | class:cn:a0 | body:suv | pt:ice | current · 2018-present | 奕泽IZOA(2018-),一汽丰田小型SUV(C-HR姊妹车) |
| model:toyota:land-cruiser | Land Cruiser | 兰德酷路泽 | Land Cruiser | ランドクルーザー | class:us:standard-suv | body:suv | pt:ice | current · 1951-present | 车系始于1951;现售J70(1984起)与J300(2021起),主销日本/中东/澳洲等地 |
| model:toyota:land-cruiser-prado | Land Cruiser Prado | 普拉多 | Land Cruiser Prado | ランドクルーザープラド | class:us:standard-suv | body:suv | pt:ice | current · 1984-present | 大陆旧称「霸道」,因广告争议改名普拉多;现行J250(2023起),北美版称Land Cruiser |
| model:toyota:levin | Levin | 雷凌 | — | — | class:cn:a | body:sedan | pt:ice | current · 2014-present | 广汽丰田卡罗拉姊妹车(中国特供),2014年国产;动力含1.2T/1.5L及双擎混动版 |
| model:toyota:lingshang | Levin | 凌尚 | — | — | class:cn:a | body:sedan | pt:ice | current · 2021-present | 广汽丰田中国特供A+级轿车,雷凌的姊妹款(定位在雷凌之上),与一汽丰田亚洲狮同级;仅2.0L自然吸气 |
| model:toyota:mark-ii | Mark II | — | Mark II | マークII | class:cn:b | body:sedan | pt:ice | discontinued · 1968-2004 | 1968年以Corona Mark II面世,日本经典中级轿车;海外出口版为Cressida;2004年由Mark X接替 |
| model:toyota:mark-x | Mark X | 锐志(Reiz) | Mark X | マークX | class:cn:b | body:sedan | pt:ice | discontinued · 2004-2019 | Mark II的后续车型,2004-2019;大陆曾由一汽丰田国产称「锐志Reiz」(2005-2017) |
| model:toyota:megacruiser | Mega Cruiser | — | Mega Cruiser | メガクルーザー | class:us:standard-suv | body:suv | pt:ice | discontinued · 1995-2001 | 为日本自卫队开发的超大型四驱车(俗称「日版悍马」),民用版BXD20;含四轮转向与门式车桥 |
| model:toyota:mirai | Mirai | 未来 | Mirai | ミライ | class:cn:c | body:sedan | pt:fcev | current · 2014-present | 氢燃料电池轿车;mirai即日语「未来」;现行JPD20(2020起) |
| model:toyota:mr2 | MR2 | MR2 | MR2 | MR2(エムアールツー) | class:eu:s | body:sports | pt:ice | discontinued · 1984-2005 | 中置后驱小跑车;日本第三代名MR-S(1999-2007) |
| model:toyota:noah | Noah | — | Noah | ノア | class:eu:m | body:mpv | pt:hev | current · 2001-present | 日本家用MPV;现行R90(2022起);大陆未官方引进 |
| model:toyota:previa | Previa | 普瑞维亚 | Previa | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2000-2020 | Estima的出口版名称(日本名エスティマ);大陆以进口方式销售称「普瑞维亚」,对应第二代起;2020年前后停售 |
| model:toyota:prius | Prius | 普锐斯 | Prius | プリウス | class:cn:a | body:hatchback | pt:hev | current · 1997-present | 世界首款量产混合动力车;现行XW60(2022起)含插混版 |
| model:toyota:prius-alpha | Prius α | — | Prius α | プリウスα | class:eu:m | body:mpv | pt:hev | discontinued · 2011-2021 | Prius旅行/MPV版;北美称Prius v,欧洲称Prius+;2021年停产 |
| model:toyota:probox | Probox | — | — | プロボックス | class:jp:normal | body:van | pt:ice | current · 2002-present | 日本商旅两用车(货车/厢式车);2002年起持续生产 |
| model:toyota:publica | Publica | — | Publica | パブリカ | class:cn:a0 | body:sedan | pt:ice | discontinued · 1961-1978 | 丰田首款「国民车」级别小型车(700-1000cc),1961年上市,1978年由Starlet/Corolla体系接替(年份据丰田75年史/维基) |
| model:toyota:rav4 | RAV4 | 荣放(RAV4) | RAV4 | ラヴフォー | class:us:compact | body:suv | pt:hev | current · 1994-present | 大陆官方名「RAV4荣放」(一汽丰田),另有插混版「双擎E+」(2020起);广汽丰田姊妹车威兰达Wildlander(2020起,含插混版「威兰达新能源」);现售XA50(2018起) |
| model:toyota:rav4-e | RAV4 Hybrid E+ | RAV4荣放双擎E+ | — | — | class:cn:a | body:suv | pt:phev | current · 2021-present | RAV4荣放双擎E+(2021-),RAV4插电混动版 |
| model:toyota:sequoia | Sequoia | 红杉 | Sequoia | セコイア | class:us:standard-suv | body:suv | pt:hev | current · 2001-present | 北美全尺寸非承载SUV,基于Tundra;大陆平行进口称「红杉」;现行XK80(2022起)混动标配 |
| model:toyota:sera | Sera | — | Sera | セラ | class:eu:s | body:coupe | pt:ice | discontinued · 1990-1996 | 日本首款量产蝴蝶门小跑(2+2),1.5L前置前驱,与Tercel/Paseo同源 |
| model:toyota:sienna | Sienna | 赛那 | Sienna | シエナ | class:us:minivan | body:minivan | pt:hev | current · 1997-present | 北美家用MPV;大陆广汽丰田「赛那」(2021国产),一汽丰田「格瑞维亚Granvia」 |
| model:toyota:sienta | Sienta | — | Sienta | シエンタ | class:cn:mpv | body:mpv | pt:ice | discontinued · 2003-2022 | 日本家用紧凑MPV,2003-2022共两代;台湾版Sienta由国瑞汽车本地化生产(2016起),与日本版外观配置有别;大陆未官方引进 |
| model:toyota:soarer | Soarer | — | Soarer | ソアラ | class:eu:s | body:coupe | pt:ice | discontinued · 1981-2005 | 豪华GT轿跑;北美1991起以雷克萨斯SC销售;2005年停产 |
| model:toyota:sportcross | Crown SportCross | 皇冠SportCross | — | — | class:cn:b | body:hatchback | pt:ice | current · 2022-present | 皇冠SportCross(2022-),皇冠系列跨界轿跑 |
| model:toyota:sports-800 | Sports 800 | — | Sports 800 | スポーツ800 | class:eu:s | body:sports | pt:ice | discontinued · 1965-1969 | 丰田首款量产跑车(U10),风冷水平对置双缸引擎,轻量化双座设计 |
| model:toyota:starlet | Starlet | — | Starlet | スターレット | class:cn:a0 | body:hatchback | pt:ice | discontinued · 1973-1999 | 小型掀背车;1999年停产,现「Starlet」名被印度/非洲Suzuki Baleno贴牌车(2019起)使用 |
| model:toyota:succeed | Succeed | — | — | サクシード | class:jp:normal | body:van | pt:ice | discontinued · 2002-2020 | Probox高级姊妹车;2020年整合入Probox |
| model:toyota:supra | Supra | Supra(俗称牛魔王) | Supra | スープラ | class:eu:s | body:sports | pt:ice | discontinued · 1978-2026 | 车系1978-2002(含Celica Supra);第五代GR Supra(2019-2026)与宝马Z4同平台,2026年停产 |
| model:toyota:tacoma | Tacoma | Tacoma(塔科马) | Tacoma | タコマ | class:us:pickup | body:pickup | pt:ice | current · 1995-present | 北美中型皮卡;现行N400(2023起);大陆仅平行进口 |
| model:toyota:tercel | Tercel | — | Tercel | ターセル | class:cn:a0 | body:sedan | pt:ice | discontinued · 1978-1999 | 小型车;日本另有Corolla II/Corsa姊妹名;1999年由Vitz/Yaris体系接替 |
| model:toyota:toyota-3x | Bozhi 3X | 铂智3X | — | — | class:cn:a | body:suv | pt:bev | current · 2025-present | 铂智3X(2025-),广汽丰田纯电紧凑型SUV |
| model:toyota:toyota-4x | Bozhi 4X | 铂智4X | — | — | class:cn:a | body:suv | pt:bev | current · 2023-present | 铂智4X(2023-),广汽丰田纯电中型SUV(bZ4X中国版) |
| model:toyota:toyota-7 | Bozhi 7 | 铂智7 | — | — | class:cn:a | body:sedan | pt:bev | current · 2026-present | 铂智7(2026-),广汽丰田纯电轿车 |
| model:toyota:toyota-e | Corolla Hybrid E+ | 卡罗拉双擎E+ | — | — | class:cn:a | body:sedan | pt:phev | current · 2019-present | 卡罗拉双擎E+(2019-),卡罗拉插电混动版 |
| model:toyota:toyota-e-2 | IZOA E-Jin | 奕泽E进擎 | — | — | class:cn:a0 | body:suv | pt:bev | discontinued · 2020-2023 | 奕泽E进擎(2020-2023),一汽丰田奕泽纯电版,2023年停产 |
| model:toyota:toyota-fs | Vios FS | 威驰FS | — | — | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2017-2022 | 威驰FS(2017-2022),一汽丰田威驰两厢版,2022年停产 |
| model:toyota:toyota-iq | iQ | 丰田iQ | — | — | class:cn:a00 | body:city-car | pt:ice | discontinued · 2008-2015 | iQ(2008-2015),丰田超紧凑微型车(阿斯顿·马丁Cygnet贴牌),2015年停产 |
| model:toyota:tundra | Tundra | 坦途 | Tundra | タンドラ | class:us:pickup | body:pickup | pt:ice | current · 2000-present | 北美全尺寸皮卡;现行XK70(2021起)含混动版;大陆平行进口称「坦途」 |
| model:toyota:vellfire | Vellfire | 威尔法 | Vellfire | ヴェルファイア | class:eu:m | body:mpv | pt:hev | current · 2008-present | Alphard运动姊妹车;大陆一汽丰田「威尔法」;日本2023起称Crown Vellfire |
| model:toyota:verso-s | Verso-S | Verso-S | — | — | class:cn:a0 | body:mpv | pt:ice | discontinued · 2010-2015 | Verso-S(2010-2015),丰田欧洲市场小型MPV,2015年停产 |
| model:toyota:vios | Vios | 威驰 | Vios | ヴィオス | class:cn:a0 | body:sedan | pt:ice | current · 2002-present | 东南亚/台湾称Vios,泰国称Yaris Ativ;大陆名「威驰」(一汽丰田),另有2016-2022两厢版「威驰FS」 |
| model:toyota:vista | Vista | — | Vista | ビスタ | class:cn:b | body:sedan | pt:ice | discontinued · 1982-2003 | Corona系的硬顶/高级轿车支线;第一代雷克萨斯ES(VZV21)即基于Vista开发 |
| model:toyota:voxy | Voxy | — | Voxy | ヴォクシー | class:eu:m | body:mpv | pt:hev | current · 2007-present | Noah姊妹车(运动取向),日本市场;现行R90(2022起) |
| model:toyota:yaris | Yaris | 雅力士 | Yaris | ヤリス | class:cn:a0 | body:hatchback | pt:ice | current · 1999-present | 日本市场1999-2019称Vitz(ヴィッツ),2020起全球统一为Yaris;大陆初代曾译「威姿」 |
| model:toyota:yaris-cross | Yaris Cross | Yaris Cross | Yaris Cross | ヤリスクロス | class:us:small-suv | body:crossover | pt:hev | current · 2020-present | 基于Yaris平台的小型跨界;东南亚另有DNGA平台版(AC200,2023起) |
| model:toyota:yarisl-zhixiang | YARiS L | YARiS L 致享 | — | — | class:cn:a0 | body:sedan | pt:ice | discontinued · 2017-2022 | 广汽丰田中国特供小型三厢轿车,致炫的姊妹车(三厢版);2022年停产 |
| model:toyota:yarisl-zhixuan | YARiS L | YARiS L 致炫 | — | — | class:cn:a0 | body:hatchback | pt:ice | discontinued · 2013-2022 | 广汽丰田小型两厢车,致享的姊妹车(两厢版);另有跨界版致炫X;2022年停产 |

## Venucia

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:venucia:38399683eb | Morning Breeze | 晨风 | — | — | class:cn:a | body:hatchback | pt:bev | discontinued · 2014–2017 | 启辰晨风(2014-2017),纯电轿车,基于日产聆风,中国合资品牌首批纯电车型,已停产 |
| model:venucia:d50 | Venucia D50 | 启辰D50 | Venucia D50 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2012–2017 | 启辰品牌首款车型,紧凑型轿车,基于日产颐达平台;2012年上市 |
| model:venucia:d60 | Venucia D60 | 启辰D60 | Venucia D60 | — | class:cn:a | body:sedan | pt:ice | current · 2016–present | 启辰D60紧凑型轿车,基于日产轩逸平台,燃油/纯电(e30)版;2017年上市 |
| model:venucia:d60ev | Venucia D60EV | 启辰D60EV | — | — | class:cn:a | body:sedan | pt:bev | current · 2019–present | 启辰D60EV(2019-),纯电紧凑型轿车,基于D60 |
| model:venucia:e30 | Venucia e30 | 启辰e30 | — | — | class:cn:a00 | body:hatchback | pt:bev | discontinued · 2019–2021 | 启辰e30(2019-2021),纯电小型车,与雷诺e诺同源,已停产 |
| model:venucia:m50v | Venucia M50V | 启辰M50V | Venucia M50V | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2017–2020 | 启辰紧凑型MPV(7座),基于日产NV200平台;2017年上市 |
| model:venucia:r30 | Venucia R30 | 启辰R30 | Venucia R30 | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2014–2017 | 启辰微型两厢车,基于日产玛驰平台;2014年上市 |
| model:venucia:r50 | Venucia R50 | 启辰R50 | Venucia R50 | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2012–2016 | 启辰两厢车,基于日产骐达平台,与D50同源;2012年上市 |
| model:venucia:r50x | Venucia R50X | 启辰R50X | Venucia R50X | — | class:cn:a | body:crossover | pt:ice | discontinued · 2013–2016 | R50的跨界版,基于日产骐达平台;2013年上市 |
| model:venucia:t60 | Venucia T60 | 启辰T60 | Venucia T60 | — | class:cn:a0 | body:suv | pt:ice | current · 2018–present | 启辰小型SUV;2018年11月上市;另有T60EV纯电版 |
| model:venucia:t60ev | Venucia T60EV | 启辰T60EV | — | — | class:cn:a | body:suv | pt:bev | current · 2019–present | 启辰T60EV(2019-),纯电小型SUV,基于T60 |
| model:venucia:t70 | Venucia T70 | 启辰T70 | Venucia T70 | — | class:cn:a | body:suv | pt:ice | discontinued · 2015–2020 | 启辰首款SUV,紧凑型,基于日产逍客平台;2015年上市 |
| model:venucia:t70x | Venucia T70X | 启辰T70X | Venucia T70X | — | class:cn:a | body:suv | pt:ice | discontinued · 2015–2017 | T70升级版,紧凑型SUV,外观与配置升级;2015年上市 |
| model:venucia:t90 | Venucia T90 | 启辰T90 | Venucia T90 | — | class:cn:b | body:suv | pt:ice | discontinued · 2016–2022 | 启辰中型轿跑SUV;2016年底上市,约2022年停产 |
| model:venucia:v | Venucia V | 启辰大V | Venucia V | — | class:cn:a | body:suv | pt:ice | current · 2021–present | 启辰大V紧凑型SUV,基于启辰VSA平台;2021年上市;另有DD-i插混版 |
| model:venucia:v-dd-i | Venucia Grand V DD-i | 启辰大V DD-i | — | — | class:cn:a | body:suv | pt:phev | current · 2023–present | 启辰大V DD-i(2023-),大V插电混动版 |
| model:venucia:venucia-v | Venucia Grand V Hydrogen | 启辰大V氢境 | — | — | class:cn:a | body:suv | pt:fcev | current · 2023–present | 启辰大V氢境(2023-),氢燃料电池SUV |
| model:venucia:vx6 | Venucia VX6 | 启辰VX6 | — | — | class:cn:a | body:suv | pt:bev | current · 2023–present | 启辰VX6(2023-),纯电紧凑型SUV |
| model:venucia:xing | Venucia Xing | 启辰星 | Venucia Xing | — | class:cn:a | body:suv | pt:ice | current · 2020–present | 启辰星紧凑型SUV,基于启辰VSA平台,启辰首款自主平台车型;2020年上市 |

## Volkswagen

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:volkswagen:0730b95920 | Multivan | 迈特威 | — | — | class:eu:m | body:van | pt:ice | current · 2003–present | 迈特威(Multivan,2003–),大众Transporter的乘用MPV版;第七代(2021)起为独立车型 |
| model:volkswagen:0d2b26d330 | Bora Classic | 宝来经典 | — | — | class:cn:b | body:sedan | pt:ice | discontinued · 2005–2008 | 宝来经典(2005–2008),宝来改款前代,2008年停产 |
| model:volkswagen:1c6b487103 | Golf EV | 高尔夫·纯电 | — | — | class:cn:a | body:hatchback | pt:bev | discontinued · 2019–2021 | 高尔夫纯电(e-Golf中国版,2019–2021),一汽-大众,2021年停产 |
| model:volkswagen:4457fd81fd | Magotan Alltrack | 蔚揽 | — | — | class:cn:b | body:wagon | pt:ice | discontinued · 2016–2022 | 蔚揽(Passat Variant,2016–2022),大众进口Passat B8旅行车,2022年停售 |
| model:volkswagen:4b6165f538 | Talagon | 揽境 | — | — | class:cn:a | body:suv | pt:ice | current · 2021–present | 揽境(Talagon,2021–),一汽-大众大型SUV,与途昂同平台 |
| model:volkswagen:503d3c927f | Golf Sportsvan | 高尔夫·嘉旅 | — | — | class:eu:c | body:mpv | pt:ice | discontinued · 2014–2022 | 高尔夫·嘉旅(Golf Sportsvan,2014–2022),高尔夫平台MPV,2022年停产 |
| model:volkswagen:538aa28178 | Santana Zhijun | 桑塔纳志俊 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2008–2012 | 桑塔纳志俊(2008–2012),桑塔纳3000的改款,2012年停产 |
| model:volkswagen:62dbfd7604 | Bora EV | 宝来·纯电 | — | — | class:cn:b | body:sedan | pt:bev | discontinued · 2019–2022 | 宝来纯电(2019–2022),一汽-大众纯电版宝来,2022年停产 |
| model:volkswagen:7dfe91a19b | Caravelle | 凯路威 | — | — | class:cn:a | body:van | pt:ice | discontinued · 1990–2024 | 凯路威(Caravelle,1990–2024),大众Transporter/Multivan的乘用版,2024年停产 |
| model:volkswagen:88a9a83a2b | Gol | 高尔 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 1980–2023 | 大众Gol(1980–2023),巴西市场小型车;中国曾国产(2003–2006),2023年停产 |
| model:volkswagen:8c1b785494 | Teramont | 途昂 | — | — | class:cn:c | body:suv | pt:ice | current · 2017–present | 途昂(Teramont,2017–),上汽大众大型SUV,与北美Atlas同平台 |
| model:volkswagen:9533f0bac9 | Santana Classic | 桑塔纳经典 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2003–2006 | 桑塔纳经典(2003–2006),普桑改款,2006年停产 |
| model:volkswagen:9d75db3ffa | Tavendor | 揽巡 | — | — | class:cn:a | body:suv | pt:ice | current · 2022–present | 揽巡(Tavendor,2022–),一汽-大众大型SUV |
| model:volkswagen:amarok | Amarok | Amarok | Amarok | アマロック | class:eu:j | body:pickup | pt:ice | current · 2010–present | 中型皮卡;第二代(2022)基于福特Ranger平台 |
| model:volkswagen:arteon | Arteon | Arteon | Arteon | アルテオン | class:eu:d | body:sedan | pt:ice | discontinued · 2017–2023 | 大众CC的继任者,四门轿跑;2023年停产 |
| model:volkswagen:atlas | Atlas | Atlas | — | — | class:us:large | body:suv | pt:ice | current · 2017–present | 北美市场大型SUV,与上汽大众途昂同平台;中国版名Teramont(途昂) |
| model:volkswagen:b298aaa581 | Passat PHEV | 帕萨特插电混动 | — | — | class:cn:b | body:sedan | pt:phev | current · 2019–present | 帕萨特PHEV(2019–),上汽大众帕萨特插电混动版 |
| model:volkswagen:bd1f933093 | Viloran | 威然 | — | — | class:cn:a | body:mpv | pt:ice | current · 2020–present | 威然(Viloran,2020–),上汽大众大型MPV,面向中国市场 |
| model:volkswagen:beetle | Beetle | 甲壳虫 | 金龜車 | ビートル | class:eu:a | body:coupe | pt:ice | discontinued · 1938–2019 | Type 1(1938–2003)为大众创始车型;New Beetle(1997–2011)与Beetle A5(2011–2019)为复古复活版,2019年正式停产 |
| model:volkswagen:bora | Bora | 宝来 | Bora | ボーラ | class:cn:a | body:sedan | pt:ice | current · 1999–present | 一汽-大众特供紧凑型轿车;2026年起由Sagitar S取代 |
| model:volkswagen:c-trek | C-TREK | C-TREK蔚领 | — | — | class:cn:a | body:wagon | pt:ice | discontinued · 2016–2022 | C-TREK蔚领(2016–2022),一汽-大众旅行车,宝来平台衍生,2022年停产 |
| model:volkswagen:caddy | Caddy | 开迪 | Caddy | キャディ | class:eu:m | body:van | pt:ice | current · 1990–present | 紧凑型厢式车,乘用版称Caddy Life;中国曾引进(开迪) |
| model:volkswagen:california | Volkswagen California | 大众California | — | — | class:cn:a | body:van | pt:ice | current · 1988–present | 大众California(1988–),基于Transporter的露营车 |
| model:volkswagen:crafter | Crafter | Crafter | Crafter | クラフター | class:eu:m | body:van | pt:ice | current · 2006–present | 大型厢式货车,与MAN TGE同平台 |
| model:volkswagen:eos | Eos | Eos | Eos | イオス | class:eu:c | body:convertible | pt:ice | discontinued · 2006–2016 | 硬顶敞篷车,基于高尔夫5代平台,2016年停产 |
| model:volkswagen:fb680912cf | Gran Lavida | 朗行 | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2013–2018 | 朗行(Gran Lavida,2013–2018),上汽大众朗逸的两厢版,2018年停产 |
| model:volkswagen:fcced1be1c | Tacqua | 探影 | — | — | class:cn:a0 | body:suv | pt:ice | current · 2019–present | 探影(Tacqua,2019–),一汽-大众小型SUV,与途铠同源 |
| model:volkswagen:fox | Volkswagen Fox | 大众Fox | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2003–2021 | 大众Fox(2003–2021),巴西/欧洲市场入门小型车,2021年停产 |
| model:volkswagen:golf | Golf | 高尔夫 | Golf | ゴルフ | class:eu:c | body:hatchback | pt:ice | current · 1974–present | 大众全球核心车型;GTI/R/eHybrid等性能与插混版本同属本系列;中国现售第八代(Golf 8) |
| model:volkswagen:gte | Tayron GTE | 探岳 GTE | — | — | class:cn:b | body:suv | pt:phev | current · 2020–present | 探岳GTE(2020–),一汽-大众探岳插电混动版 |
| model:volkswagen:id-aura-t6 | ID.AURA T6 | ID.AURA T6 | — | — | class:cn:a | body:sedan | pt:bev | current · 2026–present | ID.AURA(2026–),一汽-大众基于CMP平台打造的纯电紧凑型轿车,2025年发布概念车,2026年量产 |
| model:volkswagen:id-buzz | ID. Buzz | ID. Buzz | ID. Buzz | ID.バズ | class:eu:m | body:mpv | pt:bev | current · 2022–present | 致敬T1面包车的纯电MPV,北美等市场同步销售 |
| model:volkswagen:id-era-5s | ID.ERA 5S | ID.ERA 5S | — | — | class:cn:a | body:sedan | pt:phev | current · 2026–present | ID.ERA 5S(2026–),上汽大众中型插混轿车,2026年上市 |
| model:volkswagen:id-era-8x | ID.ERA 8X | ID.ERA 8X | — | — | class:cn:a | body:suv | pt:erev | current · 2026–present | ID.ERA 8X(2026–),上汽大众大五座增程SUV,2026年上市 |
| model:volkswagen:id-era-9x | ID.ERA 9X | ID.ERA 9X | — | — | class:cn:a | body:suv | pt:erev | current · 2026–present | ID.ERA 9X(2026–),上汽大众大型六座增程SUV,2026年上市 |
| model:volkswagen:id3 | ID.3 | ID.3 | ID.3 | ID.3(アイディー・スリー) | class:eu:c | body:hatchback | pt:bev | current · 2019–present | 大众ID纯电系列首款车型,MEB平台 |
| model:volkswagen:id4 | ID.4 | ID.4 | ID.4 | ID.4(アイディー・フォー) | class:eu:c | body:suv | pt:bev | current · 2020–present | MEB平台纯电紧凑型SUV;中国版分ID.4 CROZZ(一汽)与ID.4 X(上汽) |
| model:volkswagen:id5 | ID.5 | ID.5 | ID.5 | ID.5(アイディー・ファイブ) | class:eu:c | body:coupe | pt:bev | current · 2021–present | ID.4的轿跑SUV版,主要在欧洲销售 |
| model:volkswagen:id6 | ID.6 | ID.6 | ID.6 | ID.6(アイディー・シックス) | class:cn:d | body:suv | pt:bev | current · 2021–present | 中国市场特供三排纯电SUV,分ID.6 CROZZ(一汽)与ID.6 X(上汽) |
| model:volkswagen:id7 | ID.7 | ID.7 | ID.7 | ID.7(アイディー・セブン) | class:eu:d | body:sedan | pt:bev | current · 2023–present | 帕萨特纯电继任者;中国版为ID.7 VIZZION,另有ID.7 Tourer旅行版 |
| model:volkswagen:jetta | Jetta | 捷达 | Jetta | ジェッタ | class:us:compact | body:sedan | pt:ice | current · 1979–present | 高尔夫三厢版演化而来;中国版历代称捷达/宝来/速腾,2019年起「捷达」独立为大众旗下子品牌 |
| model:volkswagen:l-phev | Tayron L PHEV | 探岳L PHEV | — | — | class:cn:b | body:suv | pt:phev | current · 2025–present | 探岳L PHEV(2025–),一汽-大众探岳L插电混动版 |
| model:volkswagen:lamando | Lamando | 凌渡 | Lamando | ラマンド | class:cn:a | body:coupe | pt:ice | current · 2014–present | 上汽大众特供四门轿跑轿车,2022年换代(凌渡L) |
| model:volkswagen:lavida | Lavida | 朗逸 | Lavida | ラヴィーダ | class:cn:a | body:sedan | pt:ice | current · 2008–present | 上汽大众特供紧凑型轿车,大众在华销量最高车型之一;朗逸纯电(e-Lavida,2019–)为本系列BEV版本,并入本条目 |
| model:volkswagen:magotan | Magotan | 迈腾 | Magotan | マゴタン | class:cn:b | body:sedan | pt:ice | current · 2005–present | 一汽-大众特供长轴版Passat B9(2024年换代),仅在中国及中东市场销售 |
| model:volkswagen:passat | Passat | 帕萨特 | Passat | パサート | class:eu:d | body:sedan | pt:ice | current · 1973–present | 欧洲版自2021年起仅售旅行车(Passat Variant);中国版为三厢特供(上汽大众帕萨特,一汽-大众迈腾见Magotan条目) |
| model:volkswagen:phaeton | Phaeton | 辉腾 | Phaeton | フェートン | class:eu:f | body:sedan | pt:ice | discontinued · 2002–2016 | 大众旗舰豪华轿车,与奥迪A8同平台,2016年停产 |
| model:volkswagen:phev | Magotan PHEV | 迈腾 PHEV | — | — | class:cn:b | body:sedan | pt:phev | current · 2024–present | 迈腾PHEV(2024–),一汽-大众迈腾插电混动版 |
| model:volkswagen:phideon | Phideon | 辉昂 | Phideon | フィデオン | class:cn:c | body:sedan | pt:ice | discontinued · 2016–2023 | 上汽大众特供旗舰轿车,定位高于帕萨特,2023年停产 |
| model:volkswagen:polo | Polo | 波罗 | Polo | ポロ | class:eu:b | body:hatchback | pt:ice | current · 1975–present | 欧洲小型车经典;中国现售为Polo Plus(上汽大众) |
| model:volkswagen:sagitar | Sagitar | 速腾 | Sagitar | サギター | class:cn:a | body:sedan | pt:ice | current · 2006–present | 一汽-大众特供长轴版,海外对应车型为Jetta |
| model:volkswagen:santana | Santana | 桑塔纳 | Santana | サンタナ | class:cn:b | body:sedan | pt:ice | discontinued · 1981–2022 | 中国特供长青车型;海外1980年代Passat B2相关;2022年停产 |
| model:volkswagen:scirocco | Scirocco | 尚酷 | Scirocco | シロッコ | class:eu:s | body:coupe | pt:ice | discontinued · 1974–2017 | 大众三门轿跑;中国曾引进第三代(2008–2017)称尚酷 |
| model:volkswagen:sharan | Sharan | 夏朗 | Sharan | シャラン | class:eu:m | body:mpv | pt:ice | discontinued · 1995–2022 | 大众大型MPV,2022年停产 |
| model:volkswagen:t-cross | T-Cross | 途铠 | T-Cross | ティークロス | class:eu:b | body:suv | pt:ice | current · 2019–present | 基于Polo平台的小型SUV;中国版为上汽大众途铠 |
| model:volkswagen:t-roc | T-Roc | 探歌 | T-Roc | ティロック | class:eu:c | body:suv | pt:ice | current · 2017–present | 基于高尔夫平台的紧凑型SUV;中国版为一汽-大众探歌,2025年海外换代至第二代 |
| model:volkswagen:tayron | Tayron | 探岳 | Tayron | タイロン | class:eu:c | body:suv | pt:ice | current · 2018–present | 原为一汽-大众特供(探岳),2024年换代后成为全球车型;北美/欧洲以Tiguan之名销售 |
| model:volkswagen:tharu | Tharu | 途岳 | Tharu | タル | class:cn:a | body:suv | pt:ice | current · 2018–present | 上汽大众特供紧凑型SUV;美洲对应车型为Taos |
| model:volkswagen:tiguan | Tiguan | 途观 | Tiguan | ティグアン | class:eu:c | body:suv | pt:ice | current · 2008–present | 大众全球最畅销SUV;中国版为途观L(上汽大众长轴版),北美2024年起Tiguan为Tayron换标 |
| model:volkswagen:tiguan-allspace | Tiguan Allspace | Tiguan Allspace | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2017–2024 | Tiguan Allspace(2017–2024),Tiguan长轴七座版(欧洲市场),2024年停产 |
| model:volkswagen:touareg | Touareg | 途锐 | Touareg | トゥアレグ | class:eu:j | body:suv | pt:ice | current · 2002–present | 大众旗舰SUV,与保时捷卡宴/奥迪Q7同平台;2026年换代 |
| model:volkswagen:touran | Touran | 途安 | Touran | トゥーラン | class:eu:m | body:mpv | pt:ice | current · 2003–present | 紧凑型MPV;中国版为上汽大众途安L,欧洲以外多数市场已停售 |
| model:volkswagen:up | up! | up! | up! | アップ! | class:eu:a | body:city-car | pt:ice | discontinued · 2011–2023 | 大众城市微型车,2023年停产;电动版e-up!同属本系列 |
| model:volkswagen:volkswagen-06 | Unyx 06 | 与众06 | — | — | class:cn:a | body:suv | pt:bev | current · 2024–present | 与众06(ID. UNYX 06,2024–),大众安徽(金标大众)纯电SUV,2024年上市 |
| model:volkswagen:volkswagen-07 | Unyx 07 | 与众07 | — | — | class:cn:a | body:suv | pt:bev | current · 2025–present | 与众07(ID. UNYX 07,2025–),大众安徽纯电SUV |
| model:volkswagen:volkswagen-08 | Unyx 08 | 与众08 | — | — | class:cn:a | body:suv | pt:bev | current · 2026–present | 与众08(ID. UNYX 08,2026–),大众安徽纯电SUV,与小鹏合作打造 |
| model:volkswagen:volkswagen-09 | Unyx 09 | 与众09 | — | — | class:cn:a | body:sedan | pt:bev | current · 2026–present | 与众09(ID. UNYX 09,2026–),大众安徽纯电轿车 |
| model:volkswagen:volkswagen-cc | CC | CC | — | — | class:cn:b | body:coupe | pt:ice | discontinued · 2012–2018 | 大众CC(2012–2018),一汽-大众四门轿跑,基于Passat B7L平台,2018年停产 |
| model:volkswagen:volkswagen-l-2 | Tiguan L Plug-in Hybrid | 途观L插电混动 | — | — | class:cn:b | body:suv | pt:phev | current · 2019–present | 途观L PHEV(2019–),上汽大众途观L插电混动版 |
| model:volkswagen:volkswagen-x | Tayron X | 探岳X | — | — | class:cn:b | body:coupe | pt:ice | current · 2020–present | 探岳X(2020–),一汽-大众探岳的轿跑SUV版 |
| model:volkswagen:volkswagen-x-2 | Tiguan X | 途观X | — | — | class:cn:a | body:coupe | pt:ice | current · 2020–present | 途观X(2020–),上汽大众途观L的轿跑SUV版 |

## Volvo

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:volvo:240 | 240 | 240 | 240 | 240 | class:eu:d | body:sedan | pt:ice | discontinued · 1974–1993 | 200系列,沃尔沃方盒子经典,含旅行版 |
| model:volvo:740 | 740 | 740 | 740 | 740 | class:eu:e | body:sedan | pt:ice | discontinued · 1984–1992 | 700系列,含760/780等衍生 |
| model:volvo:850 | 850 | 850 | 850 | 850 | class:eu:d | body:sedan | pt:ice | discontinued · 1991–1996 | 首款横置五缸前驱沃尔沃,旅行车版为经典;BTCC赛事传奇 |
| model:volvo:940 | 940 | 940 | 940 | 940 | class:eu:e | body:sedan | pt:ice | discontinued · 1990–1998 | 900系列,含960/S90/V90(1996-1998更名) |
| model:volvo:c30 | C30 | C30 | C30 | C30 | class:eu:c | body:hatchback | pt:ice | discontinued · 2006–2013 | 三门掀背车,S40/V50平台;曾推出Polestar性能版 |
| model:volvo:c70 | C70 | C70 | C70 | C70 | class:eu:d | body:convertible | pt:ice | discontinued · 1997–2013 | 两代车型:轿跑+敞篷(1997-2005)与敞篷(2006-2013) |
| model:volvo:em90 | EM90 | EM90 | EM90 | EM90 | class:eu:m | body:mpv | pt:bev | current · 2024–present | 沃尔沃首款纯电MPV,中国特供,与极氪009同源(SEA架构) |
| model:volvo:es90 | Volvo ES90 | 沃尔沃ES90 | 沃爾沃ES90 | ボルボES90 | class:eu:f | body:sedan | pt:bev | current · 2025–present | 沃尔沃纯电旗舰轿车,基于SPA2架构,2025年发布 |
| model:volvo:ex30 | EX30 | EX30 | EX30 | EX30 | class:eu:b | body:suv | pt:bev | current · 2023–present | 纯电小型SUV,基于SEA架构;2024年世界风云车 |
| model:volvo:ex90 | EX90 | EX90 | EX90 | EX90 | class:eu:j | body:suv | pt:bev | current · 2024–present | 纯电三排中大型SUV,XC90的纯电继任,基于SPA2架构 |
| model:volvo:p1800 | P1800 | P1800 | P1800 | P1800 | class:eu:s | body:coupe | pt:ice | discontinued · 1961–1973 | 经典双门跑车,英剧《圣徒》座驾而闻名 |
| model:volvo:s40 | S40 | S40 | S40 | S40 | class:eu:c | body:sedan | pt:ice | discontinued · 1995–2012 | 紧凑型轿车,两代车型(1995-2004与2004-2012);中国曾国产S40 |
| model:volvo:s60 | S60 | S60 | S60 | S60 | class:eu:d | body:sedan | pt:ice | current · 2000–present | 中型轿车,现款为2018年第三代(SPA平台);中国曾产S60L加长版,另有T8插电混动版(2019年起售) |
| model:volvo:s70 | S70 | S70 | S70 | S70 | class:eu:d | body:sedan | pt:ice | discontinued · 1996–2000 | 850轿车版的改款继承者,被S60取代 |
| model:volvo:s80 | S80 | S80 | S80 | S80 | class:eu:e | body:sedan | pt:ice | discontinued · 1998–2016 | 行政级轿车,两代车型;中国曾国产S80L;被S90取代 |
| model:volvo:s90 | S90 | S90 | S90 | S90 | class:eu:e | body:sedan | pt:ice | current · 2016–present | 行政级轿车,接替S80;中国由大庆工厂产S90L加长版,另有T8插电混动版(2019年起售) |
| model:volvo:v40 | V40 | V40 | V40 | V40 | class:eu:c | body:hatchback | pt:ice | discontinued · 1995–2019 | 初代与S40同平台旅行版(1995-2004),2012年复活为紧凑两厢车(2012-2019) |
| model:volvo:v50 | Volvo V50 | 沃尔沃V50 | 沃爾沃V50 | ボルボV50 | class:eu:c | body:wagon | pt:ice | discontinued · 2004–2012 | 紧凑型旅行车,与S40同平台;含V50 T5性能版 |
| model:volvo:v60 | V60 | V60 | V60 | V60 | class:eu:d | body:wagon | pt:ice | current · 2010–present | 中型旅行车,现款为2018年换代(SPA平台),含插混 |
| model:volvo:v70 | V70 | V70 | V70 | V70 | class:eu:d | body:wagon | pt:ice | discontinued · 1996–2016 | 经典旅行车,三代车型;含越野版XC70(2000-2016) |
| model:volvo:v90 | V90 | V90 | V90 | V90 | class:eu:e | body:wagon | pt:ice | current · 2016–present | 行政级旅行车,接替V70;另有V90 Cross Country越野旅行版 |
| model:volvo:xc-classic | XC Classic | XC Classic | XC Classic | XC Classic | class:eu:j | body:suv | pt:ice | discontinued · 2015–2016 | 老款(第一代)XC90的中国特供复产版,国产销售,与新一代XC90并行销售;2016年停产 |
| model:volvo:xc40 | XC40 | XC40 | XC40 | XC40 | class:eu:c | body:suv | pt:ice | current · 2017–present | 紧凑型SUV;2018年欧洲年度车;EC40(纯电轿跑版,原C40 Recharge,2021-)并入本条目 |
| model:volvo:xc60 | XC60 | XC60 | XC60 | XC60 | class:eu:j | body:suv | pt:ice | current · 2008–present | 中型SUV,现款为2017年换代(SPA平台),含T8插混 |
| model:volvo:xc90 | XC90 | XC90 | XC90 | XC90 | class:eu:j | body:suv | pt:ice | current · 2002–present | 沃尔沃首款SUV,现款为2014年换代(SPA平台);纯电继任为EX90 |

## Voyah

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:voyah:dream | Voyah Dream | 岚图梦想家 | Voyah Dream(未导入) | — | class:cn:mpv | body:mpv | pt:erev | current · 2022–present | 中大型纯电/增程MPV(2022年上市,2024年新款) |
| model:voyah:free | Voyah Free | 岚图FREE | Voyah Free(未导入) | — | class:cn:b | body:suv | pt:erev | current · 2021–present | 岚图首款车型(2021年上市,增程/纯电),2024年改款FREE+ |
| model:voyah:passion | Voyah Passion | 岚图追光 | Voyah Passion(未导入) | — | class:cn:c | body:sedan | pt:bev | current · 2023–present | 中大型纯电轿车(2023年上市,增程版追光PHEV/追光L) |
| model:voyah:zhiyin | Voyah Zhiyin | 岚图知音 | Voyah Zhiyin(未导入) | — | class:cn:b | body:suv | pt:bev | current · 2024–present | 新一代自研纯电平台首款车型,中型纯电SUV(2024年上市) |

## Weiwang

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:weiwang:205 | Weiwang 205 | 205 | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2013–2015 | 北汽威旺微面/面包车,入门级车型 |
| model:weiwang:306 | Weiwang 306 | 306 | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2013–2016 | 北汽威旺微面/面包车,品牌主力车型 |
| model:weiwang:307 | Weiwang 307 | 307 | — | — | class:cn:mpv | body:van | pt:ice | discontinued · 2015–2018 | 北汽威旺微面/面包车,306的升级版 |
| model:weiwang:307ev | Weiwang 307EV | 北汽威旺307EV | 北汽威旺307EV | — | class:cn:mpv | body:van | pt:bev | discontinued · 2016–2019 | 威旺307纯电动版,微面/厢式货车 |
| model:weiwang:407ev | Weiwang 407EV | 北汽威旺407EV | 北汽威旺407EV | — | class:cn:mpv | body:van | pt:bev | discontinued · 2018–2020 | 威旺407纯电动版,微面/厢式货车 |
| model:weiwang:608ev | Weiwang 608EV | 北汽威旺608EV | 北汽威旺608EV | — | class:cn:mpv | body:van | pt:bev | discontinued · 2018–2020 | 威旺608纯电动版 |
| model:weiwang:bq5 | Weiwang BQ5 | 北汽威旺BQ5 | 北汽威旺BQ5 | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2020 | 威旺紧凑型SUV,2018年上市 |
| model:weiwang:m20 | Weiwang M20 | M20 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2013–2018 | 北汽威旺紧凑型MPV |
| model:weiwang:m30 | Weiwang M30 | M30 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2015–2019 | 北汽威旺紧凑型MPV,M20的升级版 |
| model:weiwang:m35 | Weiwang M35 | 北汽威旺M35 | 北汽威旺M35 | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2016–2019 | 威旺紧凑型MPV,M20的升级版 |
| model:weiwang:m50f | Weiwang M50F | M50F | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2016–2020 | 北汽威旺紧凑型MPV |
| model:weiwang:m60 | Weiwang M60 | 北汽威旺M60 | 北汽威旺M60 | — | class:cn:a | body:suv | pt:ice | discontinued · 2017–2019 | 威旺紧凑型SUV,7座布局 |
| model:weiwang:s50 | Weiwang S50 | S50 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2016–2019 | 北汽威旺紧凑型SUV,威旺品牌首款SUV |
| model:weiwang:t205-d | Weiwang T205-D | 北汽威旺T205-D | 北汽威旺T205-D | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2015–2019 | 威旺微型卡车 |

## Wuling

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:wuling:1640018a5b | Wuling Xingguang | 五菱星光 | — | — | class:cn:a | body:sedan | pt:phev | current · 2023-present | 五菱星光(2023-),五菱插混/纯电轿车 |
| model:wuling:2668d2cc63 | Wuling Xingyun | 五菱星云 | — | — | class:cn:a | body:suv | pt:hev | current · 2023-present | 五菱星云(2023-),五菱紧凑型油电混动SUV |
| model:wuling:560 | Starlight 560 | 星光560 | — | — | class:cn:a | body:suv | pt:ice | current · 2025-present | 五菱星光560(2025-),星光系列SUV,5/7座,燃油/插混/纯电 |
| model:wuling:5d8901f173 | Wuling Rongguang Mini Truck | 五菱荣光小卡专用车 | — | — | class:cn:a | body:pickup | pt:ice | current · 2018-present | 五菱荣光小卡专用车(2018-),荣光小卡的专用车版 |
| model:wuling:730 | Wuling 730 | 五菱730 | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2014-2021 | 五菱730(2014-2021),五菱MPV,2021年停产 |
| model:wuling:730-2 | Starlight 730 | 星光730 | — | — | class:cn:a | body:mpv | pt:ice | current · 2025-present | 五菱星光730(2025-),星光系列MPV,燃油/插混/纯电 |
| model:wuling:75edb43d8e | Wuling Yangguang Electric Truck | 五菱扬光电卡 | — | — | class:cn:a | body:pickup | pt:bev | current · 2024-present | 五菱扬光电卡(2024-),扬光系列纯电微卡 |
| model:wuling:84a103e4a2 | Wuling Dragon Truck | 五菱龙卡 | — | — | class:cn:a | body:pickup | pt:ice | current · 2023-present | 五菱龙卡(2023-),五菱微型卡车 |
| model:wuling:a151a90556 | Wuling Mini Camper | 五菱微旅车 | — | — | class:cn:a | body:van | pt:bev | current · 2023-present | 五菱微旅车(2023-),基于五菱纯电微面的露营车 |
| model:wuling:a6ec79abbe | Wuling Journey | 五菱征程 | — | — | class:cn:a | body:mpv | pt:ice | current · 2021-present | 五菱征程(2021-),五菱9座MPV/商用车 |
| model:wuling:air-ev | Air ev Qingkong | 五菱Air ev晴空 | — | — | class:cn:a | body:hatchback | pt:bev | current · 2022-present | 五菱Air ev晴空(2022-),五菱纯电微型车,印尼等海外市场同步销售 |
| model:wuling:b1f3118761 | Wuling Rongguang New Truck | 五菱荣光新卡专用车 | — | — | class:cn:a | body:pickup | pt:ice | current · 2019-present | 五菱荣光新卡专用车(2019-),荣光新卡专用车版 |
| model:wuling:baojun-310 | Baojun 310 | 宝骏310 | Baojun 310 | — | class:cn:a0 | body:hatchback | pt:ice | current · 2016–present | 宝骏(Baojun)子品牌入门小型两厢车,主打性价比 |
| model:wuling:baojun-310w | Baojun 310W | 宝骏310W | Baojun 310W | — | class:cn:a | body:wagon | pt:ice | current · 2017–present | 宝骏(Baojun)子品牌紧凑旅行车,基于310平台,装载空间大 |
| model:wuling:baojun-510 | Baojun 510 | 宝骏510 | Baojun 510 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2017–2022 | 宝骏(Baojun)子品牌小型SUV,曾为现象级爆款;2022年停产 |
| model:wuling:baojun-530 | Baojun 530 | 宝骏530 | Baojun 530 | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2022 | 宝骏(Baojun)子品牌紧凑型SUV;约2022年停产 |
| model:wuling:baojun-560 | Baojun 560 | 宝骏560 | Baojun 560 | — | class:cn:a | body:suv | pt:ice | discontinued · 2015–2018 | 宝骏(Baojun)子品牌首款SUV,曾创销量纪录,2018年前后停产 |
| model:wuling:baojun-610 | Baojun 610 | 宝骏610 | Baojun 610 | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2014–2016 | 宝骏(Baojun)子品牌紧凑两厢车,基于630平台 |
| model:wuling:baojun-630 | Baojun 630 | 宝骏630 | Baojun 630 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2011–2016 | 宝骏(Baojun)子品牌首款轿车,紧凑三厢 |
| model:wuling:baojun-730 | Baojun 730 | 宝骏730 | Baojun 730 | — | class:cn:mpv | body:mpv | pt:ice | current · 2014–present | 宝骏(Baojun)子品牌畅销紧凑MPV(7座),家用商用两宜 |
| model:wuling:baojun-kiwi | Baojun KiWi EV | 宝骏KiWi EV | Baojun KiWi EV | — | class:cn:a00 | body:hatchback | pt:bev | discontinued · 2021–2023 | 宝骏(Baojun)子品牌A00级纯电微型车;约2023年停产 |
| model:wuling:baojun-lechi | Baojun Spark | 宝骏乐驰 | Baojun Spark | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2003–2015 | 原雪佛兰SPARK(乐驰)并入宝骏品牌,微型两厢车,2015年前后停产 |
| model:wuling:baojun-rc5 | Baojun RC-5 | 宝骏RC-5 | Baojun RC-5 | — | class:cn:a | body:hatchback | pt:ice | current · 2020–present | 宝骏(Baojun)子品牌紧凑轿车/掀背,主打年轻设计 |
| model:wuling:baojun-rc6 | Baojun RC-6 | 宝骏RC-6 | Baojun RC-6 | — | class:cn:b | body:sedan | pt:ice | current · 2019–present | 宝骏(Baojun)子品牌中型轿车,溜背造型 |
| model:wuling:baojun-rm5 | Baojun RM-5 | 宝骏RM-5 | Baojun RM-5 | — | class:cn:mpv | body:mpv | pt:ice | current · 2019–present | 宝骏(Baojun)子品牌跨界MPV,6/7座布局 |
| model:wuling:baojun-rs3 | Baojun RS-3 | 宝骏RS-3 | Baojun RS-3 | — | class:cn:a0 | body:suv | pt:ice | current · 2019–present | 宝骏(Baojun)子品牌小型SUV |
| model:wuling:baojun-rs5 | Baojun RS-5 | 宝骏RS-5 | Baojun RS-5 | — | class:cn:a | body:suv | pt:ice | current · 2019–present | 宝骏(Baojun)子品牌紧凑型SUV,新宝骏品牌首款车型 |
| model:wuling:baojun-valli | Baojun Valli | 宝骏Valli | Baojun Valli | — | class:cn:a | body:wagon | pt:ice | discontinued · 2021–2022 | 宝骏(Baojun)子品牌旅行车,基于RC-5平台,2022年停产 |
| model:wuling:bingo | Bingo | 缤果 | Bingo | — | class:cn:a0 | body:hatchback | pt:bev | current · 2023–present | A0级纯电五门小车(2023年上市) |
| model:wuling:c4983f453e | Wuling Yangguang | 五菱扬光 | — | — | class:cn:a | body:van | pt:bev | current · 2024-present | 五菱扬光(2024-),五菱纯电物流车 |
| model:wuling:dd6b1a72c1 | Wuling Journey Classic | 五菱征程经典 | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2016-2021 | 五菱征程经典(2016-2021),老款征程,2021年停产 |
| model:wuling:e10 | Wuling E10 | 五菱E10 | — | — | class:cn:a | body:hatchback | pt:bev | current · 2022-present | 五菱E10(2022-),五菱纯电快递配送车 |
| model:wuling:ev50 | Wuling EV50 | 五菱EV50 | — | — | class:cn:a | body:van | pt:bev | current · 2020-present | 五菱EV50(2020-),五菱纯电物流车 |
| model:wuling:ev80 | Wuling EV80 | 五菱EV80 | — | — | class:cn:a | body:van | pt:bev | current · 2021-present | 五菱EV80(2021-),五菱纯电物流车 |
| model:wuling:f7a9aff6ac | Wuling Electric Truck | 五菱电卡 | — | — | class:cn:a | body:pickup | pt:bev | current · 2021-present | 五菱电卡(2021-),五菱纯电微卡 |
| model:wuling:hongguang | Hongguang | 五菱宏光 | Hongguang | — | class:cn:mpv | body:mpv | pt:ice | current · 2010–present | 国民神车(微面/MPV),曾登顶中国乘用车销量榜 |
| model:wuling:hongguang-mini | Hongguang Mini EV | 宏光MINIEV | Hongguang Mini EV | ミニEV(Mini EV) | class:cn:a00 | body:hatchback | pt:bev | current · 2020–present | A00级纯电微型车,长期位居新能源销量前列;2025年以Mini EV之名进入日本 |
| model:wuling:hongguang-plus | Hongguang Plus | 五菱宏光PLUS | Hongguang Plus | — | class:cn:mpv | body:mpv | pt:ice | current · 2019–present | 宏光家族加大版,兼顾拉货载人,5/7/8座布局 |
| model:wuling:hongguang-s3 | Hongguang S3 | 五菱宏光S3 | Hongguang S3 | — | class:cn:a | body:suv | pt:ice | current · 2017–present | 五菱首款SUV,基于宏光平台打造,前置后驱7座跨界 |
| model:wuling:hongguang-v | Hongguang V | 五菱宏光V | Hongguang V | — | class:cn:mpv | body:van | pt:ice | current · 2014–present | 五菱宏光V型微面,偏商用拉货 |
| model:wuling:jiachen | Jiachen | 佳辰 | Jiachen | — | class:cn:mpv | body:mpv | pt:ice | current · 2022–present | 紧凑型家用MPV |
| model:wuling:nanoev | Wuling NanoEV | 五菱NanoEV | — | — | class:cn:a | body:hatchback | pt:bev | discontinued · 2021-2023 | 五菱NanoEV(2021-2023),五菱两座纯电微型车,2023年停产 |
| model:wuling:nebula | Nebula | 星云 | Nebula | — | class:cn:mpv | body:mpv | pt:hev | current · 2023–present | 紧凑型MPV,五菱混动(HEV) |
| model:wuling:plus | Bingo PLUS | 五菱缤果PLUS | — | — | class:cn:a | body:hatchback | pt:bev | current · 2024-present | 五菱缤果PLUS(2024-),缤果的加大版 |
| model:wuling:pro | Yangguang Pro | 五菱扬光Pro | — | — | class:cn:a | body:van | pt:bev | current · 2025-present | 五菱扬光Pro(2025-),扬光的升级版 |
| model:wuling:pro-2 | Bingo Pro | 缤果Pro | — | — | class:cn:a | body:hatchback | pt:bev | current · 2025-present | 五菱缤果Pro(2025-),缤果家族的纯电小车 |
| model:wuling:rongguang | Rongguang | 五菱荣光 | Rongguang | — | class:cn:mpv | body:van | pt:ice | current · 2008–present | 微面/轻客(五菱荣光系列) |
| model:wuling:rongguang-s | Rongguang S | 五菱荣光S | Rongguang S | — | class:cn:mpv | body:van | pt:ice | current · 2014–present | 荣光系列改款微面,注重承载与空间 |
| model:wuling:rongguang-v | Rongguang V | 五菱荣光V | Rongguang V | — | class:cn:mpv | body:van | pt:ice | current · 2014–present | 荣光系列微面,偏商用拉货 |
| model:wuling:rongguang-xiaoka | Rongguang Xiaoka | 五菱荣光小卡 | Rongguang Xiaoka | — | class:cn:mpv | body:pickup | pt:ice | current · 2012–present | 荣光微卡(单排/双排),乡镇物流主力 |
| model:wuling:rongguang-xinka | Rongguang Xinka | 五菱荣光新卡 | Rongguang Xinka | — | class:cn:mpv | body:pickup | pt:ice | current · 2018–present | 荣光小卡升级版微卡,载重更强 |
| model:wuling:starlight | Starlight | 星光 | Starlight | — | class:cn:b | body:sedan | pt:phev | current · 2023–present | 中型轿车,插混/纯电双动力 |
| model:wuling:sunshine | Sunshine | 五菱之光 | Sunshine | — | class:cn:mpv | body:van | pt:ice | current · 2002–present | 国民微面(微型面包车),保有量极大;海外名Sunshine |
| model:wuling:victory | Victory | 凯捷 | Victory | — | class:cn:mpv | body:mpv | pt:ice | current · 2020–present | 紧凑型MPV(五菱银标首款车型),含混动版;海外称Victory/Capgemini |
| model:wuling:wuling-e5 | Wuling E5 | 五菱E5 | — | — | class:cn:a | body:sedan | pt:bev | discontinued · 2017-2020 | 五菱E5(2017-2020),五菱纯电轿车(网约车),2020年停产 |
| model:wuling:wuling-ev | Rongguang EV | 五菱荣光EV | — | — | class:cn:a | body:van | pt:bev | current · 2020-present | 五菱荣光EV(2020-),荣光微面纯电版 |
| model:wuling:wuling-ev-2 | Wuling Rongguang Mini Truck EV | 五菱荣光小卡EV | — | — | class:cn:a | body:pickup | pt:bev | current · 2021-present | 五菱荣光小卡EV(2021-),荣光小卡纯电版 |
| model:wuling:wuling-l | Starlight L | 星光L | — | — | class:cn:a | body:mpv | pt:ice | current · 2025-present | 五菱星光L(2025-),星光系列MPV |
| model:wuling:wuling-pn | PN Truck | PN货车 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2005-2015 | 五菱PN货车(2005-2015),五菱微型卡车,2015年停产 |
| model:wuling:wuling-s | Starlight S | 五菱星光S | — | — | class:cn:a | body:suv | pt:phev | current · 2024-present | 五菱星光S(2024-),星光系列SUV |
| model:wuling:wuling-s-2 | Bingo S | 缤果S | — | — | class:cn:a | body:suv | pt:bev | current · 2025-present | 五菱缤果S(2025-),缤果家族纯电小型SUV |
| model:wuling:xingchen | Xingchen | 五菱星辰 | Xingchen | — | class:cn:a | body:suv | pt:ice | current · 2021–present | 五菱银标紧凑型SUV,汽油版与混动版并存 |
| model:wuling:xingchi | Xingchi | 五菱星驰 | Xingchi | — | class:cn:a0 | body:suv | pt:ice | current · 2022–present | 五菱银标小型SUV,入门定位 |
| model:wuling:zhengcheng | Zhengcheng | 征程 | Zhengcheng | — | class:cn:mpv | body:mpv | pt:ice | current · 2021–present | 中大型商用MPV(7/9座) |
| model:wuling:zhengtu | Zhengtu | 五菱征途 | Zhengtu | — | class:cn:mpv | body:pickup | pt:ice | current · 2021–present | 微卡/皮卡,前置后驱,主打城乡创业市场 |
| model:wuling:zhiguang-v | Zhiguang V | 五菱之光V | Zhiguang V | — | class:cn:mpv | body:van | pt:ice | current · 2015-present | 五菱之光V(2015-),五菱之光加长微面,偏商用拉货 |
| model:wuling:zhiguang-xiaoka | Zhiguang Xiaoka | 五菱之光小卡 | Zhiguang Xiaoka | — | class:cn:mpv | body:pickup | pt:ice | current · 2015–present | 五菱之光微卡(单排/双排小卡),主打乡镇运输 |

## Xiaomi

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:xiaomi:su7 | Xiaomi SU7 | 小米SU7 | 小米SU7(未導入) | シャオミ SU7 | class:cn:c | body:sedan | pt:bev | current · 2024–present | 小米首款量产车,2024年3月上市,纯电中大型轿车(轴距3000mm);后新增SU7 Ultra性能版 |
| model:xiaomi:su7-ultra | Xiaomi SU7 Ultra | 小米SU7 Ultra | 小米SU7 Ultra(未導入) | シャオミ SU7 Ultra | class:cn:c | body:sedan | pt:bev | current · 2025–present | SU7巅峰性能版,2025年2月上市;三电机综合1548马力,0–100km/h约1.98秒 |
| model:xiaomi:yu7 | Xiaomi YU7 | 小米YU7 | 小米YU7(未導入) | シャオミ YU7 | class:cn:c | body:suv | pt:bev | current · 2025–present | 小米首款SUV,2025年6月上市,纯电中大型轿跑SUV(轴距3000mm) |

## XPeng

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:xpeng:g3 | G3 | 小鹏G3 | G3(未导入) | — | class:cn:a | body:suv | pt:bev | discontinued · 2018–2023 | 小鹏首款量产车,紧凑型纯电SUV;2021年G3i改款(并入本条);2023年停产 |
| model:xpeng:g6 | G6 | 小鹏G6 | G6(未导入) | — | class:cn:b | body:suv | pt:bev | current · 2023–present | 小鹏中型纯电轿跑SUV(800V平台,SEPA 2.0) |
| model:xpeng:g7 | G7 | 小鹏G7 | G7(未导入) | — | class:cn:b | body:suv | pt:bev | current · 2025–present | 小鹏中型纯电SUV(2025年上市) |
| model:xpeng:g9 | G9 | 小鹏G9 | G9(未导入) | — | class:cn:c | body:suv | pt:bev | current · 2022–present | 小鹏旗舰中大型纯电SUV(800V平台) |
| model:xpeng:mona-m03 | MONA M03 | MONA M03 | MONA M03(未导入) | — | class:cn:a | body:sedan | pt:bev | current · 2024–present | 小鹏MONA子品牌首款车型,紧凑型纯电轿车(低价走量) |
| model:xpeng:p5 | P5 | 小鹏P5 | P5(未导入) | — | class:cn:a | body:sedan | pt:bev | current · 2021–present | 小鹏紧凑型纯电轿车(主打城市智驾/大空间);日本市场未导入 |
| model:xpeng:p6 | P6 | 小鹏P6 | P6(未导入) | — | class:cn:b | body:sedan | pt:bev | current · 2025–present | 小鹏中型纯电轿车(2025年上市) |
| model:xpeng:p7 | P7 | 小鹏P7 | P7(未导入) | — | class:cn:b | body:sedan | pt:bev | current · 2020–present | 小鹏首款轿车,中型纯电轿跑;2023年P7i改款并取代原P7,海外/港澳在售 |
| model:xpeng:p7-plus | P7+ | 小鹏P7+ | P7+(未导入) | — | class:cn:c | body:sedan | pt:bev | current · 2024–present | 小鹏2024年10月巴黎车展发布、11月上市的中大型纯电轿车(车长5.06米/轴距3.0米),较P7更大,主打纯视觉智驾 |
| model:xpeng:x9 | X9 | 小鹏X9 | X9(未导入) | — | class:cn:mpv | body:mpv | pt:bev | current · 2024–present | 小鹏大型纯电MPV(7座,后轮转向) |

## Yema

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:yema:493a57203e | Bojun | 博骏 | — | — | class:cn:a | body:suv | pt:ice | current · 2019–present | 博骏(2019-),野马紧凑型SUV,2021款在售 |
| model:yema:622fae2d61 | Spaika New Energy | 斯派卡新能源 | — | — | class:cn:mpv | body:mpv | pt:bev | discontinued · 2020–2023 | 斯派卡新能源(2020-),纯电MPV(斯派卡EV版),随品牌停产 |
| model:yema:c30 | Yema C30 | 野马C30 | — | — | class:cn:a | body:sedan | pt:bev | discontinued · — | C30,野马纯电动出租车,曾投放成都市场 |
| model:yema:ec30 | Yema EC30 | 野马EC30 | — | — | class:cn:mpv | body:mpv | pt:bev | discontinued · 2017–2019 | EC30(2017-),纯电动MPV,基于野马M70,综合续航255公里 |
| model:yema:ec70 | Yema EC70 | 野马EC70 | — | — | class:cn:a | body:suv | pt:bev | discontinued · 2016–2018 | EC70(2016-2018),纯电紧凑型SUV |
| model:yema:f10 | Yema F10 | 野马F10 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2010–2014 | F10(2010-2014),小型SUV,F系列早期车型 |
| model:yema:f12 | Yema F12 | F12 | F12 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2012–2018 | 小型SUV,野马早期车型,基于F99平台改进 |
| model:yema:f16 | Yema F16 | 野马F16 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2014–2018 | F16(2014-),小型SUV,2014成都车展上市 |
| model:yema:f19 | Yema F19 | 野马F19 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2013–2016 | F19(2013-),小型SUV,F系列中期车型 |
| model:yema:f99 | Yema F99 | 野马F99 | — | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2009–2012 | F99(2009-2012),野马首款量产SUV |
| model:yema:mini | Yema Mini Truck | 野马MINI卡 | — | — | class:cn:a | body:pickup | pt:ice | current · 2021–present | MINI卡(2021-),微卡,单排两座,1.5L动力 |
| model:yema:spica | Yema Spica | 斯派卡 | — | — | class:cn:mpv | body:mpv | pt:ice | discontinued · 2018–2020 | 紧凑型MPV(7座),野马品牌首款MPV |
| model:yema:t70 | Yema T70 | T70 | T70 | — | class:cn:a | body:suv | pt:ice | discontinued · 2015–2020 | 紧凑型SUV,野马销量支柱 |
| model:yema:t80 | Yema T80 | T80 | T80 | — | class:cn:b | body:suv | pt:ice | discontinued · 2017–2020 | 中型SUV,野马旗舰SUV |

## Youngman Lotus

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:youngman-lotus:l3 | Youngman Lotus L3 | 莲花L3 | 蓮花L3 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2009–2015 | 青年莲花L3紧凑型轿车,基于莲花工程底盘调校,含两厢版L3两厢 |
| model:youngman-lotus:l5 | Youngman Lotus L5 | 莲花L5 | 蓮花L5 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2011–2015 | 青年莲花L5紧凑型轿车,莲花L5 Sportback为两厢版 |

## Yutong

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:yutong:cl6 | Yutong CL6 | CL6 | CL6 | — | class:cn:mpv | body:van | pt:ice | current · 2021–present | 宇通CL6轻型客车,乘用化小巴车型,2021年上市 |
| model:yutong:t7 | Yutong T7 | T7 | T7 | — | class:cn:mpv | body:van | pt:ice | current · 2016–present | 宇通T7轻型客车(中巴),自主高端公务车,2016年上市 |

## Zotye

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:zotye:100 | Cloud 100 | 云100 | — | — | class:cn:a | body:hatchback | pt:bev | discontinued · 2014-2018 | 云100(2014-2018),众泰纯电微型车,2018年停产 |
| model:zotye:2008 | Zotye 2008 | 众泰2008 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2006-2010 | 众泰2008(2006-2010),众泰首款SUV,2010年停产 |
| model:zotye:5008 | Zotye 5008 | 众泰5008 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2008-2013 | 众泰5008(2008-2013),2008的改款,2013年停产 |
| model:zotye:b40 | Zotye B40 | 众泰B40 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2013-2015 | 众泰B40(2013-2015),小型SUV,2015年停产 |
| model:zotye:damai-x5 | Zotye Damai X5 | 大迈X5 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2015-2019 | 大迈X5(2015-2019),众泰大迈子品牌首款紧凑型SUV,2019年停产 |
| model:zotye:damai-x7 | Zotye Damai X7 | 大迈X7 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2017-2019 | 大迈X7(2017-2019),众泰大迈中型SUV,2019年停产 |
| model:zotye:e20 | Zotye E20 | 众泰E20 | — | — | class:cn:a | body:hatchback | pt:bev | discontinued · 2014-2018 | 众泰E20(2014-2018),纯电微型车,2018年停产 |
| model:zotye:e200 | Zotye E200 | E200 | E200 | — | class:cn:a00 | body:hatchback | pt:bev | discontinued · 2016–2019 | 纯电动微型车,双门两座设计 |
| model:zotye:es330 | Zotye ES330 | 众泰ES330 | — | — | class:cn:b | body:sedan | pt:bev | discontinued · 2019-2021 | 众泰ES330(2019-2021),纯电轿车,2021年停产 |
| model:zotye:et450 | Zotye ET450 | 众泰ET450 | — | — | class:cn:a | body:suv | pt:bev | discontinued · 2018-2021 | 众泰ET450(2018-2021),纯电SUV,2021年停产 |
| model:zotye:fa92660fd0 | Zhima | 芝麻 | — | — | class:cn:a00 | body:hatchback | pt:bev | discontinued · 2016-2019 | 众泰芝麻(2016-2019),纯电微型车,2019年停产 |
| model:zotye:m10ev | Zotye M10EV | 众泰M10EV | — | — | class:cn:a | body:hatchback | pt:bev | discontinued · 2018-2021 | 众泰M10EV(2018-2021),纯电微型车,2021年停产 |
| model:zotye:m300 | Zotye M300 | 众泰M300 | — | — | class:cn:a | body:mpv | pt:ice | discontinued · 2010-2014 | 众泰M300(2010-2014),MPV(源自菲亚特Multipla),2014年停产 |
| model:zotye:sr7 | Zotye SR7 | SR7 | SR7 | — | class:cn:a | body:suv | pt:ice | discontinued · 2015–2017 | 紧凑型SUV,外观模仿奥迪Q3 |
| model:zotye:sr9 | Zotye SR9 | SR9 | SR9 | — | class:cn:b | body:suv | pt:ice | discontinued · 2016–2017 | 中型SUV,外观模仿保时捷Macan,曾引发网络热议 |
| model:zotye:t100 | Zotye T100 | 众泰T100 | — | — | class:cn:a | body:pickup | pt:ice | discontinued · 2017-2019 | 众泰T100(2017-2019),皮卡,2019年停产 |
| model:zotye:t11 | Jiangnan T11 | 江南T11 | — | — | class:cn:a | body:hatchback | pt:bev | discontinued · 2011-2015 | 江南T11(2011-2015),众泰旗下江南品牌纯电微型车,2015年停产 |
| model:zotye:t200 | Zotye T200 | T200 | T200 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2013–2016 | 小型SUV,源自众泰2008系列平台 |
| model:zotye:t300 | Zotye T300 | T300 | T300 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2017–2019 | 小型SUV |
| model:zotye:t500 | Zotye T500 | T500 | T500 | — | class:cn:a | body:suv | pt:ice | discontinued · 2018–2019 | 紧凑型SUV |
| model:zotye:t600 | Zotye T600 | T600 | T600 | — | class:cn:b | body:suv | pt:ice | discontinued · 2013–2018 | 中型SUV,众泰翻身之作,品牌热销车型,含T600 Coupe |
| model:zotye:t600-coupe | Zotye T600 Coupe | T600 Coupe | T600 Coupe | — | class:cn:b | body:coupe | pt:ice | discontinued · 2017-2019 | T600 Coupe(2017-2019),T600的运动轿跑版,2019年停产 |
| model:zotye:t700 | Zotye T700 | T700 | T700 | — | class:cn:c | body:suv | pt:ice | discontinued · 2017–2019 | 中大型SUV,众泰旗舰SUV |
| model:zotye:t800 | Zotye T800 | 众泰T800 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2018-2020 | 众泰T800(2018-2020),T700的七座版,2020年停产 |
| model:zotye:ts5 | Zotye TS5 | 众泰TS5 | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2019-2021 | 众泰TS5(2019-2021),紧凑型SUV,2021年停产 |
| model:zotye:v10 | Zotye V10 | 众泰V10 | — | — | class:cn:a | body:van | pt:ice | discontinued · 2012-2016 | 众泰V10(2012-2016),微面,2016年停产 |
| model:zotye:z100 | Zotye Z100 | Z100 | Z100 | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2013–2015 | 微型两厢车,众泰入门级轿车 |
| model:zotye:z200 | Zotye Z200 | 众泰Z200 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2011-2014 | 众泰Z200(2011-2014),紧凑型轿车,2014年停产 |
| model:zotye:z200hb | Zotye Z200HB | 众泰Z200HB | — | — | class:cn:a | body:hatchback | pt:ice | discontinued · 2011-2014 | 众泰Z200HB(2011-2014),Z200两厢版,2014年停产 |
| model:zotye:z300 | Zotye Z300 | Z300 | Z300 | — | class:cn:a | body:sedan | pt:ice | discontinued · 2012–2017 | 紧凑型轿车,众泰早期主力轿车 |
| model:zotye:z360 | Zotye Z360 | 众泰Z360 | — | — | class:cn:a | body:sedan | pt:ice | discontinued · 2017-2019 | 众泰Z360(2017-2019),Z300改款,2019年停产 |
| model:zotye:z500 | Zotye Z500 | Z500 | Z500 | — | class:cn:b | body:sedan | pt:ice | discontinued · 2014–2018 | 中型轿车 |
| model:zotye:z560 | Zotye Z560 | Z560 | Z560 | — | class:cn:b | body:sedan | pt:ice | discontinued · 2017–2018 | 中型轿车,Z500的改款车型 |
| model:zotye:z700 | Zotye Z700 | Z700 | Z700 | — | class:cn:c | body:sedan | pt:ice | discontinued · 2015–2018 | 中大型轿车,众泰旗舰轿车 |
| model:zotye:zotye-tt | Jiangnan TT | 江南TT | — | — | class:cn:a00 | body:hatchback | pt:ice | discontinued · 2007-2013 | 江南TT(2007-2013),众泰旗下江南品牌微型车(奥拓平台),2013年停产 |

## ZX

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:zx:1949 | ZX 1949 | 中兴1949 | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2022–present | 中兴1949(2022-),中兴全尺寸皮卡 |
| model:zx:1986 | ZX 1986 | 中兴1986 | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2022–present | 中兴1986(2022-),中兴皮卡,向经典车型致敬命名 |
| model:zx:1b101d49a0 | Changhe | 昌铃 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2011–2014 | 昌铃,中兴皮卡车型(2012年前后在产),已停产 |
| model:zx:74b343bc24 | Little Tiger | 小老虎 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2016–2020 | 小老虎(2016-),中兴入门皮卡,已停产 |
| model:zx:9c7d7a67aa | Wuxian | 无限 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2005–2010 | 无限(2005-2010),中兴SUV,已停产 |
| model:zx:a5f6c402c6 | Chiye - Xinjingying | 驰野-鑫精英 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2003–2010 | 驰野(2003-2010),中兴早期SUV,鑫精英为其配置款 |
| model:zx:c3 | ZX C3 | C3 | C3 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2014–2018 | 小型SUV,基于威虎SUV平台开发 |
| model:zx:e17f6bc980 | Lingzhu | 领主 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2016–2022 | 领主(2016-2022),中兴高端皮卡,已停产 |
| model:zx:gx3 | ZX GX3 | GX3 | GX3 | — | class:cn:a0 | body:suv | pt:ice | discontinued · 2016–2019 | 小型SUV,C3的改款车型 |
| model:zx:suv | Weihu SUV | 威虎SUV | — | — | class:cn:a | body:suv | pt:ice | discontinued · 2013–2016 | 威虎SUV(2013-2016),基于威虎皮卡平台的SUV,已停产 |
| model:zx:weihu | ZX Weihu | 威虎 | — | — | class:cn:mpv | body:pickup | pt:ice | current · 2011–present | 中型皮卡,中兴主力车型,至今在售 |
| model:zx:zx-a9 | Flagship A9 | 旗舰A9 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2001–2014 | 旗舰A9(2001-2014),中兴经典皮卡('皮卡中的捷达'),已停产 |
| model:zx:zx-g3 | Weihu G3 | 威虎G3 | — | — | class:cn:mpv | body:pickup | pt:ice | discontinued · 2013–2020 | 威虎G3(2013-),威虎系列皮卡,已停产 |
| model:zx:zx-v3 | Wuxian V3 | 无限V3 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2010–2014 | 无限V3(2010-2014),中兴SUV,已停产 |
| model:zx:zx-v5 | Wuxian V5 | 无限V5 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2011–2014 | 无限V5(2011-2014),中兴SUV,已停产 |
| model:zx:zx-v7 | Wuxian V7 | 无限V7 | — | — | class:cn:b | body:suv | pt:ice | discontinued · 2013–2016 | 无限V7(2013-2016),中兴SUV,已停产 |

## Škoda

| id | en | zh-CN | zh-TW | ja | 级别 | 车身 | 动力 | 状态/年份 | 注释 |
|---|---|---|---|---|---|---|---|---|---|
| model:skoda:elroq | Elroq | Elroq | Elroq | エルロク | class:eu:j | body:suv | pt:bev | current · 2024–present | 2024年10月发布的入门纯电SUV(MEB平台),定位低于Enyaq;大陆/台湾截至2026年均未上市 |
| model:skoda:enyaq-iv | Enyaq iV | ENYAQ iV | Enyaq iV | エンヤク iV | class:eu:j | body:suv | pt:bev | current · 2020–present | 基于大众MEB平台的纯电SUV;大陆未国产,台湾由Škoda Taiwan导入(2023起) |
| model:skoda:fabia | Fabia | 晶锐 | Fabia | ファビア | class:cn:a0 | body:hatchback | pt:ice | current · 1999–present | 小型掀背车,第四代(2021)仅欧洲等市场销售;大陆「晶锐」于2018年前后停售 |
| model:skoda:kamiq | Kamiq | 柯米克 | Kamiq | — | class:cn:a0 | body:suv | pt:ice | current · 2018–present | 小型SUV,2018年国产上市(大陆版与海外Kamiq不同源),含柯米克GT衍生 |
| model:skoda:karoq | Karoq | 柯珞克 | Karoq | カローク | class:cn:a | body:suv | pt:ice | current · 2017–present | 紧凑型SUV,与大众途岳同平台;大陆「柯珞克」已停售(上汽斯柯达收缩),欧洲等海外市场在售 |
| model:skoda:kodiaq | Kodiaq | 柯迪亚克 | Kodiaq | コディアック | class:cn:b | body:suv | pt:ice | current · 2016–present | 品牌首款中型SUV(5/7座),与大众途观L同平台;2024年欧洲换代第二代 |
| model:skoda:kodiaq-gt | Kodiaq GT | 柯迪亚克GT | Kodiaq GT | — | class:cn:b | body:crossover | pt:ice | current · 2019–present | 柯迪亚克的轿跑SUV版,2019年国产上市(大陆特供) |
| model:skoda:octavia | Octavia | 明锐 | Octavia | オクタヴィア | class:cn:a | body:hatchback | pt:ice | current · 1996–present | 斯柯达全球销量支柱的紧凑型掀背/旅行轿车;大陆现售「明锐PRO」(2021起),含插混Octavia iV |
| model:skoda:rapid | Rapid | 昕锐 | Rapid | — | class:cn:a | body:sedan | pt:ice | current · 2013–present | 紧凑型轿车,2013年国产上市,与大众桑塔纳/捷达同平台;海外Rapid与大陆昕锐同源 |
| model:skoda:rapid-spaceback | Rapid Spaceback | 昕动 | Rapid Spaceback | — | class:cn:a | body:hatchback | pt:ice | current · 2014–present | 昕锐的两厢版,2014年国产上市(大陆特供) |
| model:skoda:superb | Superb | 速派 | Superb | シューパーブ | class:cn:b | body:sedan | pt:ice | current · 2001–present | 旗舰掀背轿车(第四代2023起);大陆首代曾名「昊锐」(2009–2013),2013年起官方名「速派」 |
| model:skoda:superb-combi | Superb Combi | 速尊 | Superb Combi | — | class:cn:b | body:wagon | pt:ice | discontinued · 2013–2018 | 速派的旅行版,2013年起以进口形式引入,名「速尊」;2018年前后停售 |
| model:skoda:yeti | Yeti | 野帝 | Yeti | — | class:cn:a | body:suv | pt:ice | discontinued · 2013–2017 | 斯柯达首款SUV,全球2009年发布;大陆由上汽大众斯柯达国产,名「野帝」(2013–2017) |

---

# Part 5 跨市场异名(cross_market)

| id | 车型 | jp | us | eu | cn | tw | 注释 |
|---|---|---|---|---|---|---|---|
| alias:01 | Toyota Yaris | ヴィッツ Vitz(1999-2019)/ヤリス Yaris(2020起) | Yaris | Yaris | 雅力士(初代「威姿」) | Yaris | 2020年全球统一Yaris |
| alias:02 | Toyota Vios | 无 | 无 | 无 | 威驰(一汽丰田) | Vios | 「威驰」为大陆名;东南亚称Yaris Ativ |
| alias:03 | Toyota Corolla | カローラ | Corolla | Corolla | 卡罗拉/雷凌Levin(广汽) | Corolla Altis(卡羅拉) | 雷凌为大陆姊妹名 |
| alias:04 | Toyota Camry | カムリ | Camry | Camry | 凯美瑞 | 凱美瑞 | 香港旧称「佳美」 |
| alias:05 | Toyota Harrier | ハリアー | Venza | 无 | 凌放(一汽)/威飒(广汽) | Harrier | 北美Venza源自二代Harrier |
| alias:06 | Toyota C-HR | C-HR | C-HR | C-HR | C-HR/奕泽IZOA(一汽) | C-HR | 奕泽为大陆姊妹名 |
| alias:07 | Toyota Aqua | アクア | Prius c | Yaris Hybrid | 无 | Prius c | 典型日/海外异名 |
| alias:08 | Honda Fit | フィット | Fit | Jazz | 飞度 | Fit | 港澳及欧洲称Jazz |
| alias:09 | Honda Vezel | ヴェゼル | HR-V | HR-V | 缤智(广汽)/XR-V(东风) | HR-V | XR-V为大陆姊妹名 |
| alias:10 | Honda Civic | シビック | Civic | Civic | 思域 | Civic(俗稱喜美) | 「喜美」源自闽南语谐音 |
| alias:11 | Nissan March | マーチ | Micra | Micra | 玛驰(已停产) | March |  |
| alias:12 | Nissan Tiida | ティーダ | Versa | Pulsar | 骐达(两厢)/颐达(三厢) | Tiida |  |
| alias:13 | Nissan Sylphy | シルフィ | Sentra | Pulsar | 轩逸 | Super Sentra(俗稱仙草) | 同一车系四名 |
| alias:14 | Nissan Skyline | スカイライン | Infiniti G/Q50 | Infiniti G/Q | 英菲尼迪Q50进口 | Infiniti Q50 | 北美/港台以英菲尼迪销售 |
| alias:15 | Nissan Serena | セレナ | 无 | 无 | 无 | 无 | 日系家用MPV |
| alias:16 | Mazda Demio | デミオ(至2019)→MAZDA2 | Mazda2 | Mazda2 | 马自达2(已停) | Mazda2 | 2019年统一MAZDA2 |
| alias:17 | Mazda Axela | アクセラ(至2019)→MAZDA3 | Mazda3 | Mazda3 | 昂克赛拉 | Mazda3 |  |
| alias:18 | Mazda Atenza | アテンザ(至2019)→MAZDA6 | Mazda6 | Mazda6 | 阿特兹 | Mazda6 | 2025年3月全球停产 |
| alias:19 | Mazda Roadster | ロードスター | MX-5 Miata | MX-5 | MX-5(进口) | MX-5 | 日本名Roadster |
| alias:20 | Mitsubishi Pajero | パジェロ | Montero | Pajero | 帕杰罗(俗称山猫) | Pajero | 北美/西语市场Montero |
| alias:21 | Mitsubishi Lancer | ランサー | Lancer | Lancer | 菱帅→蓝瑟→翼神(历代) | 菱帥→Lancer Fortis | 台湾「菱帥」与东南菱帅同源 |
| alias:22 | Suzuki Escudo | エスクード | Vitara | Vitara | 维特拉 | Vitara | 日本名Escudo |
| alias:23 | VW Jetta | ジェッタ | Jetta | Jetta | 捷达(2代)→宝来(4代)→速腾(5代起) | Jetta | 2019年「捷达」独立为品牌 |
| alias:24 | Toyota Land Cruiser Prado | ランドクルーザープラド | Land Cruiser Prado | 无 | 普拉多(旧称霸道) | Land Cruiser Prado | 「霸道」因广告争议改名 |

---

# Part 6 待核实清单(pending_verification)

| id | 条目 | 说明 |
|---|---|---|
| PV-05 | Genesis(台湾) | 「捷恩斯」为媒体通行用法,未见总代理官方公告 |
| PV-11 | 中国品牌(日本/台湾) | 吉利、长城、蔚来、小鹏、理想、五菱、红旗的官方进入状态待复核 |
| PV-12 | BYD 汉/唐(台湾) | 台湾导入状态待核实(2025年起比亚迪已进入台湾,首批以海洋系为主) |
| PV-17 | model:byd:e2 (BYD) | 紧凑型纯电两厢,主供出租/网约车;中国市场约2024–2025年退市,停产时间待核实 |
| PV-18 | model:byd:han (BYD) | 王朝系列旗舰中大型轿车,EV/DM-i/DM-p多动力;海外市场沿用Han;台湾导入状态待核实 |
| PV-19 | model:byd:tang (BYD) | 王朝系列中型SUV,DM-i/DM-p/EV多动力;初代2015–2018;海外名Tang(欧洲2025年起有改称Sealion 8的报道) |
| PV-20 | model:byd:yuan-up (BYD) | 小型纯电SUV;海外称Atto 2(2025年欧洲上市);日本导入状态待核实 |
| PV-21 | model:changan:benben-ev (Changan) | A00级纯电微型车(含奔奔E-Star衍生);已停产,停产时间待核实 |
| PV-22 | model:changan:cs95 (Changan) | 中大型SUV(7座);现售状态待核实 |
| PV-25 | model:chery:fulwin-a9 (Chery) | 风云(Fulwin)系列中大型轿车,纯电/增程;上市时间以官方为准 |
| PV-29 | model:faw:besturn-x40 (FAW) | 奔腾(Besturn)子品牌小型SUV;停产年份待核实(约2020–2021) |
| PV-30 | model:faw:junpai-d60 (FAW) | 骏派(Junpai)子品牌(一汽天津)小型SUV;停产年份待核实(约2019) |
| PV-34 | model:hongqi:h7 (Hongqi) | 红旗品牌复兴首款战略车型(2013年上市);第二代上市时间待核实(约2024–2025) |
| PV-37 | model:infiniti:qx65 (Infiniti) | QX60 的轿跑 SUV 版本,2026 年新发布(待核实上市详情) |
| PV-43 | model:polestar:polestar-5 (Polestar) | 纯电大型GT轿车,2025年发布;量产交付进度待核实 |
| PV-44 | model:roewe:ei5 (Roewe) | 紧凑型纯电旅行车(出租/网约车常见);现售状态待核实 |

---

> 本文件由 `scripts/build.py` 自动生成(2026-10-19)。
> 许可证:CC BY-SA 4.0。详见仓库 LICENSE 与 README。
