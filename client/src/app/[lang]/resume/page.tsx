import { Button, Footer, Header } from '@/components'
import { type Locale } from '@/i18n.config'
import { getDictionary } from '@/utils/dictionaries.utils'
import { type Metadata } from 'next'
import TabsContent from './_components/Tabs'
import { tabsContentBuilder } from './_lib/tabs.lib'

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { navigation } = await getDictionary(props.params.lang)
  return {
    title: `${navigation.resume} | Thomas Barenghi`
  }
}

interface Props {
  params: {
    lang: Locale
  }
}

const Resume = async ({ params: { lang } }: Props) => {
  const { page, navigation } = await getDictionary(lang)
  const content = await tabsContentBuilder({ lang })
  const cvLink =
    lang === 'en'
      ? '/pdf/CV Thomas Barenghi EN.pdf'
      : '/pdf/CV Thomas Barenghi ES.pdf'
  return (
    <>
      <Header theme='light' lang={lang} navigation={navigation} />
      <main className='mt-[95px] flex flex-col items-center gap-28 py-10'>
        <article className='padding-x-style2 grid gap-12 2xl:container lg:grid-cols-[auto,_60%] lg:gap-16'>
          <section>
            <div className='mt-1  flex flex-col items-start  justify-start gap-3'>
              <div className='flex  w-full flex-col gap-1'>
                <h1 className='text-title1 font-semibold '>Thomas Barenghi</h1>
                <p className='text-title3 w-full !text-xl lg:w-[75%]'>
                  {page.resume.jobTitle}
                </p>
              </div>
              <div>
                <p className='text-body w-full'>{page.resume.description}</p>
              </div>
              <Button
                title={page.resume.download}
                href={cvLink}
                target='_blank'
              />
            </div>
          </section>
          <section className='flex flex-col gap-5'>
            <TabsContent content={content} />
          </section>
        </article>
      </main>
      <Footer lang={lang} />
    </>
  )
}

export default Resume
