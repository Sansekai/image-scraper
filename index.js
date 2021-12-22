import gis from 'g-i-s'
import readlineSync from 'readline-sync'
import chalk from 'chalk'

console.log(chalk.green('\n--------------------\nImage Scraper\nBy Yusril\nhttps://nikkixploit.com\n--------------------\n'))

var q = readlineSync.question('Masukkan kata kunci gambar yang ingin kamu cari: ')
gis(q, logResults);
function logResults(error, results) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(chalk.green(JSON.stringify(results, null, '  ')));
    console.log('\n')
  }
}
