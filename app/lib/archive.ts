import { sourceLinks } from '@/app/lib/site';

export type Evidence = {
  label: '公开来源' | '既有个人资料';
  href?: string;
  note: string;
};

export type ArchiveRecord = {
  id: string;
  period: string;
  category: string;
  title: string;
  summary: string;
  personalRole?: string;
  evidence: Evidence;
};

export const awards: ArchiveRecord[] = [
  {
    id: 'aerospace-national-2026', period: '2026.08', category: '科技竞赛',
    title: '全国青少年航天创新大赛全国总决赛高中组一等奖',
    summary: '张译轩作为项目主要负责人，与协作成员付家瑄凭《面向月球/火星基地的AI资源管家系统》获奖。',
    personalRole: '主要负责人 / 第一作者：张译轩',
    evidence: { label: '公开来源', href: sourceLinks.national, note: '教育公众号公开报道' },
  },
  {
    id: 'aerospace-regional-2026', period: '2026.07', category: '科技竞赛',
    title: '全国青少年航天创新大赛京津冀赛区选拔赛高中组一等奖',
    summary: '张译轩作为项目主要负责人，凭《面向月球/火星基地的AI资源管家系统》获奖，并晋级全国总决赛。',
    personalRole: '主要负责人 / 第一作者：张译轩',
    evidence: { label: '公开来源', href: sourceLinks.regional, note: '教育公众号公开报道' },
  },
  {
    id: 'materials-finalist-2026', period: '2026.08', category: '科技竞赛',
    title: '全球AI+材料创新应用大赛入围决赛',
    summary: '张译轩的《智材学伴——面向中学生的AI材料科学探究式学习平台》通过初赛、入围决赛；此为入围记录，并非获奖记录。',
    personalRole: '主要负责人 / 第一作者：张译轩',
    evidence: { label: '公开来源', href: sourceLinks.materials, note: '教育公众号公开报道' },
  },
  {
    id: 'baoding-innovation-2026', period: '2026.03', category: '科技竞赛',
    title: '第40届保定市青少年科技创新大赛三等奖',
    summary: '张译轩作为项目主要负责人，与协作成员田运嘉、付家瑄以《广深组合型人工智能交通路网分析系统》获奖；名单列为集体项目。',
    personalRole: '主要负责人 / 第一作者：张译轩',
    evidence: { label: '公开来源', href: sourceLinks.localInnovation, note: '公开 PDF 获奖项目名单' },
  },
  {
    id: 'aircraft-2025', period: '2025', category: '科技竞赛',
    title: '“亦航杯”全国中小学飞行器数智挑战赛全国银牌、团队优胜奖',
    summary: '张译轩带领保定三中科技队成员付家瑄、田运嘉在“协同运用赛道巅峰对决”获银牌；同团队在“协同运用赛道全能挑战”获优胜奖。',
    personalRole: '保定三中科技队队长 / 获奖成员：张译轩',
    evidence: { label: '公开来源', href: sourceLinks.aircraft, note: '保定三中公众号原文' },
  },
  {
    id: 'robotics-2024', period: '2024', category: '科技竞赛',
    title: '第16届河北省青少年机器人竞赛二等奖',
    summary: '张译轩参与的机器人竞赛成绩；待补充公开名单、证书脱敏图或报道链接后可升级为公开核验记录。',
    personalRole: '参赛成员：张译轩',
    evidence: { label: '既有个人资料', note: '尚未提供公开链接' },
  },
];

export const projects: ArchiveRecord[] = [
  {
    id: 'ai-resource-manager', period: '2026', category: 'AI × 航空航天',
    title: '面向月球/火星基地的AI资源管家系统',
    summary: '张译轩作为主要负责人和第一作者，面向未来深空基地资源受限场景，探索资源监测、风险判断、智能分析、调度建议与反馈构成的系统闭环。',
    personalRole: '主要负责人 / 第一作者：张译轩',
    evidence: { label: '公开来源', href: sourceLinks.national, note: '教育公众号公开报道' },
  },
  {
    id: 'zhicai-xueban', period: '2026', category: 'AI × 材料科学 × 教育',
    title: '智材学伴——面向中学生的AI材料科学探究式学习平台',
    summary: '张译轩作为主要负责人和第一作者参加全球AI+材料创新应用大赛AI+教育赛道，通过初赛、入围决赛；公开报道还记录了后续训练营与技术沙龙学习。',
    personalRole: '主要负责人 / 第一作者：张译轩',
    evidence: { label: '公开来源', href: sourceLinks.materials, note: '教育公众号公开报道' },
  },
  {
    id: 'traffic-network', period: '2026', category: '人工智能 × 交通系统',
    title: '广深组合型人工智能交通路网分析系统',
    summary: '张译轩作为主要负责人和第一作者完成的计算机科学与信息技术方向集体项目，获第40届保定市青少年科技创新大赛三等奖。',
    personalRole: '主要负责人 / 第一作者：张译轩',
    evidence: { label: '公开来源', href: sourceLinks.localInnovation, note: '公开 PDF 获奖项目名单' },
  },
];

export const campusPractice: ArchiveRecord[] = [
  {
    id: 'student-union-publicity', period: '在校期间', category: '校园职务',
    title: '学生会宣传部部长',
    summary: '作为学生会宣传部部长参与校园宣传与活动组织相关工作；不公开具体班级、工作群、日程或同学个人信息。',
    evidence: { label: '既有个人资料', note: '校园经历记录' },
  },
  {
    id: 'science-festival', period: '在校期间', category: '科技活动',
    title: '参与学校科技节与科技市集活动',
    summary: '通过校内科技活动进行项目展示、科普交流与实践复盘。',
    evidence: { label: '既有个人资料', note: '校园科技活动记录' },
  },
  {
    id: 'long-term-practice', period: '长期实践', category: '科技实践',
    title: 'AI、智能体、航空航天、机器人与科技内容持续实践',
    summary: '围绕人工智能、智能系统、航空航天和机器人开展项目探索，并进行网站建设与科技内容整理。',
    evidence: { label: '既有个人资料', note: '长期实践记录' },
  },
  {
    id: 'innovation-camp', period: '在校期间', category: '科创学习',
    title: '参与AI+材料创新应用相关科创训练营',
    summary: '作为AI+材料创新应用方向学习与项目实践的补充经历；不将训练营参与表述为获奖。',
    evidence: { label: '公开来源', href: sourceLinks.materials, note: '教育公众号公开报道' },
  },
  {
    id: 'materials-salons', period: '2026.06 — 07', category: '科创学习',
    title: '参与AI+材料创新应用大赛技术沙龙',
    summary: '公开报道记录其于2026年6月、7月参与两期技术交流活动，了解人工智能科研基础设施、大模型应用及材料产业AI应用等方向。',
    evidence: { label: '公开来源', href: sourceLinks.materials, note: '教育公众号公开报道' },
  },
];

export const timeline: ArchiveRecord[] = [
  awards.find((item) => item.id === 'robotics-2024')!,
  awards.find((item) => item.id === 'aircraft-2025')!,
  awards.find((item) => item.id === 'baoding-innovation-2026')!,
  awards.find((item) => item.id === 'aerospace-regional-2026')!,
  awards.find((item) => item.id === 'aerospace-national-2026')!,
  awards.find((item) => item.id === 'materials-finalist-2026')!,
  ...campusPractice,
];
