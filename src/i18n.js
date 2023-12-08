import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // 检测用户当前使用的语言
  // 文档: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // 注入 react-i18next 实例
  .use(initReactI18next)
  // 初始化 i18next
  // 配置参数的文档: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          faq: "FAQ",
          "location plain": "Plain",
          "location hills": "Hills",
          "location mountain": "Mountain",
          "location plainhills": "Plain or Hills",
          "location na": "Any",
        },
      },
      zh: {
        translation: {
          faq: "FAQ",
          Energy: "电力数值",
          Reset: "重置",
          Download: "下载",
          "Executive Officers": "执行官",
          "Contracts/External Works": "合约/外派",
          "Tech Tiles": "科技板块",
          Creator: "制作器",
          "Barrage Information": "大坝咨询站",
          Name: "名称",
          Ability: "技能",
          Tier: "梯度",
          Source: "来源",
          "Age I": "I时代",
          "Age II": "II时代",
          "Age III": "III时代",
          "Amir Zahir": "放水哥",
          "Elon Audia": "8紫哥",
          "Wilhelm Adler": "3棕哥",
          "Graziano Del Monte": "4水哥",
          "Margot Fouche": "房子姐",
          "Franz De Lasse": "存电哥",
          "Anton Krylov": "复制哥",
          "Mahiri Sekibo": "复制姐",
          "Gennaro Grasso": "建筑师",
          "Jill MaDowell": "水管姐",
          "Solomon P.Jordan": "3元哥",
          "Leslie Spencer": "外派姐",
          "Viktor Fieslerr": "4电哥",
          "Wu Fang": "水电哥",
          "Tommaso Battista": "小黄人",
          "Dr. Octavius": "章鱼哥",
          "Simone Luciani": "订单哥",

          "Effect Description": "技能描述",
          Sekibo: "如果复制姐在场",
          German: "如果德国在场",
          "You can have up to 4 Contract tiles face-up in your personal supply. You can fulfill two or more Contracts with one single production action, as long as the total amount of produced Energy Units is more than or equal to the total amount of energy required by the Contracts.":
            "你的供应区至多能拥有4块正面向上的合约。你能用一次生产行动来完成两个或更多合约，只要产出的能源单位总量大于等于这些合约所需的能源总量。",
          "If you are performing an action in the Contract Office, you'll be able to acquire new Contracts with a temporaty Contract limit of 4. You'll be able to hold 4 Contracts until you fulfill one of them - after the fulfillment, your limit will go back to 3. If you are performing an action in the Turbine Station, you'll be able to fulfill multiple Contracts with that production action.":
            "如果玛希利·斯科波在她回合内复制了该能力并执行了合约部门中的行动，则她的合约上限临时变为4。待一个合约完成后，她的合约上限重新恢复为3。如果她执行了生产行动，则她可以用该生产行动来完成多个合约。",
          "When producing energy by activating one of your Powerhouses with a Production action, you can use Water Drops from two or more of your Dams (and/or Neutral Dams) connected to the activated Powerhouse.":
            "当你激活发电站用于执行生产行动时，你可以同时使用两个或更多你自己的大坝或者中立坝，只要它们与激活的发电站相邻。",
          "You can perform a Production action applying this Executive Officer ability.":
            "你可以使用该执行官能力执行一次生产行动。",
          "If you are playing with German and your special ability is active, you can apply Dr. Octavius's ability only for the first production.":
            "如果你触发了德国的发电站能力，那么你只有第一次发电时可以触发该执行官效果。",

          "Replace one of your 12 starting Engineers with the Architect at the beginning of the game. The Architect is a special Engineer. If you place the Architect in an action space requiring only one Engineer, you can immediately take another turn. If you place the Architect together with other Engineers in an action space requiring two or three Engineers, you do not activate this special ability.":
            "游戏开始时，将你的12个起始工程师中的一个替换为建筑师。这个建筑师是一位特殊工程师，如果你将建筑师放在仅需放置一个工程师的行动位，则你可以立即再进行一个回合。如果你将建筑师与其他工程师一起放置在需要两个或三个工程师的行动位，你不能激活这个特殊能力。",
          "You can use one of your Engineers as if it was the Architect.":
            "如果玛希利·斯科波在她回合内复制了该能力，她可以将你的一个工程师视为建筑师。",
          "Take the depicted Special Technology tile at the beginning of the game. When you perform an External Works action, you can place the required Machineries on your Construction Wheel together with this tile. Then, rotate the Wheel by one segment. You don't have to place Engineers in a construction action space on your Company Board, but you still have to place them on the connected External Works action space.":
            "游戏开始时拿取图示的特殊科技板块。当你执行一个外派工程行动时，你能将本板块与所需机械一起放置到你的施工轮盘上，就好像你在执行一个施工行动。你不必在公司面板的施工行动位上放置工程师，但你依旧需要将工程师放在外派工程行动位上。",
          "You can copy the special ability without using the corresponding special Technology tile. Just put the number of Machineries required by the External Work in the open segment of the Construction Wheel. Then, rotate your Wheel by one segment.":
            "如果玛希利·斯科波在她回合内复制了该能力，她不需要在施工轮盘中放入任何板块，只需将外派工程所需的机械放入施工轮盘中。",
          "When you produce less than 4 Energy Units with a production action, you produce 4 Energy Units Instead. Multiply the total of Water Drops by the value of the Conduit that you are using. If the total is three or less you should consider the total to be 4. Then you must apply any bonus/minus of the action symbol and bonus of your Company Board.":
            "当你由于生产行动产出能源单位时，若少于4点则始终视为产出了4点能源单位。然后，你必须加上行动符号的奖励/惩罚以及你公司面板的奖励。",
          "You have a personal action space. When it's your turn during the Actions Phase, you can place 1 Engineer on this space to immediately produce an amount of Energy Units equal to the number of Water Drops currently held in your Dams, without moving them; don't add any bonus to this production. You can use these Energy Units to fulfill a Contract and to advance on the Energy Track.":
            "你拥有额外的行动位。你可以放置一个工人在专属行动位，立刻生产等于你大坝上水滴数量的电量，该电量可以用于完成合约。你无需移除大坝上的水滴，但同时也不能修正这个发电量。",
          "You can take the Wu Fang special action by placing one of your Engineers in the Bank space and resolving the special action (you don't get ang Credit from the Bank)":
            "如果玛希利·斯科波在她回合内复制了该能力，她需要额外放置一个工程师在银行，并立刻触发吴芳的能力。",
          "You have a personal special ability that you can activate placing 1 Engineer on the action space of this tile. If you use it a second time during the same round, you must also pay 3 Credits. When you activate it, you can copy another Executive Officer's special ability.":
            "你拥有专属行动位。你可以放置1个工程师到这个行动位来激活你的特殊能力。当你激活这个能力时，你立刻复制另一位执行官的特殊能力。",
          "Put workers on this board is a fast action that you do before the normal action.":
            "该行动是快速行动，复制能力后你可以正常执行其它行动。",
          "You have an extra Construction space. You can use it one time per round and it works exactly like the Construction spaces on the Company boards. This means that you could make five construction actions per round - or save Engineers and/or Credits by using this action space instead of an action space on your Company Board.":
            "你拥有额外的行动位。这个行动位和公司面板上的建造位完全一样。这意味着你可以在一个轮次内完成至多5次建造，同时可以节约工程师（和金钱）。",
          "You can take the Construction action by placing 2 of your free Engineers in thr Bank space and resolving the Construction. You don't get any Credit from the Bank by doing so.":
            "如果玛希利·斯科波在她回合内复制了该能力，他可以将2个工程师放置到本卡牌上来执行一次建造行动。",
          "You can build your Conduits using Concrete Mixers instead of Excavators. If you use this ability the Conduit coses 1 Concrete Mixer multiplied by the Conduit production value. You cannot mix the two Machineries to pay for a Conduit.":
            "你能用混凝土搅拌机代替挖掘机来建造你的水道。如果你使用这个能力，水道的建造费用为1个混凝土搅拌机乘以水道产值。你不能用两种机械混合支付水道的建造费用。",
          "Whenever you build a structure you can pay 3 Credits instead of a requested Machinery. You can use this ability as many times as you want, even paying only in Credits. Put the Credits in the general supply, not in the Construction Wheel.":
            "每当你建造一个建筑时，你可以支付3资金代替一个所需的机械。你能使用这个能力任意次数，甚至可以仅用资金来支付。将资金放回供应堆，而不是放入施工轮盘。",
          "Your level 3 Dams can hold up to 4 Water Drops. Your level 1 and level 2 Dams can hold 1 or 2 Water Drops respectively, as for the basic rules.":
            "你的3级水坝可以保留4颗水滴。你的1级和2级水坝分别保留1或2颗水滴，参照基本规则。",
          "Your level 3 Dams can collect up to 4 Water Drops for the duration of the current turn and as long as the 4 Water Drops don't leave the Dam.":
            "如果玛希利·斯科波在她回合内复制了该能力，在当回合期间她的3级水坝能保留至多4颗水滴，并且只要这4颗水滴不离开水坝就能一直保留。",
          "You have a personal action space on this Executive Officer tile. When it's your turn during the Actions Phase, you can place 1 Engineer here to perform the special action of a Private Building that you have activated. You still can perform the same Private Building action using its normal action spaces. Therefore, this Executive Officer allows you to perform the same Private Building special action twice in the same round.":
            "你拥有额外的行动位。你可以放置1个工程师，以执行一个你已激活的私人楼宇的特殊行动。你依旧可以使用该私人楼宇的正常行动位来执行其特殊行动。",
          "You can perform the special action of a Private Building tile you have activated by placing one of your Engineers in the Bank. You don't receive any Credit from the Bank.":
            "如果玛希利·斯科波在她回合内复制了该能力，她需要额外放置一个工程师在银行，复制执行一块自己已激活私人楼宇板块的特殊行动。",
          "When you perform a production action and fulfill a Contract with a lower value than the energy produced, move your marker on the Energy Track only by the exceeding value. During the End of Round Phase, move your marker back on the Energy Track to the lower limit of the current round section (only if you reached it). Otherwise, don't move your marker back.":
            "当你执行一次生产行动并且完成合约时，你的能源指示物仅在能源轨上移动等同于溢出电量的步数。每轮次结束后，如果你的能源指示物位于当前轮次相对应的区段中（或更远），你只需要移回该区段的起始位置。否则，你不需要移动能源指示物。",
          "If you fulfill a Contract with production action, move your marker on the Energy Track only by the exceeding value and keep the Contract aside. At the beginning of next round, move your marker up by the Contract's value.":
            "如果玛希利·斯科波在她回合内复制了该能力并完成了合约，则她只移动溢出电量的步数，同时将合约放在一旁。在下个轮次开始时，根据合约的电量向前移动能源指示物。",
          "Take the depicted special Technology tile at the beginning of the game. When you use this Technology tile you can copy another Technology tile of your choice on your Construction Wheel. This special tile copies both the main building effect and the special effect of the copied tile.":
            "游戏开始时拿取图示的特殊科技板块。当你使用这块科技板块时，你能复制你施工轮盘上另一块科技板块的效果。这个特殊板块会完全复制被复制板块的主要建造效果以及特殊效果。",
          "You can copy another Technology tile on your Construction Wheel. To do so, you don't need to insert any tile in the Construction Wheel. You still have to insert thr required amount og Machineries.":
            "如果玛希利·斯科波在她回合内复制了该能力，她可以复制她施工轮盘上另一块科技板块。这么做的话，她不需要在施工轮盘中放入任何板块，但仍需放入所需数量的机械。",
          "Whenever you place Water Drops on the Headstreams, you can decide to make them flow immediately (you need to decide for each single Wate Drop). When you are supposed to place Water Drops that should flow immediately on the Headstreams, you can place them directly in one of your Dams with Enough Capacity to hold them (you need to decide for each single Water Drop).":
            "每当你将水滴放置到水源板块时，你可以选择是否让它向下流动。每当你的水滴需要立刻下落时，你可以直接将它放在你的任何一个仍能蓄水的大坝上。",
          "You start the game with no Excavators and no Concrete Mixers; instead, you receive the 8 Excamixers. You can use these special Machineries as wildcards - they count both as Excavators or Concrete Mixers.":
            "游戏开始时你不会获得挖掘机和混凝土搅拌机，改为获得8个挖掘搅拌机。挖掘搅拌机既可以视为挖掘机，也可以视为混凝土搅拌机。",
          "Your Machineries count as Excamixers for the current turn. They lose this status at the end of the turn.":
            "如果玛希利·斯科波在她回合内复制了该能力，当回合中她的所有机械均视为挖掘搅拌机。",
          "Your Bases always cost 3 Excavators, no matter which area of the Map you build them. Your Elevations costs depend on the area of the Map, as for the basic rule.":
            "你坝基的建筑费用始终是3个挖掘机。无论你在地图的哪个区域建造。你坝身的建造费用依旧取决于地图的区域，参照基本规则。",
          "If you are playing with German and your special ability is active, in both production action you can produce at least 4 Energy Unit":
            "如果你触发了德国的发电站能力，那么两次发电你最少都可以生产4点能源单位。",

          "G.O.A.T": "目前最强执行官",
          "Good choice to solve water shortage": "可以有效解决缺水问题",
          "Start with only 8 Machines is a huge limitation. Need some special startup strategies to achieve his flexibility.":
            "初始8资源，使用难度较大，需要特殊思路才能发挥8紫的灵活性。",
          "With Special Tech tile Base I, you can build 2 bases in Round 1, and 4 or even 5 bases in Round 2.":
            "配合坝基科技板可以做到r1双坝,r2 4-5坝",
          "Level 3 Dam + 4 Water = National Contract": "4水3级管可发国家订单",
          "Quite hard to play. Depends on the Private Buildings and the Bonus tiles.":
            "操作难度高,取决于房子板和贴板",
          "No description yet.": "暂无描述",
          "Can unlock the income in horizontal direction fastly, or obtain plenty of VPs with age III special Tech tiles.":
            "可以快速横向解锁建筑奖励,配合得分板科技板可以多次刷分",
          "Depends on the usability of other Executive Officers on play, yet starts with 9 Credits is good enough, which provides enough flexibility after purchasing special Tech tiles.":
            "此能力强度取决于场上工具人强度,初始的9元巨款作为白板也是很强力的,可以在r1买完5元科技板之后还有其它资金操作空间",
          "Although he can save some Engineers...": "虽然建造能省",
          "Not hard to construct Value 5 Conduit. However, there is also a trade-off between Elevators, conduits and Power Plants.":
            "5级管无压力,但是坝身,管,电站不可兼得",
          "Can be surprisingly useful with some Company's incomes or special Tech tiles.":
            "配合部分收入奖励和科技可能有奇效",
          "Value 1 Conduit + 1 water = a yellow Contract!":
            "1级管1水发6可以做到中级订单",
          "Since water usually be gathered from Round 2, this ability can be used almost 4 times. Good synergy with special Tech tile Elevator II, which can provide 10 Energy Units in maximum. In early stages, Machines and Rotates in cheap contracts can save the construction of Power Plants and let you focus on achieving incomes from Bases and Elevators.":
            "由于r1通常没水,技能大约使用4次,配合坝基水科技有奇效,最高可以全坝蓄10水发10电,前期2,3,4电的资源和转订单可以省下造电站的行动以专心开坝基坝身解锁奖励",
          "Extremely Good with Private Building Loan Agency, which allow your to build and activate the ability in one turn. Besides, if you're the first or second order in Round 2, you can even take 2 External Works in one turn. Sometimes this ability can be used to drop a water and perform a production.":
            "在有贷款机构的情况下r1造小房子连动秒外派有奇效,r2前置位贷款+外派双秒外派效果绝佳.偶尔用于落1水抢发电",
          "with Connection with Neutral Dams, you can finish National Contracts quickly.":
            "背造中立坝,在没有卷发电的情况下可以快速完成国家订单",
          "": "",
          "location plain": "平原",
          "location hills": "丘陵",
          "location mountain": "山脉",
          "location plainhills": "平原/丘陵",
          "location na": "任意",

          Contract: "合约",
          "External Work": "外派",
          "For mobile phone users, you can scroll and click any icon to see more information.":
            "对于手机用户，你可以左滑或者点击屏幕的任何按钮以查看更多信息。",
        },
      },
    },
  });

export default i18n;
