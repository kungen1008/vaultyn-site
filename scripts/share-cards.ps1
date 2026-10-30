Add-Type -AssemblyName System.Drawing

function New-RoundedRectPath([System.Drawing.RectangleF]$Rect, [float]$Radius) {
  $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
  $diameter = $Radius * 2
  $path.AddArc($Rect.X, $Rect.Y, $diameter, $diameter, 180, 90)
  $path.AddArc($Rect.Right - $diameter, $Rect.Y, $diameter, $diameter, 270, 90)
  $path.AddArc($Rect.Right - $diameter, $Rect.Bottom - $diameter, $diameter, $diameter, 0, 90)
  $path.AddArc($Rect.X, $Rect.Bottom - $diameter, $diameter, $diameter, 90, 90)
  $path.CloseFigure()
  return $path
}

function Fill-RoundedRect($Graphics, $Brush, [System.Drawing.RectangleF]$Rect, [float]$Radius) {
  $path = New-RoundedRectPath $Rect $Radius
  $Graphics.FillPath($Brush, $path)
  $path.Dispose()
}

function Draw-Text($Graphics, [string]$Text, [string]$Family, [float]$Size, $Style, $Brush, [float]$X, [float]$Y) {
  $font = [System.Drawing.Font]::new($Family, $Size, $Style, [System.Drawing.GraphicsUnit]::Pixel)
  $Graphics.DrawString($Text, $font, $Brush, $X, $Y)
  $font.Dispose()
}

$outputDir = Join-Path $PSScriptRoot '..\public\share'
$logoPath = Join-Path $PSScriptRoot '..\public\brand\vaultyn-icon.png'
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null
$cards = @(
  @{ Name = 'zh-v2'; Headline = '每个账号，都记得清清楚楚。'; Subtitle = '密码、两步验证、备用码和账号关系，一个地方安全记全。'; Tags = @('本地加密', '无需注册', '多台 Mac 同步'); Panel = @('安全检查', '账号关系', '到期提醒') },
  @{ Name = 'zh-hant-v2'; Headline = '每個帳號，都記得清清楚楚。'; Subtitle = '密碼、兩步驗證、備用碼和帳號關係，一個地方安全記全。'; Tags = @('本機加密', '不用註冊', '多台 Mac 同步'); Panel = @('安全檢查', '帳號關係', '到期提醒') },
  @{ Name = 'en-v2'; Headline = 'Know every account.'; Subtitle = 'Passwords, 2FA, backup codes and account relationships — encrypted together on your Mac.'; Tags = @('Local encryption', 'No sign-up', 'Multi-Mac sync'); Panel = @('Security check', 'Account map', 'Expiry reminders') }
)

$logo = [System.Drawing.Image]::FromFile($logoPath)
foreach ($card in $cards) {
  $bitmap = [System.Drawing.Bitmap]::new(1200, 630)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  $background = [System.Drawing.Drawing2D.LinearGradientBrush]::new([System.Drawing.Rectangle]::new(0, 0, 1200, 630), [System.Drawing.Color]::FromArgb(5, 18, 38), [System.Drawing.Color]::FromArgb(20, 61, 123), 18)
  $graphics.FillRectangle($background, 0, 0, 1200, 630)
  $graphics.FillEllipse([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(38, 54, 177, 255)), 760, -270, 650, 650)
  $graphics.FillEllipse([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(26, 99, 102, 241)), -240, 400, 600, 500)
  $gridPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(16, 190, 220, 255), 1)
  for ($x = 0; $x -lt 1200; $x += 64) { $graphics.DrawLine($gridPen, $x, 0, $x, 630) }
  for ($y = 0; $y -lt 630; $y += 64) { $graphics.DrawLine($gridPen, 0, $y, 1200, $y) }

  $graphics.DrawImage($logo, [System.Drawing.Rectangle]::new(68, 58, 92, 92))
  Draw-Text $graphics 'Vaultyn' 'Segoe UI' 44 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Brushes]::White) 178 69
  $macBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(205, 222, 242, 255))
  Draw-Text $graphics 'FOR MAC' 'Segoe UI' 16 ([System.Drawing.FontStyle]::Bold) $macBrush 181 121
  $subBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(218, 225, 239, 255))
  $headlineSize = if ($card.Name -eq 'en-v2') { 55 } else { 48 }
  Draw-Text $graphics $card.Headline 'Microsoft YaHei UI' $headlineSize ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Brushes]::White) 68 204
  $subFont = [System.Drawing.Font]::new('Microsoft YaHei UI', 24, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
  $subFormat = [System.Drawing.StringFormat]::new()
  $subFormat.Trimming = [System.Drawing.StringTrimming]::Word
  $graphics.DrawString($card.Subtitle, $subFont, $subBrush, [System.Drawing.RectangleF]::new(70, 292, 565, 90), $subFormat)
  $subFont.Dispose(); $subFormat.Dispose()

  $chipX = 68
  foreach ($tag in $card.Tags) {
    $chipFont = [System.Drawing.Font]::new('Microsoft YaHei UI', 16, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
    $chipWidth = [Math]::Ceiling($graphics.MeasureString($tag, $chipFont).Width) + 44
    $chipBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(33, 255, 255, 255))
    Fill-RoundedRect $graphics $chipBrush ([System.Drawing.RectangleF]::new($chipX, 407, $chipWidth, 42)) 21
    $graphics.FillEllipse([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(116, 223, 255)), $chipX + 14, 423, 9, 9)
    Draw-Text $graphics $tag 'Microsoft YaHei UI' 16 ([System.Drawing.FontStyle]::Regular) ([System.Drawing.Brushes]::White) ($chipX + 29) 417
    $chipX += $chipWidth + 10
    $chipFont.Dispose(); $chipBrush.Dispose()
  }
  $urlBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(220, 204, 225, 255))
  Draw-Text $graphics 'vaultyn.com' 'Segoe UI' 21 ([System.Drawing.FontStyle]::Regular) $urlBrush 70 536
  $graphics.DrawLine([System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(120, 110, 210, 255), 3), 70, 574, 238, 574)

  $shadowBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(72, 0, 8, 24))
  Fill-RoundedRect $graphics $shadowBrush ([System.Drawing.RectangleF]::new(683, 68, 468, 500)) 30
  $windowBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(247, 250, 255))
  Fill-RoundedRect $graphics $windowBrush ([System.Drawing.RectangleF]::new(669, 53, 468, 500)) 30
  $graphics.DrawImage($logo, [System.Drawing.Rectangle]::new(700, 78, 42, 42))
  Draw-Text $graphics 'Vaultyn' 'Segoe UI' 24 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(20, 31, 52))) 754 83
  $graphics.FillEllipse([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 95, 86)), 1060, 88, 12, 12)
  $graphics.FillEllipse([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 189, 46)), 1080, 88, 12, 12)
  $graphics.FillEllipse([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(39, 201, 63)), 1100, 88, 12, 12)
  $graphics.DrawLine([System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(228, 234, 244), 1), 669, 137, 1137, 137)
  $sideBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(239, 244, 251))
  Fill-RoundedRect $graphics $sideBrush ([System.Drawing.RectangleF]::new(692, 160, 112, 356)) 20
  $sideColors = @([System.Drawing.Color]::FromArgb(49, 137, 255), [System.Drawing.Color]::FromArgb(104, 91, 231), [System.Drawing.Color]::FromArgb(0, 184, 148), [System.Drawing.Color]::FromArgb(232, 67, 147), [System.Drawing.Color]::FromArgb(253, 166, 15), [System.Drawing.Color]::FromArgb(99, 110, 114))
  for ($i = 0; $i -lt 6; $i++) {
    $graphics.FillEllipse([System.Drawing.SolidBrush]::new($sideColors[$i]), 710, 187 + ($i * 48), 17, 17)
    $graphics.FillRectangle([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(180, 190, 203)), 739, 191 + ($i * 48), 42, 8)
  }
  Draw-Text $graphics $card.Panel[0] 'Microsoft YaHei UI' 22 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(21, 33, 55))) 831 167
  $alertColors = @([System.Drawing.Color]::FromArgb(255, 244, 230), [System.Drawing.Color]::FromArgb(235, 242, 255), [System.Drawing.Color]::FromArgb(234, 249, 243))
  $dotColors = @([System.Drawing.Color]::FromArgb(245, 158, 11), [System.Drawing.Color]::FromArgb(59, 130, 246), [System.Drawing.Color]::FromArgb(16, 185, 129))
  for ($i = 0; $i -lt 3; $i++) {
    $rowY = 211 + ($i * 73)
    Fill-RoundedRect $graphics ([System.Drawing.SolidBrush]::new($alertColors[$i])) ([System.Drawing.RectangleF]::new(826, $rowY, 279, 58)) 16
    $graphics.FillEllipse([System.Drawing.SolidBrush]::new($dotColors[$i]), 844, $rowY + 19, 20, 20)
    Draw-Text $graphics $card.Panel[$i] 'Microsoft YaHei UI' 16 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(45, 56, 76))) 878 ($rowY + 17)
  }
  $secureBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(20, 122, 255))
  Fill-RoundedRect $graphics $secureBrush ([System.Drawing.RectangleF]::new(826, 447, 279, 70)) 20
  Draw-Text $graphics 'AES-256-GCM' 'Segoe UI' 21 ([System.Drawing.FontStyle]::Bold) ([System.Drawing.Brushes]::White) 849 460
  Draw-Text $graphics 'ARGON2ID  •  LOCAL-FIRST' 'Segoe UI' 12 ([System.Drawing.FontStyle]::Regular) ([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(205, 232, 255))) 849 489

  $path = Join-Path $outputDir ($card.Name + '.png')
  $bitmap.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $graphics.Dispose(); $bitmap.Dispose(); $background.Dispose(); $gridPen.Dispose(); $macBrush.Dispose(); $subBrush.Dispose(); $urlBrush.Dispose(); $shadowBrush.Dispose(); $windowBrush.Dispose(); $sideBrush.Dispose(); $secureBrush.Dispose()
}
$logo.Dispose()
Write-Output 'Generated 3 redesigned social share cards in public/share/.'
