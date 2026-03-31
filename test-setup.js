// 测试环境设置
console.log('🔍 开始测试环境...');

try {
  // 检查 package.json
  const packageJson = require('./package.json');
  console.log('✅ package.json 读取成功');
  console.log('📦 项目名称:', packageJson.name);
  console.log('📝 项目描述:', packageJson.description);

  // 检查必要依赖
  const requiredDeps = ['react', 'react-dom', 'react-router-dom'];
  const requiredDevDeps = ['vite', 'tailwindcss', 'typescript'];

  console.log('\n🔧 检查依赖...');
  requiredDeps.forEach(dep => {
    if (packageJson.dependencies[dep]) {
      console.log(`✅ ${dep}: ${packageJson.dependencies[dep]}`);
    } else {
      console.log(`❌ ${dep}: 未找到`);
    }
  });

  requiredDevDeps.forEach(dep => {
    if (packageJson.devDependencies[dep]) {
      console.log(`✅ ${dep}: ${packageJson.devDependencies[dep]}`);
    } else {
      console.log(`❌ ${dep}: 未找到`);
    }
  });

  console.log('\n🎉 环境检查完成！');
  console.log('\n📋 下一步操作：');
  console.log('1. 运行: npm install');
  console.log('2. 运行: npm run dev');
  console.log('3. 访问: http://localhost:3000');

} catch (error) {
  console.error('❌ 测试失败:', error.message);
}